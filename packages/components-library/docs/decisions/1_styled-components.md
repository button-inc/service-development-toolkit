# Design decision 1 - Use styled-components library

## Scope

Styling of library components

## Issue

Decision of how to style components needs to be made.

## Background

When choosing a styling library, the issues of code splitting, ease of use, theming, and likely longevity were considered.
The following libraries have been reviewed:
- [styled-components](https://styled-components.com/)
- [styled-jsx](https://github.com/vercel/styled-jsx) 
- [CSS modules](https://github.com/css-modules/css-modules)

## Findings

Code-splitting | Ease of use | Theming | Longevity
---|---|---|---
Code splitting is easily supported by CSS modules and styled-components. | There was a preference for in-component styling with either styled-components or styled-jsx. | While all 3 libraries support global themes, the implementation seemed easiest in CSS modules and styled-components. | All considered libraries have strong on-going support

## Decision

The library styled-components was chosen, as it met the requirements for code splitting, theming, and longevity, and its strong documentation and usability made it the favoured candidate.