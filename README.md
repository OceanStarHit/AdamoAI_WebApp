# Adamo AI Frontend Web Chat

## Screenshots Of Project 📸
<img width="1440" alt="Screenshot 2023-08-02 at 7 32 16 PM" src="https://github.com/OceanStarHit/AdamoAI_WebApp/assets/121229393/2b4b04a0-1a0e-4ab9-88d9-9970d9218dfe">
<img width="1440" alt="Screenshot 2023-08-02 at 7 32 55 PM" src="https://github.com/OceanStarHit/AdamoAI_WebApp/assets/121229393/f2e808a6-4078-4904-86ef-ad82061b3df7">

## Dev Link

Link will be share soon

## Prerequisites

- ### Install yarn globally
  - #### On Windows
         npm install -g yarn
  - #### On Ubuntu
         sudo apt install yarn
  - #### On MacOS
         brew install yarn

## Project Setup

- ### Clone the repo
      https://github.com/OceanStarHit/AdamoAI_WebApp
- ### Install Dependencies
      yarn
- ### Project Run
      yarn start
- ### Access At
      localhost:3000/authentication

## Technologies Used: ☕️ 🐍 ⚛️ 🔦

- Node : It is an open source development platform for executing JavaScript code server-side.
- React :Its is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.
- Tailwind css :In the whole project we are using Tailwind css for styling purpose.Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customisable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

## Version History

- Node version : v16.18.1
- React version : 18.2.0

## Project Status

This project is currently in progress.

## Approach

    Compound components is an advanced React container pattern that provides a simple and efficient way for multiple components to share states and handle logic — working together.
    The compound components pattern provides an expressive and flexible API for communication between a parent component and its children. Also, the compound components pattern enables a parent component to interact and share state with its children implicitly, which makes it suitable for building declarative UI.

## Folder Structure

```sh
├── public                       Static Files
src
│  ├── assets                     Images Files
│  │   ├── svgs
│  │   │   ├── **/*.svg
│  │   ├── **/*.[png, jpg]
│  ├── components                 Independent and reusable bits of code
│  ├── config.env                 Environment Configuration
│  ├── constants                  Constant values and Enums
│  ├── hooks                      Custom hook is for code reusability. For example ,instead of writing the same code across multiple components that use the same common stateful logic.
│  ├── providers                  Authentication and Authorization logic
│  ├── routes                     It enables the navigation among views of various screens in a React Application
│  ├── screens                    UI
│  ├── services                   Services help us to add additional functionalities in the project
│  ├── types                      Data Types
│  ├── utils                      It contains a set of JavaScript utility functions that are used across multiple components
│  ├── App.tsx                    App Component is the main component in React which acts as a container for all other components
│  ├── index.css                  It is used for global styles
│  └── index.tsx                  Index is where you would usually mount/render your main react component onto your “root” element
└── .env
```
