# Nagoya
[![Netlify Status](https://api.netlify.com/api/v1/badges/0251fa43-75ea-4387-a5a2-f5fea9fbc3e8/deploy-status)](https://app.netlify.com/sites/quarcs-data/deploys)

[Site link](https://quarcs-data.netlify.app/)

## Table of Contents:
- [Project Setup](#project-setup)
- [Regular Setup](#regular-setup)
  - [Cloning + Install Packages](#1-cloning--install-packages)
  - [Deploying](#2-deploying)
- [Styling](#styling)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)

## Project Setup
We will be using a [Github Project](https://github.com/orgs/DSSD-Madison/projects/3) with 3 sections: Backlog, In Progress, and Done. Issues in the Backlog will represent segments of work to get done, or problems that need to be fixed.

To contribute to the project, assign an issue in the Backlog to yourself and move it to the In Progress section. Create a new branch off of main and implement the feature/fix/improvement, making commits after completing each subsection of the work. Push your code and move the issue(s) it adresses to Done. Create a pull request (PR) into main with a closing keyword in the description referencing the issue(s) that are addressed.

PRs will be reviewed by at least one project member before merging. When a PR is merged into main, the new version will automatically be deployed to Netlify.

## Regular Setup

 ### 1. Cloning + Running Locally

  - Clone this repo with one of these options:

    - Click the 'Use this template' button at the top of the page
    - Or via the command line `git clone https://github.com/DSSD-Madison/Nagoya.git`

 - Start the Hugo sever & check it out:

   - `hugo server -D`
   - go to [http://localhost:1313/](http://localhost:1313/)

  > Alternatively, you can run this locally with [the Netlify CLI](https://docs.netlify.com/cli/get-started/)'s by running the `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/). 

  ### 2. Deploy Previews (for PRs)
  - Install the Netlify CLI globally `npm install netlify-cli -g`
    
  - Run `hugo`

  - Then use the `netlify deploy` for a deploy preview link. **Use this so others can review your change on your PR**

## Styling

The variables below give you the ability to change the gradient colors of the blobs and are interpolated into the URL string of the background-img within the body. 

```css
// Controls the blob blur gradient colors within the main tag's svg
--top-right-blur-1: #2ebc92;
--top-right-blur-2: #ecbb50;
--bttm-left-blur-1: #ff3e89;
--bttm-left-blur-2: #0095cc;
```

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process
