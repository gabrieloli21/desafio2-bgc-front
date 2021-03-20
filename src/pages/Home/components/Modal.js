import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Formulario from './Formulário'

const useEstilos = makeStyles({
    modal: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 'modal',
        backgroundColor: 'rgba(0,0,0,.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#fff',
        width: '40%',
        height: '40%',
        borderRadius: '30px',
        display: 'flex',
    },
    close: {
        display: 'flex',
        backgroundcolor: 'red',
        alignItems: 'center'
    },
    conteudo: {
        display: 'flex',
        // backgroundColor: 'green',

    },
    titulo:{
        // backgroundColor:'red'
        color:'#ffa500'

    },
    formulario:{
        // backgroundColor:'brown',
        display:'flex',
        justifyContent:'center',

    },
    botao:{
        display:'flex',
        // backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'flex-start'
    }

    
})


function Modal({ onClose = () => {}, children }) {
    const classes = useEstilos();
    //estados para o modal
    const { isModalVisible, setIsModalVisible } = useState(false)
    return (
        <div className={classes.modal}>
            <div className={classes.container}>
                <Grid container className={classes.conteudo}>
                <Grid item xs={12} className={classes.titulo}>
                        <h3> {children}</h3>
                    </Grid>
                    <Grid item xs={12}className={classes.formulario}>
                     <Formulario />
                    </Grid>
                    <Grid item xs={12} className={classes.botao}>                    
                     <Button variant="contained" color="secondary"onClick={onClose}>Fechar</Button>
                        {isModalVisible ? <Modal/> : null}
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}

export default Modal;