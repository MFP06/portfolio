document.addEventListener('DOMContentLoaded', function () {
  var currentYear = new Date().getFullYear();

  document.querySelectorAll('[data-current-year]').forEach(function (element) {
    element.textContent = currentYear;
  });

  var filterButtons = document.querySelectorAll('[data-project-filter]');
  var projectCards = document.querySelectorAll('[data-project-year]');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-project-filter');

      filterButtons.forEach(function (item) {
        item.classList.toggle('active', item === button);
      });

      projectCards.forEach(function (card) {
        var year = card.getAttribute('data-project-year');
        card.classList.toggle('is-hidden', filter !== 'all' && year !== filter);
      });
    });
  });
});
