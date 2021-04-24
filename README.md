In this file, I will keep a running, live journal of my [efforts](https://ianturner88.github.io/vanilla-js-qwixx/) to build a replica of the boardgame qwixx.

# April 24:

The scoreboard area has been laid out (78 and 320 are the largest possible scores for each category). The display will show a player's point total in each row, and will be made to update whenever a new button is selected or deselected. Also, a 'Void Pick' button has been built. This button will allow a player to deselect their current pick, so long as the dice as not yet been rolled.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2024.1.png)

In my initial design, I forgot to include the lock. This error has now been rectified. When a player 'locks' a row, the same colour row will be locked for the opposing player.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2024.1.png)

The initial draft of the player object has been designed. There are 3 properities: mostRecentPick, numberPicked, isLocked. The property mostRecentPick will be reset whenever either the 'Void Pick' button is selected OR the 'Roll Dice' button is punched. This property (will hopefully) allow a user to withdraw a selection. The numberPicked property keeps track of a player's score in each colour category. The property isLocked keeps track of if a row may be used or not. If a row is locked for one player, the same row must be locked for the other player.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2024.1.png)

Note to self:
One (tedious) case I need to consider with locking a row is that if a user locks a row, the other users on that turn may only select the rightmost option in that row. I will need to build a method that removes a players most recent pick if the pick was not the rightmost number if another player locked a row when the 'roll dice' button is selected.

# April 21:

The strikeout zone has been built for when a player does not check off a box on their turn.

![Strikeout Zone](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2021.1.png)

# April 20:

The bar that displays the points per number of boxes ticked was built out.![Point Totals](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.7.png)

# April 17:

The box in the bottom right of the bottom left box was touched up. Left padding was added to the question "Which player's turn is it?". A small clean up job.

|                                    No left padding                                     |                                    1% left padding                                     |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2017.1.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2017.2.png) |

When the dice are rolled, a number of html button IDs need to be generated. Bugs or missing features associated with the generation of valid html button IDs were fixed.

1. Previously, when the public numbers were the same, the first ID in the availableNumbers array would conclude with an emdash for user display purposes. This created issues, however, when certain buttons would be enabled or disabled. Now, after the non-duplicate numbers are shown, the ID's of the first duplicates are reconstructed to reflect the button IDs they actually represent.

|                                         Before                                         |                                         After                                          |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.2.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.1.png) |

2. A ternary operator was added to the top of the constructValidIDButtons function. When player 2 is 'at bat', the value of playerID is 0. Previously, the button IDs generated would look like 'p0g11'. However, the correct button ID for player two is 'p2g11'.

|                                         Before                                         |                                         After                                          |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.3.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.4.png) |

3. Previously, the public number was generated only for the player whose turn it is. To rectify this, a function constructValidPublicIDButtons() was written to generate the public IDs for the 'other' player as well.

|                                         Before                                         |                                         After                                          |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.5.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.6.png) |

# April 10:

The dice object has been re-factored for both simplicity, readability, and maintainability. The number of lines attributed to the dice object has been halved. Previously, there were two separate functions for when each player rolled the dice. Now, a single more general function has been constructed for when either player rolls the dice.

Also, the querySelectors were moved to a different page and stored in arrays. The arrays with the querySelectors are exported.

# April 4:

The dice object largely consists of duplicate, but functional, code, so I will refactor this code on a new branch come Tuesday. Also, many of the variable definitions, like the querySelectors, will be shuffled over to a different file and imported, so the dice.js file is cleaner.

# April 3:

A method - setAllButtonsToUnavailable(arrButtonsIDs) - was written to block the user from using any of the buttons immediately after the dice is rolled.

The board for player 2 and the scoreboard / rules area was inserted. ![Scoreboard Area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%203.png)

Both players' board correctly show the numbers (aka buttons) a user may click on their turn.

Dice areas to refactor:

1. the way the available buttons are recorded could be shifted to one method
2. if the 2 public numbers match, there's a check. This check could be moved to the front of the player#sTurn method.

# April 1:

A display was implemented to show whose turn it is. ![Player's turn display](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.3.png)

The avaiable numbers are updated, so that if the public dice are the same, the colour die do not display duplicates. ![Duplicates eliminated](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.2.png)

Multiple different 'NO' options were explored. The em dash was selected (the left green option). Hat tip to my friend J for proposing the em dash.

![No](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.1.png)

# March 29:

Turns out, the issue was minor: the background colour had to be set to black so that the X would display. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2029.2.png)

I have an unresolved issue I plan to ask friends for help with. The X class, used to indicate a player has selected a button, does not display. I am unsure how to resolve the issue. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2029.1.png).

# March 23:

A 'Github Pages' site was made where my boardgame may live.

# March 22:

The 'Roll Dice' button has been hooked up, so the dice now are updated if a user clicks the button.

I elimated the second white block in the available numbers block, because I noticed a mistake in how I understood the rules.

# March 17:

I learnt out to split a project over multiple js files. In my index.html file, I called './main' which led to an error message. To resolve this issue, I changed the file address called in the html file to './main.js'. ![error message](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2017.png).

# March 16:

The area displaying each players' options was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2016.png).

# March 8:

The dice area html/css was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%208.png).

# March 3:

The border's coloured rows have been built. ![colored rows](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%203.png).
