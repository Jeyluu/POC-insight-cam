import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Camera from './components/camera/Camera'

function App() {
  const toto = import.meta.env.USEAPI_TOKEN
  console.log(toto)
  const rootFaceSwap = 'https://api.useapi.net/v1/faceswap'

  return (
    <>
      <Camera />
      <div style={{ marginTop: '150px' }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1></h1>
      <div className="card"></div>
    </>
  )
}

export default App
