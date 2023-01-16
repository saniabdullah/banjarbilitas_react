import React, {useState} from 'react'
import { useLogin } from '../../hooks/useLogin';
import './Login.scss'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const {login, error, isLoading} = useLogin()
    
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      await login(email, password)

  }

  return (
    <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 small__device">
            <div className="create w-full px-6 py-4 mt-6 overflow-hidden bg-gray-50 shadow-md sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                required
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // className="border-black"
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                required
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="#"
                        >
                            Already registered?
                        </a>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Masuk
                        </button>
                    </div>
                    {error && <div className='text-center pt-6 text-red-500'>{error}</div>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login