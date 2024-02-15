import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { SocketProvider } from './providers/Socket'
function App() {

        return (
                <div className="App">
                        <Routes>
                                <SocketProvider>
                                        <Route path="/" element={<Home />} />
                                </SocketProvider>
                        </Routes>
                </div>
        )
}

export default App
