
player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;


document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player_question").innerHTML = "Question Turn - "+ player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player2;

function send (){

    number1 = document.getElementById("number1").value ;
    console.log(number1);
    number2 = document.getElementById("number2").value ;
    console.log(number2);
    actualans = parseInt(number1) * parseInt(number2);

    question_no = "<h4>" + number1 + "X" + number2 + "</h4>";
    inputbox = "<br> Answer : <input type = 'text' id = 'input_check_box'> ";
    checkbutton = "<br><br> <button class = 'btn btn-info' onclick = 'check()' > Check </button>";
    row = question_no + inputbox + checkbutton ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){

    getanswer = document.getElementById("input_check_box").value;

    if (getanswer == actualans){

        if(answer_turn == "player1"){

            update_player1_score = player1_score + 1 ;
            document.getElementById("player1_score").innerHTML = update_player1_score;

        }
        else {

            update_player2_score = player2_score + 1 ;
            document.getElementById("player2_score").innerHTML = update_player2_score;

        }
    }
    if (question_turn == "player1"){
        
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
    }
    else{

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
    }
     
    if (answer_turn == "player1"){
        
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
    }
    else{

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}