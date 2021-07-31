class Cannon
{
    constructor(x,y,w,h,angle)
    {

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
    }


     display()
   {
       fill("silver");
       push(); 
       translate(this.x, this.y)
       rotate(this.angle);
       rect(-12, -20, this.w, this.h);
       pop();
       arc(this.x-53, this.y+85, 170, 230,PI, TWO_PI);
   }    
     
}