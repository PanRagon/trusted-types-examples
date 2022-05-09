import { reviews } from '../db/reviews';

export const Reviews = () => {
  return (
    <div>
      <h2>Selection of our reviews</h2>
      {reviews.map((review, i) => (
        <div className="review" key={i}>
          <h4>{review.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: review.text }}></p>
          <div dangerouslySetInnerHTML={{ __html: review.img }} />
        </div>
      ))}
    </div>
  );
};
