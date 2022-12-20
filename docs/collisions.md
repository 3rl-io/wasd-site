## Invisible walls

The scene boundaries are defined as a rectangular prism. These are configured with the camera's movement-controls directive.

`<ax-camera movement-controls="floor:15; ceiling: 200; zBoundary: 250; xBoundary: 250;" position="0 15 0">`

floor: minimum Y value (defaults to 0)

ceiling: maximum Y value (defaults to 100)

xBoundary: absolute value of X-axis walls (defaults to 300)

zBoundary: absolute value of Z-axis walls (defaults to 300)

## Cylinder collisions

no-go directive

`<ax-obj no-go="10"></ax-obj>`

Cylinders that extend infinitely along the Y-axis. Can be used to prevent users from walking into models.

Value is the radius, which defaults to 30. X,Z center coordinates are determined by the position of the object that the directive is attached to.