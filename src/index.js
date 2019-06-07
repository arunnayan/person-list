import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="60" name="Arun" job="devloper" />
      <Person img="61" name="Rakes" job="tester">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          cupiditate veniam corporis iusto corrupti enim quisquam eveniet, error
          vitae autem, tempore adipisci accusamus veritatis qui exercitationem.
          Alias, voluptatem illum? Culpa?
        </p>
      </Person>
      <Person img="62" name="Shyam" job="designer" />
      <Person img="63" name="Manoj" job="intern" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
