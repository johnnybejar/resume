import * as THREE from "three";
import { useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh
      {...props}
      scale={2.4}
      ref={ref}
      rotation={new THREE.Euler(3, 2, 3, "XZY")}
    >
      <sphereGeometry args={[1, 15, 15]} />
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
