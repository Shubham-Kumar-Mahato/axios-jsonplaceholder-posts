import React from 'react'
import './Body.css';
import CancelIcon from '@material-ui/icons/Cancel';
const Body = ({ posts }) => {
    return (
        <div className='body'>
            {posts.map(post =>(
                
                <div className='
                container'>
                
                <div className="post-title">
                    <h5>{post.title}
                     </h5>
                        <p>{post.body}</p>                      
               </div>
               <CancelIcon className='icon'/>

                </div>
                
               
            ) )}

        </div>
    )
}

export default Body
