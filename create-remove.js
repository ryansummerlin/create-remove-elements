/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const urlParts = url.split('/');
        const breed = urlParts[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // const newDogLi = document.createElement("li");
        // const newDogFigure = document.createElement("figure");
        // const newDogImg = document.createElement("img");
        // const newDogFigcaption = document.createElement("figcaption");

        // newDogImg.setAttribute("src", "url");
        // newDogFigcaption.innerText = breed;

        // newDogFigure.appendChild(newDogImg);
        // newDogFigure.appendChild(newDogFigcaption);
        // newDogLi.appendChild(newDogFigure);

        const newDog = `<li>
                            <figure>
                                <img src=${url} />
                                <figcaption>${breed}</figcaption>
                            </figure>
                        </li>`;


        /* Add the new dog card as a child to the ul in the .gallery element */
        const gallery = document.body.getElementsByClassName("gallery")[0];
        const galleryUl = gallery.children[0];
        galleryUl.innerHTML += newDog;

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
