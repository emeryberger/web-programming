# Lab notes

## Git
  - You can install git on Windows [here](https://git-scm.com/download/win).
  - Git is a version control system, it is the most popular tool of its kind. It can be used to track any kind of file, particularly non-binary files (e.g. source code, plain text, etc.).
  - A _repository_ (i.e. _repo_) refers the storage location of a single (software) project. These are often hosted on a server (e.g. [GitHub](https://github.com), [GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org)).
    + `git clone <repo>`: Clones a copy of a repository to your local machine.
      - EXAMPLE: `git clone https://github.com/COMPSCI-326-Fall-2020/scrabble-starter`
  - Git allows for the tracking of changes within a repository.
    + `git status`: Displays the current state of the repository.
      - NOTE: We recommend interleaving every command with a `git status` if you're just starting out; Git outputs useful information.
  - A _commit_ is a snapshot of the repository at a given point in its history. A commit consists of a collection of changes since the last snapshot.
  - A _branch_ is a sequence of commits. Think of it as a linked-list, which chains successive commits. The keyword `HEAD` is a pointer to the most recent commit.
    + `git log`: Shows all the commits on a branch
      - `git log --oneline`: Offers a condensed view, when there are a lot of commits on a branch.
  - When you make changes to a file in the repository, Git will notice and keep track of them for you.
    + `git diff <file or path>`: Show the differences between what you've changed and what was in the last commit.
      - EXAMPLE: `git diff src/` (diff everything in the src/ directory)
      - EXAMPLE: `git diff src/myJSFile.js` (diff a single file)
  - If you made changes that you no longer want, you can tell Git to _restore_ them to the way before you edited them.
    + `git restore <file or path>`
      - EXAMPLE: `git restore .` (restore everything in the current directory)
      - EXAMPLE: `git restore myJSFile.js` (restore a single file)
  - Once your satisfied with the given changes to a file, you must _stage_ them first, before you commit. This tells Git, you want the file(s) in the next commit.
    + `git add <file or path>`: Stages the given file(s) for the next commit.
      - EXAMPLE: `git add src/` (stage everything in the src/ directory)
      - EXAMPLE: `git add src/myJSFile.js` (stage a single file)
      - NOTE: The following will unstage previously staged file(s). The local changes won't be reverted though.
        + `git restore  --staged <file or path>`
  - Now once you're satisfied with your staged set of files, it's time to make a commit.
    + `git commit`: Commits the staged files. You'll need to provide a message of what has been changed.
      - NOTE: We recommend using the following option to type the commit message in-line.
        + `git commit -m "A descriptive message goes here."`
  - The _origin_ of your repository represents the server from which your repository was cloned. To communicate with the origin (e.g. GitHub), you can use the following commands.
    + `git push`: Pushes commits that are in your local copy of the repository but not on the server.
    + `git pull`: Pulls modifications that are on the server but not in your local copy.
  - In the situation you've made an errant commit, there are a number of ways to rectify this.
    + `git commit --amend`: Will add any currently staged files to the previous commit and prompt for a new message.
    + `git commit --amend --no-edit`: The same as the above except it will reuse the old message.
    + `git revert <commitHash>`: Creates a new commit inverting the changes of the commit specified.
    + `git reset <commitHash>`: Undoes all commits up to, but not including the specific commit and places the changes in your working set.
    + `git reset --hard <commitHash>`: The same as the above except it will blow-away the changes completely.
      - NOTE: "Do not try this at home."... Only do this if you know what you're doing.
  - `git show`: To see the contents of a particular commit.
    + EXAMPLE: `git show` (show the most recent commit)
    + EXAMPLE: `git show <commitHash>` (show the commit specified)
  - Git also has a stack to hold changes in-progress, that are not ready to be committed. You access this stack through the `stash` command.
    + `git stash`: Push your current working set onto the stack, thereby restoring edited files to their contents at the last commit.
    + `git stash push <list_of_files_or_dirs>`: Push only the specified contents onto the stack.
    + `git stash list`: Show what is currently being stored on the stack.
    + `git stash pop`: Restore the changed files into your working set (i.e. reapply the save state). If the reapplication was successful this reference is dropped (i.e. removed from the stack).
    + `git stash drop`: To pop the stack and discard the changes. This is common after a `git stash pop` that required the resolution of conflicts, in which case Git does not automatically drop the reference (to be safe).
  - Up until now we've been working on a single _branch_. However, it is quite common for a project that is larger, formal, and/or has more contributors to involve multiple branches. The purpose of this is for better project organization and streamlining the development process. Recall a branch is just a sequence of commits. There is always a `main` (or `master`) branch that serves as the primary branch for the repository. Other branches are then created from this branch.
    + `git branch`: Shows the active branch, as well as other branches that have been used on the local machine.
    + `git branch <name>`: Creates a new branch, based on the current active branch, with the name provided.
  - When changing branches the active commit history is switched to that of the new branch.
    + `git checkout <name>`: Changes the active branch to the name specified.
      - NOTE: This can be a name that doesn't initially appear in the `git branch` list, so long as it's been pushed to the server and the local Git repo knows it exists.
    + `git checkout -b <name>`: Creates a new branch with the name specified, based on the current active branch, and switches it to be the active branch.
      - NOTE: This combines the `git branch <name>` and `git checkout <name>` commands into one command.
  - Branches are typically combined using GitHub Pull Requests. Although, it is possible to do this using Git; there are two main ways to do so.
    + `git rebase <branch>`: Creates new commits from those on the current branch and puts them on top of those from the specified branch.
    + `git merge <branch>`: Applies the commits of the specified branch to the current branch with a _merge_ commit.
    + NOTE: It is possible for _conflicts_ to occur when combining branches. Conflicts are situations wherein both branches make different changes to the same piece of code. In such case, Git cannot automatically combine the branches and will prompt the user for help at certain points. These points will be marked in the offending files with the characters `<<<<<<<`, `=======`, & `>>>>>>>`. Here the user must pick one of the changes, or a modified hybrid, to _resolve_ the conflict.
  - `git help`: Prints more information about the given command.
    + EXAMPLE: `git help push`
  - _Additional Git flags for commands._
    + `git add -u`: Stage all of, but only, the files being tracked by Git (i.e. does not stage untracked files).
    + `git commit -a`: Stage and commit all modified and previously untracked files in the workspace.
      - NOTE: Flags can be combined like those in Unix; a common combination is `git commit -am "A descriptive message goes here."` to both stage and commit in a single command.

## GitHub
  - A repository hosting service using Git. It provides many nice features alongside Git for project management, collaboration, and development operations (i.e. devOps).
    + [Docs](https://docs.github.com/en)
  - A repository may be _public_, visible to anyone, or _private_, visible to only those with permission.
  - Issues: Provide tracking of bugs, features, and other things for a given repository. These are good to use in order to keep things organized.
  - Pull Requests: Provide a nice GUI platform to combine Git branches, through merging or rebasing.
    + NOTE: These can be linked to Issues, see [here](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).
  - Actions: Allow for cloud build automation directly tied to a repo. GH provides comprehensive documentation as well as a marketplace that includes a wide variety of preexisting actions that can be used to build _workflows_. Build configuration files are written in YAML, another data serialization format like JSON.
    + EXAMPLE (sample config for a code lint action):
      ```yaml
      name: Lint
      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      jobs:
        lint:
          runs-on: ubuntu-latest
          steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 10.x
          - run: npm ci
          - run: npm run lint --if-present
      ```

## Google Chrome
  - A free, cross-platform, proprietary Web browser made by Google. It is built on top of the open-source project Chromium.
  - [Developer Tools Guide](https://developers.google.com/web/tools/chrome-devtools)
    + The browser storage information can be found under the "Application" tab.

## JavaScript (JS)
  - [MDN](https://developer.mozilla.org/)
  - [A great free textbook for learning JS](https://eloquentjavascript.net/).
  - A programming language based on the ECMAScript spec. It has dynamic typing and prototype-based object-orientation. It contains similar syntax to that of C and its syntactic derivatives (e.g. Java).
  - When programming in JS, the strict mode directive should always appear at the top of the file/script: `'use strict';`
    + Strict mode changes the semantics of the code, limiting the use of poor programming paradigms that were not able to be eradicated from the language due its "overnight" adoption. It also fixes issues, which otherwise make it difficult for a JS engine to perform optimizations.
  - The keyword `window` represents the global namespace in browser, this contrasts with `global` in Node.js.
  - Event listeners are a powerful mechanism to build interactive content in for the Web. They also can be used to track when certain conditions are met in the lifecycle of a webpage.
    + The `addEventListener` method, adds the specified listener to the element. In its primary form it takes a event name as a string and a callback function to be invoked when the event occurs.
      - NOTE: Be sure to check your string literal capitalization and spelling for the first parameter.
      - NOTE: The second parameter must be a function, not the result of invoking one (unless the invocation results in another function).
    + There is a corresponding `clearEventListener` method, to remove an event listener from an element.
    + [A comprehensive list of supported events](https://developer.mozilla.org/en-US/docs/Web/Events).
  - To make sure any HTML content is ready to be referenced by JS, we can do one of the following.
    + Move our JS to a separate file and reference it in a script tag with the `defer` attribute set.
      - EXAMPLE: `<script src="main.js" defer></script>`
      - NOTE: `defer` only works if the script is external.
    + Set an event listener to fire when loading is complete.
      - EXAMPLE: `window.addEventListener('load', initFunc);`
  - [A few helpful technical blog posts from yours truly](https://vox.veritas.com/t5/forums/recentpostspage/post-type/message/user-id/510445).

## Node.js
  - A JS runtime outside the browser.
  - [Docs](https://nodejs.org/docs/)
    + Find your version, click on it, and then select "api/".
  - `node`: Open a REPL.
    + To exit cleanly: `process.exit();`
  - `node file.js`: Runs `file.js`.
  - `node -v`: Returns the active version of Node.js
  - `node -c file.js`: Checks file.js' syntax, without executing the file.
  - The `process` module provides useful information and behavior concerning the current Node.js process. It is helpful for configuration of programs, such is seen in the subsequent pair of expressions that access the collection of _environment variables_ available to the process.
    + `process.env.NODE_ENV === 'production'`: Check to see if the process is running in "production" or not.
    + `process.env.PORT || 8080`: Set a fallback port if the value is not set.
  - Node.js provides module support through the conventions established by CommonJS. You can think of a module as a focused piece of software, which provides functionality that can be useful in a variety of applications. When you modularize your code you're providing an API for consumers. Building larger projects from a collection modules is typical and recommended. There are two main portions to the CommonJS module system.
    + `require`: A function that takes a file path or module name and loads the exported contents into the current script. It can also load JSON; it parses the JSON data into a JS object. You'll almost always want to store the result for use.
      - EXAMPLE: `const mod = require('./myMod.js');` (set the exported content of `myMod.js` to `mod`)
      - EXAMPLE: `const pack = require('packageFromNPM');` (assuming `packageFromNPM` is in the project)
      - EXAMPLE: `const data = require('./mySubfolder/myDataFile.json');` (parse `myDataFle.json` as a JS object and store in data)
    + `module.exports`: A property that stores the exported contents of the module. It is empty by default, so we assign to it to create a (non-trivial) module. Think of it as the result returned when calling `require`.
      - EXAMPLE:
        ```js
        module.exports = {
          myExportedProperty: 'hi',
          myExportedFunction1: (a, b) => {
            console.log(this.myExportedProperty); // ERROR
            return a + b;
          },
          myExportedFunction2: function(a, b) {
            console.log(this.myExportedProperty); // 'hi'
            return a + b;
          }
        };
        ```
      - EXAMPLE:
        ```js
        module.exports = {
          aFuncDefEarlierInScript, // aFuncDefEarlierInScript: aFuncDefEarlierInScript
          aVarDefEarlierInScript, // aVarDefEarlierInScript: aVarDefEarlierInScript
        };
        ```
    + Optional advanced content on the alias exports: [FreeCodeCamp](https://www.freecodecamp.org/news/node-js-module-exports-vs-exports-ec7e254d63ac/), [Medium](https://medium.com/@geekguy/javascript-modues-exports-vs-exports-whats-the-difference-9a61cdb99386)
  - Alongside Node.js, the JS runtime & API, is an expansive registry of third-party open-source software. This is known as the NPM (Node Package Manager) registry. It contains an overwhelming number of packages that are available for use.
  - A package in this context is a collection of one or more JS modules alongside meta-files and perhaps other code/scripts that's bundled together as a single unit. These packages often have a specific use case, that when combined with other packages can help in building complex and robust JS applications.
    + Two important files when dealing with packages in JS are the aptly name: `package.json` & `package-lock.json`.
      - The `package.json` is the file where all the details about the package belong. This includes things like the authors, license, repository, and other packages (i.e. dependencies) necessary to this package (among other things).
      - The `package-lock.json` file is a snapshot of the dependency tree of a package. It lists all the precise versions of the specified dependencies as well as the versions of all their children.
    + To interface with the registry there is the `npm` command-line tool, which is bundled with Node.js, and [the website](https://www.npmjs.com/).
      - You can use `npm i <packageName>` to install a dependency. This will download the package and save it in a folder called `node_modules/`.
        + EXAMPLE: `npm i eslint`
      - To save the dependency in your `package.json` (i.e. formally include it in your project), include the appropriate flag.
        + EXAMPLE: `npm i eslint -D` (saves eslint as a development dependency (i.e. something that's used to build the app))
        + EXAMPLE: `npm i cowsay -P` (saves cowsay as a production dependency (i.e. something that's used to run the app))
    + The are many ways to interface with a third-party package.
      - A very common way is to import/require one or more of its exported module members in your source code.
      - Another way is to use the `npx` command-line tool, which like `npm` is also bundled with Node.js.
        + EXAMPLE: `npx eslint <file>` (runs `eslint` on the specified file)
        + NOTE: A nice feature of `npx` is that if a package is not installed locally it will fetch it from the registry and run it, without polluting your machine.
      - It is also possible to write _scripts_ to be included in the `package.json` file, which may directly reference third-party packages that are mentioned as dependencies, without the need of `npx`. Such scripts are included as a nested JSON object in the `package.json`, within the key `"scripts"`. These scripts can also contain commands that can be run in Unix/Terminal, not just NPM modules. Using the scripts feature provided by NPM can be useful for a few reasons; for one, it removes the need to remember and type longer command strings, also, the aliases used will remain constant even if their contents changes.
        + `npm run`: Lists the defined scripts.
        + `npm run <scriptName>`: Executes the specified script.
          - NOTE: A few special lifecycle scripts (e.g. `start`) have shorthand that does not require the `run` keyword; these scripts also may have default behavior.
        + EXAMPLE (assuming `http-server` and `eslint` are listed as dependencies):
          ```json
          "scripts": {
            "lint": "eslint --fix src/",
            "start": "http-server",
            "log": "git log --oneline -n10"
          }
          ```

## Unix/Terminal
  - On Windows, the default command prompt is bad. It uses DOS commands and not Unix commands which are much more widespread.
    + [cmder](https://cmder.net/): Good substitute, was recommended last semester. Comes with git bundled.
    + PowerShell: Good substitute, pre-installed on all Windows machines, aliases Unix commands to their DOS equivalents.
    + Windows Subsystem for Linux (WSL): Good, [more difficult to install](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
  - Think of you file system as a giant tree.
    + `/` represents the root of the file system.
    + `~` represents the home directory.
    + `.` represents the current directory.
    + `..` represents the parent directory.
  - A path can be _relative_ (to the current location). That is to say that it doesn't necessarily represent a valid location, if the current location differs.
    + EXAMPLE: `./src/js`
    + EXAMPLE: `../client/html`
  - If a path is not relative it is _absolute_. Absolute paths describe a location indifferent of the current location.
    + EXAMPLE: `/home/user`
    + EXAMPLE: `~/documents`
  - _Environment Variables_ are named values that can affect how a process behaves, such as a binding port or a connection URL. It is common to access these from Node.js with `process.env`. By convention these are in all-caps and are prefaced with a `$` to interface with them while in the shell (e.g. `$HOME`).
  - `man` (manual): Displays information about the given command (e.g. `man ls`).
  - `pwd` (print working directory), `ls` (list), `cd` (change directory): Navigate the file system.
    + `ls -a`: List all files (even _hidden_ ones).
      - NOTE: Files/directories that are _hidden_ are those prefixed with a dot (i.e. the period character), such as `.gitignore`.
    + `ls -l`: List files in long mode (i.e. more details).
      - NOTE: Commands flags can be combined (e.g. `ls -al`).
  - `cp` (copy), `mv` (move), `rm` (remove), `mkdir` (make directory): File/directory operations.
    + `rm -r`: Recursively remove a directory.
    + `rm -f`: Force remove without prompting.
    + `cp -r`: Recursively copy a directory.
      - NOTE: `mv` does not require a `-r` option for directories.
  - Shell shortcuts.
    + Tab: To auto-complete paths and files.
    + `#`: Comments a line when placed at the beginning.
    + Up arrow: Go to previous command in history.
    + Down arrow: Go to last command in history.
    + Ctrl + A: Jumps to the beginning of the line.
    + Ctrl + E: Jumps to the end of the line.
    + Ctrl + R: Search the history for a previously executed command.
      - Esc: To exit search.
      - Tab: To select command.
  - `less`: A nice way to view a file in the terminal; it allows for forward and backward paging through the file.
    + `more`: An older version that doesn't allow for backward scrolling. As they say, "less is more" ;)
    + Type "q" to exit. See the manual page for more information (i.e. `man less`), such as faster paging commands.
  - `cat` (concatenate): A utility to _concatenate_ files, more commonly used to view the contents. The contents are written to standard-out, not like with `less`, so it's best used on small files.
  - `diff` (difference): A tool to compare files line by line. Contains options to refine the comparison, such as ignoring whitespace.
    + The diff tool in Git (`git diff`) was inspired by this.
    + [Diffchecker](https://www.diffchecker.com/) is an online tool that performs the same functionality.
  - `curl` (cURL): A utility to interact with a URL via HTTP. It does many things, but for our purposes, it will be primarily used to test an API over HTTP. The most basic use is `curl <URL_here>`, which will perform a GET request to the URL provided.
    + The `-X` flag allows one to provide a different HTTP method, such as POST, PUT, DELETE, etc.
    + The `-H` flag allows for specific header information, such as `'accept: text/html'` or `'content-type: application/json'`.
    + The `-d` flag signals to include the specified _data_ with a method. For our purposes this will almost always be JSON, like `'{"name": "name", "score": 0}'`.
    + The `-o` flag redirects the output to a file, such as `theResponse.json`.
    + [Here](https://reqbin.com/) is a nice tool to test with cURL online.
  - `echo`: As the name suggests, echoes arguments to the output stream.
    + EXAMPLE: `echo Hello World!`
  - The `||` & `&&` shell operators can be used to chain commands based on their exit code. Suppose we have two commands `cmd1` and `cmd2`; consider the following.
    + `cmd1 || cmd2` will run `cmd2` iff `cmd1` fails.
    + `cmd1 && cmd2` will run `cmd2` iff `cmd1` succeeds.
  - `head`: Displays the beginning of a file.
    + `-n`: Can be provided to specify a custom number of lines, the default if elided is 10.
  - `tail`: Displays the ending of a file. Shares many of the same arguments as head including `-n`.
    + `-f`: A useful flag to get a "live" tail. This flag will block the prompt while waiting for updates to come (i.e. from another process), outputting any updates that do come. Using this flag is commonplace in debugging and monitoring.
  - `cut`: For elementary data manipulation, it can remove parts of each line within files.
    + `-d`: A typical flag that specifies a field delimiter to use, the default if elided is a TAB `\t` character. Delimited characters are removed and the remaining partitions make up enumerated fields.
    + `-f`: To be used in conjunction with `-d`, this flag specifies which one or more fields of a delimited line to include. The enumeration of fields is 1-based.
  - `tr` (translate): Also for elementary manipulation; translates or deletes characters or sets of them. See the manual page for the character sets.
    + `-d`: Specifies to delete the characters listed in the first set.
    + NOTE: Uses the _read_ redirection operator discussed below.
  - `grep` (Globally Search for a regular Expression and Print): A very powerful utility to search files for matching patterns. Patterns are specified with regular expressions.
    - `-r`: Can be passed instead of a single file to recursively search all files in the working directory.
    - `-n`: Include line numbers in the output.
    - EXAMPLE: `grep -n 'function' myJSFile.js` (find occurrences of the "function" keyword in a JS file)
    - EXAMPLE: `grep -nr 'return'` (find occurrences of "return" in current directory)
  - `find`: As the name suggests, a utility to search for files/directories in a hierarchy. Common to use alongside `grep` for searching tasks.
    - `-type`: The type to search for; usually `f` for file, sometimes `d` for directory.
    - `-name`: A very important option to indicate a pattern to search for. The pattern may contain some meta-characters; see the manual entry.
    - `-exec`: Allows for a command to be executed on the results.
      + NOTE: Whether this command is ended with a `+` or a `;` has a different semantic meaning.
    - EXAMPLE: `find ../ -type d -name 'client'` (search the parent directory for directories named "client")
    - EXAMPLE: `find /home/user -type f -name '*.txt'` (search for all text files in `/home/user`)
    - EXAMPLE: `find . -type f -name '*.js' -exec grep -n 'while' {} +` (search the working directory for all JS files and filter the occurrences of the "while" keyword with `grep`)
  - Redirection is powerful tool for effective and efficient use of Unix shell. We discussed the following (binary) redirection operators.
    + `>` (overwrite): Direct standard out (LHS) to stream specified (RHS).
    + `>>` (append): Direct standard out (LHS) to stream specified (RHS).
    + `<` (read): Direct the contents of a stream (RHS) to standard in (LHS).

## VSCode
  - Very popular editor, supports JS and HTML/CSS natively (i.e. no need for additional extensions).
  - Some useful other extensions.
    + [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Auto-refreshes the page in your browser as you edit code.
    + [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Google Doc-like collaboration.
      - NOTE: We've tested this on Visual Studio but not Visual Studio Code (i.e. it might be buggy).
    + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Run ESLint directly while working in VSC.

## Additional Resources
  - [http-server Options](https://www.npmjs.com/package/http-server#available-options)
  - [ESLint User Guide](https://eslint.org/docs/user-guide/)
  - [HTML Validation](https://validator.w3.org/)
  - [HTML Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
  - [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
  - [Unicode List](https://en.wikipedia.org/wiki/List_of_Unicode_characters)
  - [Bootstrap](https://getbootstrap.com/docs/4.5/): A CSS framework for building pretty websites.
  - [Express](https://expressjs.com/en/4x/api.html): A JS web server framework.
  - [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use): An icon library that plays nice with Bootstrap.
  - _Not explicitly mentioned in lab_
    + [CSS Reference](https://cssreference.io/): A site to visually view CSS properties.
    + [cURL clone](https://httpie.org/) _from Noah_
    + [Unicode table](https://unicode-table.com/en/) _from Jakob_
