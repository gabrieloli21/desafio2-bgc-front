import React from 'react'
import data from '../../components/minions.json'
import{makeStyles} from '@material-ui/core/styles'
import Header from '../../components/Header';
import { Button } from '@material-ui/core';

const useStyles =makeStyles({
  root:{
    display:'flex',
    flexDirection:'column'
  }

})

function Home() {
  const classes= useStyles();
  return (

    <div className={classes.root}>
      <Header/>
      <div className="posts">
        {data.map((a, chave) => {
          console.log("data:", a.imagem)
            return (
              <>
                <h3> {a.nome} </h3>
                <img
                src={a.imagem}
                alt="Poster"
                width={200}
                height={200}
                />
                <Button variant="contained" color="primary"> Selecionar</Button>
              </>
            )
        })}
      </div>
    </div>
  );
}
    




export default Home;