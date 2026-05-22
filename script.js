// =====================================================
// TERMOX — JOGO COMPLETO
// =====================================================

// LISTA DE PALAVRAS (todas com 5 letras, sem acento, sem Ç)
const PALAVRAS = [
  // Núcleo financeiro
  "BANCO", "JUROS", "PRAZO", "TROCO", "TAXAS",
  "SALDO", "VALOR", "RENDA", "CONTA", "SAQUE",
  "CARTA", "FOLHA", "REGRA", "DADOS", "LUCRO",
  "GASTO", "PERDA", "GANHO", "MULTA", "COTAS",
  "BOLSA", "FUNDO", "METAS", "CAIXA", "CARGO",
  "GRANA", "FIRMA", "VERBA", "VALES", "NOTAS",
  // Operacional / atendimento
  "ATIVO", "CHEFE", "ENVIO", "LISTA", "FECHO",
  "ORDEM", "ETAPA", "GRUPO", "PARTE", "ROTAS",
  "RUMOS", "FATOR", "FLUXO", "LAUDO", "MEIOS",
  // Gerais (disfarce do tema)
  "PORTA", "CHAVE", "CICLO", "TEMPO", "AGORA",
  "VISTA", "HONRA", "MORAL", "CALMA", "SOBRA",
  "DOBRA", "TROCA", "FATIA", "BAIXA", "BOLSO",
  "CUSTO", "LOJAS", "FIRME", "CLARO", "LIMPO",
  "BRUTO", "BAIXO", "ATUAL", "JUSTO", "CERTO"
];

// DESAFIOS — sorteados quando o jogador erra
const DESAFIOS = [
  "Beba um copo d'água inteiro antes de continuar.",
  "Levante-se e faça 5 alongamentos agora.",
  "Organize sua mesa por 2 minutos.",
  "Faça uma pausa de 3 minutos sem olhar pro celular.",
  "Suba e desça um lance de escada.",
  "Aprenda uma palavra nova em outro idioma e use ela hoje.",
  "Anote 3 coisas pelas quais você é grato hoje.",
  "Feche 3 abas do navegador que você não usa.",
  "Faça um elogio sincero a um colega.",
  "Pergunte como foi o fim de semana de alguém do time.",
  "Mande uma mensagem de bom dia pra alguém do trabalho.",
  "Ofereça um café (ou água) pra alguém do time.",
  "Mande uma mensagem de agradecimento pra alguém que te ajudou recentemente.",
  "Conte uma piada (boa ou ruim) pra alguém do time.",
  "Apresente-se pra alguém da empresa que você nunca conversou.",
  "Conte qual foi a última série ou filme que te marcou.",
  "Compartilhe uma curiosidade aleatória sua com alguém.",
  "Anote uma meta pequena pra terminar até sexta.",
  "Escreva no post-it uma frase que te motive e cole na mesa.",
  "Pense numa vitória sua dessa semana e compartilhe com alguém."
];

// PALAVRAS_VALIDAS — todas as palavras que o jogador pode TENTAR
// (inclui as sorteáveis acima + outras palavras comuns em português)
// Se digitar algo fora dessa lista, o jogo recusa.
const PALAVRAS_VALIDAS = (
  "ABRIR ABRIU ACABA ACABO ACASO ACERO ACHAR ACHEI ACIDO ADAGA ADERE ADIAR ADIDO " +
  "AGORA AINDA AJUDA AJUDO ALAGA ALAGO ALARG ALGAS ALGUM ALMAS ALTAR ALTOS ALUNO " +
  "ALVOS AMADO AMENA AMENO AMIDO AMIGA AMIGO AMORA AMPLA AMPLO ANDAR ANJOS ANTAS " +
  "ANTES APAGA APAGO APELO APITO APOIA APOIO ARARA ARCAS ARCOS ARDOR ARENA AREIA " +
  "ARMAR ARMAS AROMA ARROZ ARTES ASNOS ASPAS ASSIM ATADO ATIRA ATIVA ATIVO ATUAL " +
  "ATUAR ATUNS AUDAZ AULAS AUTOR AUTOS AVARO AVENA AVISO AXILA AZEDO AZUIS " +
  "BACIA BAILE BALDE BALSA BANCA BANCO BANDA BANDO BANHA BANHO BARBA BARCO BARES " +
  "BARRO BASES BEBER BEIJO BELOS BERRA BERRO BICHO BIRRA BLOCO BOATO BOBOS BOCAS " +
  "BODES BOIAR BOLAS BOLOS BOLSA BOLSO BOMBA BONDE BORDA BORDO BOTAR BOTAS BRADO " +
  "BRAVA BRAVO BREJO BREVE BRISA BROCA BROTO BRUMA BRUTO BRUXA BRUXO BURRO BUSCA " +
  "BUSTO CABRA CACHO CAIXA CALDA CALMA CAMAS CAMPO CANAL CANIL CANOS CANTA CANTO " +
  "CAPAS CARAS CARGA CARGO CARNE CARRO CARTA CASAL CASAS CASCO CASTO CAUDA CAVAR " +
  "CEDER CEDRO CEGOS CENAS CERCA CERTO CESTA CESTO CHATA CHATO CHAVE CHEFE CHEIA " +
  "CHEIO CHINA CHITA CHORA CHORO CHUVA CICLO CINCO CINTO CIRCO CISMA CIVIL CLARA " +
  "CLARO CLAVE CLERO COBRA COBRE COLAR COMER CONTA CONTO COPAS COPOS CORAR CORES " +
  "CORPO CORRA CORRO CORTE COTAS COURO COXAS CRAVO CRIAR CRIME CRINA CRUEL CUNHA " +
  "CURAR CURSO CURTO CURVA CUSTO DADOS DAMAS DARDO DEDOS DENSO DENTE DEPOR DEUSA " +
  "DEVER DIABO DIETA DIGNO DISCO DITAR DIVAS DOBRA DOCES DOIDO DOSES DRAMA DUTOS " +
  "ELITE ENTRA ENTRE ENVIA ENVIO ERROS ETAPA EXAME EXATA EXATO EXTRA FACAS FACES " +
  "FALAR FALSO FAROL FARTO FATAL FATIA FATOR FATOS FAUNA FAVOR FAZER FECHO FEIRA " +
  "FELIZ FENDA FERAS FERRO FESTA FETOS FEUDO FIBRA FICAR FICHA FILAS FILHA FILHO " +
  "FILME FINAL FINOS FIRMA FIRME FITAS FIXAR FLORA FLUXO FOCAR FOGOS FOLHA FONTE " +
  "FORMA FORRO FORTE FORUM FOSSA FOTOS FRACA FRACO FRASE FRIOS FRITO FRUTA FUGIR " +
  "FUMOS FUNDO FUNIL FUROS FUZIL GAITA GALHO GALOS GANHO GANSO GARRA GASTO GATAS " +
  "GATOS GELAR GELOS GEMER GENRO GENTE GESTO GIRAR GOLES GOLPE GORDA GORDO GORRO " +
  "GOSTO GOTAS GRADE GRAMA GRANA GRATO GRAUS GRAVE GREVE GRILO GRITO GRUPO GRUTA " +
  "GUIAR GUIAS HASTE HAVER HIENA HOMEM HONRA HORAS HORTA HOTEL HUMOR IDEIA IGUAL " +
  "IMPAR ISCAS ITENS JAULA JEITO JEJUM JOGAR JOGOS JUNTA JUNTO JUROS JUSTA JUSTO " +
  "LADRA LAGOA LANCE LARGA LARGO LARVA LATAS LATIM LATIR LAUDO LAVAR LEBRE LEGAL " +
  "LEITE LEITO LENDA LENTE LENTO LEPRA LERDO LESMA LEVAR LHAMA LIBRA LIDAR LIDOS " +
  "LIGAR LIMPA LIMPO LINCE LINDA LINDO LINHA LISTA LIVRE LIVRO LOBOS LOCAL LOGOS " +
  "LOIRA LOIRO LOJAS LONGE LONGO LOUCO LOURO LOUSA LUCRO LUGAR LULAS LUTAR LUVAS " +
  "LUZES MACHO MAGRO MAIOR MALAS MAMAS MANCO MANGA MANIA MANSO MANTA MANTO MAPAS " +
  "MARCA MARCO MARES MASSA MATAR MATOS MEDIR MEDOS MEIAS MEIGA MEIGO MEIOS MELRO " +
  "MENOR MENOS MENTE MESAS MESES METAS MEXER MILHO MIMAR MIMOS MINHA MIRAR MISSA " +
  "MITOS MOEDA MOLAS MOLDE MOLHO MODOS MORAL MORRO MOSCA MOTIM MOTOR MOTOS MOVER " +
  "MUDAR MUDOS MULAS MULTA MUNDO MUROS MUSAS MUSEU MUSGO NADAR NARIZ NATAL NAVAL " +
  "NAVES NEGRA NEGRO NERVO NEVAR NINHO NOBRE NOITE NOIVA NOIVO NOMES NORTE NOSSA " +
  "NOSSO NOTAS NOTAR NOVAS NOVOS NUNCA NUVEM OBRAS ODIAR OLHAR OLHOS ONDAS ONTEM " +
  "ORDEM OSSOS OUROS OUSAR OUTRA OUTRO OUVIR PACTO PADRE PAGAR PAIOL PALMA PALMO " +
  "PANDA PANOS PAPAI PAPEL PARAR PARDO PARES PARTE PASMO PASSE PASTA PASTO PATAS " +
  "PATOS PAUSA PAVOR PECAR PEDIR PEDRA PEGAR PEITO PELES PENAS PERAS PERDA PERTO " +
  "PESAR PESCA PESOS PESTE PIADA PIANO PILHA PINGO PINHA PINHO PIRAR PISAR PISOS " +
  "PISTA PIZZA PLANO PLEBE PLENA PLENO PLUMA POBRE PODER POEMA POETA POMBA POMBO " +
  "PONTA PONTE PONTO PORCO PORTA PORTO POSES POSSE POSTE POSTO POTES POUCO POUSO " +
  "POVOS PRADO PRAGA PRATA PRATO PRAZO PRECE PREGO PRESA PRESO PRETA PRETO PRIMA " +
  "PRIMO PROVA PULAR PULSO PUNHO PUXAR QUASE QUEDA QUITE QUOTA RAIOS RAIVA RAMAL " +
  "RAMOS RAPAR RARAS RATOS REAIS REDES REGAR REGER REGRA REINO REMAR REMOS RENAL " +
  "RENDA REPOR RETER REVER REZAR RICOS RIGOR RIMAR RISCO RISOS RITMO RITOS ROCHA " +
  "ROLAR ROSAS ROSCA ROSTO ROTAS ROUBO ROUCO ROUPA ROXAS ROXOS RUDES RUGIR RUINS " +
  "RUMAR RUMOS RURAL SABER SABOR SACAR SACOS SACRO SAGAZ SALAS SALDO SALSA SALTO " +
  "SALVO SAMBA SANTA SANTO SAPOS SAQUE SEARA SECAR SECOS SEDAS SEDES SEIOS SEITA " +
  "SEIVA SELAR SELOS SENHA SENSO SERVO SESTA SETAS SETOR SEXOS SIGAS SIGNO SILVO " +
  "SINAL SITES SOBRA SOCAR SOLDA SOLOS SOLTO SOMAR SONHO SONOS SOPAS SOPRO SUADO " +
  "SUAVE SUBIR SUCOS SUJAR SUJOS SULCO SUMIR SUPER SURDA SURDO SURTO TACHA TALCO " +
  "TALHO TANGO TANTA TANTO TAPAR TAPIR TARDE TAXAS TECER TECLA TEIAS TELAS TELHA " +
  "TEMOR TEMPO TENRO TENSO TENTO TERMO TERNO TERRA TESES TESTE TETOS TIGRE TIMES " +
  "TINTA TIPOS TIRAR TOADA TOCAR TOLAS TOLOS TOMAR TOMBO TONEL TONTO TOPAR TORNO " +
  "TORTA TORTO TOSCO TOTAL TRAGO TRAMA TRAPO TRATO TRAVA TRAVE TRECO TRENA TRENS " +
  "TREVA TRIBO TRIGO TRIPA TROCA TROCO TROVA TUBOS TUMBA TURBA TURMA TURNO TUTOR " +
  "UFANO UNHAS URINA URNAS USADO USUAL VACAS VAGAR VAGOS VALER VALES VALOR VALSA " +
  "VAMOS VARAS VARIA VARIZ VASOS VAZAR VAZIO VEDAR VEIAS VELAS VELHO VELOZ VENDA " +
  "VENTO VERBA VERDE VEZES VIDAS VIDRO VILAS VINCO VINDA VINDO VINHO VINTE VIOLA " +
  "VIRAR VISTA VITAL VIVER VIVOS VOCAL VOLTA VOTAR VOTOS VOZES VULGO ZEBRA ZELAR " +
  "ZELOS ZINCO ZONAS ZUMBI"
).split(" ");

// Mensagens divertidas pra quando o jogador digita palavra que não existe
const MENSAGENS_INVALIDA = [
  "em que mundo essa palavra existe?",
  "pense melhor!",
  "isso aí não tá no dicionário",
  "tem certeza disso?",
  "essa não é palavra, não",
  "tenta de novo, com calma",
  "ué, que palavra é essa?"
];

// =====================================================
// ELEMENTOS DA TELA
// =====================================================
const grade = document.getElementById("grade");
const teclado = document.getElementById("teclado");
const mensagem = document.getElementById("mensagem");

// =====================================================
// ESTADO DO JOGO
// =====================================================
let palavraSecreta = "";
let linhaAtual = 0;
let posicaoAtual = 0;
let jogoTerminado = false;  // trava input depois do fim
let dicaMostrada = false;   // controla se a dica já foi exibida nesta partida
// Set = lista que guarda letras únicas. Aqui ficam as letras "cinzas"
// que o jogador já tentou e não existem na palavra → bloqueadas.
let letrasBloqueadas = new Set();

// =====================================================
// INICIAR / REINICIAR JOGO
// =====================================================
function iniciarJogo() {
  palavraSecreta = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  linhaAtual = 0;
  posicaoAtual = 0;
  jogoTerminado = false;
  dicaMostrada = false;
  letrasBloqueadas.clear(); // zera as letras bloqueadas

  // limpa as 30 tiles
  document.querySelectorAll(".tile").forEach(tile => {
    tile.textContent = "";
    tile.className = "tile";
  });

  // limpa as cores das teclas
  document.querySelectorAll(".tecla").forEach(tecla => {
    const isLarga = tecla.classList.contains("tecla-larga");
    tecla.className = isLarga ? "tecla tecla-larga" : "tecla";
  });

  mensagem.textContent = "";
  mensagem.className = "mensagem";

  // remove dica anterior se existir
  const dicaAnterior = document.querySelector(".card-dica");
  if (dicaAnterior) dicaAnterior.remove();

  // ⚠️ DEBUG: palavra aparece no console (F12 → Console).
  // Antes de apresentar pro Doug, apague ou comente a linha abaixo.
  console.log("Palavra secreta:", palavraSecreta);
}

// =====================================================
// ESCREVER LETRA (com bloqueio de letras cinzas)
// =====================================================
function escreverLetra(letra) {
  if (jogoTerminado) return;
  if (posicaoAtual >= 5) return;

  // BLOQUEIO: se a letra já foi marcada como inexistente, ignora
  if (letrasBloqueadas.has(letra)) {
    mostrarMensagem(`a letra ${letra} não está na palavra`);
    return;
  }

  const tile = document.querySelector(
    `.linha[data-linha="${linhaAtual}"] .tile[data-pos="${posicaoAtual}"]`
  );
  tile.textContent = letra;
  tile.classList.add("preenchido");
  posicaoAtual++;
}

// =====================================================
// APAGAR LETRA
// =====================================================
function apagarLetra() {
  if (jogoTerminado) return;
  if (posicaoAtual === 0) return;

  posicaoAtual--;
  const tile = document.querySelector(
    `.linha[data-linha="${linhaAtual}"] .tile[data-pos="${posicaoAtual}"]`
  );
  tile.textContent = "";
  tile.classList.remove("preenchido");
}

// =====================================================
// ENVIAR TENTATIVA (Enter)
// =====================================================
function enviarTentativa() {
  if (jogoTerminado) return;

  if (posicaoAtual < 5) {
    // chacoalha a linha
    const linha = document.querySelector(`.linha[data-linha="${linhaAtual}"]`);
    linha.classList.add("shake");
    setTimeout(() => linha.classList.remove("shake"), 400);
    mostrarMensagem("a palavra precisa ter 5 letras");
    return;
  }

  // monta a palavra digitada
  let palavraDigitada = "";
  for (let i = 0; i < 5; i++) {
    const tile = document.querySelector(
      `.linha[data-linha="${linhaAtual}"] .tile[data-pos="${i}"]`
    );
    palavraDigitada += tile.textContent;
  }

  // NOVO: bloqueia palavras que não existem no dicionário do jogo
  if (!PALAVRAS_VALIDAS.includes(palavraDigitada)) {
    const linha = document.querySelector(`.linha[data-linha="${linhaAtual}"]`);
    linha.classList.add("shake");
    setTimeout(() => linha.classList.remove("shake"), 400);
    const msg = MENSAGENS_INVALIDA[Math.floor(Math.random() * MENSAGENS_INVALIDA.length)];
    mostrarMensagem(msg);
    return;
  }

  pintarTiles(palavraDigitada);

  // VITÓRIA
  if (palavraDigitada === palavraSecreta) {
    jogoTerminado = true;
    setTimeout(() => mostrarFim(true), 800);
    return;
  }

  // próxima linha
  linhaAtual++;
  posicaoAtual = 0;

  // NOVO: mostra dica APÓS a 4ª tentativa errada, e só se o jogador
  // descobriu 2 letras verdes ou menos no total. Só dispara 1x.
  if (!dicaMostrada && linhaAtual === 4) {
    const posicoesAcertadas = new Set();
    for (let l = 0; l < linhaAtual; l++) {
      for (let p = 0; p < 5; p++) {
        const tile = document.querySelector(
          `.linha[data-linha="${l}"] .tile[data-pos="${p}"]`
        );
        if (tile.classList.contains("verde")) posicoesAcertadas.add(p);
      }
    }
    if (posicoesAcertadas.size <= 2) {
      mostrarDica();
      dicaMostrada = true;
    }
  }

  // DERROTA (acabaram as 6 tentativas)
  if (linhaAtual >= 6) {
    jogoTerminado = true;
    setTimeout(() => mostrarFim(false), 800);
  }
}

// =====================================================
// PINTAR TILES — calcula e aplica as cores
// (trata letras repetidas corretamente + alimenta o Set de bloqueadas)
// =====================================================
function pintarTiles(palavraDigitada) {
  const cores = ["cinza", "cinza", "cinza", "cinza", "cinza"];
  const restantes = palavraSecreta.split("");

  // 1ª passada: verdes (letra certa no lugar certo)
  for (let i = 0; i < 5; i++) {
    if (palavraDigitada[i] === palavraSecreta[i]) {
      cores[i] = "verde";
      restantes[i] = null;
    }
  }

  // 2ª passada: amarelos (letra existe em outra posição)
  for (let i = 0; i < 5; i++) {
    if (cores[i] === "verde") continue;
    const idx = restantes.indexOf(palavraDigitada[i]);
    if (idx !== -1) {
      cores[i] = "amarelo";
      restantes[idx] = null;
    }
  }

  // aplica nas tiles com efeito de stagger
  for (let i = 0; i < 5; i++) {
    const tile = document.querySelector(
      `.linha[data-linha="${linhaAtual}"] .tile[data-pos="${i}"]`
    );
    setTimeout(() => {
      tile.classList.add(cores[i]);
    }, i * 130);

    // pinta a tecla do teclado virtual (prioridade: verde > amarelo > cinza)
    const tecla = document.querySelector(`.tecla[data-tecla="${palavraDigitada[i]}"]`);
    if (!tecla) continue;
    const jaVerde = tecla.classList.contains("verde");
    const jaAmarelo = tecla.classList.contains("amarelo");

    if (cores[i] === "verde") {
      tecla.classList.remove("amarelo", "cinza");
      tecla.classList.add("verde");
    } else if (cores[i] === "amarelo" && !jaVerde) {
      tecla.classList.remove("cinza");
      tecla.classList.add("amarelo");
    } else if (cores[i] === "cinza" && !jaVerde && !jaAmarelo) {
      tecla.classList.add("cinza");
    }

    // BLOQUEIO: se a letra é cinza E não aparece em NENHUMA posição da palavra
    // secreta, bloqueia o uso dela daqui pra frente.
    // (A checagem extra evita bloquear uma letra que está em outra posição da palavra
    // quando o jogador repetiu a letra mais vezes do que ela aparece.)
    if (cores[i] === "cinza" && !palavraSecreta.includes(palavraDigitada[i])) {
      letrasBloqueadas.add(palavraDigitada[i]);
    }
  }
}

// =====================================================
// MOSTRAR MENSAGEM CURTA (validações)
// =====================================================
function mostrarMensagem(texto) {
  mensagem.textContent = texto;
  setTimeout(() => {
    if (!jogoTerminado) mensagem.textContent = "";
  }, 2000);
}

// =====================================================
// MOSTRAR FIM DE JOGO — modal centralizado (vitória/derrota)
// =====================================================
function mostrarFim(venceu) {
  // remove modal anterior caso exista
  const anterior = document.querySelector(".overlay");
  if (anterior) anterior.remove();

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  if (venceu) {
    const palavra = linhaAtual === 0 ? "tentativa" : "tentativas";
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-icone">🎉</div>
        <div class="modal-titulo vitoria">você acertou!</div>
        <div class="modal-subtitulo">em ${linhaAtual + 1} ${palavra}</div>
        <div class="modal-palavra">${palavraSecreta}</div>
        <button class="botao-novo" onclick="fecharModalEReiniciar()">jogar de novo</button>
      </div>
    `;
  } else {
    const desafio = DESAFIOS[Math.floor(Math.random() * DESAFIOS.length)];
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-icone">💭</div>
        <div class="modal-titulo derrota">quase lá!</div>
        <div class="modal-subtitulo">a palavra era</div>
        <div class="modal-palavra">${palavraSecreta}</div>
        <div class="card-desafio">
          <div class="card-desafio-titulo">⚡ seu desafio</div>
          <div class="card-desafio-texto">${desafio}</div>
        </div>
        <button class="botao-novo" onclick="fecharModalEReiniciar()">jogar de novo</button>
      </div>
    `;
  }

  document.body.appendChild(overlay);
}

// Fecha o modal e começa nova partida
function fecharModalEReiniciar() {
  const overlay = document.querySelector(".overlay");
  if (overlay) overlay.remove();
  iniciarJogo();
}

// =====================================================
// MOSTRAR DICA — aparece após 4 tentativas erradas
// Revela uma letra que o jogador ainda não descobriu
// =====================================================
function mostrarDica() {
  // descobre quais posições o jogador já acertou (verde) em tentativas anteriores
  const jaAcertadas = new Set();
  for (let l = 0; l < linhaAtual; l++) {
    for (let p = 0; p < 5; p++) {
      const tile = document.querySelector(
        `.linha[data-linha="${l}"] .tile[data-pos="${p}"]`
      );
      if (tile.classList.contains("verde")) jaAcertadas.add(p);
    }
  }

  // monta lista de posições AINDA não descobertas
  const naoDescobertas = [];
  for (let i = 0; i < 5; i++) {
    if (!jaAcertadas.has(i)) naoDescobertas.push(i);
  }

  // se por acaso já descobriu todas, escolhe qualquer
  const opcoes = naoDescobertas.length > 0 ? naoDescobertas : [0, 1, 2, 3, 4];
  const pos = opcoes[Math.floor(Math.random() * opcoes.length)];
  const letra = palavraSecreta[pos];
  const ordinais = ["1ª", "2ª", "3ª", "4ª", "5ª"];

  // cria o card de dica e insere antes do teclado
  const dica = document.createElement("div");
  dica.className = "card-dica";
  dica.innerHTML = `
    <div class="card-dica-titulo">💡 dica</div>
    <div class="card-dica-texto">a <strong>${ordinais[pos]}</strong> letra é <strong>${letra}</strong></div>
  `;
  document.querySelector(".teclado").before(dica);
}

// =====================================================
// CLIQUE NO TECLADO VIRTUAL
// =====================================================
teclado.addEventListener("click", (e) => {
  const botao = e.target.closest(".tecla");
  if (!botao) return;
  const tecla = botao.dataset.tecla;

  if (tecla === "ENTER") enviarTentativa();
  else if (tecla === "BACKSPACE") apagarLetra();
  else escreverLetra(tecla);
});

// =====================================================
// TECLADO FÍSICO
// =====================================================
document.addEventListener("keydown", (e) => {
  if (jogoTerminado) return;
  if (e.key === "Enter") enviarTentativa();
  else if (e.key === "Backspace") apagarLetra();
  else if (/^[a-zA-Z]$/.test(e.key)) escreverLetra(e.key.toUpperCase());
});

// =====================================================
// COMEÇA O JOGO AO CARREGAR A PÁGINA
// =====================================================
iniciarJogo();