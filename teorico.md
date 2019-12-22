# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação? 
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.

```js
// Resposta
Utilizo o CSS3 que agora permite coisas antes impossíveis, como elementos com cor ou fundo gradiente, sombras e cantos arredondados. Antes só era possível atingir esses resultados com o uso de imagens e às vezes até com um pouco de JavaScript. A redução do uso de imagens traz grandes vantagens quanto à performance e quantidade de tráfego de dados necessária para a exibição de uma página. Para aumentar a velocidade de carregamento do site/aplicação, faço uso da técnica de inserir imagens usando css. Esta prática consiste em utilizar a propriedade background-image do css para inserir as imagens.
```




2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação? 
Explique um pouco através de exemplos;


```js
// Resposta
Conheço vários padrões como o OOCSS, SMACSS, BEM e o DRY CSS, todos estes sistemas possuem conceitos e abordagens para escrever código melhor e acredito um pouco em cada um deles. O ideal não é utilizar uma metodologia separada, mas sim criar um modelo híbrido para atender a aplicação em questão. Utilizo como referência a [convenção projeto SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), segue abaixo um exemplo de implementação:

/* Utility */
.u-utility-name {}

/* Component */
.block-name {}
.block-name__element-name {}
.block-name--modifier-name {}

/* State */
.is-global-state {}

/* Component state (scoped to component) */
.block-name.is-state-of-component {}
```




3\) Se tratando de aplicações responsivas, quais práticas/recursos você costuma utilizar? 
Tem algum exemplo que você não acha interessante?


```js
// Resposta
Nos meus projetos responsivos, gosto de fazer uso do Mobile First, que consiste em fazer a criação da aplicação primeiro em dispositivos mobiles, para depois adaptar para desktops e outras plataformas. Existem várias vantagens de se utilizar está prática, dentre elas, o melhor rankeamento no Google, melhor experiência ao usuário, e mais rápidez no carregamento da página e rederização de componentes e elementos.
```




4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**


- HTML:
```
	<div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<span class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</span>
	</div>
  
```


- Estilos:
```
    .lista-grande{
        display: block;
    }

    .lista-grande h1{
        font-size: 18px;
    }

    .list-item-holder .item{
        list-style-type: decimal-leading-zero !important;
        padding: 1rem;
        width: 100%;
    }


    .list-item-holder ul li{
        list-style-type: thai;
    }

    .list-item-holder .item .item__input-radio{
        padding: 25px;
            border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    .item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: #a0abb5;
    }


    .item__input-radio--cor-diferente {
        @media (min-width: 480px) {
            background: #a0abb5;
        }
    }
    .item__input-radio--cor-diferente {
        @media (max-width: 480px) {
            background: transparent;
        }

    }

```

```js
// Resposta
Existem alguns problemas no código acima, dentre eles a tag <span> que está sendo utilizada para agrupar elementos no nível de bloco, sendo que sua utilização correta é para agrupar ou identificar elementos inline. As @media não estão sendo invocadas, por isso não estão causando efeito nenhum no código. As classes CSS não estão com nomenclatura consistentes, existem vazamentos de estilos para fora e para dentro dos componentes, não respeitando os limites do componente.
```




5\) Analisando os estilos em `Nesting` do código abaixo, descreva, caso exista, os problemas gerados e as possíveis soluções;

```
    .form-holder {
        width: 100%;
        margin-bottom: 25px;

        .form-item {
            .item-name,
            .item-lastname,
            .item-genre,
            .item-email,
            .item-document-type,
            .item-document-number,
            .item-expiration-date,
            .item-country {
                input, select, textarea {
                    border: none;
                    padding: none;
                    box-shadow: none !important;

                    &.error{
                    background: red;
                    }
                }
                input[disabled], select[disabled], input[readonly], select[readonly] {
                    background-color: #FFF;
                }
            }
            
        }
    }

```

```js
// Resposta
Existe alguns problemas ao produzirmos um código como o mostrado acima, mas os principais motivos são a geração de código desnecessario, aumentando o tamanho do arquivo final e principalmente a quebra da especificidade e a herança do código CSS. A confusão de !important vai acontecer, e o programador passará muito tempo resolvendo conflitos de formatação. Isso pode sempre piorar conforme o programador aninha cada vez mais os seletores e o projeto é grande. A solução é usar no máximo 3 aninhamentos. Um código bem feito naturalmente vai ter entre 2 ou 3 aninhamentos. Não é nescessario começar a formatar os elementos iniciando seu seletor sempre do elemento pai. Gosto de utilizar algumas ferramentas para testar códigos SASS, um deles é o SaasMeister, que converte código SASS em código CSS normal, e o outro é o ScssConverter, que converte código SASS para SCSS.
```



---


### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
// Resposta
```




2\) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```
    function doSomething() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }

    function doSomethingElse() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    somePromise()
        .then(() => {
            doSomething()
            doSomethingElse()
        })
        .then(() => {
            console.log('finished')
        })

```

```js
// Resposta
```




3\) O que o código a seguir imprime? (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```	
	somePromise()
	    .then(() => {
		throw new Error('uh oh!')
	    }, err => {
		console.log(err.message)
	    })
	    .then(() => {
		console.log('ok now!')
	    })

```

```js
// Resposta
```



4\) Melhore a função a seguir:

```
	function getTransactions() {
	    return $q((resolve, reject) => {
		$http.get(BASE_URL + '/api/transacoes')
		    .then(response => {
		        if (!response.data.error) {
		            const transactions = response.data

		            var _transactions = []

		            for (var i in transactions) {
		                if (transactions[i].realizada)  {
		                    _transactions.push({
		                        id: transactions[i].id,
		                        value: transactions[i].valor,
		                        type: transactions[i].valor < 0 ? 'transference' : 'deposit',
		                    })
		                }
		            }

		            resolve(_transactions)
		        } else {
		            reject(response.data.error)
		        }
		    })
		    .catch(e => reject(e))
	    })
    }

```


```js
// Resposta
```



5\) Dado um array de objetos, no qual cada objeto representa uma pessoa e possui as propriedades `name` e `age`, por exemplo:
```
    [
        { name: 'Rick Sanchez', age: 70 } ,
        { name: 'Morty Smith', age: 14 }
    ]

```

Crie funções para:
1. Retornar uma o array ordenado alfabeticamente pelos nomes;
2. Fazer o somatório das idades;
3. Verificar se alguma pessoa tem a idade maior que 50 (espera-se um retorno booleano).
4. Verificar se todas pessoas tem a idade menor que 20 (espera-se um retorno booleano).
5. Remover o primeiro nome de todas as pessoas.
6. Dado um determinado nome, retornar o primeiro objeto que corresponda a este nome.

*Obs.: As funções criadas devem atender arrays de qualquer tamanho.*


```js
// Resposta
```



6\)Dado o seguinte trecho de código:

```
	const getDiscountTicket = (ticket, discount) => {
		const discountTicket = { ...ticket };
  		discountTicket.prices.vip = discountTicket.prices.vip * discount;
		discountTicket.prices.stands = discountTicket.prices.stands * discount;
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);

```
Explique o porquê dos preços estarem com o mesmo valor. E o que precisa ser alterado para que os preços sejam diferentes?


```js
// Resposta
```

---


### AngularJs

1\) Explique os tipos de Data Binding no AngularJS; 

```js
// Resposta
```

2\) Liste quais são os Dispatchers e Listeners que existem no AngularJs, as diferenças entre eles, vantagens e desvantagens no uso dos mesmos;

```js
// Resposta
```

3\) O que são e como funcionam os lifecycles no AngularJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

4\) Qual recurso angularJs pode ser usado para aumentar a performance de campos de formulários que realizam algum processamento ao alterar o texto?

```js
// Resposta
```

5\) Dado o `Nesting` de componentes abaixo, indique a melhor forma do componente `<fourth-component>` se comunicar com `<first-component>`;

```
	<first-component>
		<second-component>
			<third-component>
				<fourth-component>
				</fourth-component>
			</third-component>
		</second-component>
	</first-component>

```

```js
// Resposta
```
---

### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
// Resposta
```

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

3\) Atualmente nosso sistema possui um componente chamado Button que possui a seguinte estrutura:

```
    import React from 'react';
    import styled from 'styled-components';

    const ButtonLayout = styled.button`
    cursor: pointer;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const Button = (props) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label}</ButtonLayout>
        </React.Fragment>
    );
    };

    export default Button;
```

Atualmente, os nossos botões podem variar na cor, texto e ação que é executada ao ser clicado. 
No entanto, para uma nova atividade, foi solicitado seja criado um botão que contém também um ícone. 
O que você pode fazer para criar um botão que atenda essa demanda?


```js
// Resposta
```


