const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Create
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  // Add class
  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');
  
  // Add content
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  // Append
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  console.log('HEADER TEST 1A: ', headerDiv);

  // Return
  return headerDiv;
}

const headerTest = Header('TITLE', 'TODAY', 'BLAH BLAH BLAH');
// console.log('HEADER TEST 1B: ', headerTest);
// console.log('HEADER TEST 2: ', Header('TEST 3', 'TODAY 3', 'BLAH BLAH BLAH 3'));



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let headerToAppend = Header ('Lambda Times', 'October 1, 2021', '72 F');
  let headerMount = document.querySelector(selector);
  headerMount.appendChild(headerToAppend);

}

export { Header, headerAppender }
