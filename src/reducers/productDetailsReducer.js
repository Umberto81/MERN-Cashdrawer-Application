
const initState = {
    productDetails: []
};


const productDetailsReduccer = (state = initState, action) => {
    console.log(state);
    switch(action.type){

        case 'ADD_PRODUCT_DETAILS':
            return{
                ...state,
                productDetails: action.payload
            };
        
      
        default:
            return state;
    }
}

export default productDetailsReduccer;