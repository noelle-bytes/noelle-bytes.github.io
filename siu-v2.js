/* SIU field worksheet, version 2: scoring core.
   Pure functions, no DOM. Used by calculator.html and by the tests. */
(function (root) {
  'use strict';

  const EPS = 1e-9;
  const RUNGS = ['None', 'Low', 'Moderate', 'High'];
  const BAND_ORDER = ['None', 'Low', 'Moderate', 'High', 'Very high'];

  const S_ITEMS = ['S1', 'S2', 'S3', 'S4', 'S5'];
  const I_LADDER = ['I1', 'I2', 'I3', 'I4'];
  const U_LADDER = ['U1', 'U2', 'U3', 'U4', 'U5'];
  const STRETCH = ['S+', 'I+', 'U+'];

  // Self-track indicators, grouped by the rung they support.
  const TRACKS = {
    B: { 1: ['B1'], 2: ['B2', 'B3'], 3: ['B4'] },
    IP: { 1: ['P1', 'P2'], 2: ['P3', 'P4'], 3: ['P5', 'P6', 'P7'] },
    NC: { 1: ['N1'], 2: ['N2', 'N3'], 3: ['N4', 'N5'] }
  };

  // Step 5 ceiling: highest rung each track may hold at a given SIU band.
  const CEILING = {
    'Low': { B: 2, IP: 2, NC: 1 },
    'Moderate': { B: 3, IP: 3, NC: 2 },
    'High': { B: 3, IP: 3, NC: 3 },
    'Very high': { B: 3, IP: 3, NC: 3 }
  };

  const round2 = x => Math.round(x * 100) / 100;

  // Item answer -> points on one branch. Unknown is No on the low branch, Yes on the high.
  function pts(answer, branch) {
    if (answer === 'Y') return 0.2;
    if (answer === 'P') return 0.1;
    if (answer === 'U') return branch === 'high' ? 0.2 : 0;
    return 0; // 'N' or unanswered
  }

  // Ladder: an item counts only if the one before it scored at least Partial;
  // stop at the first No and score the rest 0.
  function ladder(items, ans, branch) {
    let total = 0;
    const counted = {};
    for (const it of items) {
      const v = pts(ans[it], branch);
      if (v === 0) break;
      counted[it] = v;
      total += v;
    }
    return { total, counted };
  }

  function scoreBranch(ans, mode, branch) {
    const S = round2(S_ITEMS.reduce((t, it) => t + pts(ans[it], branch), 0));

    const iL = ladder(I_LADDER, ans, branch);
    let I;
    if (mode === 'construct') {
      I = round2(Math.min(1, iL.total / 0.8));
    } else {
      I = round2(iL.total + pts(ans.I5, branch));
    }

    const uL = ladder(U_LADDER, ans, branch);
    const U = round2(uL.total);

    const A = Math.cbrt(S * I * U);
    const minTerm = Math.min(S, I, U);
    const i2 = iL.counted.I2 || 0;

    const gate = {
      a: A >= 0.35 - EPS,
      min: minTerm >= 0.35 - EPS,
      i2: i2 >= 0.1 - EPS
    };
    gate.pass = gate.a && gate.min && gate.i2;

    // Stretch items are yes or no and carry no points, so an untested one is not counted
    // on either branch; the result notes that Very high would follow if it were shown.
    const stretchAll = STRETCH.every(k => ans[k] === 'Y');
    const stretchPending = !stretchAll && STRETCH.every(k => ans[k] === 'Y' || ans[k] === 'U');

    let band = 'None';
    let veryHighIfShown = false;
    if (gate.pass) {
      if (A >= 0.95 - EPS) {
        band = stretchAll ? 'Very high' : 'High';
        veryHighIfShown = stretchPending;
      }
      else if (A >= 0.8 - EPS) band = 'Moderate';
      else band = 'Low';
    }

    return { S, I, U, A: round2(A), Araw: A, min: round2(minTerm), gate, band, i2, veryHighIfShown };
  }

  // Step 0: place the system on the tiers.
  function placeTier(step0) {
    const s = step0 || {};
    if (s.made === 'Y') return { scored: true, tier: 'Construct', note: 'Made, not evolved: scored on SIU beside the ladder.' };
    if (s.made !== 'N') return { scored: false, tier: null, note: 'Answer Step 0 to place the system.' };
    if (s.flow === 'N') return { scored: false, tier: 'Not on the ladder', note: 'Keeps its form without a flow (a rock, a crystal, a corpse).' };
    if (s.flow !== 'Y') return { scored: false, tier: null, note: 'Answer Step 0 to place the system.' };
    if (s.recovery === 'N') return { scored: false, tier: 'Not on the ladder', note: 'A passing pattern: it does not restore its own form.' };
    if (s.recovery !== 'Y') return { scored: false, tier: null, note: 'Answer Step 0 to place the system.' };
    if (s.selfprod === 'N') return { scored: false, tier: 'Tier 1, persistence', note: 'Self-maintaining while energy flows, with no self-production. SIU is not scored below Tier 2.' };
    if (s.selfprod !== 'Y') return { scored: false, tier: null, note: 'Answer Step 0 to place the system.' };
    if (s.lineage === 'Y') return { scored: true, tier: 'Tier 2, Darwinian life', note: 'Autopoietic and part of a reproducing, selectable lineage.' };
    if (s.lineage === 'B') return { scored: true, tier: 'Borderline Tier 2', note: 'Lineage without full self-production (as for a virus). Scored, expecting it to fail the gate.' };
    if (s.lineage === 'N') return { scored: false, tier: 'Tier 1 (flagged)', note: 'Self-producing with no lineage, which is rare. Recorded as Tier 1 with a flag.' };
    return { scored: false, tier: null, note: 'Answer Step 0 to place the system.' };
  }

  // Self-track statuses:
  //  C = shown, replicated across labs   S = single study or single lab, or an incomplete test
  //  X = contested reading (could be behavior-reading)
  //  R = related species only (does not set a rung)   N = not shown or untested
  //  F = failed close replication (B4 only; counts as a Moderate indicator)
  function rungBest(track, k, sel) {
    let best = null;
    const rank = { C: 3, S: 2, X: 1 };
    for (const it of TRACKS[track][k]) {
      let st = sel[it];
      if (it === 'B4' && st === 'F') continue; // handled at rung 2 below
      if (st in rank && (!best || rank[st] > rank[best])) best = st;
    }
    if (track === 'B' && k === 2 && sel.B4 === 'F') {
      if (!best || best !== 'C') best = 'C';
    }
    return best;
  }

  function rungRange(track, sel) {
    const best = [null, rungBest(track, 1, sel), rungBest(track, 2, sel), rungBest(track, 3, sel)];
    let upper = 0;
    for (let k = 1; k <= 3; k++) { if (best[k]) upper = k; else break; }
    let lconf = 0;
    for (let k = 1; k <= 3; k++) { if (best[k] === 'C') lconf = k; else break; }
    let maxSingle = 0;
    for (let k = 1; k <= upper; k++) if (best[k] === 'S') maxSingle = k;
    const lower = Math.min(upper, Math.max(lconf, maxSingle - 1));
    return { lower, upper };
  }

  function selfState(r, band) {
    if (band === 'None') return 'None';
    if ((band === 'High' || band === 'Very high') && r.B === 3 && r.IP === 3 && r.NC === 3) return 'Integrated self';
    if (r.NC === 3) return 'Narrative self';
    if (r.IP === 3) return 'Social self';
    if (r.B === 3) return 'Identified self';
    if (r.B >= 1) return 'Implicit/situated self';
    return 'None';
  }

  function scoreSelf(sel, naming, siuLow, siuHigh) {
    const raw = {};
    for (const t of ['B', 'IP', 'NC']) raw[t] = rungRange(t, sel);

    // Symbolic cap: NC cannot reach High without language (N4) or naming.
    const liftHigh = naming === 'Y' || ['C', 'S', 'X'].includes(sel.N4);
    const liftLow = naming === 'Y' || sel.N4 === 'C';
    const nc = { lower: raw.NC.lower, upper: raw.NC.upper };
    const symbolic = { upper: false, lower: false };
    if (!liftHigh && nc.upper === 3) { nc.upper = 2; symbolic.upper = true; }
    if (!liftLow && nc.lower === 3) { nc.lower = 2; symbolic.lower = true; }
    const afterSymbolic = { B: raw.B, IP: raw.IP, NC: nc };

    const ends = {};
    for (const [end, siu] of [['lower', siuLow], ['upper', siuHigh]]) {
      const r = {}, capped = {};
      if (!siu.gate.pass) {
        for (const t of ['B', 'IP', 'NC']) { r[t] = 0; capped[t] = false; }
      } else {
        const ceil = CEILING[siu.band];
        for (const t of ['B', 'IP', 'NC']) {
          const v = afterSymbolic[t][end];
          r[t] = Math.min(v, ceil[t]);
          capped[t] = v > ceil[t];
        }
      }
      ends[end] = { rungs: r, capped, state: selfState(r, siu.band), band: siu.band, scored: siu.gate.pass };
    }
    // Keep lower <= upper after independent ceilings.
    for (const t of ['B', 'IP', 'NC']) {
      if (ends.lower.rungs[t] > ends.upper.rungs[t]) ends.lower.rungs[t] = ends.upper.rungs[t];
    }
    ends.lower.state = selfState(ends.lower.rungs, ends.lower.band);
    return { raw, afterSymbolic, symbolic, ends };
  }

  function score(input) {
    const placement = placeTier(input.step0);
    const mode = input.step0 && input.step0.made === 'Y' ? 'construct' : 'organism';
    const low = scoreBranch(input.items || {}, mode, 'low');
    const high = scoreBranch(input.items || {}, mode, 'high');
    const self = scoreSelf(input.self || {}, input.naming, low, high);
    return { placement, mode, low, high, self };
  }

  function bandRange(low, high) {
    return low.band === high.band ? low.band : low.band + ' to ' + high.band;
  }
  function rungRangeLabel(a, b) {
    return a === b ? RUNGS[a] : RUNGS[a] + ' to ' + RUNGS[b];
  }

  // Presets: the anchors and worked cases from Supplement S1.
  const Y = 'Y', P = 'P', N = 'N', U = 'U';
  const animal = { made: N, flow: Y, recovery: Y, selfprod: Y, lineage: Y };
  const construct = { made: Y };
  const allY = { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: Y, I4: Y, I5: Y, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y };

  const PRESETS = [
    { name: 'C. elegans', group: 'Anchors', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: P, I1: Y, I2: N, I5: N, U1: N, 'S+': N, 'I+': N, 'U+': N },
      self: {}, naming: N },
    { name: 'Fruit fly', group: 'Anchors', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: P, I1: Y, I2: P, I3: N, I5: P, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': N, 'U+': U },
      self: {}, naming: N },
    { name: 'Honeybee', group: 'Anchors', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: P, I4: Y, I5: P, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      self: {}, naming: N },
    { name: 'Chimpanzee', group: 'Anchors', step0: animal,
      items: Object.assign({}, allY, { 'S+': Y, 'I+': N, 'U+': Y }),
      self: { B1: 'C', B2: 'C', B3: 'C', B4: 'C', P1: 'C', P2: 'C', P3: 'C', P4: 'C', P5: 'C', P6: 'C', N1: 'C', N2: 'C', N3: 'C' }, naming: N },
    { name: 'Human', group: 'Anchors', step0: animal,
      items: Object.assign({}, allY, { 'S+': Y, 'I+': Y, 'U+': Y }),
      self: { B1: 'C', B2: 'C', B3: 'C', B4: 'C', P1: 'C', P2: 'C', P3: 'C', P4: 'C', P5: 'C', P6: 'C', P7: 'C', N1: 'C', N2: 'C', N3: 'C', N4: 'C', N5: 'C' }, naming: Y },
    { name: 'Common raven', group: 'Worked cases', step0: animal,
      items: Object.assign({}, allY, { 'S+': Y, 'I+': Y, 'U+': U }),
      tags: { I4: 'R', 'I+': 'R' },
      self: { B1: 'C', B4: 'R', P1: 'C', P4: 'C', P6: 'C', N1: 'C', N2: 'R', N3: 'S' }, naming: N },
    { name: 'Dog', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: P, I4: U, I5: Y, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      self: { B1: 'C', B2: 'S', B4: 'S', P1: 'C', P2: 'C', P4: 'S', P6: 'S', N1: 'C', N2: 'S' }, naming: N },
    { name: 'African elephant', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: P, I4: U, I5: Y, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      tags: { I3: 'R' },
      self: { B1: 'C', B4: 'R', P1: 'C', P2: 'C', P3: 'S', P6: 'X', N1: 'C' }, naming: Y },
    { name: 'Raccoon', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: P, I4: U, I5: Y, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      self: { B1: 'C', P1: 'C', N1: 'C' }, naming: N },
    { name: 'Octopus', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: P, S5: Y, I1: Y, I2: Y, I3: Y, I4: U, I5: Y, U1: Y, U2: Y, U3: P, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      self: { B1: 'C', B2: 'S', P1: 'C', P2: 'S', N1: 'C' }, naming: N },
    { name: 'Cleaner wrasse', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: Y, I1: Y, I2: Y, I3: P, I4: U, I5: P, U1: Y, U2: Y, U3: Y, U4: Y, U5: Y, 'S+': Y, 'I+': U, 'U+': U },
      tags: { I5: 'R' },
      self: { B1: 'C', B3: 'S', B4: 'S', P1: 'C', P2: 'C', P3: 'S', N1: 'S', N2: 'S' }, naming: N },
    { name: 'Ant (individual)', group: 'Worked cases', step0: animal,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: P, I1: Y, I2: P, I3: N, I5: P, U1: Y, U2: P, U3: Y, U4: Y, U5: P, 'S+': Y, 'I+': N, 'U+': U },
      self: { B1: 'C', P1: 'C', P2: 'R', N1: 'C' }, naming: N },
    { name: 'Language model', group: 'Constructs', step0: construct,
      items: { S1: P, S2: P, S3: N, S4: N, S5: Y, I1: U, I2: U, I3: U, I4: U, U1: U, U2: N, 'S+': N, 'I+': U, 'U+': U },
      self: {}, naming: N },
    { name: 'Computer worm', group: 'Constructs', step0: construct,
      items: { S1: P, S2: N, S3: N, S4: N, S5: P, I1: N, U1: N, 'S+': N, 'I+': N, 'U+': N },
      self: {}, naming: N },
    { name: 'Tesla', group: 'Constructs', step0: construct,
      items: { S1: Y, S2: Y, S3: Y, S4: Y, S5: P, I1: N, U1: Y, U2: P, U3: Y, U4: P, U5: P, 'S+': Y, 'I+': N, 'U+': N },
      self: {}, naming: N },
    { name: 'Model T', group: 'Constructs', step0: construct,
      items: { S1: N, S2: N, S3: N, S4: N, S5: N, I1: N, U1: N, 'S+': N, 'I+': N, 'U+': N },
      self: {}, naming: N },
    { name: 'Earth', group: 'Tier 1 system', step0: { made: N, flow: Y, recovery: Y, selfprod: N },
      items: {}, self: {}, naming: N }
  ];

  const api = { score, scoreBranch, rungRange, placeTier, bandRange, rungRangeLabel, selfState,
    RUNGS, BAND_ORDER, TRACKS, CEILING, S_ITEMS, I_LADDER, U_LADDER, STRETCH, PRESETS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SIU2 = api;
})(typeof window !== 'undefined' ? window : globalThis);
