import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

/*__ Importando Páginas __*/
import Home from './pages/home/Home'

export default () =>{
      return(
            <>
                  <Routes>
                        <Route exact path='/' element={<Home />} />
                  </Routes>
            </>
      );
}