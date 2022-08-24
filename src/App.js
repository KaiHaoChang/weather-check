import {useState, useEffect} from 'react'
import './styles/style.css'

import Navbars from './components/Navbars'
import Form from './components/Form'
import Display from './components/Display'

function App() {

  const [language, setLanguage] = useState(false)
  const [city, setCity] = useState('taipei')
  const [cityData, setCityData] = useState({})

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city.toLowerCase()}&format=json&u=f`, options)
      const data = await response.json()
      // if (data.message === 'Internal Server Error') {
      //   setCityData('Taipei')
      //   alert('請輸入有效城市')
      //   return
      // }
      setCityData(data)
    }
    getData()
  }, [])
  

  return (
    <div className="App">
      <div>
        <Navbars language={language} setLanguage={setLanguage} />
        <Form language={language} city={city} setCity={setCity} options={options} setCityData={setCityData}/>
        <Display language={language} options={options} city={city} cityData={cityData} setCityData={setCityData}/>
      </div>
      <div style={{ height:'150px', background:'#212529', marginTop:'1rem'}}></div>
    </div>
  );
}

export default App;
