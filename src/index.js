import chalk from 'chalk';
import { suma, multiplica } from './utilities/controller.js';

const result = suma(1, 2);

const getResult = suma(4, 5);

console.log(chalk.green(multiplica(result, getResult)));
