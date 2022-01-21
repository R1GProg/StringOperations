function init() {
  console.log("Ready");
  const processBtn = document.getElementById("processBtn");
  processBtn.addEventListener("click", processCommand);
}

function processCommand() {
  console.log("Process");
  const inputText = document.getElementById("command");
  const inputCommand = inputText.value;

  const commandParts = inputCommand.split(/ +/);
  const commandName = commandParts[0].toLowerCase().trim();

  if (commandName === "set-color") {
    const outputText = document.getElementById("output");
    outputText.style.backgroundColor = commandParts[1];
    return;
  }

  if (commandName === "encrypt") {
    const charList = commandParts[1].split("");
    const charCodeList = charList.map(value => value.charCodeAt(0));
    const encrCodeList = charCodeList.map(value => value + 1);
    const encrCharList = encrCodeList.map(value => String.fromCharCode(value));
    outputTextValue(encrCharList.join(""));
    return;
  }

  // .charAt
  //outputTextValue(inputCommand.charAt(0) + inputCommand.charAt(1));
  // Output the first char (broken symbol in case of emoji)
  outputTextValue(inputCommand.charAt(0));
  // Output the first two chars (one symbol in case of emoji)
  outputTextValue(inputCommand.substring(0, 2));
  /*
  Character indexes for string 😜a😊b
  [0][1][2][3][4][5]
  [  😜][a][ 😊 ][b]
  */
  // Split string, get an array of parts
  //const paramArray = inputCommand.split(","); // A single comma
  const paramArray = inputCommand.split(/ *, */); // Comma, with zero or more spaces around it
  console.log(paramArray);
  // Join the array elements, creating a single string
  console.log(paramArray.join("###"));
  // Get the number of character in the string (be aware emojis take up two chars)
  outputTextValue(inputCommand.length);
  // Convert to upper/lower case
  outputTextValue(inputCommand.toUpperCase());
  outputTextValue(inputCommand.toLowerCase());
}

function outputTextValue(text) {
  const outputText = document.getElementById("output");
  if (outputText.value === "") {
    outputText.value = text;
  } else {
    outputText.value = text + "\n" + outputText.value;
  }
}