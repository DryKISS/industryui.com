# Static Map

Builds a static google map, this essentially just loads a pre-rendered image.
This does require a Google API Key

## Setup

Visit: https://console.cloud.google.com/ and add the Maps Static API to the
correct project

Create or get teh relevant API key

Create the digital signature

## Props

- Center: {latitude, longitude} or "city hall, new york, ny"
- Path: Encoded polyline using the enc: prefix within the location declaration of the path.

## Pricing

All maps APIs from Google now cost. A credit of $200 is available

- 0–100,000
- 0.002 USD per each
- (2.00 USD per 1000)

## Links

- https://developers.google.com/maps/documentation/maps-static/intro
- https://developers.google.com/maps/documentation/maps-static/dev-guide
