import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const authContext = useAuthContext();

    // const { dispatch } = useContext(AuthContext)
    const history = useHistory();

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('http://localhost:5000/api/user/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email, password })
        })
        const json = await response.json()
    
        if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
        }
        if (response.ok) {
          // save the admin to local storage
          localStorage.setItem('user', JSON.stringify(json))
          history.push('/');
          window.location.reload();


          if (authContext.dispatch) {
            const { dispatch } = authContext;
      
            // sekarang Anda dapat menggunakan dispatch
            dispatch({type: 'LOGIN', payload: json})
          }
    
          // update the auth context
          // dispatch({type: 'LOGIN', payload: json})
    
          // update loading state
          setIsLoading(false)
        }
      }
    
      return { login, isLoading, error }
}