import './style.css'

import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { DirectionalLight, Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"

let header_text = document.querySelector(".header-text")
let header_img = document.querySelector(".header-img")

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let translate = value * 0.9
    if (translate > 500) {
        translate = 500
    }
    let scale = 1 + value * 0.0002
    if (scale < 1) {
        scale = 1
    }
    if (scale > 1.1) {
        scale = 1.1
    }
    let opacity = 300 / value -1
    if (opacity < 0) {
        opacity = 0
    }
    if (opacity > 1) {
        opacity = 1
    }
    console.log(value)
    header_img.style.transform = "translateY(" + translate + "px)" + " scale(" + scale + ")"
    header_text.style.transform = "scale(" + scale + ")"

    header_img.style.opacity = opacity
    header_text.style.opacity = opacity
})

let container = document.getElementById("model-one-view")
let container2 = document.getElementById("model-two-view")
let container3 = document.getElementById("model-three-view")
let container4 = document.getElementById("model-four-view")

function init() {
    let gltfloader = new GLTFLoader();
    let dracoloader = new DRACOLoader();
    dracoloader.setDecoderPath("/draco/")
    gltfloader.setDRACOLoader(dracoloader)









    const renderer = new THREE.WebGLRenderer({antialias: true})
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set( 1, 2, 3 );
    const rgbeLoader = new RGBELoader()

    let ambient = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambient);

    let crossbow

    rgbeLoader.load("../img/abandoned_slipway_4k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.environment = texture;

        gltfloader.load("/models/crossbow_scene.glb", function ( gltf ) {
            const model = gltf.scene
            scene.add(model)
            crossbow = model
        },)
    })


    
    scene.background = new THREE.Color(0x222222)
    scene.fog = new THREE.Fog(0x222222, 1, 15)
    
    
    renderer.physicallyCorrectLights = true;
    renderer.setClearColor( 0xcccccc );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(container.clientHeight, container.clientWidth)
    container.appendChild(renderer.domElement)

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    controls.minDistance =1
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.target.set(0, 1, 0)

    function animate() {
        requestAnimationFrame(animate)
        if (container.clientWidth > 0 && container.clientHeight > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( container.clientWidth, container.clientHeight );
            controls.update()
            renderer.render(scene, camera)
        }
    }
    animate()









    const renderer2 = new THREE.WebGLRenderer({antialias: true})
    const scene2 = new THREE.Scene()
    const camera2 = new THREE.PerspectiveCamera(50, container2.clientWidth / container2.clientHeight, 0.1, 1000)
    camera2.position.set( 1, 2, 3 );
    const rgbeLoader2 = new RGBELoader()

    let ambient2 = new THREE.AmbientLight(0xffffff, 0.3)
    scene2.add(ambient2);

    let crossbow2

    rgbeLoader2.load("../img/abandoned_slipway_4k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene2.environment = texture;

        gltfloader.load("/models/crossbow_scene.glb", function ( gltf ) {
            const model = gltf.scene
            scene2.add(model)
            crossbow2 = model
        },)
    })


    
    scene2.background = new THREE.Color(0x222222)
    scene2.fog = new THREE.Fog(0x222222, 1, 15)
    
    
    renderer2.physicallyCorrectLights = true;
    renderer2.setClearColor( 0xcccccc );
    renderer2.outputEncoding = THREE.sRGBEncoding;
    renderer2.toneMapping = THREE.ACESFilmicToneMapping;
    renderer2.toneMappingExposure = 1.8;
    renderer2.shadowMap.enabled = true
    renderer2.shadowMap.type = THREE.PCFSoftShadowMap
    renderer2.setSize(container2.clientHeight, container2.clientWidth)
    container2.appendChild(renderer2.domElement)

    let controls2 = new OrbitControls(camera2, renderer2.domElement);
    controls2.update();
    controls2.minDistance =1
    controls2.enableDamping = true
    controls2.enablePan = false
    controls2.enableZoom = false
    controls2.autoRotate = true
    controls2.autoRotateSpeed = 0.5
    controls2.target.set(0, 1, 0)









    const renderer3 = new THREE.WebGLRenderer({antialias: true})
    const scene3 = new THREE.Scene()
    const camera3 = new THREE.PerspectiveCamera(50, container3.clientWidth / container3.clientHeight, 0.1, 1000)
    camera3.position.set( 1, 2, 3 );
    const rgbeLoader3 = new RGBELoader()

    let ambient3 = new THREE.AmbientLight(0xffffff, 0.3)
    scene3.add(ambient3);

    let crossbow3

    rgbeLoader3.load("../img/abandoned_slipway_4k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene3.environment = texture;

        gltfloader.load("/models/crossbow_scene.glb", function ( gltf ) {
            const model = gltf.scene
            scene3.add(model)
            crossbow3 = model
        },)
    })


    
    scene3.background = new THREE.Color(0x222222)
    scene3.fog = new THREE.Fog(0x222222, 1, 15)
    
    
    renderer3.physicallyCorrectLights = true;
    renderer3.setClearColor( 0xcccccc );
    renderer3.outputEncoding = THREE.sRGBEncoding;
    renderer3.toneMapping = THREE.ACESFilmicToneMapping;
    renderer3.toneMappingExposure = 1.8;
    renderer3.shadowMap.enabled = true
    renderer3.shadowMap.type = THREE.PCFSoftShadowMap
    renderer3.setSize(container3.clientHeight, container3.clientWidth)
    container3.appendChild(renderer3.domElement)

    let controls3 = new OrbitControls(camera3, renderer3.domElement);
    controls3.update();
    controls3.minDistance =1
    controls3.enableDamping = true
    controls3.enablePan = false
    controls3.enableZoom = false
    controls3.autoRotate = true
    controls3.autoRotateSpeed = 0.5
    controls3.target.set(0, 1, 0)









    const renderer4 = new THREE.WebGLRenderer({antialias: true})
    const scene4 = new THREE.Scene()
    const camera4 = new THREE.PerspectiveCamera(50, container4.clientWidth / container4.clientHeight, 0.1, 1000)
    camera4.position.set( 1, 2, 3 );
    const rgbeLoader4 = new RGBELoader()

    let ambient4 = new THREE.AmbientLight(0xffffff, 0.3)
    scene4.add(ambient4);

    let crossbow4

    rgbeLoader4.load("../img/abandoned_slipway_4k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene4.environment = texture;

        gltfloader.load("/models/crossbow_scene.glb", function ( gltf ) {
            const model = gltf.scene
            scene4.add(model)
            crossbow4 = model
        },)
    })


    
    scene4.background = new THREE.Color(0x222222)
    scene4.fog = new THREE.Fog(0x222222, 1, 15)
    
    
    renderer4.physicallyCorrectLights = true;
    renderer4.setClearColor( 0xcccccc );
    renderer4.outputEncoding = THREE.sRGBEncoding;
    renderer4.toneMapping = THREE.ACESFilmicToneMapping;
    renderer4.toneMappingExposure = 1.8;
    renderer4.shadowMap.enabled = true
    renderer4.shadowMap.type = THREE.PCFSoftShadowMap
    renderer4.setSize(container4.clientHeight, container4.clientWidth)
    container4.appendChild(renderer4.domElement)

    let controls4 = new OrbitControls(camera4, renderer4.domElement);
    controls4.update();
    controls4.minDistance =1
    controls4.enableDamping = true
    controls4.enablePan = false
    controls4.enableZoom = false
    controls4.autoRotate = true
    controls4.autoRotateSpeed = 0.5
    controls4.target.set(0, 1, 0)

    function animate() {
        requestAnimationFrame(animate)
        if (container.clientWidth > 0 && container.clientHeight > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( container.clientWidth, container.clientHeight );
            controls.update()
            renderer.render(scene, camera)
        }
        if (container2.clientWidth > 0 && container2.clientHeight > 0) {
            camera2.aspect = container2.clientWidth / container2.clientHeight;
            camera2.updateProjectionMatrix();
            renderer2.setSize( container2.clientWidth, container2.clientHeight );
            controls2.update()
            renderer2.render(scene2, camera2)
        }
        if (container3.clientWidth > 0 && container3.clientHeight > 0) {
            camera3.aspect = container3.clientWidth / container3.clientHeight;
            camera3.updateProjectionMatrix();
            renderer3.setSize( container3.clientWidth, container3.clientHeight );
            controls3.update()
            renderer3.render(scene3, camera3)
        }
        if (container4.clientWidth > 0 && container4.clientHeight > 0) {
            camera4.aspect = container4.clientWidth / container4.clientHeight;
            camera4.updateProjectionMatrix();
            renderer4.setSize( container4.clientWidth, container4.clientHeight );
            controls4.update()
            renderer4.render(scene4, camera4)
        }
    }
    animate()
}

init()
