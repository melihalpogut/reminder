import React from 'react';

function Person(props) {
  return (
    <div className="person">
      <div className="photo">
        <img src={props.person.image} alt="" />
      </div>
      <div className="right-content">
        <div className="name">{props.person.name}</div>
        <div className="age">{props.person.age} years</div>
      </div>
    </div>
  );
}

export default Person;
