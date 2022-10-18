import React from "react";
import { useState } from 'react';
import { Container, Paper, Box, Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './style';
import IconButton from "@material-ui/core/IconButton";
import RemoveButton from '@material-ui/icons/Remove';
import FileBase from 'react-file-base64';
 
const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '', description: '', creator: '', cuisine: '', ingredients: [], tags: [], selectedFile: ''  
    });
    const [ingredients, setIngredient] = useState(['']);

    const changeIngredient = (index,e) => {
        const values = [...ingredients];
        values[index] = e.target.value;
        setIngredient(values)
        setPostData({...postData, ingredients:ingredients})
    }


    const addIngredient = (e) => {
        setIngredient([...ingredients, ''])
        setPostData({...postData, ingredients:ingredients});
    }

    const deleteIngredients = (index) => {
        const deleteVal = [...ingredients];
        deleteVal.splice(index,1);
        setIngredient(deleteVal);
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
                            <div key={index} style={{display : 'inline-flex', width:'100%'}}>
                                <TextField name="ingredient" variant="outlined" label={index === 0 ? 'Ingredient' : 'Ingredient '+index} fullWidth onChange={(e) => changeIngredient(index,e)}></TextField>   
                                <IconButton onClick={(e) => {deleteIngredients(index)}}>
                                    <RemoveButton  />
                                </IconButton>
                            </div>
                    ))
                    
                }
                <div className={classes.buttonSubmit}><Button variant="contained" color="secondary" size="small" onClick={(e) => addIngredient(e)}>Add</Button></div>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}></FileBase></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth   >Submit</Button>
            </form>
        </Paper>
    )
}

export default Form;