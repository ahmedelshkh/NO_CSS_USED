// Setup the Fonts
document.body.style.cssText = ("font-family:Roboto, sans-serif; margin: 0;");

// Create the Header

let myHeader = document.createElement('header');
myHeader.style.cssText = "display:flex; justify-content:space-between; align-items: center; padding: 15px;";

// Header Content

// logo
let logo = document.createElement("a");
logo.setAttribute("href", "#");
logo.textContent = ('Ahmed Elshkh');
logo.style.cssText = ("color: rgb(17 150 17); font-size: 18px; cursor: pointer; text-decoration: none; font-weight: bold;")

// nav
nav = document.createElement("div");
nav.className = "nav-content";
nav.style.cssText = "display: flex; gap: 20px;";

// nav content
let navElNames = ["Home", "About", "Service", "Contact"];

// add Nav elements
for (i = 0; i < 4; i++) {
    let navEl = document.createElement("a");
    navEl.setAttribute("href", "#");
    navEl.style.cssText = ("text-decoration: none; font-size: 14px; color: #bbb;");
    navEl.textContent = navElNames[i];
    nav.append(navEl);
}

// create the container

let container = document.createElement("div");
container.className = "container";
container.style.cssText = "height: 100vh; display: flex; flex-direction: column;"

// create content
myContent = document.createElement("div");
myContent.className = "content";
myContent.style.cssText = "padding: 10px; background-color: #eee; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; flex: 1;"


// Create Content Elements
for (i = 1; i <= 15; i++) {
    let productBox = document.createElement("div");
    let productH3 = document.createElement("h3");
    let productP = document.createElement("p");

    productBox.className = "product-box";
    productBox.style.cssText = "padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 6px; text-align: center;";

    productH3.textContent = i;
    productH3.style.cssText = "font-size: 30px; margin: 0 0 10px 0; padding: 0;";

    productP.textContent = "Product";
    productP.style.cssText = "color: grey; font-size: 14px; margin: 0;";

    myContent.append(productBox);
    productBox.append(productH3, productP);
}

// Create The Footer
let myFooter = document.createElement('footer');
myFooter.style.cssText = "padding: 20px; text-align: center; background-color: rgb(17 150 17); opacity: .7;";

// Footer Content
let copyRight = document.createElement("p");
copyRight.textContent = "Copyright @ahmedelshkh 2024";
copyRight.style.cssText = "color: white; margin: 0;";

myHeader.append(logo);
myHeader.append(nav);

container.append(myHeader);
container.append(myContent);
container.append(myFooter);

myFooter.append(copyRight);


document.body.append(container);
