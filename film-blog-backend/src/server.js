import express from 'express';
import { MongoClient } from 'mongodb';

// let articlesInfo = [
//   { name: 'star-wars', upvotes: 0, comments: [] },
//   { name: 'cocaine-bear', upvotes: 0, comments: [] },
//   { name: 'aftersun', upvotes: 0, comments: [] }
// ]

const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('film-blog-db');

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404).send('Article not found.');
  }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('film-blog-db');
  await db.collection('articles').updateOne({ name }, {
    $inc: { upvotes: 1 },
  });
  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.send(`The ${name} article now has ${article.upvotes} upvotes!`);
  } else {
    res.send('That article doesn\'t exist.');
  }
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find(article => article.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send('That article doesn\'t exist.');
  }
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});