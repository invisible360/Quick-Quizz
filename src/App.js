import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound404 from './components/NotFound404';
import QuesAns from './components/QuesAns';
import QuizDetails from './components/QuizDetails';
import Statistics from './components/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home />
        },
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home />
        },
        {
          path: 'statistics',
          element: <Statistics />,
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: 'qa',
          element: <QuesAns></QuesAns>
        },
        {
          path: '/quiz/:quizId',
          element: <QuizDetails></QuizDetails>,
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
        },
        { path: '*', element: <NotFound404 /> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
