import React from 'react';
import { Route } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/" />
           <Route path="/home"/>
           <Route path='*' element={<NotFoundPage/>}/>
    
        </Routes>
    )
}