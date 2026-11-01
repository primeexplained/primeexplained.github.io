// Builds the contact address in the browser, so basic bots scanning the page's code miss it.
document.querySelectorAll(".contact").forEach((link) => {
  const address = [link.dataset.user, link.dataset.domain].join("@");
  link.href = "mailto:" + address;
  link.textContent = address;
});
