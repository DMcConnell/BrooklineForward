/* BrooklineForward - shared navigation */

(function() {
  var pages = [
    { href: 'budget.html', label: 'Budget' },
    { href: 'documents.html', label: 'Documents' },
    { href: 'about.html', label: 'About' }
  ];

  var current = location.pathname.split('/').pop() || 'index.html';

  // Nav
  var nav = document.getElementById('bf-nav');
  if (nav) {
    var links = pages.map(function(p) {
      var cls = p.href === current ? ' class="active"' : '';
      return '<a href="' + p.href + '"' + cls + '>' + p.label + '</a>';
    }).join('');

    nav.innerHTML =
      '<nav class="site-nav"><div class="site-nav-inner">' +
        '<a href="index.html" class="site-nav-brand">BrooklineForward</a>' +
        '<div class="site-nav-links">' + links + '</div>' +
      '</div></nav>';
  }

  // Footer
  var footer = document.getElementById('bf-footer');
  if (footer) {
    footer.innerHTML =
      '<footer class="site-footer">' +
        'BrooklineForward is an independent project by Brookline residents. ' +
        'All data comes from publicly available Town of Brookline sources.<br>' +
        '<a href="https://github.com/dmcconnell/BrooklineForward" target="_blank" rel="noopener">View source on GitHub</a>' +
      '</footer>';
  }
})();
