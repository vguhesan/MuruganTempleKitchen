This repository contains source-code for https://kitchen.murugantemple.org/

This static website is used for promoting the non-profit kitchen that is part of the Murugan Temple of North America. This site displays the latest available items on the menu. The availability of the items can be toggled on and off on the back-end. This allows the team in the kitchen to dynamically control inventory based on availability. People visiting the temple can call-in their carry-out order ahead of time, and pick it up on the way out.

### Screenshots

![Screenshot #1](https://github.com/vguhesan/murugantemple-kitchen/blob/master/static/img/screenshots/s1-sml.jpg)

---

![Screenshot #2](https://github.com/vguhesan/murugantemple-kitchen/blob/master/static/img/screenshots/s2-sml.jpg)

Screenshot showing the same menu of available items on display on a LG TV screen at the temple premises to allow visitors to order based on latest availability. Menu is dynamically generated and refreshed at a set interval remotely.

---

## Getting Started

Steps to getting started

1. Follow bitbucket instructions to clone this repository.
2. Make sure you have python (or node or equivalent) installed. Contents belong to a static site so all you will need is a server that can serve on localhost for development.
3. If you are using Python, change directory to this directory.
```
cd <this_project_folder>
```
4. Run built-in Python webserver.
```
python -m SimpleHTTPServer 8000
```
5. Open browser and navigate to
```
http://localhost:8000/
```
6. The website should come up.

---

## Make your changes

At this point, you can make all the necessary changes locally. Once you are satisfied with the local changes, it's time to upload them to the **live-blu** site. 

1. You can SFTP the contents of the root directory  and all all of it's sub-directories to the target folder.
2. Verify and validate your changes.

More instructions coming soon.

---

