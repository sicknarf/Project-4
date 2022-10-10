import { useState } from 'react';

function NewVideoPage({user, setUser}) {

  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <h1>this is new order page for video editors</h1> : 


        // THIS IS FOR 
        <h1>this is new order page for content creators</h1>}
    </div>
  );
  
}

export default NewVideoPage;
