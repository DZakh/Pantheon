import '@babel/polyfill';

import './js/packages/lazysizes';

import { activateRealVhHeight } from './js/functions/realVhHeight';
import { activateSmoothScroll } from './js/functions/smoothScrollTo';

import { activateSiemaSlider } from './js/packages/siema';

import { activateMasthead } from './js/handlers/mastheadHandler';

activateRealVhHeight();
activateSmoothScroll();

activateSiemaSlider();

activateMasthead();