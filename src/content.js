import banhMi from "./images/banhmi.jpg";

function loadHomePage () {
    const content = document.getElementById("content");

    const headingDiv = document.createElement("div");
    headingDiv.id = "heading";

    const headingTitle = document.createElement("h1");
    headingTitle.textContent = "Banh Mi Truck";

    const headingImg = document.createElement("img");
    headingImg.src = banhMi;
    headingImg.id = "bread-heading";
    headingImg.alt = "Picture of a banh mi.";

    const headingSlogan = document.createElement("h2");
    headingSlogan.textContent = "The best Banh Mi on campus";

    headingDiv.appendChild(headingTitle);
    headingDiv.appendChild(headingImg);
    headingDiv.appendChild(headingSlogan);
    content.appendChild(headingDiv);

    const description = document.createElement("p");
    description.textContent = "Our Banh Mi's are the tastiest hoagies you can get on campus! We get our ingredients fresh everyday and bake the bread ourselves. If your feeling tired, we also serve milk teas and iced coffee!";

    const schedule = document.createElement("p");
    schedule.textContent = "Mon-Fri 10:00 AM - 4:00 PM (or until sold out)";

    const location = document.createElement("p");
    location.textContent = "Location: South Exit of Science Building";

    const link = document.createElement("p");
    link.textContent = "Order Online: www.banhmilink.com";

    content.appendChild(description);
    content.appendChild(schedule);
    content.appendChild(location);
    content.appendChild(link);

    const sourcesDiv = document.createElement("div");
    sourcesDiv.id = "sources";

    const source1 = document.createElement("p");
    source1.textContent = "Banh mi image by vtoanstar - www.flickr.com/photos/vtoanstar/19934977411";

    sourcesDiv.appendChild(source1);
    content.appendChild(sourcesDiv);

}

export { loadHomePage };