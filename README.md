# jquery-scrub-links

Removes links from a body of text and places them at the end for easier reading.

The way it works is if the link is specified to be scrubbed then it removes the `<a>` tag and leaves the text between the tag as plain text within the paragraph (or wherever). The link is placed in a separate specified container with the same text and of course this time with the `<a href="">`. 

One conditional I included is if there&#8217;s a title attribute on the link, the reference at the bottom will use the title attribute instead of the text wrapped in the <a> tag. I&#8217;ve found this to be helpful sometimes when pulling links out of immediate context.

## How To

After calling `jquery.scrub-links.js` you activate the function with the following:

`$('THE-A-TAG').scrubLinks('WHERE-TO-PUT-THEM');`

Where _THE-A-TAG_ is the pointer to which links will get scrubbed, something like `.post-content p a` and where _WHERE-TO-PUT-THEM_ is the `id` of the `<ul>` where the links will be placed, something like `#post-content-link-list`.

This is barebones in terms of abstraction and functionality. Feel free to expand, make better and release on your own.