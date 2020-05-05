/**
 * Bump versions in the deps file.
 *
 * Other places to bump versions:
 * - mod.ts
 * - README.md
 * - REQUIREMENTS.md
 */
async function bumpVersions(fromV: string, toV: string) {
  // deps.ts
  let depData = new TextDecoder().decode(
    await Deno.readAll(await Deno.open("./deps.ts")),
  );
  depData = depData.replace(new RegExp(fromV, "g"), toV);
  Deno.writeFileSync("./deps.ts", new TextEncoder().encode(depData));

  return depData;
}

let result = await bumpVersions("v0.42.0", "v1.0.0-rc1");

console.log(result);
