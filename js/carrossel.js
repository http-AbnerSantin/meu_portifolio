export default function carrossel() {
  const container = document.querySelector(".projetos-ul");
  const btnEsquerda = document.querySelector(".seta.esquerda");
  const btnDireita = document.querySelector(".seta.direita");

  btnDireita.addEventListener("click", () => {
    container.scrollBy({ left: 520, behavior: "smooth" });
  });

  btnEsquerda.addEventListener("click", () => {
    container.scrollBy({ left: -520, behavior: "smooth" });
  });
}
