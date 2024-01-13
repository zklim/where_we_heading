/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where We Heading?"
      dAppDescription='A friendly wager between friends'
      dAppUrl='http://localhost:4000/'
      dAppIconURL='http://localhost:4000/src/assets/mcd.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
