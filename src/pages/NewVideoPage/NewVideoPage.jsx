import { useState } from 'react';

function NewVideoPage({user, setUser}) {

  return (
    <div>
       {user.isEditor ?
        <h1>this is new order page for video editors</h1> : 
        <h1>this is new order page for content creators</h1>}
    </div>
  );
  
}

export default NewVideoPage;
