// Builds the contact address in the browser, so basic bots scanning the page's code miss it.
// Email links do nothing on devices with no email app, so Gmail and Copy are offered too.
document.querySelectorAll(".contact").forEach((link) => {
  const address = [link.dataset.user, link.dataset.domain].join("@");
  link.href = "mailto:" + address;
  link.textContent = address;

  const gmail = document.createElement("a");
  gmail.className = "contact-action";
  gmail.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(address);
  gmail.target = "_blank";
  gmail.rel = "noopener";
  gmail.textContent = "Open in Gmail";

  const copy = document.createElement("button");
  copy.className = "contact-action";
  copy.type = "button";
  copy.textContent = "Copy";
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address);
      copy.textContent = "Copied!";
    } catch {
      copy.textContent = "Copy failed";
    }
    setTimeout(() => { copy.textContent = "Copy"; }, 2000);
  });

  const actions = document.createElement("span");
  actions.className = "contact-actions";
  actions.append(gmail, copy);
  link.after(actions);
});
