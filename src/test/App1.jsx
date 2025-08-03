import { useState, useEffect } from 'react';
const Card=({title})=>{
  const [count, setCount]=useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    console.log(`Card with title "${title}" has been ${hasLiked ? 'liked' : 'unliked'}.`);
  },
   [hasLiked, title]
  );


  return(
    <div className="card" onClick={()=>setCount(count+1)}>
      <h1>{title} <br/>{count ||null} Likes</h1>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}


const App1=()=> {  
  return (
    <div className="card-container">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
      <Card title="Card 5" />
      <Card title="Card 6" />
      <Card title="Card 7" />
      <Card title="Card 8" />
      <Card title="Card 9" />
      <Card title="Card 10" />
     
    </div>
  )
}

export default App1;
