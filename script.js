nome = prompt('Qual o seu nome?');
idade = prompt('Quantos anos você tem?');
linguagem = prompt('Qual linguagem de programação você está estudando?');
alert('Olá ' + nome +', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!'); 
pergunta = 0;

while (pergunta >=3 || pergunta <=0) {
 pergunta = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO');
};

if (pergunta == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso'); 
} else if (pergunta == 2) {
  alert('Ahh que pena... Tente aprender outras linguagens =D.'); 
}