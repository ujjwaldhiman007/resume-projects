// console.log("hello vilen");

// fetch data
const list = [
    {
        id: 1,
        onclick: "arijitsirHtml",
        img: "./img/arijitsir.jpg",
        name: "Arijit Singh",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 2,
        onclick: "vilenHtml",
        img: "./img/vilen.jpg",
        name: "Vilen",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 3,
        onclick: "alanWalkerHtml",
        img: "./img/alanwalker.jpg",
        name: "Alan walker",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 4,
        onclick: "eminemHtml",
        img: "./img/eminem.jpg",
        name: "Eminem",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 5,
        onclick: "armanMalikHtml",
        img: "./img/arman.jpg",
        name: "Arman Malik",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 6,
        onclick: "dinoJamesHtml",
        img: "./img/dinojames.jpg",
        name: "Dino James",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 7,
        onclick: "imagineDragonsHtml",
        img: "./img/imaginedragons.jpg",
        name: "Imagine Dragons",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },
    {
        id: 5,
        onclick: "raufFaikHtml",
        img: "./img/rauf-faik.jpg",
        name: "Rauf Faik",
        about: "Arijit singh is the most popular singer The emotion master on the line",
        
    },


]

// fetch the play list container

const mainPlayListContainer = document.querySelector(".play-list-container");

window.addEventListener('DOMContentLoaded', ()=>{
    displayList(list);
})


function displayList(){
    let displayPlayList = list.map((listData)=>{
        // console.log(listData)
        return `  <div class="play-list-items" onclick="${listData.onclick}()">
        <div class="play-list-items-image">
        <img src="${listData.img}" alt="">
        </div>
        <h3 class="singer-name">${listData.name}</h3>
        <p class="about-singer">${listData.about}</p>
    </div>`
    })
    displayPlayList = displayPlayList.join("");
    mainPlayListContainer.innerHTML = displayPlayList;
}



function arijitsirHtml (){
    console.log("arijit sir is here");
    window.open('./arijitsir.html', '_parent');
}
function vilenHtml (){
    console.log("vilen sir is here");
    window.open('./vilen.html', '_parent');

}
function alanWalkerHtml(){
    console.log("alan waker is here");
    window.open("./alanwalker.html", "_parent")
}

function eminemHtml (){
    console.log("eminem sir is here");
    window.open("./eminem.html", "_parent")
}
 
function armanMalikHtml (){
    console.log("arman malik is here");
    window.open("./armanmalik.html", "_parent")
}
function dinoJamesHtml (){
    console.log("dino james is here");
    window.open("./dinojames.html", "_parent");
}
function imagineDragonsHtml (){
    console.log("imagine dragons is here");
    window.open("./imaginedragons.html", "_parent");
}
function raufFaikHtml (){
    console.log("imagine dragons is here");
    window.open("./rauf-faik.html", "_parent");
}





