let chalk = require('chalk');

let log = console.log;

log(chalk.red('Hello') + ' ' + chalk.yellow('World' + chalk.cyan('!')));

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.red('H') + chalk.green('e') + chalk.yellow('l') + chalk.blue('l') + chalk.magenta('o') + ' ' + chalk.cyan('W') + chalk.magenta('o') + chalk.blue('r') + chalk.yellow('l') + chalk.green('d'));