import * as React from 'react'
import {useLocalStorageState} from './hooks/useLocalStorageState'

function Greeting({initialName = '', initialCount = 0}) {
  const [name, setName] = useLocalStorageState('name', initialName)
  const [count, setCount] = useLocalStorageState('count', initialCount)
  const [bool, setBool] = useLocalStorageState('bool', false)
  const [object, setObject] = useLocalStorageState('obj', {})

  function handleChange(event) {
    setName(event.target.value)
  }

  console.log(object)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}

      <div>
        <button onClick={() => setCount(previous => previous + 1)}>+1</button>
        <strong>{count}</strong>
      </div>
      <div>
        <button onClick={() => setBool(previous => !previous)}>Boule</button>
        <strong>{String(bool)}</strong>
      </div>
      <div>
        <span>{`${object.firstName ?? ''} ${object.lastName ?? ''} - ${
          object.age ? `${object.age} yo` : ''
        } ${object.old ? 'old' : 'young'}`}</span>
        <button
          onClick={() =>
            setObject({
              firstName: 'Jean',
              lastName: 'Bonbeurre',
              old: true,
              age: 63,
            })
          }
        >
          Become Jean Bonbeurre
        </button>
      </div>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
