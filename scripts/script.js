const btnImg = document.querySelector("#btnImg"),
  btnAgain = document.querySelector("button"),
  figureCokie = document.querySelector("#cokie"),
  figureOpenCokie = document.querySelector("#openCokie");

let luckyMsg = document.querySelector("#msg"),
  random = Math.floor(Math.random() * 11),
  msgList = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  ];

OnOrOffHideFigures = () => {
  figureCokie.classList.toggle("hide");
  figureOpenCokie.classList.toggle("hide");
  luckyMsg.innerText = msgList[random];
};

openCokie = (e) => {
  e.preventDefault();
  OnOrOffHideFigures();
};

againCokie = (e) => {
  e.preventDefault();
  OnOrOffHideFigures();
  random = Math.floor(Math.random() * 11);
};

btnImg.addEventListener("click", openCokie);
btnAgain.addEventListener("click", againCokie);
