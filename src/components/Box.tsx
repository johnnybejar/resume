import * as THREE from "three";
import { useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
    }
  });
  return (
    <mesh
      {...props}
      scale={2.4}
      ref={ref as React.RefObject<THREE.Mesh<THREE.BufferGeometry>>}
      rotation={new THREE.Euler(3, 2, 3, "XZY")}
    >
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial
        color={0x606060}
        roughness={1}
        metalness={0.55}
        wireframe={true}
      />
    </mesh>
  );
}

export default Box;
