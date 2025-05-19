import React from 'react';
import CodeRunner from './components/CodeRunner';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Python Code Playground</h1>
      <CodeRunner />
    </div>
  );
}

export default App;
