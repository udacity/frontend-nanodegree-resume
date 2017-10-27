import React from 'react';
import Contacts from './contacts';

class LetsConnect extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                
        <div id="letsConnect" class='dark-gray'>
            <h2 class='purple center-text'>Let's Connect</h2>
            <ul id="footerContacts" class="flex-box">
                <Contacts contacts={this.props.contacts}/>
            </ul>
        </div>

    )}
}

export default LetsConnect;