import React from 'react';

function Jobs(props){
    return props.jobs.map(work=>
        <div key={work.employer} className='work-entry'>
            <p className='company'>{work.employer} - {work.title}</p>
            <div className='date-text'>{work.dates}</div>
            <div className='location-text'>{work.location}</div>
            <p><br/>{work.description}</p>
        </div>
        )
}

export default Jobs;