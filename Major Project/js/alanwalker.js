let masterPlay = document.getElementById("masterPlay");
let masterPause = document.getElementById("masterPause");
// const myProgressBar = document.getElementById("myProgressBar");
let songElement = new Audio("../alanwalkersongs/1.mp3");
let songIndex = 0;
let songItems = Array.from(document.getElementsByClassName("main-grid-container"));

let songs = [
    {number:1, views:"23,40,45,567", time:"3:45", songName: "Unity", songPath:"../alanwalkersongs/1.mp3", coverPath:"../alanwalkercovers/cover1.jpeg"},
    {number:2, views:"2,734,576,12", time:"5:10", songName: "Lost Control", songPath:"../alanwalkersongs/2.mp3", coverPath:"../alanwalkercovers/cover2.jpg"},
    {number:3, views:"8,512,546,73", time:"3:59", songName: "Alone", songPath:"../alanwalkersongs/3.mp3", coverPath:"../alanwalkercovers/cover3.jpg"},
    {number:4, views:"12,00,345,67", time:"4:42", songName: "Fadded", songPath:"../alanwalkersongs/4.mp3", coverPath:"../alanwalkercovers/cover4.jpg"},
    {number:5, views:"14,23,567,78", time:"4:16", songName: "Lily", songPath:"../alanwalkersongs/5.mp3", coverPath:"../alanwalkercovers/cover5.jpg"},
    {number:6, views:"2,35,456,764", time:"4:19", songName: "On My Way", songPath:"../alanwalkersongs/6.mp3", coverPath:"../alanwalkercovers/cover6.jpg"},
    {number:7, views:"3,94,567,981", time:"5:01", songName: "Paradise", songPath:"../alanwalkersongs/7.mp3", coverPath:"../alanwalkercovers/cover7.jpg"},
    {number:8, views:"26,054,753", time:"5:49", songName: "The Spectre", songPath:"../alanwalkersongs/8.mp3", coverPath:"../alanwalkercovers/cover8.jpg"},

    
]
// redner the all songs name dynamicly


songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByClassName("fetch-song-name")[0].innerText = songs[i].songName;
    element.getElementsByClassName("fetch-views")[0].innerText = songs[i].views
    element.getElementsByClassName("fetch-time")[0].innerText = songs[i].time
    element.getElementsByClassName("song-index")[0].innerText = songs[i].number;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
})




masterPlay.addEventListener("click", ()=>{
        songElement.play();
        masterPlay.style.display = "none";
        masterPause.style.display= "block";
});
masterPause.addEventListener("click", ()=>{
    songElement.pause();
    masterPlay.style.display = "block";
    masterPause.style.display = "none";
})
 
document.getElementById("extraPlay").addEventListener('click', ()=>{
    songElement.play();
    masterPlay.style.display = "none";
    masterPause.style.display= "block";
})

// listen to events
songElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((songElement.currentTime/songElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    songElement.currentTime = myProgressBar.value * songElement.duration/100;
});


// play tap click eak play button
Array.from(document.getElementsByClassName("song-index-play-btn")).forEach((element)=>{
    // console.log(element);
    element.addEventListener('click', (e)=>{
        // console.log(e.target.id);
        index = parseInt(e.target.id)
        songElement.src = `../alanwalkersongs/${index+1}.mp3`;
        songElement.play();
        songElement.currentTime = 0
        masterPlay.style.display = "none";
        masterPause.style.display = "block";
        document.getElementById("masterSongName").innerText = songs[index].songName;
        document.getElementById("masterImage").src = songs[index].coverPath;
        document.querySelector("footer").style.visibility = "visible";
    })
})

// handle previous and next

document.getElementById("next").addEventListener("click", ()=>{
    if(index>=7){
        index = 0;
    }
    else{
        index+=1;
    }
    songElement.src = `../alanwalkersongs/${index+1}.mp3`;
    songElement.play();
    songElement.currentTime = 0
    masterPlay.style.display = "none";
    masterPause.style.display = "block";
    document.getElementById("masterSongName").innerText = songs[index].songName;
    document.getElementById("masterImage").src = songs[index].coverPath;
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    songElement.src = `../alanwalkersongs/${index+1}.mp3`;
    songElement.play();
    songElement.currentTime = 0
    masterPlay.style.display = "none";
    masterPause.style.display = "block";
    document.getElementById("masterSongName").innerText = songs[index].songName;
    document.getElementById("masterImage").src = songs[index].coverPath;
})