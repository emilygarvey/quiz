/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val()
        var Name = name.charAt(0).toUpperCase() + name.slice(1);
        var animal = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1inches").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;

        var q1num = height(q1Result);
        var q2num = fun(q2Result);
        var q3num = day(q3Result);

        totalScore = q1num + q2num + q3num;
        
        var animal = total(totalScore, Name);

        $(".result").html(animal);
    });
    
function height(inches){
    if (inches > "8") {
        return 3;
    } else if (inches > "3" && inches < "9") {
        return 2; 
    } else if (inches > "12") {
        return 4;
    } else {
        return 1;
    }
}
function fun(verb){
    if (verb === "read") {
        return 1;
    } else if (verb === "listen") {
        return 2;
    } else if (verb === "talk") {
        return 3;
    } else if (verb === "play") {
        return 4;
    } else {
        return 2;
    }
}

function day(time) {
    if (time === "morning") {
        return 1;
    } else if (time === "evening") {
        return 2;
    } else if (time === "night") {
        return 3;
    } else if (time === "afternoon") {
        return 4;
    } else {
        return 2;
    }
}

function total(score, name) {
    if (score >= 9) {
        return "Congrats, " + name + "! You are a tiger";
    } else if (score >= 6) {
        return "Congrats, " + name + "! You are a penguin";
    } else if (score >= 3) {
        return "Congrats, " + name + "! You are a mouse";
    } else {
        return "Congrats, " + name + "! You are a spider";
    }
}

});