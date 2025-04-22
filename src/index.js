import {useState} from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


function  Changename(){

  var[myname, setmyname] = useState("santhiya")


  function change(){

    setmyname("sandy")
  }
  


return (
  <div>
    <h1>{myname}</h1>
    <button onClick={change}>change</button>
  </div>
)
}

root.render(<Changename></Changename>)