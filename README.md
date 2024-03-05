![watchlist_header](https://i.imgur.com/VnkoJ3W.png)

## [View here](https://pxlr-a0d57ef2dd6b.herokuapp.com/)

### 📝Description📝

This project is a video game thought logging application called PXLR

<details>
<summary>:art:WireFrames:art:</summary>

![site-home](https://i.imgur.com/vrofcXk.png)
![site-details](https://i.imgur.com/3Sptjym.png)
![site-form](https://i.imgur.com/RM4qA20.png)
![site-about](https://i.imgur.com/LmrxmSB.png)

</details>

<details>

<summary>:desktop_computer:Finished App:desktop_computer:</summary>

![screencapture-localhost-3000-2024-01-21-13_16_34](https://i.imgur.com/kYUkNUy.png)
![screencapture-localhost-3000-movies-2024-01-21-13_16_12](https://i.imgur.com/s82XhUj.png)
![screencapture-localhost-3000-movies-new-2024-01-21-13_16_51](https://i.imgur.com/wG8klGR.png)
![screencapture-localhost-3000-movies-65ad41c5c23e7ee1d78a6176-2024-01-21-13_16_19](https://i.imgur.com/BiEcjTo.png)

</details>

<details>
<summary>Route Map</summary>

## Route Map

| URL                 | REST Route | HTTP Verb | CRUD Action | View             |
| ------------------- | ---------- | --------- | ----------- | ---------------- |
| /                   |            | get       | read        | home-index.jsx   |
| /games              | index      | get       | read        | games.jsx        |
| /games/:id          | show       | get       | read        | game-details.jsx |
| /pxl                | index      | get       | read        | home-index.jsx   |
| /pxl/new/:gameid    | new        | get       | read        | new-pxl.jsx      |
| /pxl/create/:gameid | create     | post      | create      |                  |
| /pxl/:id            | update     | patch/put | update      | edit-pxl.jsx     |
| /pxl/:id            | destroy    | delete    | delete      |                  |
| /user/create        | new        | get       | read        | new-user.jsx     |
| /user/:id           | create     | post      | create      |                  |
| /about              |            | get       |             | about.jsx        |
| /*                  |            | get       |             | 404.jsx          |

</details>

<details>
<summary>ERD</summary>

![erd](https://i.imgur.com/65lTTFF.png)

</details>

<details>
<summary>Install Instructions</summary>

to install this app on your own computer, first you will need to fork the repository. once you have cloned the repository to your local machine you will need to run terminal and :

```
cd <repository folder>
```

from here you will need to enable NPM using:

```
npm init -y
```

now, install the node packages

```
npm i
```

now, you will need to create a .env file

```
touch .env
```

within the env file you will want to add the follow:

```
PORT=3000
MONGODBURI=<your connection string here>
JWT_SECRET_KEY='JwtS3cr3tK3Y'
VITE_API_KEY=<your API key here>
```

to sign up for mongo DB and get a connection string, visit: https://www.mongodb.com/

to get an API key for giant bomb, visit: https://www.giantbomb.com/api/

from here you will need to update the scripts section of package.json with:

```
"scripts": {
    "backend": "nodemon backend/server.js",
    "frontend": "vite",
  }
```

from here you will need to split your terminal and run run:

```
npm run backend
```
```
npm run frontend
```

go to the following URL in your browser

```
http://localhost:5173
```

the app should now be running in your browser

</details>

<details>

<summary>User Stories</summary>

As a fan of games, I want to be able to search for games I like

As a user, I want to be able to leave a PXL about my favorite game. 

As a hiring manager, I want to be able to see the way Nick built out this app.

</details>

<details>

<summary>Trouble Shooting</summary>

Still have some minor issues, would like to figure out how to get rid of the edit and delete buttons for PXLs NOT belonging to the user.

</details>

<details>

<summary>:soon:Coming Next:soon:</summary>

Would like to build out a user profile page and expand upon the dashboard
</details>

<details>

<summary>API </summary>

for this app I used the Giant Bomb Api
https://www.giantbomb.com/api/

</details>

## 💻 Technologies Used

  ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
  ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
  ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
  ![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
  ![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
  ![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)
  ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
  ![react.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  
