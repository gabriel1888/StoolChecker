# Stool Checker — revised static website

This is a framework-free static website. The original uploaded file was not modified. The revised site is split into `index.html`, `styles.css`, `data.js` and `app.js`.

## Try it locally

Keep all four files in the same folder. Open `index.html` in a browser, or start a local server from this folder:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000/`. To put it online, upload `index.html`, `styles.css`, `data.js` and `app.js` to the same directory on your static host. No server-side application or build step is needed. The test files and this README do not have to be uploaded.

The home page opens by default. You can link directly to `/#checker/stool`, `/#checker/urine`, `/#business` or `/#privacy`. Do not put a user's health selection into a URL. Hash routes preserve the current page on reload and allow the browser's Back/Forward buttons to navigate between views.

## Business enquiries — setup needed

No business contact address was provided. The page therefore offers the existing Tally form as a fallback, which asks for name and email. It does **not** currently collect the enquiry type, organisation or message, and it is the same Tally form as the waitlist. Do not claim that it collects those details without changing the form in Tally.

The detailed business form is included but hidden until you configure a recipient. To enable it, edit the line near the top of `app.js`:

```js
const BUSINESS_EMAIL = 'you@example.com';
```

Replace that example with your real business email address. The visitor's own email application opens with a draft containing the details; the site itself does not send the email, and a configured mail application is required. The visitor must choose to send it. If you need reliable, trackable submissions independent of a visitor's mail app, connect the form to a real form backend or create a dedicated Tally form and test it end to end. No backend is supplied here.

## Tally and privacy

Tally is only loaded into the page when a visitor chooses to load a form; a direct link is also supplied as a fallback. Test the form with your own Tally account before launch, including confirmation messages, data collection and retention settings. The privacy page is a starting point, **not a complete privacy policy**: add the responsible organisation, contact details, purpose and legal basis, retention periods, processor details, and visitor rights as applicable. Check the actual behaviour of your hosting provider and Tally and obtain appropriate privacy/legal review. The site itself does not store or submit checker selections, but that is not a guarantee about hosting or third-party services.

The Amazon recommendation links have been removed.

## Health-content review — required before launch

The rewritten guidance is more cautious and the cited public sources are listed in `HEALTH-SOURCES.md`, but it **has not been reviewed or approved by a clinician**. Have a qualified clinician review every result, red-flag message, audience limitation and local emergency contact before publishing. This tool is educational, not a diagnosis or replacement for medical care. Re-check guidance periodically; some contact details and recommended actions are UK-specific.

## Automated tests

The test suite checks navigation and browser history, all 16 results and resets, keyboard focus, on-demand forms, page overflow at five viewport sizes and serious/critical automated accessibility issues. Tests intercept the external form; they do not submit a real Tally entry. Automated accessibility checks do not replace testing with people or assistive technology.

With Node.js installed, from this folder:

```sh
npm install
npx playwright install chromium
npm test
```

If you already have a Chromium executable, you can instead set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its path before `npm test`. The development dependencies and tests are not required in production.
