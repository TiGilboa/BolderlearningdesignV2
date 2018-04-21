console.log("this is my javascript file");
$("document").ready(function(){
  console.log("thisisjqueryhappening");

  $('#button').click(function(){
    alert("get started!")
  })



})

$(".button-collapse").sideNav();


(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();



(function() {

    var quotez = $(".quotez");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotez.eq(quoteIndex % quotez.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();
