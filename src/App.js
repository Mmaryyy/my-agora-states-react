import './App.css';
import './global__style.css'
import './index.css'

import Form from './components/form.js'
import Discussions from './components/discussions';
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [ discussions, setDiscussions ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data)
      })
  }, [])

  return (
    <Fragment>
      <BrowserRouter>
        <main>
          <Form />
          <Discussions discussions={discussions}/>
        </main>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
