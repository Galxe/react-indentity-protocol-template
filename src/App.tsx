
import reactLogo from './assets/react.svg'
import Galxe from './assets/galxe.png'
import viteLogo from '/vite.svg'
import * as sdk from '@galxe-identity-protocol/sdk'
import './App.css'
import { useState } from 'react'



function App() {
  const [identityCommitment, setIdentityCommitment] = useState('')
  const handleGenerateIdentityCommitment = async () => {
    const { prepare } = sdk.babyzk
    await prepare()
    const { User } = sdk.user
    const u = new User()
    const identitySlice = u.createNewIdentitySlice('galxe')
    const identityCommitment = User.computeIdentityCommitment(identitySlice)
    setIdentityCommitment(identityCommitment.toString())
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.galxe.com/identity" target="_blank">
          <img src={Galxe} className="logo react" alt="Galxe logo" />
        </a>
      </div>
      <h1>Vite + React + Galxe Identity Protocol</h1>
      <div className="card">
        <button onClick={() => handleGenerateIdentityCommitment()}>
          Generate identity commitment
        </button>
        <div className='identity-commitment'>{identityCommitment}</div>
      </div>
    </>
  )
}

export default App
