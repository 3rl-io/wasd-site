## Interactors

Each tag based on ax-obj (gltfs, shapes, videos, and images) can have an interactor directive.

`<ax-obj interactor></ax-obj>`

Using it adds event firing for reticleenter, reticleleave, click, rightclick, and middleclick.
These events include intersection data from the reticle raycast.

Additionally it comes with these optional configs, which can be modified like

`<ax-obj interactor="fastTravel: 30; range: 100; hideReticle: true"></ax-obj>`

fastTravel (int)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right click to zoom to a certain distance from the object.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 0 (disabled)

range (int)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maximum range to fire events<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 0 (fires events from any range)

hideReticle (boolean)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether to hide reticle on hover<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to false

## Keybindings

keyBindings (string)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comma-delimited list of letters and numbers, excluding W,A,S,D<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to none

`<ax-obj interactor="keyBindings:1,Q,E"></ax-obj>`

This will create the new events press1, pressQ, and pressE that also return intersection data when those keys are pressed.

### Reserved keys

During pointer lock, the W, A, S, D, Spacebar, Left Shift, and Enter keys should be considered reserved<br><br>
Outside of pointer lock, Left Shift and Enter keys should be considered reserved when `document.activeElement.tagName === 'BODY'`
