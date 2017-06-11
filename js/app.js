console.log("Hello World!");

var cardContainer = document.getElementById("cardContainer");

function requestListener(link, listener) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", listener);
  newReq.open("GET", link);
  newReq.send();
}

function createCard() {
  var cardObject = JSON.parse(this.responseText).data.children;
  var placeHolderUrl = "http://www.clker.com/cliparts/B/u/S/l/W/l/no-photo-available-md.png";
  var imageUrl = "Can't find me";



  for(var i = 0; i < cardObject.length; i++) {
    console.log(cardObject[i].data);
    if(cardObject[i].data.preview) {
      imageUrl = cardObject[i].data.preview.images[0].source.url;
    } else {
      imageUrl = placeHolderUrl;
    }

    var cardDiv = document.createElement('div');
    cardDiv.className = "cardDiv";
    cardDiv.style.backgroundColor = "white";
    cardDiv.style.height = "50vh";
    cardDiv.style.width = "30vw";
    cardDiv.style.margin = "3vh";
    cardContainer.appendChild(cardDiv);

    var cardImg = document.createElement("div");
    cardImg.className = "cardImg";
    var photo = imageUrl || placeHolderUrl;
    cardImg.style.backgroundImage = `url(${photo})`;
    cardImg.style.height = "30vh";
    cardImg.style.width = "30vw";
    cardImg.style.margin = "3vh";
    cardDiv.appendChild(cardImg);

    var cardTitle = document.createElement("h2");
    cardTitle.className = "cardTitle";
    cardTitle.innerHTML = cardObject[i].data.title;
    cardTitle.style.display = "flex";
    cardDiv.appendChild(cardTitle);

    var cardBy = document.createElement("div");
    cardBy.className = "cardBy";
    cardBy.innerHTML = "Author: " + cardObject[i].data.author + " - " + "Date: " + cardObject[i].data.created;
    cardDiv.appendChild(cardBy);

    var cardContent = document.createElement("div");
    cardContent.className = "cardContent";
    cardContent.innerHTML = cardObject[i].data.num_comments + " comments";
    cardDiv.appendChild(cardContent);

  }
}

requestListener("https://www.reddit.com/r/Sneakers.json", createCard);
