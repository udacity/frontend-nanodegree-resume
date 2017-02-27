let formattedName = HTMLheaderName.replace("%data%", "Davina Taylor")
let formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer")

$('#main').prepend(formattedRole)
$('#main').prepend(formattedName)


let bio = {
  "name": "Davina Taylor",
  "role": "Software Engineer",
  "contacts": {
    "email": "davinaleo2007@gmail.com",
    "phoneNum": 510-463-7210,
    "github": "www.github.com/lilvina",
    "twitter": "@lilvina89",
    "location": "Oakland, CA"
  },
  "pictureUrl": 'images/fry.jpg',
  "welcomeMessage": "This Is My Resume",
  "skills": ["Javascript, ", "PostgreSQL, ", "SQL, ", "HTML, ", "CSS, ", "Python ", "Ruby "]
}

let projects = {
  "project": [
    {
      "title": "Cookie Clicker",
      "date": 2017,
      "description": "A cookie clicker game where you can gain points for clicking cookies",
      "images": []
    }
  ]
}

let work = {
  "jobs": [
    {
    "title": "Software Engineer",
    "employer": "Learners Guild",
    "yearsWorked": 1,
    "location": "Oakland",
    "description": "10 month apprenticeship on becoming a skillful software engineer"
  },
  {
    "title": "Package Handler",
    "employer": "UPS",
    "yearsWorked": 3,
    "location": "Oakland",
    "description": "Loading packages for truck drivers"
  }
]
}

let education = {
  "schools": [
  {
    "name": "Learners Guild",
    "city": "Oakland",
    "major": "Software Engineering",
    "gradYear": 2017
  },
  {
    "name": "Laney College",
    "city": "Oakland",
    "major": "Business Administration"
  }
]
}

$('#main').append(bio.name)
$('#main').append(work["currentPosition"])
$('#main').append(education.name)

if(bio.skills.length > 0){
  $('#header').append(HTMLskillsStart)
  let formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
  $('#skills').append(formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1])
  $('#skills').append(formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2])
  $('#skills').append( formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3])
  $('#skills').append(formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4])
  $('#skills').append(formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5])
  $('#skills').append(formattedSkill)
  formattedSkill = HTMLskills.replace("%data%", bio.skills[6])
  $('#skills').append(formattedSkill)
}

function displayWork() {
  for(job in work.jobs){
    $('#workExperience').append(HTMLworkStart)
    let formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
    let formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
    let formattedEmployerTitle = formattedEmployer + formattedTitle
    $('.work-entry:last').append(formattedEmployerTitle)
    let formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
    $('.work-entry:last').append(formattedWorkDescription)
  }
}
displayWork()

$('#main').append(internationalizeButton)

function inName(oldName){
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.trim().split(' ')

    var firstLetter = finalName[0].slice(0, 1).toUpperCase()
    var firstName = firstLetter + finalName[0].slice(1).toLowerCase()
    var lastName = finalName[1].toUpperCase()
    finalName = firstName + " " + lastName

    // Don't delete this line!
    return finalName;
}

projects.display = function() {
  for(project in projects.projects) {
    $(".project-entry").append(HTMLprojectStart)
    let formattedTitle = HTMLprojectTitle.replace( "%data%", projects.projects[project].title)
    $(".project-entry:last").append(formattedTitle )
    let formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date)
    $(".project-entry:last").append(formattedDates)
    let formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
    $(".project-entry:last").append(formattedDescription)

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image])
        $(".project-entry:last").append(formattedImage)
      }
    }
  }
}