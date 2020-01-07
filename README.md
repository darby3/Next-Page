# npm Scripts Starter

The world is on fire but I'm finally getting around to learning how to set up and use npm scripts instead of Grunt or Gulp. So that's fun.

I am 99% in debt to Paul C Pederson's [Using NPM as a Task Runner](http://paulcpederson.com/articles/npm-run/) for helping me get past the "oh, wait, I get it now" hump.

This is basically a rough scaffolding for basic html/css/js projects and will probably wind up over-engineered as I figure out fun but pointless stuff I can do with this.

## Worth noting

I work in OSX land all the time, so I do non-platform-agnostic things here and there. I'll fix them if I move to another OS at some point and find out they break.

## January 2020 Update

The world is literally on fire and I'm out here switching from Assemble to [11ty](https://www.11ty.dev/). In theory this is a pretty easy transition, though it requires a slight change or two to the front matter of templates (calling for a layout is required, as I can't seem to find an option for setting a default layout). I've kept basically everything else separate from 11ty, though, and, aside from slightly updating the Browserify/Babelify flow, that stuff should all work the same.

But it might not work, so, who knows.

There's plenty else to be done here but [there's probably other people doing this better than me](https://www.11ty.dev/docs/starter/) so it's worth shopping around a bit. This is just what's worked for me and made sense to me over time.

## How this works, if it works

So you start a project and ```npm install``` it and then you ```npm run dev``` it and you should get a live server with automatic compilation of templates, Sass files, and JavaScript files all output to the build folder. As of right now it's all in debug mode until I get around to doing something final with it at which point I'll need to figure out how to prod mode all of it.
