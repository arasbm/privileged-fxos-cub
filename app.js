define(function() {

if (document.readyState == 'complete') {
  init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

function init() {
  console.log('app initialized');
}

});
