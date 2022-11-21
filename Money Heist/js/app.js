console.log("lo me a gya");


// fetch main container
const mainContainer = document.querySelector(".main-container");

const dataList = [
    {
        name1: "Professor",
        name2: "Berlin",
        img1: "./img/Professor.jpg",
        img2: "./img/berlin.jpg",
        desc: ""
    },
    {
        name1: "Tokyo",
        name2: "Rio",
        img1: "./img/tokyo.jpg",
        img2: "./img/rio.jpg",
        desc: ""
    },
    {
        name1: "Moscow",
        name2: "Oslo",
        img1: "./img/Moscow.jpg",
        img2: "./img/oslo.jpg",
        desc: ""
    },
    {
        name1: "Nairobi",
        name2: "Helsinki",
        img1: "./img/nairobi.jpg",
        img2: "./img/helsinki.jpg",
        desc: ""
    },
    {
        name1: "Denver",
        name2: "Monica",
        img1: "./img/Denver.jpg",
        img2: "./img/Monica.jpg",
        desc: ""
    },

]

window.addEventListener("DOMContentLoaded", function(){
    displayData(dataList);
});
function displayData(){
    let newdisplayData = dataList.map(function(dataList){
        // console.log(dataList);
        return `  <article class="profiles">
        <section class="professor">
            <div class="row" data-aos="fade-left">
                <div class="pro-t">
                    <img src="${dataList.img1}" alt="">
                </div>
                <div class="pro">
                    <h2>${dataList.name1}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius reiciendis corporis
                        soluta ea molestiae vel repellat doloribus dolorem deserunt a, neque temporibus corrupti
                        odit dicta, eligendi quam ut perferendis similique. Alias atque voluptates, rerum
                        reprehenderit numquam pariatur ab repellat aspernatur ducimus, sint aut.</p>
                </div>
            </div>
        </section>



        <section class="berlin">
            <div class="row2" data-aos="fade-right">
                <div class="ber-t">
                    <h2>${dataList.name2}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est quibusdam obcaecati
                        mollitia ex repellendus laudantium! Voluptatum pariatur harum consectetur molestias magni
                        modi illum debitis maiores nulla molestiae et, deserunt, minus accusantium sapiente, nemo
                        excepturi odio? Eveniet necessitatibus fugiat, est dolores voluptatibus iste nisi!</p>
                </div>
                <div class="ber">
                    <img src="${dataList.img2}" alt="">
                </div>
            </div>
        </section>
    </article>`
    });
    newdisplayData = newdisplayData.join("");
    mainContainer.innerHTML = newdisplayData; 

}


const topToggle = document.querySelector(".top-toggle");
topToggle.addEventListener('click', ()=>{
    // document.documentElement.scrollTop = 0; 
    scrollToTop();
    
})

function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
    }