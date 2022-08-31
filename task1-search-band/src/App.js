import SearchOptions from './searchOptions';
import {useState } from 'react';
import './css/App.css';
import {getData} from './service/getData';

export default function App() {
  const [initElements, setElements] = useState(['A', 'B', 'C', 'D', 'E']);

  async function LoadElements(band) {
    let data = await getData(band);
    setElements(initElements.concat(data))
    console.log(data);
  }

  return (  
    <div className="App" >
      <input id='form' type='text' onChange={(e)=>LoadElements(e.target.value)} placeholder="Search Band" />
      <SearchOptions initElements={initElements} setElements={setElements}/>
    </div>
  );
}
