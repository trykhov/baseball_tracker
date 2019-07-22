# Baseball Tracker App

Try the app out here: https://trykhov.github.io/baseball_tracker/

### Inspiration of Idea

The inspiration of this project came from attending a friend's birthday. He invited this drinking game called "Baseball" which ran similar to the real game of baseball. What I found interesting was that he created an app for this game to keep track of score and player stats but he used Python and Django and one thing I noticed was that the app was primarily mark up. I figured that I could try to make something similar using HTML, CSS, and JavaScript in order to make it more appealing.

Cups are lined up across the table to represent the bases that the batter will cover if they successfully shoot the ball into the cup.

The rules are similar to baseball. Batters can "hit" the ball but if they miss and the other team catches the ball before it hits the ground (off the table) and shoots it into the batter's cup, then the batter is out. Else the batter has three chances to successfully shoot the ball. Three misses qualify as an out.

### Features

This app has various features. It has the basic features of adding players to teams as well as giving team names.

One thing that I implemented was the batter rotation. This kept track of which batters were to up to bat and how many strikes they had as well as the current number of outs.

![demo](baseball_app_demo.gif)

In addition, I added a feature that kept track of the field. This meant that the user can see if anyone is on base.

### Technology

I used React.js to create the layout of this application. Since this game required saving information such as bases, score, and player names, I used Redux for state management.

### Limitations

One thing that I would implement in the future for this app would be keeping track of player stats. It would be nice to see how players performed per game and get an idea of what their strengths and weaknesses were.

### Things I've Learned

This was perhaps the project where I learned about the ins and outs of Redux the most. In learning to keep track of state management, I had to learn how states were being stored along with how they were being shared with components that called for them. I finally understood the concept of central state management through actions and reducers. (In short, think of actions as water following through a pipe and reducers are basically filters that determine what goes through certain pipes)

Another thing I learned was how to run this app on Github Pages. My first attempt nearly gave me a heart attack. In looking at how to run this app on Github pages using the React tutorial, I erased my master branch with the build files because I had "gh-pages -b master -d build" as my "deploy" in my package.json file. However, I learned (the hard way) that this overwrites my master branch with the build files. After getting back my files from my previous commits, I switched it to "gh-pages -d build" and it created a separate branch where I can safely deploy this app.
