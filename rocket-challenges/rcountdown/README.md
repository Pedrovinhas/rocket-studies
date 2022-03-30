# Rocket Countdown 

<div align="center" width='20%' height="100px">
 <img width='1000px' src='https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4ae14d1c-890d-4c40-8ab1-31369ba44cde%2FMacBook_Pro_16_inch.png?table=block&id=19099266-a58e-43c8-9e87-6e4fd7b22df1&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2'>
</div>

---

## 🎉 Objetivo
O objetivo original desse desafio é construir uma página de **coming soon** para lançamento de um site, no entanto brinquei com a funcionalidade
de decolagem com o countdown para criar uma página interativa e adicionar mais elementos, além do que o desafio propunha.

## 🔩 Tecnologias
- HTML
- SASS
- Javascript

<div>
<img width='24px' height='24px' src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt="HTML Icon">
<img width='24px' height='24px' src="https://logospng.org/download/css-3/logo-css-3-1536.png" alt="CSS Icon">
<img width='24px' height='24px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript Icon">
</div>
## Design
Você pode consultar o design do desafio através do link **[Figma](https://www.figma.com/file/o7NUQQZdL7Up7RgnwLJtf0/DD-Countdown-Copy?fuid=898242652746725678)** e o guia de cores através do **[styleguide.md](/styleguide.md)**

## 🚀 Deploy
O link do site pode ser consultado por esse link **[RocketCountdown](https://rocketcoundown-lpecd5d4c-pedrovinhas.vercel.app/)**

## 🧱 Implementações

### ✔ Concluídas
- [X] Construção do design fiel ao protótipo
- [X] Adicionar funcionalidade de Countdown
- [ ] Adicionar Mixin com scss
- [ ] Responsividade para todos os dispositivos

### 🆕 Features
- [X] Adicionada funcionalidade de criar um countdown regressivo de menor tempo
- [X] Adicionado botão de pausar countdown
- [X] Adicionado botão de resume countdown
- [X] Toast para quando o foguete for lançado
- [X] Toast com mensagem para missão cancelada

### 🔨 Fix
- [X] setTimeOut do Toast
- [X] rushCountdown quando o time acabar, para ter opção de voltar ao timer original
- [X] desaparecimento do Toast quando acabar o tempo

## 👷 How to Run

Rodando o projeto na web

```
# Acesse a pasta do projeto
$ cd rcountdown

# Instale as dependências
$ yarn install ou npm install

# Rode a aplicação
$ yarn dev ou npm run
---
