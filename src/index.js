import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './component/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App authService={authService} FileInput={FileInput} />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
