const path = require('path');

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));
    const name = path.parse(filename).name;
    const pascalCaseFilename =
      name[0].toUpperCase() + name.slice(1).toLowerCase().replaceAll('-', '');
    const componentName = `Svg${pascalCaseFilename}`;
    return {
      code: `
        const React = require('react');
        module.exports = {
          __esModule: true,
          default: ${assetFilename},
          ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
            return {
              $$typeof: Symbol.for('react.element'),
              type: 'svg',
              ref: ref,
              key: null,
              props: {
                ...props,
                children: ${assetFilename}
              }
            };
          }),
        };
      `
    };
  }
};
