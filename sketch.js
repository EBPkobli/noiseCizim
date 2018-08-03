var bartis=0.1;
var olcek = 20;
var cols,rows;

var particles = [];

var flowfield;

function setup() {
    createCanvas(1024,800);
    cols = floor(width/olcek);
    rows = floor(height/olcek);
    fr = createP('');
    flowfield = new Array(cols*rows);
    for(var i=0;i<1000;i++)
    {
        particles[i]= new Particle();
    }
}



function draw() {
   
    var yoff = 0;
    var zoff = 0;
    for(var i=0;i<rows;i++)
    {
        var xoff=0;

        for(var j=0;j<cols;j++)
        {
            var index = (j+i*cols);
            var aci = noise(xoff,yoff,zoff)*TWO_PI;
            var v = p5.Vector.fromAngle(aci);
          //  v.setMag(0.);
            flowfield[index]=v;
            xoff+=bartis;

        }
        yoff +=bartis;
        zoff +=0.0004;
        
    }
    bartis +=0.0001;
    for(var i = 0;i<1000;i++)
    {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].kose();
        particles[i].goster();

    }
    fr.html(floor(frameRate()));
}