## ![](./9da09.mp4)

<img src="./322.webp" align="right" width="600">

---

<h1 align="center"><code>SN-UTFS-1</code></h1>
<h2 align="center"><i> Ude - Tailwind from Scratching Assg</i></h2>

---

1. [W ?](#w-)
   1. [Acronyms](#acronyms)
   2. [GH](#gh)
   3. [Cursa Project Website](#cursa-project-website)
2. [Tailwind main](#tailwind-main)
   1. [Regarding Webpack](#regarding-webpack)
      1. [`Bun.Sh`](#bunsh)
         1. [Installation](#installation)
3. [Important Commands](#important-commands)
   1. [Staring new NextJS 13 Proj](#staring-new-nextjs-13-proj)
   2. [Regarding Deploys](#regarding-deploys)
4. [Working Directory](#working-directory)
5. [Branches](#branches)

---

# W ?

Must look at
[`https://www.udemy.com/course/tailwind-from-scratch/`](https://www.udemy.com/course/tailwind-from-scratch/)

- Main work is being done from where

## Acronyms

1. So you dont get lost with the terms

|   N    |   huh ?   |
| :----: | :-------: |
| **TW** | Tawilwind |

## GH

1. Download this utils from

[`https://github.com/bradtraversy/tailwind-sandbox`](https://github.com/bradtraversy/tailwind-sandbox)

- Currently tl in [`ts`](./ts)

## Cursa Project Website

[`https://tailwindfromscratch.com/`](https://tailwindfromscratch.com/)

- This was mentioned in this cursa

The [`tailwind-sandbox-done`](./ts/tailwind-sandbox-done/) is deployed to [`https://meek-brioche-d2f425.netlify.app/`](https://meek-brioche-d2f425.netlify.app/) - This done on netlify

# Tailwind main

[`https://tailwindcss.com/`](https://tailwindcss.com/)

- official
- Note that [`Daisy UI`](https://daisyui.com/) - Is build on top of tailwind and that is the now modern way of doing things
- This tut is a year old and now learning it to understand the fundamentals
- But in actuality for your own work will be using [DaisyUI](https://daisyui.com/)
- After going throught the course, there is a recommednation to use Javascript , but instead you will use [DaisyUI](https://daisyui.com/) components, instead of writing the JS
- All of the completed code is available here

[`https://github.com/bradtraversy/tailwind-course-projects`](https://github.com/bradtraversy/tailwind-course-projects)

- This is downloaded here - [`tcps`](./tcps/)

## Regarding Webpack

Since this cursa is old they want to use WebPak , but this is old, isntead we will use the latest

- [`https://bun.sh/`](https://bun.sh/)
  - This is the modern ultra-fast bundler which you came across and need to implement it in this code
  - You can also look through nextjs and see what bundler they are using

### `Bun.Sh`

1. Note this has its own set of commands
2. Those will be documetned here based on their docs

[`https://bun.sh/docs/installation`](https://bun.sh/docs/installation)

- main docs

#### Installation

```sh
npm install -g bun
```

- This will be replaced with the PNPM version

# Important Commands

1. Since this will be primarily done using NextJS 13
2. Will be using the main nextjs command for setting up the proj
3. Will also using the turbopak for the dev

## Staring new NextJS 13 Proj

```
npx create-next-app@latest
```

> PNPX although newer seems not not have a lot of support when you used `npx` weird lock and related errors all disappeared, so for production level work have to use npx , unless you dont find issues with 'pnpx'

- Note the cursa actually is doing it using plain html and css
- You not going to do it like that
- Using own methods for going thru

## Regarding Deploys

1. For nextj projects its better to use vercel which is way more easier for running builds as compared with netlify

# Working Directory

|         N         |                             Wah ?                              |
| :---------------: | :------------------------------------------------------------: |
|   [`m1`](./m1/)   |             Fist testing with changes with favicon             |
|   [`m2`](./m2/)   |                     Main Testing of the TW                     |
| [`m2ts`](./m2ts/) | TW Starter Sandbox <br> Work related to this will be done here |
| [`tcps`](./tcps/) |                  Completed work project files                  |
|   [`ts`](./ts/)   |              Completed starter and sandbox files               |
|   [`sn`](./sn/)   |                   Setup panties sniffing 👃                    |

# Branches 

Listing branches that you are using with this repo 

U | ? 
|:--:|:--:|
$bu1$ | For running your button tests <br> trying to put buttons in a page to navigate to all the  page being created 