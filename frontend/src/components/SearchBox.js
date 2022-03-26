import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

// const SearchBox = ({ history }) => {
const SearchBox = () => {
  let navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate.push(`/search/${keyword}`)
    } else {
      navigate.push('/')
    }
  }

  return (
    // <Form onSubmit={submitHandler} inline>
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
