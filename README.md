# TypeScript-Intro
Quick demonstration for learning the essentials of TypeScript before Angular Framework.

# What's TypeScript?
- [TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript. It is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
. Are used for Front-End with Angular JS Framework or Back-End with Node.JS
- It is used extensively as a default language in the development of Angular applications since version Angular 2, but it can also be used with any JavaScript framework or library.
- Includes features of ES6 (EcmaScript 6) and ES7
- All TypeScript files are compiled to JavaScript
- TypeScript file uses .js and .tsx extensions
- [TSC (TypeScript Compiler)](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler) is used to compile .ts files to .js files to be recognized by all browsers. Check ["TypeScript Compiler in VS code"](https://code.visualstudio.com/docs/typescript/typescript-tutorial)


Notice that:
- ES6 new syntaxes are supported by all the browsers without the need to use TypeScript
- Typescript is built on top of "JavaScript", it contains "JavaScript". Any JS code is a valid TS code.

![TS-JS-Circles](/repo-img/TS-JS-Circles.png)
- Typescript needs a compiler to transfer the code into a simple javascript file that can be read/run by all browsers

!["TypeScript Compiler](/repo-img/TS-To-JS.png)

# Dynamically vs Statically Typed Languages
To recap, as we have experienced before, we have two types of programming languages:
- **Dynamically Typed Languages:** Variable types are determined and checked at runtime rather than during compilation (Data Type is not explicitly named in our code) 
  - Examples: JavaScript, PHP, Python
  
- **Statically Typed Languages:** Variable types must be determined during the compilation time before the 
runtime (Data type is explicitly assigned to each variable) 
  - Examples: Java, C#, C/C++
    
# Environment Setup (with VS Code):
Notice since we are going to run the commands using "npm" (Node Package Manager) we need to have "NodeJS" installed first, please refer to my repo about ["Starting with Node"](https://github.com/anmarjarjees/node.js-start) if you need.
Installing [TypeScript compiler](https://code.visualstudio.com/docs/typescript/typescript-compiling).
- You can use the hotkey (CTRL+`) to toggle the terminal window
- You can right click any folder => Open in Integrated Terminal
- In the "Terminal" window: you can
    - Install typescript globally to be available for the entire system (OS). Using "-g" for global (being able to access TS from any folder)
      ```
      npm i -g typescript
      ```
  - Install it locally for this project (within its folder):
      ```
      npm i --save-dev typescript
      ```

**For Mac Users:**
1. Mac users need to add sudo "Super User Do :-)":
    ```
    sudo npm i -g typescript
    ```
2. We can use the full word "install" instead of just "i"

Remember that npm command will create the **"package.json"** file as usual. with TS, this json file will only include:
```
{
  "dependencies": {
    "typescript": "^5.3.3"
  }
}
```

or for locally installation for development mode:
```
{
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```

To check the tsc (TypeScript Compiler) version:
```
tsc --version
```
OR:
```
tsc -version
```
OR:
```
tsc -v
```
OR:
```
tsc --v
```

## IMPORTANT NOTE:
**Please be advised that you need to run the fist command for installing TypeScript globally:**
  ```
  npm i -g typescript
  ```
You will need to have the administrative privileges. If you are not an Admin user, you will need to:
1. Install TypeScript locally using the same command as explained above:
    ```
    npm i --save-dev typescript
    ```
  
    or when installing it locally for development mode using:
      ```
      npm i --save-dev typescript
      ```


2. Use "npx" as a workaround. npx runs the binary from the local node_modules if available, or it will temporarily install the package and run it.
    ```
    npx tsc --version
    ```

For this reason, you might encounter an error when running this simple command to test the TypeScript version:
```
tsc --version
```
This is because **tsc** is not installed globally in the system PATH when TypeScript is installed locally. For the simplest setup, it's recommended to install TypeScript globally. However, if you prefer a local installation, you can use **npx** to run the TypeScript compiler as explained above also:
```
npx tsc --version
```
# Start Coding :-)
Starting with the basics, please refer to the folder **"basics"** first. We can use "cd folderName" "cd.." "cd". **(Notice that I had to rename the .ts extensions for the two test files to "ts1" and "ts2" to avoid the errors or any variables conflict  based on the advanced changes that we will do later)**
1. Creating test1.js file inside your project folder named for example: "Basics". 
2. TypeScript files cannot work on browsers or nodejs environment
3. Using TSC (TypeScript Compiler) with "tsc" command to convert TypeScript files to simple JavaScript (Vanilla JavaScript) files
4. To run a .ts file, for example "index.ts", we use the command "tsc" with the .ts file:
```
tsc index.ts
```
5. tsc will create an equivalent .js file out of the .ts file
6. To recap, for running any .js file in NodeJS environment:
```
node fileName.js
```
NOTE: if you just run the command: tsc without specifying the file name, TSC will compile all the .ts files within the current directory of the tsc command or in the directory that we specify in the configuration file.

# TypeScript To JavaScript
By default [TSC compiles TypeScript to ES3](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#downleveling) that doesn't support "promises","async", or "await" that have been introduced in ES6. Start a new .ts file "test2".

Try this simple "async" "await" function:
```
async function sayHi () {
    console.log("Hi...");
}
```

Check the code file "test2.ts" then "test2.js". You will see that "test2.js" contains long and complex lines of code and settings to make "async" works in ES3! 

# The "tsconfig.json" configuration file
TS Compiler (tsc) has many options that can be modified to customize its behaviour. We can customize the default options of the "TSC" using the CLI, but it's much easier and more practical to create a dedicated configuration file that must be named ["tsconfig.json"](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content) for TS where we can set any option we want "linux" environment like using "Git Batch" after installing git (Please refer to my full PDF file about using Git and GitHub for more details):
```
touch tsconfig.json
```

We can also run the following native tsc command that works with any CLI that will also create a "tsconfig.json" with all the default settings plus listing all the settings with their descriptions as comments:
```
tsc --init
```
** Dear students, please refer to my changes/comments with "AJ" in the "tsconfig.json" file**

## For an empty tsconfig.json file:
In case you have created any empty tsconfig file:
Inside this file, we can add [few needed options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#examples) (using the format of JSON) file. You can check the ["tsconfig.json" README content of "Learn-TypeScript" repo](https://github.com/TypeStrong/learn-typescript/blob/master/04-project/01-tsconfig/README.md), or check the ["tsconfig.json section from 'TypeScript Deep Dive' GitBook"](https://basarat.gitbook.io/typescript/project/compilation-context/tsconfig):
- Adding the object property "compilerOptions" that contains another set of properties
- The property ["target"](https://www.typescriptlang.org/tsconfig#target) that we can use to target for example "ES6" based on the "TS Library"(https://www.typescriptlang.org/tsconfig#lib). Notice that VS code will show us all the valid values that we can use :-). Using ES6 version that is supported by all browsers. The default is ES3 (without tsconfig). We can use the value **"esnext"** so TSC will use whatever the latest JS version that is available in the environment where we run our application, that's the reason why some programmers prefer to set it to "esnext".
- The property ["rootDir"]() To specify the folder for containing our source code like "src" folder in a Java project :-)
- The property ["outDir"]() By default, typescript output the .js file next to its .ts file. If we want to separate these .js files into a separate file, we can use "outDir"
- The property ["noEmit"]() To skip the process of creating the equivalent .js file for each .ts file, so it's only for TS checking and no more .js files.
- The property ["lib"](https://www.typescriptlang.org/tsconfig#lib) to specify library files to be included in the compilation. Check this article about ["Including built-in type declarations with 
--lib"](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#including-built-in-type-declarations-with---lib) For example, if your program doesn't run in a browser, so you don't want the "dom" type definitions.
- A good hint, if you want to see all the possible valid value for every property:
  - Click the property value
  - Press the hotkeys: CTRL+Space
- Please refer to the "tsconfig.json" file to see the changes and read my comments

## NOTES: 
- The "root directory" and the "out directory" have to be created manually. 
```
{
  "compilerOptions": {
    "target":"ES6",
    "outDir":"compiled",
    "lib": ["dom","es6"]
  }
}
```

- To create this file with the default predefined options, we can use the command:
```
tsc --init
```

After setting the root and the destination (output) directory, we can just run this command again and ts will compile all the .ts files inside the "root" folder to .js files inside "final" folder which is the folder we specified in tsconfig to be the "outDir":
```
tsc
```

### To recap:
- Write our code (TypesScript) in .ts files
- Run the following command from any sub-folder withing our project since we installed TS globally:
```
tsc
```
- Navigate to the output folder or any folder where you set the .js files to be generated, run the normal node command assuming that the file name is "test.js":
```
node test
```
### Modify TS Code and run JS file:
Instead of keep using TSC command to update .js copy (js compiled file), we can use this command to watch (run) the ts file and make it alive by keep watching it and update its .js file after each update and saving for the original .ts file using this command:
```
tsc --watch index.ts
```
OR:
```
tsc -w index.ts
```
OR just:
```
tsc -w 
```

After making TSC watching our TS file, we can change TS file and just run its corresponding js file inside the destination directory (in our case is named "out"):
```
node index.js
```
OR:
```
node index
```

### The main code:
We can refer to the content of the folder **"src"**. 
To just watch the first file "demo1.ts" without compiling it:
```
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