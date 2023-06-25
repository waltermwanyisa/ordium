import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <App />
);

reportWebVitals((metrics) => {
  // Replace `console.log` with your own analytics function
  console.log(metrics);
});