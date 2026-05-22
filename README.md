# TERMOX

Jogo de adivinhação de palavras de 5 letras inspirado no Termo/Wordle, com identidade visual de fintech moderna e uma mecânica original: quando o jogador erra, ele recebe um desafio leve pra cumprir.

**🎮 Jogar agora:** https://rosetadevcode.github.io/termox/

---

## Sobre o projeto

Construído em 3 dias como projeto demonstrável de fundamentos de front-end. O tema das palavras mistura vocabulário de finanças, crédito e atendimento bancário com palavras gerais do dia a dia, mantendo o desafio do jogo.

## Funcionalidades

- Grade 6 × 5 com 6 tentativas para uma palavra de 5 letras
- Teclado virtual interativo + suporte ao teclado físico
- Cores de feedback (verde, amarelo, cinza) com animação de flip
- Letras descobertas como inexistentes ficam **bloqueadas** no teclado
- Validação contra dicionário próprio de ~700 palavras válidas
- Mensagens divertidas para palavras inexistentes (*"em que mundo essa palavra existe?"*)
- **Dica adaptativa**: aparece só após 4 tentativas erradas E se o jogador descobriu 2 ou menos letras
- Modal de fim de jogo com palavra revelada
- **Desafio na derrota**: sorteia uma de 20 atividades leves (beber água, elogiar um colega, fazer alongamento etc.)
- Responsivo para desktop e mobile

## Stack

- HTML5 estrutural
- CSS3 com variáveis, gradientes e animações
- JavaScript vanilla (sem frameworks)

A escolha por vanilla JS foi intencional: priorizar fundamentos sem camadas de abstração.

## Como rodar localmente

```
1. Clone o repositório
2. Abra o arquivo index.html no navegador
```

Sem dependências, sem build, sem instalação.

## Decisões de produto

- **Tema disfarçado** com mix de palavras gerais e financeiras: se o jogador soubesse o tema, ficaria fácil demais.
- **Desafio na derrota**: diferencial vs. o Termo original, gera engajamento e diversão no ambiente em que o jogo é apresentado.
- **Dica adaptativa**: condicional a desempenho do jogador, evita ajudar quem já está perto de acertar.

## Construído com

Projeto construído com auxílio do Claude (Anthropic) como par de programação. Decisões de produto, mecânicas de jogo, vocabulário e diferenciais foram definidos por mim; o código foi implementado em colaboração.

## Autora

Alice — em transição de KonSeller para a área de desenvolvimento na Konsi.
