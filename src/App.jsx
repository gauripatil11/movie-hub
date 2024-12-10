import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HomePage, SingleMoviePage, SearchedPage, TopRatedPage, UpcomingPage } from './pages';
import Layout from './components/Layout';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='upcoming' element={<UpcomingPage />} />
      <Route path='single-movie/:id' element={<SingleMoviePage />} />
      <Route path='searched/:query' element={<SearchedPage />} />
      <Route path='top-rated' element={<TopRatedPage />} />
    </Route>))

  return (
    <RouterProvider router={router} />
  )
}

export default App