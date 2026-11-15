
# Erika Carvalho - Design System

This project was created to train some of my skills with *monorepo with different frameworks* and, also, to facilitate when I decide to create other projects, because I'll be able to use the components from this Design System in any project I want.

The main idea of the project is to easily create components using the following frameworks: 
- React
- Vue
- Svelte
- Pure HTML and CSS


## Used Stack

**Front-end:** HTML, vanilla JS, CSS, React, Svelte, Vue, Vite, Rollup

**Back-end:** Node


## Project structure
The project has the following structure:
- `components` - folder used as initial base for all the components
    - Contains simple html and css files
- `workspaces` - folder with the different workspaces that will use the components from the previous folder
    - If you want to add another framework to this DS, you'll have to create a new workspace
- `handleFiles` - contains the scripts that will sync the files from the *components* with the *workspaces*
- `templates` - in order to translate the html and css files to different frameworks, I create these templates that will be used by the *handleFiles* scripts
- `utils` - each file is a different function that's used in multiple files, mainly by the *handleFiles* scripts
- `constants` - all the variables that are pure strings and are used in more than one place. It helps me to maintain those strings consistent.

### The package.json file
I'd like to point two things on the `package.json` file of the project:
- `workspaces` key - any time you add a new framework to the *workspaces* folder, you'll need to add here too
    - This will make the workspace available for our scripts
- `scripts` key - like any other package.json, the scripts key contains all the scripts that are available in our project, but I'd like to highlight that we can also access our workspaces scripts too. This way, we don't need to change folders to run our workspaces :)

### Scripts
Each workspace has the following scripts:
- `syncFiles` - runs the *handleFiles/addNew/<workspace>* script, wich check if the `src/components` from the workspace has all the components of the root `components` folder
- `dev` - runs *syncFiles* and initialize the workspace
- `updateFiles` - runs the *handleFiles/update/<workspace>* script, wich updates all the `styles` of the components, based on the root `components` folder
- `dev:update` - runs *updateFiles* and initialize the workspace
- `cleanFiles` - runs the *handleFiles/cleanFiles/<workspace>* script, wich deletes the components that exists in the workspace but don't exist in the root `components` folder
- `dev:clean` - runs *cleanFiles* and initialize the workspace

The root `package.json` contains the following scripts for each workspace:
- `start:<workspace>` - runs the *dev* script of the workspace
- `update-style:<workspace>` - runs the *dev:update* script of the workspace
- `clean:<workspace>` - runs the *dev:clean* script of the workspace

And also has the `all` scripts:
- `update:all` - runs the `dev:update` for all the workspaces
- `clean:all` - runs the `dev:clean` for all the workspaces
## Next Steps

This is the list of next steps that I want to do on the DS:

- [ ]   Add storybook to document the components
- [ ]   Add Angular as a workspace
- [ ]   Add tests for each component and also for the scripts
- [ ]   Host
- [ ]   Add CI/CD
- [ ]   Create the components below:
    - [ ]  Input text
    - [ ]  Input date
    - [ ]  Input password
    - [ ]  Input color-picker
    - [ ]  Input number
    - [ ]  Select
    - [ ]  Textarea
    - [ ]  Button
    - [ ]  Form
    - [ ]  Menu
    - [ ]  Tabs
    - [ ]  Link
    - [ ]  Pagination
    - [ ]  Card
    - [ ]  Image
    - [ ]  Icon
    - [ ]  Header
    - [ ]  Accordion
    - [ ]  Modal
    - [ ]  Carousel
    - [ ]  Video
    - [ ]  Audio
    - [ ]  Pie chart
    - [ ]  Bar chart
    - [ ]  Column chart
    - [ ]  Line chart
    - [ ]  Save selected text as a note

## Author

- [@erikacarvalh0](https://www.github.com/erikacarvalh0)

