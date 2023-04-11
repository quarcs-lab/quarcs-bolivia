# Nagoya
[![Netlify Status](https://api.netlify.com/api/v1/badges/0251fa43-75ea-4387-a5a2-f5fea9fbc3e8/deploy-status)](https://app.netlify.com/sites/quarcs-data/deploys)

### Check out the site at https://quarcs-data.netlify.app/.

## Table of Contents:
- [Contributing Stories](#contributing-stories)
- [Contributing to the Project](#contributing-to-the-project)
  - [Learning](#learning)
  - [Project Management](#project-management)
  - [Local Setup](#local-setup)
  
# Contributing Stories
Interested in contributing a story to the project? Check out the wiki documentation [here](https://github.com/DSSD-Madison/Nagoya/wiki/How-to-Contribute:-Stories).

# Contributing to the Project
Interested in contributing to the project itself? Look below to familiarize with the project management/learning necessary to get started.

## Learning
Hugo is a static site generator that makes a lot of default decisions for programmers for project structure. 

This project uses a combination of content and Templating with Hugo Modules. 

Please read the link to the right to familiarize yourself with the project structure. - https://cloudcannon.com/blog/the-ultimate-guide-to-hugo-sections/ \
The Hugo documentation may also be helpful - https://gohugo.io/

## Project Management
We will be using a [Github Project](https://github.com/orgs/DSSD-Madison/projects/3) with 3 sections: Backlog, In Progress, and Done. Issues in the Backlog will represent segments of work to get done, or problems that need to be fixed.

To contribute to the project, assign an issue in the Backlog to yourself and move it to the In Progress section. Create a new branch off of main and implement the feature/fix/improvement, making commits after completing each subsection of the work. Push your code and move the issue(s) it adresses to Done. Create a pull request (PR) into main with a closing keyword in the description referencing the issue(s) that are addressed.

On a Pull Request, a preview of your deploy will be available on the PR as a comment to review.

PRs will be reviewed by at least one project member before merging. When a PR is merged into main, the new version will automatically be deployed to Netlify.

## Local Setup

Dependencies
- Hugo, Go, and Git - You'll need the extended version of Hugo - https://gohugo.io/installation/

Clone this repo with one of these options:
- Click the 'Use this template' button at the top of the page
- Or via the command line `git clone https://github.com/DSSD-Madison/Nagoya.git`
Start the Hugo sever & check it out:
- `hugo server -D`
- go to [http://localhost:1313/](http://localhost:1313/)
