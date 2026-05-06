import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Avinash' age={18} img='https://images.unsplash.com/photo-1691443297137-68818fe7bce9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Ashutosh' age={20} img='https://images.unsplash.com/photo-1768036479363-0810baba6613?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Sharthak' age={25} img='https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App