const products_reducer = (state, action) => {
  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { text, category, brand, price } = state.filters;
    let tempProducts = [...state.all_products];
    if (text) {
      tempProducts = tempProducts.filter(
        product =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.category.toLowerCase().includes(text.toLowerCase()) ||
          product.brand.toLowerCase().includes(text.toLowerCase())
      );
    }
    if (category !== 'All') {
      tempProducts = tempProducts.filter(
        product => product.category === category
      );
    }
    if (brand !== 'All') {
      tempProducts = tempProducts.filter(product => product.brand === brand);
    }
    if (price !== state.filters.max_price) {
      tempProducts = tempProducts.filter(product => product.price <= price);
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filtered_products: state.all_products,
      filters: {
        ...state.filters,
        text: '',
        category: 'All',
        brand: 'All',
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
