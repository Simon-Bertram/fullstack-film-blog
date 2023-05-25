import { useState } from 'react';

const SubmitReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const addReview = (event) => {
    event.preventDefault();
    const formData = {
      name,
      review
    };
    console.log(formData);
  }

  const replaceSpacesWithDashes = (string) => {
    string = string.toLowerCase();
    console.log(string);
    
    string = string.replace(" ", "-");
    console.log(string);

    return string;
  }

  return (
    <>
      <h1>Submit a review</h1>
      <form 
      className="review-form"
      action=''
      method='post'
      >
        <fieldset>
          <legend>Add a Comment</legend>
          <ul>
            <li className="form-group">
              <label htmlFor="name">Film Title:</label>
              <input 
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </li>
            <li className="form-group">
              <label htmlFor="review-text">Review:</label>
              <textarea 
                value={review}
                onChange={setReview}
                name="" 
                id="review-text" 
                cols="60" 
                rows="16">
              </textarea>
            </li>
            <li>
              <button type='submit' onClick={addReview}>Submit the review</button>
            </li>
          </ul>
        </fieldset>  
      </form>
    </>
  )
}

export default SubmitReview;