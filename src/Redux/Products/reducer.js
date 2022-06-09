import * as types from "./actionTypes"

const initSate={
    products:[],
    error:'',
    loading:false
}

export const prodReducer=(state=initSate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.FETCH_DATA_REQUEST:{
            return{
                ...state,
                error:'',
                loading:true
            }
        }
        case types.FETCH_DATA_SUCCESS:{
            return{
                ...state,
                error:'',
                products:payload,
                loading:false
            }
        }
        case types.FETCH_DATA_FAILURE:{
            return{
                ...state,
                error:payload
               
            }
        }
        default : return state
    }
}