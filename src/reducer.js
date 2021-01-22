const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      let tempcart = state.foodItem.map((item) => {
        if (item.id === action.payload) {
          return {
            name: item.name,
            images: item.images[0],
            price: item.price,
            payload: action.payload,
          };
        }
        return tempcart;
      });
      return {
        ...state,
        cart: tempcart,
      };
  }
};

export default reducer;
