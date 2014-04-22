/***********************************
 reactive tiles class! 
 **********************************/
 reactiveTiles = new Class({
    Implements: Options,
    
    options: {
        container: 'div.tiles', //element or selector
        tiles: 'div.tile', //array of elements or selector
        states: {}, //object containing different state of each element
        contentSelector: 'img',
        contentEffectSelector: 'canvas',
        infoSelector: 'div.info'
    },

/**
 * @constructor
 */
    initialize: function(options){
        this.setOptions(options);
        
        this.canvas = this.iCanHazCanvas();
        this.attached = false;
        
        this.propertyToFunction = {
            'size': 'resize',
            'position': 'move',
            'contentSize': 'contentResize',
            'contentPosition': 'contentMove'
        }
        
        this.morphOptions = {
            fps: 80,
            duration: 1000,
            link: 'cancel',
            transition: 'cubic:in:out'
        }
        
        this.container = typeOf(this.options.container) == 'element' ? this.options.container : $$(this.options.container)[0];
        this.tiles = typeOf(this.options.tiles) == 'array' ? this.options.tiles : this.container.getElements(this.options.tiles);
        
        this.tiles.fade('hide');
        this.container.getElements(this.options.infoSelector).fade('hide');
        
        this.states = new Hash(this.options.states);
        this.normalStates = this.getNormalStates();
        
        if(this.canvas) this.imageEffect();
        
        this.attach();
        
        this.retract(); //initial positioning based on normal state
        this.loadTiles();
        
        this.initialized = true;
    },

/**
 * checks for canvas support
 */
    iCanHazCanvas: function(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    },
    
/**
 * fades in tiles based on delay defined
 */
    loadTiles: function(){
        var self = this;
        this.tiles.each(function(tile){
            var _loadDelay = self.states[tile.get('id')].loadDelay*1000;
            self.show(tile, _loadDelay);
        });
    },
    
/**
 * attaches required events to elements
 */
    attach: function(){
        var self = this;
        
        this.tiles.each(function(tile, i){
            tile.addEvents({
                'mouseenter': function(){
                    this.addClass('over');
                    
                    var _state = self.getState(this.get('id'));
                    if(_state === false){
                        self.retract();
                    }else{
                        self.processStates(_state);
                    }
                    
                    self.toggleInfo(this);
                    self.toggleImages(this, 'over');
                },
                'mouseleave': function(){
                    this.removeClass('over');
                    self.toggleInfo(this);                    
                    self.toggleImages(this, 'out');
                }
            });
            
            tile.store('resize', new Fx.Morph(tile, self.morphOptions));
            tile.store('move', new Fx.Morph(tile, self.morphOptions));
            
            var _tileContent = tile.getElement(self.options.contentSelector);
            _tileContent.store('resize', new Fx.Morph(_tileContent, self.morphOptions));
            _tileContent.store('move', new Fx.Morph(_tileContent, self.morphOptions));
            
            if(self.states[tile.get('id')].imageEffect !== false && self.canvas){
                var _tileContentCanvas = tile.getElement(self.options.contentEffectSelector);
                _tileContentCanvas.store('resize', new Fx.Morph(_tileContentCanvas, self.morphOptions));
                _tileContentCanvas.store('move', new Fx.Morph(_tileContentCanvas, self.morphOptions));
            }
            
            var _tileInfo = tile.getElement(self.options.infoSelector);
            if(_tileInfo) _tileInfo.store('slide', new Fx.Morph(_tileInfo, self.morphOptions));
            
        });
        
        this.container.addEvent('mouseleave', function(){
            self.tiles.removeClass('over');
            self.retract();
        });
        
        this.attached = true;
    },
    
    detach: function(){
        //do we even need this?
        this.attached = false;
    },
/**
 * translates property to function name based on peropertyToFunction object
 * 
 * @params {string} property
 * @return {function}
 */
    getMethod: function(property){ //
        var _fn = this.propertyToFunction[property];
        return this[_fn].bind(this);
    },
/**
 * returns over states associated by a tile in states object
 *
 * @param {string} tile id
 * @return {object} containing each tile state
 */
    getState: function(tile){
        return this.states.get(tile)['over'];
    },

/**
 * returns all normal states
 * @return {object}
 */
    getNormalStates: function(){
        var _normalStates = {};
        this.states.each(function(value, key){
            _normalStates[key] = value.normal;
        });
        
        return _normalStates;
    },

/**
 * processes states and executes apropriate function
 * @param {object} state
 */
    processStates: function(states){
        var self = this;
        Object.each(states, function(state, tile){
            var _tile = self.container.getElement('#' + tile);
            Object.each(state, function(value, property){
                var _method = self.getMethod(property);
                _method(_tile, value);
            });
        });
    },

/**
 * retracts tiles to normal state
 */
    retract: function(){
        this.retracting = true;
        this.processStates(this.normalStates, true);
        this.retracting = false;
    },

/**
 * shows a tile
 * @param {element} tile element
 * @param {int} delay
 */
    show: function(el, delay){
        el.fade.delay(delay, el, 'in');
    },

/**
 * hides a tile
 * @param {element} tile element
 * @param {int} delay
 */
    hide: function(el, delay){
        el.hide.delay(delay, el);
    },

/**
 * resizes a tile
 * @param {element} tile element
 * @param {object} tile dimenstion
 */
    resize: function(el, size){
        el.retrieve('resize').start({
            'width': size.w,
            'height': size.h
        });
        
        var _info = el.getElement(this.options.infoSelector);
        if(_info && !this.retracting && el.hasClass('over')){
            _info.setStyle('width', size.w);
        }
    },

/**
 * moves a tile
 * @param {element} tile element
 * @param {object} target coordination (based on top, left corner of parent)
 */
    move: function(el, target){
        el.retrieve('move').start({
            'left': target.x,
            'top': target.y
        });
    },

/**
 * moves content of a tile
 * @param {element} tile element
 * @param {object} target coordination (based on top, left corner of parent)
 */
    contentMove: function(el, target){
        this.move(el.getElement(this.options.contentSelector), target);
        
        if(this.states[el.get('id')].imageEffect === false || this.canvas === false) return;
        this.move(el.getElement(this.options.contentEffectSelector), target);
    },
    
/**
 * resizes content of a tile
 * @param {element} tile element
 * @param {object} tile dimenstion
 */
    contentResize: function(el, size){
        this.resize(el.getElement(this.options.contentSelector), size);
        
        if(this.states[el.get('id')].imageEffect === false || this.canvas === false) return;
        this.resize(el.getElement(this.options.contentEffectSelector), size);
    },
    
/**
 * shows/hides information box of a tile
 * @param {element} tile element
 */
    toggleInfo: function(el){
        var _info = el.getElement(this.options.infoSelector);
        if(!_info) return;
        
        if(!_info.retrieve('height')){
            _info.store('height', _info.getSize().y);
            _info.fade('show').setStyle('height', 0);
        }
        
        var _height = el.hasClass('over') ? _info.retrieve('height') : 0;
        _info.retrieve('slide').start({'height': _height});
    },
    
    imageEffect: function(){
        var self = this;
        this.tiles.each(function(tile){
            if(self.states[tile.get('id')].imageEffect === false) return;
            
            var img = tile.getElement(self.options.contentSelector);
            tile.adopt(Pixastic.process(img.clone(), 'desaturate', {average: false}));
        });
    },
    
    toggleImages: function(tile, mode){
        var canvas = tile.getElement(this.options.contentEffectSelector);
        if(canvas) canvas.fade('toggle');
    }
});