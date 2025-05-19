export default function TerminalOutput({ output }) {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl shadow-lg mt-4">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">💻</span>
        <label className="text-lg font-bold text-green-400">Output</label>
      </div>
      <div className="...">
        {output
          ? output.includes("Error") 
          ? `❌ ${output}`
          : `✅ ${output}`
          : "🖥️ Output will appear here."}
      </div>

    </div>
  );
}
