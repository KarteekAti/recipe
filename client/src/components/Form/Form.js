import React from "react";
import { useState } from 'react';
import { Container, Paper, Box, Typography, Grid, TextField, Button} from '@material-ui/core';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStyles from './style';
import FileBase from 'react-file-base64';
 
const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '', description: '', creator: '', cuisine: '', ingredients: [], tags: [], selectedFile: ''  
    });
    const [ingredients, setIngredient] = useState(['']);

    const addIngredient = (e) => {
        setPostData({...postData, ingredient: ingredients})
        setIngredient([...ingredients,e.target.value])
    }

    return(
        <Paper> 
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate>
                <Typography>Creating a Recipe</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({...postData, title : e.target.value})}> </TextField>
                <TextField name="description" multiline variant="outlined" label="Description" fullWidth onChange={(e) => setPostData({...postData, description : e.target.value})}> </TextField>
                <TextField name="cuisine"  variant="outlined" label="Cuisine" fullWidth onChange={(e) => setPostData({...postData, cuisine : e.target.value})}> </TextField>
                {
                    ingredients.map((ingredient,index) => (
                        <Grid container spacing={3} key={index}>
                            <TextField name="ingredient"  variant="outlined" label="Ingredient" fullWidth onChange={(e) => addIngredient(e)}> </TextField>   

                        </Grid>   
                    ))
                    
                }
                <Button variant="contained" color="secondary" size="small" onClick={(e) => setIngredient([...ingredients, ' '])}>Add</Button>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}></FileBase></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth   >Submit</Button>
            </form>
        </Paper>
    )
}

export default Form;