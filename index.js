'use strict';
const fs     = require('fs'),
      path   = require('path'),
      crtStyles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

exports.decorateConfig = config => {
  const decoratedConfig = Object.assign({}, config, {
    padding: '24px',
    foregroundColor: '#ff8c00',
    backgroundColor: '#170B00',
    borderColor: 'none',
    cursorColor: 'rgba(255, 140, 0, 0.5)',
    cursorAccentColor: '#ff8c00',
    selectionColor: 'rgba(255, 140, 0, 0.5)',
    colors: {
      black:"#875600",
      blue:"#875600",
      cyan:"#875600",
      green:"#875600",
      magenta:"#875600",
      red:"#875600",
      white:"#875600",
      yellow:"#875600",
      lightBlack:"#875600",
      lightBlue:"#875600",
      lightCyan:"#875600",
      lightGreen:"#875600",
      lightMagenta:"#875600",
      lightRed:"#875600",
      lightWhite:"#875600",
      lightYellow:"#875600"
    },
    css: `
      ${config.css || ''}
      ${crtStyles}
    `
  });

  decoratedConfig.tabIcons = Object.assign({}, decoratedConfig.tabIcons || {}, {
    disableColors: true
  });

  return decoratedConfig;
};

