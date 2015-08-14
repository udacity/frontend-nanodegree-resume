Consider adding these functions into the Online Resume for the enhacements branch.

$(document).ready(function(){
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
});


Sample CSS for a button!

div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}