import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* <div className="intro">
        <h5>WELCOME TO MY WEBSITE</h5>
        <h1>
          <b>
            My name is <span>HANNAH KWAW</span>
          </b>
        </h1>
      </div> */}
      <div className="others">
        <div className="summary other-items">
          <h4>PROFESSIONAL SUMMARY</h4>
          <p>
            I am an ambitious young lady with a lot of love for technology and
            the rise of technology in Africa. I have built simple softwares with
            PHP, JavaScript, HTML, CSS, BOOTSTRAP, LARAVEL. I was introduced to
            web development in 2015; which means I have five years experience in
            web development. Aside academic work, I have also taken up some web
            development courses from treehouse which is a website that gives you
            the opportunity to learn some courses online.
          </p>
        </div>
        <div className="age ">
          <h4>
            AGE:<span> 23years </span>
          </h4>
        </div>
        <div className="residence ">
          <h4>
            PLACE OF RESIDENCE:<span> Ghana- Central Region-Kasoa </span>
          </h4>
        </div>

        <div className="hobbies other-items">
          <h4>HOBBIES</h4>
          <ul>
            <li>Reading</li>
            <li>Journaling</li>
            <li>Traveling</li>
          </ul>
        </div>
        <div className="social-media other-items">
          <h4>SOCIAL MEDIA</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
