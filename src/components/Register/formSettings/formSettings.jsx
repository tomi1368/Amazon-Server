import * as Yup from "yup";


const initialValue = {name:"",email:"",password:""}

const Schema = Yup.object().shape({
    name:Yup.string().required("Name is required").min(6,"Name must be at least 6 characters").max(30,"Name must be less 30 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });


const errorHandler = (errors)=>{
    return{
        name(){
            return(
                errors.name && <div>{errors.name}</div>
            )
        },
        email(){
            return (
                errors.email && <div>{errors.email}</div>
            )
        },
        password(){
            return (
                errors.password && <div>{errors.password}</div>
            )
        }
    }
}

export {errorHandler,Schema,initialValue}