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
import SubmitReviewPage from './pages/SubmitReviewPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'
import './styles/main.scss'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnf29Sot47VKC2Byyv772EH7klYSRfkBc",
  authDomain: "fullstack-film-blog.firebaseapp.com",
  projectId: "fullstack-film-blog",
  storageBucket: "fullstack-film-blog.appspot.com",
  messagingSenderId: "72779987964",
  appId: "1:72779987964:web:6e7c9601349a52fac3d079",
  measurementId: "G-95HKSM6G7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='reviews' element={<ArticlesListPage />} />
    <Route path="articles/:articleId" element={<ArticlePage />}/>
    <Route path='login' element={<LoginPage />} />
    <Route path='create-account' element={<CreateAccountPage />} />
    <Route path="new-review" element={<SubmitReviewPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
