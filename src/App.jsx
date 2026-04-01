import { useState } from 'react'
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


function App() {
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />,
      },
      {
        path:"/watch",
        element:<WatchPage />,
      }
    ]
  }
 ])
  return (
    <>
    <Provider store={store}>
    <Head />
    <RouterProvider router={appRouter} />
    </Provider>
    </>
  )
}

export default App
