import React, { Component } from 'react'
import Home from './pages/Home';
import { useState } from 'react';

export const ScrollContext = React.createContext();

export default function ScrollCon() {
      
    const [scroll, setScroll] = useState(true)
   
    function toggleScroll() {
        setScroll(prevScroll => !prevScroll)
    }

    return (
        <>
            <ScrollContext.Provider value={scroll}>
                <Home/>
            </ScrollContext.Provider>
        </>
    )
    
}

