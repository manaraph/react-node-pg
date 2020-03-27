import React, { useState, useEffect } from 'react';

const App = () => {
  const [ merchants, setMerchants ] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);

  const getMerchant = () => {
    fetch('http://localhost:3001/api/v1/merchants').then(response => {
      return response.json();
    }).then(data => {      
      setMerchants(data);
    })
  }

  const createMerchant = () => {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');

    fetch('http://localhost:3001/api/v1/merchants', {
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
    fetch(`http://localhost:3001/api/v1/merchants/${id}`, {
      method: 'DELETE',
    }).then( response => {
      return response.text();
    }).then( data => {
      alert(data);
      getMerchant();
    })
  }
  const displayMerchants = (merchants) => (
   <table>
      <thead>
        <tr>
          <th>Merchant ID</th>
          <th>Email</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      { 
        merchants.length > 0 && merchants.map(merchant => (      
          <tr key={merchant.id}>
            <td>{merchant.id}</td>
            <td>{merchant.email}</td>
            <td>{merchant.name}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );

  return (
    <div>
      { merchants ? displayMerchants(merchants) : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add Merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete Merchant</button>
      <br />
    </div>
  );
}

export default App;