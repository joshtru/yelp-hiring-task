import React from "react";
// IMPORTING RATINGS SIGNS
// ZERO
import Rating0 from "../../assets/yelpStars/small/small_0.png";
// ONE
import Rating1 from "../../assets/yelpStars/small/small_1.png";
import Rating15 from "../../assets/yelpStars/small/small_1_half.png";
// TWO
import Rating2 from "../../assets/yelpStars/small/small_2.png";
import Rating25 from "../../assets/yelpStars/small/small_2_half.png";
// THREE
import Rating3 from "../../assets/yelpStars/small/small_3.png";
import Rating35 from "../../assets/yelpStars/small/small_3_half.png";
// FOUR
import Rating4 from "../../assets/yelpStars/small/small_4.png";
import Rating45 from "../../assets/yelpStars/small/small_4_half.png";
// FIVE
import Rating5 from "../../assets/yelpStars/small/small_5.png";

const ratings = {
  0: Rating0,
  1: Rating1,
  1.5: Rating15,
  2: Rating2,
  2.5: Rating25,
  3: Rating3,
  3.5: Rating35,
  4: Rating4,
  4.5: Rating45,
  5: Rating5
};

const RatingBar = ({ rating = null }) => {
  return rating || rating <= 5 || rating >= 0 ? (
    <span style={{ margin: "0 0.3rem" }}>
      <img style={{ height: ".71rem" }} src={ratings[rating]} alt="rating" />
    </span>
  ) : null;
};
export default RatingBar;
