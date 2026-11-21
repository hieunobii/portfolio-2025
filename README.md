# Hieudm Portfolio — Neural Atelier

A five-tab portfolio built with native HTML, CSS, JavaScript and WebGL. No build step, frontend framework, animation library or 3D dependency. Google Fonts serves Manrope, Unbounded and Noto Sans JP with system fallbacks.

## Preview and publish

Open `index.html` in a modern browser. Publish this folder to an HTTPS static host. Test external form delivery on the published origin rather than a local file URL.

## Application structure

| File | Responsibility |
| --- | --- |
| `index.html` | Application shell, five semantic tab panels, original biography, services, testimonials, client logos, resume, certificates, all 12 projects, contact form and native dialog. Includes the shared SVG symbol sprite. |
| `main.css` | Design tokens, responsive shell, components, hover lighting, card reveals, scrollbar, fixed mobile navigation, reduced motion and print styles. |
| `main.js` | Hash/history navigation, keyboard tabs, animated counters and progress bars, project filtering and preview, interactive component effects, localized form feedback. |
| `i18n.js` | English, Vietnamese and Japanese copy, accessible labels, placeholders, rich headings, metadata, language persistence and a translation audit. |
| `sphere.js` | Native WebGL shader and a projected 3D Canvas fallback, pointer deformation, click/Enter ripple, resize and visibility lifecycle. |
| `img/` | Original photographs, project images, client marks, testimonials and CV documents. A small optimized avatar replaces the large profile PNG in the sidebar. |

## Design system

Direction: a luminous futuristic workspace with deep navy surfaces, electric blue actions, cyan light and alternating violet accents. Rounded geometric headings are paired with a readable body face.

| Foundation | Value / use |
| --- | --- |
| Canvas | `--bg: #050916` |
| Surface | `--surface: #0a1224` |
| Raised cards | `--raised: #101c33` |
| Primary text | `--text: #f2f6ff` |
| Supporting text | `--muted: #aebed7` |
| Accent | `--accent: #70b6ff` |
| Primary action | `--blue: #3074ff` |
| Secondary light | `--cyan: #78f0ed`, `--violet: #a58cff` |
| Borders | `--line: #293e60` |
| Box radius | Maximum 10 px; action buttons may be pills/circles |
| Body | Manrope, 14–15 px; form fields 16 px on mobile |
| Display | Unbounded; Noto Sans JP for Japanese headings |
| Secondary labels | At least 12 px |
| Weights | Body 400, controls 600–700, display 500 |

Components include tabs, illuminated CV actions with a real download icon, Facebook/Instagram icons and the original custom Zalo vector, primary and text actions, statistic cards, service cards, testimonials, client strip, timeline, progress bars, knowledge tags, certificates, category filters, project previews, input controls, and localized pending/success/error feedback.

Desktop keeps a profile rail. At 800 px and below, the five tabs become a fixed bottom dock with safe-area spacing. The workspace reserves room for the dock, and each panel scrolls independently. A CV action stays visible in the mobile header. On mobile, the 3D artwork follows the headline before the longer introduction so the visual enters the first viewport. Breakpoints: 1600, 1250, 1000, 800, 560 and 360 px, with a short-height desktop adjustment.

Hover effects include a light sweep and small magnetic offset on buttons, a download motion, pointer-position illumination on cards, glowing SVG details, and a rotating project arrow. Every CV entry point has an infinitely orbiting edge light and circuit artwork; reduced motion disables the ambient animation. Scrollbars use a blue/cyan thumb and dark track.

## Realtime sphere and motion

The overview uses a raymarched 3D sphere in a native WebGL fragment shader. It includes a luminous latitude/longitude lattice, highlights, orbital traces, stars and pointer-driven surface deformation. Drag with a pointer or touch to rotate with damped inertia; arrow keys rotate and Home resets orientation. Pointer capture keeps a drag smooth outside the canvas. Clicking or pressing Enter/Space sends a ripple, and a drag does not accidentally trigger a click ripple. There is no image or video backing the effect.

A projected 3D Canvas renderer is used when WebGL is unavailable. Rendering pauses offscreen and when the document is hidden. Pixel density is capped at 1.25 on small screens and 1.6 on larger screens. Reduced motion uses a static frame with discrete interaction updates.

Overview and About statistics animate to the original values in 1.25 seconds. Experience bars start when their containers enter view. Changing panels cancels pending number frames. Reduced-motion preferences show final values immediately. Cards reveal as they enter the panel; focus indicators and keyboard navigation remain available.

## Languages

English is the first-visit default; Vietnamese and Japanese can be selected in the header. The selected language is saved locally when browser storage is available. Browser-language detection does not override the default.

Translations cover every panel, headings, long paragraphs, testimonials, skill/category labels, date descriptions, form labels, placeholders, validation, sending/error/success messages, project preview labels, document title and description metadata. Brand names, technologies, phone/email details and the original CV PDF are retained.

Edit English source content in `index.html` and the corresponding Vietnamese/Japanese entries in `i18n.js`. Rich hero/page headings use separate templates so each language has natural line breaks. Dynamic messages use `PortfolioI18n.t(key, variables)`; changing language does not discard a form draft.

Run `PortfolioI18n.audit()` in the browser console to find untranslated static copy, placeholders and accessible attributes. Proper names and technical labels are explicitly allowlisted. Add new copy to both translations rather than suppressing audit results.

## Contact delivery: owner activation required

The old browser-side SMTP implementation was removed. Its credential was public in the original source; revoke/rotate that credential with the SMTP provider. Removing it from current files does not remove it from Git history.

The replacement posts to FormSubmit for `hieunobii2809@gmail.com`. No mail secret is stored in the client.

1. Publish on HTTPS and submit a test enquiry.
2. Open FormSubmit's activation email in the recipient Gmail inbox (check Spam) and confirm the address.
3. Submit another test from the final domain, confirm actual receipt and check the reply address.

Until activation and real inbox receipt are verified, delivery is not production-verified. A successful HTTP response means service acceptance, not proof of inbox receipt. External service availability and its spam policies apply. Direct email, phone and Zalo remain available.

The form validates required fields, trims text, limits input lengths, uses a honeypot, prevents concurrent submissions, times out after 20 seconds, and preserves the draft on failure. A no-JavaScript notice provides email and CV links; tab navigation requires JavaScript. Use a server endpoint and environment-held secrets if delivery auditing or higher-volume mail becomes necessary.

## Verification

Browser checks covered 90 combinations: all five panels in EN/VI/JA at 320, 390, 768, 1024, 1440 and 1920 px, with no horizontal overflow and correctly fixed mobile navigation. Additional checks covered heading/nav wrapping, language persistence, restored English, localized filters/dialog labels, validation and mocked mail success/failure in every language. No real test email was sent.

The WebGL renderer compiled without GL errors and its rendered output was visually inspected. Pointer/keyboard interaction and the Canvas fallback were checked, including non-empty fallback pixels. Earlier checks sampled intermediate and final counter/progress values and verified reduced-motion behavior.

The existing historical claims, employer dates, testimonials and skill percentages are retained from the source; update them alongside your next CV revision.

## Language picker and project viewer

The language picker is a styled button/listbox control backed by a hidden native select for the localization state. Its list is portaled to the body, positioned within viewport bounds and reanchored on resize. Arrow keys, Home/End, Enter/Space, Escape, Tab and outside-click dismissal are supported. Keyboard focus uses a rounded glow instead of the native square outline.

The native project dialog keeps focus trapping and focus restoration. Content enters over 320 ms and exits over 190 ms; the backdrop uses 56% dark opacity and a 5 px blur. Escape, backdrop and the close button share the exit path. Rapid reversal uses the current animation state. The viewer has fixed viewport-relative dimensions, independent image scrolling and localized loading/error feedback, preventing image loading from resizing the entire popup. Reduced motion opens and closes immediately.

Additional verification covered 105 combinations across all three languages and five tabs at 320×568, 390×844, 768×1024, 844×390, 1024×768, 1440×900 and 1920×1080. All panel overflow, dock placement, language-menu bounds and project-viewer bounds checks passed. Real pointer drag verified rotation, release inertia and suppression of an accidental ripple.
