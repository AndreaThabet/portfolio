# Portfolio Website Test Plan

All final tests should be run on the live GitHub Pages website.

| ID | What is being tested | Steps | Expected result | Actual result |
|---|---|---|---|---|
| T1 | Home navigation links | Open Home and click About, Projects, Skills, and Contact one at a time. | Every link opens the correct page. | Not tested yet |
| T2 | About navigation links | Open About and use every navigation link. | Every link opens the correct page. | Not tested yet |
| T3 | Projects navigation links | Open Projects and use every navigation link. | Every link opens the correct page. | Not tested yet |
| T4 | Skills navigation links | Open Skills and use every navigation link. | Every link opens the correct page. | Not tested yet |
| T5 | Contact navigation links | Open Contact and use every navigation link. | Every link opens the correct page. | Not tested yet |
| T6 | Phone layout | Use Chrome DevTools with a phone-sized viewport and open all five pages. | Content fits the screen with no unwanted horizontal scrolling or overlapping text. | Not tested yet |
| T7 | Laptop layout | View all five pages at a normal laptop width. | Pages are readable, aligned, and use the available screen space correctly. | Not tested yet |
| T8 | Mobile navigation menu | On a phone-sized screen, activate the menu button. Then select a page link. | Menu opens, displays navigation links, and the selected link works. | Not tested yet |
| T9 | Second JavaScript feature | Activate the site's second interactive feature on multiple pages. | The feature responds correctly and does not break the page layout. | Not tested yet |
| T10 | Contact form invalid input | On Contact, submit the form with required information missing or invalid. | JavaScript prevents an invalid submission and gives the user useful feedback. | Not tested yet |
| T11 | Contact form valid input | Enter valid information into the Contact form and submit it. | Validation accepts the input and directs the visitor toward the intended email/contact action. | Not tested yet |
| T12 | Keyboard navigation | On each page, use Tab/Shift+Tab to move through links, buttons, and form controls. Use Enter/Space where appropriate. | All interactive elements are reachable and usable, and focus is visible. | Not tested yet |
| T13 | Image accessibility | Inspect project images and/or run an accessibility check. | Every meaningful image has useful alt text. | Not tested yet |
| T14 | Lighthouse - Home | Run Chrome DevTools Lighthouse Accessibility audit on Home. | Accessibility score is 90 or higher. | Not tested yet |
| T15 | Lighthouse - About | Run Lighthouse Accessibility audit on About. | Accessibility score is 90 or higher. | Not tested yet |
| T16 | Lighthouse - Projects | Run Lighthouse Accessibility audit on Projects. | Accessibility score is 90 or higher. | Not tested yet |
| T17 | Lighthouse - Skills | Run Lighthouse Accessibility audit on Skills. | Accessibility score is 90 or higher. | Not tested yet |
| T18 | Lighthouse - Contact | Run Lighthouse Accessibility audit on Contact. | Accessibility score is 90 or higher. | Not tested yet |

## Testing Notes

For any failed test:
1. Record `Fail` in the Actual result column and briefly describe the problem.
2. Fix the problem.
3. Run the same test again.
4. Record the new result, for example: `Fail - menu overlapped heading. Retested after fix: Pass.`

Do not mark a test as Pass until it has actually been run on the live GitHub Pages site.
