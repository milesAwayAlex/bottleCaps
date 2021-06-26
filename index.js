const recycle = inv => {
  const bought = Math.trunc(inv / 2);
  // initialize the state
  const state = {
    total: bought,
    bottles: bought,
    caps: bought,
    earned: {b: 0, c: 0},
  };
  const recycle = st => {
    // copy state to maintain purity
    st = JSON.parse(JSON.stringify(st));
    // recycle two bottles and start over
    if (st.bottles > 1) {
      st.total++;
      st.bottles--;
      st.caps++;
      st.earned.b++;
      return recycle(st);
    }
    // recycle four caps and start over
    if (st.caps > 3) {
      st.total++;
      st.bottles++;
      st.caps -= 3;
      st.earned.c++;
      return recycle(st);
    }
    // nothing to recycle - done
    return st;
  };
  return recycle(state);
};
export default recycle;

// if a number is passed as an argument
if (+process.argv[2]) {
  const st = recycle(+process.argv[2]);
  console.info(`
TOTAL BOTTLES: ${st.total}
REMAINING BOTTLES: ${st.bottles}
REMAINING CAPS: ${st.caps}
TOTAL EARNED:
  BOTTLES: ${st.earned.b}
  CAPS: ${st.earned.c}`);
}
