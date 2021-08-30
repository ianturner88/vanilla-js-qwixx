In this file, I will keep a running, live journal of my [efforts](https://ianturner88.github.io/vanilla-js-qwixx/) to build a replica of the boardgame qwixx.

# August 30: Lock Rows

A dice object property was written that checked if a row should be locked. Tomorrow, another dice property will be written that updates a locked rows image to one with a locked lock.

# August 29: Checks

Last night, while playing a round, I noticed that numbers that had already been selected BUT the dice had rolled for that turn where available. This should not happen. A number that has already been selected must be disabled regardless of the current dice roll. If this does not occur, a user may 'game' the system on their turn by selecting an already selected number and thus avoid being assessed a strikeout.

To solve this problem, a new property needs to be added to the player object to store all selections the user made during the game.

- this.numbersAlreadyTaken = [[], [], [], []]

# August 28: Checks

Today, I implemented a few small checks. I wrote code to disable each users' side of the board after the user made a selection (player property: disablePlayer#Buttons()), and I implemented a feature to administer a strike if player 2 does not make a selection on their turn.

# July 2: Skipped Turns

Last night, I built out the logic for evaluating if a player should be assessed a skipped turn.

| Public | Colour |           Action           |
| :----: | :----: | :------------------------: |
|  Yes   |  Yes   | Do NOT assess skipped turn |
|  Yes   |   No   | Do NOT assess skipped turn |
|   No   |  Yes   | Do NOT assess skipped turn |
|   No   |   No   |    Assess skipped turn     |

To implement the above logic table, I added a new parameter to the player object, this.isSkippedTurn. The parameter is used as a counter and is reset to 0 at the start of a new 'roll dice' call. When a player selects a button, the counter is incremented by 1. When the colour checkbox is selected, a player is assessed a skipped turn penalty if the parameter has a value of 0 AND it was their turn.

Also, all the buttons on both players boards have been initialized to 0, so neither player can select numbers prior to the start of the first dice roll.

# July 1: Upperlimit Checks

I instituted the isValidPick() method found in the player object. The method checks if the user's selection is valid. Specifically, if the number selected is to the right of the previous right-most selected number. If so, the row's upperlimit is updated, the parameter totalNumberPicked is incremented by 1, and the x-class is added to the player's selection to visually indicate a selection has been made.

Tomorrow, I will implemented a method to check if a player should be assessed a skipped turn strike.

# June 29: Implementing Checkbox Functionality

I figured out how to disable the checkboxes, as required. This allows me to require a player to sequentially work their way from rolling the dice, to both players using the public number, to the player whose turn it is selecting at most one colour option.

Many small bugs or oversights were remedied today. For example, when a user hits 'Roll Dice', first, the public number is displayed for both players. To proceed in the gameplay, the user must select the public checkbox. Now, the coloured numbers are displayed for the player whose turn it is. A check was implemented so that the 'Roll Dice' button may not be selected until the 'Colour checkbox' is selected. Once the 'colour' checkbox is selected, the middle row resets to '-'.

Tomorrow, I will build out checks to ensure buttons selected by users do not violate the game's rules. Also, I will build the check to see when the game is over - if at least 2 rows have been locked or a player has 4 skipped turns.

| Current \ Next | Dice  | Public | Colour |
| :------------: | :---: | :----: | :----: |
|      Dice      | False |  True  | False  |
|     Public     | False | False  |  True  |
|     Colour     | True  | False  | False  |

# June 28: Refactoring Dice

I refactored the dice so that after the dice is rolled only the public numbers is displayed.

Tomorrow, I will look into implementing checkboxes so that once both players have used the public number, the play whose turn it is may use at most one of the coloured options.

Checkboxes, I think, are to be used with forms, so this may not be a good choice for Qwixx.

# June 24: Unit Testing

I worked through Web Dev Simplified's [video](https://www.youtube.com/watch?v=FgnxcUQ5vho&ab_channel=WebDevSimplified) and watched Brad Traversy's [video](https://www.youtube.com/watch?v=7r4xVDI2vho&ab_channel=TraversyMedia) on unit testing.

I have not yet been able to figure out how to unit test a method by 'fixing' an object's parameters. For example, I would like to test that a user may not select the red 5 if they have already selected the red 6. The upperlimit (at least the red 6) would be stored in one of the dice's parameters. A method would test if the user selection conflicts with the current upperlimit.

# June 22: Refactor Checkbox

I refactored the css associated with the checkbox.

Today, on Youtube, I researched unit testing. For a separate project, I used manual unit-testing. By that I mean, I had some tests written which I manually uploaded every time I wanted to check the code. Manual unit-testing is a kinda like how stage one of riding a bicycle is having training wheels. By tomorrow, I hope I can write some unit tests.

# June 21: Initial Draft of the Checkbox

To start, I worked through Web Dev Simplified's [tutorial](https://www.youtube.com/watch?v=YyLzwR-iXtI) on how to make a checkbox.

Next, I implemented two checkboxes for my qwixx game. The checkboxes are needed because the player whose turn it is, is to only use the sum of a white die and a coloured die after the all players have been given the chance to use the public number.

There are some remaining issues with the checkboxes, however. Both the boxes and their associated titles are left justified, and the bottom box is smaller than the bigger box. Also, the bottom box expands when clicked on. I am not sure why that is.

|                                      First Draft                                      |                                      Final Draft                                      |
| :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/June%2020.3.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/June%2020.4.png) |

# June 20: Writing the Rules

Yesterday and today, I wrote the first draft of the rules. Writing a succinct synopsis of the rules was no easy task. In my first stab at laying out the rules, I used a title for the world "Rules". This created a misalignment of the text in the leftmost column with the other columns. Also, I had no spacing between the columns of text, which added confusion.

In my final version, I did away with the title. To fit all the rules in with a reasonable font size, I extended the two bottom boxes by 25px. Invisible columns were added between the columns of text to ensure their was proper spacing between columns.

|                                      First Draft                                      |                                      Final Draft                                      |
| :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/June%2020.1.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/June%2020.2.png) |

# May 11: Skipped Turn X-Class

The x-class for the skipped turn was built out.
![Skipped Turns](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/May%2011.1.png)

# May 4: Colour Palette Overhaul

The color palette has been updated to better reflect the board's true design. I used this [website](https://imagecolorpicker.com/en) to identify the colour codes used by qwixx. I did not know such a site existed until last week.

The x-class for the buttons was rebuilt, since I accidentally deleted the x-class a few weeks ago.

One area I would explore if I were to do something like this again is how to make the website more user-friendly for colour-blind people. At the start, I intentionally wrote the site in a way that minimized the use of words. In hindsight, this approach does not account for those who struggle or can not differentiate colours.

|                                       Before                                        |                                        After                                        |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/May%204.2.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/May%204.1.png) |

Note: There are 3 shades of red, yellow, green, blue, and grey. The numerical values corresponding to each colour are written in the middle hue of the 3 shades, with the exception of yellow. The yellow numbers, I write in black, since the medium hue of yellow is too hard to read.

I have a created a closed and open lock image. This looks much nicer than the previous lock images I was using. Also, the blue and green numbers were displayed in the wrong order. This has been fixed.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/May%204.3.png)

# April 30: Touch-ups

The last row of the players' boards underwent a number of small touch-ups:

1. The gap vertically between the boxes under 'Strikeouts' has been adjusted to match the gap horizontally between the boxes.
2. The 'Void Pick' button has been aligned horizontally with the other row's other content.
3. The blue in the bottom right corner underneath 'Colour Sums' has been changed from #0000ff (blue) to #1e90ff (dodger blue). This colour change was made every else also. The change came about because the black font was hard to read with a dark blue background, so a lighter hue of blue was chosen. In general, I want to stay true to the boardgame's design, but here, for good reason, I've deviated from the original design.

|                                         Before                                         |                                         After                                          |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2030.2.png) | ![](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2030.3.png) |

Additionally, the lock images were rotated to adhere to the boardgame's design.

In a previous version, in the html file, I referenced the images as 'src=/images/dice.png'. This led to an error where the images where displayed when I ran the files locally but not when I deployed the code to github pages. The remedy? I needed to make the image source paths relative: 'src=./images/dice.png'. The '.' before the first '/' makes all the difference.

A black border was added to the yellow available numbers' display. Personally, I find this visually easier on the eyes, since the yellow and the white blur together.

# April 24: Player Objects, Locks, & Scoreboard

The scoreboard area has been laid out (78 and 320 are the largest possible scores for each category). The display will show a player's point total in each row, and will be made to update whenever a new button is selected or deselected. Also, a 'Void Pick' button has been built. This button will allow a player to deselect their current pick, so long as the dice as not yet been rolled.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2030.1.png)

In my initial design, I forgot to include the lock column. This error has now been rectified. When a player 'locks' a row, the same colour row will be locked for the opposing player.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2024.2.png)

The initial draft of the player object has been designed. There are 3 properities: mostRecentPick, numberPicked, isLocked. The property mostRecentPick will be reset whenever either the 'Void Pick' button is selected OR the 'Roll Dice' button is punched. This property (will hopefully) allow a user to withdraw a selection. The numberPicked property keeps track of a player's score in each colour category. The property isLocked keeps track of if a row may be used or not. If a row is locked for one player, the same row must be locked for the other player.

![Scoreboards](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2024.3.png)

Note to self:
One (tedious) case I need to consider with locking a row is that if a user locks a row, the other users on that turn may only select the rightmost option in that row. I will need to build a method that removes a players most recent pick if the pick was not the rightmost number if another player locked a row when the 'roll dice' button is selected.

# April 21: Strikeout Zone

The strikeout zone has been built for when a player does not check off a box on their turn.

![Strikeout Zone](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2021.1.png)

# April 20: Scoring System

The bar that displays the points per number of boxes ticked was built out.![Point Totals](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%2020.7.png)

# April 17: ID Tages & Left-Padding

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

# April 10: Importing Definitions from Other Files

The dice object has been re-factored for both simplicity, readability, and maintainability. The number of lines attributed to the dice object has been halved. Previously, there were two separate functions for when each player rolled the dice. Now, a single more general function has been constructed for when either player rolls the dice.

Also, the querySelectors were moved to a different page and stored in arrays. The arrays with the querySelectors are exported.

# April 4: Refactoring the Dice

The dice object largely consists of duplicate, but functional, code, so I will refactor this code on a new branch come Tuesday. Also, many of the variable definitions, like the querySelectors, will be shuffled over to a different file and imported, so the dice.js file is cleaner.

# April 3: Available & Unavailable

A method - setAllButtonsToUnavailable(arrButtonsIDs) - was written to block the user from using any of the buttons immediately after the dice is rolled.

The board for player 2 and the scoreboard / rules area was inserted. ![Scoreboard Area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%203.png)

Both players' board correctly show the numbers (aka buttons) a user may click on their turn.

Dice areas to refactor:

1. the way the available buttons are recorded could be shifted to one method
2. if the 2 public numbers match, there's a check. This check could be moved to the front of the player#sTurn method.

# April 1: Em-Dash

A display was implemented to show whose turn it is. ![Player's turn display](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.3.png)

The avaiable numbers are updated, so that if the public dice are the same, the colour die do not display duplicates. ![Duplicates eliminated](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.2.png)

Multiple different 'NO' options were explored. The em dash was selected (the left green option). Hat tip to my friend J for proposing the em dash.

![No](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/April%201.1.png)

# March 29: X-Class

Turns out, the issue was minor: the background colour had to be set to black so that the X would display. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2029.2.png)

I have an unresolved issue I plan to ask friends for help with. The X class, used to indicate a player has selected a button, does not display. I am unsure how to resolve the issue. ![x-class](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2029.1.png).

# March 23: Github Pages

A 'Github Pages' site was made where my boardgame may live.

# March 22: Dice Roll

The 'Roll Dice' button has been hooked up, so the dice now are updated if a user clicks the button.

I elimated the second white block in the available numbers block, because I noticed a mistake in how I understood the rules.

# March 17: Multiple JS Files

I learnt out to split a project over multiple js files. In my index.html file, I called './main' which led to an error message. To resolve this issue, I changed the file address called in the html file to './main.js'. ![error message](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2017.png).

# March 16: Available Numbers

The area displaying each players' options was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%2016.png).

# March 8: Dice Area

The dice area html/css was built out. ![dice area](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%208.png).

# March 3: The Start

The border's coloured rows have been built. ![colored rows](https://github.com/ianturner88/vanilla-js-qwixx/blob/main/images/March%203.png).
