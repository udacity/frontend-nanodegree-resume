import React from 'react';
import {render} from 'react-dom';
import Profile from '../one.json';
import Header from './header';
import Navbar from './navBar';
import Work from './workExperience';
import Projects from './projects';
import Education from './education';
import Map from './mapDiv';
import CreateMap from './createMap';
import LetsConnect from './letsConnect';
import Contacts from './contacts';

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
                <div className='education-entry gray'>
                <h2 id='education'>Education</h2>
                    <Education schools = {Profile.schools}/>
                </div>
                <Map/>
                <LetsConnect contacts={Profile.bio.contacts}/>
            </div>
    );
};

render(
        <App />,
        document.getElementById('main')
);

CreateMap();