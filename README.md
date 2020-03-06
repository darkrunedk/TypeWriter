# TypeWriter
A little javascript object that let's you write text letter by letter like someone is typing it.

## How to use it
At the moment it supports following methods:
- AddLine
- SetLetterWriteTime
- SetCallback
- Init

### AddLine
AddLine takes 2 parameters, the first one is the text. The second one is a color code, that will change the color of that specific line (this is optional).

### SetLetterWriteTime
SetLetterWriteTime can be used to set the time it will take to write each letter. This can be set in ms or you can use "simulation", which will try to simulate a random speed to make it look a bit more realistic.

### SetCallback
SetCallback can be used to set a callback function, which is called after it has completed all queued lines.

### Init
Init is used to initialize/start the typewriter. It takes 1 parameter, which is the element where it will try to output all the lines.

You can access the typewriter using the typewriter object, which should simply be called **TypeWriter**.

## Demo
You can download the 2 files (index.html and /js/TypeWriter.js) and test it out.
