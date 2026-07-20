import banhMi from "./images/banhmi.jpg";
import banhMi2 from "./images/banhmi2.jpg";
import frenchFries from "./images/frenchfries.jpg";
import coffee from "./images/coffee.jpg";


function createHomeContent() {
    const content = document.getElementById("content");

    const headingDiv = document.createElement("div");
    headingDiv.id = "heading";

    const headingTitle = document.createElement("h1");
    headingTitle.textContent = "Banh Mi Truck";

    const headingImg = document.createElement("img");
    headingImg.src = banhMi;
    headingImg.classList.add("food-photo");
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

    const phone = document.createElement("p");
    phone.textContent = "Phone Number: ###-####-####";

    content.appendChild(description);
    content.appendChild(schedule);
    content.appendChild(location);
    content.appendChild(phone);

    const sourcesDiv = document.createElement("div");
    sourcesDiv.id = "sources";

    const source1 = document.createElement("p");
    source1.textContent = "Banh mi image by vtoanstar - www.flickr.com/photos/vtoanstar/19934977411";

    sourcesDiv.appendChild(source1);
    content.appendChild(sourcesDiv);

}

function createMenuContent() {
    const content = document.getElementById("content");

    const headingTitle = document.createElement("h1");
    headingTitle.textContent = "Banh Mi Truck";

    const menu = document.createElement("h2");
    menu.textContent = "Menu";

    content.appendChild(headingTitle);
    content.appendChild(menu);

    const banhMiHeading = document.createElement("p")
    banhMiHeading.textContent = "Banh Mi";

    const banhMiImg = document.createElement("img");
    banhMiImg.src = banhMi2;
    banhMiImg.classList.add("food-photo");
    banhMiImg.alt = "Photo of the cross section of a banh mi.";

    const breadItemDiv1 = document.createElement("div");
    breadItemDiv1.classList.add("item");

    const special = document.createElement("p")
    special.textContent = "Special Combination";
    const lineSpecial = document.createElement("div");
    lineSpecial.classList.add("inbetween");
    const priceSpecial = document.createElement("p")
    priceSpecial.textContent = "$8";

    breadItemDiv1.appendChild(special);
    breadItemDiv1.appendChild(lineSpecial);
    breadItemDiv1.appendChild(priceSpecial);

    const breadItemDiv2 = document.createElement("div");
    breadItemDiv2.classList.add("item");

    const chicken = document.createElement("p")
    chicken.textContent = "Chicken";
    const lineChicken = document.createElement("div");
    lineChicken.classList.add("inbetween");
    const priceChicken = document.createElement("p")
    priceChicken.textContent = "$9";

    breadItemDiv2.appendChild(chicken);
    breadItemDiv2.appendChild(lineChicken);
    breadItemDiv2.appendChild(priceChicken);

    const breadItemDiv3 = document.createElement("div");
    breadItemDiv3.classList.add("item");

    const shrimp = document.createElement("p")
    shrimp.textContent = "Shrimp";
    const lineShrimp = document.createElement("div");
    lineShrimp.classList.add("inbetween");
    const priceShrimp = document.createElement("p")
    priceShrimp.textContent = "$9";

    breadItemDiv3.appendChild(shrimp);
    breadItemDiv3.appendChild(lineShrimp);
    breadItemDiv3.appendChild(priceShrimp);

    const breadItemDiv4 = document.createElement("div");
    breadItemDiv4.classList.add("item");

    const tofu = document.createElement("p")
    tofu.textContent = "Tofu";
    const lineTofu = document.createElement("div");
    lineTofu.classList.add("inbetween");
    const priceTofu = document.createElement("p")
    priceTofu.textContent = "$8";

    breadItemDiv4.appendChild(tofu);
    breadItemDiv4.appendChild(lineTofu);
    breadItemDiv4.appendChild(priceTofu);

    content.appendChild(banhMiHeading);
    content.appendChild(banhMiImg);
    content.appendChild(breadItemDiv1);
    content.appendChild(breadItemDiv2);
    content.appendChild(breadItemDiv3);
    content.appendChild(breadItemDiv4);

    const sidesHeading = document.createElement("p")
    sidesHeading.textContent = "Sides";

    const sidesImg = document.createElement("img");
    sidesImg.src = frenchFries;
    sidesImg.classList.add("food-photo");
    sidesImg.alt = "Photo of fries in a bowl.";

    const sidesDiv1 = document.createElement("div");
    sidesDiv1.classList.add("item");

    const fries = document.createElement("p")
    fries.textContent = "Fries";
    const lineFries = document.createElement("div");
    lineFries.classList.add("inbetween");
    const priceFries = document.createElement("p")
    priceFries.textContent = "$4";

    sidesDiv1.appendChild(fries);
    sidesDiv1.appendChild(lineFries);
    sidesDiv1.appendChild(priceFries);

    const sidesDiv2 = document.createElement("div");
    sidesDiv2.classList.add("item");

    const sweetFries = document.createElement("p")
    sweetFries.textContent = "Sweet Potato Fries";
    const lineSweetFries = document.createElement("div");
    lineSweetFries.classList.add("inbetween");
    const priceSweetFries = document.createElement("p")
    priceSweetFries.textContent = "$5";

    sidesDiv2.appendChild(sweetFries);
    sidesDiv2.appendChild(lineSweetFries);
    sidesDiv2.appendChild(priceSweetFries);

    const sidesDiv3 = document.createElement("div");
    sidesDiv3.classList.add("item");

    const eggRolls = document.createElement("p")
    eggRolls.textContent = "Egg Rolls";
    const lineEggRolls = document.createElement("div");
    lineEggRolls.classList.add("inbetween");
    const priceEggRolls = document.createElement("p")
    priceEggRolls.textContent = "$5";

    sidesDiv3.appendChild(eggRolls);
    sidesDiv3.appendChild(lineEggRolls);
    sidesDiv3.appendChild(priceEggRolls);

    content.appendChild(sidesHeading);
    content.appendChild(sidesImg);
    content.appendChild(sidesDiv1);
    content.appendChild(sidesDiv2);
    content.appendChild(sidesDiv3);

    const drinksHeading = document.createElement("p")
    drinksHeading.textContent = "Drinks";

    const drinksImg = document.createElement("img");
    drinksImg.src = coffee;
    drinksImg.classList.add("food-photo");
    drinksImg.alt = "Photo of vietnamese iced coffee.";

    const drinksDiv1 = document.createElement("div");
    drinksDiv1.classList.add("item");

    const icedCoffee = document.createElement("p")
    icedCoffee.textContent = "Iced Coffee";
    const lineIcedCoffee = document.createElement("div");
    lineIcedCoffee.classList.add("inbetween");
    const priceIcedCoffee = document.createElement("p")
    priceIcedCoffee.textContent = "$3";

    drinksDiv1.appendChild(icedCoffee);
    drinksDiv1.appendChild(lineIcedCoffee);
    drinksDiv1.appendChild(priceIcedCoffee);

    const drinksDiv2 = document.createElement("div");
    drinksDiv2.classList.add("item");

    const milkCoffee = document.createElement("p")
    milkCoffee.textContent = "Iced Milk Coffee";
    const lineMilkCoffee = document.createElement("div");
    lineMilkCoffee.classList.add("inbetween");
    const priceMilkCoffee = document.createElement("p")
    priceMilkCoffee.textContent = "$4";

    drinksDiv2.appendChild(milkCoffee);
    drinksDiv2.appendChild(lineMilkCoffee);
    drinksDiv2.appendChild(priceMilkCoffee);

    const drinksDiv3 = document.createElement("div");
    drinksDiv3.classList.add("item");

    const milkTea = document.createElement("p")
    milkTea.textContent = "Milk Tea";
    const lineMilkTea = document.createElement("div");
    lineMilkTea.classList.add("inbetween");
    const priceMilkTea = document.createElement("p")
    priceMilkTea.textContent = "$4";

    drinksDiv3.appendChild(milkTea);
    drinksDiv3.appendChild(lineMilkTea);
    drinksDiv3.appendChild(priceMilkTea);

    const drinksDiv4 = document.createElement("div");
    drinksDiv4.classList.add("item");

    const strMilkTea = document.createElement("p")
    strMilkTea.textContent = "Strawberry Milk Tea";
    const lineStrMilkTea = document.createElement("div");
    lineStrMilkTea.classList.add("inbetween");
    const priceStrMilkTea = document.createElement("p")
    priceStrMilkTea.textContent = "$4";

    drinksDiv4.appendChild(strMilkTea);
    drinksDiv4.appendChild(lineStrMilkTea);
    drinksDiv4.appendChild(priceStrMilkTea);

    content.appendChild(drinksHeading);
    content.appendChild(drinksImg);
    content.appendChild(drinksDiv1);
    content.appendChild(drinksDiv2);
    content.appendChild(drinksDiv3);
    content.appendChild(drinksDiv4);

    const sourcesDiv = document.createElement("div");
    sourcesDiv.id = "sources";

    const source1 = document.createElement("p");
    source1.textContent = "Banh mi image by Shell Tu - www.flickr.com";

    const source2 = document.createElement("p");
    source2.textContent = "French fries image by Pixabay - picryl.com";
    
    const source3 = document.createElement("p");
    source3.textContent = "Coffee image by Alpha - www.flickr.com/photos/avlxyz/6194244852";

    sourcesDiv.appendChild(source1);
    sourcesDiv.appendChild(source2);
    sourcesDiv.appendChild(source3);
    content.appendChild(sourcesDiv);
}

export { createHomeContent, createMenuContent };