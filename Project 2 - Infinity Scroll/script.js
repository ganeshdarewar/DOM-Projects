const imageContainer= document.querySelector("#img-conatainer")
const loader = document.querySelector("#loader")

let photosArray=[]

let imageLoad=0
let totalImage=0
let ready=false


// api
let ImgCount=5
const apiKey="x17U3Ag5hMVknB_rMhwZ7I8bymKmIF7xuh15g4USyS8"
// const apiKey="R-YUx6M39-8_E-kM18GK_tupLTgYdQP5FFQnogYpJ8Q"
let apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${ImgCount}`


//check imageLoaded

function imageLoaded(){
    loader.hidden=true
    ImgCount=30
    imageLoad++
    // console.log(imageLoad);
    if(imageLoad === totalImage){
        ready=true
        // console.log('ready', ready);
    }
}


// create elements for links and photos add to DOM

function displayPhotos(){
    imageLoad=0
    totalImage = photosArray.length
    // console.log(totalImage);
    photosArray.forEach((photo)=>{
        const item = document.createElement("a")
        item.href=photo.links.html
        item.setAttribute("target", "_blank")

        const img = document.createElement("img")
        img.setAttribute("src",photo.urls.regular )
        img.src=photo.urls.thumb
        img.alt=photo.alt_description
        img.title= photo.alt_description

        img.addEventListener("load", imageLoaded)
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}




// get photos from api

function getPhotos(){
    fetch(apiUrl).then((response)=>{
        return response.json()
    }).then((data)=>{
        photosArray =data
        displayPhotos()
    }).catch((error)=>{
        console.log("error",error);
    })
}
getPhotos()


window.addEventListener("scroll",()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000 && ready){
        getPhotos()
        ready=false
    }
})