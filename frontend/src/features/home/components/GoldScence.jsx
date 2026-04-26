import { useGLTF } from '@react-three/drei';

function GoldScence() {
  const { scene } = useGLTF("public/models/gold.glb");
  return <primitive object={scene} scale={1} />;
}
 export default GoldScence