import React, {useEffect, useState} from 'react';
import Heading from './Heading'

const App = () => {
  const [heading, setHeading] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeading('Hello World')
    }, 3000)
    
    return () => {
      clearTimeout(timeout)
    }

  },[])

  return(
    <div>
      <Heading heading={heading} />
    </div>
  )
}

export default App;