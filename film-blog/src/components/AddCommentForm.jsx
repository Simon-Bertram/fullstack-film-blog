import { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('');
    setCommentText('');
  }

  return (
    <form 
      className="add-comment-form"
      action=''
      method='post'
    >
      <fieldset>
        <legend>Add a Comment</legend>
        <ul>
          <li className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id='name'
              value={name}
              onChange={e => setName(e.target.name)}
              type="text" 
            />
          </li>
          <li className="form-group">
            <label htmlFor="comment-text">Comment:</label>
            <textarea 
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              name="" 
              id="comment-text" 
              cols="60" 
              rows="16">
            </textarea>
          </li>
          <li>
            <button type='submit' onClick={addComment}>Add Comment</button>
          </li>
        </ul>
      </fieldset>  
    </form>
  )
}

export default AddCommentForm;