## As stated in the project requirements, i was able to include the following files:
1. index.html: The main HTML document. Contains lonks to all of the CSS and JS resoures needed to render the resume, including resumeBuilder.js
2. js/helper.js: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality.
3. js/resumeBuilder.js: This is where i implemented the code needed to render the resume
4. js/jQuery.js: The jQuery library
5. css/style.css: Contains all of the CSS needed to style my page
6. README.md : The GitHub readme file
7. Some images in the images directory.

## The process:
1. I built four JSONs each one representing a different resume section and the objects i created follow the schema laid out in the project description.
2. I iterated each JSON and appended its information to index.html in the correct section.
3. I included an interactive map in resumeBuilder.js
4. All of my code for adding elements to resume are within functions and are encapsulated within the same objects containing my resume data.
5. I implemented `console.log()` to gather information about click locations.
6. I added pins to the map on click
