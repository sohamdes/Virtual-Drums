var snare;
var kick;
var tom1, tom2, tom3, crash, ride, hihat_open, hihat_close, logo;
var snare_sound;
var kick_sound, tom1_sound, tom2_sound, tom3_sound, crash_sound, ride_sound, hihat_open_sound, hihat_close_sound;

function preload(){
    soundFormats('wav');
    kick_sound = loadSound("assets/kick.wav");
    snare_sound = loadSound("assets/snare.wav");
    tom1_sound = loadSound("assets/tom1.wav");
    tom2_sound = loadSound("assets/tom2.wav");
    tom3_sound = loadSound("assets/tom3.wav");
    crash_sound = loadSound("assets/crash1.wav");
    ride_sound = loadSound("assets/crash2.wav");
    hihat_open_sound = loadSound("assets/hi-hat_open.wav");
    hihat_close_sound = loadSound("assets/hihat_close.wav");
    
    snare = loadImage("assets/snare.png");
    kick = loadImage("assets/kick.png");
    tom1 = loadImage("assets/tom-1.png");
    tom2 = loadImage("assets/tom-2.png");
    tom3 = loadImage("assets/tom-3.png");
    crash = loadImage("assets/crash.png");
    ride = loadImage("assets/ride.png");
    hihat_open = loadImage("assets/hihat.png");
    hihat_close = loadImage("assets/hihat.png");
    logo = loadImage("assets/logo.png");
}

function setup() {
    
    createCanvas(1200,800);
    
    background(173, 55, 61);
    
    imageMode(CENTER);
    image(snare,400,690);
    image(kick,730,650);
    image(logo,100,100);
    image(tom1,520,500);
    image(tom2,700,400);
    image(tom3,880,480);
    image(crash,450,340);
    image(ride,970,310);
    image(hihat_open,230,470);
    image(hihat_close,190,600);
    

    

}

function draw() {

    console.log(mouseX,mouseY);
}


function keyPressed(){
    //SOUND PLAYS WHEN THE KEY IS PRESSED 
        if(key=='s'){
        snare_sound.play();
    }
        if(key=='a'){
        hihat_close_sound.play();
    }
        if(key=='q'){
        crash_sound.play();
    }
        if(key=='d'){
        tom1_sound.play();
    }
        if(key=='f'){
        tom2_sound.play();
    }
        if(key=='g'){
        tom3_sound.play();
    }
        if(key=='x'){
        kick_sound.play();
    }
        if(key=='r'){
        ride_sound.play();
    }
        if(key=='z'){
        hihat_open_sound.play()
    }
}
