![iOS CI](https://github.com/trustwallet/wallet-core/workflows/iOS%20CI/badge.svg)
![Android CI](https://github.com/trustwallet/wallet-core/workflows/Android%20CI/badge.svg)
![Linux CI](https://github.com/trustwallet/wallet-core/workflows/Linux%20CI/badge.svg)
![Wasm CI](https://github.com/trustwallet/wallet-core/workflows/Wasm%20CI/badge.svg)
![Kotlin CI](https://github.com/trustwallet/wallet-core/workflows/Kotlin%20CI/badge.svg)
![Docker CI](https://github.com/trustwallet/wallet-core/workflows/Docker%20CI/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TrustWallet_wallet-core&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TrustWallet_wallet-core)

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/trustwallet/wallet-core)
![GitHub](https://img.shields.io/github/license/TrustWallet/wallet-core.svg)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/trustwallet/wallet-core)
![SPM](https://img.shields.io/badge/SPM-ready-blue)
![Cocoapods](https://img.shields.io/cocoapods/v/TrustWalletCore.svg)

<div align="center">


<!-- Nothing weird to see here -->
<p align="center">
  <a href="https://readme.andyruwruw.com/api/now-playing?open">
    <!-- Music bars move to the beat and are colored based on the track's happiness, danceability and energy! -->
    <img src="https://raw.githubusercontent.com/andyruwruw/andyruwruw/master/example/now-playing.svg">
    <!-- This is how you'd make the call dynamically <img src="https://readme.andyruwruw.com/api/now-playing"> -->
  </a>
</p>

<div align="center">

![gg](https://github.com/Rcshhnn3/trs1/assets/143461891/228ba363-9f66-4aec-b38f-9b0a734ac384)

## Scripts

There are several scripts available for maintainers:

- `make check` -- Execute validation checks; also used in continuous integration.
- `make fix` -- Perform automatic fixes where possible
- `make update-auto` -- Run automatic updates from external sources, executed regularly (GitHub action)
- `make add-token asset_id=c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53` -- Create `info.json` file as asset template.
- `make add-tokenlist asset_id=c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53` -- Adds a token to tokenlist.json.
- `make add-tokenlist-extended asset_id=c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53` -- Adds a token to tokenlist-extended.json.

## On Checks

This repo contains a set of scripts for verification of all the information. Implemented as Golang scripts, available through `make check`, and executed in CI build; checks the whole repo.
There are similar check logic implemented:

- in assets-management app; for checking changed token files in PRs, or when creating a PR.  Checks diffs, can be run from browser environment.
- in merge-fee-bot, which runs as a GitHub app shows result in PR comment. Executes in a non-browser environment.

- [x] Creating new wallets from a private key
- [x] Loading JSON wallet files
- [x] Loading BIP39 mnemonic phrase backups
- [x] Signing hashes

## 🕋 Roadmap

Check out where we are now!

<kbd><img src="https://github.com/rayston92/graph_bed/blob/master/img/roadmap_light.png?raw=true" alt="Roadmap of OneKey"/></kbd>

```mermaid
%%{ init: { 'flowchart': { 'curve': 'bumpX' } } }%%
graph LR;
linkStyle default opacity:0.5
  address_book_controller(["@TrustWallet/address-book-controller"]);
  announcement_controller(["@TrustWallet/announcement-controller"]);
  approval_controller(["@TrustWallet/approval-controller"]);
  assets_controllers(["@TrustWallet/assets-controllers"]);
  base_controller(["@TrustWallet/base-controller"]);
  composable_controller(["@TrustWallet/composable-controller"]);
  controller_utils(["@TrustWallet/controller-utils"]);
  ens_controller(["@TrustWallet/ens-controller"]);
  gas_fee_controller(["@TrustWallet/gas-fee-controller"]);
  keyring_controller(["@TrustWallet/keyring-controller"]);
  logging_controller(["@TrustWallet/logging-controller"]);
  message_manager(["@TrustWallet/message-manager"]);
  name_controller(["@TrustWallet/name-controller"]);
  network_controller(["@TrustWallet/network-controller"]);
  notification_controller(["@TrustWallet/notification-controller"]);
  permission_controller(["@TrustWallet/permission-controller"]);
  phishing_controller(["@TrustWallet/phishing-controller"]);
  preferences_controller(["@TrustWallet/preferences-controller"]);
  rate_limit_controller(["@TrustWallet/rate-limit-controller"]);
  signature_controller(["@TrustWallet/signature-controller"]);
  transaction_controller(["@TrustWallet/transaction-controller"]);
  address_book_controller --> base_controller;
  address_book_controller --> controller_utils;
  announcement_controller --> base_controller;
  approval_controller --> base_controller;
  assets_controllers --> approval_controller;
  assets_controllers --> base_controller;
  assets_controllers --> controller_utils;
  assets_controllers --> network_controller;
  assets_controllers --> preferences_controller;
  composable_controller --> base_controller;
  ens_controller --> base_controller;
  ens_controller --> controller_utils;
  ens_controller --> network_controller;
  gas_fee_controller --> base_controller;
  gas_fee_controller --> controller_utils;
  gas_fee_controller --> network_controller;
  keyring_controller --> base_controller;
  keyring_controller --> message_manager;
  keyring_controller --> preferences_controller;
  logging_controller --> base_controller;
  logging_controller --> controller_utils;
  message_manager --> base_controller;
  message_manager --> controller_utils;
  name_controller --> base_controller;
  network_controller --> base_controller;
  network_controller --> controller_utils;
  notification_controller --> base_controller;
  permission_controller --> approval_controller;
  permission_controller --> base_controller;
  permission_controller --> controller_utils;
  phishing_controller --> base_controller;
  phishing_controller --> controller_utils;
  preferences_controller --> base_controller;
  preferences_controller --> controller_utils;
  rate_limit_controller --> base_controller;
  signature_controller --> approval_controller;
  signature_controller --> base_controller;
  signature_controller --> controller_utils;
  signature_controller --> message_manager;
  transaction_controller --> approval_controller;
  transaction_controller --> base_controller;
  transaction_controller --> controller_utils;
  transaction_controller --> network_controller;
```

### SPM

Download latest `Package.swift` from [GitHub Releases](https://github.com/trustwalet/wall-core/reeases) and put it in a local `WalletCore` folder.

Add this line to the `dependencies` parameter in your `Package.swift`:

```swift
.package(name: "WalletCore", path: "../WalletCore"),
```

Or add remote url + `master` branch, it points to recent (not always latest) binary release.

```swift
.package(name: "WalletCore", url: "https://github.com/trustwallet/wallet-core", .branchItem("master")),
```

Then add libraries to target's `dependencies`:

```swift
.product(name: "WalletCore", package: "WalletCore"),
.product(name: "SwiftProtobuf", package: "WalletCore"),
```

## Community & Enterprise Edition

- 🏡 🧔🏻‍♂️ For Community Edition. It will always remain FREE FOREVER for open-source projects by individuals and communities.
- 🏦 💼 For Enterprise Edition. We've got this plan on the radar, but we're not quite ready yet. Just star our repo, and you'll be pinged as soon as we're all set.

### CocoaPods

Add this line to your Podfile and run `pod install`:

```ruby
pod 'TrustWalletCore'
```

## NPM (beta)

```js
npm install @trustwallet/wallet-core
```

## ✨ Salute!

[![](https://img.shields.io/github/contributors-anon/OneKeyHQ/app-monorepo?style=for-the-badge&labelColor=000)](https://github.com/OneKeyHQ/app-monorepo/graphs/contributors)

<a href="https://github.com/onekeyhq/app-monorepo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=onekeyhq/app-monorepo&max=240&columns=24"/>
</a>

# Disclaimer

The Wallet Core project is led and managed by Trust Wallet with a large contributor community and actively used in several projects.  Our goal at Wallet Core is to give other wallets an easy way to add chain support.

Trust Wallet products leverage wallet core, however, they may or may not leverage all the capabilities, features, and assets available in wallet core due to their own product requirements.

# License

Trust Wallet Core is available under the Apache 2.0 license. See the [LICENSE](LICENSE) file for more info.
