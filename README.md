# React + TypeScript + Vite + Galxe Identity Protocol Starter
This template provides a minimal setup to get Galxe Identity Protocol working with  React, Vite, and TypeScript. It’s designed to help developers quickly kickstart projects that integrate Galxe’s identity solutions with a modern, performant frontend stack. 

## Installation
To set up your project, follow these steps:
1. **Create a new Vite project with the React template:**
```bash
npm create vite@latest my-app -- --template react
```
This command sets up a new React project using Vite as the build tool, preconfigured with TypeScript support.

2. **Install the Galxe Identity Protocol SDK:**
```bash
npm i @galxe-identity-protocol/sdk -S
```
This command installs the Galxe Identity Protocol SDK as a dependency, enabling interaction with Galxe’s identity features in your application.

3. **Add Node polyfills for browser compatibility:**

```bash
npm add -D vite-plugin-node-polyfills
```
## Configuration

To ensure compatibility with the Galxe Identity Protocol SDK, you need to configure Vite to handle Node.js polyfills. Update your vite.config.js file as follows:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  // other options
  plugins: [nodePolyfills()]
})
```

## Integrating the Galxe Identity Protocol
To use the Galxe Identity Protocol in your React application, you can start by importing the SDK. Here’s a basic example:
1. **Import the SDK:**
```javascript
import * as sdk from '@galxe-identity-protocol/sdk'
```
2. **Interact with the Protocol:**
```javascript
const { prepare } = sdk.babyzk
await prepare()
const { User } = sdk.user
const u = new User()
const identitySlice = u.createNewIdentitySlice('galxe')
const identityCommitment = User.computeIdentityCommitment(identitySlice)
```


## Resources

- [Galxe Identity Protocol](https://www.galxe.com/identity)



