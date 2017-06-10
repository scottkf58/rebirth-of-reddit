console.log("Hello World!");

var cardContainer = document.getElementById("cardContainer");

var leftCard = document.getElementById("leftTop");


function requestListener(link, listener) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", listener);
  newReq.open("GET", link);
  newReq.send();
}

function createCard() {
  var cardObject = JSON.parse(this.responseText).data.children;

  for(var i = 0; len = cardObject.length, i < len; i++) {
  console.log(cardObject[i].data);

  var cardDiv = document.createElement('div');
  cardDiv.className = "cardDiv";
  cardDiv.style.backgroundColor = "white";
  cardDiv.style.height = "50vh";
  cardDiv.style.height = "30wh";
  cardDiv.style.margin = "10px";
  document.body.appendChild(cardDiv);

  var cardImg = document.createElement("div");
  cardImg.className = "cardImg";
  cardImg.innerHTML = "";
  cardDiv.appendChild(cardImg);

  var cardTitle = document.createElement("h2");
  cardTitle.className = "cardTitle";
  cardTitle.innerHTML = cardObject[i].data.title;
  cardDiv.appendChild(cardTitle);

  var cardBy = document.createElement("div");
  cardBy.className = "cardBy";
  cardBy.innerHTML = cardObject[i].data.author + " -- " + cardObject[i].data.created;
  cardDiv.appendChild(cardBy);

  var cardContent = document.createElement("div");
  cardContent.className = "cardContent";
  cardDiv.appendChild(cardContent);

  }
}

requestListener("http://www.reddit.com/r/travel.json", createCard);
