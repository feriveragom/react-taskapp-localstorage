export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTasks()
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />{" "}
      <label>Show Tasks Done</label>

      <button onClick={handleDelete} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Clear
      </button>
    </div>
  );
};
