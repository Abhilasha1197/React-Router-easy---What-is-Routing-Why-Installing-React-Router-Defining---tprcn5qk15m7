import React from 'react';
import { Route } from 'react-router-dom';
import { Index } from './Pages/Index';

export const AppRoutes = () => {
    return (
        <div>
        <Routes>
            <Route path = "/" element ={<Index />} />
           <Route path="/home" element={<Home />} />
           <Route path='*' element={<NotFound />}/>
    
        </Routes>
        </div>
    )
}