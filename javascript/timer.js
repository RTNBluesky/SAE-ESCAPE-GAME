function startTimerAndRedirect(timeInMilliseconds, url) {
  setTimeout(function() {
    window.location.href = url;
  }, timeInMilliseconds);
}