 const questoes = [
     {pergunta: "Qual método remove o último elemento de um array?", opcoes: ["shift()", "pop()", "push()", "slice()"], correta: 1},
     {pergunta: "Qual é a capital do Brasil?", opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correta: 2},
     {pergunta: "Qual planeta é conhecido como Planeta Vermelho?", opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"], correta: 1},
     {pergunta: "Quanto é 7 x 8?", opcoes: ["54", "56", "64", "58"], correta: 1},
     {pergunta: "Qual destes é um oceano?", opcoes: ["Amazônia", "Saara", "Andes", "Atlântico"], correta: 3}
];
const indiceAleatorio = Math.floor(Math.random() * questoes.length);
const questaoAtual = questoes[indiceAleatorio];

document.getElementById('pergunta-texto').textContent = questaoAtual.pergunta;
const botoes = document.querySelectorAll('.opcao-btn');
const feedback = document.getElementById('feedback');

botoes.forEach((btn, index) => {
     btn.textContent = questaoAtual.opcoes[index];
    
     btn.addEventListener('click', () => {
        if (index === questaoAtual.correta) {
        btn.classList.add('correto');
        feedback.textContent = "🎉 Resposta Correta!";
        feedback.style.color = "#4CAF50";
        botoes.forEach((sobraBtn, indexSobra) => {
          if(indexSobra !== index) {
            sobraBtn.style.visibility = 'hidden';
          }
        })
        } else {
        btn.classList.add('errado');
        feedback.textContent = "❌ Resposta Incorreta!";
        feedback.style.color = "#F44336";
        botoes.forEach((sobraBtn, indexSobra) => {
          if(indexSobra !== index) {
            sobraBtn.style.visibility = 'hidden';
          }
        })
        }
   });
})