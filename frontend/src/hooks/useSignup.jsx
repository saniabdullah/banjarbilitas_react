import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const history = useHistory();

    const signup = async (firstname, lastname, email, password) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('http://localhost:5000/api/user/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ firstname, lastname, email, password})
        })
        const json = await response.json()
    
        if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
        }
        if (response.ok) {
          // save the admin to local storage
          localStorage.setItem('user_register', JSON.stringify(json))
          history.push("/");
    
          // update the auth context
          dispatch({type: 'SIGNUP', payload: json})
    
          // update loading state
          setIsLoading(false)
        }
      }
    
      return { signup, isLoading, error }
}