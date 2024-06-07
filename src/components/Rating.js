import Message from "./Message";
import Star from "./Star";
import { useState } from "react";

function StarRating() {
  // Initialize state to keep track of the rating
  const [currentRating, setCurrentRating] = useState(0);

  // Generate an array of numbers for the stars
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="container">
      <div className="star-container">
        {stars.map((starValue) => (
          <div key={starValue} onClick={() => setCurrentRating(starValue)}>
            <Star className={starValue <= currentRating ? true : false} />
          </div>
        ))}
      </div>
      <Message number={currentRating} />
    </div>
  );
}

export default StarRating;
