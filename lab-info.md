*** Git ***
  - To install git on Windows: https://git-scm.com/download/win
  - Git is a version control system, it is the most popular tool of its kind. It can be used to track any kind of file, particularly non-binary files (e.g. source code, plain text, etc.).
  - A _repository_ refers the storage location of a single (software) project. These are often hosted on a server (e.g. GitHub, GitLab, BitBucket).
    + git clone <repo>: Clones a copy of a repository to your local machine.
      EXAMPLE: git clone https://github.com/COMPSCI-326-Fall-2020/scrabble-starter.
  - Git allows for the tracking of changes within a repository.
    + git status: Displays the current state of the repository.
      NOTE: We recommend interleaving every command with a "git status" if you're just starting out; Git outputs useful information.
  - A _commit_ is a snapshot of the repository at a given point in its history. A commit consists of a collection of changes since the last snapshot.
  - A _branch_ is a sequence of commits. Think of it as a linked-list, which chains successive commits. The keyword HEAD is a pointer to the most recent commit.
    + git log: Shows all the commits on a branch
      - git log --oneline: Offers a condensed view, when there are a lot of commits on a branch.
  - When you make changes to a file in the repository, Git will notice and keep track of them for you.
    + git diff <file or path>: Show the differences between what you've changed and what was in the last commit.
      EXAMPLE: git diff src/ (diff everything in the src/ dir)
      EXAMPLE: git diff src/myJSFile.js (diff a single file)
  - If you made changes that you no longer want, you can tell Git to _restore_ them to the way before you edited them.
    + git restore <file or path>
      EXAMPLE: git restore . (restore everything in the current dir)
      EXAMPLE: git restore myJSFile.js (restore a single file)
  - Once your satisfied with the given changes to a file, you must _stage_ them first, before you commit. This tells Git, you want the file(s) in the next commit.
    + git add <file or path>: Stages the given file(s) for the next commit.
      EXAMPLE: git add src/ (stage everything in the src/ dir)
      EXAMPLE: git add src/myJSFile.js (stage a single file)
      NOTE: The following will unstage previously staged file(s). The local changes won't be reverted though.
        - git restore  --staged <file or path>
  - Now once you're satisfied with your staged set of files, it's time to make a commit.
    + git commit: Commits the staged files. You'll need to provide a message of what has been changed.
      NOTE: We recommend using the following option to type the commit message in-line.
        - git commit -m "A descriptive message goes here."
  - The _origin_ of your repository represents the server from which your repository was cloned. To communicate with the origin (e.g. GitHub), you can use the following commands:
    + git push: Pushes commits that are in your local copy of the repository but not on the server.
    + git pull: Pulls modifications that are on the server but not in your local copy.
  - In the situation you've made an errant commit, there are a number of ways to rectify this:
    + git commit --amend: Will add any currently staged files to the previous commit and prompt for a new message.
    + git commit --amend --no-edit: The same as the above except it will reuse the old message.
    + git reset <commitHash>: Undoes all commits up to, but not including the specific commit and places the changes in your working set.
    + git reset --hard <commitHash>: The same as the above except it will blow-away the changes completely.
      NOTE: "Do not try this at home."... Only do this if you know what you're doing.
  - git show: To see the contents of a particular commit.
    EXAMPLE: git show (show the most recent commit)
    EXAMPLE: git show <commitHash> (show the commit specified)
  - Git also has a stack to hold changes in progress, that are not ready to be committed. You access this stack through the _stash_ command.
    + git stash: Push your current working set onto the stack, thereby restores edited files to their contents at the last commit.
    + git stash push <list_of_files_or_dirs>: Push only the specified contents onto the stack.
    + git stash list: Show what is currently being stored on the stack.
    + git stash pop: Restore the changed files into your working set (i.e. reapply the save state). If the reapplication was successful this reference is drop (i.e. removed from the stack).
  - git help: Prints more information about the given command.
    EXAMPLE: git help push

*** Google Chrome ***
  - A free, cross-platform, proprietary Web browser made by Google. It is built on top of the open-source project Chromium.
  - Developer Tools Guide: https://developers.google.com/web/tools/chrome-devtools

*** JavaScript (JS) ***
  - MDN: https://developer.mozilla.org/
  - A great free textbook for learning JS: https://eloquentjavascript.net/
  - A programming language based on the ECMAScript spec. It has dynamic typing and prototype-based object-orientation. It contains similar syntax to that of C and its syntactic derivatives (e.g. Java).
  - When programming in JS, the strict mode directive should always appear at the top of the file/script: 'use strict';
    + Strict mode changes the semantics of the code, limiting the use of poor programming paradigms that were not able to be eradicated from the language due its "overnight" adoption. It also fixes issues, which otherwise make it difficult for a JS engine to perform optimizations.
  - The keyword "window" represents the global namespace in browser, this contrasts with "global" in Node.js.
  - Event listeners are a powerful mechanism to build interactive content in for the Web. They also can be used to track when certain conditions are met in the lifecycle of a webpage.
    + The "addEventListener" method, adds the specified listener to the element. In its primary form it takes a event name as a string and a callback function to be invoked when the event occurs.
      NOTE: Be sure to check your string literal capitalization and spelling for the first parameter.
      NOTE: The second parameter must be a function, not the result of invoking one (unless the invocation results in another function).
    + A comprehensive list of supported events: https://developer.mozilla.org/en-US/docs/Web/Events
  - To make sure any HTML content is ready to be referenced by JS, we can do one of the following:
    + Move our JS to a separate file and reference it in a script tag with the defer attribute set.
      EXAMPLE: <script src="main.js" defer></script>
      NOTE: defer only works if the script is external.
    + Set an event listener to fire when loading is complete.
      EXAMPLE: window.addEventListener('load', initFunc);
  - A few helpful technical blog posts from yours truly: https://vox.veritas.com/t5/forums/recentpostspage/post-type/message/user-id/510445

*** Node.js ***
  - A JS runtime outside the browser.
  - Docs: https://nodejs.org/docs/
    + Find your version, click on it, and then select "apl/".
  - node: Open a REPL.
    + To exit cleanly: process.exit();
  - node file.js: Runs file.js.
  - node -v: returns the active version of Node.js
  - node -c file.js: Checks file.js' syntax, without executing the file.
  - Node.js provides module support through the conventions established by CommonJS. You can think of a module as a focused piece of software, which provides functionality that can usually be useful in a variety of applications. When you modularize your code you're providing an API for consumers. Building larger projects from a collection modules is typical and recommended. There are two main portions to the CommonJS module system.
    + require: A function that takes a file path or module name and loads the exported contents into the current script. It can also load JSON; it parses the JSON data into a JS object. You'll almost always want to store the result for use.
      EXAMPLE: const mod = require('./myMod.js'); // set the exported content of myMod.js to mod.
      EXAMPLE: const data = require('./mySubfolder/myDataFile.json'); // parse myDataFle.json as a JS object and store in data
    + module.exports: A property that stores the exported contents of the module. It is empty by default, so we assign to it to create a (non-trivial) module. Think of it as the result returned when calling require.
      EXAMPLE: module.exports = {
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
      EXAMPLE: module.exports = {
        aFuncDefEarlierInScript, // aFuncDefEarlierInScript: aFuncDefEarlierInScript
        aVarDefEarlierInScript, // aVarDefEarlierInScript: aVarDefEarlierInScript
      };
    + Optional advanced content on the alias exports:
      https://www.freecodecamp.org/news/node-js-module-exports-vs-exports-ec7e254d63ac/
      https://medium.com/@geekguy/javascript-modues-exports-vs-exports-whats-the-difference-9a61cdb99386
  - Alongside Node.js, the JS runtime & API, is an expansive registry of third-party open-source software. This is known as the NPM (Node Package Manager) registry. It contains an overwhelming number of packages that are available for use.
  - A package in this context is a collection of one or more JS modules alongside meta-files and perhaps other code/scripts that's bundled together as a single unit. These packages often have a specific use case, that when combined with other packages can help in building complex and robust JS applications.
    + Two important files when dealing with packages in JS are the aptly name: package.json & package-lock.json.
      - The package.json is the file where all the details about the package belong. This includes things like the authors, license, repository, and other packages (i.e. dependencies) necessary to this package (among other things).
      - The package-lock.json file is a snapshot of the dependency tree of a package. It lists all the precise versions of the specified dependencies as well as the versions of all their children.
    + To interface with the registry there is the npm command-line tool, which is bundled with Node.js, and the website: https://www.npmjs.com/
      - You can use `npm i <packageName>` to install a dependency. This will download the package and save it in a folder called `node_modules/`
        EXAMPLE: npm i eslint
      - To save the dependency your package.json (i.e. formally include it in your project), include the appropriate flag.
        EXAMPLE: npm i eslint -D # saves eslint as a development dependency (i.e. something that's used to build the app)
        EXAMPLE: npm i cowsay -P # saves cowsay as a production dependency (i.e. something that's used to run the app)
    + The are many ways to interface with a third-party package.
      - A very common way is to import/require one or more of its exported module members in your source code.
      - Another way is to use the npx command-line tool, which like npm is also bundled with Node.js.
        EXAMPLE: npx eslint <file> # runs eslint on the specified file
        NOTE: A nice feature of npx is that if a package is not installed locally it will fetch it from the registry and run it, without polluting your machine.

*** Unix/Terminal ***
  - On Windows, the default command prompt is bad. It uses DOS commands and not UNIX-style commands which are much more widespread.
    + cmder: Good substitute, was recommended last semester. Comes with git bundled.
    + PowerShell: Good substitute, pre-installed on all Windows machines, aliases UNIX commands to their DOS equivalents.
    + Windows Subsystem for Linux (WSL): Good, more difficult to install:
      https://docs.microsoft.com/en-us/windows/wsl/install-win10
  - Think of you file system as a giant tree.
    + A \ represents the root of the file system.
    + A ~ represents the home directory.
    + A . represents the current directory.
    + A .. represents the parent directory.
  - man (manual): displays information about the given command (e.g. man ls).
  - pwd (print working directory), ls (list), cd (change directory): navigate the file system.
    + ls -a: list all files (even _hidden_ ones).
      NOTE: Files/directories that are _hidden_ are those prefixed with a dot (i.e. the period character), such as ".gitignore".
    + ls -l: list files in long mode (i.e. w/ more details).
      NOTE: Commands flags can be combined (e.g. ls -al).
  - cp (copy), mv (move), rm (remove), mkdir (make directory): file/directory operations.
    + rm -r: recursively remove a directory.
    + rm -f: force remove w/o prompting.
    + cp -r: recursively copy a directory.
      NOTE: mv does not require a -r option for directories.
  - Shortcuts:
    + Tab: To auto-complete paths and files.
    + #: Comments a line when placed at the beginning
    + Up arrow: Go to previous command in history
    + Down arrow: Go to last command in history.
    + Ctrl + A: Jumps to the beginning of the line.
    + Ctrl + E: Jumps to the end of the line.
    + Ctrl + R: Search the history for a previously executed command.
      - Esc: To exit search.
      - Tab: To select command.
  - less: A nice way to view a file in the terminal; it allows for forward and backward paging through the file.
    + more: An older version that doesn't allow for backward scrolling. As they say, "less is more" ;)
    + Type "q" to exit. See the man(ual) page for more information (i.e. "man less"), such as faster paging commands.

*** VSCode ***
  - Very standard editor, supports JS, TypeScript and HTML/CSS natively (no need for additional extensions).
  - Some useful other extensions:
    + Live Server (when we start HTML/CSS): auto-refreshes the page in your browser as you edit code.
    + Live Share: Google Doc-like collaboration.
      NOTE: We've tested this on Visual Studio but not Visual Studio Code (i.e. it might be buggy).
    + ESLint: Run ESLint directly while working in VSC.
