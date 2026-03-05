"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* 1️⃣ إظهار المحتوى بسلاسة */
    const content = document.querySelector(".content");
    content.classList.add("show");

    /* 2️⃣ تأثير كتابة احترافي */
    const title = document.querySelector(".title");
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    /* 3️⃣ السنة تلقائيًا */
    document.getElementById("year").textContent =
        new Date().getFullYear();

    /* 4️⃣ اختصارات لوحة المفاتيح */
    document.addEventListener("keydown", (e) => {
        const routes = {
            "1": "achievements.html",
            "2": "friends.html",
            "3": "school.html"
        };
        if (routes[e.key]) window.location.href = routes[e.key];
    });

});