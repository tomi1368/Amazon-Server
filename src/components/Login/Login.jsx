import React from 'react'
import { Formik, Form, Field } from "formik";
import { errorHandler,Schema,initialValue } from './formSettings/formSettings';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss"
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiRequests';



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validationForm = (v)=>{
            login(v,dispatch,navigate)
    }
    
    return (
        <div className='login'>
            <div className="login-logo">
                <Link to={"/"}>
                <img src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png" alt="" />
                </Link>
            </div>
            <div className="login-form">
                <h2>Sign-In</h2>
            <Formik
            initialValues={initialValue}
            validationSchema={Schema}
            onSubmit={(v)=>validationForm(v)}
            >
                {({ errors })=>{
                    return(
                        <Form className='login-form__container'>
                            <Field name="email" className='login-form__container__field' placeholder="Enter email..." />
                            {errorHandler(errors).email()}
                            <Field name="password" className='login-form__container__field' type="password" placeholder="Enter your Password..."/>
                            {errorHandler(errors).password()}
                            <button type='submit'>Sign-In</button>
                        </Form>
                    )
                }}

            </Formik>
            <p>By continuing, you agree to Amazon´s <Link to="/conditions">Conditions of Use</Link></p>
            <p>→ <Link to="/help"> Need help?</Link></p>
            </div>
            <div className='login-toregister'>
                <h4>New to Amazon?</h4>
                <Link to="/register" className='login-toregister__btn' > Create your Amazon account</Link>
            </div>
        </div>
    )
}

export default Login
