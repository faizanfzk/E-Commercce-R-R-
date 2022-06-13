import axios from "axios"

export const SIGNIN_REQUEST="SIGN_REQUEST"
export const SIGNIN_SUCCESS="SIGN_SUCCESS"
export const SIGNIN_FAILURE="SIGN_FAILURE"

export  const signInRequest=()=>{
    return{
        type:SIGNIN_REQUEST,
       

    }
}
export const signInSuccess=(payload)=>{
    return{
        type:SIGNIN_SUCCESS,
        payload
     
    }
}
export const signInFailure=(payload)=>{
    return{
        type:SIGNIN_FAILURE,
        payload
    }   
}
export const signIn=(payload)=>dispatch=>{
    dispatch(signInRequest())
    axios.post("https://reqres.in/api/login")
    .then(res=>{
       dispatch(signInSuccess(res.data))
    })
    .catch(err=>{
      dispatch(signInFailure(err.data))
    })
}