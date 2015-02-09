# STEM Store Catalog
Quick and dirty slide show displaying items for sale. My wife is running a store at my son's high school and she was going to print out the photos of items with prices so whomever is sitting at the table can flip through to get the price instead of putting stickers on every single item.

I hate the idea of wasting paper, but even worse is I would be footing the bill for all the color ink.


##Issues
Between Yeoman and Booststrap the site probably should only have taken an hour or two. But I really wasted time figuring out the carousel. The Bootstrap carousel would work on the first slide to the next, then all the controls would stop.

My first work around was using [angular-carousel](https://github.com/revolunet/angular-carousel) but the lack of docs and digging through the code I still couldn't make it purty like the [demo](http://blog.revolunet.com/angular-carousel/).

So I went back to Bootstrap and finally found [this thread](http://stackoverflow.com/questions/22641834/angularjs-corousel-stops-working) which explained that ngAnimate and ui.boostrap don't play nice. So I removed 'ui.bootstrap' from my app dependencies and voila!