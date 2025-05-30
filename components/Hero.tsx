'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

function BatmobileModel() {
  const { scene } = useGLTF('/models/batmobile.glb')
  return <primitive object={scene} scale={2.2} position={[0, -1.2, 0]} />
}

export default function Hero() {
  return (
    <section className="section-snap h-screen w-full relative flex items-center justify-center">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 2, 8], fov: 40 }}>
          <Suspense fallback={<Html>Loading...</Html>}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <spotLight position={[-10, 20, 10]} angle={0.3} penumbra={1} intensity={1.5} />
            <BatmobileModel />
            <Environment preset="night" />
            <OrbitControls enablePan={false} minDistance={6} maxDistance={15} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-orbitron text-6xl md:text-8xl font-bold mb-4 animate-glow"
        >
          The Batmobile Project
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Designed in 3D. Engineered with Passion.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-neon-blue text-black font-orbitron py-3 px-8 rounded-full hover:bg-white transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore
        </motion.button>
      </div>
    </section>
  )
}