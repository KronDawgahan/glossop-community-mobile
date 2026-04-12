# Glossop Community Mobile — Pre-registration Site

Static landing site for pre-launch interest capture. No build step, no dependencies. Plain HTML/CSS/JS.

---

## Files

```
glossop-community-mobile/
├── index.html       Main landing page
├── details.html     Plans, CIC info, privacy notice
├── style.css        Shared styles
├── script.js        Form validation & Formspree submission
└── README.md        This file
```

---

## Setup checklist before going live

### 1. Formspree (email capture)
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/abcd1234`
3. In `index.html`, find this line and replace `YOUR_FORMSPREE_ID`:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
4. In Formspree dashboard, enable email notifications and/or CSV export
5. Free tier: 50 submissions/month. Starter (~£8/mo): 250/month.

### 2. SurveyMonkey link
In `index.html`, find this line and replace the placeholder:
```html
<a href="#SURVEY-LINK-PLACEHOLDER" ...>
```
Replace `#SURVEY-LINK-PLACEHOLDER` with your SurveyMonkey URL.

### 3. Contact email
Two placeholder email addresses in the HTML:
- `hello@glossopcommunitymobile.co.uk`
Update both to your actual contact email.

### 4. Company registration number
Search both HTML files for `[to be confirmed]` and update when you have your CIC registration number.

### 5. Indicative pricing
`details.html` contains a placeholder pricing table. Update figures when finalised.

---

## Hosting options (lightweight)

All options work well for a static site of this size:

| Option | Cost | Notes |
|--------|------|-------|
| **Netlify** | Free | Drag-and-drop deploy or git-connected. Easiest. |
| **GitHub Pages** | Free | Git-native. Good if you're using GitHub. |
| **Cloudflare Pages** | Free | Git-connected, fast CDN. |
| Your existing host | Varies | Upload via FTP/SFTP if you have cPanel etc. |

For Netlify: drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) to test. Connect your git repo for auto-deploy.

---

## Branding update (later)
All colours are CSS variables in `style.css` under `:root`. When your brand is finalised:
- Update `--hero-bg`, `--accent`, `--accent-dark`, `--accent-light`, `--survey-bg`
- Swap the Google Fonts import for your brand font
- Replace the text logo with an `<img>` tag when you have a logo file

---

## GDPR note
The privacy notice in `details.html#privacy` is a minimal pre-launch version. Before going live with significant volumes, consider:
- Registering with the ICO (Information Commissioner's Office) — required if you're a data controller
- Publishing a full UK GDPR-compliant privacy policy at launch

---

## Data export for Mailchimp
When ready to import signups:
1. Go to Formspree dashboard → your form → Submissions
2. Export as CSV
3. Import into Mailchimp via Audience → Import contacts
