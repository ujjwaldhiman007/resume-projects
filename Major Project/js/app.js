// nav buttons
document.querySelector(".toggle-login-page").addEventListener("click", ()=>{
    window.open('./login.html', '_parent');
  
});


function goBack(){
      history.back();
}


// footer seekbar function in js







// set media query by help of js
var x = window.matchMedia("(max-width: 500px)")


function myFunction(x) {
    if (x.matches) { // If media query matches
        // seekbar.style.display = "none";
    } else {
        // seekbar.style.display = "flex";

    }
  }
  
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


// toggle follow buttons

document.querySelector(".ri-more-fill").addEventListener('click', ()=>{
    // console.log("helo");


    if(document.querySelector(".more-overlay").classList.contains("show-more-overlay")){
        document.querySelector(".more-overlay").classList.remove("show-more-overlay")

    }
    else{
        document.querySelector(".more-overlay").classList.add("show-more-overlay")
    }
        //    document.querySelector(".more-overlay").classList.toggle("show-more-overlay")
})


// follow button 

document.querySelector(".follow-btn").addEventListener("click", ()=>{
    if(document.querySelector(".follow-btn").classList.contains("following")){
        document.querySelector(".follow-btn").classList.remove("following")
        document.querySelector(".follow-btn").innerText = "follow"
    }else{
        document.querySelector(".follow-btn").classList.add("following")
        document.querySelector(".follow-btn").innerText = "following"

    }
})



// dark mode toggle

function toggleDarkMode(){

        if(document.body.classList.contains("dark-mode")){
        document.body.classList.remove("dark-mode");
        document.querySelector("header").style.backgroundColor = "var(--clr-grey-2)";
        document.querySelectorAll(".play-list-items").forEach((element)=>{
            element.style.backgroundColor = "var(--clr-primary-2)";
            element.getElementsByClassName("about-singer")[0].style.color = "var(--clr-grey-5)";
            document.querySelector(".dark-mode-btn").innerText = "dark on"

        })

    }
    else{
        document.body.classList.add("dark-mode");
        document.querySelector("header").style.backgroundColor = "var(--clr-primary-4)";
        document.querySelectorAll(".play-list-items").forEach((element)=>{
            element.style.backgroundColor = "var(--clr-primary-4)"
            element.getElementsByClassName("about-singer")[0].style.color = "var(--clr-grey-1)";
        })
        document.querySelector(".dark-mode-btn").innerText = "dark off"

    }
}