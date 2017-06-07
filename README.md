# personalnesbox

/*description will go here later*/

## Instructions for Chris

As of 6/25/17, /mindofmonsters will be the individual maintaining this repository. Any questions, concerns, and/or requests should be redirected to him.

What follows this sentence will be my documentation on this project to catch him up to speed.

---

### Overview

This NesBox supports NES/FC, SNES/SFC, GB, GBC, GBA, and GEN/MD ROMs in their respective standard formats (.nes, .sfc, .gb, .gbc, .gba, .bin). ROMs, box art, and each game's respective .html document are all held in the /roms directory.

### Adding Games

As stated above, you add games by adding them to the /roms directory of this repo.

Games, box art, and HTML documents must all have the **same name**. It will not work properly if you have something like... "megaman x.sfc" and "mmx.png" in the same folder.

Make sure your box art images are .png format.

---

### Making the HTML Pages

This part is super simple. In the repo, copy an HTML file that is from the same system you want to add for. (i.e. if you're adding Pokemon Gold Version, find a GameBoy game's HTML page.)

Once you've copied and pasted the HTML document, be sure to rename it so it matches your ROM's and png's filename. (Should look like: " x.gb // x.html // x.png")

###### *cont'd...*

---

Now, open the HTML document and scroll to the bottom of the page. You'll see a section of code called:

*...
var flashvars =
...*

Underneath that, you'll find two paramaters (system and url). Make sure the system param matches the target system the new ROM is for. Then change the url param to match the name of the ROM file.

Voila! You're almost there.

---

### Adding the Game to the Home Screen

Go back to the root of the repo and find a folder called "js". Navigate to that folder and open "index.js".

Inside that file, you'll find a variable called *games*. This variable is what's known as an array. It works like this:

['itemOne', 'itemTwo', 'itemThree', etc...]

To add your new game, find where it would sit alphabetically and add the title of the game in quotation marks. Make sure there is one comma before and after the name (see itemTwo in the example array). As long as it looks like that with no extra quotation marks or commas, you should be working.

---

### Wrapping Up

If you don't see the new game at first, you could try clearing your browser's cache and reloading the page.