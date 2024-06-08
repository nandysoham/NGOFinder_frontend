// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// canvas mock needed for component testing
import "jest-canvas-mock";

// https://stackoverflow.com/a/62358393 -> else it stops in mapbox implementation
window.URL.createObjectURL = function() {};
