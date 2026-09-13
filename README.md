# Money Machine 💸

A personal, **fully offline** money-manager PWA. All data lives on your device (IndexedDB) — nothing goes to any server. Built to be hosted free on GitHub Pages, like your other apps.

## What's inside
- **Everything is an account** — bank, mobile banking (bKash/Nagad/Upay), hand cash, credit card, loan, DPS, Sanchayapatra, life insurance. Every expense/income is paid from / received into an account, so balances always stay in sync.
- **Transfers** (cash withdrawal, card bill, DPS/insurance contribution, savings maturity) never count as expense or income — your monthly numbers stay honest.
- **Dashboard** — total balance, income/expense, trends, top spending, recent records.
- **Records** — month-by-month, filter by type, grouped by day.
- **Accounts** — grouped into spending / cards / loans / savings, with net worth.
- **Budget** — overall + per-category, green → yellow → red as you approach the limit.
- **Reports** — monthly & annual, donut by category, trends, category drill-down, print/Save-as-PDF.
- **Add / edit / delete everywhere** — accounts, categories, subcategories, budgets, records.
- **6 colour themes** + font choice (Lato / Inter / Poppins / Roboto / System). Currency: **Tk**.
- **Backup** — export a `.json` file (save it to Google Drive), import it on any device.

## Put it on GitHub Pages
1. Make a new **public** repo, e.g. `money-machine`.
2. Upload all files in this folder (`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`) to the repo root.
3. Repo **Settings → Pages → Source: `main` branch, `/root`** → Save.
4. Open the given URL (e.g. `https://yourname.github.io/money-machine/`) on your phone → browser menu → **Add to Home screen**. Now it opens like a native app and works offline.

## Notes / assumptions
- **Credit card & loan**: enter the current *due / outstanding* as a positive number — the app stores it as what you owe. Spending on the card increases the due; paying the bill is a transfer from a bank.
- **EMI**: add the loan with a monthly EMI amount; the "Pay EMI" button pre-fills that amount each month.
- **Savings maturity**: at the maturity date the account reminds you; tap **Mature → move to bank & close** to move the money to the linked bank and close it (you stay in control — nothing happens automatically).
- **Interest**: add it manually via a savings account's **Add interest** button (counts as income).
- **Fonts**: loaded from Google Fonts on first open, then cached for offline use. If you're fully offline on the very first launch, it falls back to the system font until you're online once.
- **Backup habit**: export a JSON now and then and drop it in Google Drive — that's your safety net and how you move data between devices.
