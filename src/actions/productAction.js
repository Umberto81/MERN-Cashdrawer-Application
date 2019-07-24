
export const addProductEnquiry = (product) =>{
    return{
        type: 'ADD_PRODUCT',
       payload: product

    }
    
};

// export const addProductToState = (product) =>{
//     return dispatch =>{
//         console.log('done');

//         dispatch(addProductEnquiry(product));
//         console.log(product);
//     }
// }