"use strict";

var _path = _interopRequireDefault(require("path"));

var _manifest = require("./files/manifest.js");

var _serviceWorker = require("./files/service-worker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = message => {
  process.stdout.write(message);
};

function Plugin(api, options) {
  api.afterBuild(async ({
    context,
    config,
    queue
  }) => {
    log('Scaffolding PWA assets\n');
    log(` - ${options.manifestPath}..`);
    await (0, _manifest.createManifest)(context, config, queue, options);
    log('..done\n');
    log(` - ${options.serviceWorkerPath}..`);
    await (0, _serviceWorker.createServiceWorker)(context, config, queue, options);
    log('..done\n');
  });
  api.setClientOptions({
    title: options.title,
    serviceWorkerPath: _path.default.join('/', options.serviceWorkerPath),
    manifestPath: _path.default.join('/', options.manifestPath),
    statusBarStyle: options.statusBarStyle,
    themeColor: options.themeColor
  });
}

Plugin.defaultOptions = () => ({
  title: 'Gridsome',
  startUrl: '/',
  display: 'standalone',
  statusBarStyle: 'default',
  manifestPath: 'manifest.json',
  serviceWorkerPath: 'service-worker.js',
  shortName: 'Gridsome',
  themeColor: '#666600',
  backgroundColor: '#ffffff',
  icon: ''
});

module.exports = Plugin;