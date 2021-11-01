import React,{useState} from 'react';

const App = () => {
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const dowble = () => {
    setCount(count * 2)
  }

  const divide3 = () => {
    setCount(previousCount => {
      return previousCount %3 === 0 ? previousCount/3:previousCount
    })
  }


   return (
     <>
    <div>
      count:{count}
    </div>
    <div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    </div>
    <div>
    <button onClick={reset}>reset</button>
    <button onClick={dowble}>dowble</button>
    <button onClick={divide3}>3の倍数で割ったものを判別</button>
    </div>
    </>
  );
}

export default App;
