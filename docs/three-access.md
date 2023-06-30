# Using three.js directly

The global variable for three is `window.THREE`

Given the following markup...

```html
<rl-scene id="myScene">
    <rl-camera><rl-reticle /></rl-camera>
    <rl-obj id="myObj"></rl-obj>
</rl-scene>
```

... you can access original three objects like so

```js
//get elements from DOM
const sceneEl = document.getElementById('myScene');
const myObjEl = document.getElementById('myObj');

//three objects
let Scene = sceneEl.object3D;
const Camera = sceneEl.camera;
const Renderer = sceneEl.renderer;
const canvas = sceneEl.canvas;

const myObject3D = myObjEl.object3D;
//another way to get scene
Scene = myObjEl.sceneEl.object3D;

//traversing
const parentEl = myObjEl.parentEl;
const childrenEls = myObjEl.children;
const siblingEls = parentEl.children;
```