# hydrant

**Administrative Stuffs**
Kareem Khaled
400032153
CS 4WW3

**Hosting URL**
http://ec2-3-14-144-170.us-east-2.compute.amazonaws.com

**Why I chose React**

After reading the Specifications for this project, I realized that there was an opportunity to recycle various pieces of this application. We have to use a flexbox- Oh we can make a general component for that. Consistent Theme - React can do that without repeating code multiple times. Profiles for some Geolocated object - We can make a Component for that. 

React is also very snappy with its transitions - because it intelligently modifies the DOM for what is necessary to represent the change. That's miles times faster than refreshing the entire DOM any time a change is made. 

I also saw this project as an opportunity to create a larger-scale React Application from scratch, which I haven't done previously. 


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

**Project Part 2 Notes:**

- On the user registration page, data of different formats, at least numeric, alphabetic, email and date formats, is validated correctly using Javascript:
Each  field in the User Registration Page is validated. I did not have a date/alphabetical/numeric field, but I validated the existing email/password/username fields. (see [common/validators.js](validators.js))

- JavaScript in separate file:
Since I used React, it is not bad practice to include JS within components. In fact, it is necessary to do so for any component.
The same applies for the JSX code present within some components' render functions. It is not "messy" to do this, as it is one of React's core features. We can take advantage of this if we want to conditionally render different components. 



