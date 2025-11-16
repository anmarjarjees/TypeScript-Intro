# TypeScript-Intro
Quick demonstration for learning the essentials of TypeScript before Angular Framework.

# What's TypeScript?
- [TypeScript](https://www.typescriptlang.org/) is a **superset of JavaScript**. 
- It is a **strongly typed programming language** that builds on **"JavaScript"**, giving you better tooling at any scale.
- It can be used for **Front-End development with Angular** or **Back-End development with Node.js**.
- It has been used extensively as the **default language for Angular applications since Angular 2**, but it can also be used with **any JavaScript framework or library**.
- Includes modern JavaScript features from **ES6+ (ECMAScript 2015 and later)**.
- All TypeScript files are **compiled (transpiled) to JavaScript** so that they can run in any browser or JavaScript runtime.
- TypeScript file extensions are:
  - `.ts` for standard TypeScript
  - `.tsx` for TypeScript with JSX (mainly used in React)
- [TSC (TypeScript Compiler)](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler) is used to compile `.ts` files into `.js` files.  

**More details: [TypeScript Compiler in VS Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial)**


**Notice that:**
**Notice that:**

- **ES6+ (modern JavaScript) syntax** is supported by all modern browsers **without requiring TypeScript**.
- **TypeScript is built on top of JavaScript** and it includes all JavaScript features.  
  This means **any valid JavaScript code is also valid TypeScript code**.
  
  ![TS-JS-Circles](/repo-img/TS-JS-Circles.png)

- TypeScript needs a **compiler (TSC)** to convert `.ts` files into regular `.js` files that all browsers and JavaScript runtimes can execute.

  ![TypeScript Compiler](/repo-img/TS-To-JS.png)

---
---

# Dynamically vs Statically Typed Languages
To recap, as we have experienced before, there are two main categories of programming languages based on how they handle data types:

- **Dynamically Typed Languages:**  
  Variable types are determined and checked **at runtime** rather than during compilation.  
  The data type is **not explicitly declared** in the code.  
  - Examples: JavaScript, PHP, Python

- **Statically Typed Languages:**  
  Variable types are determined and checked **at compile time, before runtime**.  
  The data type is **explicitly declared or inferred** for each variable.  
  - Examples: Java, C#, C/C++

- **Where does TypeScript fit?**
TypeScript is **statically typed**, but it also supports **type inference**, which means it can automatically detect the type even if you don't explicitly write it.

Example:
```ts
let age = 25; // TypeScript automatically detects the type which is "number"
```

# Environment Setup (with VS Code)
Since we are going to run commands using **npm** (Node Package Manager), we need to have **Node.js** installed first.  
If you need guidance, please refer to my repo: ["Starting with Node"](https://github.com/anmarjarjees/node.js-start).

Next, we install the [TypeScript Compiler](https://code.visualstudio.com/docs/typescript/typescript-compiling).

### Using VS Code Terminal
- Press **CTRL + `** to toggle the integrated terminal.
- Or right-click any folder and select **Open in Integrated Terminal**.

### Installing TypeScript

#### 1. Global installation (available system-wide)
Install typescript globally to be available for the entire system (OS). Using "-g" for global (being able to access TS from any folder)
```bash
npm i -g typescript
```
The -g flag stands for global, making TypeScript accessible from any folder.

#### 2. Local installation (project-specific)
Install it locally for this project (within its folder):
```bash
npm i --save-dev typescript
```
Adds TypeScript as a devDependency for this project.

**For Mac Users:**
1. Mac users need to add sudo:
  - add sudo "Super User Do :-)"
```bash
sudo npm i -g typescript
```

2. We can also use the full word "install" instead of just "i".
Remember that npm command will create the **"package.json"** file as usual. with TS, this json file will only include:
- Global/normal installation (dependencies)
  ```json
  {
    "dependencies": {
      "typescript": "^5.3.3"
    }
  }
  ```

- Local installation (development mode)
  ```
  {
    "devDependencies": {
      "typescript": "^5.3.3"
    }
  }
  ```

# Checking TypeScript version
After installation, you can check the version of tsc:
```bash
tsc --version
```
OR:
```bash
tsc -version
```
OR:
```bash
tsc -v
```
OR:
```bash
tsc --v
```

**Note: tsc -version and tsc --v are not standard flags and may not work reliably. Always use tsc --version or tsc -v.**

## IMPORTANT NOTE
**Please be advised that you need to run the first command to install TypeScript globally:**
```bash
npm i -g typescript
```
You will need to have administrative privileges. If you are not an Admin user, you have two options:
1. Install TypeScript locally using the same command as explained above:
    ```bash
    npm i --save-dev typescript
    ```
  
    or when installing it locally for development mode using:
    ```bash
    npm i --save-dev typescript
    ```


2. Use npx as a workaround. **npx** runs the binary from the local node_modules if available, or it will temporarily install the package and run it:
    ```bash
    npx tsc --version
    ```

For this reason, you might encounter an error when running this simple command to test the TypeScript version:
```bash
tsc --version
```
This happens because **"tsc"** is not installed globally in the system **PATH** when TypeScript is installed locally.

For the simplest setup, it is recommended to **install TypeScript globally**.
However, if you prefer a local installation, you can use npx to run the TypeScript compiler as explained above:
```bash
npx tsc --version
```

# Start Coding :-)
Starting with the basics, please refer to the folder **"basics"** first.  
We can use the terminal commands `"cd folderName"`, `"cd.."`, `"cd"`.  

**(Notice that I had to rename the .ts extensions for the two test files to "ts1" and "ts2" to avoid errors or any variable conflicts based on the advanced changes that we will do later)**

1. Create a `test1.js` file inside your project folder, for example named **"Basics"**.  
2. **TypeScript files cannot run directly in browsers or Node.js**.  
3. Use **TSC (TypeScript Compiler)** with the `tsc` command to convert TypeScript files into regular JavaScript (Vanilla JavaScript) files.  
4. To compile a `.ts` file, for example `index.ts`, run::
    ```bash
    tsc index.ts
    ```
5. tsc will create an equivalent .js file from the .ts file.
6. To run any .js file in the Node.js environment:
    ```bash
    node fileName.js
    ```
**NOTE:**
If you run `tsc` without specifying a file name, TSC will compile all .ts files within the current directory of the tsc command, or in the directory specified in your configuration file.

# TypeScript To JavaScript
By default, [TSC compiles TypeScript to ES3](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#downleveling), which **does not support `promises`, `async`, or `await`**, features introduced in ES6.  

### For a simple test and demonstration:

Start a new `.ts` file named **"test2"**.

Try this simple `async` / `await` function:

```ts
async function sayHi() {
    console.log("Hi...");
}

```
Check the compiled files test2.ts and test2.js.

You will notice that test2.js contains long and complex code with extra helper functions and settings.
This is because TypeScript has to transform the async function to make it work in ES3 environments, which do not natively support async/await.

### Nice Tip:
You can compile your TypeScript to ES6 instead of the default ES3.
This makes **async/await** code generate simpler JavaScript, which works directly in modern browsers or Node.js:
```bash
tsc test2.ts --target ES6
```

# The "tsconfig.json" configuration file

The TypeScript Compiler (`tsc`) has many options that can be modified to customize its behavior.  
While you can customize the default options using the CLI, it is **much easier and more practical** to create a dedicated configuration file named **["tsconfig.json"](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)**.  

This file allows you to set any options you want. For example, in a **Linux environment** (like using Git Bash after installing Git — please refer to my full PDF about using Git and GitHub for more details), you can create the file manually:

```bash
touch tsconfig.json
```

Alternatively, you can run the following native tsc command, which works with any CLI.
It will create a tsconfig.json file with all default settings, including comments describing each option:
```bash
tsc --init
```
**Dear students: Please refer to my changes/comments marked with "AJ" in the tsconfig.json file.**

## For an empty tsconfig.json file
In case you have created an empty `tsconfig.json` file:  
Inside this file, we can add [a few needed options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#examples) using standard JSON format.  

You can also check:  
- The ["tsconfig.json" README content of the "Learn-TypeScript" repo](https://github.com/TypeStrong/learn-typescript/blob/master/04-project/01-tsconfig/README.md)  
- The ["tsconfig.json" section from "TypeScript Deep Dive" GitBook](https://basarat.gitbook.io/typescript/project/compilation-context/tsconfig)

### Common properties to include:
- **`compilerOptions`**: An object that contains other compiler settings.  
- **`target`** ([docs](https://www.typescriptlang.org/tsconfig#target)):  
  Specifies the JavaScript version to output. For example: `"ES6"` (supported by all modern browsers).  
  - Default without `tsconfig.json` is `ES3`.  
  - You can use `"esnext"` to target the latest JS version available in your environment — many programmers prefer this for new projects.  
  - VS Code will show all valid values when editing this property.  

- **`rootDir`**: Specifies the folder containing your source code, like a `src` folder in a Java project.  
- **`outDir`**: By default, TypeScript outputs `.js` files next to their `.ts` files.  
  Use `outDir` to separate generated `.js` files into another folder.  
- **`noEmit`**: Skip generating `.js` files entirely. TypeScript will only check types.  
- **`lib`** ([docs](https://www.typescriptlang.org/tsconfig#lib)): Specifies library files to include in compilation.  
  - Example: If your program doesn’t run in a browser, you might omit `"dom"` type definitions.  
  - More details: [Including built-in type declarations with `--lib`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#including-built-in-type-declarations-with---lib)  

### Helpful tips:
- To see all valid values for any property:  
  1. Click the property value in VS Code  
  2. Press **CTRL+Space**  

- Please refer to the `tsconfig.json` file in this project to see the changes and my comments.

## NOTES: 
- The **root directory** and the **out directory** have to be created manually.  

Example `tsconfig.json` configuration:
```json
{
  "compilerOptions": {
    "target":"ES6",
    "outDir":"compiled",
    "lib": ["dom","es6"]
  }
}
```

- To create this file with the default predefined options, we can use the command:
```bash
tsc --init
```
- After setting the root and output directories, we can simply run:
```bash
tsc
```
This will compile all .ts files inside the "root" folder into .js files inside the "outDir" folder we specified (example: "final").

### To recap:
- Write your code in **TypeScript** `.ts` files.  
- Run the following command from any sub-folder within your project (since TS is installed globally):
```bash
tsc
```
- Navigate to the output folder (or any folder where you set the .js files to be generated) and run the file using Node.js, assuming the file name is test.js:
```bash
node test
```

### Modify TS Code and run JS file:
Instead of repeatedly running the `tsc` command to update the compiled `.js` file, we can use **watch mode**.  
This allows TypeScript to continuously monitor the `.ts` file and automatically update the corresponding `.js` file whenever the `.ts` file is saved:
```bash
tsc --watch index.ts
```
OR:
```bash
tsc -w index.ts
```
OR just:
```bash
tsc -w 
```

After TSC is watching our .ts file, we can modify the TypeScript file and simply run its compiled .js file inside the destination directory (in our case named "out"):
```bash
node index.js
```
OR:
```bash
node index
```

### The main code:
We can refer to the content of the folder **"src"**.
To watch just the first file "demo1.ts" without compiling all file
```bash
tsc --watch demo1.ts
```
---
---
# References, Recourses, and Credits:
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)
- [Microsoft GitHub - TypeScript](https://github.com/microsoft/TypeScript)
- [Learning TypeScript (The Complete Workshops) GitHub Repo](https://github.com/TypeStrong/learn-typescript)
- [Dave Gray](https://github.com/gitdagray): Solutions Architect, Software Engineer, Web Developer, Instructor, PhD in Information Systems Candidate
- [Jess Chadwick](https://www.jesschadwick.com/): Technologist, Agilist, Leader, and Teacher specializing in web technologies: ASP.NET and TypeScript
- [Brad Traversy](https://github.com/bradtraversy): Full-Stack Web Developer and Online Instructor
- [Getting Started with TypeScript - Free E-Book by Basarat Ali Syed](https://basarat.gitbook.io/typescript/getting-started)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [W3 Schools - TypeScript](https://www.w3schools.com/typescript/index.php)