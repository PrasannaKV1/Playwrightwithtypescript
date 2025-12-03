# Copilot Instructions for Playwright TypeScript Test Suite

## Project Overview
This is a **Playwright-based end-to-end test suite** using TypeScript for testing the TheTopSchool web application. The project focuses on automated user workflows testing (noticeboard creation, support ticket submission, etc.) across multiple browsers.

## Test Execution & Architecture

### Core Commands
- **Run all tests**: `npx playwright test`
- **Run specific test file**: `npx playwright test noticeboard` or `npx playwright test supportticket`
- **Run with debugging**: `npx playwright test --debug`
- **View HTML report**: Tests auto-generate reports in `playwright-report/` directory
- **CI/CD behavior**: Retries = 2 on CI, workers = 1 (sequential); local = retries = 0, workers = parallel

### Browser Configuration
Tests execute against 3 browser engines defined in `playwright.config.ts`:
- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)  
- **WebKit** (Desktop Safari)

Mobile viewports are commented out but available for activation.

## Test Patterns & Conventions

### Test File Structure
- **Location**: `tests/*.spec.ts` (glob pattern `./tests` in config)
- **Test naming**: Each file has one primary test; name describes the user workflow
- **Base URL**: Hardcoded in tests (e.g., `https://newdbthree.thetopschool.com/`)

### Locator Strategies (in priority order)
1. **Accessibility-based**: `getByRole()` — preferred for buttons, links, textboxes (e.g., `getByRole('button', { name: 'Log in as Admin' })`)
2. **Test ID attributes**: `getByTestId()` — used when role locators insufficient (e.g., `getByTestId('content-input')`)
3. **CSS selectors**: `locator('input[name="userName"]')` — fallback for form inputs without accessible names
4. **Text content**: `getByText()` — for navigation links or less critical elements

### Common Test Patterns
- **Login flow**: Username filled via `locator('input[name="userName"]')`, password via `getByRole('textbox', { name: 'Password' })`
- **Keyboard interactions**: `press('CapsLock')` used in password entry (pattern in `noticeboard.spec.ts` and `supportticket.spec.ts`)
- **File uploads**: `setInputFiles('input[type="file"]', 'tests/uploads/istockphoto-598786236-612x612.jpg')`
- **Form submissions**: Typically `getByRole('button', { name: 'Send' })` or `getByRole('button', { name: 'Send Request' })`

## Key Files & Their Purpose

| File | Purpose |
|------|---------|
| `playwright.config.ts` | Browser configs, retry/worker settings, HTML reporter, trace collection on failures |
| `tests/noticeboard.spec.ts` | Admin notice creation workflow with file attachment |
| `tests/supportticket.spec.ts` | User support ticket submission workflow |
| `tests/example.spec.ts` | Basic Playwright examples (external site tests) |
| `tests/uploads/` | Static test assets (images for file upload tests) |

## Developer Workflows

### Creating New Tests
1. Add file to `tests/` with `.spec.ts` suffix
2. Use `import { test, expect } from '@playwright/test'`
3. Follow locator priority: accessibility > test IDs > selectors > text
4. Place test file assets in `tests/uploads/`
5. Run: `npx playwright test <filename-without-extension>`

### Debugging Failed Tests
- Traces auto-collect on first failure (`trace: 'on-first-retry'` in config)
- HTML report available at `playwright-report/index.html` after run
- Use `--debug` flag for step-through debugging with inspector

### Environment Notes
- **No baseURL configured**: Each test hardcodes full URLs
- **No environment file**: `.env` loading is commented out; credentials hardcoded (dev/test only)
- **CommonJS module type**: Project uses `"type": "commonjs"` despite TypeScript

## Important Conventions NOT to Break
- Always use `getByRole()` with accessible names before resorting to CSS selectors
- Test names should describe the user scenario (verb: "Verify admin is able to...")
- File uploads always reference `tests/uploads/` relative path
- Never add `test.only` in CI environment (config forbids it)
- Keep one primary test per spec file (example.spec.ts is exception)

## Dependency Updates
- Playwright: `@playwright/test: ^1.57.0`
- Node types: `@types/node: ^24.10.1`
- DevDependencies only; no runtime dependencies
