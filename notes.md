# Notes.md
> [!IMPORTANT]
> **Everything** I keep in _these_ notes can be used on exams :sauropod:

## Git Intro
Git was completely new to me. Here are the basics:
```
git status
git add .
git commit -m "note"
git log
git checkout b35f03b1790f
```
When I'm using Github, here are my most common commands:
```
git clone https://github.com/McChug/startup.git
git pull
git add .
git commit
git push
```
The pattern of pull, add, commit, and push should happen multiple times whenever I'm editting my code.
> [!TIP]
> Merge conflicts aren't too bad to deal with :thumbsup:

## Console Commands to Remember
Here are the console commands and descriptions from instruction for easy referencing:

**echo** - Output the parameters of the command, **cd** - Change directory, **mkdir** - Make directory, **rmdir** - Remove directory, **rm** - Remove file(s), **mv** - Move file(s), **cp** - Copy files, **ls** - List files, **curl** - Command line client URL browser, **grep** - Regular expression search, **find** - Find files, **top** - View running processes with CPU and memory usage, **df** - View disk statistics, **cat** - Output the contents of a file, **less** - Interactively output the contents of a file, **wc** - Count the words in a file, **ps** - View the currently running processes, **kill** - Kill a currently running process, **sudo** - Execute a command as a super user (admin), **ssh** - Create a secure shell on a remote computer, **scp** - Securely copy files to a remote computer, **history** - Show the history of commands, **ping** - Check if a website is up, **tracert** - Trace the connections to a website, **dig** - Show the DNS information for a domain, **man** - Look up a command in the manual

## Deploy Files
```./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup```
This is key. Also in the linux terminal, I go back to my folder with ```~/```.

## CSS
For a responsive header, main, and footer, set ```flex: 0 50px;``` (or any size) for the header and footer, and set ```flex: 1``` for the main, making it responsive.
