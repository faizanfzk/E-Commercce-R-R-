import * as types from "./actionTypes";
import axios from "axios";

export const fetchdataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};
export const fetchdataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
export const fetchdataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchdataRequest());
    axios({
      url: " http://localhost:8080/products",
      method: "get",
      params: {
        ...payload,
      },
    })
      .then((res) => {
        dispatch(fetchdataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchdataFailure(err.data));
      });
  };
};

export const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};
export const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};
export const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios({
    url: `http://localhost:8080/products/${id}`,
    method: "GET",
  })
    .then((res) => {
      dispatch(getSingleProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSingleProductFailure(err.data));
    });
};

export const addProductCardRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};
export const addProductCardSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};
export const addProductCardFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const addProductCard = (product) => (dispatch) => {
  dispatch(addProductCardRequest());

  axios({
    url:"http://localhost:8080/cart",
    method:"post",
    data:{
        product
    }
  })
  

    .then((res) => {
      dispatch(addProductCardSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addProductCardFailure(err.data));
    });
};

export const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload,
  };
};
export const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  };
};
export const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  };
};

export const fetchCart=(payload)=>dispatch=>{
  dispatch(fetchCartRequest())
  axios.get(" http://localhost:8080/cart")
  .then(res=>dispatch(fetchCartSuccess(res.data)))
  .catch(err=>dispatch(fetchCartFailure(err.data)))
}

export const deleteProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};
export const deleteProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};
export const deleteProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

export const deleteProduct=(id)=>(dispatch)=>{
  dispatch(deleteProductCartRequest())
  axios.delete(`http://localhost:8080/cart/${id}`)
  .then(res=> dispatch(deleteProductCartSuccess(res.data)))
  .then(()=>dispatch(fetchCart()))
  .catch(err=>dispatch(deleteProductCartFailure(err.data)))
}


export const addOrderRequest = (payload) => {
  return {
    type: types.ADD_ORDER_REQUEST,
    payload,
  };
};
export const addOrderSuccess = (payload) => {
  return {
    type: types.ADD_ORDER_SUCCESS,
    payload,
  };
};
export const addOrderFailure = (payload) => {
  return {
    type: types.ADD_ORDER_FAILURE,
    payload,
  };
};

export const addOrder=(payload)=>dispatch=>{
dispatch(addOrderRequest());

const orderPayload=[];

for(let product of payload){
product && orderPayload.push(axios({
  url:"http://localhost:8080/orders",
  method:"POST",
  data:{
    product
  }
}))

}
Promise.all(orderPayload)
.then((r)=>{
  console.log(r)
  dispatch(addOrderSuccess())})
  .then(()=>dispatch(emptyCart(payload)))

.catch((e)=>dispatch(addOrderFailure()))
}

export const  emptyCartRequest = (payload) => {
  return {
    type: types.EMPTY_CART_REQUEST,
    payload,
  };
};
export const emptyCartSuccess = (payload) => {
  return {
    type: types.EMPTY_CART_SUCCESS,
    payload,
  };
};
export const  emptyCartFailure = (payload) => {
  return {
    type: types.EMPTY_CART_FAILURE,
    payload,
  };
};

export const emptyCart=(payload)=>(dispatch)=>{
  dispatch(emptyCartRequest());

  const deleteOrders=[];

  for(let obj of payload){
    let temp=dispatch(deleteProduct(obj.id))
    deleteOrders.push(temp)
  }
  Promise.all(deleteOrders)
  .then((r)=>dispatch(emptyCartSuccess()))
  .catch((e)=>dispatch(emptyCartFailure()))
}



export const fetchOrdersRequest = (payload) => {
  return {
    type: types.FETCH_ORDERS_REQUEST,
    payload,
  };
};
export const fetchOrdersSuccess = (payload) => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    payload,
  };
};
export const fetchOrdersFailure = (payload) => {
  return {
    type: types.FETCH_ORDERS_FAILURE,
    payload,
  };
}
  export const fetchOrders=(payload)=>dispatch=>{
    dispatch(fetchOrdersRequest())

    axios.get("http://localhost:8080/orders")
    .then((res)=>{
      dispatch(fetchOrdersSuccess(res.data))
    })
    .catch(err=>{
      dispatch(fetchOrdersFailure(err.data))
    })
  }