#Resume Project

##Links
* [Repo on GitHub](https://github.com/jv13/project_resume_vitrano_jen.git)
* [Link to website] (http://jenvitrano.com/advweb2/project_resume_vitrano_jen/)

##Resources
* [Backstretch:](http://srobbin.com/jquery-plugins/backstretch/) Backstretch is the jQuery plugin that was used to create the background image behind the container. This plugin finds an image that is referenced and stretches it to fit the page.  The image used in this project is from [Photo Backdrops](http://photobackdropssite.tumblr.com/).
* [Skill Bar Plugin:](http://www.jqueryscript.net/chart-graph/Animated-Configurable-Skill-Bar-Plugin-with-jQuery-Skills-Bar.html) The second jQuery plugin I used was from jqueryscript.net.  This plugin was used in the technical skills section of my resume to indicate my skill set in a percentage.  The plugin is easy to personalize you can add and change the name, number of bars, and percentage.
* The jQuery code was written with my notes from the lecture on event listeners. The event listener listens for a mouseover of the words in the interests section and upon a mouseover creates a paragraph under with interest content corresponding to that word to further explain some of my interests.

##Comments:
* This was a fun project, I enjoyed being able to have a working interactive resume on my website that I can link to, rather than just a regular PDF.  I also like that it is responsive so I am just able to change out the content and colors if needed and if I used this, future employers would be able to view on any device showcasing my coding abilities.
* This project was hard for me to commit thoughtfully as I largely grouped a lot of changes together I believe (I remembered after I made a bunch).
* I had to change some of the normalize.min.css settings for the bar plugin to be able to line up correctly.
* Although I don't necessarily love the idea of measuring your skill set in percentages (because how do I know I know 95% of HTML) I thought it was a great plugin for this project.
* The jQuery event listener for interests gave me a bit of an issue with the multiple events happening every time you mouse over the corresponding text. I also could not figure out a way to group them all together so I listed each one out.  The same with the HTML with each class referencing an empty paragraph.  When showing they would overlap each other and I didn't want to have to measure out the distance so I just put them all in their own paragraph so they could stack.
* I chose mouseover instead of click because I didn't think users click on text that doesn't look like a link. On the mobile version however, the user would have to click on the word for the corresponding text to show.
