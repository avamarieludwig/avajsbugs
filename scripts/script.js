const images = [
  "images/bug1.png",
  "images/bug2.png",
  "images/bug3.png",
  "images/bug4.png",
  "images/bug5.png"
];

const img = document.getElementById("slider-image");
let index = 0;

function showImage() {
  img.style.transition = "none";            
  img.style.left = "-50%";                  
  img.style.opacity = "0";                 
  
  setTimeout(() => {
    img.src = images[index];               
    img.style.transition = "all 1s ease-in-out"; 

    requestAnimationFrame(() => {
      img.style.left = "50%";             
      img.style.opacity = "1";
    });

    // Pause 5s in center
    setTimeout(() => {
      img.style.left = "150%";             
      img.style.opacity = "0";

   
      setTimeout(() => {
        index = (index + 1) % images.length;
        showImage();
      }, 1000);
    }, 5000); 

  }, 50); 
}

showImage();
