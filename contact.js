// Builds the contact address in the browser, so basic bots scanning the page's code miss it.
// Email links do nothing on devices with no email app, so the button opens Gmail in the browser.
document.querySelectorAll(".contact").forEach((text) => {
  const address = [text.dataset.user, text.dataset.domain].join("@");
  text.textContent = address;

  const email = document.createElement("a");
  email.className = "contact-action main";
  email.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(address);
  email.target = "_blank";
  email.rel = "noopener";
  email.textContent = "Email us";

  const actions = document.createElement("span");
  actions.className = "contact-actions";
  actions.append(email);
  text.parentElement.after(actions);
});
