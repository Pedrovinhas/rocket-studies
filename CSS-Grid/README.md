
# CSS Grid
## O que é?

- Fatiamos com colunas e linhas e dentro desse fatiamento colocamos o que queremos dentro.
- Bi-dimensional
- Divisão de toda a página em linhas e colunas
- Colocar elementos onde quiser nessa divisão.

## Grid ou FlexBox

- Grid, duas dimensões (colunas e linhas)
- Flexbox uma dimensão (ou coluna ou linha)
- **Um complementa o trabalho do outro**
- No Grid temos conteúdo delimitados.
- Verificar quais navegadores ainda não estão aceitando Grid
- Com os dois temos flexbilidade incrível

Em uma tela definimos o GRID para o layout na totalidade, mas cada componente dentro do Layout podemos alinhar com FlexBox.

## Propriedades

- Vamos separar em dois grupos: container e item(s)

### Container
Delimitam por div os conteúdos dos items (filhos)
- `display:grid`

<table>
    <th colspan=3> <code> container</code></th>
    <tbody>
    <tr>
    <td> <code> grid-template-areas</code></td>
    <td> <code> grid-template-columns</code></td>
    <td> <code> grid-template-rows</code></td>
    </tr>      
    <tr>
    <td> <code> grid-gap</code></td>
    <td> <code> grid-row-gap</code></td>
    <td> <code> grid-column-gap</code></td>
    </tr>      
    </tbody>
</table>

### Items
Delimitam a disposição do conteúdo filho.

<table>
    <th colspan=3> <code> items</code></th>
    <tbody>
    <tr>
    <td> <code> grid-column </code></td>
    <td> <code> grid-column-start </code></td>
    <td> <code> grid-column-end</code></td>
    </tr>      
    <tr>
    <td> <code> grid-row</code></td>
    <td> <code> grid-row-start</code></td>
    <td> <code> grid-row-end</code></td>
    </tr>      
     <tr>
    <td> <code> grid-area</code></td>
    <td> <code> grid-column</code></td>
    <td> <code> grid-row</code></td>
    </tr>  
    </tbody>
</table>

## Propriedades de Alinhamento
### `justify-content` `alignt-content`
1. Center
2. Start
3. End
4. Stretch
5. Space-evenly
6. Space-between
7. Space-around

### `justify-items` `align-items`
1. Center
2. Start
3. End
4. Stretch

### `justify-self`  `alignt-self`
1. Center
2. Start
3. End
4. Stretch