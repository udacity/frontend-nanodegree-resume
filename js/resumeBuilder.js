function inName(name) {
	name = name.trim().split(" ");
	return name[0] + " " + name[1].toUpperCase();
}

(function () {
	// CV data
	var bio = {
		name: "Tiernan Cridland",
		role: "Website Ninja",
		contact: {
			email: "tiernanc@gmail.com",
			mobile: "+1-813-453-7553",
			location: "Los Gatos, California"
		},
		picture: "https://s.gravatar.com/avatar/02841904b6ccbbffd1dea8b1f897f2eb?s=80",
		message: "Hello!",
		skills: [
			"Front-End Web Development",
			"Server Administration"
		],
		work: [{
			employer: "HornBlasters, Inc.",
			position: "Full-Stack Web Developer",
			dates: "November, 2003 - December, 2015",
			description: "Managed website development and server deployments."
		}],
		education: {
			schools: [
				{
					name: "Udacity",
					year: 2016,
					location: "Online",
					degree: "Front-End Web Developer Nanodegree"
				}
			]
		}
	};

	// Temp object for gc
	var t = {};

	function buildHeader() {
		var $header = $("#header");
		$header.prepend(
			HTMLheaderName.replace("%data%", bio.name) +
			HTMLheaderRole.replace("%data%", bio.role) +
			HTMLbioPic.replace("%data%", bio.picture) +
			HTMLwelcomeMsg.replace("%data%", bio.message)
		);
		buildContact();
		buildSkills($header);
	}

	function buildContact() {
		var $contact = $("#topContacts");
		if ("contact" in bio) {
			t.contact = "";
			for (t.prop in bio.contact) {
				if (bio.contact.hasOwnProperty(t.prop)) {
					switch (t.prop) {
						case "email":
							t.template = HTMLemail;
							break;
						case "mobile":
							t.template = HTMLmobile;
							break;
						case "twitter":
							t.template = HTMLtwitter;
							break;
						case "blog":
							t.template = HTMLblog;
							break;
						case "location":
							t.template = HTMLlocation;
							break;
						case "github":
							t.template = HTMLgithub;
							break;
						default:
							t.template = HTMLcontactGeneric;
					}
					t.contact = t.contact.concat(t.template.replace("%data%", bio.contact[t.prop]).replace("%contact%", t.prop));
				}
			}
			delete t.template;

			if (t.contact.length > 0) {
				$contact.append(t.contact);
			} else {
				$contact.hide();
			}
			delete t.contact;

		} else {
			$contact.hide();
		}
	}

	function buildSkills($header) {
		if ("skills" in bio) {
			t.l = bio.skills.length;
			if (t.l > 0) {
				$header.append(HTMLskillsStart);
				for (t.i = 0, t.skills = ""; t.i < t.l; t.i++) {
					t.skills = t.skills.concat(HTMLskills.replace("%data%", bio.skills[t.i]));
				}

				$("#skills").append(t.skills);
				delete t.skills;
			}
		}
	}


	function buildWork() {
		if ("work" in bio) {
			t.l = bio.work.length;
			if (t.l > 0) {
				var $work = $("#workExperience");
				for (t.i = 0, t.work = ""; t.i < t.l; t.i++) {
					t.d = bio.work[t.i];
					t.work = t.work.concat(
						HTMLworkEmployer.replace("%data%", t.d.employer) +
						HTMLworkTitle.replace("%data%", t.d.position) +
						HTMLworkDates.replace("%data%", t.d.dates) +
						HTMLworkDescription.replace("%data%", t.d.description)
					);
					$work.append(HTMLworkStart.replace("><", ">" + t.work + "<"));
				}
				delete t.work;
			}
		}
	}

	function buildEducation() {
		if ("education" in bio) {
			t.l = bio.education.schools.length;

			$("#education").append(education.name);
		}
	}

	function buildAll() {
		buildHeader();
		buildWork();
		buildEducation();
	}

	buildAll();




	$("#main").append(internationalizeButton);



})();