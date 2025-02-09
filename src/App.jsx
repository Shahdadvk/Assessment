import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Add Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App