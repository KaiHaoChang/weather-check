import React, {useState, useEffect} from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'

const Form = ({language, city, setCity, options, setCityData}) => {

  const getData  = async () => {
    const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city.toLowerCase()}&format=json&u=f`, options)
    const data = await response.json()
    if (data.message === 'Internal Server Error') {
      const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=taipei&format=json&u=f`, options)
      const data = await response.json()
      setCityData(data)
      alert('請輸入有效城市名稱')
      return
    }
    setCityData(data)
  }

  const handleSearch = () => {
      if (!city.length) {
        return alert(language?"請輸入有效字源":'please enter a name')
      }
      getData()
      setCity('')
} 

    return (
      <Container>
        <h1>{language?'請輸入一個城市英文名稱～':'Please Enter A City Name'}</h1>
        <Row>
          <Col><input placeholder='Enter a country...' value={city} onChange={e=>setCity(e.target.value)} type="text" style={{width:'100%'}} /></Col>
          <Col><Button onClick={handleSearch} variant='warning'>{language?'查詢':'Search'}</Button></Col>
        </Row>
        
        
      </Container>
    )
}
export default Form