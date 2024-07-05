# Siddhardha.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <div class="container">
            <h1 class="logo">My Portfolio</h1>
            <nav>
                <ul class="nav-links" id="nav-links">
                    <li><a href="#about">About</a></li>
		    <li><a href="#skills">skills</a></li>
		    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>
    
    <section id="about">
        <div class="container">
            <h2>About Me</h2>
            <div class="about-content">
                <img src="C:\Users\sidhu\Pictures\mypic.jpg" alt="About Me Image">
                <p>Hello! I'm Siddhardha, a passionate web developer with a knack for creating stylish and functional websites. I have a diverse set of skills ranging from HTML, CSS, and JavaScript, to database management and version control. I enjoy bringing ideas to life in the browser and constantly strive to learn new techniques to improve my craft.</p>
            </div>
        </div>
    </section>
    
 
    <section id="skills">
        <div class="container">
            <h2>skills</h2>
            <div class="skills-list">
                <div class="skills-item">
                   <h3> Web Development:</h3>
<p> Proficient in HTML, CSS, and JavaScript for creating interactive and responsive websites.</p>
                </div>
                <div class="skills-item">
                    <h3>Database Management:</h3>
<p> Experienced with SQL and MongoDB for efficient data storage and retrieval.</p>
                </div>
<div class="skills-item">
                    <h3>Tools: </h3>
<p>Skilled in using Excel for data analysis and Git/GitHub for version control and collaborative development.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="education">
        <div class="container">
            <h2>Education</h2>
	 <div class="education-item">
                    <h3>schooling:</h3>
                    <p>Bhashyam high school, Year</p>
                </div>
               <div class="education-item">
                    <h3>intermediate:</h3>
                    <p>Bhashyam IIT JEE junior college, Year</p>
                </div>
            <div class="education-list">
                <div class="education-item">
                    <h3>Bachelor of Science in Computer Science:</h3>
                    <p>R.V.R&J.C college of engineering, 2021-2025</p>
                </div>
               

            </div>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2>Projects</h2>
            <div class="project-list">
                <div class="project">
                   <a href="https://www.1stop.ai/verify-certificate"> <img src="C:\Users\sidhu\Documents\certificates\WhatsApp Image 2024-06-13 at 14.34.26_92f3c3e2.pdf.jpg" alt="Project 1"></a>
                    <h3>Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
 <div class="project">
                    <img src="C:\Users\sidhu\Desktop\portfolio\img\ml.png" alt="Project 3">
                    <h3>Project 3</h3>
                    <p>Description of project 3.</p>
                </div>
   <div class="project">
                    <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs82/Course/NPTEL23CS82S3363404520381218.pdf">
                        <img src="C:\Users\sidhu\Desktop\portfolio\img\iot.png" alt="Project 3">
                    </a>
                    <h3>Project 3</h3>
                    <p>Description of project 3.</p>
                </div>
   <div class="project">
                    <a href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/109/noc24-hs65/Course/NPTEL24HS65S115630142530726494.pdf">
                        <img src="C:\Users\sidhu\Desktop\portfolio\img\psychology.png" alt="Project 3">
                    </a>
                    <h3>Project 3</h3>
                    <p>Description of project 3.</p>
                </div>

      <div class="project">
                   <a href="https://simpli-web.app.link/e/tKyUSSyiXKb"> <img src="C:\Users\sidhu\Documents\certificates\WhatsApp Image 2024-06-13 at 14.34.26_258298e0.jpg" alt="Project 2"></a>
                    <h3>Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
                                            <div class="project">
                    <a href="https://olympus.mygreatlearning.com/courses/64939/certificate">
                        <img src="C:\Users\sidhu\Documents\certificates\sql.jpg" alt="Project 3">
                    </a>
                    <h3>Project 3</h3>
                    <p>Description of project 3.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <div class="container">
            <h2>Contact Me</h2>
            <form class="contact-form" id="contact-form">
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Submit</button>
            </form>
            <div id="success-message" style="display:none; color:green; margin-top:20px;">
                Thank you for contacting me! I will get back to you soon.
            </div>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
            <div class="social-media">
                <a href="#" class="mail"><i class="fa-solid fa-envelope"></i></a>
                <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="github"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/manchala-siddhardha-4a5817315/" class="in"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
