var audioSource=document.getElementById("audioSource").src;
var play= document.getElementById('play');
var pause= document.getElementById('pause');
var stop= document.getElementById('stop');
var ff= document.getElementById('ff');



// class Songs{
//   constructor(){
//     this.songs=["Afghanistan.mp3","Cuba.mp3","Laos.mp3"];
//   }
// playlist(){
//   for(let i=0; i<this.songs.length; i++){
//    var n=new Audio(this.songs[i++])
//  }
// }
//
// var song1= new Songs("https://cdn13.tubeload.tv/mp3/Beastie_Boys_Sabotage.mp3")
// var song2= new Songs("https://cdn15.tubeload.tv/mp3/Beastie_Boys_You_Gotta_Fight_For_Your_Right_To_Party_.mp3")
// var song3= new Songs("https://cdn15.tubeload.tv/mp3/Beastie_Boys_Intergalactic.mp3")

// you can have it push a song to the array

class Jukebox{
 constructor(){

 this.songs=["Afghanistan.mp3","Cuba.mp3","Laos.mp3"];

 }

 go(){
   for(let i=0; i<this.songs.length; i++){
    var n=new Audio(this.songs[i++])
   n.loop = false;
   n.play(this.songs[i++])
 }
}

  pause(){
    for(let i=0; i<this.songs.length; i++){
    var n=new Audio(this.songs[i++])
    console.log(n.pause(this.songs[0]))
  }
  }

  stop(){
    var n=new Audio()
    return stop()
  }
  ff(){
    var n=new Audio()
    return addTextTrack()
  }
}





var control= new Jukebox()
// var n=new Audio()


play.addEventListener("click", function(){
  control.go()
})
pause.addEventListener("click", function(){
  control.pause()
})
stop.addEventListener("click", function(){
  control.stop()
})
ff.addEventListener("click", function(){
  control.ff()
})
