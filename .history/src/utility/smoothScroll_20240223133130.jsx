export const smoothScroll = (targateId) => {
  const idToView = document.getElementById(targateId);
  if (idToView) {
    idToView.scrollIntoView({ behavior: "smooth" });
  }
};
