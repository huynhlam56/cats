let popularity = 0;

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Cute Kittens";

    const addButton = document.createElement('button');
    addButton.innerText = 'New Kitten'

    addButton.addEventListener('click', fetchImage)

    const newKittenDiv = document.createElement('div');
    newKittenDiv.appendChild(addButton)
    newKittenDiv.className = 'new-kitten-button'

    const displayVotes = document.createElement('div');
    displayVotes.innerText = `Popularity: ${popularity}`
    displayVotes.id = 'votes'

    const likeButton = document.createElement('button');
    likeButton.innerText = "Like :)";

    const dislikeButton = document.createElement('button');
    dislikeButton.innerText = "Dislike :("

    const votesContainer = document.createElement('div');
    votesContainer.append(displayVotes, likeButton, dislikeButton );

    const commentContainer = document.createElement('div');
    commentContainer.innerText = 'Comment:'

    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Add a comment';
    commentContainer.appendChild(commentInput);

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    commentContainer.appendChild(submitButton)

    const comments = document.createElement('div');
    comments.className = 'comments-box';
    const ul = document.createElement('ul');
    comments.appendChild(ul)

    submitButton.addEventListener("click", function() {

        const value = commentInput.value;
        if(value) {
            const li = document.createElement('li');

            li.innerText = value;

            const ul = document.querySelector('ul')

            ul.appendChild(li)

            commentInput.value = ''
        }
    })

    likeButton.addEventListener('click', upvote)
    dislikeButton.addEventListener('click', downvote)

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";
    img.style.height = "75%";
    img.style.width = "75%";



    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(newKittenDiv);
    container.appendChild(votesContainer);
    container.appendChild(commentContainer);
    container.appendChild(comments);

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

        popularity = 0
        const popularityScore = document.getElementById('votes');
        popularityScore.innerText = `Popularity: ${popularity}`
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};


const upvote = async () => {
    popularity++
    const popularityScore = document.getElementById('votes');
    popularityScore.innerText = `Popularity: ${popularity}`
}

const downvote = async () => {
    popularity--
    const popularityScore = document.getElementById('votes');
    popularityScore.innerText = `Popularity: ${popularity}`
}
