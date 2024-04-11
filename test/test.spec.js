import TTLCache from "@isaacs/ttlcache";
import assert from "assert";

describe('ttlcache', function () {
  it('should remove expired element', async function () {
    const cache = new TTLCache();

    cache.set('key', 'value', { ttl: 1000 });
    await clock.tickAsync(2000);
    assert.equal(cache.get('key'), undefined);
  });
});
