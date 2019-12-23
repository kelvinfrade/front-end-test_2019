# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação?
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.

```js
// Resposta
```

Utilizo o CSS3 que agora permite coisas antes impossíveis, como elementos com cor ou fundo gradiente, sombras e cantos arredondados. Antes só era possível atingir esses resultados com o uso de imagens e às vezes até com um pouco de JavaScript. A redução do uso de imagens traz grandes vantagens quanto à performance e quantidade de tráfego de dados necessária para a exibição de uma página. Para aumentar a velocidade de carregamento do site/aplicação, faço uso da técnica de inserir imagens usando css. Esta prática consiste em utilizar a propriedade background-image do css para inserir as imagens.

2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação?
Explique um pouco através de exemplos;

Conheço vários padrões como o OOCSS, SMACSS, BEM e o DRY CSS, todos estes sistemas possuem conceitos e abordagens para escrever código melhor e acredito um pouco em cada um deles. O ideal não é utilizar uma metodologia separada, mas sim criar um modelo híbrido para atender a aplicação em questão. Utilizo como referência a [convenção projeto SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), segue abaixo um exemplo de implementação:

```js
// Resposta
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
```

Nos meus projetos responsivos, gosto de fazer uso do Mobile First, que consiste em fazer a criação da aplicação primeiro em dispositivos mobiles, para depois adaptar para desktops e outras plataformas. Existem várias vantagens de se utilizar está prática, dentre elas, o melhor rankeamento no Google, melhor experiência ao usuário, e mais rápidez no carregamento da página e rederização de componentes e elementos.

4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**

-   HTML:

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

-   Estilos:

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
```

Existem alguns problemas no código acima, dentre eles a tag <span> que está sendo utilizada para agrupar elementos no nível de bloco, sendo que sua utilização correta é para agrupar ou identificar elementos inline. As @media não estão sendo invocadas, por isso não estão causando efeito nenhum no código. As classes CSS não estão com nomenclatura consistentes, existem vazamentos de estilos para fora e para dentro dos componentes, não respeitando os limites do componente.

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
```

Existe alguns problemas ao produzirmos um código como o mostrado acima, mas os principais motivos são a geração de código desnecessario, aumentando o tamanho do arquivo final e principalmente a quebra da especificidade e a herança do código CSS. A confusão de !important vai acontecer, e o programador passará muito tempo resolvendo conflitos de formatação. Isso pode sempre piorar conforme o programador aninha cada vez mais os seletores e o projeto é grande. A solução é usar no máximo 3 aninhamentos. Um código bem feito naturalmente vai ter entre 2 ou 3 aninhamentos. Não é nescessario começar a formatar os elementos iniciando seu seletor sempre do elemento pai. Gosto de utilizar algumas ferramentas para testar códigos SASS, um deles é o SaasMeister, que converte código SASS em código CSS normal, e o outro é o ScssConverter, que converte código SASS para SCSS.

---

### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
// Resposta
```

Em javascript podemos tratar os processamentos assíncronos com os seguintes recursos: Callbacks, Promises e Async/Await.

#### Callbacks

A função de retorno de chamada é uma função que será chamada após a execução da primeira função e executará a segunda função.

    function getUser(){
               setTimeout(() => {
                   const userids = [10, 20, 30, 40];
                   console.log(userids);
                   setTimeout((id) => {
                       const user = {
                           name:'John Doe',
                           age: 25
                       };
                           console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`)
                           setTimeout((age) => {
                               console.log(user);
                           }, 1000, user.age);
               }, 1000, userids[3]);
               }, 1500)
           }
     getUser();

A saída do código acima é:

    (4) [10, 20, 30, 40]
    User ID : 40 : User name : John Doe, User Age: 25
    {name: "John Doe", age: 25}

Como você pode ver neste exemplo, temos três retornos de chamada aninhados um no outro, o que significa três chamadas ajax em cadeia para obter os dados do servidor. Pode ter mais e mais funções de retorno de chamada em cadeia e isso pode ficar fora de controle. Para tentar resolvermos este problema precisamos utilizar as promisses.

#### Promises

Uma promessa é um objeto que controla se o evento assíncrono já ocorreu ou não e determina o que acontece após o evento. Ele fornece dois valores, resolvidos ou rejeitados. Pode estar em três estados, cumpridos, pendentes ou rejeitados. Ajuda a detectar todos os erros que ocorreram após a rejeição ou anexar um retorno de chamada ao identificador do valor atingido.

![Three states of a promise](https://www.topcoder.com/wp-content/uploads/2019/04/02.png)

Antes que o evento aconteça, a promessa está pendente e, depois que o evento acontece, é chamada de resolvida. Quando a promessa for bem-sucedida e o resultado estiver disponível, ele será cumprido, mas se detectar erros, será chamado de rejeitado.

    const getUsername = userid => {
               return new Promise((resolve, reject) => {
                   setTimeout((id) => {
                       const user = {
                           name:'John Doe',
                           age: 25
                       };
                       resolve({user_id: id, username: user.name, age: user.age});
                   },1500, userid)
               })
           }
           const getUserage = userid => {
               return new Promise((resolve, reject) =>{
                   setTimeout((id) =>{
                       const user = {
                           name:'John Doe',
                           age: 25
                       };
                       resolve({user_id:id, user_age: user.age})
                   },1500, userid)
               })
           }
          const getuserIds =  new Promise((resolve, reject) =>{
               setTimeout(() => {
                   resolve([10,20,30,40])
               },1500)
           });
           getuserIds.then((IDS)=>{
               console.log(IDS)
               return getUsername(IDS[3]);
           }).then((userObj) => {
               console.log(userObj)
               return getUserage(userObj.user_id);
           }).then((userage) => {
               console.log(userage)
           }).catch((erorr)=>{
               console.log(erorr)
           })

A saída do código acima é:

    Promise {<pending>}
    (4) [10, 20, 30, 40]
    {user_id: 40, username: "John Doe", age: 25}
    {user_id: 40, user_age: 25}

No exemplo acima, consumimos nossas promessas com o "then" e, finalmente, uma "catch" para prender o erro. Também enfrentamos o problema de retorno desordenados de chamada com promessas.

#### Async/Await

Async/Await é usado para trabalhar com promessas com funções assíncronas. Colocar o Async na frente da função espera que ela retorne a promessa. Isso significa que todas as funções assíncronas têm um retorno de chamada. Aguardar pode ser usado para promessas únicas a serem resolvidas ou rejeitadas e retornar os dados ou erro. O Async/Await se comporta como a execução de código síncrono. Pode haver várias esperas em uma única função assíncrona. Usaremos a construção try/catch, o que facilita o processamento de código assíncrono e assíncrono. O Async/Await ajuda a lidar com a confusão de retorno de chamada.

    const userfunc = async () => {
              try {
                  const id = await getuserIds;
                  console.log(id);
                  const getusername = await getUsername(id[3]);
                  console.log(getusername.username);
                  const getuserage = await getUserage(id[3]);
                  console.log(getuserage.user_age);
              } catch (error) {
                  console.log(error);
              }
          };
          userfunc();

A saída do código acima é:

    (4) [10, 20, 30, 40]
    Promise {<pending>}
    John Doe
    25

Neste exemplo async/await, consumimos as promessas e chamamos várias esperas em uma única função assíncrona.

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

irá demorar 3 segundos para o código acima imprimir "finished", pois o retorno da promise executa as funções doSomethingElse() e doSomething() de forma sequêncial, que chama o método setTimeout que permite que agendemos alguma função para execução no futuro e recebe o nome do método a ser executado e o número de milissegundos a esperar.

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

O código acima imprime a mensagem: "uh oh!", vai dar um erro pois não se usa este padrão mais para tratar promises. Para contornar esta questão podemos utilizar o try/catch.

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

Podemos melhorar a função utilizando jQuery/Ajax ou Axios:

![Exemplo com Ajax](https://cdn-media-1.freecodecamp.org/images/1*vZ4BqVQfsvtpJm_RCsCE2Q.png)

![Exemplo com Axios](https://cdn-media-1.freecodecamp.org/images/1*4wmqiPsSN5mdgjJiRaKVZg.png)

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

_Obs.: As funções criadas devem atender arrays de qualquer tamanho._

```js
// Resposta
```

Podemos fazer as operações acima trabalhando com os métodos criados apartir do ES6, map(), filter() e reduce() são alternativas poderosas tanto para se operar com valores cumulativos, quanto para criar subconjuntos com base em condições. Estas funções são úteis para reduzir a complexidade, trabalhar sem “efeitos colaterais” e, muitas vezes, tornar o código mais legível e reutilizável.

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

Os preços estão com o mesmo valor, pois tem um dicionário dentro de outro, e o valor é pegado por referência, quando se altera o pai, o filho automaticamente é alterado também. Para resolver este problema, basta sobrescrever o prices, utilizando uma desestruturação. Veja a implementação abaixo:

    const getDiscountTicket = (ticket, discount) => {
        const discountTicket = { ...ticket };
        //Desestruturação no prices
        discountTicket.prices = { ...ticket.prices };

        discountTicket.prices.vip = discountTicket.prices.vip * discount;
        discountTicket.prices.stands = discountTicket.prices.stands * discount;

        return discountTicket;
    };

    const regularTicket = {
        band: "Metallica",
        city: "Belo Horizonte",
        prices: { vip: 800, stands: 600 }
    };
    const discountTicket = getDiscountTicket(regularTicket, 0.5);

    console.log("discountTicket: ", discountTicket.prices);
    console.log("regularTicket: ", regularTicket.prices);

---

### AngularJs

1\) Explique os tipos de Data Binding no AngularJS;

```js
// Resposta
```

A maioria dos sistemas de templates vinculam dados em apenas uma direção, que se funde com os componentes do modelo, e este por sua vez, executa uma saída na sua tela (isso é o evento Data Binding no AngularJS padrão). Após esta fusão, ocorrem algumas mudanças no modelo ou parte dele (seções), que estão relacionadas a esta tela. Entretanto, este comportamento, não é automático como pressupõe-se ao ver isso ocorrendo na tela. E pior ainda, as alterações que o usuário faz na tela não são refletidos no modelo.

A grande jogada, está na mão do desenvolvedor, que tem que escrever o código que faz esta sincronia de maneira constante através do modelo e o mesmo retorna essa atualização para a tela (visão). Acontece que no AngularJs, O Data Binding funciona um pouco diferente:

Em aplicativos angulares de ligação de dados, a sincronização de dados é automática, entre os componentes do modelo e sua exibição (tela). A maneira que Angular implementa esta vinculação de dados, permite que você trate o modelo como um single-source da sua aplicação. O que você vê na tela é uma projeção do modelo a todo instante. Quando o modelo muda, a visão reflete esta mudança, e vice-versa.

Primeiro o modelo (a HTML empacotada, juntamente com qualquer marcação ou diretiva adicional) é compilado no navegador. A etapa de compilação produz uma exibição ao vivo. Quaisquer alterações na tela são imediatamente refletidas no modelo, e quaisquer mudanças no modelo são propagadas para a visão (tela). O modelo é justamente a única verdade absoluta do estado do seu aplicativo. Isso é feito para facilitar o modelo de programação para o desenvolvedor.

Você pode pensar na visão (tela) como uma simples projeção instantânea do seu modelo. Porque a tela é apenas uma projeção do modelo, e o controlador é completamente separado da tela. É a visão (tela) que enxerga o controlador e que envia comandos para ele.

Pense que o modelo é um tipo de facilitador, e o controlador o cara que envia as ordens para ele, e o que o modelo "facilitar", será refletido automaticamente na visão.

![Data Binding no AngularJS](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)

2\) Liste quais são os Dispatchers e Listeners que existem no AngularJs, as diferenças entre eles, vantagens e desvantagens no uso dos mesmos;

```js
// Resposta
```

#### Dispatchers

O AngularJS fornece um sistema de dispatches de eventos que permite a comunicação entre controladores ou serviços e controladores.

**\$broadcast** - dispatches o evento para baixo pelos escopos filho

**\$emit** - dispatches o evento para cima através da hierarquia de escopo

**\$on** - captura o evento que passa por esse escopo

Geralmente, você pode vê-lo em uso $rootScope ou $scope:

    $scope.$broadcast('eventName', arg);
    $rootScope.$broadcast('eventName', arg);

    $scope.$emit('eventName', arg);
    $rootScope.$emit('eventName', arg);

    $scope.$on('eventToCatch', function);
    $rootScope.$on('eventToCatch', function);

Agora, há algumas coisas a saber sobre como usá-lo em \$rootScope:

-   Ambos $rootScope.$emite $rootScope.$broadcastpassam por escopos filhos, já \$rootScopeque não têm um pai

-   $rootScope.$emit só pode ser recebido por $rootScope.$on

-   $rootScope.$broadcastpode ser recebido por $rootScope.$one$scope.$on

-   $rootScope.$on o ouvinte precisa ser removido manualmente (vazamento de memória se esquecido)

**Performance**

O uso \$broadcastpode não parecer ideal se considerarmos a descrição que temos acima. No entanto, é otimizado para passar apenas por ramificações que possuem uma ligação de evento correspondente.

#### Listeners

Pode adicionar listeners de evento no AngularJs aos seus elementos HTML usando uma ou mais das diretivas abaixo:

-   ng-blur
-   ng-change
-   ng-click
-   ng-copy
-   ng-cut
-   ng-dblclick
-   ng-focus
-   ng-keydown
-   ng-keypress
-   ng-keyup
-   ng-mousedown
-   ng-mouseenter
-   ng-mouseleave
-   ng-mousemove
-   ng-mouseover
-   ng-mouseup
-   ng-paste

As diretivas de eventos nos permitem executar funções do AngularJs em determinados eventos do usuário.

3\) O que são e como funcionam os lifecycles no AngularJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

Existe alguns ciclos de vida onde o processo de renderização do AngularJs acontece, sendo eles:

-   ngAfterContentInit: Após o Angular pegar um conteúdo externo e inserir no componente: ng-content, chamado uma vez após o ngDoCheck.

-   ngAfterViewInit: Após o Angular inicializar suas páginas e páginas filhas. Ele é chamado uma vez após o ngAfterContentChecked.

Basicamente temos os seguintes ciclos nesta ordem, sendo que durante a etapa amarela é onde os processos de renderização acontecem:

![Lifecycles no AngularJs](https://codecraft.tv/courses/angular/components/lifecycle-hooks/images/lifecycle-hooks.png)

4\) Qual recurso angularJs pode ser usado para aumentar a performance de campos de formulários que realizam algum processamento ao alterar o texto?

```js
// Resposta
```

Existem vários recursos do AngularJs como formulários orientados a templates, formulários orientados a dados (reativos),mas para aumentar a performance neste caso, podemos utilizar as validações assíncronas, o Form Builder e o Form Array.

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

Podemos trabalhar com @Output. Evento disparado no filho que capturado no pai. Tendo em vista que a comunicação entre componentes pai e filho é simples, passamos através de property e a comunicação entre filho e pai passamos através de evento. Basta importar o EventEmitter e fazer uso.

---

### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
// Resposta
```

Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela. Existem dois tipos de escrita de componentes no React, sendo eles de Função e de Classe:

A maneira mais simples de definir um componente é escrever uma função JavaScript:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

Você também pode usar uma classe ES6 para definir um componente:

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

Os dois componentes acima são equivalentes do ponto de vista do React.

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

Todo componente no React possui um ciclo de vida, dizemos que os componentes são montados em tela, podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos interceptando sua renderização tradicional ou captando informações desse ciclo. Esses métodos são definidos junto à classe do componente, o render é um deles. Vamos entender como tudo isso funciona:

**constructor**
Apenas de não estar diretamente atrelado ao ciclo de vida do componente, o método constructor é a primeira função executada no componente.

    class App extends Component {
      constructor(props) {
        super(props);
      }
    }

Obs.: Sempre que definirmos o constructor, precisamos repassar as props recebidas para o componente pai Component.

**componentWillMount**
Após do constructor o método seguinte executado é o componentWillMount, ainda antes do render. Esse método é executado 1 vez por componente e pode inclusive realizar alterações no estado:

    class App extends Component {
      componentWillMount() {
        this.setState({ loading: true });
      }
    }

**render**
Logo após, o método render é chamado construindo a View do nosso componente, esse método é chamado toda vez que uma alteração nas propriedades ou estado do componente é realizada. Você não deve utilizar qualquer função nesse método, apenas retornar conteúdo JSX.

**componentDidMount**
Chamado após o render indica que a renderização inicial do nosso componente foi finalizada, é o local recomendado para fazer qualquer processo assíncrono ou de efeito colateral como chamadas à API, referenciar componentes criados no render ou inclusive alterar o estado, disparando uma nova atualização no fluxo do componente.

    class App extends Component {
      componentDidMount() {
        // O render já executou, o que faremos agora?
      }
    }

Agora finalizamos os métodos responsáveis pela primeira renderização dos componentes e vamos partir para os métodos responsáveis pela atualização no ciclo de vida:

**componentWillReceiveProps**
Executado automaticamente toda vez que alguma propriedade do componente for atualizada, por exemplo, imagine estarmos passando a propriedade title ao componente da seguinte forma:

    <App title="Meu título" />

E em algum momento alterarmos essa propriedade Meu título para Outro título, o componentWillReceiveProps do App irá ser avisado e receberá como parâmetro as novas propriedades. Esse método é muito utilizado quando o estado do nosso componente é composto por propriedades, e dessa forma podemos alterar o estado por esse método:

    class App extends Component {
      componentWillReceiveProps(props) {
        this.setState({ title: `Aplicação ${props.title}` });
      }
    }

**shouldComponentUpdate**
Método responsável por determinar se o componente deve realizar o render novamente ou não. Lembrando que qualquer alteração de propriedade ou estado do componente faz com que ele gere uma nova renderização, mas isso é realmente necessário? Talvez não. Imagine que seu componente mostre apenas o título no render e você atualize a propriedade de descrição, isso não deveria causar um render, correto? Nesse caso verificamos se o título foi alterado, se não simplesmente retornamos false para indicar que não precisamos atualizar o componente:

    class App extends Component {
      shouldComponentUpdate(newProps, newState) {
        return newProps.title !== this.props.title;
      }
    }

Obs.: Como o componente ouve atualizações no estado e propriedades, você receberá essas duas informações no shouldComponentUpdate.

**componentWillUpdate**
Ok, o shouldComponentUpdate liberou a atualização, o componentWillUpdaterealiza a intermediação entre o render e dessa forma você poderá realizar alguma preparação antes de realizar o render. Esse método também recebe as novas propriedades e estado. Após esse método, o render é disparado novamente com as alterações.

**componentDidUpdate**
Executado após o novo render indicando que o componente foi atualizado com sucesso. Recebe as propriedades e estado antigos como parâmetro.

Fora desse ciclo de criação e atualização, existem mais dois métodos:

**componentWillUnmount**
Chamado antes de um componente ser desmontado, ótimo para cancelar EventListeners ou setIntervals que ainda possam estar sendo executados.

**componentDidCatch**
A partir do React 16 você já pode ouvir erros causados durante o ciclo de vida do componente utilizando o componentDidCatch, você inclusive pode passar esses erros para a View utilizando o setState:

    class App extends Component {
      componentDidCatch(error, info) {
        this.setState({ errorMessage: error.message });
      }
    }

**Novos métodos de ciclo de vida**
Vimos acima que existem muitos métodos para controlarmos o fluxo de mount/atualização/unmount de cada elemento na tela.

A partir da versão 16.3.0 o ReactJS está depreciando três métodos: componentWillMount, componentWillReceiveProps, e componentWillUpdate.

Apesar de termos três estágios do ciclo de vida a menos agora, nessa versão do React foram adicionados dois novos métodos:

**getDerivedStateFromProps** – Utilize esse método quando você precisar setar o state do seu componente baseado em alguma propriedade que ele está recebendo. Esse ciclo de vida é executado tanto na inicialização do componente quanto na sua atualização de propriedades e deve retornar as alterações no estado do componente baseada nas propriedades ou nulo.

**getSnapshotBeforeUpdate** – Um novo ciclo utilizado para você buscar informações da DOM antes das alterações ocorrerem. Um exemplo é uma lista grande, ao atualizar seus itens seria interessante saber aonde estava o scroll do usuário para mantê-lo ou até reposiciona-lo. Todo valor retornado por esse método é enviado ao componentDidUpdate que é o ciclo executado na sequência.

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

Para resolver está questão, posso criar uma variável de contexto com o comando React.createContext passando como parâmetro o valor padrão quando nenhum valor existir nessa variável. Utilizarei um componente chamado Provider que pertence à essa variável. Para isso vou precisar fazer uma função dentro do Consumer que recebe como parâmetro o valor da variável e retorna um elemento.
