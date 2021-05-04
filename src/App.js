import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
import Todo from './components/todo';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <main className='App'>
        <Todo title='Minha To Do List' />
      </main>
    </Provider>
  );
}

export default App;
