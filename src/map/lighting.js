'use strict';

const sunCalc = require('suncalc');

var nightMode = 'false';

module.exports.setLighting = (lat, lng) => {
  var tileUrl;

  let hour = new Date().getHours();
  var sunset = sunCalc.getTimes(new Date(), lat, lng).sunset.getHours();
  var sunrise = sunCalc.getTimes(new Date(), lat, lng).sunrise.getHours();
  if (hour >= sunset || hour < sunrise) {
    tileUrl =
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
    nightMode = 'true';
  } else {
    tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
  }

  return tileUrl;
};

module.exports.getNightMode = () => {
  return nightMode;
};
