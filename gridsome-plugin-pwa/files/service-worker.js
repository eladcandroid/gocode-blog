"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createServiceWorker = void 0;

var _path = _interopRequireDefault(require("path"));

var _workboxBuild = require("workbox-build");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appendToServiceWorker = async options => {
  const skipWaitingPath = _path.default.resolve(__dirname, '../utils/skip-wating.js');

  const skipWaiting = await _fsExtra.default.readFile(skipWaitingPath, 'utf8');
  await _fsExtra.default.writeFile(options.serviceWorkerPath, `\n${skipWaiting}`, {
    flag: 'a'
  });
};

const createServiceWorker = async (context, config, queue, options) => {
  const serviceWorkerPath = _path.default.join(config.outDir, options.serviceWorkerPath);

  await (0, _workboxBuild.generateSW)({
    swDest: serviceWorkerPath,
    globDirectory: config.outDir,
    globPatterns: ['**\/*.{js,json,css,html,png,jpg,jpeg,svg}'],
    globIgnores: [options.serviceWorkerPath],
    templatedUrls: queue.reduce((urls, page) => {
      const url = page.path.substring(1);

      const file = _path.default.relative(config.outDir, page.htmlOutput);

      if (url) urls[url] = file;
      return urls;
    }, {})
  });
  await appendToServiceWorker(options);
};

exports.createServiceWorker = createServiceWorker;