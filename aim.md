AIM is a GUI interface to editing the SVG (Scalable Vector Graphic) format.
Anything you can do with SVG, you can do with AIM.

### Hotkeys
#### SVG
All of the SVG commands correspond to the respective hotkey. Hit the key to create the path of that type, and depending on the command and its arguments continue to hit that key at different cursor positions to change the attributes.

The `M` and `Z` arguments are added automatically.

<span style="display: flex">
	<span>
	| Key | Position | 
	|-----|----------| 
	| L   | 20,30    | 
	| L   | 90,50    | 
	| L   | 20,50    | 
	</span>

	<span>
	<svg fill="#000">
		<path d="
		M 20,30
		L 90,50
		L 20,50
		Z
		">
		</path>
	</svg>
	</span>

	<span>
	```
	<svg fill="#000">
		<path d="
		M 20,30
		L 90,50
		L 20,50
		Z
		">
		</path>
	</svg>
	```
	</span>
</span>

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

#### Modifier
Down:
| Key   | Effect               | 
|-------|----------------------| 
| Shift | Incrementor = 100    | 
| Ctrl  | Incrementor = 1      | 
|       |                      | 
| Alt   | Direction = Negative | 

Up:
| Key   | Effect               |
|-------|----------------------|
|       | Incrementor = 10     |
|       | Direction = Positive |

#### Mode
| Key | Effect                 |
|-----|------------------------|
| .   | Point mode, next point |
| m   | Move mode              |
|     |                        |
| Esc | Escape to object mode  |

#### Navigation
Move cursor to co-ordinate:
| Key | Axis | Co-ordinate | 
|-----|------|-------------| 
| j   |      |             | 
|     | x    |             | 
|     | y    |             | 
|     |      | <no>        | 

#### General
The `svg` folder contains SVG files, with subsequent folders being used for various purposes.
`prim` contains primitives and `output` contains saved files, but the idea is that they're ultimately the same thing and should you want to create another folder for your own purposes it's all the same.
