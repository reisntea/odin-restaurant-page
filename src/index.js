import { createHomeContent as createHomeContentImport, createMenuContent as createMenuContentImport, createAboutContent as createAboutContentImport } from "./content.js";
import "./styles.css";

// Controls what the page displays
function pageController () {
    let header = document.querySelector("header");
    const content = document.getElementById("content");

    let currentId = "home";

    header.addEventListener('click', (event) => {
        let target = event.target;
        
        // Only runs the switch statement if the nav pressed isn't what's already being displayed
        // If it's different the switch statement runs and finds whatever case it is and sets the currentId to the new content being displayed.
        if (currentId !== target.id) {
            switch(target.id) {
            case "home":
                content.replaceChildren();
                createHomeContentImport();
                currentId = target.id;
                break;
            case "menu":
                content.replaceChildren();
                createMenuContentImport();
                currentId = target.id;
                break;
            case "about":
                content.replaceChildren();
                createAboutContentImport();
                currentId = target.id;
                break;
            }
        }
    });
}

createHomeContentImport();
pageController();