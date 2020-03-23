import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [age, setAge] = useState(42);
  useEffect(() => {
    document.title += `-- ${age}`;
  });

  return (
    <div>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>Click me</button>

      <p>
        {' '}
        {age}
        {' '}
      </p>
      <button type="button" onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}
