import { useState } from 'react';
import * as userService from '../../utilities/user-services';

function OrderHistoryPage() {

  async function handleCheckToken(){
    const expDate = await userService.checkToken()
    console.log(expDate)
  }

  return (
    <div>
        <button onClick={handleCheckToken}>Check when my Login Expires</button>
    </div>
  );
  
}

export default OrderHistoryPage;
