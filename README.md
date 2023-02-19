# Plane Identifiers

A tiny repository that includes a plane identifier database (i.e. [plane_identifiers.json](src/data/plane_identifiers.json)) that can be used to link several private or corporate jets to people or companies.

## How to contribute

Since publishing plane identifiers is still a grey area, we only accept anonymous changes to the planes.json file. This is done to protect our contributors. Non-anonymous pull requests regarding the planes.json database will be automatically closed. You can [PRB0t/PRB0t](https://github.com/PRB0t/PRB0t) to do this:

1.  **OPTIONAL:** Enable a VPN of your choice.
2.  Clone the repository through HTTPS (i.e. git clone <https://github.com/planeninja/plane-identifiers.git>).
3.  Go into the plane-identifiers folder.
4.  **OPTIONAL:** Change the repository username and email (i.e. `git config user.name "anonymous"; git config user.email "anonymous@noyb.so"`).
5.  Change the `src/data/plane_identifiers.json` to your liking.
6.  Install the npm dependencies.
7.  Use the `npm run submit_planes` command to create an anonymous PR for your changes. You can checkout the options for this script using `npm run submit_planes -- -h`.
