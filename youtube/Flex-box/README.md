# Ambiente e Conceitos

## O que é?

- Flex-box é uma maneira de construir layouts responsivos que veio do **Android** e **Java**
- Trouxe flexibilidade para trabalhar com layouts adaptáveis na Web com diferentes tamanhos de tela e trabalhar com responsividade.
- Vamos usar as principais propriedade e não todas.

# Começando com flex

## Como começar?

- Para utilizar o flex-blox, temos que colocar o `display:flex` na div ou tag que estiver por fora dos elementos que quisermos alinhar.

## ```display:flex```

- Por padrão alinha horizontalmente sempre

## flex-direction

**Row**

- Por padrão o valor dela é row (linha)
- A direção dos itens filhos do app vão sempre seguir na mesma linha, um item ao lado do outro.
- Alinhamento horizontal

**Column**

- Se ordenam verticalmente, seguindo a mesma coluna.
- Alinhamento vertical

**Row-reverse**

- Mesma linha, mas começando do lado direito para o esquerdo

**Column-reverse**

- Vem debaixo para cima

## Alinhamento do conteúdo

### **align-items**

- Utilizando o **row**, o align-items sempre vai alinhar o conteúdo verticalmente (eixo Y)

### **justify-content**

- Utilizando o row, o justify-content sempre vai alinhar o conteúdo horizontalmente (eixo X)

### **flex-start**

- Alinhar no começo sempre

### **center**

- Alinha ao centro, com align-items no eixo y (verticalmente), e com justify-content no eixo X (horizontal)

### **flex-end**

- Alinhar os itens ao final

### **Alinhando ao centro vertical e horizontalmente**

- justify-content: center
- align-items: center;

### **space-between (justify-content)**

- Vai colocar um espaço igual entre todos os itens da div.
- Não coloca espaço no início nem no final dos itens

### **space-around (justify-content)**

- Mesma coisa do space-between, mas coloca um pouquinho de espaço no começo e um pouquinho de espaço no fim

### **Agora, com ```flex-direction: column```**

### ```Align-items: center;```

- Agora vai alinhar horizontalmente ao centro (eixo X)

### ```justify-content: center;```

- Agora vai alinhar verticalmente ao centro (eixo Y)

### **align-items:base-line**

- Alinha todos os textos na mesma linha de texto

## Redimensionamento

### **flex-grow | flex-shrink**

- Vai permitir a gente controlar se o componente deve ser espremido ou até aumentado para caber no espaço do container dele.
- Existem 2 propriedades que vão controlar se um elemento da nossa tela pode ser redimensionado, seja pra maior, seja pra menor.
- Sem usa-los, se aumentarmos nossa tela, vemos que os componentes se mantém com o mesmo tamanho
- Usando essas propriedades os elementos irão espremer ou aumentar além do tamanho defindo para redimensionar em tela.
- Por padrão o valor é 1, nos dois.

### **flex-grow**

- Diz se nosso componente aceita ser aumentado para caber no elemento pai dele (container)

### **flex-shrink**

- Diz se o nosso componente tem a capacidade de se espremer para caber no container

### ```flex-shrink: 0;```

- Cria uma barra de rolagem pro elemento caber na tela do seu tamanho original

### flex

- Une as duas propriedades, **flex-grow** com **flex-shrink**, seguindo essa ordem

### ```flex: 1;```

- Por padrão os devs usam com o valor 1, para o elemento aumentar caso a tela aumente e com o flex-shrink 0, para diminuir quando a tela diminuir.

## Configurando wrap de itens

### **flex-wrap**

- São as quebras de linhas dentro do flex-box, evitando a barra de rolagem.
- Por padrão o valor é no-wrap

### **flex-wrap: wrap**

- Temos a quebra de linha funcionando, caso o elemento ultrapasse o valor da tela e não consiga encaixar totalmente no espaço.

### **flex-wrap: wrap-reverse**

- Conseguimos setar para fazer a quebra reversa da linha.

### **align-content**

- Alinhar os elementos quando eles estão em mais de uma linha.
- Essa propriedade tem acesso aos mesmos valores do **align-center.**

## Ordenação

### O que é?

- Vamos aprender a alinhar em ordem agora.
- Pensando em layouts responsivos, quando diminuimos a tela, existem vezes que queremos que os elementos troquem de posição

### **order**

- Utilizando o order conseguimos mudar a posição dos elementos
- É ótimo para layouts que precisem se adaptar ao layout da tela.

### **flex-basis**

- Tamanho padrão do elemento antes dele aumentar ou diminuir
- Por padrão é auto

## Screenshot Projeto

![Rocket-Twitter](https://github.com/Pedrovinhas/rocket-studies/blob/master/css/Flex-box/images/rockett.png)

---
