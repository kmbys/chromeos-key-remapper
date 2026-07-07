// Manifest V3 allows only a single background service worker, so this
// entry point pulls in the actual scripts with importScripts.
//
// manifest.json also keeps the list under background.scripts: Chrome
// ignores that key in MV3 (it only logs a warning), and the build
// tooling (wscript) reads it to know which scripts to stack when
// combining this remapper with fallback IMEs.
importScripts(
  'preamble.js',
  'engine.js',
  'keymap.js',
  'main.js'
);
