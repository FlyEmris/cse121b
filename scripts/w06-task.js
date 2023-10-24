const quote = document.getElementById("quote")
const author = document.getElementById("author")
const api_url = "https://api.themotivate365.com/stoic-quote";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author

}

getquote(api_url);