import { useState} from 'react'
import History from './Pages/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Header'>
      
      <History/>
      
    </div>
    
    
    

  )
}

export default App
