initTreeEvents();
//scrapeTest();
updateURLS();

/*function scrapeTest() {
  //const axios = require('axios');

  const url = 'https://api.myjson.com/bins/6tbl2';

  axios(url)
    .then(response => {
      const html = response.data;
      console.log(html);
    })
    .catch(console.error);
}*/

function updateURLS() {

  $(".box a").each(function (index) {
    url = "https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/" + $(this).text()
    $(this).attr("href", url);
    $(this).attr("target", "_blank");
  })
}

function initTreeEvents() {
  var toggler = document.getElementsByClassName("box");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("check-box");
    });
  }

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