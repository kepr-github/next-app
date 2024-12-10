'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const PointCloudPage = () => {

  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1️⃣ Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Set renderer size to match the window size
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 2️⃣ Add OrbitControls for rotation, zooming, and panning
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth the movement
    // controls.dampingFactor = 0.05; // Damping inertia
    // controls.screenSpacePanning = true; // Allow panning
    // controls.minDistance = 0.01; // Set min zoom distance
    // controls.maxDistance = 50; // Set max zoom distance
    controls.target.set(0, 0.7, 0); // カメラが注視するポイント

    // 3️⃣ Load the PLY file with colors
    const loader = new PLYLoader();
    loader.load('/sample.ply', (geometry) => {
      // 4️⃣ Ensure vertex normals and vertex colors are computed
      geometry.computeVertexNormals(); 

      // Create a PointsMaterial with vertex colors enabled
      const pointsMaterial = new THREE.PointsMaterial({
        vertexColors: true, // Use color information from the PLY file
        size: 0.001, // Increase the point size for better visibility
      });

      const pointCloud = new THREE.Points(geometry, pointsMaterial);
      pointCloud.scale.set(1, 1, 1); // 全体を2倍に拡大
      scene.add(pointCloud);
    }, 
    (xhr) => {
      console.log(`Loading PLY: ${(xhr.loaded / xhr.total) * 100}% complete`);
    }, 
    (error) => {
      console.error('An error occurred while loading the PLY file', error);
    });

    // 5️⃣ Set the camera position
    camera.position.set(0.1, 0.9, 0.1); // Set initial camera position


    // 6️⃣ Window resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // // 7️⃣ **座標軸 (AxesHelper) の追加**
    // const axesHelper = new THREE.AxesHelper(1); // 引数はサイズ (1なら標準サイズ)
    // scene.add(axesHelper); // シーンに追加

    // 7️⃣ Animation loop to render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls for smooth movement
      renderer.render(scene, camera);
    };

    animate();

    // 8️⃣ Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* タイトルと説明エリア */}
      <div className="absolute top-0 w-full p-6 bg-black/70 text-white flex flex-col items-center z-10 shadow-md">
        <h1 className="text-3xl font-bold mb-3">3D点群の可視化</h1>
        <p className="text-base text-center">
          このページでは、PLYファイルから読み込んだ3D点群を表示します。<br />
          点群はマウスのドラッグで回転させたり、ズームイン・ズームアウトしたりできます。
        </p>
      </div>

      {/* 3D点群の表示エリア */}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};


export default PointCloudPage;