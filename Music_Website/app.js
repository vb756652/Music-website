const music =new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:1,
        songName: `<h5>Chaleya (From Jawan)<br>
        <div class="subtitle">Jawan</div>
       </h5>`,
       poster:'image/1.png',
    },
    {
        id:2,
        songName: `<h5>Rishte Naate<br>
        <div class="subtitle">De Dana Dan</div>
       </h5>`,
       poster:"image/2.png",
    },

    {
        id:3,
        songName: `<h5>Manja<br>
        <div class="subtitle"> Kai Po Che|Sushant Singh Rajput,Rajkummar Rao,Amit Sadh|Mohan Kanan</div>
       </h5>`,
       poster:"image/3.png",
    },
    {
        id:4,
        songName: `<h5>Kajra Mohobbat Wala<br>
        <div class="subtitle"> (Reprised Version) | Sachet Tandon |</div>
       </h5>`,
       poster:"image/4.png",
    },
    {
        id:5,
        songName: `<h5>Mere Samne Wali Khidki Mein<br>
        <div class="subtitle"> Ashish Patil | Padosan | Kishore Kumar | Cover |</div>
       </h5>`,
       poster:"image/5.png",
    },
    {
        id:6,
        songName: `<h5>Not Ramaiya Vastavaiya<br>
        <div class="subtitle">Shah Rukh Khan | Atlee | Anirudh | Nayanthara | Vishal D | Shilpa R</div>
       </h5>`,
       poster:"image/6.png",
    },
    {
        id:7,
        songName: `<h5>On My Way<br>
        <div class="subtitle">Alan Walker, Sabrina Carpenter & Farruko</div>
       </h5>`,
       poster:"image/7.png",
    },
    {
        id:8,
        songName: `<h5>Mahiye Jinna Sohna<br>
        <div class="subtitle">Darshan Raval | Youngveer | Lijo George | Dard</div>
       </h5>`,
       poster:"image/8.png",
    },
    {
        id:9,
        songName: `<h5>WOH<br>
        <div class="subtitle">Ikka x Dino James x Badshah | Def Jam India</div>
       </h5>`,
       poster:"image/9.png",
    },
    {
        id:10,
        songName: `<h5>Dil Jhoom Jhoom Jaye <br>
        <div class="subtitle"> Arijit Singh | Sunny Deol, Utkarsh Sharma, Simratt Kaur </div>
       </h5>`,
       poster:"image/10.png",
    },
    {
        id:11,
        songName: `<h5> Dariya<br>
        <div class="subtitle">Vismay Patel - Dariya [Official Music Video]</div>
       </h5>`,
       poster:"image/11.png",
    },
    {
        id:12,
        songName: `<h5>Ghar Aaja Pardesi Ki Teri Meri Ek Jindri<br>
        <div class="subtitle">Gadar 2 | Sunny Deol, Ameesha Patel Song</div>
       </h5>`,
       poster:"image/12.png",
    },
    {
        id:13,
        songName: `<h5>Nit Nit <br>
        <div class="subtitle">Jasleen Royal | Punjabi Song | White Hill Music</div>
       </h5>`,
       poster:"image/13.png",
    },
    {
        id:14,
        songName: `<h5>Nit Nit<br>
        <div class="subtitle"> Jasleen Royal | Punjabi Song | White Hill Music</div>
       </h5>`,
       poster:"image/14.png",
    },
    {
        id:15,
        songName: `<h5>Zindagi Bata De<br>
        <div class="subtitle">Tony Kakkar - Zindagi Bata Dee</div>
       </h5>`,
       poster:"image/15.png",
    },
    {
        id:16,
        songName: `<h5>Mi Amor Mashup<br>
        <div class="subtitle">Sharn x Bohemia | Mi Amor Mashup | Ft. Sonam Bajwa | Naresh Parmar</div>
       </h5>`,
       poster:"image/16.png",
    },
    {
        id:17,
        songName: `<h5>Gone Girl<br>
        <div class="subtitle">Badshah - Gone Girl (लड़की ख़राब) | Official Music Video | Payal Dev | Sakshi Vaidya</div>
       </h5>`,
       poster:"image/17.png",
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
// master-----
let master_play = document.getElementById('master_play');
let wave=document.getElementById('wave');

master_play.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-fill')
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        master_play.classList.add('bi-play-fill');
        master_play.classList.remove('bi-pause-fill')
    }
})

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
      
    })
}


const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background= 'rgb(105,105,105,.0)';

      
    })
}


let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right= document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});



let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft +=330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -=330;
});





let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src=`image/${index}.png`;
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-fill')

        let songTitles = songs.filter((els)=>{
            return els.id==index;
        })

        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML = songName;

        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });

});


let currentStart =document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot=document.getElementById('dot');

music.addEventListener('timeupdate',()=>{
     let music_curr=music.currentTime;
     let music_dur = music.duration;

     let min1=Math.floor(music_dur/60);
     let sec1=Math.floor(music_dur%60);;

     if (sec1<10) {
        sec1=`0${sec1}`
     }
     currentEnd.innerText=`${min1}:${sec1}`;

     let min2=Math.floor(music_curr/60);
     let sec2=Math.floor(music_curr%60);
     if (sec2<10) {
        sec2=`0${sec2}`
     }
     currentStart.innerText=`${min2}:${sec2}`;
    

     let progressBar =parseInt((music_curr/music_dur)*100);
     seek.value=progressBar;
     
     let seekbar = seek.value;
     bar2.style.width = `${seekbar}%`;
     dot.style.left= `${seekbar}%`;


});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
});
let vol_icon =document.getElementById(`vol_icon`);
let vol =document.getElementById(`vol`);
let vol_bar =document.getElementsByClassName(`vol_bar`)[0];
let vol_dot =document.getElementById(`vol_dot`);


vol.addEventListener('change',()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value >0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value >50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})

let back=document.getElementById('back');
let next =document.getElementById('next');



back.addEventListener('click',()=>{
       index-=1;
       if (index<1) {
         index=Array.from(document.getElementsByClassName('songItem')).length;
       }
       music.src = `audio/${index}.mp3`;
       poster_master_play.src=`image/${index}.png`;
       music.play();
       master_play.classList.remove('bi-play-fill');
       master_play.classList.add('bi-pause-fill')

       let songTitles = songs.filter((els)=>{
           return els.id==index;
       })

       songTitles.forEach(elss=>{
           let {songName}=elss;
           title.innerHTML = songName;

       })
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index++;
     if (index>Array.from(document.getElementsByClassName('songItem')).length) {
         index=1;
       }
       music.src = `audio/${index}.mp3`;
       poster_master_play.src=`image/${index}.png`;
       music.play();
       master_play.classList.remove('bi-play-fill');
       master_play.classList.add('bi-pause-fill')

       let songTitles = songs.filter((els)=>{
           return els.id==index;
       })

       songTitles.forEach(elss=>{
           let {songName}=elss;
           title.innerHTML = songName;

       })
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})