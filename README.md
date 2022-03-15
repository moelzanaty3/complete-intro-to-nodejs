# NodeJS for Beginner

## What's NodeJS

### Node.js is JavaScript

Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/). It allows you to develop apps in JavaScript outside of the browser. It's [single threaded non blocking and asynchronous.](https://theflyingmantis.medium.com/javascript-single-threaded-non-blocking-asynchronous-concurrent-language-ffae97c57bef) This is achieved by the use of [an event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) at the core of Node.js. If you know [JS](https://262.ecma-international.org/12.0/#) then you already know how to develop with Node.js, kinda....

### Use cases

Because Node.js can run outside of the browser, it can be used for pretty much anything!

- API's and servers
- CLI's
- Build Tools like babel
- Automation & Basic Scripting
- Real-Time Data Apps
- Chat-bots
- Web Scraping
- Wireless Connectivity

[Read More 📝](https://www.esparkinfo.com/blog/nodejs-use-cases.html)

## Installing Node

### MacOS

1. Install [Homebrew](https://brew.sh/) by
   running `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the
   terminal.
2. Check that it was installed by running `brew --version`. You should see the version number that was installed.
3. Run `brew install node`.
4. Run `node --version`.
5. Check that `npm` was installed as well by running `npm --version`.
6. Run `brew install yarn`.
7. Run `npm --version`.
8. Run `yarn install && yarn --version`

### Windows

1. Please download the [Node.js Installer](https://nodejs.org/en/download/), go through the installation process, and
   restart your computer once you're done.
2. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
3. Run `yarn --version` to make sure `yarn` has been successfully installed.

### Linux

1. Please follow [these instructions](https://www.ostechnix.com/install-node-js-linux) to
   install [Node.js](https://nodejs.org/en/download/).
2. Run `sudo apt-get install -y build-essential`.
3. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
4. Run `yarn --version` to make sure `yarn` has been successfully installed.

### NVM

If you're **not** on **windows** or you are using WSL, I recommend using installing Node.js with [`nvm` (node version manager)](https://github.com/nvm-sh/nvm).
NVM allows you to install many versions of Node.js at once and switch when you need. Also, NVM installs Node.js in a folder that will not have permission
errors that you would otherwise run into with the official installer.

Once you have nvm installed, you need to install a Node version. You can download the latest LTS version with this command.

`nvm install --lts`

## Executing Node

### Node REPL

Before we get into creating programs and apps with `Node.js`, let's get a feet wet with the `Node.js REPL`.

> REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.

Just type `node` in your terminal. This will create a Node.js environment where we can write and execute JavaScript.

The command stays in idle mode and waits for us to enter something. let's start simple by adding:-

```bash
> console.log('Hello World')
Hello World
undefined
>
```

The first value, `Hello World`, is the output we told the console to print, then we get undefined which is the return value of running `console.log()`.

Node read this line of code, evaluated it, printed the result, and then went back to waiting for more lines of code. Node will loop through these three steps for every piece of code we execute in the `REPL` until we exit the session. That is where the `REPL` got its name.

Although, some things, specifically browser based API's probably won't work. Go ahead, try an `alert('hello world')` and see what happens. You'll get an error. Although the Node.js runtime uses JS as it's language, none of the Browser based globals that you are familiar with actually exist in Node.js or they are polyfilled to prevent runtime errors.

[Read More 📝](https://nodejs.dev/learn/how-to-use-the-nodejs-repl)

### File Execution

The Node REPL it nice, but you can't build an application with that. We need to be able
write our code to a file and tell Node.js to execute that.

> Create a file called:`index.js`

In that file, write some JS. Try out `console.log('hello there')`. To execute this .js file
in the Node.js runtime, we can use the `node` command with the file name as an argument.

```node
node index.js
```

## Basic Introduction

### Globals

While in browsers the global scope is the `window` object, in nodeJS the global scope of a module is the module itself, so when you define a variable in the global scope of your nodeJS module, it will be local to this module.

#### Common

##### global

`<Object> The global namespace object.`
>
> In browsers, the top-level scope is the global scope. This means that within the browser **var** something will define a new global variable. In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module.

And in your code when you write:

- `console.log(this)` in an empty js file(module) it will print an empty object `{}` referring to your empty module.
- `console.log(this);` inside a self invoking function, `this` will point to the global nodeJS scope object which contains all NodeJS common properties and methods such as `require()`, `module`, `exports`, `console`...
- `console.log(this)` with [**strict mode**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) inside a self invoking function it will print `undefined` as a self invoked function doesn't have a default local scope object in [**strict mode**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) .

##### `__dirname`

The directory name of current script as a string value. `__dirname` is not actually a global but rather local to each module. You can use `__dirname` to check on which directories your files live.

```js
console.log(__dirname)
```

[Read More 📝](https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname)

##### `__filename`

returns the filename of the code which is executed. It gives **the absolute path** of the code file.

```js
console.log(__filename)
```

##### `process`

A global object that gives information about and control over node.js process. An `Object` that contains all the context you need about the current program being executed. Things from env variables, to what machine you're on.

##### `process.cwd`

is a method of global object `process`, returns a string value which is the current working directory of the Node.js process.

[Diff btw cwd and __dirname 📝](https://stackoverflow.com/a/45145514/6483379)

##### `module.exports` `exports` `module` `require`

**module** keyword refers to the object representing the current module. The module object has a key named `exports`.

**module.exports** is special object which is used for defining what can be exported by a module and can be made available to other modules.

In **short**, if a module wants to export something, it should be added to the module.exports object.

**require** keyword refers to a function which is used to import all the variables and functions exported using the `module.exports` object from another module.

In **short**, if a file wants to import something it has to declare it using the following syntax:-

```js
require('idOrPathOfModule')
```

#### The rest

Depending on what version on Node.js you're running, there are so many more globals. Not as many as the Browser, but enough that you'll probably never use many of them.

[Read More 📝](https://nodejs.org/api/globals.html)

### Modules

There is no GUI in Node.js, no HTML or CSS. This also means there aren't any script tags to include JS files into our application. Node.js uses modules to to share your JavaScript with other JavaScript in your apps. No window or globals needed. If you've ever done `window.App = window.App || {}` then you'll like this!

#### What is a module

A module is a reusable chunk of code that has its own context. That way modules can't interfere with or polluting the global scope.

You can think of them like lego blocks that you can create, import, and share.

![lego block](https://media.wired.com/photos/5954a0cb8e8cc150fa8ec6e7/master/w_2560%2Cc_limit/HighRes_LEGO_DUPLO_bricks-story.jpg)

#### Two module types

By default, Node.js uses **common js** modules. With newer versions of Node.js we can now take advantage of **ES6 modules**. To opt into using this syntax, you can use the `.mjs` extension instead of `.js`. We'll be using the ES6 module syntax going forward as they are the standard now with browsers adding support now.

#### Module syntax

Now, let's create our first module. The only thing we have to do is expose some code in one for our JavaScript files. We can do that with the `export` keyword.

```js
// utils.js
const add = () => {
  console.log('add function');
}

const formatDate = () => {
  console.log('formatDate function');
}

const run = () => {
  console.log('run function');
}

module.exports = {
  add, 
  formatDate
}
```

```js
// server.mjs

import { add, formatDate } from './utils/index.js'
```

Few things happening here. Let's look at the `utils.js` file. Here we're using the `export` keyword before the variable declaration. This creates a named export. With the name being whatever the variable name is. In this case, a function called `add`. Now in `server.mjs`, we `import` t he action module from the `utils` file. The path to the file is relative to the file you're importing from. You also have to prefix your path with a `'./'`. If you don't, Node will think you're trying to import a built in module or npm module. Because this wa a named export, we have to import with brackets `{ add, formatDate }` with the exact name of the modules exported. We don't have to import every module that is exported.

Usually if you only have to expose one bit of code, you should use the `default` keyword. This allows you to import the module with whatever name you want.

```js
// lib/index.mjs
const libFun = () => {
  console.log('libFun function');
}

export default libFun
```

```js
// app.js
import whateverIWant from './lib/index.mjs'
```

You can read more about the module syntax on the [Node.js docs.](https://nodejs.org/api/packages.html)

#### Internal Modules

Node.js comes with some great internal modules. You can think of them as like the phenonminal global APIs in the browser. Here are some of the most useful ones:

- `fs` - useful for interacting with the file system.

- `path` - lib to assit with manipulating file paths and all their nuiances.

- `child_process` - spawn sub-processes in the background.

- `http` - interact with OS level networking. Useful for creating servers.

### File System

Until Node.js, there wasn't a great way to access the file system on a machine with JavaScript, this is due to Security restrictions in most browsers. With Node.js, one can create, edit, remote, read, stream, & more with files. If you've ever used a build tool like webpack or a parser like babel, then you realize just how powerful Node.js can be when manipulating the file system.

#### Reading a file

Node.js ships with a powerful module, `fs` short for file system. There are many methods on the [fs module](https://nodejs.org/api/fs.html). To read a file, we'll use the `readFile` method.

Create a simple html file `template.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>{title}</h1>
  <p>{body}</p>
</body>
</html>
```

This `html` file will be used as template and has placeholders that we will interpolate later when writing a file.

To read the file use `commonjs`:

```js
// read.js
const fs = require('fs/promises');
const path = require('path');

(async () => {
  let templatePath = path.join(__dirname, 'template.html')
  let template = await fs.readFile(templatePath, 'utf-8')
  console.log(template);
})();
```

To read the file use `es6 modules`:

```js
// read.mjs

import { readFile } from 'fs/promises'

let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')

console.log(template);
```

The `fs` module has import for promise based methods. We'll opt to use those as they have a cleaner API and using async + non-blocking methods are preferred. More on that later. Because we're using `.mjs` files, we don't have access to `__dirname` or `__filename` which is what is normally used in combination with the `path` module to form an appropriate file path for fs. So we have to use the `URL` global that takes a relative path and a base path and will create a URL object that is accepted by `readFile`. If you were to log `template`, you'd see that its just a string.

#### Write a file

Writing a file is similar to reading a file, except you need some content to place in the file. Let's interpolate the variables inside our template string and write the final html string back to disk.

```js
// write.mjs
import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

await writeFile(new URL('./index.html', import.meta.url), template)
```

You should now have a `index.html` file that is the same as the `template.html` file but with the h1 and body text substituted with the data object properties. This is some powerful stuff 🔥! Open it in a browser and see it work. At their core, static analysis tools like TypeScript, Babel, Webpack, and Rollup do just this. Also, please don't use my hacky templating "engine" in a real app! 🤣

### Error Handling

The last thing you want is your entire server crashing because of an error, or, is that exactly what you want 🤷‍♀️? Regardless, you should have th choice. So you better handle those errors. Depending on the type of code (sync, promise, async callback, async await, etc) Node allows us to handle our errors how we see fit.

#### Process exiting

When a exception is thrown in Node.js, the current process will exit with a code of `1`. This effectively errors out and stops your programing completely. You can manually do this with:

`process.exit(1)`

Although you shouldn't. This is low level and offers no chance to catch or handle an exception to decide on what to do. Imagine your entire API shutting down and restarting just because a user sent a malformed payload that resulting the DB throwing and exception. That would be terrible.

#### Async Errors

When dealing with callbacks that are used for async operations,
the standard pattern is:

```js
fs.readFile(filePath, (error, result) => {
  if (error) {
    // do something
  } else {
    // yaaay
  }
})
```

Callbacks accept the `(error, result)` argument signature where error could be `null` if there is no error.

For `promises`, you can continue to use the `.catch()` pattern. Nothing new to see here.

For `async / await` you should use `try / catch`.

```js
try {
  const result = await asyncAction()
} catch (e) {
  // handle error
}
```

#### Sync Errors

For sync errors, `try / catch` works just fine, just like with
async await.

```js
try {
  const result = syncAction()
} catch (e) {
  // handle error
}
```

#### Catch All

Finally, if you just can't catch those pesky errors for any reason.
Maybe some lib is throwing them and you can't catch them.
You can use:

```js
process.on('uncaughtException', cb)
```

## Servers

Node.js has access to OS level functionality, like networking tools. This
allows us to build very capable servers. Mixed with the fact that Node.js
is single threaded and runs an even loop for async tasks, Node.js is widely
used for API's that need to respond fast and don't require heavy CPU intensive
work.

## The hard way

Node.js ships with the `http` module. This module is an abstraction
around OS level networking tools. For Node.js, the http module would
be considered "low level". Let's create a simple server.

```js
import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        body = JSON.parse(body)
      }

      console.log(body)
      res.writeHead(201)
      res.end('ok')
    })
  } else {
    res.writeHead(200)
    res.end('hello from my server')
  }

})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
```

Using the `createServer` method on the http module, we create a server. Before we start the server, we need to make sure it can handle incoming requests. That's the callback inside of `createServer`. Next is starting the server. To do that, we need a port and a host. Sites default to port `8080` or `8000` so it's not uncommon to use that when developing locally. The host is going to be your machine, which is `localhost` or `127.0.0.1`.

Using the `http` module is fine for this small example, but for building real world APIs we should utilize the community and install some packages to help up with this task.

## Express

There is an awesome packaged, `express`, that makes creating servers
in Node.js a breeze. We're going to use it now.

`yarn add express morgan`

- `express` - a framework for building servers
- `morgan` = a middleware for logging incoming requests

With everything installed, we'll create a simple API for a todo app using
express.

```js
import express from 'express'
import morgan from 'morgan'


const db = {
  todos: [],
}

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/todo', (req, res) => {
  res.json({ data: db.todos })
})

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text }
  db.todos.push(newTodo)

  res.json({ data: newTodo })
})

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
```

Compared to the native `http` module, express feels like cheating.

Our todo API has two routes:

- `GET /todo` - get all todos
- `POST /todo` - create a new todo