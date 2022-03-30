# Rocketflix

<div align="center">
    <img src="./public/rflix.gif">
</div>

<p align="center">
  <a href="#-Objetivo"> 🎉 Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Design"> 🎨 Design</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Techs"> 🔩 Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Implementações"> 🧱 Implementações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 🎉 Objetivo
Neste desafio utilizo a API do themoviedb.org para exibir um filme aleatório sempre que clicar em Encontrar Filme. O projeto segue as indicações feita nesse post no [Notion](https://efficient-sloth-d85.notion.site/Desafio-Rocketflix-5ca1c56b5e52473eb12e8b2bc3ab1b8d#06e6ecb4212447c695dfbe7da61ec551)

## 🎨 Design
O design do projeto pode ser consultado através desse [link](https://www.figma.com/file/y62bHFgGH7fnIf0djOsSev/DD-Rocketflix-Copy?fuid=898242652746725678) no Figma. Consulte também o [Guia de Estilo](/styleguide.md)
## 🔩 Techs

- [X] Yarn
- [X] React with ``create vite app``
- [X] SASS

<div>
<img width='24px' height='24px' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Icon">
<img width='24px' height='24px' src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite Icon">
<img width='24px' height='24px' src="https://cdn.iconscout.com/icon/free/png-256/sass-226054.png" alt="Styled-Components Icon">
</div>

### Dependências
- [X] Axios
- [X] API themoviedb

## 🧱 Implementações

### Achievements
- [X] Site fidedigno ao Design
- [X] Responsividade para diversos dispositivos
- [X] Consumo da API **moviedb** com Axios
- [X] Funcionalidade de Shuffle para trazer um filme aleatório (usar MathRandom com o id dos filmes)
- [ ] Organizar código do responsivo
- [X] Usar ``.env`` para API_KEY
### ✨ Features
- [ ] Trazer mais informações da API, como atores, gênero
- [ ] Implementar funcionalidade de Shuffle com gênero específico
- [X] Animações ao clicar no botão e ao trazer as informações sobre o filme

## 👷 How to Run

Rodando o projeto na web

```
# Acesse a pasta do projeto
$ cd rflix

# Instale as dependências
$ yarn install ou npm install

# Rode a aplicação
$ yarn dev ou npm run