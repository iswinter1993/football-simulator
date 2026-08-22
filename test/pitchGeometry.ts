import assert from 'assert';
import {
    FIELD_INSET_PERCENT,
    pitchXPercent,
    pitchYPercent,
} from '../demo/src/pitchGeometry';

const farBoundary = 100 - FIELD_INSET_PERCENT;

assert.strictEqual(pitchXPercent(0), FIELD_INSET_PERCENT);
assert.strictEqual(pitchXPercent(52.5), 50);
assert.strictEqual(pitchXPercent(105), farBoundary);
assert.strictEqual(pitchYPercent(0), FIELD_INSET_PERCENT);
assert.strictEqual(pitchYPercent(34), 50);
assert.strictEqual(pitchYPercent(68), farBoundary);

for (const x of [0, 6.43, 52.5, 102.06, 105]) {
    assert.ok(pitchXPercent(x) >= FIELD_INSET_PERCENT);
    assert.ok(pitchXPercent(x) <= farBoundary);
}

for (const y of [0, 14.19, 34, 56.54, 68]) {
    assert.ok(pitchYPercent(y) >= FIELD_INSET_PERCENT);
    assert.ok(pitchYPercent(y) <= farBoundary);
}

console.log({
    pitchBounds: [
        pitchXPercent(0),
        pitchYPercent(0),
        pitchXPercent(105),
        pitchYPercent(68),
    ],
});
