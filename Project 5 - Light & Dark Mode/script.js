const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const textBox = document.getElementById("text-box")

function imageMode(color){
    
    image1.src = `./img/undraw_proud_coder_${color}.svg`
    image2.src = `./img/undraw_feeling_proud_${color}.svg`
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? "rgb(0 0 0 /50%)" : "rgb(255 255 255 /50%)";
    textBox.style.backgroundColor = isDark ? "rgb(255 255 255 /50%)" : "rgb(0 0 0 /50%)";
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    isDark ? imageMode("dark") : imageMode("light")
}



function darkMode(){
    nav.style.backgroundColor ="rgb(0 0 0 /50%)"
    textBox.style.backgroundColor ="rgb(255 255 255 /50%)"
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = "Dark Mode"
    // toggleIcon.children[1].classList.remove("fa-sun")
    // toggleIcon.children[1].classList.add("fa-moon")
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")

    // image1.src = "./img/undraw_proud_coder_dark.svg"
    // image2.src = "./img/undraw_feeling_proud_dark.svg"
    // image2.src = "./img/undraw_conceptual_idea_dark.svg" 

    imageMode("dark")
}

function lightMode(){
    nav.style.backgroundColor ="rgb(255 255 255 /50%)"
    textBox.style.backgroundColor ="rgb(0 0 0 /50%)"
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = "Light Mode"
    // toggleIcon.children[1].classList.remove("fa-moon")
    // toggleIcon.children[1].classList.add("fa-sun")
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")

    // image1.src = "./img/undraw_proud_coder_light.svg"
    // image2.src = "./img/undraw_feeling_proud_light.svg"
    // image2.src = "./img/undraw_conceptual_idea_light.svg" 

    imageMode("light")
}

toggleSwitch.addEventListener("change",(e)=>{
    // console.log(e.target.checked);
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme", "dark")
        // darkMode()
        toggleDarkLightMode(true)
        localStorage.setItem("theme", "dark")
    }
    else{
        document.documentElement.setAttribute("data-theme", "light")
        // lightMode()
        toggleDarkLightMode(false)
        localStorage.setItem("theme", "light")
    }
})

// check local storage theme

const currentTheme = localStorage.getItem("theme")
if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme)
    if(currentTheme === "dark"){
        toggleSwitch.checked =true;
        darkMode()
    }
}