<!-- Please update value in the {}  -->


<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

<!-- OVERVIEW -->

## Overview

A web app built in react, tailwind and firebase that allows user to put their items online for sale or rent after becoming a member of the website.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## Features

<ul>
<li>Form validation throughout the web-app</li>
<li>User has option to login/register through their google account.</li>
<li>User can filter listings according to
  <ul>
    <li>Price: Low to High</li>
    <li>Price: High to Low</li>
  </ul>
</li>
<li>User can create/edit/delete listings from their account</li>
<li>User can send message to item owner.</li>
<li>User can see messages received.</li>
</ul>

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/thesuaveguy/connEx

# Install dependencies
$ npm install

Place your firebase config file "firebase.config.js" inside src.
Export firestore, firebase storage and firebase auth as db, storage and auth. Then:

# Run the app
$ npm run dev
```
