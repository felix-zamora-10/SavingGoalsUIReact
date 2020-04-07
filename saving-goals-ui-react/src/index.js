import React from "react";
import ReactDom from "react-dom";

const user = {
  firstName: "Félix",
  lastName: "Zamora",
  avatar:
    "http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png",
};

function getName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hola {getName(user)}.</h1>;
  }

  return <h1>Hola extraño.</h1>;
}

// const name = "Félix";
// const element = <h1>Hola {getName(user)}.</h1>;
// const element = <div>{getGreeting(user)}</div>;
// const element = <img src={user.avatar} />;
const element = (
  <div>
    <h1>Hola {getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
);
const container = document.getElementById("root");

// ReactDom.render(_Que_, _Donde_);
ReactDom.render(element, container);

// const element = document.createElement("h1");
// const container = document.getElementById("root");
// element.innerText = "Hola mundo";
// container.appendChild(element);
