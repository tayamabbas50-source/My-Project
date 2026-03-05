"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector(".content");
    const title = document.querySelector(".title");
    const year = document.getElementById("year");

    content.classList.add("show");

    /* تأثير كتابة العنوان */
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();

    year.textContent = new Date().getFullYear();
});