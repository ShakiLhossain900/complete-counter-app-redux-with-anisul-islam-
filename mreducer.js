//product reducer 
const initialProductState = {
    products:['sugar','salt'],
    nubmerofProduct:2
};

const getProducts = (product) =>{
    return{
        type: 'get_Product',
    };
};

const addProduct = (product) =>{
    return {
        type: 'add_Product',
        payload: product,
    };
};


//cartReducer