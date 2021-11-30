import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h3>TECHNICAL SKILLS</h3>
      <div>
        <h4>HTML</h4>
        <progress max="100" value="85"></progress>

        <h4>CSS</h4>
        <progress max="100" value="65"></progress>

        <h4>JAVASCRIPT</h4>
        <progress max="100" value="50"></progress>

        <h4>REACTJS</h4>
        <progress max="100" value="40"></progress>
      </div>
      <h3>SOFT-SKILLS</h3>
      <div className="softskills">
        <ul>
          <li>Good Communication</li>
          <li>Leadership</li>
          <li>Team Player</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
