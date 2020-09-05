import React, { useRef, useState } from 'react';
import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';


function UserFormWithFormikMaterialUI() {
    
  return (
    <div >
        <div>User Form</div>
        <Formik initialValues={ {
            name: "",
            age: 0
        }} 
        onSubmit={(values)=>{
            console.log(values);
            //
        }}  
        validationSchema= {
            Yup.object(
                {
                    name: Yup.string()
                            .required("Name field is required")
                            .max(15, "Name field should be less then 15 characters"),
                    age: Yup.number()
                            .max(60,"Age should be less then 60")
                            .min(10, "Age should be greter then 10")
                }
            )
        }
        >

        {
            (formik)=>(

                <Form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Field type="text" as={TextField} variant="outlined" label="Name::" name="name" id="name" />
                    <ErrorMessage name="name" render={(msg)=>(
                        <span style={{color:"red"}}>{msg}</span>
                    )} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <Field type="number" as={TextField} label="Age:: " variant="filled" name="age" id="age" />
                    <ErrorMessage name="age" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>


            )
        }


        </Formik>
    </div>
  );
}

export default UserFormWithFormikMaterialUI;
