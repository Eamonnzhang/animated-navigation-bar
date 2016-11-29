# SideNav
A Nice and Animated Side Navigation Bar Built by jQuery&amp;TweenMax(GSAP)

![](http://ww3.sinaimg.cn/large/71d81503jw1fa9ahrwyqmg205z0cajug.gif) 

## How to use
Fisrt of all,please introduce jQuery and TweenMax before SideNav,and don't forget css:
```html
<link rel="stylesheet" href="/dest/scss/sideNavi.css">
<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script src="/bower_components/gsap/src/minified/TweenMax.min.js"></script>
<script src="/dest/js/SideNav.js"></script>
```
Then HTML:
```html
<section class="km-side-navi" id="exampleSide"></section>
```
Finally use Javascript:
```Javascript
var options = {
    menu : ['item1','item2','item3','item4','item5'],
    position : 'left',
    themeColor : '#1ed1dc',
    id : 'exampleSide'
}
var SideNav = new SideNavi(options);
```
See [OnlineDemo](http://www.eamonn.cn/sidenav)