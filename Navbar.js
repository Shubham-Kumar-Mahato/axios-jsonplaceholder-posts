import React from 'react'
import './Navbar.css';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewQuiltTwoToneIcon from '@material-ui/icons/ViewQuiltTwoTone';
const Navbar = () => {
    var myWindow = window.open("", "", "width=200,height=100");
    return (
        <div className='nav'>
       <div className="reader">
<img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&w=1000&q=80" alt="/" />
<div className="text">
    <h6>Hi Reader,</h6>
    <p>Here's your news!</p>
</div>
       </div>
       <div className="toggle">

<h5 className='view-toggle'>
    View Toggle
 </h5>

 <div className="switch">

<button className="slider1">
<ViewQuiltTwoToneIcon/>
</button>

<button className="slider2">

<FormatListBulletedIcon/>

</button>
</div>

       </div>
       <div className="feedback">
<h5 className='text-feedback'>Have a feedback?</h5>
<div className="your-feedback">
    <a >We're listening!</a>
</div>
       </div>
        </div>
    )
}

export default Navbar
