// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// canvas mock needed for component testing
import "jest-canvas-mock";

// https://stackoverflow.com/a/62358393 -> else it stops in mapbox implementation
window.URL.createObjectURL = function() {};



// to unit test mapbox
// ref: https://stackoverflow.com/a/74473977
import mapboxgl from 'mapbox-gl'

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({}))
}))
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

mapboxgl.Map.prototype = {
  getBearing: jest.fn(),
  getCenter: jest.fn(),
  getPitch: jest.fn(),
  getZoom: jest.fn(),
  off: jest.fn(),
  on: jest.fn(),
  remove: jest.fn(),
  //your map functions used in your component
}


