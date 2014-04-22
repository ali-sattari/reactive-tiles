document.addEvent('domready', function(){
	var imageSrcs = $$('div.tiles div.tile > img').get('src');
	
	$$('div.tiles').spin({
		message: 'Loading images... (' + imageSrcs.length + ')',
		'class': 'tilesLoading'
	});
	
	var loadingMsg = $$('div.tilesLoading p.spinner-msg')[0];
	Asset.images(imageSrcs, {
		onProgress: function(counter, index){
			loadingMsg.set('text', 'Loading images... (' + counter + '/' + imageSrcs.length + ')');
		},
		onComplete: function(){
			$$('div.tiles').unspin();
			
			new reactiveTiles({
				states: tileStates
			});
		}
	});
});
