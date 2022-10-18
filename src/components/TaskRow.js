export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr key={task.name}>
      <td>
        {task.name}
        <input type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </td>
    </tr>
  )
}
