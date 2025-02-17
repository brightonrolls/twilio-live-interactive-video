{
  "name": "twilio-live-interactive-video",
  "version": "1.1.0",
  "description": "",
  "scripts": {
    "postinstall": "npm install --prefix apps/web",
    "test": "true",
    "preserverless:deploy": "npm run build --prefix apps/web",
    "serverless:deploy": "node serverless/scripts/deploy.js",
    "serverless:list": "node serverless/scripts/list.js",
    "serverless:remove": "node serverless/scripts/remove.js",
    "develop:web": "npm run start --prefix apps/web",
    "start": "node index.js"
          }
  "repository": {
    "type": "git",
    "url": "git+https://github.com/twilio/twilio-live-interactive-video.git"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@twilio-labs/serverless-api": "^5.4.3",
    "axios": "^0.21.4",
    "cli-ux": "^5.6.3",
    "commander": "^8.2.0",
    "dotenv": "^10.0.0",
    "nanoid": "^3.1.28",
    "twilio": "^3.71.1"
  },
  "bugs": {
    "url": "https://github.com/twilio/twilio-live-interactive-video/issues"
  },
  "homepage": "https://github.com/twilio/twilio-live-interactive-video#readme"
}
