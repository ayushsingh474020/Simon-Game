window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
var colors=["green","red","yellow","blue"];
var level=0;
var selectedButton=[];
var clickedButton=[];
console.log(clickedButton);
var counter=0;
if(level===0){
    $(document).keypress(function(){
        if(level===0){
            return start();
        }
                
    })
}


function passed(){
    level++;
    counter=0;
    $("h1").text("Level "+level);
    addcolor();
    clickedButton=[];
}
function addcolor(){
    var number=Math.floor(Math.random()*4);
    selectedButton.push(colors[number]);
    console.log(selectedButton);
    $("#"+colors[number]).animate({opacity:0.1});
    setTimeout(() => {
        $("#"+colors[number]).animate({opacity:1});
    }, 10);
}
function failed(){
    var audio = new Audio('./sounds/wrong.mp3');
    audio.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
    $(document).keypress(function(){
        counter=0;
        start();
    })
}
function start(){
    level=1;
    $("h1").text("Level "+level);
    console.log("Level "+level);
    selectedButton=[];
    clickedButton=[];
    addcolor();
    // userInputs();
    

}
// function userInputs(){
//     while(counter<level){
//         $("button").click(function(){
//             clickedButton.push(this.text());
//             $("#"+this.text()).addClass("pressed");
//             setTimeout(() => {
//                 $(document).removeClass("pressed");
//             }, 100);
//             counter++;
//         })
//     }
//     for(var i=0 ; i<selectedButton.length ; i++){
//         if(selectedButton[i]!=clickedButton[i]){
//             return failed();
//         }
//     }
//     return passed();
    
    
// }
$(".btn").click(function(){
    if(level>0){
        var name=$(this).attr("id");
        var audio1 = new Audio("./sounds/"+name+".mp3");
        audio1.play();
        clickedButton.push(name);
        $("#"+name).addClass("pressed");
        setTimeout(() => {
            $("#"+name).removeClass("pressed");
        }, 100);
        if(clickedButton[counter]!=selectedButton[counter]){
            return failed();
        }
        counter++;
        if(counter===level){
            for(var i=0 ; i<selectedButton.length ; i++){
                if(selectedButton[i]!=clickedButton[i]){
                    return failed();
                }
            }
            setTimeout(() => {
                return passed();
            }, 1000);
            
        }
    }
    
})


