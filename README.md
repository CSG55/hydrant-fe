# hydrant

**Administrative Stuffs**
Kareem Khaled
400032153
CS 4WW3
Worked on Add-on Task #2, answers are under **Bonus Add on #1**

**Hosting URL**
http://ec2-3-14-144-170.us-east-2.compute.amazonaws.com

**Why I chose React**

After reading the Specifications for this project, I realized that there was an opportunity to recycle various pieces of this application. We have to use a flexbox- Oh we can make a general component for that. Consistent Theme - React can do that without repeating code multiple times. Profiles for some Geolocated object - We can make a Component for that. 

React is also very snappy with its transitions - because it intelligently modifies the DOM for what is necessary to represent the change. That's miles times faster than refreshing the entire DOM any time a change is made. 

I also saw this project as an opportunity to create a larger-scale React Application from scratch, which I haven't done previously. 


**CSS Validator**

The CSS validator returned "Parse Errors" for all but 2 errors shown. The Parse errors are originating not from my stylesheet (App.css), but from an external stylesheet I imported for react-bootstrap styling. (see App.js)
It seems that variable declarations within CSS caused these issues. 

The only other 2 errors were about 2 non-existant properties. Again, these are errors from external stylesheets, where it is likely that the CSS validator doesn't recognize the types of properties used. 


**HTML5 Validator**

The HTML5 validator doesn't work - I receive this error:
IO Error: Connect to ec2-3-14-144-170.us-east-2.compute.amazonaws.com:3000 [ec2-3-14-144-170.us-east-2.compute.amazonaws.com/3.14.144.170] failed: connect timed out

This is because HTML5 validators do not work with React. 
Every component file in this project contains a render() function. While this code has a similar structure to HTML5, render() provides a tree of React Elements. React, behind the scenes, maintains a Virtual DOM built from these React Elements. If any change occurs (A state update, for instance), React only changes what is necessary in the actual DOM to represent the changes. This allows for a faster application, along with seamless page transitions. 

**Bonus Add on #1:**
- Sample video is displayed in
individual object page using proper
HTML5 tags, and plays properly:
This is shown in the Individual Results Page. I used the HTML <video> and <source> tags as was required. 

2di)
- Describe briefly the different versions of graphics provided in step 2(a); 
include a sample of HTML code and explain how the different selectors work 
together. 
While I did not provide multiple images for my graphics, I will explain a sample:
```
<picture>
  <source media="(max-width: 799px)" srcset="480-picture.jpg">
  <source media="(min-width: 800px)" srcset="800-picture.jpg">
  <img src="800-picture.jpg" alt="A good description of this picture">
</picture>
```
Within the <picture> HTML tag - 
If the first source media condition passes, we show the first source (screen size is 799px or below)
If the second condition passes, we show the second source (screen size is at least 800px)
Finally, the img tag is always necessary for showing an image (otherwise an image won't appear!). This is the default case that is shown if: the media conditions were all false, or, the browser didn't support the <picture> element. 


2dii)
- List three positive goals that can be achieved using HTML5 <picture> and 
<source> attributes. 
1. Having multiple sources serve as a fallback if a browser doesn't support the picture element.
2. We can display different images when working with different screen widths.
3. <picture> allows us to cater to older browsers by its "type" attribute, which the browser can reject if it is an unsupported format.

2diii)
- List one negative about using HTML5 <picture> and <source> attributes.  How 
can this negative be mitigated? 
1. You will need to host multiple images to represent one image. This can be mitigated by optimizing the images. (This should be done anyway so the user doesn't have to download a larger image size when loading your site)


**Project Part 1 Notes:**

- Pages contain a header, footer and
menu:
My Header and Menu are both present, they are conjoined together into a NavBar

- HTML has appropriate titles and
basic meta data:
These can be found in index.html

- HTML code perfectly laid out and
easy to read with consistent
formatting:
All the React Elements are laid out well and are consistent.

- Uses CSS @media queries to
dynamically adjust layout and
displayed elements to screen
widths as low as 320px without
flaws:
I use a @media query in App.css. I also used the user's viewport to determine heights of pages, along with font sizes. The external bootstrap stylesheet, which uses @media queries, is also used in this application.





