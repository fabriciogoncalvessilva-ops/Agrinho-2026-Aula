// ETAPA A1 - Complexidade - NÃ­vel 1: JavaScript mÃ­nimo funcional
// ETAPA 1 - COMPLEXIDADE DOS CÃ“DIGOS - NÃVEL 1
console.log("Projeto Agrinho 2026 carregado: Agro forte, futuro sustentÃ¡vel.");

// ETAPA A3 - Complexidade - NÃ­vel 3: variÃ¡veis para guardar elementos do DOM
const botaoMenu = document.querySelector("#botaoMenu");
const menuPrincipal = document.querySelector("#menuPrincipal");
const formImpacto = document.querySelector("#formImpacto");
const botaoCalcular = document.querySelector("#botaoCalcular");
const botaoLimpar = document.querySelector("#botaoLimpar");
const pontuacao = document.querySelector("#pontuacao");
const barraProgresso = document.querySelector("#barraProgresso");
const mensagemResultado = document.querySelector("#mensagemResultado");
const listaAcoes = document.querySelector("#listaAcoes");
const nomePropriedade = document.querySelector("#nomePropriedade");
const formIdeia = document.querySelector("#formIdeia");
const nomeVisitante = document.querySelector("#nomeVisitante");
const ideiaVisitante = document.querySelector("#ideiaVisitante");
const muralIdeias = document.querySelector("#muralIdeias");
const mensagemIdeia = document.querySelector("#mensagemIdeia");
const botaoTema = document.querySelector("#botaoTema");
const botaoFonte = document.querySelector("#botaoFonte");

// ETAPA A2 - Complexidade - NÃ­vel 2: captura de evento simples para abrir e fechar menu
// ETAPA 2 - COMPLEXIDADE DOS CÃ“DIGOS - NÃVEL 2
function alternarMenu() {
    const menuAberto = menuPrincipal.classList.toggle("ativo");
    botaoMenu.setAttribute("aria-expanded", String(menuAberto));
}

// ETAPA A4 - Complexidade - NÃ­vel 4: funÃ§Ã£o separada para buscar aÃ§Ãµes marcadas sem redundÃ¢ncia
function obterAcoesSelecionadas() {
    return Array.from(document.querySelectorAll("input[name='acao']:checked"));
}

// ETAPA A4 - Complexidade - NÃ­vel 4: lÃ³gica de pontuaÃ§Ã£o isolada e clara
function calcularPontuacao(acoesSelecionadas) {
    return acoesSelecionadas.reduce((total, acao) => total + Number(acao.value), 0);
}

// ETAPA A4 - Complexidade - NÃ­vel 4: mensagem personalizada conforme resultado e nome informado
function criarMensagem(pontos, nome) {
    const identificacao = nome.trim() || "Sua propriedade";

    if (pontos >= 80) {
        return `${identificacao} estÃ¡ no caminho de um futuro sustentÃ¡vel, com prÃ¡ticas fortes de equilÃ­brio ambiental.`;
    }

    if (pontos >= 50) {
        return `${identificacao} jÃ¡ tem boas atitudes sustentÃ¡veis e pode avanÃ§ar ainda mais com planejamento.`;
    }

    if (pontos > 0) {
        return `${identificacao} comeÃ§ou a transformaÃ§Ã£o. Novas aÃ§Ãµes podem aumentar a proteÃ§Ã£o da Ã¡gua, do solo e da biodiversidade.`;
    }

    return "Selecione aÃ§Ãµes para descobrir o impacto positivo da propriedade.";
}

// ETAPA A3 - Complexidade - NÃ­vel 3: manipulaÃ§Ã£o do DOM para exibir dados processados
// ETAPA A4 - Complexidade - NÃ­vel 4: interaÃ§Ã£o encadeada com pontuaÃ§Ã£o, barra, lista e classe visual
// ETAPA 4 - COMPLEXIDADE DOS CÃ“DIGOS - NÃVEL 4
function atualizarResultado() {
    const acoesSelecionadas = obterAcoesSelecionadas();
    const pontos = calcularPontuacao(acoesSelecionadas);
    const nomesAcoes = acoesSelecionadas.map((acao) => acao.dataset.nome);

    pontuacao.textContent = pontos;
    barraProgresso.style.width = `${pontos}%`;
    mensagemResultado.textContent = criarMensagem(pontos, nomePropriedade.value);

    listaAcoes.innerHTML = "";
    nomesAcoes.forEach((nomeAcao) => {
        const item = document.createElement("li");
        item.textContent = nomeAcao;
        listaAcoes.appendChild(item);
    });

    const painelResultado = document.querySelector(".resultado");
    painelResultado.classList.toggle("resultado--alto", pontos >= 80);
}

// ETAPA A4 - Complexidade - NÃ­vel 4: limpeza controlada do simulador
function limparResultado() {
    setTimeout(() => {
        pontuacao.textContent = "0";
        barraProgresso.style.width = "0%";
        mensagemResultado.textContent = "Selecione aÃ§Ãµes para descobrir o impacto positivo da propriedade.";
        listaAcoes.innerHTML = "";
        document.querySelector(".resultado").classList.remove("resultado--alto");
    }, 0);
}

// ETAPA A3 - Complexidade - NÃ­vel 3: formulÃ¡rio processado com variÃ¡veis antes de exibir no DOM
// ETAPA 3 - COMPLEXIDADE DOS CÃ“DIGOS - NÃVEL 3
function registrarIdeia(evento) {
    evento.preventDefault();

    const nome = nomeVisitante.value.trim() || "Visitante";
    const ideia = ideiaVisitante.value.trim();

    if (!ideia) {
        mensagemIdeia.textContent = "Digite uma ideia antes de enviar para o mural.";
        ideiaVisitante.focus();
        return;
    }

    const item = document.createElement("li");
    const autor = document.createElement("strong");
    const texto = document.createElement("span");

    autor.textContent = nome;
    texto.textContent = ideia;
    item.appendChild(autor);
    item.appendChild(texto);
    muralIdeias.prepend(item);

    mensagemIdeia.textContent = "Ideia registrada com sucesso no mural desta pÃ¡gina.";
    formIdeia.reset();
}

// ETAPA B4 - Usabilidade - NÃ­vel 4: modo escuro com JavaScript
function alternarTema() {
    document.body.classList.toggle("modo-escuro");
    const modoEscuroAtivo = document.body.classList.contains("modo-escuro");
    botaoTema.textContent = modoEscuroAtivo ? "Voltar ao modo claro" : "Alternar modo escuro";
}

// ETAPA B4 - Usabilidade - NÃ­vel 4: aumento de fonte com JavaScript
function alternarFonte() {
    document.body.classList.toggle("fonte-maior");
    const fonteMaiorAtiva = document.body.classList.contains("fonte-maior");
    botaoFonte.textContent = fonteMaiorAtiva ? "Fonte normal" : "Aumentar fonte";
}

// ETAPA A4 - Complexidade - NÃ­vel 4: contador dinÃ¢mico para indicadores simulados
function animarIndicadores() {
    const indicadores = document.querySelectorAll("[data-contador]");

    indicadores.forEach((indicador) => {
        const valorFinal = Number(indicador.dataset.contador);
        let valorAtual = 0;
        const intervalo = setInterval(() => {
            valorAtual += 1;
            indicador.textContent = valorAtual;

            if (valorAtual >= valorFinal) {
                clearInterval(intervalo);
            }
        }, 24);
    });
}

// ETAPA B3 - Usabilidade - NÃ­vel 3: fechamento do menu apÃ³s clique em link
function fecharMenuAoNavegar() {
    const linksMenu = menuPrincipal.querySelectorAll("a");

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menuPrincipal.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// ETAPA A2 - Complexidade - NÃ­vel 2: eventos conectando botÃµes e inputs Ã  pÃ¡gina
function configurarEventos() {
    botaoMenu.addEventListener("click", alternarMenu);
    botaoCalcular.addEventListener("click", atualizarResultado);
    botaoLimpar.addEventListener("click", limparResultado);
    formImpacto.addEventListener("change", atualizarResultado);
    nomePropriedade.addEventListener("input", atualizarResultado);
    formIdeia.addEventListener("submit", registrarIdeia);
    botaoTema.addEventListener("click", alternarTema);
    botaoFonte.addEventListener("click", alternarFonte);
    fecharMenuAoNavegar();
}

// ETAPA A4 - Complexidade - NÃ­vel 4: inicializaÃ§Ã£o organizada em uma funÃ§Ã£o principal
function iniciarProjeto() {
    configurarEventos();
    atualizarResultado();
    animarIndicadores();
}

iniciarProjeto();