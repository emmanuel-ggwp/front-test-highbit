import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch,js'
import fetchData from './utils/fetchData'

function App() {

  const [title, setTitle] = useState('')

  const { data, loading, error, refresh } = useFetch('/notes/')


  const processSubmit = (event) => {
    event.preventDefault()
    fetchData('/notes/', {
      method: 'POST',
      body: {
        title
      },
    })
      .then((response) => {
        console.info('Task created succesfully', response)
        alert('Task created succesfully')
        refresh()
      })
      .catch((e) => {
        console.error('There was an error creating the task', e)
        alert('There was an error creating the task')
      })
  }



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <form onSubmit={processSubmit}>
      <label>
        Title
        <input type="text" value={title} onInput={e => {
          setTitle(e.target.value)
        }} />
        <button>Guardar</button>
      </label>
    </form>
    <ul className="notes">
      {data.map((item, index) => (
        <li className='note' key={index}>{item.title}</li>
      ))}
    </ul>
  </>)
}

export default App
