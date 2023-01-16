import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './signup.scss'

const Signup = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstname)
        
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
          history.push("/login");
        }

    }
  return (
    <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className="create w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Nama Depan
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                required
                                placeholder='Nama Depan'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-slate-500 px-2"
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Nama Belakang
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                required
                                placeholder='Nama Belakang'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className="block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-slate-500 px-2"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
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
                                    className="block w-full mt- border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                                    className="block w-full mt- border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                                Daftar
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup