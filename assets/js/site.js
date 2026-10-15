/* Site interactions: theme, navigation, scroll reveal, counters, publication filters, BibTeX, repo stats. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
    });
  });

  /* ---------- Header: scrolled state + mobile menu ---------- */

  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = header.querySelector("[data-nav-toggle]");
    if (toggle) {
      var setOpen = function (open) {
        header.classList.toggle("nav-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };
      toggle.addEventListener("click", function () {
        setOpen(!header.classList.contains("nav-open"));
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
      });
    }
  }

  /* ---------- Reveal on scroll ---------- */

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el, i) {
      // Stagger siblings slightly so groups arrive in sequence.
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Publication filters ---------- */

  var pubs = document.querySelector("[data-pubs]");
  var filters = document.querySelectorAll("[data-filter]");
  if (pubs && filters.length) {
    var items = pubs.querySelectorAll("ol.bibliography > li");

    filters.forEach(function (btn) {
      var kind = btn.getAttribute("data-filter");
      var n = kind === "all" ? items.length : pubs.querySelectorAll('.pub[data-kind="' + kind + '"]').length;
      var badge = document.createElement("span");
      badge.className = "count";
      badge.textContent = n;
      btn.appendChild(badge);
      if (n === 0 && kind !== "all") btn.hidden = true;

      btn.addEventListener("click", function () {
        filters.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        items.forEach(function (li) {
          var pub = li.querySelector(".pub");
          li.hidden = !(kind === "all" || (pub && pub.getAttribute("data-kind") === kind));
        });
        // Hide year headings whose lists became empty.
        pubs.querySelectorAll("h2.bibliography").forEach(function (h) {
          var list = h.nextElementSibling;
          var visible = list && list.querySelector("li:not([hidden])");
          h.hidden = !visible;
          if (list) list.hidden = !visible;
        });
      });
    });
  }

  /* ---------- BibTeX toggle + copy ---------- */

  document.addEventListener("click", function (e) {
    var toggle = e.target.closest("[data-bibtex-toggle]");
    if (toggle) {
      var box = document.getElementById(toggle.getAttribute("aria-controls"));
      if (box) {
        var open = box.hidden;
        box.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
      }
      return;
    }
    var copy = e.target.closest("[data-bibtex-copy]");
    if (copy) {
      var code = copy.parentNode.querySelector("code");
      var label = copy.querySelector("span");
      var done = function () {
        label.textContent = "Copied";
        setTimeout(function () {
          label.textContent = "Copy";
        }, 1600);
      };
      if (navigator.clipboard && code) {
        navigator.clipboard.writeText(code.textContent).then(done, function () {});
      }
    }
  });

  /* ---------- CV: highlight the section in view ---------- */

  var tocLinks = document.querySelectorAll(".cv-toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });
    var tio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          tocLinks.forEach(function (a) {
            a.classList.remove("is-active");
          });
          var link = byId[entry.target.id];
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    document.querySelectorAll(".cv-section[id]").forEach(function (s) {
      tio.observe(s);
    });
  }

  /* ---------- Code page: live stars and last update from GitHub ---------- */

  var repoCards = document.querySelectorAll("[data-repo]");
  if (repoCards.length && window.fetch) {
    var owner = repoCards[0].getAttribute("data-repo").split("/")[0];
    fetch("https://api.github.com/users/" + owner + "/repos?per_page=100")
      .then(function (r) {
        return r.ok ? r.json() : [];
      })
      .then(function (repos) {
        var map = {};
        repos.forEach(function (r) {
          map[r.full_name.toLowerCase()] = r;
        });
        repoCards.forEach(function (card) {
          var r = map[card.getAttribute("data-repo").toLowerCase()];
          if (!r) return;
          var stars = card.querySelector("[data-stars]");
          if (stars && r.stargazers_count > 0) {
            stars.querySelector("span").textContent = r.stargazers_count;
            stars.hidden = false;
          }
          var updated = card.querySelector("[data-updated]");
          if (updated && r.pushed_at) {
            var d = new Date(r.pushed_at);
            updated.textContent = "Updated " + d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
            updated.hidden = false;
          }
        });
      })
      .catch(function () {});
  }
})();
