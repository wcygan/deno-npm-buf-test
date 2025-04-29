# Deno NPM Compatibility Test

## Update 04/29/2025

It works now! 🎉

Fixes are from https://github.com/denoland/deno/issues/27758 / https://github.com/denoland/deno/pull/29093

```bash
deno install npm:@buf/wcygan_flock.bufbuild_es
```

```bash
deno task start
Task start deno run main.ts
Hello, Deno!
{
  "$typeName": "profile.v1.User",
  id: { "$typeName": "common.v1.UserId", value: "12345" },
  username: "new_user",
  picture: {
    "$typeName": "profile.v1.ProfilePicture",
    picture: { case: "hexColor", value: "#FF5733" }
  }
}
```

## Older context (before 04/29/2025)

Trying to install https://buf.build/wcygan/flock/sdks/main:bufbuild/es using Deno.

This repository is an artifact to help with the testing of https://github.com/denoland/deno/issues/27758, which is failing due to lack of graceful handling of [shasum](https://github.com/bufbuild/buf/issues/1719#issuecomment-2612280061)

## Quick Start

```bash
deno task start
```

Expected output:

```bash
Hello, World!
```

Actual output:

```bash
error: Failed loading https://buf.build/gen/npm/v1/@buf%2fwcygan_flock.bufbuild_es for package "@buf/wcygan_flock.bufbuild_es"

Caused by:
    missing field `shasum` at line 1 column 358
```

## Deep dive into the issue

```bash
curl https://registry.npmjs.org/connectrpc | jq '.versions["0.0.0"].dist'
{
  "shasum": "2964ce658caf594aeffff9a7c0705e73b6bb5d53",
  "tarball": "https://registry.npmjs.org/connectrpc/-/connectrpc-0.0.0.tgz"
}
```

```bash
curl https://buf.build/gen/npm/v1/@buf%2fwcygan_flock.bufbuild_es | jq '.versions["2.2.3-20241231000219-b035f3c109ea.1"].dist'
{
  "tarball": "https://buf.build/gen/npm/v1/@buf/wcygan_flock.bufbuild_es/-/wcygan_flock.bufbuild_es-2.2.3-20241231000219-b035f3c109ea.1.tgz"
}
```

This missing `shasum` field in the Buf registry response is what causes Deno to fail when attempting to load the package, as Deno expects this field to be present in the package metadata.

Perhaps Deno can handle this gracefully, just as npm does.
