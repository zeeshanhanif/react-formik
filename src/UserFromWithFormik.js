import React from 'react';
import { useFormik } from 'formik';


function UserFromWithFormik() {
    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        onSubmit: (values)=>{
            console.log(values);
            //
        },
        validate: (values)=>{
            const error = {};
            if(!values.name){
                error.name = "Name field is required";
            }
            else if(values.name.length > 20){
                error.name = "Name field must be less then 20 characther";
            } 

            return error;
        }
    });


  return (
    <div >
        <div>User Form</div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {
                    formik.errors.name? 
                        <div style={{color: "red"}}>{formik.errors.name}</div>:
                        null
                }
                
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" onChange={formik.handleChange} 
                value={formik.values.age} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default UserFromWithFormik;
