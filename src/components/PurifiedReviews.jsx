import { reviews } from '../db/reviews';
import DOMPurify from 'dompurify';

export const PurifiedReviews = () => {
  return (
    <div>
      <h2>Selection of our reviews</h2>
      {reviews.map((review, i) => {
        const title = DOMPurify.sanitize(review.title);
        const text = DOMPurify.sanitize(review.text);
        return (
          <div className="review" key={i}>
            <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
        );
      })}
    </div>
  );
};
