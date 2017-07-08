
//  configuration object for the whole builder
const config = {
  placeholder: '%data%'
}

//  this is the model who has all the data for the sections
const model = {
  init() {
    this.bio = {
        name: "Jesus Guerrero",
        role: "Web Developer/Developer",
        contacts: {
          mobile: "829-327-1958",
          email: "jesusant.guerrero@gmail.com",
          github: "@jesusantguerrero",
          twitter: "@jesusntguerrero",
          location: "La Romana, R.D"
        },
        welcomeMessage: "keep it simple but make it awesome",
        skills: ["HTML/CSS", "javaScript/jQuery", "PHP/CodeIgniter", "Electron", "C#"],
        biopic: "https://avatars2.githubusercontent.com/u/17421742?v=3&u=2ecdc1e593c09e20d9e4a2508a2d99dc5d7200e6&s=400"
      }
    this.education = {
        schools: [{
            name: "Universidad Dominicana O&M",
            location: "La Romana, R.D.",
            degree: "System Engeenier",
            majors: ['Technology'],
            dates: "2013-Present",
            url: ""
          },
          {
            name: "Universidad Dominicana O&M",
            location: "La Romana, R.D.",
            degree: "System Engeenier",
            majors: ['Technology'],
            dates: "2013-Present",
            url: ""
          }
        ],

        onlineCourses: [{
            title: "Full Stack Web Developer",
            school: "Udacity",
            dates: "2017",
            url: ""
          },
          {
            title: "Design Patterns",
            school: "Udacity",
            dates: "2017",
            url: ""
          }
        ]

      }

    this.work = {
        jobs: [{
            employer: 'Insane Code Inc.',
            title: 'Founder and CIO',
            location: 'La Romana, R.D.',
            dates: 'in progress',
            description: 'Orginize and run the company in order to make it the number one in La Romana'
          },
          {
            employer: 'Insane Code Inc.',
            title: 'Developer, Web Developer',
            location: 'La Romana, R.D.',
            dates: 'in progress',
            description: 'Build WebSites, Web Applications and desktop applications for the company'
          }
        ],

      }

    this.projects = {
        projects: [{
            title: 'IC Payment',
            dates: '2017',
            description: 'Facturation Program for an internet Provider| PHP | CSS, HTML,JS, Ajax, Mysql',
            images: ['./images/197x148.gif']
          }, {
            title: 'IC Notes',
            dates: '2017',
            description: 'Facturation Program for an internet Provider| PHP | CSS, HTML,JS, Ajax, Mysql',
            images: ['./images/197x148.gif']
          },
          {
            title: 'jesusantguerrero.com',
            dates: '2017',
            description: 'Facturation Program for an internet Provider| PHP | CSS, HTML,JS, Ajax, Mysql',
            images: ['./images/197x148.gif']
          }
        ]
      }
  },

  getBioInfo() {
    return this.bio
  },

  getEducationInfo() {
    return this.education
  },

  getWorkInfo() {
    return this.work
  },

  getProjectsInfo() {
    return this.projects
  }

}


// octopus is like the controller who communicate the model ande the views
const octopus = {

  init() {
    model.init()
    bioView.display()
    workView.display()
    projectsView.display()
    educationView.display()
    mapView.display()
  },

  getBioInfo() {
    return model.getBioInfo()
  },

  getEducationInfo() {
    return model.getEducationInfo()
  },

  getWorkInfo() {
    return model.getWorkInfo()
  },

  getProjectsInfo() {
    return model.getProjectsInfo()
  }
}


//  these are the views one per section

const bioView = {
  display() {
    this.header         = $('#header')
    this.topContacts    = $('#topContacts')
    this.footerContacts = $('#footerContacts')

    var bio = octopus.getBioInfo()
    bioView.render(bio)
  },

  render(bio){
    var placeholder = config.placeholder
    var name = HTMLheaderName.replace(placeholder, bio.name);
    var role = HTMLheaderRole.replace(placeholder, bio.role)
    var picture = HTMLbioPic.replace(placeholder, bio.biopic)
    var contacts = HTMLemail.replace(placeholder, bio.contacts.email)
    contacts += HTMLgithub.replace(placeholder, bio.contacts.github)
    contacts += HTMLtwitter.replace(placeholder, bio.contacts.twitter)
    contacts += HTMLlocation.replace(placeholder, bio.contacts.location)
    contacts += HTMLmobile.replace(placeholder, bio.contacts.mobile)
    var message = HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage)
    var skills = ''

    bio.skills.forEach((skill) => {
      skills += HTMLskills.replace(placeholder, skill)
    })

    this.topContacts.before(name)
    this.topContacts.before(role)
    this.topContacts.after(picture)
    this.topContacts.append(contacts)
    this.footerContacts.append(contacts)
    this.header.append(message)
    this.header.append(HTMLskillsStart)
    this.header.find('#skills').append(skills)
  }
}

const educationView = {
  display() {
    this.section = $('#education')
    var education = octopus.getEducationInfo()
    educationView.render(education)
  },

  render(education){
    var schools = ''
    var placeholder = config.placeholder

    education.schools.forEach(function (school) {
      educationView.section.append(HTMLschoolStart);
      var data = ''
      data += HTMLschoolName.replace(placeholder, school.name)
      data += HTMLschoolDegree.replace(placeholder, school.degree)
      data += HTMLschoolLocation.replace(placeholder, school.location)
      data += HTMLschoolMajor.replace(placeholder, school.majors)
      data += HTMLschoolDates.replace(placeholder, school.dates)

      $(".education-entry:last").append(data)
    })

    this.section.append(HTMLonlineClasses)

    education.onlineCourses.forEach(function (courses) {
      educationView.section.append(HTMLschoolStart);
      var data = ''
      data += HTMLonlineTitle.replace(placeholder, courses.title)
      data += HTMLonlineSchool.replace(placeholder, courses.school)
      data += HTMLonlineDates.replace(placeholder, courses.dates)

      $(".education-entry:last").append(data)
    })
  }
}

const workView = {
  display() {
    this.section = $('#workExperience')
    work = octopus.getWorkInfo()
    workView.render(work)
  },

  render(work){
    var jobs = ''
    var placeholder = config.placeholder
    work.jobs.forEach(function (job) {
      workView.section.append(HTMLworkStart);
      var data = ''
      data += HTMLworkEmployer.replace(placeholder, job.employer)
      data += HTMLworkTitle.replace(placeholder, job.title)
      data += HTMLworkLocation.replace(placeholder, job.location)
      data += HTMLworkDates.replace(placeholder, job.dates)
      data += HTMLworkDescription.replace(placeholder, job.description)

      $(".work-entry:last").append(data)
    })
  }
}

const projectsView = {
  display() {
    this.section = $('#projects')
    projects = octopus.getProjectsInfo()
    projectsView.render(projects)
  },

  render(){
    var myprojects = ''
    var placeholder = config.placeholder
    projects.projects.forEach(function (project) {
      projectsView.section.append(HTMLprojectStart);
      var data = ''
      data += HTMLprojectTitle.replace(placeholder, project.title)
      data += HTMLprojectDates.replace(placeholder, project.dates)
      data += HTMLprojectDescription.replace(placeholder, project.description)
      data += HTMLprojectImage.replace(placeholder, project.images)

      $(".project-entry:last").append(data)
    })
  }
}

const mapView = {
  display() {
    $('#mapDiv').append(googleMap)
  }
}


octopus.init()