import React from 'react';
import { Data } from './data'; // Adjust the path as necessary
function DummyComponent() {
  return (
    <div className='container'>
        <div className='row'>
        {Data.map(item => (
        <div key={item.title} className=" colomn-row col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm"></div>
          <div key={item.id}>
            <img src={item.image} className='imge'/>
            <div>
              <strong>{item.name}</strong>
              <p>({item.category})</p> 
                <p>{item.price} per {item.unit}</p>
            </div>
          </div>
        </div>
        ))}
        </div>
    </div>
  );
}

export default DummyComponent;
