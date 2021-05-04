import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
import TodoList from './components/todoList';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <main className='App'>
        <TodoList title='Minha To Do List' />
      </main>
    </Provider>
  );
}

export default App;
