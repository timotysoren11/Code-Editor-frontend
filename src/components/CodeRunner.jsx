import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import InputBox from './InputBox';
import TerminalOutput from './TerminalOutput';

export default function CodeRunner() {
  const [code, setCode] = useState(`# Write your Python code here\n`);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');  

  async function runCode() {
    setLoading(true);
    setOutput('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, input }),
      });

      const data = await res.json();
      setOutput(data.output || 'No output');
    } catch (err) {
      setOutput('Error connecting to server');
    }

    setLoading(false);
  }

  // toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 space-y-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="mb-4 px-3 py-2 rounded border border-gray-500"
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      <CodeEditor code={code} setCode={setCode} theme={theme} />
      <InputBox input={input} setInput={setInput} />
      <button
        onClick={runCode}
        disabled={loading}
        className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Running...
          </span>
        ) : (
          "Run Code"
        )}
      </button>
      <TerminalOutput output={output} />
    </div>
  );
}
