import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container component="article" maxWidth="sm" >
      <Typography variant='h3' component="h1" align='center'>
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} validarCPF={validarCPF}/>
    </Container>
  );
}

function onSubmitForm(dados){
  console.log(dados)
}

function validarCPF(cpf) {
  if(cpf.lenghth !== 11){
    return {valido:false, texto:"O CPF deve ter 11 dígitos."};
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
