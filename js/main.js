/**
 * TechCentrix - Main JavaScript
 * Handles: mobile nav toggle, contact form validation
 */

(function () {
  "use strict";

  /* ========== Mobile Navigation Toggle ========== */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close nav when clicking a link (for mobile)
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close nav on escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ========== Contact Form Validation ========== */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    const nameInput = contactForm.querySelector('[name="name"]');
    const emailInput = contactForm.querySelector('[name="email"]');
    const messageInput = contactForm.querySelector('[name="message"]');
    const successMessage = contactForm.querySelector(".form-success");

    function showError(input, message) {
      const group = input.closest(".form-group");
      let errorEl = group.querySelector(".error");
      if (!errorEl) {
        errorEl = document.createElement("span");
        errorEl.className = "error";
        group.appendChild(errorEl);
      }
      errorEl.textContent = message;
      input.classList.add("invalid");
    }

    function clearError(input) {
      const group = input.closest(".form-group");
      const errorEl = group.querySelector(".error");
      if (errorEl) errorEl.remove();
      input.classList.remove("invalid");
    }

    function validateName(value) {
      value = (value || "").trim();
      if (value.length < 2) return "Name must be at least 2 characters.";
      return null;
    }

    function validateEmail(value) {
      value = (value || "").trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) return "Email is required.";
      if (!re.test(value)) return "Please enter a valid email address.";
      return null;
    }

    function validateMessage(value) {
      value = (value || "").trim();
      if (value.length < 10) return "Message must be at least 10 characters.";
      return null;
    }

    [nameInput, emailInput, messageInput].forEach(function (input) {
      if (input) {
        input.addEventListener("input", function () {
          clearError(input);
        });
        input.addEventListener("blur", function () {
          clearError(input);
        });
      }
    });

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let hasError = false;

      if (nameInput) {
        const err = validateName(nameInput.value);
        if (err) {
          showError(nameInput, err);
          hasError = true;
        } else clearError(nameInput);
      }

      if (emailInput) {
        const err = validateEmail(emailInput.value);
        if (err) {
          showError(emailInput, err);
          hasError = true;
        } else clearError(emailInput);
      }

      if (messageInput) {
        const err = validateMessage(messageInput.value);
        if (err) {
          showError(messageInput, err);
          hasError = true;
        } else clearError(messageInput);
      }

      if (hasError) return;

      // API-ready: replace with fetch() to your backend
      // Example: fetch("/api/contact", { method: "POST", body: new FormData(contactForm) })
      if (successMessage) {
        successMessage.classList.add("is-visible");
        successMessage.textContent = "Thank you! Your message has been sent. We'll get back to you soon.";
      }
      contactForm.reset();
    });
  }
})();
