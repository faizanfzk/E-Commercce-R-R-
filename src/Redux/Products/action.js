import * as types from "./actionTypes"
import axios from "axios"

export const fetchdataRequest=(payload)=>{
return{
    type:types.FETCH_DATA_REQUEST,
    payload
}
}
export const fetchdataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
    }
    export const fetchdataFailure=(payload)=>{
        return{
            type:types.FETCH_DATA_FAILURE,
            payload
        }
        }

    export const fetchData=(payload)=>{
        return(dispatch)=>{
            dispatch(fetchdataRequest())
            axios({
                url:" http://localhost:8080/products",
                method:"get",
                params:{
                    ...payload
                }
            })
            .then(res=>{
                dispatch(fetchdataSuccess(res.data))
            })
            .catch(err=>{
                dispatch(fetchdataFailure(err.data))
            })

        }
    }    