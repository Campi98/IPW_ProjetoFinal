//PRJ.ARTE  - FUNCIONALIDADES

//******** variáveis públicas ********

var indexPintor;
var indexObra;

//*********** inicialização **********
function inic() {
    indexPintor = 0;
    indexObra = 0;
    createIntrod();
    showIntrod();
    loadDD();
    loadDDobra();
}

//*********** input/output ***********

//cria a vista de introdução
function createIntrod() {
    var iParag, codHTML, codX;
    //título da apresentação
    codHTML = "<h1>" + titulo() + "</h1>";
    codHTML += "<h2>" + subtitulo() + "</h2>";
    for (iParag = 0; iParag < numtextoIntrod(); iParag++) {
        //parágrafo de secção
        codHTML += "<p>" + ParagsIntrod(iParag) + "</p>";
    }
    out("divTexto", codHTML);
    codX = "";
    for (iParag = 0; iParag < numPintores(); iParag++) {
        codX += codSeletPintor(iParag);
    }
    out("divPintores", codX);
}

function loadDD() {
    var iPintor,
        codHTML = "";
    for (iPintor = 0; iPintor < numPintores(); iPintor++) {
        codHTML += "<option>" + nomePintor(iPintor) + "</option>";
    }
    out("ddPintores", codHTML);
}

function loadDDobra() {
    var iPintor = 0,
        codHTML = "",
        iObra;
    for (iObra = 0; iObra < numObrasPintor(iPintor); iObra++) {
        codHTML += "<option>" + nomeObra(iPintor, iObra) + "</option>";
    }
    out("ddObra", codHTML);
}

//mostra a informação de um pintor na vista de pintores, dado o índice do pintor
function showPintor(iPintor) {
    var iParag, iObra, codHTML, codPintor;
    //esconde vista da introdução e mostra a vista do pintor
    refID("vistaPintores").style.display = "block";
    refID("base").style.display = "none";
    refID("VistaObra").style.display = "none";

    //sincroniza dropdown
    refID("ddPintores").selectedIndex = iPintor;
    //publica indice do pintor
    indexPintor = iPintor;
    indexObra = 0; // reset do índice de obra
    //scroll automatico para cima
    window.scrollTo(0, 0);
    //designação do pintor
    out("refPintor", nomePintor(iPintor));
    refID("fotoPintor").src = fotoPintor(iPintor);
    codHTML = "";
    for (iParag = 0; iParag < numParagsPintor(iPintor); iParag++) {
        codHTML += "<p>" + paragPintor(iPintor, iParag) + "</p>";
    }
    out("TextoPintor", codHTML);
    codPintor = "";
    for (iObra = 0; iObra < numObrasPintor(iPintor); iObra++) {
        codPintor += codSeletObra(iPintor, iObra);
    }
    out("divPinturas", codPintor);
    
    // Atualiza dropdown de obras para o pintor atual
    updateDDObras(iPintor);
}

function mostraObra(iObra) {
    refID("vistaPintores").style.display = "none";
    refID("base").style.display = "none";
    refID("VistaObra").style.display = "block";
    
    //sincroniza dropdown
    refID("ddObra").selectedIndex = iObra;
    refID("fotoObra").src = fotoObra(indexPintor, iObra);

    //scroll automatico para cima
    window.scrollTo(0, 0);
    
    //mostra o texto da obra específica
    var textoHTML = "<div style='margin-bottom: 15px; font-size: 14px; color: #908070;'>";
    textoHTML += "<strong>Pintor:</strong> " + nomePintor(indexPintor) + " | ";
    textoHTML += "<strong>Obra " + (iObra + 1) + " de " + numObrasPintor(indexPintor) + "</strong>";
    textoHTML += "</div>";
    textoHTML += "<h2>" + nomeObra(indexPintor, iObra) + " (" + anoObra(indexPintor, iObra) + ")</h2>";
    textoHTML += "<p>" + textoObra(indexPintor, iObra) + "</p>";
    out("ObraTexto", textoHTML);
    
    // Atualiza indexObra global
    indexObra = iObra;
}

function escolheObra() {
    //publica indice da obra escolhida
    indexObra = refID("ddObra").selectedIndex;
    mostraObra(indexObra);
}

//mostra o pintor escolhido no dropdown
function escolhePintor() {
    //publica indice do pintor escolhido
    indexPintor = refID("ddPintores").selectedIndex;
    showPintor(indexPintor);
}

//avança ou recua, em círculo, mostrando o pintor escolhido e sincronizando a drop-down, dado o valor do avanço (passo de -1 ou 1)
function codSeletPintor(iPintor) {
    var codHTML ='<div class="divPintorIndividual" onclick="showPintor(' +iPintor +')">';
    codHTML += '<img src="' + fotoPintor(iPintor) + '" width="100%" />';
    codHTML += nomePintor(iPintor);
    codHTML += "</div>";
    return codHTML;
}

function codSeletObra(iPintor, iObra) {
    var codHTML = '<div class="divObraIndividual" onclick="mostraObra(' + iObra + ')">';
    codHTML += '<img src="' + fotoObra(iPintor, iObra) + '" width="100%" />';
    codHTML += nomeObra(iPintor, iObra);
    codHTML += "</div>";
    return codHTML;
}

function showIntrod() {
    //esconde a vista do pintor e mostra a vista da introdução
    refID("vistaPintores").style.display = "none";
    refID("VistaObra").style.display = "none";
    refID("base").style.display = "block";
    //scroll automático para cima
    window.scrollTo(0, 0);
}

function avanca(passo) {
    indexPintor += passo;
    if (indexPintor == -1) indexPintor = numPintores() - 1;
    if (indexPintor == numPintores()) indexPintor = 0;
    showPintor(indexPintor);
}

function avancar(passo) {
    // Verifica se indexPintor está definido
    if (typeof indexPintor === 'undefined' || indexPintor < 0) {
        indexPintor = 0;
    }
    
    indexObra += passo;
    if (indexObra == -1) indexObra = numObrasPintor(indexPintor) - 1;
    if (indexObra >= numObrasPintor(indexPintor)) indexObra = 0;
    mostraObra(indexObra);
}

// Atualiza dropdown de obras para o pintor especificado
function updateDDObras(iPintor) {
    var codHTML = "";
    for (var iObra = 0; iObra < numObrasPintor(iPintor); iObra++) {
        codHTML += "<option>" + nomeObra(iPintor, iObra) + "</option>";
    }
    out("ddObra", codHTML);
    // Reset do índice de obra selecionada
    if (refID("ddObra")) {
        refID("ddObra").selectedIndex = 0;
    }
}

//*********** funções utilitárias ***********

//output de um conteúdo num contentor HTML, dados o ID do contentor e o conteúdo (boleano, número ou string)
function out(idCont, conteudo) {
    document.getElementById(idCont).innerHTML = conteudo;
}

//referência a um objeto HTML, dado o seu ID
function refID(idObj) {
    return document.getElementById(idObj);
}