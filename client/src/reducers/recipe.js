export default (recipe = {}, action) => {
  switch (action.type) {
    case "RECIPE":
      return action.payload;
    default:
      return recipe;
  }
};
