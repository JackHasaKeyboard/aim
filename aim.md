# AIM

AIM is a GUI interface to editing SVG, Scalable Vector Graphic.
Anything you can do with SVG, you can do with AIM.

### SVG

| Letter | Command                         | 
|--------|---------------------------------| 
| M      | moveto                          | 
| L      | lineto                          | 
| H      | horizontal lineto               | 
| V      | vertical lineto                 | 
| C      | curveto                         | 
| S      | smooth curveto                  | 
| Q      | quadratic Bézier curve          | 
| T      | smooth quadratic Bézier curveto | 
| A      | elliptical Arc                  | 
| Z      | closepath                       | 

### Hotkeys
Down:
Shift - Incrementor = 100
Ctrl - Incrementor = 1

Up:
Incrementor = 10

#### Mode
. - Point mode
- - Line mode

Esc - Escape to object mode

#### Modifier
Shift - Extreme incrementor (100)
Ctrl - Minimal incrementor (1)

(Keyup) - Return to normal incrementor

#### Navigation
j - Move cursor
,x - x axis
,y - x axis
,,<no> - Position

#### Transform
Primitives (boilerplate SVGs) are stored and loaded in cfg/prim

Colors are stored in cfg/colors.json. Provide a name and a corresponding color

#### General
Writing an SVG sticks it in a folder, and this can be opened and worked on at any time
