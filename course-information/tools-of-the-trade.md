# Tools of the trade

This page provides a review of the core software used in this course, along with installation notes for those who want to run the software on their own computer.

## Browser

As we are doing web development we will need a __web browser__. In this course we recommend using either
__Chrome__ or __Firefox__, both free, popular browsers. The most important element of the browser you use it having access to the __JavaScript Console__. In Chrome it is accessed via `View > Developer > JavaScript Console`. In Firefox it is accessed via `Tools > Web Developer > Web Console`.

#### Installing Chrome

Go to [https://www.google.ca/chrome](https://www.google.ca/chrome) and follow the instructions.

#### Installing Firefox

Go to [https://www.mozilla.org/firefox/][https://www.mozilla.org/en-CA/firefox/] and follow the instructions.


## Text editor

Our text editor in this class is __Atom__. It's a nice, free, open-source text editor. Even if you prefer some other text editor, you should use Atom in this class.

#### Installing Atom

Atom is already installed on CDA machines. Otherwise: go to https://atom.io/ and follow the instructions

## Atom Packages

One great thing about Atom is that it's extensible using __packages__. You can explore the packages yourselves and install the things you like, but two very helpful packages are:

- atom-live-server (already installed on CDA machines)
- prettier-atom

#### Installing Atom packages

1. Run Atom
1. Go to Preferences/Settings
1. Select `+ Install` from the vertical menu that appears in the editor
1. Type the name of the package into the search bar
1. Click `Install` next to the correct search result

Now it's installed! (You should be able to go to the `Packages` menu at the top of the screen and see the package listed as an option there.)

## Version control

We use version control as a central part of this course. Specifically, we will use version control software called __Git__ and an online repository host called __GitHub__. Git can be used on the command line, but to make our lives easier we'll use software. You can choose between two options: GitHub Desktop, or Atom's built in Git tools.

### GitHub Desktop

This course assumes you already have experience using GitHub Desktop. If you need a refresher, refer to the [CART 253 Version Control notes](https://github.com/pippinbarr/cart253-2019/blob/master/modules/tools-version-control/tools-version-control.md).

#### Installing GitHub Desktop

GitHub Desktop is already installed on CDA machines. Otherwise: go to https://desktop.github.com/ and follow the instructions.

### Atom Git tools

Our text editor, Atom, comes equipped with basic version control tools using Git. It is conceptually the same as using GitHub Desktop, just with a different interface.

#### Cloning

When you want to clone your repository to start work:

1. use the Command Palette by entering `Command-Shift-P` (on mac) or `Control-Shift-P` (on windows)
2. Type `clone` to access the `GitHub: Clone` command, select it, and hit enter to execute
3. Paste in the base URL from your repository on GitHub, e.g. `https://github.com/pippinbarr/cart263-2020` in "Clone from"  and enter a path on your computer in "To directory". (Make sure you include the folder for the repository itself in the path, e.g. `/Users/pippinbarr/Desktop/cart263-2020` or equivalent Windows-style path)
4. Click `Clone`
5. Now the repository will be downloaded, ready to work with on your computer in the specified location

#### Pulling

When you start work you should always pull from the remote repository in case there are any changes there. If there are, a `Pull` button will appear on the bottom bar of the Atom window, to the right hand side. Click it to pull.

__Note__: the first time you do something that requires a connection to GitHub.com, it will ask for your username and password.

#### Committing

When you want to commit some work from within Atom:

1. Go to `Packages > GitHub > Toggle Git Tab`
2. Note that all your changed files are listed in the "Unstaged Changes" list
3. Click `Stage All` to select all the files to be committed, they will move to the "Staged Changes" area, ready to commit
4. Write a commit message in the text box
5. Click `Commit to master` to commit the changes to your local repository

#### Pushing

When you want to push your work to GitHub:

1. Click on the `Push` button on the bar at the bottom of the editor window, to the right side (the number next to it indicates how many commits there are to push)

__Note__: the first time you do something that requires a connection to GitHub.com, it will ask for your username and password.
