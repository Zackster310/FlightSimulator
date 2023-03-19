//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});


AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: {type: "number", default: 0}    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation")
      var planeRot = this.data.speedOfRotation

      this.data.speedOfAscent = this.el.getAttribute("position")
      var planePos = this.data.speedOfAscent

      if (e.key === "ArrowRight") {
        if (planeRot.x < 10) {
          planeRot.x += 0.5;
          this.data.setAttribute("rotation", planeRot)
        }
      }

      if (e.key === "ArrowLeft") {
        if (planeRot.x > -10) {
          planeRot.x -= 0.5;
          this.data.setAttribute("rotation", planeRot)
        }
      }


      if (e.key === "ArrowUp") {
        if (planeRot.z < 20) {
          planeRot.z += 0.5;
          this.data.setAttribute("rotation", planeRot)
        }
        if (planePos.y < 2) {
          planeRot.y += 0.01;
          this.data.setAttribute("position", planeRot)
        }
      }

      if (e.key === "ArrowDown") {
        if (planeRot.z > -10) {
          planeRot.z -= 0.5;
          this.data.setAttribute("rotation", planeRot)
        }
        if (planePos.y > -2) {
          planeRot.y -= 0.01;
          this.data.setAttribute("position", planeRot)
        }
      }
    })
  }
})



