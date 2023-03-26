import React from "react";
// import Portfolio from "Portfolio";

export default function Project(props) {

  return (
    <div className="container">
      <div className="project" style={props.projectStyle}>
        <img
          className="project-img-top"
        />
        <div className="project-body">
        <h5 className="project-title">Title: {props.Title}</h5>
          <p className="project-text">Description: {props.description}</p>
          <p className="project-text">ID: {props.id}</p>
          <p className="project-text">languages: {props.languages}</p>
          <p className="project-text">Repo: {props.Repo}</p>
          <p className="project-text">Live: {props.Live}</p>
          <a href="#" className="btn btn-primary">
            Project {props.title}
          </a>
        </div>
      </div>
    </div>
  );
}