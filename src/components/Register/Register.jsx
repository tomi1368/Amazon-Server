import React from 'react'
import { Formik, Form, Field } from "formik";
import { errorHandler,Schema,initialValue } from './formSettings/formSettings';
import { Link } from 'react-router-dom';
import "./Register.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationForm = async (v,navigate)=>{
    try{
        let newUser = await axios.post("https://mern-amazon12.herokuapp.com/api/auth/register",v)
        navigate("/login")
    }catch(err){
        console.log(err.message)
    }

}

 

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className='register'>
            <Link to="/" className="register-logo">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png" alt="" />
            </Link  >
            <div className="register-form">
                <h2>Sign-Up</h2>
            <Formik
            initialValues={initialValue}
            validationSchema={Schema}
            onSubmit={(v)=>validationForm(v,navigate)}
            >
                {({ errors })=>{
                    return(
                        <Form className='register-form__container'>
                            <Field name="username" className='register-form__container__field' placeholder="Enter name..." />
                            {errorHandler(errors).username()}
                            <Field name="email" className='register-form__container__field' placeholder="Enter email..." />
                            {errorHandler(errors).email()}
                            <Field name="password" className='register-form__container__field' type="password" placeholder="Enter your Password..."/>
                            {errorHandler(errors).password()}
                            <button type='submit'>Sign-Up</button>
                        </Form>
                    )
                }}

            </Formik>
            <p>By continuing, you agree to Amazon´s <Link to="/conditions">Conditions of Use</Link></p>
            <p>→ <Link to="/help"> Need help?</Link></p>
            </div>
            <div className='register-toregister'>
                <h4>Have you an account ?</h4>
                <Link to="/login" className='register-toregister__btn' > Login with your Amazon account</Link>
            </div>
        </div>
    )
}

export default Register