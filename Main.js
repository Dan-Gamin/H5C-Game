let can = document.getElementsByTagName("canvas")[0]
let c = can.getContext("2d")

can.height = window.innerHeight - 5
can.width = window.innerWidth
can.clear = () => {
    c.clearRect(0,0,can.width,can.height);
}




var player = new Component(50,50,50,50,"black","rect",0,true);



setInterval(function() {
    can.clear();
    player.sx = 0
    
    switch (Keyboard["D"]) {
        case 68:
            player.sx = 1
            break;
    }
    
    player.update();
},10)