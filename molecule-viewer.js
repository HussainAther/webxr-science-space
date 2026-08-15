AFRAME.registerComponent('molecule-viewer', {
  init: function () {
    const el = this.el;
    const loader = new THREE.GLTFLoader();

    loader.load('assets/atp-molecule.glb', function (gltf) {
      gltf.scene.scale.set(0.5, 0.5, 0.5);
      el.setObject3D('mesh', gltf.scene);
    }, undefined, function (error) {
      console.error('Error loading molecule model:', error);
    });

    // Make it draggable/rotatable (simple auto-rotation example)
    this.tick = function (time, timeDelta) {
      if (el.getObject3D('mesh')) {
        el.getObject3D('mesh').rotation.y += 0.002 * timeDelta;
      }
    };
  }
});

