// Shared site behavior for course pages, included once and referenced by
// every page rather than duplicated inline.

// Exclusive <details name="..."> accordion fallback for browsers that don't
// yet support the native `name` grouping (Chrome/Edge/Safari 17+/Firefox 129+
// already do this natively with zero JS — this only does anything on older
// browsers).
(function () {
  var supportsNativeGrouping = 'name' in HTMLDetailsElement.prototype;
  if (supportsNativeGrouping) return;

  document.querySelectorAll('details[name]').forEach(function (details) {
    details.addEventListener('toggle', function () {
      if (!details.open) return;
      var group = details.getAttribute('name');
      document.querySelectorAll('details[name="' + group + '"]').forEach(function (other) {
        if (other !== details && other.open) other.open = false;
      });
    });
  });
})();
