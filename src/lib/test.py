from maze import Maze

m = m.Maze()
"""
Rules of the Game:
1. Maze is a square 2D matrix containing coridors(0), walls (1), your avatar (2) and exits (3)
Example:
(1, 1, 3, 1),
(1, 0, 0, 1),
(1, 2, 1, 1),
(1, 1, 0, 1) 
 
2. Maze can have multiple exits, find the nearest
3. Avatar can only move up, down, left, right
4. Get neighbour API call reveals 8 nearest cells by default, where in the middle there is always - 2 value cell - avatar position, example output:
(1,0,3),
(0,2,1),
(1,0,1)
5. Coordinate system start is at left bottom corner, all coordinates given in (x, y) format, coordinates start from 1

At first, it is Start coordinates, otherwise this call gives current location:
m.get_current_location()
Output example: (x, y)

Describe Maze size and exit
m.describe_maze()
Output example: {"maze_size": (10, 10), "exit_coordinates": [(x1, y1), (x2, y2)]}, exit coordinates are ones inside the maze, not walls and on the edge

Get current location available neighbours
m.available_neighbours()
Example output: [(x1, y1), (x2, y2), (x3, y3)] - only points where move by one step is available

Actions
Move: takes coordicates where to move: fails if move is to wall or not to neighbours
m.up(), m.down(), m.left(), m.right()
Example Output: True - if move successful, False - if move not allowed: wall or end of maze

Get full path - gives back saved path of your avatar
m.get_full_path()
Example output:
[(x1, y1), (x2, y2), (x3, y3), (x4, y4)..]

"""
