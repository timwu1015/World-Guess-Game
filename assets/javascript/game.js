$(document).ready(function() {

var wordBase = ["trump", "tradewar", "dataprivacy", "denuclearization", "bullmarket"];

var wins = 0;

function locations(substring,string){
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
  }


$("#win-number").text(wins);

$("#start-game").on("click", function() {

    var keyword = wordBase[0];

    var remainder = 15;

    $("#guess-remaining").text(remainder);

    var mirror = [];

    var trashbin = [];

    var pinpoint = []

    for (var j = 0; j< keyword.length; j++) {
        mirror[j] = "-";
    }

    $("#keyword").text(mirror.join(""));

    while (remainder > 0 && mirror !== keyword.split("")) {
        document.onkeyup = function(event) {
            if (keyword.includes(event.key.toLowerCase()) == true) {
                pinpoint = locations(event.key.toLocaleLowerCase(),keyword);
                for (var k = 0; k < pinpoint.length; k++) {
                    mirror[pinpoint[k]] = event.key.toLowerCase();
                }
                $("#keyword").text(mirror.join(""));
            }
            else {
                trashbin.push(event.key.toLowerCase());
                $("#already-guessed").text(trashbin.join(""));
                remainder--;
                $("#guess-remaining").text(remainder);
            }
        }
    } 
    
    $("#result").text(keyword);}
   
    

    





});

});