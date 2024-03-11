import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';


function customRoute() {
    return(
        <>
        <Route path='/' element={<Booking />}/>
        <Route path='/booknow' element={<BookNow />}/>
    
        </>
    )
    }

    export default customRoute;