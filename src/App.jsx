import './App.css'
import useFetch from './hooks/useFetch,js'
import TaskList from './components/TasksList'
import CreateTask from './components/CreateTask'
function App() {

  const { data: tasks, loading, error, refresh } = useFetch('/notes/')

  return (<>
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">ToDo App</h1>
          <CreateTask refresh={refresh} />
        </div>
        <div className="mt-8">
          <TaskList tasks={tasks} loading={loading} error={error} />
        </div>
      </div>
    </div>

  </>)
}

export default App
