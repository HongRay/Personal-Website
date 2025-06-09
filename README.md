# My Portfolio Personal Website
This project is built with React and JavaScript using Vite.js. This project was created out of personal interest and for the fun of exploring frontend development.

# Installation
Before running the project, all you need to install is the following: <br>
- [Node](https://nodejs.org/en/download)<br>

# Instructions to run
In the main directory, enter the commands:

```bash
    npm i
    npm run dev
```
To view the website, observe the url the website is running on. (typically it should be `http://localhost:8080/`). All you have to do is visit this url. 

# Scalability
I made the website modular to be able to add future projects and experiences easily in a consolidated directory. To add on future projects and work experience, edit `experience.ts` and `projects.ts` in `/src/lib` directory.

## Experience
### To edit simplified experience card, edit:

```js
const experiences = [
    {
      id: 'number',
      title: 'title',
      company: 'company',
      duration: 'date',
      description: 'description',
      logo: 'logo',
      skills: ['skills']
    },
]
```

### To edit detailed experience card, edit:

```js
const experiencesDetails = [
    {
      id: 'id from experiences',
      title: 'title',
      company: 'company',
      duration: 'date',
      description: 'description',
      logo: 'logo',
      skills: ['skills']
      achievements: [
        'achievements'
      ],
      projects: [
        {
          name: 'project name',
          description: 'description',
          technologies: ['skills']
        },
      ]
    },
]
```

## Project 
### To edit project card, edit: 
> [!NOTE] 
> `hasDetailPage` is used when you do not have a "source code link". This will bring th user to the `projectPopup` page where you can provide more details. `id` has to be the same as the `id` for the `projectPopUpDetails`.

```js
const projectDetails = [
    {
      title: 'title',
      description: 'description',
      technologies: ['tech stack'],
      image: 'image to use',
      codeLink: 'link',
      hasDetailPage: true,
      id: 'iex',
    },
]
```

### To edit project pop up details, edit:

```js
const projectPopUpDetails = [
    {
      id: 'id from projectDetails',
      title: 'title',
      description: 'description',
      technologies: ['tech stack'],
      image: 'image to use', //Can use multiple images
      codeLink: 'can leave blank',
      hasDetailPage: true,
      achievements: [
        'achievements'
      ]
    },
]
```
# Developers guide
This project is written in React and JavaScript using Vite.js framework. Additionally, I used Lovable.dev to generate a template boilerplate React code, so as to get started on my custom animations, components and pages immediately and efficiently.

The website is designed with multiple pages with multiple components. 

## Pages
The `index` page serves as the main landing page where all key sections are displayed in the following order:
1. Navigation <br>
2. HeroSection <br>
3. AboutSection <br>
4. AnimatedTechStack <br>
5. TechSection <br>
6. Project <br>
7. Experience<br>
8. ContactSection

In `ProjectSection`, clicking onto a project card that does not have a link will redirect the user to the `ProjectPopup` page. <br>
In `ExperienceSection`, clicking onto an experience card will redirect the user to the `ExperienceDetail` page.

## Components
The components consist of:
1. AboutSection <br>
2. AnimatedTechStack <br>
3. ContactSection <br>
4. ExperienceSection <br>
5. HeroSection <br>
6. Navigation <br>
7. ProejctCarousel (Used to display images in `ProjectPopup` page) <br>
8. ScrollToTop (Used in `index` page) <br>
9. TechStackCarousel (Used to display techstacks in `index` and `Skills` page)