'use strict';

const imageElement = document.getElementById("target");
const textElement = document.getElementById("trigger");

const originalImage = "img/picA.jpg";
const hoverImage = "img/picB.jpg";

textElement.addEventListener("mouseover", () => {
    imageElement.src = hoverImage;
});

textElement.addEventListener("mouseout", () => {
    imageElement.src = originalImage;
});