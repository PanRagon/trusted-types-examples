import { reviews } from '../db/reviews';
import DOMPurify from 'dompurify';
import { trustedTypePolicy } from '../helpers/trustedTypePolicy';

export const PurifiedReviews = () => {
  return (
    <div>
      <h2>Selection of our reviews</h2>
      {reviews.map((review, i) => {
        const title = trustedTypePolicy.createHTML(review.title);
        const text = trustedTypePolicy.createHTML(review.text);
        console.log(title);
        return (
          <div className="review" key={i}>
            <h4
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(review.title, {
                  RETURN_TRUSTED_TYPE: true,
                }),
              }}
            ></h4>
            {<p dangerouslySetInnerHTML={{ __html: text }}></p>}
          </div>
        );
      })}
    </div>
  );
};
