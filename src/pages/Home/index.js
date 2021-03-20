import React, { useState } from 'react'
import data from './components/minions.json'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header';
import { Button, Grid, Paper } from '@material-ui/core';
import Modal from './components/Modal';



const useEstilos = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  geral: {
    marginTop: '40px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  titulo: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  botao: {
    display: 'flex',
    justifyContent: 'center'
  },
 

}));

function Home() {
  const classes = useEstilos();
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div className={classes.root}>
      <Header />
      <Grid className={classes.geral} container spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.titulo}>Minions</h1>
        </Grid>

        {data.map((a, key) => {
          console.log("data:", a.imagem)
          return (
            <Grid container item xs={3} sm={3} justify="center">
              <Paper className={classes.paper}>
                <h3 key={a.id}> {a.nome} </h3>
                <img
                  key={a.id}
                  src={a.imagem}
                  alt="Poster"
                  width={200}
                  height={200}
                />
                <h4>Produto: {a.nome}</h4>
                <h4>Tamanho: {a.tamanho}</h4>
                <h4>Coleção: {a.coleção}</h4>
                <h4> Fornecedor:{a.fornecedor}</h4>
                <div className={classes.botao}>
                  {/* //para abrir o modal */}
                  <Button variant="contained" color="primary" onClick={() => setIsModalVisible(true)}> Reservar</Button>
                  {/* operador ternário para minimizar a escrita dos if's */}
                  {isModalVisible ? <Modal onClose={()=>setIsModalVisible(false)}> Produto: {a.nome}</Modal> : null}
                </div>
              </Paper>
            </Grid>

          )
        })}

      </Grid>
    </div>
  )
}








export default Home;