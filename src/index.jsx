import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas className={"r3f"} >
      <color attach={"background"} args={["#191919"]} />
      <Environment preset={"city"} />
      <Experience />
      <ContactShadows 
        position-y={ -1.4 } 
        opacity={ 0.4 } 
        scale={ 5 } 
        blur={ 2.4 } 
      />
    </Canvas>
  </React.StrictMode>,
)
