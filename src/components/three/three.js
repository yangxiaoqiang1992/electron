  import React, { Component } from 'react'
  import * as THREE from 'three'
  import '@static/css/common/three.css'
  export default class Three extends Component {
    constructor(scene,camera,renderer,props){
      super(props)
      this.scene = scene
      this.camera = camera
      this.renderer = renderer
    }
    initThree(){
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize( window.innerWidth, window.innerHeight )
      document.getElementById('three-scene').append(this.renderer.domElement) 
    }
    componentDidMount(){
      this.initThree()
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var cube = new THREE.Mesh( geometry, material );
      this.scene.add( cube );
      this.camera.position.z = 5;
   
			var animate = ()=> {
				requestAnimationFrame( animate );
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				this.renderer.render( this.scene, this.camera );
			};
			animate();
      console.log(this.scene)
    }
    render() {
      return (
        <div id="three-scene">
          
        </div>
      )
    }
  }
  