tileStates = {
    t1: {
        normal: { //normal state of elements
            size: {w: 148, h: 445},
            position: {x: 0, y: 0}, //based on top left corner of containing box
            contentSize: {h: 550},
            contentPosition: {x: -450, y: -30}
        },
        over: { //state that applies when element being hovered by mouse
            t1: { size: {w: 228, h: 476}, position: {x: 0, y: 0}, contentSize: {h: 700}, contentPosition: {x: -550, y: -20} },
            t2: { size: {w: 228, h: 114}, position: {x: 0, y: 476}, contentSize: {w: 240} },
            t3: { position: {x: 228, y: 0}, contentPosition: {x: -50, y: -10} },
            t4: { size: {w: 382, h: 295}, position: {x: 475, y: 0}, contentSize: {h: 330}, contentPosition: {x: -20, y: -20} },
            t5: { size: {w: 195, h: 295}, position: {x: 475, y: 295}, contentSize: {h: 420}, contentPosition: {x: -20, y: -90} },
            t6: { size: {w: 93, h: 295}, position: {x: 857, y: 0}, contentSize: {h: 350}, contentPosition: {x: -210, y: -10} },
            t7: { size: {w: 280, h: 295}, position: {x: 670, y: 295}, contentSize: {h: 450}, contentPosition: {x: -20, y: -50} }
        },
        loadDelay: 0.5 //initial loading delay
    },
    t2: {
        normal: {
            size: {w: 148, h: 145},
            position: {x: 0, y: 445},
            contentSize: {w: 250},
            contentPosition: {x: -10, y: -20}
        },
        over: {
            t1: { size: {w: 235, h: 365}, position: {x: 0, y: 0}, contentSize: {h: 600}, contentPosition: {x: -500, y: -20} },
            t2: { size: {w: 235, h: 225}, position: {x: 0, y: 365}, contentSize: {h: 320}, contentPosition: {x: -10, y: -20}  },
            t3: { position: {x: 235, y: 0}, contentPosition: {x: -80, y: -10} },
            t4: { size: {w: 382, h: 295}, position: {x: 482, y: 0}, contentSize: {h: 330}, contentPosition: {x: 0, y: -10} },
            t5: { size: {w: 173, h: 295}, position: {x: 482, y: 295}, contentSize: {h: 420}, contentPosition: {x: -30, y: -50} },
            t6: { size: {w: 87, h: 295}, position: {x: 863, y: 0}, contentSize: {h: 350}, contentPosition: {x: -230, y: 0} },
            t7: { size: {w: 296, h: 295}, position: {x: 653, y: 295}, contentSize: {h: 450}, contentPosition: {x: -40, y: -30} }
        },
        loadDelay: 0.7
    },
    t3: {
        normal: {
            size: {w: 247, h: 590},
            position: {x: 148, y: 0},
            contentSize: {h: 650},
            contentPosition: {x: -70, y: -30}
        },
        over: false,
        loadDelay: 0.9
    },
    t4: {
        normal: {
            size: {w: 432, h: 295},
            position: {x: 395, y: 0},
            contentSize: {w: 500},
            contentPosition: {x: -30, y: -10}
        },
        over: {
            t1: { size: {w: 111, h: 408}, position: {x: 0, y: 0}, contentSize: {h: 600}, contentPosition: {x: -500, y: -20} },
            t2: { size: {w: 111, h: 178}, position: {x: 0, y: 408}, contentSize: {h: 200}, contentPosition: {x: -10, y: 0}  },
            t3: { position: {x: 111, y: 0}, contentPosition: {x: -50, y: 0} },
            t4: { size: {w: 488, h: 338}, position: {x: 358, y: 0}, contentSize: {h: 370}, contentPosition: {x: 0, y: -10} },
            t5: { size: {w: 253, h: 251}, position: {x: 358, y: 338}, contentSize: {h: 300}, contentPosition: {x: -10, y: -20} },
            t6: { size: {w: 104, h: 338}, position: {x: 846, y: 0}, contentSize: {h: 345}, contentPosition: {x: -230, y: 0} },
            t7: { size: {w: 339, h: 251}, position: {x: 611, y: 338}, contentSize: {h: 300}, contentPosition: {x: -10, y: -30} }
        },
        loadDelay: 1.1
    },
    t5: {
        normal: {
            size: {w: 216, h: 295},
            position: {x: 395, y: 295},
            contentSize: {h: 350},
            contentPosition: {x: -10, y: -30}
        },
        over: {
            t1: { size: {w: 124, h: 445}, position: {x: 0, y: 0}, contentSize: {h: 500}, contentPosition: {x: -420, y: -40} },
            t2: { size: {w: 124, h: 145}, position: {x: 0, y: 445}, contentSize: {h: 160}, contentPosition: {x: -10, y: 0}  },
            t3: { position: {x: 124, y: 0}, contentPosition: {x: -30, y: -10} },
            t4: { size: {w: 456, h: 244}, position: {x: 371, y: 0}, contentSize: {w: 470}, contentPosition: {x: 0, y: -10} },
            t5: { size: {w: 375, h: 346}, position: {x: 371, y: 244}, contentSize: {h: 450}, contentPosition: {x: -10, y: -50} },
            t6: { size: {w: 125, h: 244}, position: {x: 825, y: 0}, contentSize: {h: 345}, contentPosition: {x: -230, y: 0} },
            t7: { size: {w: 204, h: 346}, position: {x: 746, y: 244}, contentSize: {h: 360}, contentPosition: {x: -10, y: 0} }
        },
        loadDelay: 1.3
    },
    t6: {
        normal: {
            size: {w: 123, h: 295},
            position: {x: 827, y: 0},
            contentSize: {h: 350},
            contentPosition: {x: -200, y: -20}
        },
        over: {
            t1: { size: {w: 118, h: 445}, position: {x: 0, y: 0}, contentSize: {h: 500}, contentPosition: {x: -420, y: -40} },
            t2: { size: {w: 118, h: 145}, position: {x: 0, y: 445}, contentSize: {h: 160}, contentPosition: {x: -10, y: 0}  },
            t3: { position: {x: 118, y: 0}, contentPosition: {x: -30, y: -10} },
            t4: { size: {w: 326, h: 381}, position: {x: 365, y: 0}, contentSize: {h: 400}, contentPosition: {x: 0, y: -10} },
            t5: { size: {w: 223, h: 209}, position: {x: 365, y: 381}, contentSize: {w: 350}, contentPosition: {x: -10, y: 0} },
            t6: { size: {w: 259, h: 381}, position: {x: 691, y: 0}, contentSize: {h: 400}, contentPosition: {x: -210, y: 0} },
            t7: { size: {w: 364, h: 209}, position: {x: 586, y: 381}, contentSize: {w: 400}, contentPosition: {x: -10, y: 0} }
        },
        loadDelay: 1.5
    },
    t7: {
        normal: {
            size: {w: 339, h: 295},
            position: {x: 611, y: 295},
            contentSize: {w: 450},
            contentPosition: {x: -10, y: -20}
        },
        over: {
            t1: { size: {w: 108, h: 414}, position: {x: 0, y: 0}, contentSize: {h: 450}, contentPosition: {x: -400, y: -20} },
            t2: { size: {w: 108, h: 176}, position: {x: 0, y: 414}, contentSize: {h: 200}, contentPosition: {x: -10, y: 0}  },
            t3: { position: {x: 108, y: 0}, contentPosition: {x: -30, y: -10} },
            t4: { size: {w: 469, h: 208}, position: {x: 355, y: 0}, contentSize: {w: 520}, contentPosition: {x: 0, y: -10} },
            t5: { size: {w: 222, h: 382}, position: {x: 355, y: 208}, contentSize: {h: 420}, contentPosition: {x: -20, y: 0} },
            t6: { size: {w: 130, h: 208}, position: {x: 820, y: 0}, contentSize: {h: 230}, contentPosition: {x: -110, y: 0} },
            t7: { size: {w: 377, h: 382}, position: {x: 573, y: 208}, contentSize: {h: 400}, contentPosition: {x: -10, y: 0} }
        },
        loadDelay: 1.7
    }
}
