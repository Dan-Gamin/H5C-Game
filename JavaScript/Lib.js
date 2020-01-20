const Keyboard = {}
window.addEventListener("keydown",function (e) {
    Keyboard["D"] = e
})
class Component
{
    constructor(x,y,width,height,style = "black",shape = "rect",gravity = 0,keyboard = false,text = "")
    {
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.style = style
        this.grav = gravity / 100
        this.gravs = 0
        this.sx = 0
        this.sy = 0
        if (text)
        {
            this.text = text
        }
        switch (shape) {
            case "UItext":
                this.update = () => {
                    c.font = this.style
                    c.fillText(this.text,this.x,this.y)
                }
            default:
                this.update = () => {
                    this.gravs += this.grav;
                    this.x += this.sx;
                    this.y += this.sy + this.gravs;


                    c.fillStyle = this.style
                    c.fillRect(this.x,this.y,this.w,this.h)
                }
                break;
        }       
    }
    get area() 
    {
        return this.x * this.y
    }

}
