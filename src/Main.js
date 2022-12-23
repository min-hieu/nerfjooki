import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useProgress,
  useGLTF,
  OrbitControls,
} from '@react-three/drei';
import './styles/Main.css';

function Loader() {
  const { progress } = useProgress()
  return (
    <div className='pbarCon'>
      <div className='pbar'>
        {Math.floor(progress)}% loaded
      </div >
    </div >
  )
}

const Nerfjooki = () => {
  const gltf = useGLTF('/nerfjooki.gltf', true);
  return (
    <primitive object={gltf.scene} />
  )
}

const Main = () => {
  return (
    <div className="Main">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, -0.5] }}
        >
          <OrbitControls autoRotate/>
          <ambientLight />
          <Nerfjooki />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Main;
