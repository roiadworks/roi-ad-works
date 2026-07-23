document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Optional analytics hooks.
// Replace the console calls with gtag()/dataLayer events after your Google Ads / GA4 / GTM setup.
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener("click", () => console.log("conversion_event: phone_click"));
});
document.getElementById("leadForm")?.addEventListener("submit", () => {
  console.log("conversion_event: lead_form_submit");
});