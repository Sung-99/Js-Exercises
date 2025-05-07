const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linhas = [];
rl.on('line', (input) => {
    
    
    if (linhas.length < 1) {
        linhas.push(Number((input.split(' '))[0]));
        linhas.push(Number((input.split(' '))[1]));
        linhas.push(Number((input.split(' '))[2]));    
        Sort(linhas);
        rl.close();
    }
});


function Sort(S){
	 console.log(typeof Number(linhas[1]) === 'number');

}
