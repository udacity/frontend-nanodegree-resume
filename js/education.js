import React from "react"

class Education extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
                this.props.schools.map(school =>
                <div>
                    <a href={school.url} target='_blank'>{school.name}</a>
                    <div className='date-text'>{school.dates}</div>
                    <div className='location-text'>{school.location}</div>
                    <em><br/>Major: {school.major}</em>
                </div>
                )   
        )
    }
}

export default Education;