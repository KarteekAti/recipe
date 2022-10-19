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
  const { register, handleSubmit, control } = useForm();

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
    //dispatch(createPost(postData));
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
          rules={{ required: true }}
          defaultValue=""
          render={({
            field: { onChange, ref, ...field },
            fieldState: { error },
          }) => (
            <TextField
              {...field}
              required
              id="title"
              variant="outlined"
              label="Title"
              fullWidth
              innerRef={ref}
              onChange={(e) => {
                onChange(e);
                setPostData({ ...postData, title: e.target.value });
              }}
              error={!!error}
              helperText={error?.message}
            ></TextField>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({
            field: { onChange, ref, ...field },
            fieldState: { error },
          }) => (
            <TextField
              {...field}
              multiline
              id="description"
              required
              variant="outlined"
              label="Description"
              fullWidth
              ref={ref}
              onChange={(e) => {
                onChange(e);
                setPostData({ ...postData, description: e.target.value });
              }}
              error={!!error}
              helperText={error?.message}
            ></TextField>
          )}
          rules={{ required: true }}
        />

        <TextField
          name="cuisine"
          variant="outlined"
          required
          label="Cuisine"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, cuisine: e.target.value })
          }
        ></TextField>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: "inline-flex", width: "100%" }}>
            <TextField
              name="ingredient"
              variant="outlined"
              required
              label={index === 0 ? "Ingredients" : "Ingredient " + index}
              fullWidth
              onChange={(e) => changeIngredient(index, e)}
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
