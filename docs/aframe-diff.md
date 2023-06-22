3RL fork of aframe/master
Changelog since Oct 04, 2020
---------------------------------------------

The purpose of this fork is to focus on desktop UX and performance on integrated graphics, with customization available for high-end GPUs. Additionally, this will perform better with reactive-DOM libaries.<br><br>
⚠️ All VR/AR functionality has been removed.

---------------------------------------------
New Features:

Added physics/controls
- jetpack and gravity, plus configs for floor/ceiling (y) invisible walls
- config for x/z invisible walls
- "no-go" directive: collision-detectable cylinders that are very lightweight on CPUs
- invert mouse Y setting
- look sensitivity setting
- movement speed setting
- option to remember user position/rotation on future visits
- moveTo function allows user to fast travel (e.g. right-click floor interactor)

Added graphics settings
- antialiasing: None / FXAA (default) / MSAA
- shadows: Off / On (default)
- "if-shadows-enabled" and "if-shadows-disabled" directives
    - change lighting and assets based on the user's shadows setting

Embeddable HTML with `ax-html` and `ax-iframe-tab`

Declarative reticle-object interactions and keybindings

Intuitive video playback system
- image thumbnail option
- play button on hover
- the currently-playing video is paused if the users clicks play on another video
- the currently-playing video is paused if the user exits the scene
- customizable border width and color

Image links
- click to open url in new tab
- customizable border and hover-border colors

---------------------------------------------

Performance Improvements

GPU
- on-demand frame rendering (Aframe renders every frame regardless of whether there is a diff)
- on-demand shadowmap updating (Aframe updates the shadowmap with every frame regardless of whether it has changed)
- HDR environments, with the option to apply envmaps at the object level instead of the whole scene.

CPU
- streamlined reticle/raycasting system
- removed redundant per-frame calculations
- removed circular dependencies
- refactored to latest ECMAScript best practices
- removed unnecessary dependencies and optimized initial compile time

Memory
- improved memory cleanup (independent of GC) when objects or scenes are detached

---------------------------------------------

Limitations compared to aframevr
- Removed all VR/AR-related features and touch functionality
- User is limited to keyboard + mouse (pointer lock) controls
- Removed polyhedrons, links, pooling, and fog components
- Remove pre-loading system for assets. They are downloaded async based on reactive DOM
