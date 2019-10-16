document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash && window.innerWidth > 767) App.go(App.currentHash());
  window.addEventListener('keydown', function(e){
    if (window.innerWidth < 768) return;
    if (e.which === 39 || e.which === 34 || e.which === 40) {
      e.preventDefault(); App.toggle('next');
    } else if (e.which === 37 || e.which === 33 || e.which === 38){
      e.preventDefault(); App.toggle('prev');
    } else { return; }
  })
  window.addEventListener('hashchange', function(e){
    if (window.innerWidth < 768) return;
    if (+e.newURL.split("#")[1] < App.length()) App.go(+e.newURL.split("#")[1])
  })
});

var App = {
  current: 0,
  currentHash: function() {
    return +window.location.hash.split("#")[1];
  },
  go: function(n) {
    var _pos = n === 0 ? n : -(n * 100);
    document.body.style.transform = "translateX(" + _pos + "vw)"
    App.current=n;
  },
  length: function() {
    return document.querySelectorAll('section').length;
  },
  toggle: function(which) {
    var oldHash = this.currentHash();
    var newHash = which === 'prev' ? Math.max(oldHash - 1, 0) : Math.min(oldHash + 1, this.length() - 1);
    document.body.style.transform = "translateX(-" + (newHash * 100) + "vw)"
    window.location.hash = newHash;
    App.current = newHash;
  }
};
