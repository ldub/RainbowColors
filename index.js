var rainbowFrequency = 0.01;
(function () {
    var _, canv, ctx, changeInterval, changeColor, frameNumber, genRainbowColor;
    _ = function (id) {
        return document.getElementById(id);
    };
    //rainbowFrequency = 0.01;
    canv = _('canv');
    ctx = canv.getContext('2d');
    frameNumber = 1;
    var body = document.body,
        html = document.documentElement;

    var canvHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    var canvWidth = document.body.clientWidth;

    changeColor = function() {
        //16777215 is FFFFFF in decimal
        var colorString = '#'+Math.floor(Math.random()*16777215).toString(16);
        frameNumber++;
        var rainbowColor = genRainbowColor(frameNumber);

        var rainbowString = "rgb(" + rainbowColor[0] + "," + rainbowColor[1] + "," + rainbowColor[2] + ")";
        ctx.fillStyle=rainbowString;
        ctx.fillRect(0,0,canvWidth,canvHeight);
    }

    genRainbowColor = function(size) {
        var len = 50; var center = 128; var width = 127;
        var phase1 = 0; var phase2 = 2; var phase3 = 4;

        var red   = Math.sin(rainbowFrequency * size + phase1) * width + center;
        var green = Math.sin(rainbowFrequency * size + phase2) * width + center;
        var blue  = Math.sin(rainbowFrequency * size + phase3) * width + center;
        return [Math.round(red), Math.round(green), Math.round(blue)];
    };

    canv.width = canvWidth;
    canv.height = canvHeight;

    changeInterval = setInterval(changeColor, 20);

}).call(this);

function updateFrequency(value) {
    rainbowFrequency = value / 10000;
}