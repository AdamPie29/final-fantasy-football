# Final Fantasy Football

Born out of the intersection between my passions for the NFL and software development, Final Fantasy Football is a playground for any fantasy football player or fan of football. I see this project as a perfect place to learn more about football, and an easy way to deepen their relationship with the sport. 

Users can analyze and compare players on the Players page, and build their own custom football teams without limitations on the My Teams page. Finally, users can test their teams in Season Mode, which simulates playing a full 17 game season and scored based on each players 2021 statistics.



## Tech Stack

**Client:** React, JavaScript, SASS

**Server:** Node, Express, MySQL

## Features

- Fully responsive design
- Browse and sort Players on Players Page
- Create a team of up to 6 players and save it to your user profile
- Create as many teams as you would like!
- Simulate a season in Season Mode to test your team's ability


## Installation

Install final-fantasy-football with npm

```bash
  npm install final-fantasy-football
  cd server
  npm install

```
Create a MySQL database through your preferred means.

Run knex migrations to create necessary tables.

To seed data into tables, you may need to enable local infile in MySQL. In Terminal, open MySQL, then:

```bash
  SET GLOBAL local_infile=1;
  quit
  mysql --local-infile=1 -u username -p
  use *database created above*
  load data local infile /filepath to player.2021.csv into table players_img
  FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
  load data local infile /filepath to playerseason2021.csv into table players_statistics
  FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

```
Start the server
```bash
  npm start
```
With server running, in separate Terminal instance:
```bash
  cd client
  npm install
```
Follow the .env-example guidelines to set up your .env. Enter your server URL to allow axios usage.

Start the client side
```bash
  npm start
```
    
## Lessons Learned

This project was a ton of fun to build, and challenged me in many aspects of web development. I specifically wanted more experience with user authentication, database work and a bit of game logic.

This project reinforced how crucial it is to have a solid, well though-out plan. I hit significant struggles early on as my initial tables design did not account for the required relationships necessary to build out the app.

To build the Players Table and Create Teams pages, I learned I initially pulled data from my tables too low down the element tree to be able to pass the props necessary for mapping components and using state. 

On a whole, I feel much more confident in my ability to build a project manipulating data from a variety of sources that are required to interact with each other.





## Next Steps

- Fully fleshed out Season Mode, where users can view stats by player, by game as well as the computer players stats

- Search bar implementation for players tables and create team page

- Category filters above the tables to easily sort by player position

- Community: allow users to submit their teams and battle against other user generated teams.



