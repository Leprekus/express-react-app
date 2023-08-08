# React Express Social Media Clone

### Starting up the app

* Fix: tsc -w needs to be run in express-react-app dir to track file changes
* npm run dev starts the server
* watch changes in tailwind.css: npx tailwindcss -i ./public/global.css -o ./public/output.css --watch

previous dev

```json
{
  "scripts": {
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q ./server/server.js\""
  }
}

```

new dev

```json
{
  "scripts": {
    "dev": "concurrently \"npx tailwindcss -i ./public/global.css -o ./public/output.css --watch\" \"npx tsc --watch\" \"nodemon -q ./server/server.js\""
  }
}


```
