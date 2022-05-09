import { reviews } from '../db/reviews';

export const Reviews = () => {
  return (
    <div>
      <h2>Selection of my reviews</h2>
      {reviews.map((review, i) => (
        <div className="review" key={i}>
          <h4 dangerouslySetInnerHTML={{ __html: review.title }}></h4>
          <p dangerouslySetInnerHTML={{ __html: review.text }}>{}</p>
        </div>
      ))}
    </div>
  );
};
