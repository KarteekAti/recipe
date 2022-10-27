export default (cuisines = {}, action) => {
  switch (action.type) {
    case "CUISINES":
      return action.payload;
    default:
      return cuisines;
  }
};
