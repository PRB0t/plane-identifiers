# Plane Identifiers

A small npm package containing a plane identifier database (i.e. [plane_identifiers.json](src/data/plane_identifiers.json)) that can be used to connect several private or corporate jets to people or companies. 

## Disclaimer

This repository contains plane identifiers that can be easily found on the web (e.g. [sdr-enthusiasts/plane-alert-db)](https://github.com/sdr-enthusiasts/plane-alert-db)). They are supplied to us by anonymous contributors, allowing us to track the flight CO2 emissions of (wealthy) individuals and companies. As we are not interested in [doxing](https://en.wikipedia.org/wiki/Doxing), only the data needed to calculate these C02 emissions is stored in this repository.

## How to contribute

Great that you want to contribute to our [plane identifiers database](src/data/plane_identifiers.json)! :tada: Please note that although most plane identifiers are readily available on the web, publishing them is still a grey area. As a result, to protect our contributors, we decided only to accept changes to the [plane_identifiers.json](src/data/plane_identifiers.json) file anonymously. Non-anonymous pull requests regarding the planes.json database will therefore be automatically closed. You can [PRB0t/PRB0t](https://github.com/PRB0t/PRB0t) to anonymously submit your changes:

1.  **OPTIONAL:** Enable a VPN of your choice.
2. Clone the repository through HTTPS (i.e. git clone <https://github.com/planeninja/plane-identifiers.git>).
3. Go into the plane-identifiers folder.
4.  **OPTIONAL:** Change the repository username and email (i.e. `git config user.name "anonymous"; git config user.email "anonymous@noyb.so"`).
5. Change the `src/data/plane_identifiers.json` to your liking.
6. Install the npm dependencies.
7. Use the `npm run submit_planes` command to create an anonymous PR for your changes. You can checkout the options for this script using `npm run submit_planes -- -h`.
