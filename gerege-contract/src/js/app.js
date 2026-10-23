/* Gerege Contract — scripts */

import "../css/style.css";
import "preline";
import "./components/animation";

import Gumshoe from "gumshoejs";

document.addEventListener("DOMContentLoaded", () => {
    // Light / dark toggle (initial theme is set in partials/head-css.php)
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            try { localStorage.setItem("theme", next); } catch (e) {}
        });
    });

    // Highlight the nav link of the current page
    const currentPath = window.location.pathname.replace(/\/$/, "");
    document.querySelectorAll("#navbar a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "");
        if (href && (currentPath === href || currentPath.endsWith(href))) link.classList.add("active");
    });

    // Scroll-spy for in-page sections (home page only)
    if (document.querySelector("#how")) {
        new Gumshoe('#navbar a[href^="/#"]', { offset: 80, reflow: true, events: true });
    }
});
