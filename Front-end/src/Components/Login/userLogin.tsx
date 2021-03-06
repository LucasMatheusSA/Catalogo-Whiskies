
import * as React from 'react';
import axios from 'axios';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Container, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);



const ServerCadastroUser = (props) => {

    const classes = useStyles();

    return (

        <form onSubmit={props.login}>
            <Grid container spacing={3}>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Login</InputLabel>
                        <Input id="id-login-cadastro" name="inputLogin"/>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Senha</InputLabel>
                        <Input id="id-senha-cadastro" type="password" name="inputSenha"/>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={4}>
                    <Button type="submit" variant="contained" color="primary">Logar</Button>
                </Grid>
                <Grid item xs={8}>
                </Grid>


            </Grid>
        </form>
    )
}


export default ServerCadastroUser;