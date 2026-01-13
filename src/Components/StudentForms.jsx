import React, { useState } from 'react'
import API from '../api/axios';


const StudentForms = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    


    const handleStudentCreate = async()=>{
        try{
              const response =  await  API.post('students/',{
                name:name,
                age:age,
                email:email
              });
              console.log("Student created:",response);
                alert("Student Created Successfully");  
              // API call to create student
    //    const response = await fetch("http://127.0.0.1:8000/api/students/",{
    //       method:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //         body:JSON.stringify(
    //            {name:name,age:age,email:email}
    //         ),
    //    });
    //    console.log("Student created:",response);
    //    alert("Student Created Successfully");
        }
        catch(error){
            console.log("Error creating student:",error);
            alert("Failed to create student");
        }
    }
  return (
    <>
        <div>
             <label>Student Name</label>
            <input type="text" placeholder="Enter student name" onChange={(e)=>setName(e.target.value)}/>
            <label>Student Email</label>
            <input type="email" placeholder="Enter student email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Student Age</label>
            <input type="number" placeholder="Enter student age" onChange={(e)=>setAge(e.target.value)}/>
            <button type='submit' onClick={handleStudentCreate}>create student</button>
        </div>
    </>
  )
}

export default StudentForms