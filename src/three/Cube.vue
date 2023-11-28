<template>
  <div ref="canvasWrapper"></div>
</template>

<script setup lang="ts" name="Cube">
import { ref, onMounted } from 'vue';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const canvasWrapper = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (canvasWrapper.value) {
    // 创建 Three.js 场景
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasWrapper.value.appendChild(renderer.domElement);

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
});
</script>

<style>
/* 添加样式，可根据需要进行调整 */
#canvasWrapper {
  width: 100%;
  height: 100%;
}
</style>
