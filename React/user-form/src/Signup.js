import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './Singup.css';
import Button from 'react-bootstrap/Button';


export default function Signup() {
    

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            lastName: "",
            email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            message: Yup.string()
            .max(120, "Must be 120 characters or less")
            
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    });

    {/*console.log(formik.errors)*/}
 
    return (
        
        <form onSubmit={formik.handleSubmit}>
                <div>
                    <h4> Contact Me</h4>
                    <h5> We are always happy to find out what's on your mind</h5>
                </div>
                <div className='flex-container'>
                    <div className='flex-child'>
                        <fieldset disabled>
                        <label> Name:</label>
                        <input readOnly
                        id="blank"
                        size ="1"
                        padding="0px"
                        >
                        </input>
                        </fieldset>
                    </div>
                    <div className='flex-child'>
                        
                        <input 
                        id="firstName"
                        name="firstName"
                        type="text"
                        size="9"
                        placeholder="First Name"
                        style={formik.touched.firstName && formik.errors.firstName ? {border:'1px solid red' }: {border:'1px solid  black'}}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        >
                        </input>
                        {/*{{formik.touched.firstName && formik.errors.firstName ?  <p>{formik.errors.email}</p> : null}*/}
                    </div>
                    <div className='flex-child'>
                    
                        <input 
                        id="lastName"
                        name="lastName"
                        type="text"
                        size="18"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        >
                        </input>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='flex-child'>
                            <fieldset disabled>
                            <label> Email:</label>
                            <input readOnly
                            id="blank"
                            size ="10"
                            padding="0px"
                            >
                            </input>
                            </fieldset>
                        </div>
                    
                    <div className='flex-child'>
                        <input 
                        id="email"
                        name="email"
                        type="email"
                        size="20"
                        style={formik.touched.email && formik.errors.email ? {border:'1px solid red'}: {border:'1px solid black'}}
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        >
                        </input>
                        {/*{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}*/}
                    </div>
                    <div className='flex-child'>
                        <fieldset disabled>
                        <input readOnly
                        id="blank"
                        size ="3"
                        padding="0px"
                        >
                        </input>
                        </fieldset>
                    </div>
                                        
                </div>
                
                <div className='flex-container'>
                <div className='flex-child'>
                            <fieldset disabled>
                            <label> Message Content:</label>
                            <input readOnly
                            id="blank"
                            size ="1"
                            padding="0px"
                            >
                            </input>
                            </fieldset>
                        </div>
                <div className='flex-child'>
                    <textarea 
                    id="message"
                    name="message"
                    type="textarea"
                    placeholder="Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    rows="6"
                    >
                    </textarea>
                
                </div>
                <div className='flex-child'>
                        <fieldset disabled>
                        <input readOnly
                        id="blank"
                        size ="4"
                        padding="0px"
                        >
                        </input>
                        </fieldset>
                    </div>                
                </div>
                <div >
                    <Button type="submit" className="mb-2" disabled={!formik.isValid}>
                    Send
                    
                    </Button>
                </div>
                
        </form>
        
    )
}