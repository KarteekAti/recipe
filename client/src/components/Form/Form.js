import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Paper,
  Typography,
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
  const [ingredients, setIngredient] = useState([" "]);
  const [tags, setTags] = useState("");
  const { handleSubmit, control } = useForm();

  const dispatch = useDispatch();

  const changeIngredient = (index, e) => {
    const values = [...ingredients];
    values[index] = e.target.value;
    setIngredient(values);
    setPostData({ ...postData, ingredients: ingredients });
  };

  const addIngredient = (e) => {
    setIngredient([...ingredients, " "]);
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
    dispatch(createPost(postData));
  };

  return (
    <Container maxWidth="lg">
      <Paper>
        <form
          className={`${classes.root} ${classes.form}`}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(handleSubmits)}
        >
          <Typography variant="h2">Creating a Recipe</Typography>
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
            defaultValue=""
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

          <Controller
            control={control}
            name="cuisine"
            defaultValue=""
            render={({
              field: { onChange, ref, ...field },
              fieldState: { error },
            }) => (
              <TextField
                {...field}
                id="cuisine"
                variant="outlined"
                required
                label="Cuisine"
                fullWidth
                ref={ref}
                onChange={(e) => {
                  onChange(e);
                  setPostData({ ...postData, cuisine: e.target.value });
                }}
                error={!!error}
                helperText={error?.message}
              ></TextField>
            )}
            rules={{ required: true }}
          />

          {ingredients.map((ingredient, index) => (
            <div key={index} style={{ display: "inline-flex", width: "100%" }}>
              <TextField
                id="ingredient"
                variant="outlined"
                required
                label={index === 0 ? "Ingredients" : "Ingredient " + index}
                fullWidth
                onChange={(e) => {
                  changeIngredient(index, e);
                }}
                error={ingredients[index] === ""}
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
          <Controller
            control={control}
            name="tags"
            defaultValue=""
            render={({
              field: { onChange, ref, ...field },
              fieldState: { error },
            }) => (
              <TextField
                {...field}
                id="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                required
                ref={ref}
                onChange={(e) => {
                  onChange(e);
                  addTags(e);
                }}
                error={!!error}
                helperText={error?.message}
              ></TextField>
            )}
            rules={{ required: true }}
          />

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
    </Container>
  );
};

export default Form;
