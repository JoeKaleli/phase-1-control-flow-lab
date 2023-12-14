function scuberGreetingForFeet(i){
  // Write your code here!\
  let greeting;


  if (i<=400) {
    greeting = "This one is on me!";
  } else if (i>200 && i<= 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else if (i>2500) {
    greeting = "No can do.";
  }
  return greeting;

}


function ternaryCheckCity(destination){
  // Write your code here!
const result =
 destination === "NYC" ? 'Ok, sounds good.' : "No go.";
 return result;

}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  
    
    switch (true) {
      case tipAmount === 'generous':
        return 'Thank you so much.';
      case tipAmount === 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }
  

console.log(switchOnCharmFromTip("not as generous"))