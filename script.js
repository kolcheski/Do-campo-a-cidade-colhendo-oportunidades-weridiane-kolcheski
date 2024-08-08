const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você tem interesse em conhcer as oportunidades que o campo oferece ?",
        alternativas: [
            {
                texto: "não conheço,mas tenho interesse",
                afirmacao: "Poderá assim trabalhar com produtores rurais exercendo seu aprendizado ou abrindo seu próprio negócio."
            },
            {
                texto: "sim conheço, mas quero aprender mais",
                afirmacao: "Poderá assim trabalhar com produtores rurais exercendo seu aprendizado ou abrindo seu próprio negócio."
            }
        ]
    },
    {
        enunciado: "as principais atividades  econômicas no campo rural são= AGRICULTURA: Cultivo de plantas para alimentação, fibras, biocombustíveis e outros produtos. PECUÀRIA: Criação de animais para produção de carne, leite, ovos, couro, etc. SILVICULTURA: Manejo de florestas para produção de madeira e outros produtos florestais. AGROTURISMO: Turismo rural baseado em atividades agrícolas e na experiência de vida no campo",
        alternativas: [
            {
                texto: "Veja as disciplinas da grade curricular que são comuns nos cursos de Agronomia:",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Fertilidade do Solo; Melhoramento de Plantas; Morfologia e Fisiologia Vegetal; Hidráulica, Irrigação e Drenagem; Administração de Empresa Rural; Nutrição Animal; Bovinocultura, Suinocultura Avicultura; Controle de Qualidade de Produtos Vegetais e Animais.",
        alternativas: [
            {
                texto: "Como a internet e as redes sociais podem ajudar jovens a se conectarem com oportunidades no campo?",
                afirmacao: ""
            },
        ]
    },
    {
        enunciado: "A internet e as redes sociais permitem que os jovens encontrem comunidades, grupos de interesse, oportunidades de emprego,e informações sobre programas de apoio ao desenvolvimento rural.",
        alternativas: [
            {
                texto: "Como a tecnologia está transformando a agricultura?",
                afirmacao: ""
            },
        ]
    },
    {
        enunciado: "A tecnologia está transformando agricultura por meio de inovações como drones, sensores, inteligência artificial e biotecnologia, que melhoram a eficiência, aumentam a produtividade e promovem práticas mais sustentáveis.  ",
        alternativas: [
            {
                texto: "Nos dias atuais há muitos cursos que as universidades oferecem para se aprofundar seu conhecimento no campo. ",
                afirmacao: ""
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "no final da sua formação ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
