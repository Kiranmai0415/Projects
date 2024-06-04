import React, { useState } from 'react';

function Editor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const executeCode = () => {
    try {
      const result = eval(code);
      setOutput(result);
      setError('');
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1', padding: '10px' }}>
        <h2>JavaScript Editor</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your JavaScript code here"
          style={{ width: '100%', height: 'calc(100vh - 100px)', border: '1px solid #ccc', padding: '5px' }}
        />
        <button onClick={executeCode} style={{ marginTop: '10px' }}>Run</button>
      </div>
      <div style={{ flex: '1', padding: '10px' }}>
        <h2>Output:</h2>
        <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: 'calc(100vh - 100px)' }}>
          {error ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : (
            <pre>{output}</pre>
          )}
        </div>
      </div>
      <div style={{ height: '50px', backgroundColor: '#f0f0f0', textAlign: 'center', lineHeight: '50px' }}>
        Your footer here
      </div>
    </div>
  );
}

export default Editor;
