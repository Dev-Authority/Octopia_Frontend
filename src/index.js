import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import "./Hooks/i18next";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import marketplaceReducer from './Redux/Reducers/RTKMarketplace'
import SubscriptionReducer from './Redux/Reducers/RTKSubscription'

const store = configureStore({
    reducer: {
        marketplacesRTK: marketplaceReducer,
        SubscriptionRTK: SubscriptionReducer,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
);

reportWebVitals();
