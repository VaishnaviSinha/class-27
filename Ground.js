class Ground extends BaseClass{
constructor(x,y,width,height){
    super(x,y,width,height)
    Matter.Body.setStatic(this.body,true)   
}
display(){
    
    super.display()
}
}
