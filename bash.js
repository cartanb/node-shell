const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

//output a prompt
process.stdout.write("prompt > ");

//stdin 'data' event fires after user types a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    done(pwd());
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.slice(0, 4) === "cat ") {
    const fileName = cmd.slice(4);
    cat(fileName);
  } else if (cmd.slice(0, 5) === "curl ") {
    const webAddress = cmd.slice(5);
    curl(webAddress);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
