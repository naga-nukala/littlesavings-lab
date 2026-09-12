---
name: create-html-pages
description: "Create one or more standalone HTML pages in this static project, link each new page from every root index*.html page, validate the links and browser behavior, then commit and push the reviewed changes to GitHub when explicitly requested. Use for new Savings Lab tools, calculators, trackers, dashboards, or other HTML pages."
argument-hint: "Describe the new page(s), required behavior, and whether to commit and push"
user-invocable: true
---

# Create HTML Pages

## Purpose

Use this skill for additions to the root-level static HTML site. It keeps new tools discoverable through every index variant, preserves the existing visual and JavaScript conventions, and verifies the result before publishing.

## Required Inputs

Before editing, establish:

- The page name, filename, purpose, audience, and required interactions.
- The data model, formulas, defaults, validation rules, and edge cases for calculators or trackers.
- The label, description, category, and icon or emoji to use in index navigation.
- Whether the user wants a commit and push after review. Never infer a remote, branch, or force-push policy.

If these details are missing, ask concise questions before creating a page. For a multi-page request, clarify whether the pages should share data or remain independent.

## Procedure

1. Inspect the repository status and remote/branch information. Preserve unrelated user changes and do not reset or overwrite them.
2. Inspect a nearby existing page with similar behavior and at least one navigation entry in each root `index*.html` file. Follow the local HTML, CSS, JavaScript, manifest, font, and accessibility patterns.
3. Choose lowercase kebab-case filenames and confirm that each requested filename is unused. Keep pages self-contained unless the repository already provides a shared asset or helper that is appropriate.
4. Implement the page with:
   - A meaningful `<title>` and accessible headings and labels.
   - Responsive layout and keyboard-usable controls.
   - Explicit input validation and visible empty, invalid, and calculated states.
   - Clear handling for numeric precision, currency formatting, dates, and divide-by-zero cases where relevant.
   - Existing project assets and conventions instead of introducing a framework or build step.
5. Add each new page to every root `index*.html` file, including `index.html` and the alternate index pages. Place entries in the most relevant existing category or navigation region, preserve ordering and formatting, and avoid duplicate links.
6. Check related metadata only when needed. Update the web manifest, service worker cache list, or other asset registries if the repository actually requires explicit entries for new HTML pages.
7. Validate before publishing:
   - Confirm every new file exists and every index contains exactly one link to each new page.
   - Check that all referenced local assets and navigation targets exist.
   - Run a local static server when browser behavior needs verification and exercise the main workflow for each page.
   - Test representative valid, empty, invalid, boundary, and mobile-width states.
   - Review the diff for unrelated changes, broken markup, console errors, and accidental secrets.
8. Report the files changed and validation results. Ask for confirmation if the requested commit/push target, branch, or commit message remains ambiguous.
9. If publishing was explicitly requested and validation passed, create a focused commit and verify the staged diff. Before pushing, ask for confirmation and show the checked-out branch and remote. After confirmation, push to the checked-out branch. Never force-push. If push fails, keep the local commit and report the exact failure without rewriting history.

## Completion Checklist

- [ ] New HTML page(s) match the requested behavior and local design language.
- [ ] New page(s) are linked from every root `index*.html` page exactly once.
- [ ] Local links, assets, markup, and primary interactions were checked.
- [ ] Existing user changes and unrelated files were left untouched.
- [ ] Commit occurred only when explicitly requested and validation passed; push also received final confirmation.
- [ ] Final response names changed files, checks run, commit hash if created, and push result.
