import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filho from './Filho';

function App() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar posts:", error);
      });
  }, []); 

  return (
    <div>
      <Filho posts={posts} />
    </div>
  );
}

export default App;
