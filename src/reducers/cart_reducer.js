const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find(product => product.id === id);
    if (tempItem) {
      const tempCart = state.cart.map(product => {
        if (product.id === id) {
          let newAmount = product.amount + amount;
          if (newAmount > product.max) {
            newAmount = product.max;
          }
          return { ...product, amount: newAmount };
        }
        return product;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.countInStock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, type } = action.payload;
    const tempCart = state.cart
      .map(product => {
        if (product.id === id) {
          let newAmount =
            type === 'dec' ? product.amount - 1 : product.amount + 1;
          if (newAmount > product.max) {
            newAmount = product.max;
          }
          return {
            ...product,
            amount: newAmount,
          };
        }
        return product;
      })
      .filter(product => product.amount > 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === 'REMOVE_ITEM') {
    let newCart = state.cart.filter(product => product.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'CALC_TOTALS') {
    let { total_items, total_amount } = state.cart.reduce(
      (totals, product) => {
        const { amount, price } = product;
        totals.total_items += amount;
        totals.total_amount += price * amount;
        return totals;
      },
      {
        total_amount: 0,
        total_items: 0,
      }
    );
    return { ...state, total_amount, total_items };
  }
  throw new Error(`No matching ${action.type}`);
};

export default cart_reducer;
