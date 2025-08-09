import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

function MainRoutes() {
  return (
    <Routes>
      {/* routes contain multyiple route */}
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
