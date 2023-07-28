import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const HomePage = () => {
  return (
    <>
      <h1>Latest Reviews</h1>
      <ArticlesList articles={articles} />
    </>
  )
}

export default HomePage;