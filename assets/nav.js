/* BrooklineForward — shared navigation injector
   Add <div id="bf-nav"></div> at top of <body> to inject nav.
   Add <div id="bf-footer"></div> before </body> to inject footer. */

(function() {
  const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-brand"><span>B</span>rooklineForward</a>
  <ul class="nav-links">
    <li><a href="understanding.html">The Challenge</a></li>
    <li><a href="proposal.html">The Proposal</a></li>
    <li><a href="research.html">Research</a></li>
    <li><a href="budget.html">Budget Explorer</a></li>
<li><a href="https://github.com/dmcconnell/BrooklineForward" target="_blank" rel="noopener">GitHub ↗</a></li>
  </ul>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">BrooklineForward</div>
    <p>
      An independent citizen research project. Not affiliated with the Town of Brookline,
      any political campaign, or any advocacy organization.<br />
      All research published openly at
      <a href="https://github.com/dmcconnell/BrooklineForward" target="_blank">github.com/dmcconnell/BrooklineForward</a>.
      Questions and contributions welcome.<br />
      Started March 2026.
    </p>
  </div>
</footer>`;

  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.includes('#')) {
        if (href === path) a.classList.add('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      inject('bf-nav', NAV_HTML);
      inject('bf-footer', FOOTER_HTML);
      setActiveNav();
    });
  } else {
    inject('bf-nav', NAV_HTML);
    inject('bf-footer', FOOTER_HTML);
    setActiveNav();
  }
})();
