# QA Automation Assignment

## Overview
This project contains UI and API automation tests built using Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- ReqRes API

## Test Coverage

### UI Tests
- Verify successful login with valid credentials.
- Verify the error message for a locked-out user.
- Verify the cart badge after adding a product.

### API Tests
- Verify GET `/api/users/2` returns status 200 and an email.
- Verify POST `/api/users` creates a user and returns status 201.

## Setup
Install dependencies:

```bash
npm install
npx playwright install chromium
```

## Configure the API Key
In PowerShell, set your ReqRes API key:

```powershell
$env:REQRES_API_KEY = "YOUR_API_KEY"
```

Keep your API key private. Do not commit it to GitHub.

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests only:

```bash
npx playwright test tests/ui
```

Run API tests only:

```bash
npx playwright test tests/api
```

View the HTML report:

```bash
npx playwright show-report
```