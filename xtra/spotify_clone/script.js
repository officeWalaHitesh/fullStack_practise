console.log('Welcome to Spotify');

let index=0;
const masterPlay = document.getElementById('masterPlay');
const masterSongName = document.getElementById('masterSongName');

const progressBar = document.getElementById('progressBar');
const gif = document.getElementById('gif');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');

const songItems = Array.from(document.getElementsByClassName('songItem'));

// if(progressBar) console.log(1);

let audioElement = new Audio('assets/song1.mp3');
// console.log(parseInt(audioElement.duration))

let songs = [
    {
        songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
        path : "assets/song1.mp3",
        coverPath : "assets/icon1.jpg"
    },
    {
        songName: "Maan Meri Jaan Remix - DJ Baddiee",
        path : "assets/song2.mp3",
        coverPath : "assets/icon2.jpg"
    },
    {
        songName: "Zihaal e Miskin Hakum Matataaa",
        path : "assets/song3.mp3",
        coverPath : "assets/icon3.jpg"
    },
    {
        songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
        path : "assets/song1.mp3",
        coverPath : "assets/icon1.jpg"
    },
    {
        songName: "Maan Meri Jaan Remix - DJ Baddiee",
        path : "assets/song2.mp3",
        coverPath : "assets/icon2.jpg"
    },
    {
        songName: "Zihaal e Miskin Hakum Matataaa",
        path : "assets/song3.mp3",
        coverPath : "assets/icon3.jpg"
    },
    {
        songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
        path : "assets/song1.mp3",
        coverPath : "assets/icon1.jpg"
    },
    {
        songName: "Maan Meri Jaan Remix - DJ Baddiee",
        path : "assets/song2.mp3",
        coverPath : "assets/icon2.jpg"
    },
    {
        songName: "Zihaal e Miskin Hakum Matataaa",
        path : "assets/song3.mp3",
        coverPath : "assets/icon3.jpg"
    },
    {
        songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
        path : "assets/song1.mp3",
        coverPath : "assets/icon1.jpg"
    }
]

let i=0;
songItems.forEach((ele,i)=>{
    // console.log(ele);
    ele.getElementsByTagName('img')[0].src = songs[i].coverPath;
    ele.getElementsByTagName('span')[0].innerText = songs[i].songName;
    // let audioPath = songs[i].path;
    // console.log(audioPath)
    // audioElement.src = audioPath;
    // console.log(audioElement)
    // ele.getElementsByClassName('timeStamp')[0].innerText = audioElement.duration;
    // i++;
})

//  Handle play Pause

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        makeAllPlays()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    masterSongName.innerText = songs[index].songName;
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekBar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    progressBar.value=progress;
});

progressBar.addEventListener('change',()=>{
    let value = progressBar.value;
    // console.log(value)
    audioElement.currentTime = parseInt(audioElement.duration*value/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
        ele.classList.remove('fa-pause-circle');
        ele.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        // console.log(e.target)
        makeAllPlays();
        index = parseInt(ele.id);
        ele.classList.remove('fa-play-circle');
        ele.classList.add('fa-pause-circle');
        
        audioElement.src = `assets/song${(index%3+1)}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        console.log(audioElement)
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

forward.addEventListener('click',()=>{
    index+=1;
    index%=9;
    audioElement.src = `assets/song${(index%3+1)}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        console.log(audioElement)
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

backward.addEventListener('click',()=>{
    index-=1;
    if(index<=0) 
    index=9;
    audioElement.src = `assets/song${(index%3+1)}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        console.log(audioElement)
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})