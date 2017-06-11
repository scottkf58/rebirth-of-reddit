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
  var placeHolderUrl = "https://keyes.ie/wp-content/uploads/2010/08/Google-404.png";
  var imageUrl = "Can't find me";



  for(var i = 0; i < cardObject.length; i++) {

    if(cardObject[i].data.preview) {

      imageUrl = cardObject[i].data.preview.images[0].source.url;

    } else {
      imageUrl = placeHolderUrl;
    }
    //console.log(imageUrl)


    var cardDiv = document.createElement('div');
    cardDiv.className = "cardDiv";
    cardDiv.style.backgroundColor = "white";
    cardDiv.style.height = "80vh";
    cardDiv.style.height = "30wh";
    cardDiv.style.margin = "10px";
    document.body.appendChild(cardDiv);

    var cardImg = document.createElement("div");
    cardImg.className = "cardImg";
    var photo = imageUrl || placeHolderUrl;
    cardImg.style.backgroundImage = `url(${photo})`;
    cardImg.style.height = "40vh";
    cardImg.style.height = "20wh";
    cardImg.style.margin = "10px";
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
    cardContent.innerHTML = "";
    cardDiv.appendChild(cardContent);



  }
}

requestListener("http://www.reddit.com/r/travel.json", createCard);
