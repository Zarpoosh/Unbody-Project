# React + TypeScript + Vite + Unbody api 🔥

Getting Started with react-unbody after Cloning
 ### Prerequisites:
- Node.js 16.x or above
- bun or npm or yarn

## Steps:
run this command in your bash or terminal to clone project: 👇
``` 
git clone https://github.com/your-username/react-unbody.git your-project-name
```

## Navigate into the project directory:
``` 
cd your-project-name
```

## Install dependencies:
there is 3 ways to install dependencies. You must run one of the following commands:👇
```
bun install
npm install
yarn install
```

## Start the project:
```
bun run dev
yarn dev
npm run dev
```
This will start the project in development mode using Vite.

# How we use the project:🤔🤷‍♀️❓
- go to the `GoogleDocs` folder and `GoogleDocBlock` component.
- find the blow codes and your `apikey` and `projectId` in your unbody source and paste.
![Screenshot from 2024-04-21 07-41-31](https://github.com/Zarpoosh/Unbody-Project/assets/122268379/eeb318cf-d83a-4ae2-b408-0cbd372cee09)
![Screenshot from 2024-04-21 07-40-03](https://github.com/Zarpoosh/Unbody-Project/assets/122268379/f74e91be-2a1d-4569-a2c8-03198f434cd4)


```JS
const u = new Unbody({
          apiKey: "YOUR_API_KEY",
          projectId: "YOUR_PROJECT_ID",
        });
```

==>>> After pasting the `PROJECT_ID` & `API_KEY` of your Google Drive files, it will be listed and you can access them by searching the name of your files
For example, in the folder that I linked with Unbody, there are the following files that you can access their information by searching for these names:
- animal
- galexy
- language
- programming
- tools
- suceess


1- Open `http://localhost:3000 in your browser`. 
<br>
2- Configure your Unbody project using the Unbody.io UI.<br>
3- Use `react-unbody` to interact with the Unbody.io API in your React application.

### Tips:
- For more information about react-unbody, refer to the official documentation: [https://github.com/unbody-io]
- For more information about Unbody.io, visit: [https://www.unbody.io/]

<br><br><br>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
