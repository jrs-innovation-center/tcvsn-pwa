# MaterialUI Markdown Document Site

Description

## Contents

* [Summary](static/summary.md)
* [User Stories](static/stories.md)
* [Wireframes](static/wireframes.md)
* [API](static/api.md)
* [StyleGuide](static/styleguide.md)
* [Technology Stack](static/stack.md)
* [Developer Setup](static/dev.md)
* [Testing](static/test.md)
* [Deployment](static/deploy.md)

## About the Docs

You can either read the docs in the README files or generate the documentation
website and read the docs using a browser.

## How to run the docs

```
yarn
yarn dev
open http://localhost:4000
```

## How to add a new page to the docs

* Create a new markdown file in the static folder.
* Create a new menu item in the menu.json file

```json
{
  "text": "Page",
  "url": "/[filename]"
}
```
