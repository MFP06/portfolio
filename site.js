document.addEventListener('DOMContentLoaded', function () {
  var currentYear = new Date().getFullYear();

  document.querySelectorAll('[data-current-year]').forEach(function (element) {
    element.textContent = currentYear;
  });

  var filterPanel = document.querySelector('.project-filter-panel');
  var filterButtons = document.querySelectorAll('[data-project-filter]');
  var projectCards = document.querySelectorAll('[data-project-year]');

  function applyProjectFilter(filter) {
    filterButtons.forEach(function (button) {
      var isActive = button.getAttribute('data-project-filter') === filter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    projectCards.forEach(function (card) {
      var year = card.getAttribute('data-project-year');
      var isHidden = filter !== 'all' && year !== filter;

      card.classList.toggle('is-hidden', isHidden);
      card.hidden = isHidden;
    });
  }

  if (filterPanel && filterButtons.length && projectCards.length) {
    filterPanel.addEventListener('click', function (event) {
      var button = event.target.closest('[data-project-filter]');

      if (!button) {
        return;
      }

      applyProjectFilter(button.getAttribute('data-project-filter'));
    });

    applyProjectFilter('all');
  }

  function setupTypedFilter(buttonAttribute, itemAttribute) {
    var buttons = document.querySelectorAll('[' + buttonAttribute + ']');
    var items = document.querySelectorAll('[' + itemAttribute + ']');

    if (!buttons.length || !items.length) {
      return;
    }

    function applyFilter(filter) {
      buttons.forEach(function (button) {
        var isActive = button.getAttribute(buttonAttribute) === filter;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      items.forEach(function (item) {
        var type = item.getAttribute(itemAttribute);
        var isHidden = filter !== 'all' && type !== filter;
        item.classList.toggle('is-hidden', isHidden);
        item.hidden = isHidden;
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        applyFilter(button.getAttribute(buttonAttribute));
      });
    });

    applyFilter('all');
  }

  setupTypedFilter('data-skill-filter', 'data-skill-type');
  setupTypedFilter('data-attestation-filter', 'data-attestation-type');
});
