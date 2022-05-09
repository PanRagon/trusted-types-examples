import { reviews } from '../db/reviews';

export const TextReviews = () => {
  return (
    <div>
      <h2>Selection of our reviews</h2>
      {reviews.map((review, i) => (
        <div className="review" key={i}>
          <h4>{review.title}</h4>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};
