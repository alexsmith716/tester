# webpack production super basic


## Overview:

Intended purpose is just to demonstrate [CSS Modules](https://github.com/css-modules/css-modules).

Had another try at various hacks for getting `Font Awesome` to work through `:global` switch but still no luck!

Seems to boil down to to this (which does not work):

`@font-face {
   {
    font-family: 'FontAwesome';
    src: url(./fontawesome-webfont.eot);
    src: url(./fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"), url(./fontawesome-webfont.woff2) format("woff2"), url(./fontawesome-webfont.woff) format("woff"), url(./fontawesome-webfont.ttf) format("truetype"), url(./fontawesome-webfont.svg#fontawesomeregular) format("svg");
    font-weight: normal;
    font-style: normal; } }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; }
  .fa-fw {
    width: 1.28571em;
    text-align: center; }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0; }
  .sr-only-focusable:active, .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto; }`


This is what works:

`@font-face {
    font-family: FontAwesome;
    src: url(/assets/674f50d287a8c48dc19ba404d20fe713.eot);
    src: url(/assets/674f50d287a8c48dc19ba404d20fe713.eot) format("embedded-opentype"), url(/assets/af7ae505a9eed503f8b8e6982036873e.woff2) format("woff2"), url(/assets/fee66e712a8a08eef5805a46892932ad.woff) format("woff"), url(/assets/b06871f281fee6b241d60582ae9369b9.ttf) format("truetype"), url(/assets/912ec66d7572ff821749319396470bde.svg) format("svg");
    font-weight: 400;
    font-style: normal
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.fa-fw {
    width: 1.28571em;
    text-align: center
}
.sr-only-focusable:active, .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto
}`

