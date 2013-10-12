require.config({
  baseUrl: 'scripts',
  shim: {
    'helper/brick': {
      exports: 'brick'
    }
  }
});

requirejs(['app']);
