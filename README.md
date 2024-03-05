![watchlist_header](https://i.imgur.com/VnkoJ3W.png)

## [View here](https://pxlr-a0d57ef2dd6b.herokuapp.com/)

### 📝Description📝

This project is a video game thought logging application called PXLR

<details>
<summary>:art:WireFrames:art:</summary>

![movie-site-details](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/5825740e-e886-454e-8197-16334ae81820)
![movie-site-homeindex](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/64314198-c760-495b-911b-d055c33833af)
![movie-site-form](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/fee7b9fe-fa0a-4c86-8d74-e1af9e2aed7d)
![movie-site-about](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/676bede6-6913-440c-9266-1d7381fa6fdf)

</details>

<details>

<summary>:desktop_computer:Finished App:desktop_computer:</summary>

![screencapture-localhost-3000-2024-01-21-13_16_34](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/c979dd87-039b-4e10-bb74-e6c1ae80d4a3)
![screencapture-localhost-3000-movies-2024-01-21-13_16_12](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/36d44f35-6579-487f-a057-a12b9edb8ea3)
![screencapture-localhost-3000-movies-new-2024-01-21-13_16_51](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/6b57ae21-9367-420f-a62d-9a919226463b)
![screencapture-localhost-3000-movies-65ad41c5c23e7ee1d78a6176-2024-01-21-13_16_19](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/48dd6f72-4770-422b-8269-efebcb1d581c)

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

![erd](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/32b6b050-2039-4b1c-a18b-2fa474566271)

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
MONGODBURI='your connection string here'
APIKEY='tmdb apikey here'
ON_HEROKU=false
```

to sign up for mongo DB and get a connection string, visit: https://www.mongodb.com/

to get an API key for TMDB, visit: https://developer.themoviedb.org/docs/getting-started

from here you can run:

```
npm run dev
```

go to the following URL in your browser

```
http://localhost:3000
```

the app should now be running in your browser

</details>

<details>

<summary>User Stories</summary>

As a fan of movies, I want to be able to log which movies I've seen on this app, and review them.

As a hiring manager, I want to be able to see the way Nick built out this app.

</details>

<details>

<summary>Trouble Shooting</summary>

Still have an issue with the date defaulting to the current day when editing a movie release date.

</details>

<details>

<summary>:soon:Coming Next:soon:</summary>

would like to add some kind of oauth to add users.

</details>

<details>

<summary>API </summary>

for this app I used the TMDB Api
https://developer.themoviedb.org/docs/getting-started

</details>

## 💻 Technologies Used

  ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
  ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
  ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
  ![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
  ![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
  ![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)
  ![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
  ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
