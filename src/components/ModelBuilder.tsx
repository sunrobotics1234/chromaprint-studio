import { useRef, useState, useCallback } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { ShapeToolbar } from "./ShapeToolbar";

interface Shape {
  id: string;
  type: 'cube' | 'sphere' | 'cylinder';
  position: [number, number, number];
  color: string;
}

interface InteractiveShapeProps {
  shape: Shape;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const InteractiveShape = ({ shape, isSelected, onSelect }: InteractiveShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(shape.id);
  };

  const scale = isSelected ? 1.1 : hovered ? 1.05 : 1;

  return (
    <mesh
      ref={meshRef}
      position={shape.position}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
    >
      {shape.type === 'cube' && <boxGeometry args={[1, 1, 1]} />}
      {shape.type === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
      {shape.type === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
      <meshStandardMaterial
        color={isSelected ? "#8b5cf6" : shape.color}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
};

export const ModelBuilder = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);

  const getRandomPosition = (): [number, number, number] => {
    return [
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
    ];
  };

  const handleAddShape = useCallback((type: 'cube' | 'sphere' | 'cylinder') => {
    const newShape: Shape = {
      id: `${type}-${Date.now()}`,
      type,
      position: getRandomPosition(),
      color: "#d97556",
    };
    setShapes(prev => [...prev, newShape]);
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (selectedShapeId) {
      setShapes(prev => prev.filter(s => s.id !== selectedShapeId));
      setSelectedShapeId(null);
    }
  }, [selectedShapeId]);

  const handleClear = useCallback(() => {
    setShapes([]);
    setSelectedShapeId(null);
  }, []);

  const handleCanvasClick = () => {
    setSelectedShapeId(null);
  };

  return (
    <div className="space-y-4">
      <ShapeToolbar
        onAddShape={handleAddShape}
        onDeleteSelected={handleDeleteSelected}
        onClear={handleClear}
        selectedShape={selectedShapeId}
      />
      
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-soft bg-muted/50">
        <Canvas onClick={handleCanvasClick}>
          <PerspectiveCamera makeDefault position={[5, 5, 5]} />
          <OrbitControls enableZoom={true} enablePan={true} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          
          {shapes.map((shape) => (
            <InteractiveShape
              key={shape.id}
              shape={shape}
              isSelected={shape.id === selectedShapeId}
              onSelect={setSelectedShapeId}
            />
          ))}
          
          <gridHelper args={[10, 10, "#d97556", "#e8c4b4"]} />
        </Canvas>
      </div>
    </div>
  );
};
