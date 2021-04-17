In this file, I will keep a running, live journal of my [efforts](https://ianturner88.github.io/vanilla-js-qwixx/) to build a replica of the boardgame qwixx.

# April 10:

The dice object has been re-factored for both simplicity, readability, and maintainability. The number of lines attributed to the dice object has been halved. Previously, there were two separate functions for when each player rolled the dice. Now, a single more general function has been constructed for when either player rolls the dice.

Also, the querySelectors were moved to a different page and stored in arrays. The arrays with the querySelectors are exported.

# April 4:

The dice object largely consists of duplicate, but functional, code, so I will refactor this code on a new branch come Tuesday. Also, many of the variable definitions, like the querySelectors, will be shuffled over to a different file and imported, so the dice.js file is cleaner.

# April 3:

A method - setAllButtonsToUnavailable(arrButtonsIDs) - was written to block the user from using any of the buttons immediately after the dice is rolled.

The board for player 2 and the scoreboard / rules area was inserted. ![Scoreboard Area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-04-03%20at%205.26.42%20PM.png)

Both players' board correctly show the numbers (aka buttons) a user may click on their turn.

Dice areas to refactor:

1. the way the available buttons are recorded could be shifted to one method
2. if the 2 public numbers match, there's a check. This check could be moved to the front of the player#sTurn method.

# April 1:

A display was implemented to show whose turn it is. ![Player's turn display](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-04-01%20at%208.15.17%20PM.png)

The avaiable numbers are updated, so that if the public dice are the same, the colour die do not display duplicates. ![Duplicates eliminated](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-04-01%20at%207.29.39%20PM.png)

Multiple different 'NO' options were explored. The em dash was selected (the left green option). Hat tip to my friend J for proposing the em dash. ![No](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-04-01%20at%2011.40.00%20AM.png)

# March 29:

Turns out, the issue was minor: the background colour had to be set to black so that the X would display. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-29%20at%207.36.40%20PM.png)

I have an unresolved issue I plan to ask friends for help with. The X class, used to indicate a player has selected a button, does not display. I am unsure how to resolve the issue. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-29%20at%207.21.40%20PM.png).

# March 23:

A 'Github Pages' site was made where my boardgame may live.

# March 22:

The 'Roll Dice' button has been hooked up, so the dice now are updated if a user clicks the button. I elimated the second white block in the available numbers block, because I noticed a mistake in how I understood the rules.

# March 17:

I learnt out to split a project over multiple js files. In my index.html file, I called './main' which led to an error message. To resolve this issue, I changed the file address called in the html file to './main.js'. ![error message](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-18%20at%205.17.45%20PM.png).

# March 16:

The area displaying each players' options was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-16%20at%204.43.14%20PM.png).

# March 8:

The dice area html/css was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-08%20at%207.51.20%20PM.png).

# March 3:

The border's coloured rows have been built. ![colored rows](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/Screen%20Shot%202021-03-03%20at%207.46.57%20PM.png).
