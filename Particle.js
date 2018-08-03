
function Particle()
{
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxSpeed = 4;

    this.onceKi = this.pos.copy();
    this.update = function()
    {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);


    }

    this.gucUygula = function(guc)
    {
        this.acc.add(guc);
    }

    this.goster = function()
    {
     
        stroke(0,10);
        strokeWeight(1);
        line(this.pos.x,this.pos.y,this.onceKi.x,this.onceKi.y);
        //point(this.pos.x,this.pos.y)
        this.updatePrev();

    }
    this.updatePrev = function()
    {
        this.onceKi.x = this.pos.x;
        this.onceKi.y = this.pos.y;
    }
    this.kose = function()
    {
        if(this.pos.x >width)
        {
            this.pos.x=0;
            this.updatePrev();
        }
        if(this.pos.x <0)
        {
            this.pos.x=width;
            this.updatePrev();
        }
        if(this.pos.y >height)
        {
            this.pos.y=0;
            this.updatePrev();
        }
        if(this.pos.y <0)
        {
            this.pos.y=height;
            this.updatePrev();
        }


    }

    this.follow = function(vectors)
    {
        var x = floor(this.pos.x/olcek);
        var y = floor(this.pos.y/olcek);
        var index = x+y*cols;
        var guc = vectors[index];

        this.gucUygula(guc);
    }
}