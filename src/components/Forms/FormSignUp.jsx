import { useState } from "react"
import { AtSign, User} from "lucide-react"
import TextInput from "../TextInput/TextInput"
import PasswordInput from "../PasswordInput/PasswordInput"

const FORM_INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword:''
}

const FormSignUp = () =>{
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <form className='w-full h-full flex flex-col'>
            <h2 className='text-2xl text-center mb-8'>SignUp</h2>
            <TextInput 
                name='username'
                onChange={handleChange}
                value={formData.username}
                type='text'
                placeholder='Username'
                icon={<User className='text-gray-500'/>}
            />
            <TextInput 
                name='email'
                onChange={handleChange}
                value={formData.email}
                type='email'
                placeholder='Email'
                icon={<AtSign className='text-gray-500'/>}
            />
            <PasswordInput
                name='password'
                onChange={handleChange}
                value={formData.password}
                placeholder='Password'
            />
            <PasswordInput
                name='confirmPassword'
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder='Confirm your password'
            />

            <button className='w-full h-10 rounded-full bg-purple-600 text-white'>SIGN UP</button>
            <div className='flex flex-col flex-grow justify-end'>
                <p className='font-light cursor-pointer text-center text-gray-500'>Do you already have an account?</p>
            </div>  
            
        </form>
    ) 
}

export default FormSignUp