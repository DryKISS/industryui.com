# Todo

## General

- [ ] Create a blog config in the site to dictate the path for the blog
- [ ] Add Search and country dropdown to the Navigation bar
- [ ] Sort out the Newsroom style
- [ ] Sidebar rendering can be done on a higher level so its only processed once - and not per page - think Blog Layout

## Proxy pages

- [ ] From the data set need to build in proxy pages for
  - [ ] Tags: /tag/[Tag].html
  - [ ] Archive: /archive/[Year].html
  - [ ] Author: /[Author].html
  - [ ] Articles: /[Category]/[Slug].html
  - [ ] Category: /[Category].html

## Archive

- [ ] Archive could have a by month count also

## Article

- [ ] Style the article
- [ ] Need to pass in the next and previous articles
- [ ] Calculate articles that are relevant
- [ ] Get the full article details from the slug passed in via the query and category, and then look up the article file

## Card

- [ ] Button needs to be an A tag to render properly and google to follow
- [ ] Border of image top in card should be rounded too
- [ ] Add in date if required - newsroom

## Categories

- [ ] Category heading should be linked
- [ ] Prop Shape on the articles object
- [ ] Unique categories should be a higher order method
- [ ] Use reduce instead of Filter / Map
- [ ] Get the unique categories from the Articles summary list
- [ ] Get the latest article by date that is hero=true

## Category

- [ ] Change the path property to to
- [ ] Sort out the font-family to be adellesans bold
- [ ] Get the font from the theme

## Details

- [ ] Date and time needs passing in correctly
- [ ] Add the ability to remove certain Social elements
- [ ] Split out the social elements from this code
- [ ] Add the ability to remove some of the details
- [ ] Add in a Facebook like / share button
- [ ] Add the default theme
- [ ] Add the Microdata around this

## Hero

- [ ] Make the number work - sometime we want two hero slots

## Image

- [ ] Check that image is responsive
- [ ] Need to check that image exists, this will not be the case for the Terms

## Listing

- [ ] Cards need a margin bottom
- [ ] Need to search for the tags in the data list
- [ ] Really the tags as they are entered into the data list should be slugified and uniqued not on the FE
- [ ] Could create an extra mapping for tags in the data list for ease
- [ ] Use - useEffect
- [ ] Add pagination

# Readtime

- [ ] This should take in any time string / date and a format then present
- [ ] Use Moment here
- [ ] Make this locale aware

## Done

- [X] Add the Heading
- [X] Card should have a default colour - transparent
- [X] Add the image and alt - alt should be Title
- [X] Add the ReadMore button
