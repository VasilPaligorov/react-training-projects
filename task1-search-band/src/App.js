import Form from 'react-bootstrap/Form';
import SearchOptions from './searchOptions';
import {useState } from 'react';
import './css/App.css'

export default function App() {
  const [initElements, setElements] = useState(['A', 'B', 'C', 'D', 'E']);

  return (
    <div className="App" >
      <Form.Control id='form' type='text' placeholder="Search Band" />
      <SearchOptions initElements={initElements} setElements={setElements}/>
    </div>
  );
}
