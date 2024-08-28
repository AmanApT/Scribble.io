Introducing [Scribble.io](https://scribble-io-teal.vercel.app/) project made by [`Aman Ap`](https://github.com/AmanApT).

# Scribble.io

<img width="944" alt="1" src="https://github.com/user-attachments/assets/48727ad5-a87a-4e64-ac0c-4dd5a742484f">

- Sribble.io is high-performance document and diagram engineering tool that enables users to efficiently edit, organize, and manage digital content, achieving 40% faster load times.
- Implemented secure user authentication with Kinde, reducing security vulnerabilities by 30%.
- Optimized UI/UX with Shadcn and TypeScript, boosting user engagement by 25%.


## Features 

- Create multiple teams for different projects
- Multiple files can be created in each team
- Each file provides documenting functionality as well as editing your own custom canvas where you can draw,edit, create anything you want
- All the files can be easily retrieved later and can be managed on dashboard itself
- Thanks to open source libraries [excalidraw](https://excalidraw.com) and [editorjs](https://editorjs.io/) which made this project possible.

  <img width="956" alt="image" src="https://github.com/user-attachments/assets/bd192ada-785c-49ba-aed0-6ddeafa686e3">



## Run locally 

First, install the packages:

```bash
npm install
```

Secondly, setup your environment variables at [Kinde](https://kinde.com/) and [Convex DB](https://www.convex.dev/)

At last, spin up the servers:

```bash
npm run dev
npx convex dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

