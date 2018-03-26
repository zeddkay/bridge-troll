'use strict';

// Using Material Icons as inline SVG - https://material.io/icons/

const leaflet = require('leaflet');

// Read contents of SVG files from bundle as Data URLs
const locationSvgUrl = require('../icons/material-icons/location.svg');
const locationSvgUrlWhite = require('../icons/material-icons/location_white.svg');

const lockedSvgUrl = require('../icons/material-icons/locked.svg');
const lockedSvgUrlWhite = require('../icons/material-icons/locked_white.svg');

const unlockedSvgUrl = require('../icons/material-icons/unlocked.svg');
const unlockedSvgUrlWhite = require('../icons/material-icons/unlocked_white.svg');

// All icons share the same size, define it once
const iconSize = [25, 25];

// Expose custom Leaflet Icons to be used in our markers
module.exports.location = leaflet.icon({
  iconUrl: locationSvgUrl,
  iconSize
});

module.exports.location_white = leaflet.icon({
  iconUrl: locationSvgUrlWhite,
  iconSize
});

module.exports.locked = leaflet.icon({
  iconUrl: lockedSvgUrl,
  iconSize
});

module.exports.locked_white = leaflet.icon({
  iconUrl: lockedSvgUrlWhite,
  iconSize
});

module.exports.unlocked = leaflet.icon({
  iconUrl: unlockedSvgUrl,
  iconSize
});

module.exports.unlocked_white = leaflet.icon({
  iconUrl: unlockedSvgUrlWhite,
  iconSize
});
