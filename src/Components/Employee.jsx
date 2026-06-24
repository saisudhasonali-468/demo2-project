import React from 'react'

function Employee(){
    let empList = ["Sai", "Sudha", "Sonali", "Sam", "Priya"]
    return(
        <>
        {
                empList.map((emp,index)=>{
                    return <li key={index}> {emp} </li>
                })
            
        }
        </>
    )
}
export default Employee;