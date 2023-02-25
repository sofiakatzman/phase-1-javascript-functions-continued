// code your solution here


let defaultActivity = "roller-skate"
function saturdayFun(activity = defaultActivity) {
    return `This Saturday, I want to ${activity}!`;
  }

let defaultMonday = "go to the office"
const mondayWork = function(activity = defaultMonday) {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective (visualFlair = "*") {
  const result = function(parameter = "special") {
    return `You are ${visualFlair}${parameter}${visualFlair}!`}
    return result;
}