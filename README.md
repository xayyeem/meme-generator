# meme-generator
The random meme generator you've created utilizing HTML, CSS, and JavaScript utilizes the meme_api to fetch random memes from an external API source. This project allows users to interact with a button, triggering JavaScript functionality that initiates a request to the meme_api, retrieving a random meme (in this case, wholesome memes) in the form of an image along with additional details such as the title and author.

The HTML structure provides a basic layout containing a button for generating memes, placeholders for the meme image, title, author, and a Reddit button (link). The CSS styles are responsible for the visual presentation, including the layout, button styling, image display, and the positioning of elements.

JavaScript handles the core functionality by using the `fetch()` API to communicate with meme_api and retrieve data asynchronously. Upon receiving the JSON data from the API, the JavaScript updates the HTML elements dynamically with the fetched meme's details, replacing the placeholder content with the fetched image, title, and author information.

Overall, this project demonstrates the integration of an external API (meme_api) with front-end technologies (HTML, CSS, and JavaScript) to create a fun and interactive meme generator that fetches and displays random memes to users with each click of the 'Generate Meme' button.
