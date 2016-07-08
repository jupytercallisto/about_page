// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var phosphide = require('phosphide/lib/core/application');

// ES6 Promise polyfill
require('es6-promise').polyfill();

require('scrollsnap-polyfill/dist/scrollsnap-polyfill.bundled');
require('font-awesome/css/font-awesome.min.css');
require('jupyterlab/lib/default-theme/index.css');

var app = new phosphide.Application({
  extensions: [
    require('jupyterlab/lib/about/plugin').aboutExtension,
    require('jupyterlab/lib/console/plugin').consoleExtension,
    require('jupyterlab/lib/editorwidget/plugin').editorHandlerExtension,
    require('jupyterlab/lib/filebrowser/plugin').fileBrowserExtension,
    require('jupyterlab/lib/help/plugin').helpHandlerExtension,
    require('jupyterlab/lib/imagewidget/plugin').imageHandlerExtension,
    require('jupyterlab/lib/landing/plugin').landingExtension,
    require('jupyterlab/lib/main/plugin').mainExtension,
    require('jupyterlab/lib/mainmenu/plugin').mainMenuExtension,
    require('jupyterlab/lib/notebook/plugin').notebookHandlerExtension,
    require('jupyterlab/lib/shortcuts/plugin').shortcutsExtension,
    require('jupyterlab/lib/terminal/plugin').terminalExtension,
    require('jupyterlab/lib/widgets/plugin').widgetManagerExtension,
    require('phosphide/lib/extensions/commandpalette').commandPaletteExtension,
  ],
  providers: [
    require('jupyterlab/lib/clipboard/plugin').clipboardProvider,
    require('jupyterlab/lib/docregistry/plugin').docRegistryProvider,
    require('jupyterlab/lib/notebook/plugin').notebookTrackerProvider,
    require('jupyterlab/lib/mainmenu/plugin').mainMenuProvider,
    require('jupyterlab/lib/rendermime/plugin').renderMimeProvider,
    require('jupyterlab/lib/services/plugin').servicesProvider,
  ]
});

window.onload = function() {
    app.run();
}
