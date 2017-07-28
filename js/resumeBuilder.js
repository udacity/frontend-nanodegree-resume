


var bio = {
	"name" : "Danielle Pankey",
	"role" : "Web Developer",
	"contacts": { 
		"mobile": "650-555-5555",
		"email": "danielle@udacity.com",
		"github": "DPankey",
		"twitter": "@danyelly",
		"location": " San Francisco"

},



"welcomeMessage": "Hello there ",
"skills": [
	"HTML", "CSS", "JavaScript", "MS Suite"
	],
	"bioPic": "images/fry.jpg"
};

var formattedRole = HTMLheaderRole.replace(
	"%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace(
	"%data%", bio.name);
$("#header").prepend(formattedName);

var formattedImage = HTMLbioPic.replace(
	"%data%", bio.bioPic);
$("#header").append(formattedImage);


 var formattedmobile = HTMLmobile.replace(
 	"%data%", bio.contacts.mobile);
 $("#topContacts").append(formattedmobile); 
  $("#footerContacts").append(formattedmobile); 

 var formattedEmail = HTMLemail.replace(
 	"%data%", bio.contacts.email);
 $("#topContacts").append(formattedEmail);
 $("#footerContacts").append(formattedEmail);

 var formattedTwitter = HTMLtwitter.replace(
 	"%data%", bio.contacts.twitter);
 $("#topContacts").append(formattedTwitter);
 $("#footerContacts").append(formattedTwitter);

 var formattedgithub = HTMLgithub.replace(
 	"%data%", bio.contacts.github);
 $("#topContacts").append(formattedgithub);
  $("#footerContacts").append(formattedgithub);

 var formattedLocation = HTMLlocation.replace(
 	"%data%", bio.contacts.location);
 $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  var formattedMessage = HTMLwelcomeMsg.replace(
  	"%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);


 

  if(bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);	

var formattedSkill = HTMLskills.replace(
	"%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",
	bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",
	bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",
	bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",
	bio.skills[4]);
}


var education = {
	"schools": [
		{
			"name": "Fairleigh Dickinson University",
			"city": "Teaneck, NJ",
			"degree" :"BS",
			"major": ["Business Management"],
			"dates": "2009-2013",
			"url":"http://fdu.edu"

		},

		{
			"name": "Long Island University",
			"city": "Brooklyn, NY",
			"degree" :"MS",
			"major": ["Computer Science"],
			"dates": "2016-2018",
			"url":"http://liu.edu"
		}
		],
		"onlineCourses": [
			{
			"title": "Front-End Web Developer Nano Degree",
			"school":"Udacity",
			"dates": 2017,
			"url": "http://udacity.com",
			}
	]
};

function displayEducation() {
	education.schools.forEach(function(key) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace(
			"%data%", key.name);
		$(".education-entry:last").append(formattedSchoolName);
		
		var formattedSchoolDegree = HTMLschoolDegree.replace(
			"%data%", key.degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace(
			"%data%", key.dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace(
			"%data%", key.city);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace(
			"%data%", key.major);
		$(".education-entry:last").append(formattedSchoolMajor);


		});
	

}
displayEducation();

var work = {
	"jobs": [							
		{
			"employer":"Infosys",
			"title" : "Front-End Web Developer",
			"dates": "July 10, 2017 - Future",
			"location": "New Jersey",
			"description" :"Complete projects based on clients preference"
		}
	]
};
 function displayWork() {
 work.jobs.forEach(function(key) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace(
		"%data%", key.employer);
	$(".work-entry:last").append(formattedEmployer);

	
	var formattedTitle = HTMLworkTitle.replace(
		"%data%", key.title);
	var formatedEmployerTitle = formattedEmployer + formattedTitle;
			/*concatnation of formatted employer and title*/
	$(".work-entry:last").append(formatedEmployerTitle);

	var formattedDates = HTMLworkDates.replace(
		"%data%", key.dates);
	$(".work-entry:last").append(formattedDates);


	var formattedWorkLocation = HTMLworkLocation.replace(
		"%data%", key.location);
	$(".work-entry:last").append(formattedWorkLocation);


	var formattedDescription = HTMLworkDescription.replace(
		"%data%", key.description);
	$(".work-entry:last").append(formattedDescription);


	
	});
}
displayWork();
var project = {
	"projects": [
		{
			"title":"Portfolio",
			"date": "2017",
			"description":"This project contains a portfolio of my education background",
      "images":["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTERMVFRUXFyIaFxgYGB0dHRkdHhgbHx4fIBgfHiggIR4xHR0dIjEiJykrMC4uHx8zODMtNygtLi4BCgoKDg0OGxAQGy0lICUtKy0tLS0rLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKAAoAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABLEAACAgAEBAMEBAgLBgcBAAABAgMRAAQSIQUTIjEGQVEHMmGBFCNCcRU0UnJzkaHSFhczVJKTorGzweE1U3Syw9EIJIKD1PDxYv/EABsBAAEFAQEAAAAAAAAAAAAAAAABAwQFBgIH/8QAOhEAAQMCBAIHBQYHAQEAAAAAAQACAwQRBRIhMVFhBhMUIkFxkTIzgbHBFSNSoeHwFjRCU2JyktHx/9oADAMBAAIRAxEAPwC8cCFhwIVEf+IL8cg/Qf8AUbG26Km0MvmPko0+4Vl+HOI0kCNME0wR6YtILSJyEZnC++aJIsbbVV4x0/vXeZ+akDZZwjxkMwwqNNAC62SXXTM8qgIAnWtxNvYO9aThpKteF+KGzSzuhjVUhjbpYOoYyzpIRJQBFRiiwABBuheBCncA4w80mgkNHyg6yGgznmOrAaLjcABLZSANS7dWwhc/ETAMiAABV2A8r8q+4DGP6RyXkawbWVph7dCVDk4NM6AoBvRotpsWCVJG62NtQBIu6NYaocJmD2SuFxvZdTVTLFo3SzweM5bJ/SJZdcVKNQiWMktbXyoyVU06KaJ9y/PFpjNBJUOaY27bn6KHDWMp2EvOiNcCYZ1GeDqVW0m+negex+BGKUYHUlSosThlF2ol+BZvQfrwfYVUne3RoDxfikWUkMUxIYAEgAnY/EYYfhc7DYpxlSxwuj34Gm/JH68P/YVSQmu2xrPwLN+SP14PsKqS9ujWsnCJgCdPb0P+WOH4LUsaXEbJRWxEqVwfiumkc7fZb0+B+GLDCMWyWhl28CmKqlv3mormMgjvrJYMANwfTVXz6m3+ONaDfVVikZeIIqovZQFH3AUMKUc0H8RcDGZGpKEgGx/K+B/yPlirxChbUi4PeCn0Va6ndY+yjuLRQFmAoVQ+17icWXzkRlTVcKH+TR9aLJLrhOsjQr6luRbZdApTe1tQYfUVURMR0B+m6be4A6p58OS5gZaAKilRlU0kmrYRR1f3knz8vLzrJAQ8g8U4iYkm1xDq0ENqJAu+nTqGnb7Xb0H3Y4QiOBC8vCISdxiR2M04CcmNirMXCta0DSkaaB2ssOx2OM3W4Q+qc6ZrhyHJT4alsYDSFMTxtkQABKlD/wDuP9/GiYwNaGhQSbm6UFkXM8Pj4fE8TZhmjoCWMjpVNW6sTtpPYE7Y6OoUaphMrMoRLwlmU4OsuWzjxq5k1jTIlFSigHqKt3BG48sI0WXNNAYWlt/FH/4c5H/er/Tj/fx0pSrjx5mo8zmDLHIhWRGEY1WXMMYeQDRqUUrA9RW72xX1FIZHl10/HKG6WVsy8Qf6RyY4gwVFeRi+khXZ1XQuk6jcbE2VoVWq6E+yjrinibLGTlq+ptbI1CwjI0akMRsDcse3fq+BpUq0XxHG8rRwrzSiTFwjLqDwmIcsAnTqPNHdhVC++whBZMzznQcrTK6yOyoWZQIzFdl0Rwx5q0Cguj8Cczi+EB95od/EKwparL3H7IpwbiumkkPT9lvT4H4Yj4Ti+W0Ux08Cu6qlv32qfx3MtHH07FjV+mxxa4zUuhpxkOpNlGpIhI+x8EjcM4zJz6DKNSuwqwyiORU6iSdYYtd0taSNz2zsjH0revY45rgXOxuL/l8fgrAZZe4QrMxu1Srw4EKif/ED+OQfoP8AqNjb9FfcS+Y+SjT7hWPwPNzn6PFEehMnlnI6K6+YG1E9fux9Onzu9sY2f3rvM/NSBstJvGhbWsMQYozg6XBJ0SZYBVVlXrZZwCGK6G2374aSqdxHieYeXLplyLkhlkIBUrrR4FAYuA2gGRg2kBvgDtgQinD84WhMjb00g29FkdR+wDDU0nVsLilaLkBL3CcsHzCs3e9R3NEgdyt6S3o1WKxjsInmknEZcbbkcVbVbGNjuAnLG2VQlD2p7cPYiwRIhBBogiQEEHuCDuD5YR2yiVry2IkGyg+x9y2WnZmZmM5JZiWJPLj3LEkk7eeOWG4TeHvc9hLjfVPmO1PVN+09iM7KAzANEgYBiA4AJAZQaYAk0DdWa74p6uV7X5QdFKhYC26tDN5cPmEJjsBQdW/UQ2wNMB0nqGoNuxqjd24UVQBkVTSYsoDbkCyRS0pFXekaoohVAAAV2wqFpk8uqvGPooAkjAYlWIXmAa00mwE0xIK2A0qK3GBCN5bh0UZBVdxfUSS24ANsSSRsNifsr6DCIQ/jPCrt4xv9oDz+I+OM1i+EZ7zRb+I4qfS1WXuP2UPIZ1XXlTe6fdb0/wBMQKGubLH2ao28DwT80Jaesj9FknAocuzTGiT30rpLny1sO/3ntvXesTJ8PZTx5pXlzBsE0yodI6zBYnxTRjUquXhwIXz77cuJxT51FicOYo9Eldg2tiRfqL39Mb3oxA+Ome5wsHG456KLMbkK4+AGQQ5SiFT6PGDdEMxQbVYIPxF3flW+Hn967zPzUkbKcMy8MYMgZ2L6UUVqNnpBJOm67m6/uw0lWi8ciEgifUkhB6SLqjECCRYBuVALO97YELOKZtHy+tCGWRQVI8w1EEfLfFVjMoZSuB8dFIpW5pQgnDOJx5dyZNQBRmsLaqiFOYzHyA1p+s96xU9G4D35fgpWIP2b8Uyw8QicWHUdZTcgHUCRVHz229RjVqtSb7QeLQZnhzmGRX3icqCNShyGTUvdbG9EDHLtlCr/AHJSt4Q8Vtw/LBVg5xmnegHKkFUhAAARrJ1fs87xwx1gq+lqepjsBe5TVwjx/JNmo8s+UEZc1qE2qhpJBFIAw27g47za2U2KtLpAwttdKvtQ/HX/AEa/3HFJXe+V5B7Cth8jc3O1V0haryBY978yR+r47XgUNRspwhkRkMoYFgy9FUVr3uo6rIBJ2sknz2VC2/BHSi6w2lwxLrqvT2I3BDdur4dvLAhFcCF4cIhBOMcKu5Ixv9oevxHxxmsXwjPeaLfxHFT6Wqy9x2yj8L4iK5Uu6nYE+XwPwxEw3FGkdnqNWp2ppjfrI90yY2Kq0ie2Lj8+SyIOXbQ0sgjLD3lUo5JU+R6avF1gVHHVVWWTYC9uOyblcWt0XztNlnRUYrSuCUPqASp/aCMeiNljdmY06jQ8tFEsV9QZH8TyH/s/4Yx5NP713mfmpw2RHj+YhjjBnbQmtRr1BdDE7HUSAN9vnhpKgspy0kYliJ5khqORrkBuRI9QIcBhcaPQcGlBwIWrSp9EyixatHJQrrrVp5ahdVbXXetrGMt0kl7rYvirHD26ly5S8Ey85y5mYq5EnLACknU0VlWKlkcaFpkII3PxFhgcPV0oP4tUxWOzSnku3HOFJlYdaEhFzAne2UaS0rM5FjSdRYKdTKFFtdijcqKlbxRl8sOHryXctGgUAlW6HliGrWg0mzBsQaPX6bcu2UKv9yUv8F4ZmZYoZMtEZTDmXY9qB05crdkGjpPbDbbnZVUMcjmAsF7FHvD3h/ODiEEz5Voo1PUbQ/YYWdIUWT6KB8MKAbqVFBL14e5tgoXtR/HX/Rr/AHHFRXe+Wkg9hWtxp2EY0lgNY1lASwXzIABPp2GLsKGhMfEMyjSUrvF2jZkYvfJ1WUpemxXe2Ln3dPUqFFfjmfMfNWJaW7jMEmt9ERc0wfp1EaANLaSR79URC8TjOeVZAsPOInKoxRkFGSakYE77JGOcOmpVOk6CGEIll+IZkzRoyqFZpNVQvekSMqdRcBOkA6urVfuoK1CFETNZoTso1FeYLcqzKE5gBBjKrpbSaDIzjYs1UFIhduP5UKwZVIB7ttp1E0B3sE/dRJAu8ZrF8Hz3mhGviOKn0tVl7r9kUfiaMiGEiVpBcQDUGG1sWo0gsW1GrAokgHSAgjRQnscxxa4WIVY+3GLMjJQ86WFx9IFCOFkN8uTe2mfb4V88aHo3n7U7q98p38wo81rapH4VLlVy2TGc0UVNl0dxy/pE3NChN1kIKaW7DS24vd6eDEi9+QkkEXtxt/4gFnirgTjMUWVyKDXKQ0S3ChcNS0rjT2RqOljQ2YGiCBm33zEu3TvhojGc4opZ1aMkwhpR1VfL00e3YlmHw0nY45Sofm8nl1ZJjCxcByvV9sOG0XV0XJ2+Huk4QpLqHxWOOISRqZFaGNY8qgsq2mMUGaj9rY6iKFEbknFNVCimc/rjq3TXceSmR9cwDLsU0MrK0EYAK0dR0k0V01RsAdzub8tsWlPH1UYZwUZ7sziUJycbzrGsrSaX0+dWeXzNQb84DYAVXneHlyoHjzhUEWUkZi3W0Ydix6tLuy2fIFnILDej8BhCmZwwts/ZCfATZhYX+haCpe5Bo5irJoWwkjZmNmSqNle5O5wC3gkgbGL9XtdM3P4n+TH/AFC//NwqfVeeNwxnc5krzeWdQox6QI7i5arLIHLPYfU2wC0B3MOZkDiS/dOsL7aK1cvw+USyySSrICfqFMZHJsU1nXT2fOlIFi98TE0ueb4bO60s5Q6JAaJ95ypXeroURq7+g8gIU2LLuJmcm1K0Oo+vmlafnfy3JwIUusCFmBCzAhR8+6iN9QDCiCp3BvaiPMfDHTG5jZIqF4JmuI5dP/LDMBW3tIiQe/Y6TtZJoGrJPcnFM18wHcvZejT0+GvkJqC0v8dbfVcvEeezs8arn+aYw1rzYyg1UexKjeidvvxMo6jEI33gJBt4JrsmCn8Prf6oLMilIw9aFB5d9qLEtR8+on53idHW4y0uLXOud0nY8F4NVh+z/OTc7RmjMkZhLRPoK1p5Y6XC+6V0gjfUeX51iHA+Vxd1m6z+N09JGWOpbW8bG6Hy8c4wGbQ2cKajoLQEErqOkkcvY6aJFd8RZHz5jlvbyVvR02FugaZg0Otr3v1Wh47xr1zf9Sf3McdZUc1JNJg1tMv/AF+qbOISzpCzIWkmC2CFti22+kfrrGSpy6eszcTdVETYS8Nfo36JU/DvGvXN/wBQf3Ma0PqOforfsmC/4/8AX6qPBn+KobSOdT6rlqP6xHg6yp5+iXsmC/4/9fqufFuKcSljK5o5jlWL1xFVu9urSN77b4cidMXWfss/0lp8OZRE0+XNyN/qufBeI8QiQjJmbQWtuXGWGqh56TvVbfdhZXyg9y6h9EYKB9K81Nr5vE28PNTn8QcZUWzZoD4wnzND7HrthvrKnn6LVmlwUC/d/wCv1QbiWbzcrlsyp5hG/NJRq8rXl+mI0xBd3yb+SzlW2IS/cABvmi+W8bcVy0qHMamHcxSgpqH9WCPPf1xMFQ5ju9dXJweGqiPUBgPEOJVgJ4inzeUE0SRrciCoppGYWTrVyMvqSttwrXfkN8T45GvGYLJVVLJSyGOQWKI5HiuZBSN4WYVqL03u70O1Fjpfc6TtHagyADtR1x4d4izLMiyQHqFDoKF2UTF6DOQvuxkAsdmO5rYQtIc9mozpYSt9ZK6ty9QKfXBUIFe6wQgErqVkok6qELrDxzMsNXL01EWKmGQktdA3qFevLpr26x3AhD+OcdzA5MZjLakDueSygb7n32+zfR3utz2w9BobpCunsqznNyIUmzG5Q2Ow7gfqIxApHZowOCvOkMJjrXEf1aoH7f8A8Rg/4kf4UmNd0WA7W7/U/MLPT+yqq4twyU8OyeYCEwjmRsw+y3OcgH0BB2ONHSzxNrJoXbkg/CyZcDlBVs+DeNRyHLfTJI4ZI8rG4R30jTusenUa3oyP2O8AtguMLVU5Mj3RAlmYgGylB2mqeP4QZP8AnWX/AK1P3sRuzyfhPoUuZcs3xvLOjLFPC7FdlWRWJ+QN4r8Uzw0rnFvqnqcZpAEK4Rm4Yn1TSxx7dOt1W/WrO/8AqMZzo3SvkmdI0XAVhiD7NARr+EGT/nWX/rU/exs+zyfhPoVU3C9/hBk/51l/61P3sHZ5Pwn0KMwSt7SuLZeXIukU8TtrTpSRWOzi9gbxxJC9rblpHwUKvP3JUH2VcVggy0ommijJmJAd1XbloLokbbd8NxsdlvZN4Yfuz5pg4R4hy+YVJ8xLDC1WITNGeWa3JYNTH0PYDyu8PCGQ6hp9FZXVfe0bMpLnHaJ1dTGoDIwYXR8xtihr2ObNYhTac9zROXtBzWRzOTkPOgeRBqi0yIWB27Ub3HceeLaqp3dUXOadPGyk4JUPjrGNYfaNj5JX9lWdjiGcDzRwsyIELsF6ql3370SMRsPY9wOUXVx0r9uP4/RP0PFcupjvOwOF1AgzqO9aTYPUQBVHbqJvYYsuol/CfQrIXCl/hnIa+Z9IyuvTp1cyPVpu61XdXvWDqJfwn0KLhSstxfLytpinidu+lZFY/qBvHLontF3Aj4IuFNxwlStnp+Y7N5Xt9w7YtIWZWgLglKXsXzVSZiKzuquBew0khtvU6l/V8BjNUDt2ra9K4fdyeYUj2/8A4jB/xI/wpMbbot/Nu/1PzCw8/sqP4DlQ8CSJ11iVpFZBVsnMOoAEgWbCAkgBnTftiJjriK95HL5LqL2UneKPDMEualduJ5NWLdaNqGhwArIAFrSpGlfOgL33xd4VWy09M1nZ3HmPFNSNBdutuD+yqTOIXy2dysqq2klddA0DXu+hGJE/SJsJyywuB52SCG+xTH4b9nkvC5jLNJFIWQqmjVYNizuAO23zxg+nHSBlXSMhjaW668wrPDIbPLjwUnxV7P8AM8VMUkU0SIikaX1XqJ3OynyC/qxz0HxCHD6Vznsu5x3HBJiQzyADwQL+JHN/zjL/ANv93G4HSqD+2fUKu6g8Vn8SGc/nGX/t/u4X+K4P7R9QjqDxUXiXsxzHDk+kSSxOAQgVA5Yl2CgAadzZG3c4rMVx2OsgMbWEeijVUDjHYaqT4a8KTysczq5QRxl3B1RzxmQoNaEqdDgSAix6ja7xSx1LBSGAg3ve/wANiighcxpzDxW7+ynN5/TmxLAgnRJApLkgFF95tA1Oe7NQtixoXi+w7HoaSARFhNuYUt8Rcbobm/DkvDi0D/WGMB3aNWKqHJ06jXTdEAtQNGu2MhjlQayr69rSAp9NlazKSpGf9k+ZyMTZmSeBliXUwGqyPha1jV4nj8VRRPhbGQSLeC6wdvV10bnHS6i8L8C5jiTOikQtCFLLMrqevVXTpv7B7+oxUdHcRbh2frGE3V10nnjqurdE641+iJfxI5v+cZf+3+7jVfxVB/aPqFkuoPFZ/Ejm/wCcZf8At/u4P4rg/tH1COoPFD+MeyfiOUUSxFJivV9SSHUiiCAQCT57b7Ydi6RUdQerlblB42ISGJw1C34F7Vc7lgYM0Oco6Dq6ZUqwRfmfKmF7dxucc1HR6nm+9pzbxtuCgSkaFPfAvEmWzo+pkGqrKHZh/wCnz7HtimqaSWnNpG2+SdDgUo+z+f6PxKNZAAdTRNZrSaI/XYqvjjC0pyS2K9Kx1gqKAvYdBYjmrB9qHAPwjHlctzVi15j3mF9oZTQWxqO3ax5+mNThtc6jkdI0XNrfmF5u9ubRRfZ74YbLAI0yTpDI4DqKFhzSAEncMWaTt1CJbblnDVfVGpmMpFr2StFgqtnnRZOLLqiWVsydGsoDpDZnXWqNr7psNJvTvtjXRMeRTHKS0N1tfTbgR+d/JRz4qwvYB+Iz/wDEn/CjxU9KbGrb/qPmU5BsmnxFJcgHov8AfjybpBJmqA3gFeUDbMJR3hsZWJAfTGpoIurp2NPgFXTOzSEqTiYml7gQlT2mTmPIuwo9Sij2IY6WG2+6kjbCE2F1HqZTEzMl72b8JhzcBkdFUwSCOHSotFVVKgOwZ7BJNlicI111zSzmZpdzTP8AwGyX+6X+hH+5jpSlXfjaFMnmgkKRgRKWiJUDQ0sYWQ6VpWtVUdYbtivqKwxuy2T8cWYXTj4k8NZbJ5aTMQRossQDoeXHswYUfcxMkcWsLgnKGAT1DInbE2Qbwv4ozOcfMSkBZD9HiAiC+7qnJrmEi9z3w1BP1t1OxbCxQZBmuTf6Jj4z4neFjDEoeZEkartm0aAlxqAesuaqvdNXe0lUy7zeKSCVSOJ2pQoE+9sVAZgIyRCSemTfVt074ELOL8fZI4pNYiDF1IGliZEbSFUNp5i2H6FqRunSB1UIQTxNwiDiQ/8AMwosis660PWAJCq2xAN6VVqNgX5g4t8MqpqfvMPw8E29oKrDjvs8zOWPMyzGVVOoV0yLW428z8R6dhtjWU2NQyjJOLfmEw6MjZFvG8JyvEZWQBSHEqDuL2a6/OBOPJKi7Jrheo4S4VOHBjtdCD+/JW54kymWzWXRpoo54Qyv1XQU7F+4qla7OwF4u45XMuWG1wvOnNIJBUDIaooY14esOXgMuhFeFyeoA3p5qaSH1gr8ukg2jnuebuOqQBd+HcPhmkZ5Mvkyrlyq8leYCkmlixN8wEmywC6SQOrVY6E0gFg4+qSwR7J5GKEERRpGCbIRQoJ9aAG+OHvc7VxulASpKjyyCUtGY5ZjEIwDrFMwLa9VHZb06RQ3s1WM5U4Oyd3XZrkm/LyCnR1RY3JZOa40LRYKCsvCoXuBCT/ap/s9/wA9P+cY5dsoWIe5Kg+xz8Vm/Tn/AA0wjNk1hnuz5p+x2rJUz7UPx5/0a/3HFFXe+UyD2FY3j3/Z+Z/R/wCYxbz+6PkncJ/nYv8AYKv/AGUM9ZvlmnPKCmx3uXyJAb82xeItDs5XvSoguj+P0VnSLK7yBZAo0aSasqx90gatqU73V7He9rBZFQ5M6URJpMzEsY1anLKI+ojQSxf9S+YNXtZEKXmVn3ZWVQHBo79Iq9/IGm8iRd+VEQlgmVipdtRsliKH3bX2+7t2+OLNjCAAuCbqus3nM3xTOTwQTSQxw2FEakksH0DVpYHSXO7XSjcjbGhIp6KlZK9oc53HwCZ1c6yYvbNldM8ElDrjI+JKMO/ycV92POa5tiCt90Vl+7kj5gpp8P8AE9fComvVSFHBA3ChgVogiqFdjiZTuzRgrOYvD1VZI21hfRMHBm1q2rSwDArWkgEqGsEKATZO9YeVapsOSiR3dI0V5K5jBQGeu2pgLNWavtgQuxxy7YoSFFkVfmlNEUrQOom90r0GiZB1AA799qvGJwV7n1Aa43A1HmrisAEdwp8OtkC5GNcsKeohpQq9R6HePYCMWdSrZOpD543Cp1JPDM1zdbNr3BVWelBWaZhexq0eMAgE0pu6FiFwyeU4nTFpAHCBY9VBb1TWzoGfyMX2z2OBCXfGXD5ospmHk1hJGTSrOGKkTsSWokairLRF7KQfLHLtlCr/AHJRH2Ofis36c/4aYSPZNYZ7o+afcdqyVNe1D8ef9Gv9xxR13vlMg9hWT41NZGclOYAtlNxrAYErYBoEAi6274uXGzblN0rHPma1psSd+CROD+J8lLPPyolynMSLlFgqrzYnkYFtFhQS6qa7qG3GGG1MZdZWs+B1kcAcdbX0HhzTmeF5jRCYpwx5wkkkLUXUFQDaoQ1xiitAEtYZQoBlKiItuouU4W8GTRFMbSQsBep4wCIwh6wjFRVmyhFHy7gQpkeUbKQMhZSzsDaDSD0KDUdkIOmgoJHbD9O3M9IdlAxZLhIvinwG2Yd2y8qxiVleSNl6S6hwGBG9052rzJvFvQ4o2EDrGXsCAeRtp+Sbcy+ydfa1lNeR1bkxyK23xtTfwpicYWsZmjutL0dm6qsAOzgR9UL9kbF4p4JUcBSkqFtS2JAwBXYdNxk6gaNn03Ska5rSHBd9IZoJphJE4HSxty/+/krFy+XWO9IO5s2SSdgO5JPYYlrPraadUFsQB8cNTTxwtzSGwXTWFxs0LWHMpIOhgfuxxHUxTNJjddK5jmnvBKXD9Ntr93ltq2B20m+kgg7eRBxjMC/mla1vulJ4ZlUSSCV5xK4LolI1VKEPTrd3X+SuyxBt9vTdqnR+LiEbMFVrJPl9zEG/SlO/wwIUvAhKntNhZ8iyqNy69zQADWST6AAk/AYQi4UaqidJHlalXwRG8GVM0egyLM2iuoSo8MbFVZQTRKKbCmtN1thGCy4o4HQsLXcUzpkMwRAkUiSwqqGRxVSMHWRpPe2YtbaQDsfe8sdKYq78XcOeJo420Bo8qiVqHU0UAMgQfa0rRPwIxW1NK+R+YKTFKGiyvA4sfDVRlWvjH2eQ9U+XlSG9yj0IyTVaW+z57bjcdsQpqQE5m6LU4Z0gljAilbmHEb/qlDJ8Tz/CHC2VVtwrdUbgb2p7efda7i/LEUPlgNvBXklNQYo0uHtctCPNOnh7xpksypizK8l3PUWNq+oiwHqwDS7H4CzV4mxVbHaHRZqu6PVFP3o+83lv6Ip4y4gxR+TqYmNhEUF07ISp+4tpF9u17b4t4e6y48VnnNINigWY41Mssi8o6FkjUOUYCpGZa7myGUHVsKdbAqy6ZCNLLmy2zuYnWRwmo+hpiqixdx6QCAL3V9RO1DA4uBKLIvmIcxnIXy7q3LlimVtRZreouUFkZI2UbyXqTuCPTFY7UJ+J2V4JQHwd4zmzmfh+kCMfUvGpVSLLFGPmdzy1+G2IkVVnflIWhxDARS05mDidfyVqDE1ZlJnjjnFlEbFW1LpNbVZJvY9JIonvWMtibmiq++F2hug/85qypger7u91y8IZl3fUQ627dLCiFobH7j5ix6YiUTOqq2MjNxbvW2807Oc0RLvguOXzDQxDMSCORJMvJIsIBV1CRFmV2JYEfZJAXQxAprsXNHhEdNIJGuufHh8FFmqjI3LZFsrxvLLoTMLHC7zHQuokM5KEka1R71SKKKjdhVjfF2oalLxvLcxGVH+tjaRZNOxCmICvXVzl00PNuxJsQiGS4rHM7Rrq1KoZgVrTbMoB+No23wwIQH2oSFcgxUkEOlEfnj9nkQdiLB2wjtlFrJHMjzNSz4KYvkJneVUK5iw7ISBUSCgsbxldtgFZe9b2QUabpuhldKwudxT3wSGOJpY1fmNqDyOVUMzFFW3ZaDMdPeh2ryx0pyrT2mysudkAagY1sUD3Ug1YtbGxK1YABsAYqqqoeyTKFJijBbcqyoYTky7M7PC7M7tIxJiZiSdzsIa22rRXmCStoNlGVf8AtDWSTiKI4QosVxiStO96iFLAFrFUSLob7YgVAJkA8LLW4QWMoXOaSHFwBtvy8DYKb7Lcvzos3DLGDlhINCMQ4Vjq1Lq86GjceZvzx3Si7XAjRMY+8RyxSMd38upGnkfms8T+zOOmlyj6KsmN91P5rd189jY7dsElCHHuaFd0PSWRlmzjMOPj+qR4c3m+GvpNoCfcbdGo76fLz8vUX5YZbLUUhsfRX7oKDE2Zm2vxG6aeF+LcvmConURyKbUtRUNRFq3dTRry71ZxbU+JxS6PFisvXdG5oLuj7w/NNCmwCNwdx/pi0Bvss65pboUey2QkV42aQnRGFbqNMQCPdr43qJvYbeeKhdbKlpj+DuJkggLDPewsBCboDvsjVinP3c3xXpDQa7C7eJb+Y/UK/Bi4Xm5QPxNxCKNadQSN736bNDtuST5DGfxieNxEIZmcdlNpGO1dewXLw3xCJ9lUAns2+9eRB3B+GI+EzxxvMLmZXW9V3VRuLc17hB8hkUubTHHqkiYPafynQQA+kamG9eZomsQcFmkdUBribDZP1jQI7gKbwPPiaeIrUivzSZtS3qVYAFDxExSAqTaiv5MbEoTjbKoR9ODwAUI1A37XtdbA9wOlaHYaVqtIoQuuU4fHESUWiQFJskkAsRZJJO7MbPrgQlr2q/7Pf89P+cY5dsoWIe5KXPAebMPCs5IFDaZD0tdG44wQa37HDJfkjLh4LjChdlua5r7QszTTcmHYqhJ17agxAA1be4br0F4gfaD7Xyq77OL2ug3j7MGXMCQgAvBGxA7WUvEerdmkBXUIs1WfxLi80eaESBOWqxM9qSTzZJE/lA4CVoBFq2rcbd8Xw2UJD45slmoIublvqNKkGTRUOtFkC7NajRpPT0gUL2xy5jXbhPQ1EsJvG4g8lI4bxqJeXDloDGAyiRSoXlBmdRYsEkmNu19rPfHQAAsFw+RzzmcblQ+L8emEgiYIRI9Iq7MFVwrHWWKyDqBNBNJ6aYmw/BYOuVxa+irvMcemzYlYSAIoLLCYwwKit2N3q38r7G9Iq6qWsfKSb6cFu4cNiperZl1dYZr7Hl+/K6lv4SXMwpPljyy66jG2636Brsb33vy7YfOHCWMSR6XGyYZjz6Wd0FQL2NroRkM5msi5QMAAepCQy9zdAHbz7V8cV7KqWldlv8E5iE+G1LMxFzy3X0Hi4WHVMe13JlM4HvaSIVtsNJIIvz8j8LGKuubZ4K3nReXNTOj4H5qzvCGe+kZOCQmyUAbq1GxsbPrteLCJ2ZgKx1fB1FS9nAlQvFnB2mB03R06q7jSwOwBB3qrB2xnsUpZWVDaiMXA/JOU0rMhY42XLw1wd42s2FDFhd3v5b2T95wxQUs00wmkFso9Su55WNYWtO65cMDFiI9n5bafztO37cQMD/mk/W+6RtY8102wsSdVV1ILF/C9m01tuLPcbtUy7QpOJOpgUu9tr2a9u9WVrf7J+FiEQwISh7UxeQYAEkyIAALJJcAAAbkk7ADvjl2yiVrC+Kw3Sx4SgP4JzyN9W3MIIkBTSdEXvAix8xiPKPuXLnC2OjFnDW6ATQloxHzcqNwWIk3bSGC3tWwdt/O9+wxUEd0C4V2DrexW3jZalQWDWWiFjsfqx2+GFqfbCSLYq1eJwI2YDlV1xqnLbloXBd5AadlJGwuhXn640AUJcuH5qMtCTll1hI0WUKo0q8eogGrUA0NI26h8aEKJwGGMtBUcH1YGkKkY5ZkiLtpUIDHuo7E6vlgQs4hDGZpGWNAWI1kIAXK9ixqyQexPbFhCwBmviubm9wq+45kcvCzqmYcK5JeFApo+YDnZB2sUe1b0AKGsEETiGu0O4C09PjLy1udgL27H9/sKNLxaecLDECiAaVjS7r4t3PxOw74hS10srcrdByVW8Z3l79yiHDPCZNGdtI/IXv8AM9h8r+WKiashi/yPJPNie7krnxslUKvfbFw/Vl4pgN4nom/suADt+cF/biHWtuy60nRifJUmM/1D8x+yuvsezwfKyRWLik7eel9wT89Q+WCifeO3BJ0mgyVef8Q/REvF3FeUwDHTGPfN9ukmyK3G1ftxR4u+WeUwMOwvbibqtpGta3OVE8I8YeRwunSCqhl1XpkIJZe32dhqHez2rDNAX0s4izXDr+ngfjwXdQ1sjC8DUKXwJgJVvbav2Yg4K4NqgCU7WAmLRNYxvFTL3AheYEJA8X52ZsjLmdStBLymgQrTBX1B9RFGmRlIHdbO+EJ0uo9TKYmZwhPhqXVwbOAKFVToVRdKqxxgCyST95JxHqHZoXJaGo645rW1S7mJayoUSQtdEilDpR2UdOonzLE+gHYk0xP3YF1a/wBWybfEvhN58vBmYLZxAgePvqAQUV+I9PPy37zailLmB7U1HJldYpe4X4xmhjVCqyUAFYs4OkdltWFgWavteGIq58bctrrt0LXG6Jxe0rMKoVYYAAAAOvYAfnYc+0X8EnZ28VHh8eypWmGIaRS9Uh07VsC5A2wv2k/8KOzjihec45mc0RGuwO2iMHft386+dY5nxGacW2XTIWt31U3hvhMmjO2kfkL3+bdh8r+WKaasii03KlMhc7wsmjJZNIhpiUKPOvOvU9z/APuIbTV17skY05bJ09XCLuRXhOSEj024AsjF/T9Gmwtz1BueChS15OjFOPiaFCI5WUTaAxiQlj1VQAKqx7juoxfqAhnjDiMWZymZgT+U5bFdakC1M1G69YJKPwHqMcSNzNIKlUUzoZ2vbuChXgU5GLNBeHySSpJl7mJ1EK6svL1EilYqZenYbChhuMRtNmqVWy1crb1HgdL7+Q5Jz4twlMwBq2IqvkQRY+8XiJXYe2pIeDZw2KhQzmPS2i04XwZICWBtiSfTv32xxRYW2A5nG52HJdTVJk0tYIPxXg4jkaQ5cZqNkASM0OTICx12bNMCo1DqTQKB1Gljp4qEOLG7/uyR0jpbAnZaZOXNpGis8jsqgM5StRAALVW1nfGclq8QLzkuB4Dgp7Y6e2tl2+lZn1k/o/6Yb7VifF3ol6um5LFzWZvvJ/R/0wdqxPi70SGOmt4ILwyGSfI5eKVGePkR9JU1si12GJNZUYgJ3BhNr6JsQ0r22eAsj4dFlAzBBErUHLWFb0DBuk9zV+u2IvX4jxKGQUcWrQAtfpeW9ct+qL/tjgS1/E+i6z0nEItlM9M6AxMWTsCgBXbagQKw4KnEtgXei6DaU6iyiPGpJJjjJJskxpZJ7k9OAuxLn6Bd5KdaPlkOxij/AKtP3cGbEufojLTrT6DH/uo/6C/9sLnxLmlywcl0hy4W9CKt99KgXXa6wdRiNUcjgSjPCzULusXrjQ4f0Xa2z5zfkoU1ffRi6AY1kMEcTcrBYKvL3ONyUZ4QVjjeRzQJ7/d8O92arz2xFqXXdbggLOLFUkX6tWLi2JdlFrJGF6VVrOpl6iNgO9YjLpB8xm0jlWXlKGQSaU5hAZhbOdorPvmrO2pthZwITfgQtMzAJEZCWAZSpKsVYAitmBBB9CNxgQllYM/KUaRtDoUS1uj1XM+jUAQQqBb93q2IJBELlHNxLS8hjpmjQiOxStqJlIOlzYDKBsQaO214Dqhd1bPx8y1D6gxGjbQwMQABbWSp1SkdBoIoq7JSwQufDoc24naYSIXhiKqDYV9UpkVV1ehUGiCRQBsAgshTvD8WYV/rS3L5ShRvWoO+piGLOtqUpS57H0wtkKR4R/EMp/w0X+EuEshE5VBBDAEEbg9q87+GCwRuq78VeDsnKS2W+qk390XGfvXy8/d9ex2w62kL9dlX1FEx+rdCkiTLZvhrFlLIDsWU2j0dg3l57A+przw0Ynwm6rS2emOiP8I8aq1LmF0n8td1P3r3X5X59sSYqpuzwpcOIDZ6asvMsihkIZT2INjE4FpGisWyNcLgrrWF0S5hxWUcGiW/NZWC/NJcFCeL+Icvlb5jW35C7t8/T5/D1wzJOxm51TMlS1uh1KT+LeMc3mzGkYaJV2SKIlnJrvYGot3qgK3+/FY95e4lQJauSU5I0zfxhwPRePM/Vgi1WMimZD1WTXUq0cR3V0RN2grfu6L1LSBnbr5r2bxhlSi0ubInDbBYiSSxQ7X3NbV8sBq2C2h1TLej1Q4vGZvd31PC/BMfAPHkOczH0dIpkeiTrCitPcGmJv5Y6iqGvdlAKj1uDTUsIlc5pHJNgxIVQgcPDMwItDTWwK01nfSq9zV+8D27g+uBCmtlJOZq5nRdkfIbfcNPz1H03EKTmzJoblBDJXRrJC35WQCa+4YEIf4Vzc0+TglzATmSRK7cu9J1KCDRAo0dx5epwIQ/i/Gnizqw8wKuiIqp0dReWRXsHrNKoI0du7bYLIQzKeN444lCQBY0CDpfUIkKtSuNI0yqEp499II6j2w42MndIhGZ8XZgl+dH7qh2j11oGiZnApDqYcqhZAPqu9yGWjOyQqXlOMh5J1YBRCoYkNqaiZR1JpGk/V2BZsMDh/rdSuHHKLlKUvHc5Mks6sscaFRooENqatO46qsau3ceoxXOneSSFSuqJZAXA6BSMjwWLiEPMSoZQSrAC0J2N6fKwfLtfnWHGQtmbmG67jp21DMw0KHnwbmTdCNhffWN98N9lkKa7FKvP4GZr8iP+kML2SRHYpl7/AzNfkx/0hhOySI7FKtJfCGZQFmWMAdzqH/35YDTSAI7FKu+R8Gv/KZpuWvki9TkkbD01X9/+eO2Up/qUmOhPsk+as7gXBIMkiSiECVhSKvU24BKhj3Y1bN2AHkBZaygHRWcULIxZoX/2Q=="]
			}
	]
};





function displayProject() {
	project.projects.forEach(function(key) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace(
			"%data%", key.title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace(
			"%data%", key.date);
		$(".project-entry:last").append(formattedProjectDate);

		var formattedProjectDescription = HTMLprojectDescription.replace(
			"%data%", key.description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace(
			"%data%", key.images);
		$(".project-entry:last").append(formattedProjectImage);
	})



}
displayProject();

