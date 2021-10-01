import axios from "axios";

const Card = (article) => {
  // TASK 5
    // ---------------------
    // Implement this function, which should return the markup you see below.
    // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
    // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    //
    // <div class="card">
    //   <div class="headline">{ headline }</div>
    //   <div class="author">
    //     <div class="img-container">
    //       <img src={ authorPhoto }>
    //     </div>
    //     <span>By { authorName }</span>
    //   </div>
    // </div>
    //

  // Create
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const byLine = document.createElement('span');

  // Add Class
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // Add Content
  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  byLine.textContent = article.authorName;

  // Add Click Event
  card.addEventListener ('click', () => {
    console.log(article.headline);
  })

  // Append
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(byLine);

  // Return
  return card;
}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then( response => {
    console.log(response);

    // Loop through the article Keys (5 >>> bootstrap, js, jquery, node, tech)
    for (let key in response.data.articles){
      
      // Each Key is an array; Loop array
      for (let i = 0; i < response.data.articles[key].length; i++){
        
        // For each array index (article to post), call the card maker
        const cardToMount = Card(response.data.articles[key][i]);

        // Mount to DOM
        const cardMount = document.querySelector(selector);
        cardMount.appendChild(cardToMount);

      }
    }
  })
  .catch( error => {
    console.log(error);
  });


}


export { Card, cardAppender }
