console.log("sky");

const bootList = [
    {
        name: "Addidas MESSI 15.2",
        desc: ""
    },
    {
        name: "Addidas NEMEZIZ 17.3 FG",
        desc: ""
    },
    {
        name: "Addidas ACE 17.3 FB",
        desc: ""
    },
]

const bootImageList = [
    {
        img: "./imgs/addidas dynamite.jpg"
    },
    {
        img: "./imgs/nike timpho legend.jpg" 
    },
    {
        img: "./imgs/nike phantom gt.jpg" 
    },
]

const bootPowerList = [
    {
        about: "Glamrous Design",
        img: "/imgs/power1.jpg" ,
        desc: ""
    },
    {
        about: "Never gonna give up",
        img:"/imgs/power2.jpg",
        desc: ""
    },
    {
        about: " stickey Grip",
        img: "/imgs/power3.jpg",
        desc: "" 
    },
]

const bootContainer = document.querySelector(".boot-container");
// boot image container fetching
const bootImageContainer = document.querySelector(".boot-image-container");
// boot power container fetching
const bootPowerContainer = document.querySelector(".boot-power-container");

window.addEventListener("DOMContentLoaded", function(){
    functionBootList(bootList);
    functionBootImageList(bootImageList);
    functionBootPowerList(bootPowerList);
})

function functionBootList(){
    let displayBootList = bootList.map(function(bootList){
        // console.log(bootList);
        return `  <div class="boots-column">
        <h3>${bootList.name}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt nesciunt aspernatur maiores ipsum optio repellendus iste, nulla, corporis exercitationem error sit ab reiciendis, voluptas ad ea nemo tempora quisquam?</p>
    </div>`
    })
    displayBootList = displayBootList.join("");
    bootContainer.innerHTML = displayBootList;
};

function functionBootImageList(){
    let displayBootImageList = bootImageList.map(function(bootImageList){
        // console.log(bootImageList);
        return `  <div class="boots-img-column">
        <img src="${bootImageList.img}" alt="" />
        <div class="layer">
            <h3>Adidas MESSI 15.2</h3>
        </div>
    </div>`
    })
    displayBootImageList = displayBootImageList.join("");
    bootImageContainer.innerHTML = displayBootImageList;
}

function functionBootPowerList(){
    let displayBootPowerList = bootPowerList.map(function(bootPowerList){
        // console.log(bootPowerList)
        return `  <div class="power-column">
        <img src="${bootPowerList.img}" alt="" />
        <h3>${bootPowerList.about}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>`
    })
    displayBootPowerList = displayBootPowerList.join("");
    bootPowerContainer.innerHTML = displayBootPowerList;
}





