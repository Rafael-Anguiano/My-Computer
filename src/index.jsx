import './index.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <Canvas
      className="r3f"
      camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ -3, 1.5, 4 ]
      } }
  >
      <Experience />
  </Canvas>
)