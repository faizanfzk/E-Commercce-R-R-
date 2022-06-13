
import {SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE}  from "./action"

const initState={
    auth:false,
    token:null

}

export const authReducer=(state=initState,action)=>{
  const  {type,payload} = action;

    switch(type){
        case SIGNIN_REQUEST:
            return{
                auth:false,
                token:null
            }
            case SIGNIN_SUCCESS:
                return{
                    auth:true,
                    token:payload.token
                }
                case SIGNIN_FAILURE:
                    return{
                        auth:false,
                        token:null
                    }
            default : return state
    }
}