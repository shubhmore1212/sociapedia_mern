# Social Media Application : SociaPedia

[![Build Status](https://img.shields.io/travis/username/repo.svg)](https://travis-ci.org/username/repo)
[![Coverage Status](https://img.shields.io/codecov/c/github/username/repo.svg)](https://codecov.io/gh/username/repo)
[![Version](https://img.shields.io/badge/version-1.0-blue.svg)](https://github.com/username/repo/releases/tag/v1.0)

A social media application built with Node.js and React.js, offering features like post creation, post liking, friend management, profile viewing, and mobile-responsive design with dark and light mode support.

![Social Media Application](./client/public/assets/Screenshot%20from%202023-05-08%2021-10-03.png)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)

### Clone the repository

```bash
git clone https://github.com/shubhmore1212/sociapedia_mern.git
cd sociapedia
```

## Installation

For FrontEnd:

```bash
cd client
npm install
npm start
```

For BackEnd:

```bash
cd server
# create a .env file containing
# MONGO_URL (see youtube video for reference https://www.youtube.com/watch?v=K8YELRmUb5o&t=920s)
# JWT_SECRET (any string)
# PORT=3001
nodemon index.js

#Application is ready to explore
```

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Features

- User registration and authentication
- Post creation with image or content upload
- Like and comment on posts
- Friend management: add friends and remove friends
- View other users' profiles
- Mobile-responsive design
- Dark and light mode support

## Contributing

Contributions are welcome! Follow these steps to contribute:

- Fork the repository.
- Create a new branch: git checkout -b feature/your-feature-name.
- Commit your changes: git commit -am 'Add new feature'.
- Push the branch: git push origin feature/your-feature-name.
- Submit a pull request.
- Please ensure that your code adheres to the existing code style.
