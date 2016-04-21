/**
 * Toolkit JavaScript
 */

'use strict';

// For Node Modules
// Because no path was specified, Module will be included from "node_modules"
//var $ = require('jquery');

// For Bower Components
// Because Bower does not force a module structure, you have use a more specific path.

// we're now requiring it from the bower/vendor directory
var $ = require('../../vendor/jquery/dist/jquery.min.js');
window.jQuery = $;

// Loading foundation from node
var foundation = require('foundation-sites/js/foundation.core.js');
var foundationMediaQuery = require('foundation-sites/js/foundation.util.mediaQuery.js');
var foundationKeyboard = require('foundation-sites/js/foundation.util.keyboard.js');
var foundationBox = require('foundation-sites/js/foundation.util.box.js');
var foundationTriggers = require('foundation-sites/js/foundation.util.triggers.js');
var foundationDropdown = require('foundation-sites/js/foundation.dropdown.js');
var foundationAccordion = require('foundation-sites/js/foundation.accordion.js');
var foundationReveal = require('foundation-sites/js/foundation.reveal.js');
var foundationAbide = require('foundation-sites/js/foundation.abide.js');
var foundationTooltip = require('foundation-sites/js/foundation.tooltip.js');

//require('smoothstate/jquery.smoothState.min.js');
// var smoothState = require('./jquery.smoothState.min.js');

window.foundation = foundation;
// console.log($);
// $('h1').fadeOut(2000);

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo(); 

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation(
    {
      equalizer : {
        // Specify if Equalizer should make elements equal height once they become stacked.
        equalize_on_stack: true
      }
  });

  $("body").on("click", ".toggler", function() {
    $(".toggled").toggle(); /*shows or hides #box*/
  });

});
