/*
 * resumeBuilder.js
 */


(function () {

	// personModel combines all other models to give a single model for everything
	var portfolioModel = {
		init: function () {
			var self = this
			this.dataFiles = {
				"bio": "bio.json",
				"education": "education.json",
				"project": "projects.json",
				"work": "work.json"
			}

			Object.keys(this.dataFiles).forEach(function (value, index, array) {
				$.ajax({
					url: "data/" + self.dataFiles[value],
					success: function (result) {
						self[value] = result
					},
					async: false
				})
			})
		}
	}


	var portfolioOctopus = {
		init: function () {
			portfolioModel.init()
			bioView.init()
			workView.init()
			projectView.init()
			educationView.init()	
		},
		getBio: function () {
			return portfolioModel.bio
		},
		getEducation: function () {
			return portfolioModel.education
		},
		getWork: function () {
			return portfolioModel.work
		},
		getProject: function () {
			return portfolioModel.project
		}
	}


	var bioView = {
		init: function () {
			this.header = document.getElementById("header")
			this.render()
		},
		render: function () {
			this.header.innerHTML = "loading"

			var bioFields = []

			var bio = portfolioOctopus.getBio()
			
			bioFields.push(HTMLheaderName.replace("%data%", bio.name))
			bioFields.push(HTMLheaderRole.replace("%data%", bio.role))

			var contactInfo = Object.keys(bio.contacts).map(function (value, index, array) {
				return HTMLcontactGeneric.replace("%contact%", value).replace("%data%", bio.contacts[value])
			})

			var skillsData = bio.skills.map(function (value, index, array) {
				return HTMLskills.replace("%data%", value)
			}).join("")


			bioFields.push(HTMLskillsStart.replace("%data%", skillsData))
			bioFields.push(contactInfo)

			bioFields.push(HTMLbioPic.replace("%data%", bio.biopic))
			bioFields.push(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))
		
			this.header.innerHTML = bioFields.join("")
		}
	}

	var workView = {
		 init: function () {
		 	this.workHeader = document.getElementById("workExperience")
		 	this.render()
		 },
		 render: function () {
		 	this.workHeader.innerHTML = "loading"
		 	var work = portfolioOctopus.getWork()	
			var workField = []

		 	var jobs = work.jobs.map(function (value, index, array) {
		 		var workHTML = ""

		 		workHTML += HTMLworkEmployer.replace("%data%", value.employer)
		 		workHTML += HTMLworkTitle.replace("%data%", value.title)
		 		workHTML += HTMLworkDates.replace("%data%", value.dates)
		 		workHTML += HTMLworkLocation.replace("%data%", value.location)
		 		workHTML += HTMLworkDescription.replace("%data%", value.description)

		 		return workHTML
		 	}).join("")

		 	workField.push(jobs)

		 	this.workHeader.innerHTML = HTMLworkStart.replace("%data%", workField.join(""))
		 }
	}

	var projectView = {
		init: function () {
			this.projectHeader = document.getElementById("projects")
			this.render()
		},
		render: function () {
			this.projectHeader.innerHTML = "loading"

			var project = portfolioOctopus.getProject()
			var projectField = []

			var projects = project.projects.map(function (value, index, array) {
				var projectHTML = ""

				projectHTML += HTMLprojectTitle.replace("%data%", value.title)
				projectHTML += HTMLprojectDates.replace("%data%", value.dates)
				projectHTML += HTMLprojectDescription.replace("%data%", value.description)
				projectHTML += value.images.map(function (value) {
					return HTMLprojectImage.replace("%data%", value)
				}).join("")

				return projectHTML
			}).join("")

			projectField.push(projects)

			this.projectHeader.innerHTML = HTMLprojectStart.replace("%data%", projectField.join(""))
		}
	}

	var educationView = {
		init: function () {
			this.educationHeader = document.getElementById("education")
			this.render()
		},
		render: function () {
			var education = portfolioOctopus.getEducation()
			var educationHTML = ""

			var schools = education.schools.map(function (value, index, array) {
				var schoolHTML = ""

				schoolHTML += HTMLschoolName.replace("%data%", value.name)
				schoolHTML += HTMLschoolDegree.replace("%data%", value.degree)
				schoolHTML += HTMLschoolDates.replace("%data%", value.dates)
				schoolHTML += HTMLschoolLocation.replace("%data%", value.location)
				schoolHTML += value.majors.map(function (value) {
					return HTMLschoolMajor.replace("%data%", value)
				}).join("")

				return schoolHTML
			}).join("")

			var onlineCourses = education.onlineCourses.map(function (value, index, array) {
				var courseHTML = ""
				courseHTML += ""

				courseHTML += HTMLonlineTitle.replace("%data%", value.title)
				courseHTML += HTMLonlineSchool.replace("%data%", value.school)
				courseHTML += HTMLonlineDates.replace("%data%", value.dates)
				courseHTML += HTMLonlineURL.replace("%data%", value.url)
				
				return courseHTML
			}).join("")

			educationHTML += "<h3>Schools</h3>"
			educationHTML += schools
			educationHTML += "<h3>Online Courses</h3>"
			educationHTML += onlineCourses


			this.educationHeader.innerHTML = HTMLschoolStart.replace("%data%", educationHTML)
			// console.log(this.educationHeader.innerHTML)
		}
	}


	portfolioOctopus.init()

})()

$(document).ready(function () {
	
})
