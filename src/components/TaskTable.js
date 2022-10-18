import {TaskRow} from './TaskRow'

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValues) => {
    return (
      tasks
        .filter(task => task.done === doneValues)
        .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  )
}
