'use client'

import { useState } from "react";

export default function Home() {
  const [count, setCount ] = useState(0)
  const increaseCount = () => setCount(count + 1)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount} style={{padding:"5px", color:"black", background:"white", borderRadius:"20%"}}>Increase Count</button>
    </div>
  );
}
