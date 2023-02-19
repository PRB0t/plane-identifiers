# Plane Identifiers

A small npm package containing a plane identifier database (i.e. [plane_identifiers.json](src/data/plane_identifiers.json)) that can be used to connect several private or corporate jets to people or companies. 

<p align="center">
    <a href="https://github.com/jettracker-io/plane-identifiers/actions">
        <img alt="Tests Passing" src="https://img.shields.io/github/actions/workflow/status/jettracker-io/plane-identifiers/firebase-hosting-merge.yml" />
    </a>
    <a href="https://github.com/jettracker-io/plane-identifiers/graphs/contributors">
        <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/jettracker-io/plane-identifiers" />
    </a>
    <a href="https://codecov.io/gh/jettracker-io/plane-identifiers">
        <img src="https://codecov.io/gh/jettracker-io/plane-identifiers/branch/master/graph/badge.svg" />
    </a>
    <a href="https://github.com/jettracker-io/plane-identifiers/issues">
        <img alt="Issues" src="https://img.shields.io/github/issues/jettracker-io/plane-identifiers?color=0088ff" />
    </a>
    <a href="https://github.com/jettracker-io/plane-identifiers/pulls">
        <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/jettracker-io/plane-identifiers?color=0088ff" />
    </a>
    <a href="https://github.com/jettracker-io/plane-identifiers/blob/main/src/data/plane_identifiers.json">
        <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjettracker-io%2Fplane-identifiers%2Fmain%2Fsrc%2Fdata%2Fplane_identifiers_badge.json"/>
    </a>
    <br />
    <br />
    <a href="https://github.com/PRB0t/PRB0t">
        <img src="https://img.shields.io/badge/Powered%20by-PRB0T-gray.svg?colorA=4682B4&colorB=21618C&style=for-the-badge"/>
    </a>
</p>

## Disclaimer

This repository contains plane identifiers that can be easily found on the web (e.g. [sdr-enthusiasts/plane-alert-db)](https://github.com/sdr-enthusiasts/plane-alert-db)). They are supplied to us by anonymous contributors, allowing us to track the flight CO2 emissions of (wealthy) individuals and companies at [JetTracker.io](https://jettracker.io). As we are not interested in [doxing](https://en.wikipedia.org/wiki/Doxing), only the data needed to calculate these C02 emissions is stored in this repository.

## How to contribute

Great that you want to contribute to our [plane identifiers database](src/data/plane_identifiers.json)! :tada: Please note that although most plane identifiers are readily available on the web, publishing them is still a grey area. As a result, to protect our contributors, we decided only to accept changes to the [plane_identifiers.json](src/data/plane_identifiers.json) file anonymously. Non-anonymous pull requests regarding the planes.json database will therefore be automatically closed. You can [PRB0t/PRB0t](https://github.com/PRB0t/PRB0t) to anonymously submit your changes:

1.  **OPTIONAL:** Enable a VPN of your choice.
2.  Clone the repository through HTTPS (i.e. git clone <https://github.com/planeninja/plane-identifiers.git>).
3.  Go into the plane-identifiers folder.
4.  **OPTIONAL:** Change the repository username and email (i.e. `git config user.name "anonymous"; git config user.email "anonymous@noyb.so"`).
5.  Change the `src/data/plane_identifiers.json` to your liking.
6.  Install the npm dependencies.
7.  Use the `npm run submit_planes` command to create an anonymous PR for your changes. You can checkout the options for this script using `npm run submit_planes -- -h`.
