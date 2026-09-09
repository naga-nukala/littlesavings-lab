const CACHE_NAME = "savings-lab-v3";
const APP_SHELL = [
  "./", "./index.html", "./index-flip-cards.html", "./manifest.webmanifest",
  "./icon.svg", "./icon-192.svg", "./icon-512.svg", "./pwa.js", "./autodebit-tracker.html", "./bank-fees-tracker.html",
  "./casa-rupay-calculator.html", "./cc-cashback-calculator.html", "./debt-dashboard.html",
  "./dmart-checklist.html", "./emergency-fund-calculator.html", "./financial-life-plan.html",
  "./flat-scorecard.html", "./gift-card-calculator.html", "./house-expenses-cashback-tracker.html",
  "./index-airport-board.html", "./index-cards-rotator.html", "./index-node-cluster.html",
  "./index-style-switcher.html", "./insurance-coverage-checker.html", "./internet-cost-comparator.html",
  "./investment-appreciation-tracker.html", "./medicine-lab-comparator.html", "./micro-investment-tracker.html",
  "./mobile-cost-calculator.html", "./money-framework-dashboard.html", "./net-worth-tracker.html",
  "./ott-rotation-tracker.html", "./perday-cost-calculator.html", "./price-comparator.html",
  "./rent-vs-buy-calculator.html", "./sim-tracker.html", "./tax-regime-comparator.html",
  "./travel-mode-comparator.html", "./vehicle-cost-calculator.html", "./yield-stack.html",
  "./children-corpus-planner.html", "./retirement-corpus-calculator.html",
  "./gold-sgb-vs-jewelry-comparator.html", "./salary-ctc-optimizer.html", "./fuel-cost-per-km.html"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const isDocument = event.request.mode === "navigate" || event.request.destination === "document";

  if (isDocument) {
    event.respondWith(
      fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(event.request).then(cached => cached || caches.match("./index-flip-cards.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index-flip-cards.html")))
  );
});