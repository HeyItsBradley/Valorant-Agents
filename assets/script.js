//Variables
let api = "https://valorant-api.com/v1/agents";
let apiData = "";
let agentApi = "https://valorant-api.com/v1/agents/";

//functions
$(document).ready(function () {
  function getApi() {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let charArr = [];
        for (let i = 0; i < data.data.length; i++) {
          charArr.push(data.data[i]);
        }

        charArr.splice(7, 1);
        console.log(charArr);

        for (let i = 0; i < charArr.length; i++) {
          console.log("second loop is runninog");
          if (i === 0) {
            let makeDiv = document.createElement("div");
            let makeImg = document.createElement("img");
            let makeInnerDiv = document.createElement("div");
            let makeCaption = document.createElement("h2");
            let background = data.data[i].background;

            makeDiv.setAttribute("role", "listbox");
            makeDiv.className = "carousel-item active";
            makeImg.setAttribute("src", charArr[i].fullPortrait);
            makeImg.setAttribute("fullImg", charArr[i].fullPortrait);
            makeImg.setAttribute("uuid", charArr[i].uuid);

            makeImg.className = "d-block w-100 ";
            makeImg.style = "box-shadow:100px black;";
            makeInnerDiv.className = "carousel-caption d-none d-md-block";

            makeImg.id = "img";
            makeImg.style.background =
              "url(" + background + ") no-repeat center";
            document.getElementById("innerC").appendChild(makeDiv);

            makeDiv.appendChild(makeImg);
            makeDiv.appendChild(makeInnerDiv);
            makeInnerDiv.appendChild(makeCaption);

            i++;
          }

          let makeDiv = document.createElement("div");
          let makeImg = document.createElement("img");
          let makeInnerDiv = document.createElement("div");
          let makeCaption = document.createElement("h2");
          let background = data.data[i].background;

          makeDiv.setAttribute("role", "listbox");
          makeDiv.className = "carousel-item";
          makeImg.setAttribute("src", charArr[i].fullPortrait);
          makeImg.className = "d-block w-100";
          makeInnerDiv.className = "carousel-caption d-none d-md-block";

          makeImg.setAttribute("fullImg", charArr[i].fullPortrait);
          makeImg.setAttribute("uuid", charArr[i].uuid);
          makeImg.style.background = "url(" + background + ") no-repeat center";
          makeImg.id = "img";

          document.getElementById("innerC").appendChild(makeDiv);

          makeDiv.appendChild(makeImg);
          makeDiv.appendChild(makeInnerDiv);
          makeInnerDiv.appendChild(makeCaption);
        }
        for (let i = 0; i < charArr.length; i++) {
          let makeDiv = document.createElement("div");
          let makePic = document.createElement("img");

          makeDiv.className = "";
          makePic.setAttribute("src", charArr[i].displayIconSmall);
          makePic.setAttribute("fullImg", charArr[i].fullPortrait);
          makePic.setAttribute("uuid", charArr[i].uuid);
          makePic.className = "m-3  p-2";
          makePic.style = "max-height:7vw";
          makePic.id = "img";

          document.getElementById("charSection").appendChild(makePic);
          // makeDiv.appendChild(makePic);
        }
      });
  }

  getApi();
});
//event listeners
//on click of image
//create a div
//withing div, append img, background
//create and append paragraph underneath with char description
//create div with abilities imgs
//maybe on hover of abilities, display a pop up text with description
let makeDiv = document.createElement("div");
let makeImg = document.createElement("img");
let makeP = document.createElement("p");

document.getElementById("appendImg").appendChild(makeDiv);
document.getElementById("appendImg").appendChild(makeP);
makeDiv.appendChild(makeImg);

$(document).on("click", "#img", function () {
  const img = this;
  let getUuid = img.getAttribute("uuid");

  fetch(agentApi + getUuid)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let background = data.data.background;

      makeDiv.className = "d-flex justify-content-center";
      makeImg.setAttribute("src", data.data.fullPortrait);
      makeImg.style = "width: 50vw";
      makeImg.style.background = "url(" + background + ") no-repeat center";
      makeP.textContent = data.data.description;
      makeP.className = "text-center text-light fs-2 m-3 col-8";
    });
});
