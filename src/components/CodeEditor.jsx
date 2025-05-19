import React from 'react';
import AceEditor from 'react-ace';

// Import Ace Editor modes and themes
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';   // dark theme
import 'ace-builds/src-noconflict/theme-github';    // light theme

export default function CodeEditor({
  code,
  setCode,
  theme = 'dark',
  height = '300px',
  fontSize = 16,
}) {
  return (
    <AceEditor
      mode="python"
      theme={theme === 'dark' ? 'monokai' : 'github'}
      name="code-editor"
      onChange={setCode}
      fontSize={fontSize}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      width="100%"
      height={height}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
        wrap: true, 
      }}
      editorProps={{ $blockScrolling: true }}
    />
  );
}
