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





