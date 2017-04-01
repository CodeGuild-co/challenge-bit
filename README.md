# challenge:bit

[![Join the chat at https://gitter.im/CodeGuild-co/challenge-bit](https://badges.gitter.im/CodeGuild-co/challenge-bit.svg)](https://gitter.im/CodeGuild-co/challenge-bit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Puzzle boxes for the micro:bit.

Members of the CodeGuild have been hard at work, creating new, complex, and exciting puzzles for the BBC micro:bit. This repo contains their work.

You'll find the contents of the [website](http://puzzle-bit.codeguild.co) as well as the source code for each of the puzzles. There's also a list of possible improvements to be made, so if you'd like to contribute you can get cracking straight away!

## Making your own Challenge

You can use any micro:bit editor you like, all you need to do is be able to output downloadable `.hex` files for the micro:bit.

Build your puzzle and test it out. Once you've got something that works you'll need to make changes to this repository to add your puzzle to the website. Here's how:

You'll need to make sure you've got [git](https://git-scm.com/), [VirtualBox](https://www.virtualbox.org/), and [Vagrant](https://www.vagrantup.com/) installed. They're all free and pretty easy to install.

Then you'll need to fork this repo (so you'll need a GitHub account, if you don't already have one). This is easy, just click the "Fork" button in the top right of this page.

You'll now have your own copy of the repository stored in your own account. You can make whatever changes you'd like to this copy; it's yours.

To make changes you'll need to clone your fork. This might require running something like this on the command line:

    $ git clone https://github.com/YOUR_USERNAME/puzzle-bit

This will have downloaded the repo to your computer. Let's now get vagrant up and running by doing:

    $ cd puzzle-bit
    $ vagrant up

This one might take a while, but when it's done there will be a virtual machine running on your computer with all the code inside. We can connect to the virtual machine like this:

    $ vagrant ssh

And now we can serve the website locally:

    $ cd /vagrant
    $ jekyll serve

If you now open this link: http://192.168.33.10:4000 you should see the puzzle:bit website. Except this one is running on your machine, so changes we make here will be seen on the website.

To reload the website with any new changes, you might have to restart the jekyll server by pressing `Ctrl-c` and then running `jekyll serve` again.

To add your puzzle you'll need to:

1) Create a new directory inside the `puzzles` directory
2) Inside this directory put your puzzle source code into a file called `main.ts`
3) Also add your `.hex` file to this directory
4) Add a `README.md` file to the directory, giving instructions for developers on how to develop your puzzle
5) Add an `index.md` file to the directory giving instructions on how to download and play your puzzle
6) Add a post to the `_posts` directory talking about your puzzle and providing links to download it

The post is used to create the webpage for the puzzle. It should contain a links to download the puzzle files, as well as instructions on what to do, and a diary of the work that went into creating the puzzle. This file should contain enough information for people to start playing the puzzle for themselves. Make sure to include a diary of the work you've done. What problems are you solving? How did you go about it? What was hard? What was fun?

The `README.md` file contains any information that the puzzle developer thought might be useful for future developers of the puzzle (or other puzzles). This file is for developers of puzzles (not normally for people wanting to play the puzzle). Make sure to include a list of improvements, things that could be worked on to make the puzzle better.

Take a look at the existing projects for clues on how to format the files and what information to put in them.

When you're done making changes you'll want to have them included in the official website (not just your own). So first push your changes up to your fork:

    $ git add CHANGED_FILE CHANGED_FILE
    $ git commit -m 'DESCRIPTION_OF_CHANGES'
    $ git push origin master

If you don't know what the `git add` or `git commit` instructions are doing, ask around!

Now your fork will have the changes, let's make a pull request to the main repo to have them included in the main site. You'll need to open your fork on the GitHub website and click the "New Pull Request" button. Hopefully you'll see a green bit of text that says "Able to merge", if so, click the "Create pull request" button, provide a description of the work you've done and alick "Create pull request" again. If instead you see a red error message, you'll have to fix the problems it talks about before your work can be merged.

## Improvements

Here's a list of things that could be done to make this repo/website better.

- Improve the existing puzzles. Play with them and see if they can be made better. Look at their README files to see what improvement have already been thought of
- Create your own puzzle. We haven't got that many puzzles at the moment. Why not build something brand new?
- Make the website nicer. Currently it's using a standard jekyll theme and doesn't have that much content. Why not make it gorgeous?
- Improve the instructions. Did you find the instructions hard to follow? Why not make them better?
