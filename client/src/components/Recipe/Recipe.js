import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../actions/posts";
import { useSelector } from "react-redux";

function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch]);

  const recipe = useSelector((state) => state.recipe);
  return <>{recipe ? <div>{recipe["title"]}</div> : {}}</>;
}

export default Recipe;
