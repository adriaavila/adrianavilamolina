"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function StudioScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.55, 2),
      new THREE.MeshBasicMaterial({
        color: "#72f6ff",
        wireframe: true,
        transparent: true,
        opacity: 0.42,
      }),
    );
    rootGroup.add(shell);

    const core = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.72, 0.18, 220, 28),
      new THREE.MeshBasicMaterial({
        color: "#b6fbff",
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    );
    core.rotation.x = 0.8;
    core.rotation.y = 0.2;
    rootGroup.add(core);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(1.95, 2.04, 96),
      new THREE.MeshBasicMaterial({
        color: "#72f6ff",
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.18,
      }),
    );
    halo.rotation.x = Math.PI / 2.2;
    halo.position.y = -0.2;
    scene.add(halo);

    const particleCount = 900;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.5 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const offset = index * 3;

      positions[offset] = radius * Math.sin(phi) * Math.cos(theta);
      positions[offset + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[offset + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#dffeff",
        size: 0.028,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      }),
    );
    scene.add(particles);

    const beams = new THREE.Group();

    for (let index = 0; index < 4; index += 1) {
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, 7.2, 8),
        new THREE.MeshBasicMaterial({
          color: index % 2 === 0 ? "#72f6ff" : "#ffffff",
          transparent: true,
          opacity: index % 2 === 0 ? 0.13 : 0.08,
        }),
      );

      beam.rotation.z = Math.PI / 2.6 + index * 0.34;
      beam.rotation.x = 0.48 + index * 0.07;
      beam.position.set(
        (index - 1.5) * 0.22,
        index % 2 === 0 ? 0.6 : -0.4,
        -0.4 + index * 0.18,
      );
      beams.add(beam);
    }

    scene.add(beams);

    const pointer = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      const relativeY = (event.clientY - bounds.top) / bounds.height;

      pointer.x = (relativeX - 0.5) * 1.1;
      pointer.y = (relativeY - 0.5) * 1.1;
    };

    const handleResize = () => {
      if (!container) {
        return;
      }

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    container.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const startedAt = performance.now();
    let frameId = 0;

    const render = () => {
      const elapsed = (performance.now() - startedAt) / 1000;
      const pace = prefersReducedMotion ? 0.35 : 1;

      rootGroup.rotation.y = elapsed * 0.22 * pace + pointer.x * 0.28;
      rootGroup.rotation.x =
        Math.sin(elapsed * 0.3 * pace) * 0.18 + pointer.y * 0.18;
      rootGroup.position.y = Math.sin(elapsed * 0.8 * pace) * 0.08;

      core.rotation.z = elapsed * 0.35 * pace;
      shell.rotation.z = -elapsed * 0.08 * pace;
      particles.rotation.y = -elapsed * 0.04 * pace;
      particles.rotation.x = elapsed * 0.03 * pace;
      halo.rotation.z = elapsed * 0.16 * pace;
      beams.rotation.z = elapsed * 0.06 * pace;

      camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.04;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);

      particleGeometry.dispose();
      renderer.dispose();
      shell.geometry.dispose();
      core.geometry.dispose();
      halo.geometry.dispose();

      if (shell.material instanceof THREE.Material) {
        shell.material.dispose();
      }

      if (core.material instanceof THREE.Material) {
        core.material.dispose();
      }

      if (halo.material instanceof THREE.Material) {
        halo.material.dispose();
      }

      beams.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();

          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        }
      });

      if (particles.material instanceof THREE.Material) {
        particles.material.dispose();
      }

      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-100"
      aria-hidden="true"
    />
  );
}
