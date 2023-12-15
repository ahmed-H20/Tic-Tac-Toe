let turn='x';
let title = document.querySelector('.title');
let squires = [];

function end(num1, num2, num3){
    title.innerHTML = `${squires[num1]} is Winner`;
    document.getElementById('item'+num1).style.background = "#000";
    document.getElementById('item'+num2).style.background = "#000";
    document.getElementById('item'+num3).style.background = "#000";
    
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);

}

function winner(){
    for(let i=1; i<10; i++){
        squires[i] = document.getElementById('item'+i).innerHTML;    
    }
    if(squires[1] == squires[2] && squires[2] == squires[3] && squires[1] != ''){
        end(1,2,3);
    }
    else if(squires[4] == squires[5] && squires[5] == squires[6] && squires[5] != ''){
        end(4,5,6);
    }
    else if(squires[7] == squires[8] && squires[8] == squires[9] && squires[9] != ''){
        end(7,8,9);
    }
    else if(squires[1] == squires[4] && squires[4] == squires[7] && squires[1] != ''){
        end(1,4,7);
    }
    else if(squires[2] == squires[5] && squires[5] == squires[8] && squires[2] != ''){
        end(2,5,8);
    }
    else if(squires[3] == squires[6] && squires[6] == squires[9] && squires[3] != ''){
        end(3,6,9);
    }
    else if(squires[1] == squires[5] && squires[5] == squires[9] && squires[1] != ''){
        end(1,5,9);
    }
    else if(squires[3] == squires[5] && squires[5] == squires[7] && squires[5] != ''){
        end(3,5,7);
    }
}


function game(id){
    let element = document.getElementById(id);
    if(element.innerHTML == '' && turn === 'x'){
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if(element.innerHTML == '' && turn === 'o'){
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner();
}


