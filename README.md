This application is written in React with Redux.
On load application receives a list of folders with test coverage statistics from an API.
API is written in NodeJs and is available on ........
Each folder has onClick event that will display a list of subfolders or files.

Application transforms the data it received fro API into an object structured by folder name.

The idea is to make a folder explorer.

The future improvements:
- display summary by folder
- add more styling, only the basic styling is currently applied.
- collapse folder, at the moment folders are not collapsing all the way to the root.
- add loader spinner
- add unit tests
- add integration tests
- adjust page layout for different screen sizes.
- improve the overall design.
