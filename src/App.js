import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  const [data, setData] = useState('');
  const calcBtns = [];
  const arrayBtns = [0,1,2,4,5,6,7,8,9,'.',',','%']

  arrayBtns.forEach(item => {
    calcBtns.push(
      <button className='col-3 m-1 btn btn-secondary' onClick = {e => {
        setData(data +e.target.value)
      }}
      value={item}
      key={item}
      >
        {item}
      </button>
    )
  })

  console.log(arrayBtns)

  return (
    <div className="App container m-5 justify-content-center row bg-dark py-5">
      <div className='bg-light m-3 col-11'>{data}</div>
      <div className='col-7 p-0'>{calcBtns}</div>
      <div className='row justify-content-center col-5'>
        <button className='btn btn-warning col-5 m-1' onClick = {e => setData(data + e.target.value)} value='+'>+</button>
        <button className='btn btn-warning col-5 m-1' onClick = {e => setData(data + e.target.value)} value='-'>-</button>
        <button className='btn btn-warning col-5 m-1' onClick = {e => setData(data + e.target.value)} value='*'>*</button>
        <button className='btn btn-warning col-5 m-1' onClick = {e => setData(data + e.target.value)} value='/'>/</button>
        <button className='btn btn-warning col-5 m-1' onClick = {e => {
          try {
            setData(
              String(eval(data)).length > 3 && String(eval(data)).includes('.') ? String(eval(data).toFixed(4)) : String(eval(data))
            );
          }catch(err) {
            console.log(err)
          }
        }} value='='>=

        </button>
      </div>
      <button className='btn btn-danger col-2 my-3 mx-1' onClick={() => setData(data.substr(0,data.length -  1))}>clear</button>
      <button className='btn btn-danger col-2 my-3 mx-1' onClick ={() => setData('')}>AC</button>
    </div>
  );
}
 
export default App;
