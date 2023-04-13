// code your solution here
function saturdayFun(activity = "roller-skate") {
    return`This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
//function wrapAdjective(life = "special") {
    //return `You are ${life}!`;

function wrapAdjective(flair = "*") {
    return function(life = "special") {
        return `You are ${flair}${life}${flair}!` ;
    }
}

