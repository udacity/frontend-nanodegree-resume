import React from 'react';
import Jobs from './jobs'



class Work extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div id="workExperience" className='gray'>
            <h2>Work Experience</h2>
            <Jobs jobs={this.props.work}/>
        </div>
        );
    }
}

export default Work;