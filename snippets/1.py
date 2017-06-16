for i in range (0,4):
    maze.down()
    print(maze.get_current_position())
for i in range (0,2):
    maze.right()
for i in range (0,2):
    maze.down()
for i in range (0,8):
    maze.right()
for i in range (0,4):
    maze.down()
    print(maze.get_current_position())
print(maze.is_maze_solved())
