# Graphics/controls/UX settings
Saved per-user in localStorage. Get and set via window.axis.settings.

E.g. `window.axis.settings.shadows = false`

## Graphics
aa (int)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anti-Aliasing - 0 (off), 1 (FXAA), 2 (MSAA)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Requires refresh to take effect<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 1 (FXAA)

shadows (boolean)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turns shadows on/off<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toggles objects with if-shadows-enabled and if-shadows-disabled directives<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to true

## Controls
gravity (int)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 (off), 1 (on)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If on, spacebar to jetpack<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If off, spacebar to ascend, X to descend<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 1 (on)

invertY (boolean)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y look invert<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;false (disabled), true (enabled)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to false

sensitivtyX, sensitivityY (floats)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Look sensitivity for mouse movement<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Both default to 1

speedMultiplier (float)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WASD walk speed<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 5
## UX
inactivityTimeout (int)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of seconds to exit pointerlock when no activity is detected<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 60

rememberPosition (boolean)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's position and camera rotation are stored for their next visit<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defaults to false