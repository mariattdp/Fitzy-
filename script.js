const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const lookIdeas = {
  "Romântico": {
    base: "Blusa delicada + calça de corte reto + sapatilha ou tênis claro.",
    extra: "Finalize com acessórios delicados e uma bolsa pequena."
  },
  "Casual": {
    base: "Camiseta confortável + jeans favorito + tênis.",
    extra: "Uma terceira peça leve deixa o visual mais interessante."
  },
  "Clássico": {
    base: "Camisa ou blusa estruturada + calça de alfaiataria + mocassim.",
    extra: "Prefira acessórios discretos e uma bolsa de linhas simples."
  },
  "Moderno": {
    base: "Top de linhas simples + peça de modelagem ampla + tênis urbano.",
    extra: "Brinque com proporções e escolha um acessório de destaque."
  },
  "Minimalista": {
    base: "Peças de corte limpo + sobreposição leve + calçado neutro.",
    extra: "Aposte em texturas diferentes para criar interesse sem excesso."
  },
  "Criativo": {
    base: "Combine uma peça estampada com outra de cor complementar.",
    extra: "Use um acessório divertido para dar personalidade ao look."
  }
};

const colorTips = {
  "Rosa": "Inclua o rosa em uma peça principal ou em um acessório.",
  "Preto": "Use o preto como base e equilibre com uma textura mais leve.",
  "Branco": "Uma peça branca ilumina a combinação e combina com quase tudo.",
  "Azul": "Jeans ou azul em outra tonalidade cria uma composição harmônica.",
  "Jeans": "Deixe o jeans ser a peça-chave e varie a parte de cima.",
  "Neutros": "Misture bege, branco, marrom ou cinza para um visual suave.",
  "Surpreenda-me": "Escolha uma cor que você quase não usa e transforme-a no ponto de destaque."
};

document.getElementById("lookForm").addEventListener("submit", event => {
  event.preventDefault();
  const occasion = document.getElementById("occasion").value;
  const style = document.getElementById("style").value;
  const color = document.getElementById("color").value;
  const idea = lookIdeas[style];
  const result = document.getElementById("lookResult");
  result.innerHTML = `
    <span class="result-icon" aria-hidden="true">✧</span>
    <div><strong>Seu look ${style.toLowerCase()} para ${occasion.toLowerCase()}:</strong>
    <p>${idea.base} ${colorTips[color]} ${idea.extra}</p>
    <small>Use essa ideia como ponto de partida e adapte às peças que você já tem no guarda-roupa. ♡</small></div>`;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
