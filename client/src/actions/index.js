import {AUTH_USERS, AUTH_ERROR, CREATE_USERS, CANDIDATE_ID, LOGOUT_USERS, LIST_PRODUCTS} from './types'
import axios from 'axios'

export const candidateId = (id)=>{
   return (dispatch)=>{
       dispatch({
         type: CANDIDATE_ID,
         payload: id
       });
   }
}

export const isAuthenticated = ()=>{
       return "isAuthenticated";
       return async (dispatch)=>{
            try {
              const request = await axios.post('http://localhost:3000/api/signin', {
                    email: email,
                    password: password
              });
            }catch(e) {

            }
       }
}

export const signin = ({email, password}, callback)=>{
    return async (dispatch)=>{
       try{
         const request = await axios.post('http://localhost:3000/api/signin', {
               email: email,
               password: password
         });
         dispatch({
             type: AUTH_USERS,
             payload: request.data.data
         })
         callback();
       }catch(error){
         dispatch({
             type: AUTH_ERROR,
             payload: error
         })
       }
    }
}

export const signup = ({email, password}, callback)=>{
    return async (dispatch)=>{
        try{
          const request = await axios.post('http://localhost:3000/api/users', {
                email: email,
                password: password
          });
          console.log(request);
          dispatch({
              type: CREATE_USERS,
              payload: request.data.data
          })
          callback();
          console.log(request);
        }catch(error) {

        }
    }
}

export const logoutUser = ()=>{
   return (dispatch)=>{
       dispatch({
         type: LOGOUT_USERS,
         payload: false
       });
   }
}
