import Profile from '../one.json';
import React from 'react';
import {render} from 'react-dom';
// import {Hashrouter, Route} from 'react-router-dom';

import Header from './header';
import Navbar from './navBar';
import Work from './workExperience';
import Projects from './projects';

console.log(Profile.jobs);
function App(){
        return(
            <div>
                    <Header user={Profile.bio}/>
                    <Navbar />
                    <Work work={Profile.jobs}/>
                    <h2 id='projects'>Projects</h2>
                    <div id=''className='project-entry'>
                        <Projects projects={Profile.projects}/>
                    </div>
                </div>
            /* <Hashrouter> */
            // </Hashrouter>
            // <Route path='/work' component={Work}/>
        );
    };
    
    render(
        <App />,
    document.getElementById('main')
);