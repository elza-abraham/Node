/* process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})
 */

// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   if (cmd === 'pwd'){
//     process.stdout.write(process.cwd());
//     process.stdout.write('\nprompt > ');
//   }
// });

const customPrompt = outputData => {
  console.log(outputData)
  process.stdout.write('>')
};
customPrompt('Hello Welcome to node')

process.stdin.on('data', (data) => {
  const entry = data.toString().trim();
  const [cmd, arg] = entry.split(' ');
  switch (cmd) {
    case 'pwd':
      require('./pwd')(customPrompt);
      break;
    case 'ls':
      require('./ls')(customPrompt);
      break;
    case 'cat':
      require('./cat')(customPrompt, arg);
      break;
    case 'curl':
      require('./curl')(customPrompt, arg);
      break;
    default:
      customPrompt('Command not found')
  }
})

