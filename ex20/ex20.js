const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linhas = [];
rl.on('line', (linha) => {
    linhas.push(linha);
    
    if (linhas.length === 1) {
        linhas.push((input.split(' '))[0]);
        linhas.push((input.split(' '))[1]);
        linhas.push((input.split(' '))[2]);    
        Sort(linhas);
        rl.close();
    }
});


function Sort(S){
	 

}
