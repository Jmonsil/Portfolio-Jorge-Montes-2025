
const btnToggle = document.getElementById("btn-toggle");
const conteudo = document.getElementById("conteudo-bem-vindo");


btnToggle.addEventListener("click", () => {
  
  conteudo.classList.toggle("hidden");

  
  if (conteudo.classList.contains("hidden")) {
    btnToggle.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  } else {
    btnToggle.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});

const form = document.getElementById("formContato");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const empresa = form.empresa.value.trim();
  const vaga = form.vaga.value.trim();
  const mensagem = form.mensagem.value.trim();
  console.log(empresa, vaga, mensagem);

  const corpoEmail = `Empresa: ${empresa} \nVaga: ${vaga} \nMensagem: ${mensagem}`;

  form.action = `mailto:jm18103797.jm@gmail.com?subject=****Contato%20${empresa}%20Vaga%20${vaga}&body=${encodeURIComponent(
    corpoEmail
  )}`;
  form.submit();
});