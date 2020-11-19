# podcast

so after being asked to maintain this i decided hey future-me it'd be helpful if now-me writes instructions to you so that you don't get stuck in the future because time is even more valuable in the future than it is now

# developing locally

```bash
npm i;
npm run serve;
```

damn frameworks are convenient

# deployment

currently the site is hosted on github pages for free. it's fast and if i paid for ssl it'd be https too, also free. thanks github, how nice of you. currently hosted at at [hangingfromtherafters.us](http://www.hangingfromtherafters.us)

to deploy, simply run `npm run deploy`. this will run the `deploy` script in `package.json`. this runs a [script i stole from logrocket](https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/), which essentially does the following:

1. checks out a temporary branch called gh-pages
2. runs the build commands and puts the static files into `/dist`
3. pushes it to origin/dist
4. deletes the local branch and cleans up after itself

here's the thing; after deploying, you have to go to the settings tab on the repo and navigate to the section about github pages. instead of `master`, the branch should be `gh-pages`. also, the custom domain will be empty. every time. very annoying. so fill that in with `www.hangingfromtherafters.us`. finally, after saving, un-check the "force https" option, because I'm @#!$ cheap and didn't pay for it.

There you go, you did it.

Hey future me - consider writing a travis.yml continuous integration script?

### repo maintenance notes

`/dist` can probably have all of its contents ignored and removed from source control now since the build script doesn't use `/master`. `/dist` could even be removed, and the build script could just create the `/dist` folder, probably. too tired 2 figure it out rn tho, that's a problem for future me

### austin

*lmk if u want me 2 set u up w/ this so u can make changes 2 the site urself e z p z ;) 30 mins on zoom or less*
