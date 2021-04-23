const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

//output a prompt
process.stdout.write("prompt > ");

//stdin 'data' event fires after user types a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.slice(0, 4) === "cat ") {
    fileName = cmd.slice(4);
    cat(fileName);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
