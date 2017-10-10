import React from 'react';


class Navbar extends React.Component{
    render(){
        return(
            <div id='navBar' className='container'>
                <nav className='flex-box'>
                    <ul>
                        <li className='flex-item'>
                            <a href='#workExperience'>Work</a>
                        </li>
                        <li className='flex-item'>
                            <a id='navProjects' href='#projects'>Projects</a>
                        </li>
                        <li className='flex-item'>
                            <a href='#education'>Education</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;