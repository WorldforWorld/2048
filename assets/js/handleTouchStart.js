export function handleTouchStart(evt, xDown, yDown) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  return [xDown, yDown];
}
function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}
