import { useState } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const { user } = useUser();

  const addComment = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token} : {};
    const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    }, { headers } );
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
        {user && <p>You are posting as {user.email}</p>}
        <ul>
          <li className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
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