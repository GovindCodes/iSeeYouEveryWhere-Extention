console.log("You will get addicted");

let fileNames =  [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
]

let images = document.getElementsByTagName("img");

for(imgElt of images){
    let r = Math.floor(Math.random() * fileNames.length)
    let file = 'images/'+fileNames[r];
    // we are doing this since the files we have where they live?
    // WE NEED TO SPECIFY PATH ACCORDING TO CHROME EXTENTION REACH the below line does the same
    let url = chrome.runtime.getURL(file);
    imgElt.src = url;
    // console.log(url)
}