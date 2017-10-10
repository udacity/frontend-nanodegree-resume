import React from 'react';

class Contacts extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
       return this.props.contacts.map((contact)=>
                <li className='flex-item'>
                        <span className='orange-text'>{Object.keys(contact)}</span>
                        <span className='white-text'>{contact[Object.keys(contact)]}</span>
                </li>

        )
    }
}

export default Contacts;