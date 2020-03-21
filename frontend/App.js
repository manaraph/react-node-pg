import React, { useState, useEffect } from 'react';

const App = () => {
  const [ merchants, setMerchants ] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);

  const getMerchant = () => {
    fetch('https://localhost:3001').then(response => {
      return response.text();
    }).then(data => {
      setMerchants(data);
    })
  }

  const createMerchant = () => {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');

    fetch('htpp://localhost:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email})
    }).then( response => {
      return response.text();
    }).then( data => {
      alert(data);
      getMerchant();
    })
  }

  const deleteMerchant = () => {
    let id = prompt('Enter merchant id');
    fetch(`https://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    }).then( response => {
      return response.text();
    }).then( data => {
      alert(data);
      getMerchant();
    })
  }

  return (
    <div>
      { merchants ? merchants : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add Merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete Merchant</button>
      <br />
    </div>
  );
}

export default App;