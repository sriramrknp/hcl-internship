// start of the react app

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

// render components to the main HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route key={0} path="*" element={ <App /> }>
				</Route>
			</Routes>
		</BrowserRouter>
  	</React.StrictMode>
);
