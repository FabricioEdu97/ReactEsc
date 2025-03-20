import React from 'react';

function Filho(props) {
  return (
    <div>
      <h1>Meu Blog</h1>
      

      {props.posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Imagem aleatória" />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Filho;
