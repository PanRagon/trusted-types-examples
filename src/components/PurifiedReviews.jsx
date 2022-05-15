import { reviews } from '../db/reviews';
import DOMPurify from 'dompurify';
import { trustedTypePolicy } from '../helpers/trustedTypePolicy';
import { trustedTypes } from 'trusted-types';
import { dompurifyTrustedType } from '../helpers/dompurifyTrustedType';

export const PurifiedReviews = () => {
  return (
    <div>
      <h2>Selection of our reviews</h2>
      {reviews.map((review, i) => {
        const title = dompurifyTrustedType(review.title);
        const text = dompurifyTrustedType(review.text);
        console.log(trustedTypes);
        return (
          <div className="review" key={i}>
            <h4
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h4>
            {<p dangerouslySetInnerHTML={{ __html: text }}></p>}
          </div>
        );
      })}
    </div>
  );
};
