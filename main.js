/* =============================================================================
   GRUP PRAGMA — comportament (vanilla JS, script clàssic, patró IIFE)
   Sense dependències. Tot el contingut crític ja és a l'HTML;
   aquí només s'enriqueix i s'hi afegeix moviment.
   ============================================================================= */
(function () {
  "use strict";

  var D = window.__PRAGMA__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  function escHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function safe(fn, name) { try { fn(); } catch (e) { if (window.console) console.warn("[" + name + "]", e); } }

  /* -------------------------------------------------------------------------
     MOUNTS — dibuixen des de window.__PRAGMA__ dins zones [data-managed]
     ------------------------------------------------------------------------- */
  function clearManaged(el) {
    if (!el) return null;
    if (el.getAttribute("data-managed") === "done") return null;
    el.innerHTML = "";
    el.setAttribute("data-managed", "done");
    return el;
  }

  function mountServices() {
    if (!D.services) return;
    ["institut", "clinic"].forEach(function (branch) {
      var wrap = clearManaged($('[data-managed="services-' + branch + '"]'));
      if (!wrap) return;
      var list = D.services[branch] || [];
      wrap.innerHTML = list.map(function (s, i) {
        var featClass = s.feature ? " service-row--feature" : "";
        var idx = ("0" + (i + 1)).slice(-2);
        return '' +
          '<article class="service-row' + featClass + '" data-reveal>' +
            '<span class="service-idx">' + idx + '</span>' +
            '<h4>' + escHTML(s.name) + '</h4>' +
            '<p>' + escHTML(s.desc) + '</p>' +
            '<a class="service-link" href="serveis/' + escHTML(s.slug) + '.html">' +
              'Veure el servei <span class="btn-arrow" aria-hidden="true">&rarr;</span>' +
            '</a>' +
          '</article>';
      }).join("");
    });
  }

  function mountUad() {
    var wrap = clearManaged($('[data-managed="uad"]'));
    if (!wrap || !D.uad) return;
    wrap.innerHTML = D.uad.map(function (step) {
      return '' +
        '<article class="uad-step" data-reveal>' +
          '<span class="step-num">' + escHTML(step.n) + '</span>' +
          '<div class="step-body">' +
            '<h3>' + escHTML(step.title) + '</h3>' +
            '<p>' + escHTML(step.body) + '</p>' +
          '</div>' +
        '</article>';
    }).join("");
  }

  function mountMethod() {
    var wrap = clearManaged($('[data-managed="method"]'));
    if (!wrap || !D.method) return;
    wrap.innerHTML = D.method.map(function (m, i) {
      return '' +
        '<div class="method-item" data-reveal data-reveal-delay="' + ((i % 4) + 1) + '">' +
          '<span class="m-num">' + ("0" + (i + 1)).slice(-2) + '</span>' +
          '<h3>' + escHTML(m.title) + '</h3>' +
          '<p>' + escHTML(m.body) + '</p>' +
        '</div>';
    }).join("");
  }

  function mountTeam() {
    var wrap = clearManaged($('[data-managed="team"]'));
    if (!wrap || !D.team) return;
    var list = D.team.slice();
    var lim = parseInt(wrap.getAttribute("data-team-limit"), 10);
    if (lim > 0) list = list.slice(0, lim);
    var base = (wrap.getAttribute("data-team-base") || "") + "assets/img/";
    wrap.innerHTML = list.map(function (p) {
      var meta = [p.col, p.areas].filter(Boolean).join(" · ");
      var media = p.photo
        ? '<img class="media media--portrait" src="' + escHTML(base + p.photo) + '" alt="Retrat de ' + escHTML(p.name) + ', ' + escHTML(p.role) + '" width="210" height="263" loading="lazy" decoding="async">'
        : '<span class="ph ph--portrait" role="img" aria-label="Fotografia pendent de ' + escHTML(p.name) + '" data-label="Foto pendent"><span class="ph-mono" aria-hidden="true">P</span></span>';
      return '' +
        '<article class="team-card" data-reveal>' +
          media +
          '<div>' +
            '<p class="t-name">' + escHTML(p.name) + '</p>' +
            '<p class="t-role">' + escHTML(p.role) + '</p>' +
            (meta ? '<p class="t-meta">' + escHTML(meta) + '</p>' : '') +
            (p.desc ? '<p class="t-desc">' + escHTML(p.desc) + '</p>' : '') +
            '<p class="t-branch">Pragma ' + escHTML(p.branch) + '</p>' +
          '</div>' +
        '</article>';
    }).join("");
  }

  function mountFigures() {
    var wrap = clearManaged($('[data-managed="figures"]'));
    if (!wrap || !D.figures) return;
    wrap.innerHTML = D.figures.map(function (f) {
      var isNum = /[0-9]/.test(f.num) && f.num.indexOf("PENDENT") === -1;
      var numHTML = isNum
        ? '<span class="fig-num" data-count="' + escHTML(f.num) + '">' + escHTML(f.num) + '</span>'
        : '<span class="fig-num"><em>' + escHTML(f.num) + '</em></span>';
      return '' +
        '<div class="exp-figure" data-reveal>' +
          numHTML +
          '<p class="fig-label">' + escHTML(f.label) + '</p>' +
        '</div>';
    }).join("");
  }

  function mountTestimonials() {
    var wrap = clearManaged($('[data-managed="testimonials"]'));
    if (!wrap || !D.testimonials) return;
    wrap.innerHTML = D.testimonials.map(function (t) {
      return '' +
        '<figure class="quote-card" data-reveal>' +
          '<span class="q-mark" aria-hidden="true">“</span>' +
          '<blockquote>' + escHTML(t.quote) + '</blockquote>' +
          '<figcaption class="q-author">' + escHTML(t.author) + '</figcaption>' +
        '</figure>';
    }).join("");
  }

  function mountOrientOptions() {
    var wrap = clearManaged($('[data-managed="orient-options"]'));
    if (!wrap || !D.orient) return;
    wrap.innerHTML = (D.orient.options || []).map(function (o) {
      return '' +
        '<button type="button" class="orient-option" data-target="' + escHTML(o.target) + '" aria-pressed="false">' +
          '<span class="tick" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>' +
          '</span>' +
          '<span>' + escHTML(o.label) + '</span>' +
        '</button>';
    }).join("");
  }

  function mountContactBits() {
    var c = D.contact || {};
    // Accessos ràpids
    var quick = clearManaged($('[data-managed="contact-quick"]'));
    if (quick) {
      var rows = [];
      var telHref = c.phoneHref || (c.phone && c.phone.indexOf("PENDENT") === -1 ? "tel:" + c.phone.replace(/\s/g, "") : "");
      rows.push(linkRow(telHref, iconPhone(), "Trucar", c.phone || "[PENDENT]"));
      rows.push(linkRow(c.email && c.email.indexOf("PENDENT") === -1 ? "mailto:" + c.email : "", iconMail(), "Escriure", c.email || "[PENDENT]"));
      if (c.whatsapp) rows.push(linkRow(c.whatsapp, iconChat(), "WhatsApp", "Obrir conversa"));
      var firstCenter = (D.centers && D.centers[0]) || {};
      rows.push(linkRow(firstCenter.mapUrl || "", iconPin(), "Com arribar", firstCenter.address || (D.brand ? D.brand.place : "Molins de Rei")));
      if (c.hours) {
        rows.push('<div class="contact-quick-row">' + iconClock() + '<span><strong>Horari</strong><br>' + escHTML(c.hours) + '</span></div>');
      }
      quick.innerHTML = rows.join("");
    }
    // Ubicacions
    var locs = clearManaged($('[data-managed="contact-locations"]'));
    if (locs && D.centers) {
      locs.innerHTML = D.centers.map(function (ce) {
        return '' +
          '<div class="location">' +
            '<span class="loc-branch">' + escHTML(ce.branch) + '</span>' +
            '<h3>' + escHTML(ce.name) + '</h3>' +
            '<p>' + escHTML(ce.address) + '</p>' +
            '<p>Horari: ' + escHTML(ce.hours) + '</p>' +
          '</div>';
      }).join("");
    }
  }

  function linkRow(href, icon, label, sub) {
    var tag = href ? 'a href="' + escHTML(href) + '"' : 'a href="contacte.html" aria-disabled="true"';
    return '<' + tag + '>' + icon + '<span><strong>' + escHTML(label) + '</strong><br>' + escHTML(sub) + '</span></a>';
  }
  function iconPhone() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.2.4 2.4.7 3.5a2 2 0 0 1-.5 2L8.1 10a16 16 0 0 0 6 6l.8-1.2a2 2 0 0 1 2-.5c1.1.3 2.3.6 3.5.7a2 2 0 0 1 1.7 2Z"/></svg>'; }
  function iconMail() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'; }
  function iconChat() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>'; }
  function iconPin() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'; }
  function iconClock() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'; }

  function mountFooterBits() {
    var social = $('[data-managed="footer-social"]');
    if (social && social.getAttribute("data-managed") !== "done" && D.social) {
      social.setAttribute("data-managed", "done");
      social.innerHTML = D.social.map(function (s) {
        var href = s.href || "#";
        var pend = s.href ? "" : ' aria-disabled="true" title="Enllaç pendent"';
        return '<a href="' + escHTML(href) + '"' + pend + ' aria-label="' + escHTML(s.name) + '">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg></a>';
      }).join("");
    }
    $$('[data-brand-years]').forEach(function (el) { if (D.brand) el.textContent = D.brand.yearsLabel; });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* -------------------------------------------------------------------------
     INITS
     ------------------------------------------------------------------------- */
  function initSplash() {
    var splash = $("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 400);
    else window.addEventListener("load", function () { setTimeout(hide, 300); });
    setTimeout(hide, 3500);
  }

  function initHeader() {
    var header = $("[data-header]");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initNav() {
    var toggle = $("[data-nav-toggle]");
    var drawer = $("[data-nav-drawer]");
    if (!toggle || !drawer) return;
    var open = function () {
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      drawer.removeAttribute("inert");
    };
    var close = function () {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function () {
      if (document.body.classList.contains("nav-open")) close(); else open();
    });
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) close();
    });
  }

  function initReveals() {
    var els = $$("[data-reveal]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) || reduced) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el) { io.observe(el); });
    // Xarxa de seguretat
    setTimeout(function () {
      $$("[data-reveal]:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.2) el.classList.add("is-visible");
      });
    }, 6000);
  }

  function initTimeline() {
    var steps = $$(".uad-step");
    if (!steps.length || !("IntersectionObserver" in window)) {
      steps.forEach(function (s) { s.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.3 });
    steps.forEach(function (s) { io.observe(s); });
  }

  function initParallax() {
    if (reduced) return;
    var els = $$("[data-parallax]");
    if (!els.length) return;
    var ticking = false;
    var apply = function () {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.08;
        var rect = el.getBoundingClientRect();
        var mid = rect.top + rect.height / 2;
        var offset = (mid - vh / 2) / vh;
        var shift = Math.max(-36, Math.min(36, -offset * speed * 100));
        el.style.setProperty("--py", shift.toFixed(1) + "px");
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });
    apply();
  }

  function initCountUp() {
    var nums = $$("[data-count]");
    if (!nums.length) return;
    if (reduced || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target;
        var raw = el.getAttribute("data-count");
        var prefix = /^[^\d]*/.exec(raw)[0] || "";
        var target = parseInt(raw.replace(/[^\d]/g, ""), 10);
        if (!target) return;
        var start = null;
        var dur = 1100;
        var tick = function (t) {
          if (start === null) start = t;
          var p = Math.min(1, (t - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = raw;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  function initOrientador() {
    var root = $("[data-orient]");
    if (!root) return;
    var result = $("[data-orient-result]", root);
    var btn = $("[data-orient-cta]", root);
    var targets = (D.orient && D.orient.targets) || {};
    var chosen = null;

    root.addEventListener("click", function (e) {
      var opt = e.target.closest(".orient-option");
      if (!opt) return;
      $$(".orient-option", root).forEach(function (o) {
        if (o !== opt) o.setAttribute("aria-pressed", "false");
      });
      var now = opt.getAttribute("aria-pressed") === "true";
      opt.setAttribute("aria-pressed", now ? "false" : "true");
      chosen = now ? null : opt.getAttribute("data-target");
      render();
    });

    if (btn) btn.addEventListener("click", function () {
      if (chosen && targets[chosen]) window.location.href = targets[chosen].href;
      else if (result) result.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    });

    function render() {
      if (!result) return;
      if (!chosen || !targets[chosen]) { result.hidden = true; return; }
      var t = targets[chosen];
      result.hidden = false;
      result.innerHTML = '' +
        '<span class="result-label">Et proposem</span>' +
        '<p class="result-target">' + t.label + '</p>' +
        '<p class="result-body">' + escHTML(t.body) + '</p>' +
        '<a class="link-underline" href="' + escHTML(t.href) + '">Anar-hi <span class="btn-arrow" aria-hidden="true">&rarr;</span></a>';
    }
  }

  function initContactForm() {
    var form = $("[data-contact-form]");
    if (!form) return;
    var status = $("[data-form-status]", form) || $("[data-form-status]");
    var endpoint = (D.contact && D.contact.formEndpoint) || "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      var done = function (ok) {
        if (submitBtn) submitBtn.disabled = false;
        if (!status) return;
        status.hidden = false;
        status.textContent = ok
          ? "Gràcies. Hem rebut la teva consulta i et respondrem tan aviat com puguem."
          : "Ara mateix no podem enviar el formulari. Prova de trucar-nos o escriu-nos per correu.";
        status.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
        if (ok) form.reset();
      };
      if (!endpoint) { setTimeout(function () { done(true); }, 500); return; }
      fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      }).then(function (r) { done(r.ok); }).catch(function () { done(false); });
    });
  }

  function initReadProgress() {
    var bar = $("[data-read-progress]");
    if (!bar) return;
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.setProperty("--p", max > 0 ? (h.scrollTop / max).toFixed(4) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* -------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------- */
  function boot() {
    document.documentElement.classList.remove("no-js");

    safe(mountServices, "mountServices");
    safe(mountUad, "mountUad");
    safe(mountMethod, "mountMethod");
    safe(mountTeam, "mountTeam");
    safe(mountFigures, "mountFigures");
    safe(mountTestimonials, "mountTestimonials");
    safe(mountOrientOptions, "mountOrientOptions");
    safe(mountContactBits, "mountContactBits");
    safe(mountFooterBits, "mountFooterBits");

    safe(initSplash, "initSplash");
    safe(initHeader, "initHeader");
    safe(initNav, "initNav");
    safe(initReveals, "initReveals");
    safe(initTimeline, "initTimeline");
    safe(initParallax, "initParallax");
    safe(initCountUp, "initCountUp");
    safe(initOrientador, "initOrientador");
    safe(initContactForm, "initContactForm");
    safe(initReadProgress, "initReadProgress");
    safe(initAnchors, "initAnchors");

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
