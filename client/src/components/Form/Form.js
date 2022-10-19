import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import IconButton from "@material-ui/core/IconButton";
import RemoveButton from "@material-ui/icons/Remove";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    creator: "",
    cuisine: "",
    ingredients: [],
    tags: [],
    selectedFile: "",
  });
  const [ingredients, setIngredient] = useState([""]);
  const [tags, setTags] = useState("");
  const { register, handleSubmit, control, errors } = useForm();

  const dispatch = useDispatch();

  const changeIngredient = (index, e) => {
    const values = [...ingredients];
    values[index] = e.target.value;
    setIngredient(values);
    setPostData({ ...postData, ingredients: ingredients });
  };

  const addIngredient = (e) => {
    setIngredient([...ingredients, ""]);
    setPostData({ ...postData, ingredients: ingredients });
  };

  const deleteIngredients = (index) => {
    if (index === 0) return;
    const deleteVal = [...ingredients];
    deleteVal.splice(index, 1);
    setIngredient(deleteVal);
  };

  const addTags = (e) => {
    setPostData({ ...postData, ingredients: ingredients });
    setTags(e.target.value);
  };

  const lastUpdate = () => {
    const tag = tags.split(",").map((tag, index) => tag.trim());
    setPostData({ ...postData, tags: tag });
  };

  const handleSubmits = (data) => {
    //e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
  };

  return (
    <Paper>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleSubmits)}
      >
        <Typography>Creating a Recipe</Typography>

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              required
              variant="outlined"
              label="Title"
              fullWidth
              //   onChange={(e) => onChange={(e) => {

              //   }}
            ></TextField>
          )}
          rules={{ required: true }}
        />

        <TextField
          name="description"
          multiline
          required
          variant="outlined"
          label="Description"
          fullWidth
          {...register("description", { required: "Description Required" })}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
          error={!!errors?.description}
          helperText={errors?.description ? errors.description.message : ""}
        ></TextField>
        <TextField
          name="cuisine"
          variant="outlined"
          required
          label="Cuisine"
          fullWidth
          {...register("cuisine", { required: "Cuisine Required" })}
          onChange={(e) => setPostData({ ...postData, cusine: e.target.value })}
          error={!!errors?.cuisine}
          helperText={errors?.cuisine ? errors.cuisine.message : ""}
        ></TextField>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: "inline-flex", width: "100%" }}>
            <TextField
              name="ingredient"
              variant="outlined"
              required
              label={index === 0 ? "Ingredients" : "Ingredient " + index}
              fullWidth
              {...register("ingredient", { required: "Ingredient Required" })}
              onChange={(e) => changeIngredient(index, e)}
              error={!!errors?.ingredient}
              helperText={errors?.ingredient ? errors.ingredient.message : ""}
            ></TextField>
            <IconButton
              onClick={(e) => {
                deleteIngredients(index);
              }}
            >
              <RemoveButton />
            </IconButton>
          </div>
        ))}
        <div className={classes.buttonSubmit}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={(e) => addIngredient(e)}
          >
            Add
          </Button>
        </div>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          onChange={(e) => addTags(e)}
          {...register("tags", { required: "Tags Required" })}
          error={!!errors?.tags}
          helperText={
            errors?.tags ? errors.tags.message : "Comma Separated Tags"
          }
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={lastUpdate}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
