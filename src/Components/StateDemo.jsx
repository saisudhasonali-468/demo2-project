import React, { useState,useEffect } from 'react';
function StateDemo({message}){
    let [videolikes, setvideolikes] = useState(97)
    let [comments,setcomments]=useState("")//Two Way Binding example
    
    useEffect(()=>{
        console.log("Page rendered")
    },[]
    )

    useEffect(() => {
        console.log("Video likes updated")
    }, [videolikes]
    )

    return (
        /*Conditional Rendering here we are using useState() to display a
         message based on likes or dislike count*/
        
        
                <>
        <h6>States Demo</h6>
        <h6>Video: Reactjs</h6>
        <h6>Likes:{videolikes}</h6>
            <button aria-setsize='45' onClick={()=>{
                (setvideolikes(videolikes+1)) 
               
            }}>Like</button>

    

            <button aria-setsize='45' onClick={() => {
                (setvideolikes(videolikes - 1))

            }}>DisLike</button>

            {
                videolikes < 100 ? <p> yay!! People are liking your video</p > : <p>WOW!! People are loving your video</p>
            }  
            
            <h6>Comments:  </h6> <input type="text" value={comments} onChange={
                (e)=>{
                    console.log(e.target.value)  //Two Way Binding exmaple
                    setcomments(e.target.value)
                }
            }/>
            <Child message={message} />
        </>
       
    )
}

function Child({message}){
return (
    <>
    <p> Message from App : {message}</p>
    </>
)
}
export default StateDemo;