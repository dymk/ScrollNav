ScrollNav jQuery Plugin
=======================

About
-----

ScrollNav is a small, lightweight jQuery plugin 
for adding an auto-hiding navbar to websites. It 
works best with BootStrap based websites, but can
easily be dropped into any site with a fixed or 
static navbar.  

Usage
------
Given this markup:
```html
<html>
  <!-- jQuery/ScrollNav JS includes -->
  <body>
    <div id="navbar" style="position: fixed;">
      <a class="brand">Navbar Example</a>
      <ul>
        <li><a href="www.google.com">Obscure Website</a></li>
        <li><a href="www.reddit.com">Time Sinks</a></li>
      </ul>
    </div>
  </body>
</html>
```

The resulting call to the ScrollNav plugin would be such:
```javascript
$("#myNavBar").scrollNav();
```

If you were using a static navbar, add the navbar's height in padding
to the top of the document body (to avoid the navbar overlapping body
content).

Bootstrap Compatibility
-----------------------
Given that I originaly wrote the plugin with Bootstrap in mind, it 
should work just dropped into place when used with a bootstrap navbar.
Mobile compatibility took an ugly hack (namley injecting a bit of
css into the DOM), but it works. 
To enable bootstrap mobile compatibility, call the plugin with

```javascript
$("#myNavBar").scrollNav({"bootstrap_mobile": true});
```
