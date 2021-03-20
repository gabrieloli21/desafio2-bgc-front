import React from 'react'
import{makeStyles} from '@material-ui/core/styles'
import{AppBar, Button, Toolbar} from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon';
import {ShoppingCart} from 'react-feather';

//utilizando o material-ui para aplicar a estilização 
const useEstilos= makeStyles({
     appbar:{
         boxShadow:'none',
         backgroundColor:'orange'
     },
     grow:{
         flexGrow:1
     },
     userSection:{
         alignItems:'center'
     }
 })


function Header(){
    const classes= useEstilos();
    return(
        <AppBar position='fixed' color='inherit' className={classes.appbar}>
            <Toolbar>
                <h2>Desafio 2</h2>
                {/* uma div vazia para separar o texto da imagem do carrinho */}
                    <div className={classes.grow}></div> 
                    {/* div para centralizar o ícone */}
                    <div className={classes.userSection}> 
                    <SvgIcon>
                        <ShoppingCart/>
                    </SvgIcon>
                    </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;