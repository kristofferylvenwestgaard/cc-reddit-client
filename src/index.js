import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchResult from './components/SearchResult';
import PopularFeed from './components/PopularFeed';
import Post from './components/Post';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element: <PopularFeed />
      },
      {
        path:"/searchresult",
        element:<SearchResult />,
      },
      {
        path:"/post/:postid",
        element: <Post />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

