import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import articles from './article-content';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  const { canUpvote } = articleInfo;
  const { user, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token} : {};
      const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`, { headers });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();
  }, [isLoading, user]);

  const article = articles.find(article => article.name === articleId);

  const addUpvote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token} : {};
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`, null, { headers });
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  }

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className='upvotes-section'>
        {user
          ? <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already upvoted'}</button>
          : <button onClick={() => navigate('/login') }>
              Log in to upvote
            </button>
        }
        <p>This article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user
        ? <AddCommentForm 
            articleName={articleId} 
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} 
          />
        : <button onClick={() => navigate('/login')}>
            Log in to add a comment
          </button>
      }
      <CommentsList comments={articleInfo.comments} />
    </>
  )
}

export default ArticlePage;