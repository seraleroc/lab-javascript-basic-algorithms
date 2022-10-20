// Iteration 1: Names and Input
//
// Create a variable with the driver's name and Print
let driverName = "Sergio"
    console.log(driverName)

// Create a variable with the navigator's name and print "hacker1 "The driver's name is XXXX"hacker2"The navigator's name is YYYY"".    
let navigatorName = "Marcela"
    console.log("hacker1, The driver's name is", driverName)
    console.log("hacker2, The navigator's name is", navigatorName)

// Iteration 2: Conditionals

// Depending on which name is longer, print: "The driver has the longest name, it has XX characters or It seems that the navigator has the longest name or it has XX characters.Wow, you both have equally long names, XX characters!"
if (driverName.length > navigatorName.length) {
    console.log("The Driver has the longest name, it has "+driverName.length+" characters");
  } 
else if (driverName.length < navigatorName.length) {
    console.log("It seems that the navigator has the longest name, it has "+navigatorName.length+" characters");
  } 
else if (driverName.length === navigatorName.length) {
    console.log("Wow, you both have equally long names, "+driverName.length+" characters!!");
}


// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals
var printVar = ""
for (let i = 0 ; i < driverName.length ; i++){
  printVar += driverName[i]+ " ";
}
console.log(printVar.toUpperCase());

// Print all the characters of the navigator's name, in reverse order.
let printVar2 = ""
for (let i = navigatorName.length -1; i >= 0; i--){
    printVar2 += navigatorName[i];
}
console.log(printVar2);

// Depending on the lexicographic order of the strings, print:
//  - The driver's name goes first.
//  - Yo, the navigator goes first definitely.
//  - What?! You both have the same name?

if( driverName.localeCompare(navigatorName) === -1){
    console.log("The driver's name goes first.");
  } else if (driverName.localeCompare(navigatorName) === 1){
    console.log("The navigator goes first definitively.");
  } else {
    console.log("What you both got the same name.");
  }

// Contador de Palavras em 3 paragrafos Lorem Ipsum 

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et cursus massa. Cras ullamcorper felis at felis aliquet sollicitudin. Vivamus lorem odio, consectetur et imperdiet ac, commodo eget libero. Praesent nec orci laoreet, iaculis ligula a, laoreet mauris. In faucibus enim iaculis, convallis metus aliquet, convallis enim. Quisque nunc orci, blandit vel facilisis ut, congue maximus tortor. Donec non felis vehicula, tincidunt leo non, malesuada erat. Ut eget commodo leo, vitae hendrerit risus. Nullam iaculis dignissim nisl ac tincidunt. Pellentesque dapibus eros et pulvinar pharetra. Donec volutpat suscipit aliquet. Etiam id finibus nunc, sit amet tempus quam. Sed bibendum volutpat tincidunt. Mauris neque diam, mattis sed iaculis ut, bibendum et erat. Donec vel facilisis est. Sed massa ante, mattis nec nulla vel, aliquet vehicula tortor. Praesent eu vehicula metus, vel finibus erat. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in ipsum vitae odio consequat gravida. Donec nibh erat, dapibus volutpat libero sed, posuere tincidunt diam. Maecenas ut mattis lorem. Mauris et congue nulla, ac egestas ex. Maecenas porta, lorem id tempor imperdiet, nisl nibh ullamcorper arcu, mollis finibus quam urna lacinia nunc. Etiam nec elementum ex. Integer porttitor id mi sed mollis. Suspendisse nec lobortis lorem, eu dictum ante. Phasellus eleifend sed tortor vitae suscipit. Cras pulvinar purus nec suscipit tincidunt. Fusce mollis lacinia nibh ut tincidunt. Curabitur id fermentum sapien, quis imperdiet tellus. Duis sollicitudin rutrum leo, at molestie magna ullamcorper a. Pellentesque interdum nulla ac nunc eleifend, id luctus urna volutpat. Ut luctus sapien non libero pretium euismod. In in leo a ante consequat sollicitudin. Nulla at urna hendrerit, mattis purus ut, cursus augue.";
let wordCount = 1;
for(let i = 0 ; i < loremIpsum.length ; i++){
  if(loremIpsum[i] === " "){
    wordCount += 1;
  }
}
console.log("This paragraph has " + wordCount + " words");

// Contador de "et" nos 3 paragrafos Lorem Ipsum

let etContador = 0;
for(let i = 0 ; i < loremIpsum.length ; i++){
  if(loremIpsum[i] + loremIpsum[i+1] === "et"){
    etContador += 1;
  }
}
console.log(etContador);

// Verificador de Palindromos


const string = "step on no pets"

function checkPalindromo(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const value = checkPalindromo(string);

console.log(value)
