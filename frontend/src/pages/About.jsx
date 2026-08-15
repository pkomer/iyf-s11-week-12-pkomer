function About() {

    const currentDate = new Date().toLocaleDateString();

     const hour = new Date().getHours();
    
    return (
        <div>
            <h1>Komer Purity</h1>
            
            <p>
              I am an aspiring computer programmer with a background in research and data analysis, and a growing passion for technology. My journey into programming has allowed me 
              to combine my creativity, problem-solving skills, and analytical thinking to build solutions that improve user experiences.
            </p>


            <p>
              I have gained practical experience using HTML, CSS, and JavaScript to create responsive websites and interactive applications. Through different projects, I have learned 
              how to create a website, use CSS, add functionality, manage user interactions, store information using local and session storage, work with APIs, and use Git and GitHub 
              for managing and sharing my code. These experiences have helped me understand how websites work and how to develop clean and organized applications.
            </p>


            <p>
             Currently, I am expanding my knowledge by learning React and modern approaches to front-end development. I enjoy learning new technologies, turning ideas into working applications,
             and continuously improving my skills as a developer. My goal is to combine my experience in research and marketing with my programming skills to create meaningful digital solutions and 
             grow as a professional in the technology field. 

             
            </p>
            

            <p>
              Todays date is {currentDate}

            </p>

            <p>
              {hour <12
                  ? "Good morning!"
                  : hour < 18
                  ? "Good afternoon!"
                  : "Good evening!"}

            </p>

            
            
        </div>
    );
}

export default About;