import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GiphyApp from './giphyApp'

import './style.css';


createRoot(document.getElementById('root')).render(
    <GiphyApp/>
)
