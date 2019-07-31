'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createManifest = void 0;

var _path = _interopRequireDefault(require('path'));

var _imageSize = _interopRequireDefault(require('image-size'));

var _fsExtra = _interopRequireDefault(require('fs-extra'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const createManifest = async (context, config, queue, options) => {
  const manifestDest = _path.default.join(config.outDir, options.manifestPath);
  const iconsDir = 'icons/';
  const iconsDirPath = _path.default.join(config.outDir, iconsDir); // Copy Favicon from options.icon to assets/static

  _fsExtra.default.copyFileSync(
    _path.default.resolve(context, options.icon),
    iconsDirPath + 'favicon.png'
  );

  const iconsNames = _fsExtra.default.readdirSync(iconsDirPath).map(image => {
    return _path.default.join(iconsDir, image);
  });

  const sizes = [192, 512];
  let icons = iconsNames
    .map(icon => {
      let iconData = (0, _imageSize.default)(
        _path.default.resolve(config.outDir, icon)
      );
      iconData.src = icon;
      return iconData;
    })
    .filter(icon => {
      return sizes.includes(icon.width) && sizes.includes(icon.height);
    });

  await _fsExtra.default.outputFile(
    manifestDest,
    JSON.stringify(
      {
        name: options.title,
        short_name: options.shortName,
        start_url: options.startUrl,
        display: options.display,
        theme_color: options.themeColor,
        background_color: options.backgroundColor,
        icons: icons.map(set => ({
          src: set.src,
          sizes: `${set.width}x${set.height}`,
          type: 'image/' + set.type
        }))
      },
      null,
      2
    )
  );
};

exports.createManifest = createManifest;
