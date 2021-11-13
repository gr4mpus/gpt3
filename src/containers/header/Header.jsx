import React from "react";

// images
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

// css
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          facilis, perferendis sunt debitis minus consectetur rem ea consequatur
          totam aliquid, similique ut dolores odio odit minima reprehenderit
          tempore! Esse, assumenda?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            quaerat.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
}
export default Header;
