# Memória Descritiva

Este trabalho foi desenvolvido em conjunto com o ChatGPT, uma vez que necessitava de implementar funcionalidades específicas para as quais ainda não possuía os conhecimentos necessários, de forma a concretizar a minha ideia: controlar a direção do vento através do movimento do rato e tornar esse movimento visível através da relva e das nuvens.

Inicialmente, são declaradas as variáveis globais grass, clouds e windDirection, sendo as duas primeiras arrays, que permitem armazenar vários elementos numa única variável.

O canvas é criado com 800 píxeis de largura e 800 píxeis de altura. A relva é gerada através da função push(), que permite introduzir novos elementos no array. Utilizando um ciclo for, são criados 450 elementos, distribuídos pelo canvas através de coordenadas horizontais (x) aleatórias. Cada elemento da relva possui propriedades únicas e individuais, que determinam o seu comportamento e a sua representação visual. A propriedade phase, através da constante TWO_PI, permite atribuir a cada elemento uma fase inicial diferente, evitando que todos comecem a se movimentar simultaneamente, o que produziria um movimento pouco natural. As nuvens são geradas de forma semelhante, mas com propriedades diferentes, como a posição, as dimensões e a velocidade.

Na função draw(), começamos a definir o comportamento e o movimento dos elementos. A primeira estrutura condicional if/else determina a direção pretendida do vento, de acordo com a localização horizontal do rato, através da variável windTarget. Para conseguir que os elementos alterem o seu comportamento de forma fluida, é utilizada a função lerp(), através da variável windDirection, permitindo realizar uma interpolação linear entre a direção atual do vento e a direção pretendida (windTarget).

De seguida, utilizamos o ciclo for (let c of clouds) para falar individualmente com cada nuvem do array e aceder às respetivas propriedades, geradas anteriormente na função setup(). A posição horizontal de cada nuvem é atualizada em cada fotograma, somando à sua coordenada x o resultado da multiplicação da sua velocidade pela direção do vento e pelo valor de deltaTime.

Posteriormente, é implementada a segunda estrutura condicional if/else, que permite que as nuvens reapareçam no extremo oposto do canvas quando ultrapassam os seus limites, garantindo assim um movimento contínuo.

Por fim, utilizamos o ciclo for (let g of grass) para falar individualmente com cada elemento da relva. É criada a variável sway, que contém uma função trigonométrica, sin(), responsável por produzir um movimento oscilatório. Esta função gera valores compreendidos entre -1 e 1, permitindo simular a oscilação natural da relva.

De seguida, é criada a variável bend, que reúne o cálculo da inclinação provocada pela direção do vento e a oscilação individual de cada elemento. Este valor é posteriormente utilizado para determinar as coordenadas dos pontos da função bezier(), que permite desenhar curvas através de pontos de controlo. Desta forma, é possível controlar a curvatura de cada elemento da relva e simular a sua inclinação em resposta ao vento.