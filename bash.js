//output a prompt
process.stdout.write("prompt > ");

//stdin 'data' event fires after user types a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");


});
