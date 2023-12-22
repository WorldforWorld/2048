export function transforAnimationForMergeElement(selector) {
  selector.style.transform = "scale(1.2)";
  setTimeout(() => {
    selector.style.transform = "scale(1)";
  }, 100);
}
