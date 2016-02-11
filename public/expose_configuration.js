import uiModules from 'ui/modules'

/**
 * Kibana Hack
 *
 * expose the config service on the window so that it can be tweaked from the console.
 */
uiModules
.get('kibana')
.run(function (config) {
  window.KibanaConfig = config;
});
