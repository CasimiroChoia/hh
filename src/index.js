import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import HeroDetails from './pages/HeroDetails';
import Alphabet from './pages/Alphbet';
import Categories from './pages/Categories';
import About from "./pages/About";
import NotFound from './pages/NotFound';
import Loader from './components/Loader';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path: "/herohub",
//     element: <App />
//   },
//   {
//     path: "/hh",
//     element: <App />
//   },
//   {
//     path: "/home",
//     element: <Home />
//   },
//   {
//     path: "/home/herodetail",
//     element: <HeroDetails />
//   },
//   {
//     path: "/home/herodetail/:id",
//     element: <HeroDetails />
//   },
//   {
//     path: "/home/alphabet",
//     element: <Alphabet />
//   },
//   {
//     path: "/home/categories",
//     element: <Categories />
//   },
//   {
//     path: "/home/about",
//     element: <About />
//   },
//   {
//     path: "/*",
//     element: <NotFound />
//   }
// ], {
//   future: {
//     v7_relativeSplatPath: true,
//     v7_skipActionErrorRevalidation: true,
//     v7_normalizeFormMethod: true,
//     v7_fetcherPersist: true,
//     v7_partialHydration: true
//   }
// })

root.render(
  <React.StrictMode>
    {/* <RouterProvider
      future={{ v7_startTransition: true }}
      router={router} /> */}
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Routes >
        <Route
          path='/hh'
          element={<App />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home'
          element={<Home />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home/herodetail'
          element={<HeroDetails />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home/herodetail/:id'
          element={<HeroDetails />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home/alphabet'
          element={<Alphabet />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home/categories'
          element={<Categories />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/home/about'
          element={<About />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
        <Route
          path='/*'
          element={<NotFound />}
          loader={<Loader/>}
          lazy={<h1>loading...</h1>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
