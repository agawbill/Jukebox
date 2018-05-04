
var play= document.getElementById('play');
var pause= document.getElementById('pause');
var stop= document.getElementById('stop');
var ff= document.getElementById('ff');
var shuffle= document.getElementById('shuffle');
var face=document.getElementsByClassName('face')[0];


var songs=["Afghanistan.mp3","Cuba.mp3","Laos.mp3"];


var currentSong=0;

var audio=new Audio(songs[currentSong]);




class Jukebox{
  constructor(){
  }
  go(){
    audio.play(songs[currentSong])
  }
  next(){
    if(currentSong < songs.length-1){
    audio.pause();
    audio.currentTime = 0;
    currentSong= currentSong + 1
    audio=new Audio(songs[currentSong])
    audio.play(songs[currentSong])
  }
    else{
      audio.pause();
      audio.currentTime = 0;
      currentSong= 0
      audio=new Audio(songs[currentSong])
      audio.play(songs[currentSong])
    }
  }
  shuffle(){
    audio.pause();
    audio.currentTime = 0;
    currentSong=Math.floor(Math.random() * songs.length)
    audio=new Audio(songs[currentSong])
    audio.play(songs[currentSong])
  }
  pause(){
    audio.pause(songs[currentSong])
  }
  stop(){
    audio.pause();
    audio.currentTime = 0;
  }

}



var control= new Jukebox()


window.addEventListener("load", function(){
  face.innerHTML="Playing Song: "+ songs[currentSong]
   control.go()
  });



play.addEventListener("click", function(){
  control.go()
  face.innerHTML="Playing Song: "+ songs[currentSong]
})
pause.addEventListener("click", function(){
  control.pause()
})
stop.addEventListener("click", function(){
  control.stop()
  face.innerHTML="Playing Song: "
})
ff.addEventListener("click", function(){
  control.next()
  face.innerHTML="Playing Song: "+ songs[currentSong]
})

shuffle.addEventListener("click", function(){
  control.shuffle()
  face.innerHTML="Playing Song: "+ songs[currentSong]
})
