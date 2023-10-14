/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
      
      const h3Element = document.createElement('h3');
      h3Element.textContent = temple.templeName;
      
      const imgElement = document.createElement('img');
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
      
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
      
      templesElement.appendChild(articleElement);
    });
  };
  
  // Call the function with the array of temples
  displayTemples(templeList);



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    output(templeList);
};
getTemples();
/* reset Function */
const reset = () => {
    document.querySelector('#temples').innerHTML = "";
};

/* sortBy Function */

const sortBy = (temple) => {
    reset();


const filter = document.querySelector("#sortBy").value

switch (filter) {
    case 'utah':
        const utahTemples = temple.filter((temple) =>
        temple.location.toLowerCase().includes('utah')
        );
        displayTemples(utahTemples);
    case 'notutah':
        const notutahTemples = temple.filter((temple) =>
        temple.location.toLowerCase().includes('utah')
        );
        displayTemples(notutahTemples);
        break;
    case 'older':
            displayTemples(temple.filter(temple => new Date (temple.dedicated) < new Date(1950, 0, 1)));
            break;
    case 'all':
        displayTemples(temple);
        break;
}
}
getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {sortBy(templeList) });