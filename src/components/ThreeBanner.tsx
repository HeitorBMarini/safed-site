"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

// Foto real de um treinamento SafeD (Direção Defensiva), auto-hospedada em /public/assets.
// A imagem original combina duas fotos lado a lado; usamos apenas a metade direita
// (carro em manobra evasiva na pista molhada) via recorte de UV.
const PHOTO_SRC = "/assets/direcao-defensiva-banner.jpg"
const PHOTO_HALF_ASPECT = 700 / 529

export default function ThreeBanner() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.045)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0.4, 6.2)
    camera.lookAt(0, 0.2, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0a0a0f, 1)
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1))

    // Partículas de fundo, sutis, para dar profundidade
    const PARTICLE_COUNT = 300
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = -Math.random() * 40 - 2
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x552222,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Foto real do carro em manobra (recorte da metade direita via UV)
    const planeH = 3.4
    const planeW = planeH * PHOTO_HALF_ASPECT
    const photoDisposables: { geometry: THREE.BufferGeometry; material: THREE.Material }[] = []
    let photo: THREE.Mesh | null = null

    const loader = new THREE.TextureLoader()
    loader.load(PHOTO_SRC, (tex) => {
      tex.wrapS = THREE.ClampToEdgeWrapping
      tex.wrapT = THREE.ClampToEdgeWrapping
      tex.repeat.set(0.5, 1)
      tex.offset.set(0.5, 0)
      tex.colorSpace = THREE.SRGBColorSpace

      const geo = new THREE.PlaneGeometry(planeW, planeH)
      const mat = new THREE.MeshBasicMaterial({ map: tex, fog: false })
      photo = new THREE.Mesh(geo, mat)
      scene.add(photo)
      photoDisposables.push({ geometry: geo, material: mat })
    })

    // Moldura HUD nos cantos, estilo "detecção de segurança"
    const frameMat = new THREE.LineBasicMaterial({ color: 0xff3344 })
    const cw = 0.35
    const pad = 0.06
    const hw = planeW / 2 + pad
    const hh = planeH / 2 + pad
    const cornerPoints: [number, number][][] = [
      [[-hw, hh - cw], [-hw, hh], [-hw + cw, hh]],
      [[hw - cw, hh], [hw, hh], [hw, hh - cw]],
      [[-hw, -hh + cw], [-hw, -hh], [-hw + cw, -hh]],
      [[hw - cw, -hh], [hw, -hh], [hw, -hh + cw]],
    ]
    const cornerGeometries: THREE.BufferGeometry[] = []
    const frameGroup = new THREE.Group()
    cornerPoints.forEach((pts) => {
      const geo = new THREE.BufferGeometry().setFromPoints(
        pts.map(([x, y]) => new THREE.Vector3(x, y, 0.01))
      )
      frameGroup.add(new THREE.Line(geo, frameMat))
      cornerGeometries.push(geo)
    })
    scene.add(frameGroup)

    // Linha de varredura (scan line) que percorre a foto
    const scanGeo = new THREE.PlaneGeometry(planeW + 0.4, 0.035)
    const scanMat = new THREE.MeshBasicMaterial({ color: 0xff3344, transparent: true, opacity: 0.8 })
    const scanLine = new THREE.Mesh(scanGeo, scanMat)
    scanLine.position.z = 0.02
    scene.add(scanLine)

    let frameId: number
    let t = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.016

      if (photo) {
        photo.position.y = Math.sin(t * 0.8) * 0.06
        photo.rotation.y = Math.sin(t * 0.5) * 0.04
        frameGroup.position.y = photo.position.y
        frameGroup.rotation.y = photo.rotation.y
      }

      scanLine.position.y = Math.sin(t * 0.9) * (planeH / 2)
      scanMat.opacity = 0.5 + Math.sin(t * 3) * 0.2

      const posAttr = particleGeo.attributes.position.array as Float32Array
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        posAttr[i * 3 + 2] += 0.05
        if (posAttr[i * 3 + 2] > 6) posAttr[i * 3 + 2] = -40
      }
      particleGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameId)

      particleGeo.dispose()
      particleMat.dispose()
      frameMat.dispose()
      cornerGeometries.forEach((g) => g.dispose())
      scanGeo.dispose()
      scanMat.dispose()
      photoDisposables.forEach(({ geometry, material }) => {
        geometry.dispose()
        material.dispose()
      })

      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
