import pegaArquivo from './index.js';
import chalk from 'chalk';
import validaURLs from './http-validacao.js'

const caminho = process.argv;

async function processaTexto(caminhoTerminal) {
    const resultado = await pegaArquivo(caminhoTerminal[2]);
    if (caminhoTerminal[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('lista de links'), resultado)
    }
}

processaTexto(caminho)