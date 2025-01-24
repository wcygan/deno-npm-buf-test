# Deno Test

Trying to install https://buf.build/wcygan/flock/sdks/main:bufbuild/es using Deno.

References:

1. https://deno.com/blog/v1.29
2. https://deno.com/blog/v1.44#support-for-private-npm-registries
3. https://github.com/denoland/deno/issues/16105
4. https://docs.npmjs.com/cli/v9/configuring-npm/npmrc
5. https://github.com/denoland/deno/issues/16105#issuecomment-2083705776
6. https://github.com/denoland/deno/pull/23560
7. https://github.com/denoland/deno/issues/16105#issuecomment-2134954590
8. https://github.com/denoland/deno/issues/16105#issuecomment-2138481860
9. https://github.com/denoland/deno/pull/24042
10. https://github.com/denoland/deno/issues/16105#issuecomment-2143072365
11. [Buf Issue](https://github.com/bufbuild/protobuf-es/issues/1059)
12. [Deno Issue](https://github.com/denoland/deno/issues/27758)
13. [Other people using Buf in .npmrc](https://github.com/search?q=%22@buf:registry%3Dhttps://buf.build/gen/npm/v1/%22&type=code)

> please do DENO_FUTURE=1 deno install before running DENO_FUTURE=1 deno task dev. Let me know if that works for you.

> Support for private registries/.npmrc has shipped in Deno v1.44.0: https://deno.com/blog/v1.44#support-for-private-npm-registries.

