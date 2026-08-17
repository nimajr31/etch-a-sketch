# Etch-A-Sketch!

## Idea
- Creating a webpage with a 16x16 grid of square divs
    - Inserting the divs using JS and not hardcoding into HTML
    - Use Flexbox to make them look like grid
    - Not using CSS grid

- Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would

- Button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad
    - Limit to user input is going to be 100 to prevent computer slowing down
    - Checking out prompts

- Add a some sort of welcome message at the top of the screen

## Extras
- Implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
- Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction