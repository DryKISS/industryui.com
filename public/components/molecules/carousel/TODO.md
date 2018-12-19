# Todo
- [ ] load jquery & slick.js beautiful way without <body>-<script> attaching
  Problem to resolve: resolve hacky timeout (see componentDidMount -> setTimeout)

# Delayed
- [ ] http://holderjs.com/ instead of placehold.it
   holder.js isn't fit because unsupport setting images sizes by css with % 
- [ ] extract options externally
     (no reason for now) 
- [ ]  extract links to prev/next buttons to "prevId" and "nextId" attributes
not certian which solution would better and if any is really required.
Possible ways:
   1) use external tags by ID. Cons: need place that tags manually with considering carousel resizing.
   2) use internal control + external component passed via props
   Would work but not very elegant
   3) use internal button but with external styling

   see also: slick.js appendArrows param
 
freezing until real requirements

- [ ] use unique ids and classnames for internal itemss
- [ ] (long) Rewrite without jquery. Possible alternatives: 
   Note: slick.js cannot work without jquery
   
   non-react:
   https://github.com/pawelgrzybek/siema
   https://github.com/metafizzy/flickity
   https://github.com/nolimits4web/swiper/
   https://github.com/meandmax/lory
   https://github.com/ganlanyuan/tiny-slider
   
   react-based:
   https://github.com/FormidableLabs/nuka-carousel
   https://github.com/leandrowd/react-responsive-carousel
   http://leandrowd.github.io/react-responsive-carousel/
   
   see also: https://stackoverflow.com/a/38755312/1948511 


# Done
- [v] keep & set current slide on resize (keep slide number in state)
