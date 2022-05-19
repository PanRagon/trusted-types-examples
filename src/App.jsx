import React, { useState } from 'react';
import './App.css';
import { Reviews } from './components/Reviews';
import { TextReviews } from './components/TextReviews';
import { PurifiedReviews } from './components/PurifiedReviews';
import DocumentMeta from 'react-document-meta';

function App() {
  const [reviewType, setReviewType] = useState('textual');
  const [enableTT, setEnableTT] = useState(false);

  const conf = {
    meta: {
      'http-equiv': {
        'Content-Security-Policy': "require-trusted-types-for 'script'",
      },
    },
  };

  const onChangeReviewType = (e) => {
    const { value = 'textual' } = e.target;
    setReviewType(value);
  };

  const onChangeTT = (e) => {
    let { value = 'false' } = e.target;
    let boolValue = false;
    if (value.toLowerCase() === 'true') {
      boolValue = true;
    }
    setEnableTT(boolValue);
  };
  return (
    <DocumentMeta meta={enableTT ? conf.meta : ''}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my review site!</h1>
          <p>Select a review type:</p>
          <div onChange={onChangeReviewType} className="review-type-selector">
            <input
              type="radio"
              id="textual"
              value="textual"
              name="review_type"
              checked={reviewType === 'textual'}
            />
            <label for="textual">Rendered as text</label>

            <input
              type="radio"
              id="innerhtml"
              value="innerhtml"
              name="review_type"
              checked={reviewType === 'innerhtml'}
            />
            <label for="innerhtml">Rendered as HTML</label>
            <input
              type="radio"
              id="purified"
              value="purified"
              name="review_type"
              checked={reviewType === 'purified'}
            />
            <label for="purified">Purified and rendered as HTML</label>
          </div>

          <p>Enable or disable Trusted Types:</p>
          <div onChange={onChangeTT} className="review-type-selector">
            <input
              type="radio"
              id="disableTT"
              value={false}
              name="enable_tt"
              checked={!enableTT}
            />
            <label for="disableTT">Disable Trusted Types</label>
            <input
              type="radio"
              id="enableTT"
              value={true}
              name="enable_tt"
              checked={enableTT}
            />
            <label for="enableTT">Enable Trusted Types</label>
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
    </DocumentMeta>
  );
}

export default App;
