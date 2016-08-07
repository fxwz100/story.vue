# Story game-in-vue

This is a picture&text-based AVG/GAL game written simply in Vue.js . It is to show the power of Vue.js and demo that a AVG/GAL game could be built simply using Vue.js .

## Try a demo?

Please visit http://yfwz100.github.io/story-game-in-vue for a demo.

## Customized yours?

The demo has been shown the ability to build a full game as you can see. What you need to do is to write scripts like files on `assets/scene/*/scripts.json`. The script is based on JSON structure, it's a list of frame objects. In the frame object, there're several types:

 - **menu** frame for different scene of option choices.
 - **dialog** frame for text-based dialog.
 - **cover** frame to show the cover of sections.

The **menu** frame has a title property to show the title and has a list-based property named `menu` which defines the menu options and related actions. The menu action is a command-like mini language. The whole command is delimited by space. The first part is the command(next/goto) and the parameters are followed in the siblings parts.

The **dialog** frame has a list-based property named `content` which contains the dialog scripts. You can adjust the dialog to show your story. 

The **cover** frame has two property: the `title` and `description` which are the meaning of its name. The extra `action` property is defined like `action` defined in menu options.

# About

Program Author: Zhi.

License: MIT License with exception for the assests used in the demo.

The assets used in the demo is owned by [286Studio](http://www.286studio.com/).
