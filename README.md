# [STEM Store Catalog](http://stem-store.translunardesigns.com/)
Quick and dirty slide show displaying items for sale. My wife is running a store at my son's high school and she was going to print out the photos of items with prices so whomever is sitting at the table can flip through to get the price instead of putting stickers on every single item.

I hate the idea of wasting paper, but even worse is I would be footing the bill for all the color ink.  

#Setup  
Pretty easy as this is a contained web app with no database. If you haven't used one of these apps before.  

1. Download and install [Nodejs](http://nodejs.org/)  
2. Download and [install git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), for this project you don't need to worry about SSH and secure keys yet.  
3. Open a shell can clone this project: git clone https://github.com/pcimino/stem-store.git  
4. Go into the directory: cd stem-store  
5. Install bower globally: npm install bower -g  
6. Install bower modules: bower install  
7. Install NPM modules: npm install  
	1. For Mac, you'll probably need to use sudo: sudo npm install  

#Running the Stem Store
Once everything is setup, simply run Gulp  
- gulp serve:dist  

This will build the site, run a server and launch the site in your browser. The complete site is in the dist/ directory. To deploy the site, simply upload the contents of the dist/ directory to your web server home directory.  

#Images
To change/update images for the catalog, it is simple if you follow these conventions:  
* Catalog images are JPEGs, and the extension is lowercase: ".jpg"  
* All catalogs are put in subdirectories in the /assets/images/catalog directory  
* Open a shell and go to the tools directory, then run the image script. These are shell files, so Windows Users will need to be in the git-bash or Cygwin bash command line.  
	** cd tools  
	** ./move-image-files.sh  
* This will not touch existing files, only files that look like: MyImage.jpg  
	** Renames MyImage.jpg to MyImage.sm.jpg  
	** Copies MyImage.sm.jpg to MyImage.md.jpg and MyImage.lg.jpg  
* Files should be resized to standard dimensions across the site. Smaller images are used for mobile devices:  
    * .lg.jpg => 1000px wide  
    * .md.jpg => 500px wide  
	* .sm.jpg => 320px wide  
* Once your images are all setup, generate the catalog file
	* cd tools
	* ./create-catalog-json.sh
* The JSON file in the /assets/json directory will be updated, and contains the lists of images (without an extension) for each category.


#Issues
##Setup Issues
May need to install gulp globally:  
- npm install gulp -g  

You may have trouble pulling code and npm modules down, in which case you'll want to modify your settings. These may require you to setup your SSH keys.

- [Configure Git to use HTTPS](http://jgoodall.me/posts/2013/05/29/git-use-https/)  
- [Git Configuration Reference](http://git-scm.com/docs/git-config)  



##Development Issues
Between Yeoman and Booststrap the site probably should only have taken an hour or two. But I really wasted time figuring out the carousel. The Bootstrap carousel would work on the first slide to the next, then all the controls would stop.

My first work around was using [angular-carousel](https://github.com/revolunet/angular-carousel) but the lack of docs and digging through the code I still couldn't make it purty like the [demo](http://blog.revolunet.com/angular-carousel/).

So I went back to Bootstrap and finally found [this thread](http://stackoverflow.com/questions/22641834/angularjs-corousel-stops-working) which explained that ngAnimate and ui.boostrap don't play nice. So I removed 'ui.bootstrap' from my app dependencies and voila!