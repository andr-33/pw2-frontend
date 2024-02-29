import { useState } from 'react';
import {AtSign, EyeOff, Eye} from 'lucide-react'
import Input from '../TextInput/TextInput';

const FormLogin = () =>{
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    }

    return(
        <form className='w-full h-full flex flex-col'>
            <h2 className='text-2xl text-center mb-8'>LogIn</h2>
            <Input 
                type='email'
                placeholder='Email'
                icon={<AtSign className='text-gray-500'/>}
            />
            <Input 
                type={isPasswordShown ? 'text' : 'password'}
                placeholder='Password'
                icon={isPasswordShown ? <Eye className='text-gray-500 cursor-pointer' /> : <EyeOff className='text-gray-500 cursor-pointer' />}
                toggleFunction = {togglePasswordVisibility}
            />

            <button className='w-full h-10 rounded-full bg-purple-600 text-white'>LOGIN</button>
            <p className='font-light underline cursor-pointer text-center text-gray-500'>Forgot your password?</p>
            <div className='flex flex-col flex-grow justify-end'>
                <p className='font-light cursor-pointer text-center text-gray-500'>Don't have an account?</p>
            </div>
            
        </form>
    ) 
}

export default FormLogin;