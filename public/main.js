export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Cute Kittens";

    const addButton = document.createElement('button');
    addButton.innerText = 'New Kitten'

    addButton.addEventListener('click', fetchImage)

    const likeButton = document.createElement('button');
    likeButton.innerText = "Like :)";

    const dislikeButton = document.createElement('button');
    dislikeButton.innerText = "Dislike :("


    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";
    img.style.height = "75%";
    img.style.width = "75%";




    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(addButton);
    container.appendChild(likeButton);
    container.appendChild(dislikeButton);


    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
