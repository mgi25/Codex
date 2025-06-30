document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('notifToggle');
  const panel = document.getElementById('notificationPanel');

  if (!toggle || !panel) return;

  function closePanel() {
    panel.classList.remove('show');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && e.target !== toggle) {
      closePanel();
    }
  });
});
