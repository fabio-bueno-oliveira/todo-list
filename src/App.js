import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
import Todo from './components/todo';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <main className='App'>
        <Todo list={true} />
        <p>
          Edit and save to reload.
        </p>
      </main>
    </Provider>
  );
}

export default App;
