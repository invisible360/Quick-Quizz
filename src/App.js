import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound404 from './components/NotFound404';
import QuesAns from './components/QuesAns';
import Statistics from './components/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home />
        },
        {
          path: 'statistics',
          element: <Statistics />
        },
        {
          path: 'qa',
          element: <QuesAns></QuesAns>
        },
        { path: '*', element: <NotFound404/> }
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
