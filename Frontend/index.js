import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
AppRegistry.registerComponent(appName, () => App);
