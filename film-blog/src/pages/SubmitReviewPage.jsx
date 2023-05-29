import { useState } from 'react';

const SubmitReview = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    
    // Amend the name in a URL-friendly formatted way
    const name = replaceSpacesWithDashes(title);
    formData.append('name', name);
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
      <form className="review-form" method='post' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit a review</legend>
          <ul>
            <li className="form-group">
              <label>
                Film Title: 
                <input 
                  name='title' 
                  value={title}
                  onChange={event => setTitle(event.target.value)} 
                />
              </label>
            </li>
            <li className="form-group">
              <label>
                Review:
                <textarea 
                  name='reviewContent' 
                  value={review}
                  onChange={event => setReview(event.target.value)}
                  cols={60} 
                  rows={16}
                  minLength="200"
                />
              </label>
              {/* <textarea 
                value={review}
                onChange={setReview}
                name="" 
                id="review-text" 
                >
              </textarea> */}
            </li>
            <button type='submit'>Submit the review</button>
          </ul>
        </fieldset>  
      </form>
    </>
  )
}

export default SubmitReview;