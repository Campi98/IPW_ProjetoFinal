//PRJ.ARTE  - PARSING DOS DADOS


const path = "arte_DADOS/";

//título da apresentação 74
function titulo(){return introd.titulo;}

//subtitulo da apresentação 62
function subtitulo(){return introd.subtitulo;}

//texto da introdução 
function textoIntrod(){return introd.textoIntrod;}

//número de parágrafos da introdução 63
function numtextoIntrod(){return introd.textoIntrod.length;}
function ParagsIntrod(iParag){return introd.textoIntrod[iParag];}


const pintoresPath = "pintores/";

//numero de pintores 77
function numPintores(){ return pintores.length; }

//nome do pintor, dado o índice do pintor  75
function nomePintor(iPintor){ return pintores[iPintor].nomePintor; }

//foto do pintor, dado o índice do pintor 64
function fotoPintor(iPintor){ return pintores[iPintor].fotoPintor; }

//número de parágrafos sobre o pintor 65
function numParagsPintor(iPintor){ return pintores[iPintor].textoPintor.length; }

//teor de um parágrafo sobre o pintor, dados o índice do pintor e o índice do parágrafo 70
function paragPintor(iPintor, iParag){ return pintores[iPintor].textoPintor[iParag]; }

//número de obras do pintor  68
function numObrasPintor(iPintor){ return pintores[iPintor].obrasPintor.length; }

//nome de uma obra do pintor, dados o índice do pintor e o índice da obra
function nomeObra(iPintor, iObra){ return pintores[iPintor].obrasPintor[iObra].nomeObra; }

//ano de uma obra do pintor, dados o índice do pintor e o índice da obra
function anoObra(iPintor, iObra){ return pintores[iPintor].obrasPintor[iObra].anoObra; }

//foto de uma obra do pintor, dados o índice do pintor e o índice da obra
function fotoObra(iPintor, iObra){ return pintores[iPintor].obrasPintor[iObra].fotoObra; }

//teor de uma obra do pintor, dados o índice do pintor e o índice da obra
function textoObra(iPintor, iObra){ return pintores[iPintor].obrasPintor[iObra].textoObra; }