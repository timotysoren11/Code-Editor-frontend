export default function InputBox({ input, setInput }) {
  return (
    <div className="p-4 bg-gradient-to-r from-yellow-200 to-red-200 rounded-xl shadow-lg mt-4">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">📝</span>
        <label className="text-lg font-bold text-red-900">Standard Input</label>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full mt-2 p-3 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        rows={4}
        placeholder="Type your input here..."
      />
    </div>
  );
}
