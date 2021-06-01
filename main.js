canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 car1_width=120;
 car1_height=70;
 car1_x=10;
 car1_y=10;
 car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";

 car2_width=120;
 car2_height=70;
 car2_x=10;
 car2_y=200;
 car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";

 backgound_image="https://i.postimg.cc/bv5d35nK/racing.jpg";

 function add() {
     backgound=new Image();
     backgound.onload=upload;
     backgound.src=backgound_image;

     car1=new Image();
     car1.onload=upload_car1;
     car1.src=car1_image;
     car2=new Image();
    car2.onload=upload_car2;
     car2.src=car2_image;
 }
 function upload() {
     ctx.drawImage(backgound,0,0,canvas.width,canvas.height);
 }
 function upload_car1() {
     ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height);
 }
 function upload_car2() {
    ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);
 }
 window.addEventListener("keydown", my_keydown);
  function my_keydown(e) {
       keyPressed = e.keyCode;
        console.log(keyPressed);
         if(keyPressed == '38') {
       car1_up(); console.log("up arrow key");
     }
      if(keyPressed == '40') {
           car1_down();
            console.log("down arrow key");
         }
          if(keyPressed == '37') {
               car1_left();
                console.log("left arrow key");
             }
              if(keyPressed == '39') {
                   car1_right();
                    console.log("right arrow key");
                 }
                  if(keyPressed == '87') {
                       car2_up();
                        console.log("key w");
                     }
                      if(keyPressed == '83') {
                           car2_down();
                            console.log("key s");
                         }
                          if(keyPressed == '65') { 
                              car2_left();
                               console.log("key a");
                             }
                              if(keyPressed == '68') {
                                   car2_right();
                                    console.log("key d");
                                 }
}