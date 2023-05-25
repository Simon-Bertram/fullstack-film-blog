import express from 'express';
import { db, connectToDb } from './db.js';
import fs from 'fs';
import admin from 'firebase-admin';

const app = express();
app.use(express.json());

const credentials = JSON.parse(fs.readFileSync('src/credentials.json'));
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (error) {
      return res.sendStatus(400);
    }
  }  

  req.user = req.user || {};

  next();
});

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    article.canUpVote = uid && !upvoteIds.includes(uid);
    res.json(article);
  } else {
    res.send('Article not found.');
  }
});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    const canUpVote = uid && !upvoteIds.includes(uid);
    res.json(article);

    if (canUpVote) {
      await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 },
        $push: { upvoteIds: uid },
      });
    }

    const updatedArticle = await db.collection('articles').findOne({ name });
    res.json(updatedArticle);
  } else {
    res.send('That article doesn\'t exist.');
  }
});

app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { text } = req.body;
  const { email } = req.user;

  await db.collection('articles').updateOne({ name }, {
    $push: { comments: { postedBy: email, text } },
  });
  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send('That article doesn\'t exist.');
  }
});

app.post('/api/submit-review', async (req, res) => {
  const { name } = req.params;
  const { title, content } = req.body;
  console.log(`posted by ${name}. Title: ${title}, `)

  await db.collection('articles').insertOne(newReview, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  })
});

connectToDb(() => {
  console.log('Successfully connected to database.');
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });    
});
