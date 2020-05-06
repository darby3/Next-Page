# Next Page

A starting point for your next basic HTML/CSS/JS page. (Yeah, you see what I did there.)

## How to use

```npm install``` and then ```npm run dev``` to get a live-server and html/css/js compilation going. Results are output to ```./build```. ```npm prod``` runs basic prod-ready css/js minification, (outputting the results to the same ```./build``` directory).

Note: ```npm run imgWebp``` is provided as a convenience, and requires [webp be available on your system](https://formulae.brew.sh/formula/webp).

## Background

I used to use Grunt for this sort of thing. Then I set this up as a way to learn how to use npm scripts directly, instead. Then I just started using it for stuff.

I am 99% in debt to Paul C Pederson's [Using NPM as a Task Runner](http://paulcpederson.com/articles/npm-run/) for helping me get past the "oh, wait, I get it now" hump.

## Worth noting

I work in OSX land all the time, so I do non-platform-agnostic things here and there. I'll fix them if I move to another OS at some point and find out they break.

This repository used to be called "npm Scripts Starter." Then I decided to name it something more fun. But not too fun.

In January 2020 I swapped out Assemble for [11ty](https://www.11ty.dev/). Everything seems to work but then I haven't done much of anything too crazy with it yet. I think right now calling for a layout is required in the front matter of templates, but I think in another project I actually figured out how to set default layouts, so some day I might or should go back and apply that knowledge here. [There are also certainly other people doing this sort of thing better than I am](https://www.11ty.dev/docs/starter/) so it's worth shopping around a bit. I tend to like things basic, though.

Also, I've definitely used this (I think?) on Netlify; I think you just need to point at the ```prod``` script. But I'm also fairly sure I haven't actually used image files on Netlify yet, now that I think about it. I should figure that out sometime.
