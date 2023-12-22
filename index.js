const generateMemeBtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeImage = document.querySelector('.meme-generator img'); 
const memeTitle = document.querySelector('.meme-generator .meme-title');
const memeAuthor = document.querySelector('.meme-generator .meme-author p');
const reddit = document.querySelector('.meme-generator .reddit');

const updateDetails = (url, title, author, postLink) => {
    memeImage.setAttribute('src', url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
    reddit.setAttribute('href', postLink);
};

const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateDetails(data.url, data.title, data.author, data.postLink);
        })
        .catch((error) => {
            console.error('Error fetching meme:', error);
        });
};

generateMemeBtn.addEventListener('click', generateMeme);
