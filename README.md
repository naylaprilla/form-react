# Projeto de um Formulário usando React

Iniciamos o projeto usando cra(npx create react app)

No curso anterior de react, aprendemos sobre os componentes criados como classes, ou class components
ex.:    class App extends Component {

            render() {
                return(
                    <h1>Formulário de cadastro</h1>
                )
            }
        }
        export default App

Não se usa metodos como render dentro de funções. Funciona, mas Métodos devem ser usados apenas dentro de classes.

Em react todo elemento pai deve retornar um unico elemento, por isso precisamos usar o <Fragment></Fragment> para encapsular os elementos e torna-los filhos do fragment. Também pode ser escrito assim: <> tags e etc... </> O interessante é que no final o fragment não é renderizado, serve apenas para juntar os elementos.

Quando criamos uma função eu preciso que o retorno dela seja o retorno da renderização dela. Antes era costume usar classes, mas isso depende só de uma escolha.

### Estilização com Material UI

Adicionamos as labels e inputs do formulário manualmente no arquivo FormularioCadastro.jsx e para a estilização vamos usar a lib Material UI, basta instalar os pacotes através de um comando npm. https://mui.com/material-ui/getting-started/installation/

Quando instalei o pacote do mui tive que resolver o problema: 'react-scripts' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.

    O que funcionou para resolver esse problema foi digitar no terminal do vscode:
                                            cd form-react
                                            npm cache clean --force
                                            npm rebuild
                                            npm install
                                        em um novo terminal:
                                            npm start

    A referência para resolver esse erro foi: https://stackoverflow.com/questions/47928735/react-scripts-is-not-recognized-as-an-internal-or-external-command

    então reinstalei o mui com o comando: npm install @mui/material @mui/styled-engine-sc styled-components

No site MUI tem toda a documentação dessa biblioteca e todas as formas de estilizar os componentes.

Para usar os componentes do MUI vamos fazer os imports dos componentes:

        import Button from "@mui/material/Button"
        import TextField from "@mui/material/TextField";

Agora é so substituir elementos:
            <label>Nome</label>
            <input type="text" />

por:
            <TextField id="nome" label="Nome"/>
Dessa forma estamos substituindo os elementos por componentes já estilizados que estão na pasta node-modules/@mui/material

Para saber quais propriedades tem nesses componentes no MUi acesse na menu da barra lateral a aba "componente API"
    Para nome, sobrenome e cpf usamos as propriedades: id="" label="" variant="outlined" margin="normal" fullWidth

    Para mudar o Layout trocamos o fragment do App.js para o componente <Container component="article" maxWidth="sm"> </Container>,
    dessa forma podemos estilizar com a tag correta e tamanho do elemento. Não esqueça o import!


Para os checkbox vamos usar um componente que se chama Switch, que parece um interruptor, é muito usado nos sites.
 1. Organizamos os imports do FormularioCadastro.jsx para ficar tudo em uma unica linha:
        import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
 2. Substitua os inputs tipo checkbox por switch usando as propriedades name="" e defaultChecked;
 3. Para adicionar uma "label" para o switch vamos usar a FormControlLabel:
    ex.:    <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked />}/>

Vamos deixar o projeto mais consistente, mudando o título de h1 para o componente <Typography>
        Instalamos a fonte ROBOTO via npm: npm install fontesource-roboto
        Depois os imports ficaram assim:  
                            import 'fontsource-roboto';
                            import { Container, Typography } from '@mui/material';
        E o componente ficou assim:         
                <Typography variant='h3' component="h1" align='center'>
                    Formulário de Cadastro
                </Typography>

A parte visual está pronta, agora vamos trabalhar na funcionalidade dos componentes.

## Formulários não controlados

 Uma função não deve guardar estados, funções só existem para executar uma tarefa e quando ela termina essa tarefa, ela morre.
 Por isso, é errado escrever dessa forma: 
    ex.:     let nome = "" // nessa variável é onde o estado está sendo guardado dentro da função
                return (
                    <form>
                        <TextField 
                            onChange={(event) => {
                                nome = event.target.value 
                                /*Aqui a variável nome está recebendo o evento(digitado), o alvo desse evento que é cada letra, e o valor que é a cada letra digitada o evento se torna o anterior mais a letra atual, no console fica assim:
                                a
                                as
                                asd
                                asdf*/
                                console.log(nome)
                            }}...

event.preventDefault: Impede que a pagina seja recarregada quando o formulário é submetido. Esse comportamento é o padrão para formulários. 

A desvantagem de um formulario não controlado é que qualquer coisa digitada vai ser tratada como valida. Por isso é necessário tratar os dados recebidos.

Exemplo de uma função de validação: //O usuário pode digitar no máximo três letras
    onChange={(event) => {
        nome= event.target.value
        if(nome.length >3 ){
            nome = nome.substr(0,3)
        }
    }}

Quando atribuimos um valor o input é automaticamente bloqueado
Por isso se colocarmos um atributo value={nome} não será possível digitar nada no input

## useState
Se funções não têm atributos, porque elas não são classes, e funções não deveriam guardar estado, como a gente faz para usar o estado, ou para guardar um estado aqui na nossa função do react?

Então, a gente tem que vir agora no nosso componente, no nosso function component, nosso formulário de cadastro, e pedir para ele usar um estado. Eu quero que ele guarde, eu quero fazer uma função, guardar uma informação, e ele manter esse estado na memória do computador. Ele manter esse estado durante o ciclo de vida de um componente do react.

Como a gente faz isso? Como eu falei, na parte de classes, a gente tinha o nosso atributo state. Que é muito natural, e isso é para classe, porque uma classe ela tem, naturalmente, um ciclo de vida próprio, a [...] do estado, naturalmente. Ela tem, ela dura mais de um ciclo de renderização, e assim por diante.

A uma função, não é superintuitivo fazer isso. Numa função, eu normalmente executo ela, ela me devolve o resultado, e ela não guarda nenhum estado interno. Então, como a gente faz isso aqui no react?

No react, para a gente conseguir guardar estado, já que é uma função primária do react a gente ter esse estado, e ele forçar uma renderização naquele componente, foram criados os hooks.

Para utilizar os hooks primeiro é necessário importa-los.

Mudar o estado dessa forma nome= event.target.value não é a melhor forma de se fazer isso, e não é recomendado.
A solução para isso é: const [nome, setNome] = useState("Nayla")
    dessa forma ela me devolveu um array, e esse array tem dois elementos. 
     O primeiro, no índice um desse array, vai ser minha variável que representa aquele estado
     O segundo elemento, vai ser a função que eu quero que ele use para ajustar aquele estado, para configurar ou atribuir um novo estado àquela variável.(setAlgumaCoisa)
     Recebe o useState, e o valor entre parênteses é o valor inicial
     o setNome será usado dessa forma na função:
      onChange={(event) => {
                    setNome(event.target.value)
                    if( nome.length > 3 ) {
                        setNome(nome.substr(0, 3))
                    }
    Então, dessa maneira, eu estou pedindo para usar o estado, e esse estado vai ser gerenciado pelo react, internamente. É uma maneira que eles acharam para ter um estado fixo dentro de funções, que não é uma coisa natural.


## Formulários Controlados

    PERGUNTA: Ao utilizamos o hook de useState indicamos para o React que aquele componente quer guardar estado. Para isso são devolvidas duas informações, a primeira é a referência para o valor do estado atual e a segunda é a função que altera esse estado.
    Por que precisamos dessa separação?

    RESPOSTA: Precisamos dessa separação para que o React consiga fazer o gerenciamento do componente e chamar o o ciclo de renderização quando o estado for alterado. Exatamente! Com essa separação o React consegue fazer a sincronização entre as alterações de estado e o ciclo de vida do componente.
    Por isso que nunca devemos fazer a alteração do estado diretamente.








    








