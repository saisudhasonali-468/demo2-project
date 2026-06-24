import React, { useState } from 'react';
function StateDemo(){
    let [videolikes, setvideolikes] = useState(97)

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
                videolikes >= 100 &&
                < p > yay!! People are liking to your video</p >
            }  
            

        </>
    )
}
export default StateDemo;