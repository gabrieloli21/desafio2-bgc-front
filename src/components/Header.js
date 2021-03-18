import React from 'react'
import{makeStyles} from '@material-ui/core/styles'
import{AppBar, Button, Toolbar} from '@material-ui/core'

 const useEstilos= makeStyles({
     appbar:{
         boxShadow:'none'
     }
 })


function Header(){
    const classes= useEstilos();
    return(
        <AppBar position='fixed' color='inherit' className={classes.appbar}>
            <Toolbar>
                <div>
                <h2>Desafio 2</h2>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;