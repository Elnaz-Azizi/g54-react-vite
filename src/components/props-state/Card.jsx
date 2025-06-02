import React from "react";



const Card = ({
  title,
  description,
  image,
  buttonText,
  buttonAction,
  cardStyle,
}) => {
  return (
    <div className={`card ${cardStyle}`}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && (
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        )}

        <button
          className="btn btn-warning w-100"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;