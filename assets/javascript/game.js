$(document).ready(function() {

var wordBase = ["trump", "tradewar", "dataprivacy", "denuclearization", "bullmarket"];

var wins = 0;

var n = 0;

var remainder = 15;

var mirror = [];

var trashbin = [];

var pinpoint = [];

var keyword = wordBase[n];

for (var j = 0; j< keyword.length; j++) {
    mirror[j] = "-";
}

$("#keyword").text(mirror.join(""));
$("#guess-remaining").text(remainder);
$("#win-number").text(wins);

function locations(substring,string){
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
}

function reset(){
    remainder = 15;
    trashbin = [];
    n++;
    keyword = wordBase [n];
    for (var j = 0; j< keyword.length; j++) {
        mirror[j] = "-";
    }
    $("#keyword").text(mirror.join(""));
    $("#guess-remaining").text(remainder);
    $("#already-guessed").text(trashbin);
}

document.onkeyup = function(event) {
    if((remainder > 0 && mirror.join("") !== keyword)) {
        if (keyword.includes(event.key.toLowerCase()) == true) {
            pinpoint = locations(event.key.toLocaleLowerCase(),keyword);
            for (var k = 0; k < pinpoint.length; k++) {
                mirror[pinpoint[k]] = event.key.toLowerCase();
            }
            $("#keyword").text(mirror.join(""));
            }
        else if (trashbin.toString().includes(event.key.toLocaleLowerCase()) == false) {
            trashbin.push(event.key.toLowerCase());
            $("#already-guessed").text(trashbin.join(""));
            remainder--;
            $("#guess-remaining").text(remainder);
            }
        else {
            //do nothing;
             }
    }
    else if (mirror.join("") === keyword) {
        $("#result").text(keyword);
        wins++;
        $("#win-number").text(wins);
        reset();
    }
    else {
        $("#result").text(keyword);
        reset();
    }
    
}  
});
