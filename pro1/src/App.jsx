import { useEffect, useState } from 'react';
import Card from './card';
import './App.css';

const App = () => {

  const [title,setTitle] = useState('');
  const [hdurl,setHdurl] = useState('');
  const [explanation,setExplanation] = useState('');
  const [date,setDate] = useState('');
  const [sdate,setSdate] = useState('');
  useEffect(()=>{
    get()
  },[]);

  async function get() {

    let api='https://api.nasa.gov/planetary/apod?api_key=gQRmswSoLDdXoOEG5f3RXRg9BybPmcMisuGoav4d&hd=True';
    if (sdate) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      const currentdate = new Date();
      
      if (!datePattern.test(sdate)) {
        setSdate('');
        alert('Please enter a valid date in the format YYYY-MM-DD!');
      } else {
        const checkdate = new Date(sdate);
        if (isNaN(checkdate.getTime()) || checkdate > currentdate) {
          setSdate('');
          alert('Enter a valid date!');
        }else{
          api=`https://api.nasa.gov/planetary/apod?api_key=gQRmswSoLDdXoOEG5f3RXRg9BybPmcMisuGoav4d&date=${sdate}&hd=True`;
        }
      }
    }

    const result = await fetch(api);
    const response = await result.json();
    setHdurl(response.hdurl);
    setExplanation(response.explanation);
    setTitle(response.title);
    setDate(response.date)
  }

  return (
    <>
    <div className='top-bar'>
      <input type="text" value={sdate} placeholder='search for a date ( YYYY-MM-DD )' onChange={(e)=>
        {setSdate(e.target.value)}
      } />
      <button onClick={get}>Get picture</button>
    </div>
    <Card title={title} src={hdurl} desc={explanation} date={date}/>
    </>
  )
}
export default App;