import React from "react";
import "../css/AskedQuestions.css";

export const AskedQuestions = () => {
  const handleShow = event => {
    let { target } = event;
    let sibling = target.nextElementSibling.nextElementSibling;

    if (sibling.classList.contains("questions-hide")) {
      sibling.classList.remove("questions-hide");
      target.classList.remove("icon-down");
      target.classList.add("icon-up");
    } else {
      sibling.classList.add("questions-hide");
      target.classList.remove("icon-up");
      target.classList.add("icon-down");
    }
  };

  return (
    <div className="questions-wrapper">
      <p className="questions-wrapper__p-1">Frequently Asked Questions</p>
      <div className="questions">
        <ul>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              How can i get help by the cloud weather app?
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              User Guide ; Getting started
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              How can i get help by weather services agency?
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              Are you plan to open a branch in New York?
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              How long your contract term?
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
          <li>
            <div
              className="questions__icon icon-down"
              onClick={event => handleShow(event)}
            />
            <span className="questions__header">
              What about loan programs and after bank advantage?
            </span>
            <span className="questions__content questions-hide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam natus exercitationem enim explicabo aliquid architecto
              sapiente esse repellendus corporis aspernatur, provident at
              necessitatibus porro pariatur ipsam deserunt unde accusamus?
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
