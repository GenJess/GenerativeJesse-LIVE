# Spline Integration Information

## Project Goal
Integrate a specific Spline scene onto the website's landing page (`/`) to act as the primary visual and interactive element.

## Spline Scene Details
- **URL:** `https://my.spline.design/oceanintrofinal-ieIshCSEFwGsPGGKy8zOr1EW/` (Note: The `project-overview.md` uses a `prod.spline.design` URL: `https://prod.spline.design/wPA3LRYxI9Gxx53V/scene.splinecode`. We should confirm which one is correct, but will proceed with the one provided in the task for now).
- **Functionality:**
    - The scene uses scroll events to transition through states (Base State -> State 1 -> State 2 -> State 3 -> State 4 -> State 5).
    - Reaching the final state (State 5) should trigger a redirect to `generativejesse.com/home`.

## Current Issue
The scroll functionality is not working as expected on the current implementation in `src/pages/Index.tsx`. The page scrolls, but it doesn't seem to correctly drive the state changes within the Spline scene.

## Required Information (To be gathered)
- Official Spline documentation on React integration (`@splinetool/react-spline`).
- Methods for linking page scroll events to Spline state transitions or animations.
- How to programmatically manage Spline states from JavaScript/TypeScript.
- How to listen for Spline events (e.g., reaching a specific state) in React.
- How to trigger JavaScript actions (like `window.location.href` or React Router navigation) based on Spline events.
- Best practices for implementing scroll-driven Spline interactions.

---

## Scraped Documentation: Scroll Event

The Scroll Event requires the user to scroll in order to go through the transitions added inside.

There are two types available on the Scroll Event

- **Steps** → The amount of scroll needed to go from the beginning of a transition to the end.

- **Scroll →** lets you transition between states (set up in the actions section) based on the scroll of your web page.


Here are the different Actions you can trigger with the Scroll Event:

- [Transition Action](https://docs.spline.design/doc/transition-action/docXxZEdpc6G)

- [Animation Action](https://docs.spline.design/doc/animation-action/docZNv9uu4RY)

- [Create Object Action](https://docs.spline.design/doc/create-object-action/docVnWPvxlhd)

- [Set Variable Action](https://docs.spline.design/doc/set-variable-action/docU2eC4w9LS)

- [Variable Control Action](https://docs.spline.design/doc/variable-control-action/docmgHHgaAJ4)

- [Conditional Action](https://docs.spline.design/doc/conditional-action/docGVumbaFwB)

- [Clear Local Storage Action](https://docs.spline.design/doc/clear-local-storage-action/docGDuGpCyCY)

- [API Request Action](https://docs.spline.design/doc/api-request-action/docRmNIr5fNV)


![image](https://ucarecdn.com/886f2e69-927f-45e3-8b6f-945dc446820e/)

* * *

## Type Scroll

The **Scroll** event has a Type called **Scroll** which only works with the **_Viewer export_**.

This type lets you transition between states (set up in the actions section) based on the scroll of your web page.

> _👉 Check out the demo at:_ [_https://viewer-scroll-event.framer.website/_](https://viewer-scroll-event.framer.website/)

### Start From - Enter View

Objects with scroll events will start animating once the viewer component comes into view on your web page.

- **Start At**

  - **Top** → Animations will start once the top of the component gets into view.

  - **Middle** → Animations will start once the middle of the component gets into view.

  - **Bottom** → Animations will start once the bottom of the component gets into view.
- **Offset**-For each Start At option, you can still add an offset to that option so it starts later.


![image](https://ucarecdn.com/5bda9684-613c-4010-a41d-36e8783dc632/)

### Start From - Page

Objects with scroll events will start animating at the defined Start At the position of your web page, which means the height from the top of the webpage measured in pixels.

- **Start At**\- The position on your web page where the scroll events should start animating.

- **End After**\- Defines at what scroll amount (measured in pixels from the top of the web page) should the Transition Action reach its final state.


![image](https://ucarecdn.com/b387d735-e5bd-4511-9ba4-769216514788/)

* * *

Scroll Event

> _Scroll to interact! 👆 The Scroll Event uses scroll to go through the transitions added inside._

In this doc

- [Type Scroll](https://docs.spline.design/doc/scroll-event/docguVdZABnK#type-scroll "")
- [Start From - Enter View](https://docs.spline.design/doc/scroll-event/docguVdZABnK#start-from---enter-view "")
- [Start From - Page](https://docs.spline.design/doc/scroll-event/docguVdZABnK#start-from---page "")

[Previous\\
\\
Key Press Event](https://docs.spline.design/doc/key-press-event/docPXFsbRRj1)

[Next\\
\\
Look At Event](https://docs.spline.design/doc/look-at-event/docPkgilg6g6)

---

## Scraped Documentation: react-spline GitHub Repository README

[Skip to content](https://github.com/splinetool/react-spline#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/splinetool/react-spline) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/splinetool/react-spline) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/splinetool/react-spline) to refresh your session.Dismiss alert

[splinetool](https://github.com/splinetool)/ **[react-spline](https://github.com/splinetool/react-spline)** Public

- [Notifications](https://github.com/login?return_to=%2Fsplinetool%2Freact-spline) You must be signed in to change notification settings
- [Fork\\
67](https://github.com/login?return_to=%2Fsplinetool%2Freact-spline)
- [Star\\
1.3k](https://github.com/login?return_to=%2Fsplinetool%2Freact-spline)


React component for Spline scenes.


### License

[MIT license](https://github.com/splinetool/react-spline/blob/main/LICENSE)

[1.3k\\
stars](https://github.com/splinetool/react-spline/stargazers) [67\\
forks](https://github.com/splinetool/react-spline/forks) [Branches](https://github.com/splinetool/react-spline/branches) [Tags](https://github.com/splinetool/react-spline/tags) [Activity](https://github.com/splinetool/react-spline/activity)

[Star](https://github.com/login?return_to=%2Fsplinetool%2Freact-spline)

[Notifications](https://github.com/login?return_to=%2Fsplinetool%2Freact-spline) You must be signed in to change notification settings

# splinetool/react-spline

main

[**10** Branches](https://github.com/splinetool/react-spline/branches) [**24** Tags](https://github.com/splinetool/react-spline/tags)

[Go to Branches page](https://github.com/splinetool/react-spline/branches)[Go to Tags page](https://github.com/splinetool/react-spline/tags)

Go to file

Code

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| ## Latest commit<br>[![marcofugaro](https://avatars.githubusercontent.com/u/7217420?v=4&size=40)](https://github.com/marcofugaro)[marcofugaro](https://github.com/splinetool/react-spline/commits?author=marcofugaro)<br>[4.0.0](https://github.com/splinetool/react-spline/commit/19abc8d02aa9100de7927a26bb82eb3441a02b5c)<br>Jun 20, 2024<br>[19abc8d](https://github.com/splinetool/react-spline/commit/19abc8d02aa9100de7927a26bb82eb3441a02b5c) · Jun 20, 2024<br>## History<br>[134 Commits](https://github.com/splinetool/react-spline/commits/main/) |
| [.github/screenshots](https://github.com/splinetool/react-spline/tree/main/.github/screenshots "This path skips through empty directories") | [.github/screenshots](https://github.com/splinetool/react-spline/tree/main/.github/screenshots "This path skips through empty directories") | [📖 Update README](https://github.com/splinetool/react-spline/commit/e59cec0d052345dd4b56941b594fee564e6828fc "📖  Update README") | Apr 29, 2022 |
| [.yarn](https://github.com/splinetool/react-spline/tree/main/.yarn ".yarn") | [.yarn](https://github.com/splinetool/react-spline/tree/main/.yarn ".yarn") | [📦 Upgrade devdeps](https://github.com/splinetool/react-spline/commit/8c1581eac56c2c572ff77a49a371dc8a4c32bf80 "📦 Upgrade devdeps") | Dec 5, 2022 |
| [example](https://github.com/splinetool/react-spline/tree/main/example "example") | [example](https://github.com/splinetool/react-spline/tree/main/example "example") | [💻 Better responsive support](https://github.com/splinetool/react-spline/commit/1ad6ec34d69ee13dbf5c59c83ef48390f9122980 "💻 Better responsive support") | Feb 23, 2023 |
| [src](https://github.com/splinetool/react-spline/tree/main/src "src") | [src](https://github.com/splinetool/react-spline/tree/main/src "src") | [Correctly throw Spline errors (](https://github.com/splinetool/react-spline/commit/3de8f9130dba0e56c02fd15d1543f913c747b781 "Correctly throw Spline errors (#193)") [#193](https://github.com/splinetool/react-spline/pull/193) [)](https://github.com/splinetool/react-spline/commit/3de8f9130dba0e56c02fd15d1543f913c747b781 "Correctly throw Spline errors (#193)") | Jun 20, 2024 |
| [.gitignore](https://github.com/splinetool/react-spline/blob/main/.gitignore ".gitignore") | [.gitignore](https://github.com/splinetool/react-spline/blob/main/.gitignore ".gitignore") | [🐈 Upgrade yarn](https://github.com/splinetool/react-spline/commit/332e49d01a92c387bc3e8844346a6a754641e47b "🐈 Upgrade yarn") | Apr 14, 2022 |
| [.np-config.json](https://github.com/splinetool/react-spline/blob/main/.np-config.json ".np-config.json") | [.np-config.json](https://github.com/splinetool/react-spline/blob/main/.np-config.json ".np-config.json") | [🔧 Configure np](https://github.com/splinetool/react-spline/commit/5e831bd5495fc075d33bb7177d1537139f8ebe4c "🔧 Configure np") | Apr 26, 2022 |
| [.prettierignore](https://github.com/splinetool/react-spline/blob/main/.prettierignore ".prettierignore") | [.prettierignore](https://github.com/splinetool/react-spline/blob/main/.prettierignore ".prettierignore") | [Small Chores (](https://github.com/splinetool/react-spline/commit/8fbc6b0d2c73da3e60c5227c0619ea779cf47656 "Small Chores (#4)  * chore: Add prettierrc  * Get rid of unnecessary files  * Fix types  * Remove example/src folder  * Update main path") [#4](https://github.com/splinetool/react-spline/pull/4) [)](https://github.com/splinetool/react-spline/commit/8fbc6b0d2c73da3e60c5227c0619ea779cf47656 "Small Chores (#4)  * chore: Add prettierrc  * Get rid of unnecessary files  * Fix types  * Remove example/src folder  * Update main path") | Nov 26, 2021 |
| [.prettierrc](https://github.com/splinetool/react-spline/blob/main/.prettierrc ".prettierrc") | [.prettierrc](https://github.com/splinetool/react-spline/blob/main/.prettierrc ".prettierrc") | [Small Chores (](https://github.com/splinetool/react-spline/commit/8fbc6b0d2c73da3e60c5227c0619ea779cf47656 "Small Chores (#4)  * chore: Add prettierrc  * Get rid of unnecessary files  * Fix types  * Remove example/src folder  * Update main path") [#4](https://github.com/splinetool/react-spline/pull/4) [)](https://github.com/splinetool/react-spline/commit/8fbc6b0d2c73da3e60c5227c0619ea779cf47656 "Small Chores (#4)  * chore: Add prettierrc  * Get rid of unnecessary files  * Fix types  * Remove example/src folder  * Update main path") | Nov 26, 2021 |
| [.yarnrc.yml](https://github.com/splinetool/react-spline/blob/main/.yarnrc.yml ".yarnrc.yml") | [.yarnrc.yml](https://github.com/splinetool/react-spline/blob/main/.yarnrc.yml ".yarnrc.yml") | [📦 Upgrade devdeps](https://github.com/splinetool/react-spline/commit/8c1581eac56c2c572ff77a49a371dc8a4c32bf80 "📦 Upgrade devdeps") | Dec 5, 2022 |
| [LICENSE](https://github.com/splinetool/react-spline/blob/main/LICENSE "LICENSE") | [LICENSE](https://github.com/splinetool/react-spline/blob/main/LICENSE "LICENSE") | [📃 Add LICENSE (](https://github.com/splinetool/react-spline/commit/b5b3882d27091010faf8e5dcf743c2eb04b986ab "📃 Add LICENSE (#47)") [#47](https://github.com/splinetool/react-spline/pull/47) [)](https://github.com/splinetool/react-spline/commit/b5b3882d27091010faf8e5dcf743c2eb04b986ab "📃 Add LICENSE (#47)") | Jun 8, 2022 |
| [README.md](https://github.com/splinetool/react-spline/blob/main/README.md "README.md") | [README.md](https://github.com/splinetool/react-spline/blob/main/README.md "README.md") | [Allow usage of onXXX native events (](https://github.com/splinetool/react-spline/commit/ff77f563185559e52763916c6b712a2d3962b5e3 "Allow usage of onXXX native events (#192)") [#192](https://github.com/splinetool/react-spline/pull/192) [)](https://github.com/splinetool/react-spline/commit/ff77f563185559e52763916c6b712a2d3962b5e3 "Allow usage of onXXX native events (#192)") | Jun 20, 2024 |
| [package.json](https://github.com/splinetool/react-spline/blob/main/package.json "package.json") | [package.json](https://github.com/splinetool/react-spline/blob/main/package.json "package.json") | [4.0.0](https://github.com/splinetool/react-spline/commit/19abc8d02aa9100de7927a26bb82eb3441a02b5c "4.0.0") | Jun 20, 2024 |
| [rollup-plugin-rename-node-modules.d.ts](https://github.com/splinetool/react-spline/blob/main/rollup-plugin-rename-node-modules.d.ts "rollup-plugin-rename-node-modules.d.ts") | [rollup-plugin-rename-node-modules.d.ts](https://github.com/splinetool/react-spline/blob/main/rollup-plugin-rename-node-modules.d.ts "rollup-plugin-rename-node-modules.d.ts") | [Next.js placeholder (](https://github.com/splinetool/react-spline/commit/562f0641ef3a8bb97aea755eb37045079a398a71 "Next.js placeholder (#187)  * feat: (wip) next preview  * fix: update for next server rendering  * Configure build for Next.js  * Exclude react correctly  * Write docs  * fix: handle thumbhash and add size params  * fix: get from backend  * fix: json  * update readme with new API  * Force cache on prod  * Don't display canvas on SSR  * Revert \"Don't display canvas on SSR\"  This reverts commit 44bdb0df3adb9b7cc132dab8adee7ffe85b2ee66.  * Don't display canvas on SSR again  * fix: container  * Revert \"fix: container\"  This reverts commit 615f9fb7c2f3485974f9ec55239a87cd4e06a397.  * Let's try again..  * fix: render image inside Spline client component  * overflow-hidden  * Wording  ---------  Co-authored-by: Guillaume Gouessan <guillaume.gouessan@gmail.com>") [#187](https://github.com/splinetool/react-spline/pull/187) [)](https://github.com/splinetool/react-spline/commit/562f0641ef3a8bb97aea755eb37045079a398a71 "Next.js placeholder (#187)  * feat: (wip) next preview  * fix: update for next server rendering  * Configure build for Next.js  * Exclude react correctly  * Write docs  * fix: handle thumbhash and add size params  * fix: get from backend  * fix: json  * update readme with new API  * Force cache on prod  * Don't display canvas on SSR  * Revert \"Don't display canvas on SSR\"  This reverts commit 44bdb0df3adb9b7cc132dab8adee7ffe85b2ee66.  * Don't display canvas on SSR again  * fix: container  * Revert \"fix: container\"  This reverts commit 615f9fb7c2f3485974f9ec55239a87cd4e06a397.  * Let's try again..  * fix: render image inside Spline client component  * overflow-hidden  * Wording  ---------  Co-authored-by: Guillaume Gouessan <guillaume.gouessan@gmail.com>") | Jun 4, 2024 |
| [tsconfig.json](https://github.com/splinetool/react-spline/blob/main/tsconfig.json "tsconfig.json") | [tsconfig.json](https://github.com/splinetool/react-spline/blob/main/tsconfig.json "tsconfig.json") | [🔨 Fix typescript compilation](https://github.com/splinetool/react-spline/commit/45bf59a8e118c6119c6aeb424e9785c6a913c68d "🔨 Fix typescript compilation") | Apr 26, 2022 |
| [tsconfig.node.json](https://github.com/splinetool/react-spline/blob/main/tsconfig.node.json "tsconfig.node.json") | [tsconfig.node.json](https://github.com/splinetool/react-spline/blob/main/tsconfig.node.json "tsconfig.node.json") | [Next.js placeholder (](https://github.com/splinetool/react-spline/commit/562f0641ef3a8bb97aea755eb37045079a398a71 "Next.js placeholder (#187)  * feat: (wip) next preview  * fix: update for next server rendering  * Configure build for Next.js  * Exclude react correctly  * Write docs  * fix: handle thumbhash and add size params  * fix: get from backend  * fix: json  * update readme with new API  * Force cache on prod  * Don't display canvas on SSR  * Revert \"Don't display canvas on SSR\"  This reverts commit 44bdb0df3adb9b7cc132dab8adee7ffe85b2ee66.  * Don't display canvas on SSR again  * fix: container  * Revert \"fix: container\"  This reverts commit 615f9fb7c2f3485974f9ec55239a87cd4e06a397.  * Let's try again..  * fix: render image inside Spline client component  * overflow-hidden  * Wording  ---------  Co-authored-by: Guillaume Gouessan <guillaume.gouessan@gmail.com>") [#187](https://github.com/splinetool/react-spline/pull/187) [)](https://github.com/splinetool/react-spline/commit/562f0641ef3a8bb97aea755eb37045079a398a71 "Next.js placeholder (#187)  * feat: (wip) next preview  * fix: update for next server rendering  * Configure build for Next.js  * Exclude react correctly  * Write docs  * fix: handle thumbhash and add size params  * fix: get from backend  * fix: json  * update readme with new API  * Force cache on prod  * Don't display canvas on SSR  * Revert \"Don't display canvas on SSR\"  This reverts commit 44bdb0df3adb9b7cc132dab8adee7ffe85b2ee66.  * Don't display canvas on SSR again  * fix: container  * Revert \"fix: container\"  This reverts commit 615f9fb7c2f3485974f9ec55239a87cd4e06a397.  * Let's try again..  * fix: render image inside Spline client component  * overflow-hidden  * Wording  ---------  Co-authored-by: Guillaume Gouessan <guillaume.gouessan@gmail.com>") | Jun 4, 2024 |
| [vite.config.ts](https://github.com/splinetool/react-spline/blob/main/vite.config.ts "vite.config.ts") | [vite.config.ts](https://github.com/splinetool/react-spline/blob/main/vite.config.ts "vite.config.ts") | [Make deps external](https://github.com/splinetool/react-spline/commit/1f733d6baa5cfb4459625efd7e99e1ddba6656e5 "Make deps external") | Jun 4, 2024 |
| [yarn.lock](https://github.com/splinetool/react-spline/blob/main/yarn.lock "yarn.lock") | [yarn.lock](https://github.com/splinetool/react-spline/blob/main/yarn.lock "yarn.lock") | [Update yarn](https://github.com/splinetool/react-spline/commit/b905fa6a432310d617a0b85d302ca920049e648b "Update yarn") | Jun 19, 2024 |
| View all files |

## Repository files navigation

[![](https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/hero.png)](https://my.spline.design/splinereactlogocopycopy-eaa074bf6b2cc82d870c96e262a625ae/)

# react-spline

[Permalink: react-spline](https://github.com/splinetool/react-spline#react-spline)

**react-spline** allows you to export and use Spline scenes directly in your React websites.

🌈 [Spline](https://spline.design/) is a friendly 3d collaborative design tool for the web.

[Website](https://spline.design/) —
[Twitter](https://twitter.com/splinetool) —
[Community](https://discord.gg/M9hNDMqvnw) —
[Documentation](https://docs.spline.design/)

## Table of Contents

[Permalink: Table of Contents](https://github.com/splinetool/react-spline#table-of-contents)

- [Install](https://github.com/splinetool/react-spline#install)
- [Usage](https://github.com/splinetool/react-spline#usage)
  - [Next.js](https://github.com/splinetool/react-spline#nextjs)
  - [Read and modify Spline objects](https://github.com/splinetool/react-spline#read-and-modify-spline-objects)
  - [Listen to events](https://github.com/splinetool/react-spline#listen-to-events)
  - [Trigger Spline events from outside](https://github.com/splinetool/react-spline#trigger-spline-events-from-outside)
  - [Lazy loading](https://github.com/splinetool/react-spline#lazy-loading)
- [API](https://github.com/splinetool/react-spline#api)
  - [Spline Component Props](https://github.com/splinetool/react-spline#spline-component-props)
  - [Spline App Methods](https://github.com/splinetool/react-spline#spline-app-methods)
  - [Spline Events](https://github.com/splinetool/react-spline#spline-events)
- [Contributing](https://github.com/splinetool/react-spline#contributing)

## Install

[Permalink: Install](https://github.com/splinetool/react-spline#install)

```
yarn add @splinetool/react-spline @splinetool/runtime
```

or

```
npm install @splinetool/react-spline @splinetool/runtime
```

## Usage

[Permalink: Usage](https://github.com/splinetool/react-spline#usage)

To use react-spline, first you have to go to the Spline editor, click on the **Export** button, select " **Code**" and then " **React**".

You should see this:

[![](https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/react-export-pane.png)](https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/react-export-pane.png)

You can copy the URL and pass it to the `<Spline />` component in react:

```
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}
```

You should be able to see the scene you exported in your React app.

[![](https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/example-basic.png)](https://codesandbox.io/s/sweet-rain-28pcxt?file=/src/App.js)

**NOTE**: If you are experiencing CORS issues, you can download the .splinecode file and self-host it; this will fix any CORS issue. To download, go to Spline's code export panel and click on the download icon visible in the prod.spline textarea.

### Next.js

[Permalink: Next.js](https://github.com/splinetool/react-spline#nextjs)

You can use this library in Next.js as well to take advantage of Server Side Rendering. By default the library will render on the client only, but if you use the import `@splinetool/react/next` the server will render an autogenerated blurred placeholder.

Here is an example. Export as `Next.js` from the Spline editor to autogenerate the placeholder.

```
import Spline from '@splinetool/react-spline/next';

export default function App() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/KFonZGtsoUXP-qx7/scene.splinecode" />
    </div>
  );
}
```

### Read and modify Spline objects

[Permalink: Read and modify Spline objects](https://github.com/splinetool/react-spline#read-and-modify-spline-objects)

You can query any Spline object via `findObjectByName` or `findObjectById`.

_(You can get the ID of the object by right-clicking on it and selecting `Copy Development Object ID`)._

```
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }

  function moveObj() {
    console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    cube.current.position.x += 10;
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>
    </div>
  );
}
```

### Listen to Spline Events

[Permalink: Listen to Spline Events](https://github.com/splinetool/react-spline#listen-to-spline-events)

You can listen to any Spline Event you set in the Events panel of the editor by attaching a listener to the Spline component.

```
import Spline from '@splinetool/react-spline';

export default function App() {
  function onSplineMouseDown(e) {
    if (e.target.name === 'Cube') {
      console.log('I have been clicked!');
    }
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onSplineMouseDown={onSplineMouseDown}
      />
    </div>
  );
}
```

You can find a list of all of the Spline Event listeners in the [Spline Component Props](https://github.com/splinetool/react-spline#spline-component-props) section.

### Trigger Spline events from outside

[Permalink: Trigger Spline events from outside](https://github.com/splinetool/react-spline#trigger-spline-events-from-outside)

You can trigger any animation Event you set in the Events panel in the Spline Editor.

You can use the `emitEvent` function via the spline ref, passing the [event type](https://github.com/splinetool/react-spline#spline-events) and the ID of your object.

_(You can get the ID of the object in the `Develop` pane of the right sidebar)._

```
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation() {
    spline.current.emitEvent('mouseHover', 'Cube');
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={triggerAnimation}>
        Trigger Spline Animation
      </button>
    </div>
  );
  }
```

Or you can query the spline object first, and then trigger the event:

```
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const objectToAnimate = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    // save the object in a ref for later use
    objectToAnimate.current = obj;
  }

  function triggerAnimation() {
    objectToAnimate.current.emitEvent('mouseHover');
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={triggerAnimation}>
        Trigger Spline Animation
      </button>
    </div>
  );
}
```

You can find a list of all of the Spline Events you can pass to the `emitEvent` function in the [Spline Events](https://github.com/splinetool/react-spline#spline-events) section.

### Lazy loading

[Permalink: Lazy loading](https://github.com/splinetool/react-spline#lazy-loading)

To start loading react-spline after the whole website has finished loading, we can use lazy-loading. This technique can be achieved using [`React.lazy()`](https://it.reactjs.org/docs/code-splitting.html#reactlazy) in combination with dynamic imports:

```
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </Suspense>
    </div>
  );
}
```

More info in the [relative React documentation](https://it.reactjs.org/docs/code-splitting.html).

## API

[Permalink: API](https://github.com/splinetool/react-spline#api)

### Spline Component Props

[Permalink: Spline Component Props](https://github.com/splinetool/react-spline#spline-component-props)

These are all the props you can pass to the `<Spline />` component.

| Name | Type | Description |
| --- | --- | --- |
| `scene` | `string` | Scene file |
| `onLoad?` | `(spline: Application) => void` | Gets called once the scene has loaded. The `spline` parameter is an instance of the [Spline Application](https://github.com/splinetool/react-spline#spline-app-methods) |
| `renderOnDemand?` | `boolean` | Wether or not to enable [on demand rendering](https://threejs.org/manual/#en/rendering-on-demand). Default `true`. |
| `className?` | `string` | CSS classes |
| `style?` | `object` | CSS style |
| `id?` | `string` | Canvas id |
| `ref?` | `React.Ref<HTMLDivElement>` | A ref pointing to div container element. |
| `onSplineMouseDown?` | `(e: SplineEvent) => void` | Gets called once a Spline `Mouse Down` event is fired |
| `onSplineMouseHover?` | `(e: SplineEvent) => void` | Gets called once a Spline `Mouse Hover` event is fired |
| `onSplineMouseUp?` | `(e: SplineEvent) => void` | Gets called once a Spline `Mouse Up` event is fired |
| `onSplineKeyDown?` | `(e: SplineEvent) => void` | Gets called once a Spline `Key Down` event is fired |
| `onSplineKeyUp?` | `(e: SplineEvent) => void` | Gets called once a Spline `Key Up` event is fired |
| `onSplineStart?` | `(e: SplineEvent) => void` | Gets called once a Spline `Start` event is fired |
| `onSplineLookAt?` | `(e: SplineEvent) => void` | Gets called once a Spline `Mouse Up` event is fired |
| `onSplineFollow?` | `(e: SplineEvent) => void` | Gets called once a Spline `Mouse Up` event is fired |
| `onSplineScroll?` | `(e: SplineEvent) => void` | Gets called once a Spline `Scroll` event is fired |

### Spline App Methods

[Permalink: Spline App Methods](https://github.com/splinetool/react-spline#spline-app-methods)

The object exposed as a first argument of the `onLoad` function, is a Spline Application. You can call all these different methods on it.

| Name | Type | Description |
| --- | --- | --- |
| `emitEvent` | `(eventName: SplineEventName, nameOrUuid: string) => void` | Triggers a Spline event associated to an object with provided name or uuid. |
| `emitEventReverse` | `(eventName: SplineEventName, nameOrUuid: string) => void` | Triggers a Spline event associated to an object with provided uuid in reverse order. Starts from last state to first state. |
| `findObjectById` | `(uuid: string) => SPEObject` | Searches through scene's children and returns the object with that uuid. |
| `findObjectByName` | `(name: string) => SPEObject` | Searches through scene's children and returns the first object with that name. |
| `setZoom` | `(zoom: number) => void` | Sets the initial zoom of the scene. |

### Spline Events

[Permalink: Spline Events](https://github.com/splinetool/react-spline#spline-events)

These are all the Spline event types that you can pass to the `emitEvent` or `emitEventReverse` function.

| Name | Description |
| --- | --- |
| `mouseDown` | Refers to the Spline `Mouse Down` event type |
| `mouseHover` | Refers to the Spline `Mouse Hover` event type |
| `mouseUp` | Refers to the Spline `Mouse Up` event type |
| `keyDown` | Refers to the Spline `Key Down` event type |
| `keyUp` | Refers to the Spline `Key Up` event type |
| `start` | Refers to the Spline `Start` event type |
| `lookAt` | Refers to the Spline `Look At` event type |
| `follow` | Refers to the Spline `Mouse Up` event type |

## Contributing

[Permalink: Contributing](https://github.com/splinetool/react-spline#contributing)

We use [yarn](https://yarnpkg.com/), install the dependencies like this:

```
yarn
```

### Development

[Permalink: Development](https://github.com/splinetool/react-spline#development)

Serve the `example` folder at localhost:3000

```
yarn dev
```

### Build Library

[Permalink: Build Library](https://github.com/splinetool/react-spline#build-library)

```
yarn build
```

### Publish on npm

[Permalink: Publish on npm](https://github.com/splinetool/react-spline#publish-on-npm)

```
yarn publish
```

## About

React component for Spline scenes.


### Topics

[react](https://github.com/topics/react "Topic: react")

### Resources

[Readme](https://github.com/splinetool/react-spline#readme-ov-file)

### License

[MIT license](https://github.com/splinetool/react-spline#MIT-1-ov-file)

[Activity](https://github.com/splinetool/react-spline/activity)

[Custom properties](https://github.com/splinetool/react-spline/custom-properties)

### Stars

[**1.3k**\\
stars](https://github.com/splinetool/react-spline/stargazers)

### Watchers

[**16**\\
watching](https://github.com/splinetool/react-spline/watchers)

### Forks

[**67**\\
forks](https://github.com/splinetool/react-spline/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fsplinetool%2Freact-spline&report=splinetool+%28user%29)

## [Releases\  8](https://github.com/splinetool/react-spline/releases)

[v4.0.0\\
Latest\\
\\
Jun 20, 2024](https://github.com/splinetool/react-spline/releases/tag/v4.0.0)

[\+ 7 releases](https://github.com/splinetool/react-spline/releases)

## [Packages\  0](https://github.com/orgs/splinetool/packages?repo_name=react-spline)

No packages published

## [Used by 15.8k](https://github.com/splinetool/react-spline/network/dependents)

[- ![@nufaill](https://avatars.githubusercontent.com/u/177338157?s=64&v=4)\\
- ![@kavisudar](https://avatars.githubusercontent.com/u/145850612?s=64&v=4)\\
- ![@Ashujais](https://avatars.githubusercontent.com/u/120046706?s=64&v=4)\\
- ![@SRD1510](https://avatars.githubusercontent.com/u/146012727?s=64&v=4)\\
- ![@offbeatraj](https://avatars.githubusercontent.com/u/159812038?s=64&v=4)\\
- ![@Mohamad432123](https://avatars.githubusercontent.com/u/166270766?s=64&v=4)\\
- ![@jiyih](https://avatars.githubusercontent.com/u/164936010?s=64&v=4)\\
- ![@Khushbu-github](https://avatars.githubusercontent.com/u/179250532?s=64&v=4)\\
\\
\+ 15,820](https://github.com/splinetool/react-spline/network/dependents)

## [Contributors\  6](https://github.com/splinetool/react-spline/graphs/contributors)

- [![@marcofugaro](https://avatars.githubusercontent.com/u/7217420?s=64&v=4)](https://github.com/marcofugaro)
- [![@claudiabdm](https://avatars.githubusercontent.com/u/44007726?s=64&v=4)](https://github.com/claudiabdm)
- [![@superguigui](https://avatars.githubusercontent.com/u/400119?s=64&v=4)](https://github.com/superguigui)
- [![@dependabot[bot]](https://avatars.githubusercontent.com/in/29110?s=64&v=4)](https://github.com/apps/dependabot)
- [![@futurGH](https://avatars.githubusercontent.com/u/80354781?s=64&v=4)](https://github.com/futurGH)
- [![@rickturner2001](https://avatars.githubusercontent.com/u/93800987?s=64&v=4)](https://github.com/rickturner2001)

## Languages

- [TypeScript97.5%](https://github.com/splinetool/react-spline/search?l=typescript)
- [HTML1.6%](https://github.com/splinetool/react-spline/search?l=html)
- [CSS0.9%](https://github.com/splinetool/react-spline/search?l=css)

You can’t perform that action at this time.
