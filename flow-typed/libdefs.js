// @flow
declare var module: Object;

declare module 'react-universal-component' {
  declare module.exports: any;
}

declare module 'buffer' {
  // The export of this module is an object with a "Buffer" Object
  declare module.exports: {
    Buffer: Object,
  };
}
