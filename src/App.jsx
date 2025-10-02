import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'
import Users from './Users.jsx'
import Friends from './Friends.jsx'
import './App.css'
import { Suspense } from 'react'
import Posts from './Posts.jsx'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {
  // const friendsPromise = fetchFriends()
  const postsPromise = fetchPosts()

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

      <Suspense fallback={<h4>Post are loading...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        {/* <Friends friendsPromise={friendsPromise}></Friends> */}
      </Suspense>

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
