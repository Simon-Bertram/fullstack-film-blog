import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Root from './routes/Root'
import HomePage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import SubmitReview from './pages/SubmitReview'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='articles' element={<ArticlesListPage />} />
    <Route path="articles/:articleId" element={<ArticlePage />}/>
    <Route path="new-review" element={<SubmitReview />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
