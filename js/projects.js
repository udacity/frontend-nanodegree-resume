import React from 'react';

class Projects extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return ( this.props.projects.map(project=>
                <div className='flex-projects' key={project.title}>
                    <a href={project.url} target='_blank'>{project.title}</a>
                    <div className='date-text'>{project.dates}</div>
                        <p><br/>{project.description}<a className='github-icon' href={project.repo} target='_blank'>Github Repo<img className='github-icon' src='/images/github.svg'/></a></p>
                        <a href={project.url} target='_blank'><img src={project.image}/></a>
                </div>
            )
        )
    }
}

export default Projects;