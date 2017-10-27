import React from 'react';
import Contacts from './contacts';
import Skills from './skills';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='header' className='center-content'>
                <h1 id='name'>{this.props.user.name}</h1>
                <span className='purple'>{this.props.user.role}</span><hr/>
                <img src='images/profile.png' className='biopic'/>
                <span className='welcome-message'>{this.props.user.welcomeMessage}</span>
                <h3 id='skillsH3'>Skills at a Glance:</h3>
                <ul id='skills' className='flex-box'>
                    <Skills skills ={this.props.user.skills}/>
                </ul>

                <ul id='footerContacts' className='flex-box'>
                    <Contacts contacts={this.props.user.contacts}/>
                </ul>
            </div>);
    }
}

export default Header;