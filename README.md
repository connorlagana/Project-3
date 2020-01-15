# **Foodstagram 🐯**

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.



### Overview

_**Project Title**  Food Instagram hello

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Desktop Landing](url)

- Desktop Landing

<br>

![Desktop Hero](url)

- Desktop Hero

<br>

![Desktop Data Index](url)

- Desktop Data Index

<br>

![Tablet Data Index](url)

- Tablet Data Index

<br>

![Mobile Data Index](url)

- Mobile Data Index

<br>

---

<br>

### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The Food Instagram
be able to sign in/ sign out
create user
see all post 
see all post 1 user
change post
delete post


#### Goals

make a simple rendition of instagram 

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Spring   | _Lorem ipsum dolor sit amet, consectetur._ |

#### API Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| na          |              |       |  |

#### React Components

_Component Hierarchy_

> Use this section to define your React components and the data architecture of your app.

```
src
|__ components/
      |__ createpost
      |__ update post
      |__ header
      |__ Footer.jsx
      |__ register user
      |__ create form for post
      |__ 
      |__ 
```

_Component Breakdown_


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | class     |   y   |   n   | _The header will contain the navigation login/ logout functions._               |
|  login/logout| functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

_Component Estimates_

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

---

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

#### Post-MVP Goals

- _Add user account and auth capabilities._

#### Post-MVP Data

- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

---

<br>

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

| Error                                                   | Resolution                                             |
| :------------------------------------------------------ | :----------------------------------------------------- |
| `app.js:34 Uncaught SyntaxError: Unexpected identifier` | Missing comma after first object in sources {} object. |
