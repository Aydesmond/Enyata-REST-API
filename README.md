# Quick Start Guide.

To run the codebase directly.

1. Run `npm i` to install dependencies.
2. From there, any of the following should work:
  - `npm run start`
  - `npm run dev`

## Notes.
1. The reason for the --timeout 10000 in the describe block is to ensure the request did not timeout while making the request to the GitHub API. Also this might not be the case when running a large test codebase but for this mini test this might not be a bad practice.

2. The test written can be more. For example a test to ensure a 400 response.