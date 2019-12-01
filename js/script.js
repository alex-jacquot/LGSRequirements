//require ("express");

initTreeEvents();
//scrapeTest();
updateURLS();


function scrapeTest() {
  //const axios = require('axios');

  const url = 'https://api.myjson.com/bins/6tbl2';

  axios(url)
    .then(response => {
      const html = response.data;
      console.log(html);
    })
    .catch(console.error);
}

function updateURLS() {

  $(".box a").each(function (index) {
    /* .each(){getURL()} */
    url = "https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/" + $(this).text()
    $(this).attr("href", url);
    $(this).attr("target", "_blank");
  })
}

function generateTree(){
  let json = getFile("../data/categories.json");
  for (var i = 0; i < arr.length; i++){
    var obj = arr[i];
    for (var categorie in obj){
        $("li").addNode("<span class=\"box\">"+ categorie.name +"</span><ul class=\"nested\">  <li><span class=\"box\"><a href=\"https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/" + categorie.url + ">timing.txt#L5</a></span><br> "+categorie.getURL()+ "</li> </ul>");
    }}
}


function initTreeEvents() {
  var toggler = $(".box");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("check-box");
    });
  }
}

function importJSON(){
  if (typeof server == 'undefined') {
    alert("Server not launched properly")
  }
  getFile("../data/categories.json");
}

function exportJSON(){
  if (typeof server == 'undefined') {
    alert("Server not launched properly")
  }
  downloadJSON();
}




/*$.get(
  {
    url: 'https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/architecture.txt'
    , type: "GET",
    headers: { "Allow-Cross-Origin-Headers": "*" }
  }).then(function (html) {
    // Success response
    var $line = $(html).find('LC7');
    console.log(html)
  }, function () {
    console.log("F********, can't get line");
  });*/