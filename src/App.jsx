import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
    margin: 0;
    min-height: 100vh;
    font-family: 'Montserrat', system-ui, sans-serif;
    color: #fff;
  }
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #e0e0e0;
`;

function BatmobileModel(props) {
  const { scene } = useGLTF('/src/assets/Armored_Night_Cruiser_0530161757_texture.glb')
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Centered>
        <Title>THE BATMOBILE</Title>
        <Subtitle>The armored night cruiser. Legendary. Unstoppable. Yours to explore.</Subtitle>
        <div style={{ width: '100%', maxWidth: 900, height: 500, borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 32px #000a' }}>
          <Canvas camera={{ position: [0, 2, 8], fov: 40 }} shadows>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
            <spotLight position={[-10, 20, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
            <BatmobileModel scale={2.2} position={[0, -1.2, 0]} />
            <Environment preset="night" />
            <OrbitControls enablePan={false} minDistance={6} maxDistance={15} />
            <Html position={[0, -2.2, 0]} center style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #000' }}>
              Drag to rotate
            </Html>
          </Canvas>
        </div>
      </Centered>
    </>
  )
}

export default App

// Preload the model
useGLTF.preload('/src/assets/Armored_Night_Cruiser_0530161757_texture.glb')
