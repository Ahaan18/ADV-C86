var canvas = new fabric.Canvas("myCanvas");
x = 10;
y = 10;
block_width = 30;
block_height = 30;
var player = "";
var block = "";
function update(){
fabric.Image.fromURL("player.png",function(Img){
 player = Img;
 player.scaleToWidth(150);
 player.scaleToHeight(140);
 player.set({
     top:y,
     left:x
 });
 canvas.add(player);
});
}
function blck(get_Img){
    fabric.Image.fromURL(get_Img,function(Img){
     block = Img;
     block.scaleToWidth(block_width);
     block.scaleToHeight(block_height);
     block.set({
         top:y,
         left:x
     });
     canvas.add(block);
    });
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
if(keyPressed == '87')
{
blck('wall.jpg');
console.log("w");
}
    }
    function up()
{
if(y >=0)
{
y = y - block_height;
console.log("block image height = " + block_height);
console.log("When Up arrow key is pressed, X = " + x + " , Y = "+y); 
canvas.remove(player);
update();
}
}
