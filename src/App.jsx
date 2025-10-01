import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'
import './App.css'

function App() {

  function handleClick() {
    alert('I am clicked')
  }

  function handleClick3() {
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('Clicked 2')
      }}>Click Me</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('click 4')}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
