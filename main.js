canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";
function add()
{
  bg=new Image();
  bg.onload=uploadBackground();
  bg.src=background_image;

  r=new Image();
  r.onload=uploadRover();
  r.src=rover_image;
}
function uploadBackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);

}
function uploadRover()
{
    ctx.drawImage(r,0,0,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
  keypressed=e.keyCode;
  console.log(keypressed);
  if(keypressed=='37')
  {
    Left();
    console.log("left");
  }
  if(keypressed=='38')
  {
    Up();
    console.log("up");
  }
  if(keypressed=='39')
  {
    Right();
    console.log("right");
  }
  if(keypressed=='40')
  {
    Down();
    console.log("down");
  }
}
function Up()
{
  if(rover_y>=0)
  {
    rover_y=rover_y-10;
    console.log("when up arrow is pressed, x=" + rover_x + ",y=" + rover_y);
    uploadBackground();
    uploadRover();
    }
}

function Down()
{
  if(rover_y<=500)
  {
    rover_y=rover_y+10;
    console.log("when down arrow is pressed, x=" + rover_x + ",y=" + rover_y);
    uploadBackground();
    uploadRover();
  }

}

function Left()
{
  if (rover_x>=0)
  {
    rover_x=rover_x-10;
    console.log("when left arrow is pressed, x=" + rover_x + ",y=" + rover_y);
    uploadBackground();
    uploadRover();
  }
}

function Right()
{
  if(rover_x<=700)
  {
    rover_x=rover_x+10;
    console.log("when right arrow is pressed, x=" + rover_x + ",y="+ rover_y);
    uploadBackground();
    uploadRover();
  }
}
