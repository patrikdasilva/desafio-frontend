import { Button, Container } from '@material-ui/core';
import React from 'react';
import './sensores.css';

function Sensores() {
  return (
    <Container className="SensoresPage">

      <h1>Sensores para Manutenção Preditiva</h1>

      <p>Opções de sensores sem fio,
        ou DynaLoggers com sensores de vibração triaxial e temperatura
        embarcados, que comunicam por Bluetooth com o App mobile ou Gateway,
        registrando os dados monitorados em sua memória interna.
        Por conexão internet esses dados são centralizados na Plataforma
        DynaPredict Web para análise, prognóstico e tomada de decisão.
      </p>
      <Button variant="contained" >
        Ver mais
      </Button>

    </Container>
  );
}

export default Sensores;
