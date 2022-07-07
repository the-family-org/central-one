<image src="others/assets/web-screenshots.gif" alt="App screenshots" />

<br />
<blockquote>
  This is a private project in development stage.
</blockquote>

<h2>Central</h2>

<p>
  App for private groups to share <b>news</b>, <b>memos</b>, <b>content pages</b>, <b>polls</b>, etc.
</p>

<a href="https://link.martins.page/central-one" alt="Click here to see the example">
  <image src="others/assets/example-button.png" alt="Click here to see the example" />
</a>

<br />
<hr />
<p>Click on topics to expand</p>

<details>
  <summary><b>About the app and technologies used</b></summary>
  <br />

  <p>
    The idea of this project is to be a collaborative platform used by a group of people with a common bond or interests, such as a family.
  </p>

  <p>
    The repository is a monorepo that uses <a href="https://lerna.js.org/">Lerna</a>. The <b>front-end</b> has a very simplistic layout, focused on maintainability and accessibility, and uses technologies such as: <a href="https://kit.svelte.dev/">Sveltekit</a>; <a href="https://formidable.com/open-source/urql/">URQL</a>; <a href="https://storybook.js.org/">Storybook</a>; etc. And the <b>back-end</b>, written in the same language (TypeScript), uses GraphQL, HTTP2, JWT authentication, httpOnly Cookie and libraries such as: <a href="https://nestjs.com/">Nest</a>; <a href="https://www.fastify.io/">Fastify</a>; <a href="https://mercurius.dev/">Mercurius</a>; <a href="https://www.prisma.io/">Prisma</a>; among others.
  </p>

  <hr />
</details>

<!-- <details>
  <summary><b>Run the app locally</b></summary>
  <br />

  <p>
    <b>Step 1. Clone the repository</b>
  </p>

```bash
# MAIN BRANCH - If you want to run the production ready version
git clone --branch main https://github.com/the-family-org/central-one.git

# DEV BRANCH - If you want to modify the code
git clone --branch dev https://github.com/the-family-org/central-one.git

cd central-one
```

  <br />
  <p>
    <b>Step 2. Run "First Install" script</b>
  </p>

  <p>
    If you don't have <a href="https://nodejs.dev/">Node</a>, <a href="https://yarnpkg.com/getting-started/install">Yarn</a>, <a href="https://lerna.js.org/#getting-started">Lerna</a>, <a href="https://github.com/FiloSottile/mkcert#installation" title="mkcert">mkcert</a> and <a href="https://docs.docker.com/get-docker/" title="Docker">Docker</a> installed on your computer, install them first and then run the "First Install" script.
  </p>

  <blockquote>
    This script do the following:
    <ul>
      <li>Create ".pem" certificates (https) inside "/secrets" folders;</li>
      <li>Create ".env" files based on ".env.example" files;</li>
      <li>Install node modules with "lerna bootstrap" (yarn);</li>
      <li>Run database docker container (postgres);</li>
      <li>Update database tables with Prisma.</li>
    </ul>
  </blockquote>

```bash
yarn first-install:dev
```

  <br />
  <p>
    <b>Step 3. Launch api and web app</b>
  </p>

```bash
# Run each command in its own terminal tab
yarn api:start:dev
yarn web:start:dev
```

  <br />
  <hr />
</details> -->

<br />
<br />
