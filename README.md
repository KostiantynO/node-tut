'# node-tut project initialization:'

https://codeforgeek.com/node-js-tutorial-step-by-step/

Create a folder:

    mkdir pro
    cd pro
    mkdir node-tut
    cd node-tut

Init a repo:

    git init -b main && echo '# node-tut' >> README.md
    git add README.md && git commit -m "first commit"
    git remote add origin https://github.com/KostiantynO/node-tut.git
    git push -u origin main

Update npm:

    npm install -g npm
    npm -v  // 8.0.0
    node -v // 14.17.5

Initialize project (package.json):

    npm init
    npm i
    npm list --depth=0
    npm install [pack]
    npm uninstall [pack]  // updates package.json
    npm start             // script from package.json
    npm test              // from package.json
    npm run [script]      // from package.json
    npm outdated
    npm update
    npm update [pack]
    npm cache clean --force
