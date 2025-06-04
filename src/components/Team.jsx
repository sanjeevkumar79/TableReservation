import React from 'react'
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            We are a passionate group of food lovers, united by one goal: 
            to bring the joy of delicious food to everyone. 
            Our team blends creativity, culinary curiosity, and a love for taste to explore, 
            research, and present mouthwatering dishes. From researching recipes to designing 
            presentation ideas, each member brings a unique flavor to our project. 
            Together, we believe that great food isn't just eaten—it's experienced, shared, and celebrated.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
