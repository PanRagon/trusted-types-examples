import React, { useState } from 'react';
import './App.css';
import { Reviews } from './components/Reviews';
import { TextReviews } from './components/TextReviews';
import { PurifiedReviews } from './components/PurifiedReviews';

function App() {
  const [reviewType, setReviewType] = useState('textual');

  const onChangeRadio = (e) => {
    const { value = 'textual' } = e.target;
    console.log(value);
    setReviewType(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my review site!</h1>
        <h2>Please select a review type:</h2>
        <div onChange={onChangeRadio} className="review-type-selector">
          <input
            onClick={() => setReviewType('textual')}
            type="radio"
            id="textual"
            value="textual"
            name="review_type"
            checked={reviewType === 'textual'}
          />
          <label for="textual">Rendered as text</label>

          <input
            onClick={() => setReviewType('textual')}
            type="radio"
            id="innerhtml"
            value="innerhtml"
            name="review_type"
            checked={reviewType === 'innerhtml'}
          />
          <label for="innerhtml">Rendered as HTML</label>
          <input
            onClick={() => setReviewType('textual')}
            type="radio"
            id="purified"
            value="purified"
            name="review_type"
            checked={reviewType === 'purified'}
          />
          <label for="purified">Purified and rendered as HTML</label>
        </div>
      </header>
      {reviewType === 'textual' ? (
        <TextReviews />
      ) : reviewType === 'innerhtml' ? (
        <Reviews />
      ) : (
        <PurifiedReviews />
      )}
    </div>
  );
}

export default App;
