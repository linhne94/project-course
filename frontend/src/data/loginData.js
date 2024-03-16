import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import ImgLogin from '../assets/images/logo_noBg.png'

export const signInData = {
    image: <ImgLogin />,
    name: 'Sign In',
    title: 'Welcome Back To Brainity',
    subtitle: 'Need an account?',
    userName:
    {
        name: 'User name',
        placeholder: 'Enter your user name'
    },
    password: {
        name: 'Password',
        placeholder: '••••••••'
    }
    ,
    otherLogin: [
        {
            name: 'Sign in with Google',
            icon: <FontAwesomeIcon icon={faGoogle} />
        },
        {
            name: 'Sign in with Facebook',
            icon: <FontAwesomeIcon icon={faFacebook} />
        }
    ],
    buttonLogin: 'Log in to your account'


}

export const signUpData = {
    image: <ImgLogin />,
    name: 'Sign Up',
    title: 'Welcome Back To Brainity',
    subtitle: 'Already have an account?',
    userName:
    {
        name: 'User name',
        placeholder: 'Enter your user name'
    },
    password: {
        name: 'Password',
        placeholder: '••••••••'
    },
    email: {
        name: 'Email',
        placeholder: 'name@gmail.com'
    },
    notes:
        ['One lowercase character',
            ' One uppercase character',
            '   One number',
            '   One special character',
            ' 8 characters minimum'
        ],

    otherLogin: [
        {
            name: 'Sign in with Google',
            icon: <FontAwesomeIcon icon={faGoogle} />
        },
        {
            name: 'Sign in with Facebook',
            icon: <FontAwesomeIcon icon={faFacebook} />
        }
    ],
    buttonLogin: 'Sign up for free',
    security: 'By clicking the “Sign up for free” button or using any of the social login options, you are creating an account, and agree to Brain Terms of Service and Privacy Policy'

}