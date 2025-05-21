import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Toaster } from 'react-hot-toast';

render(
  <>
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
    </div>
    <App />
  </>,
  document.getElementById('root')
);
