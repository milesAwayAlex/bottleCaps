const recycle = inv => {
  const bought = Math.trunc(inv / 2);
  const state = {
    total: bought,
    bottles: bought,
    caps: bought,
    earned: {b: 0, c: 0},
  };
  const recycle = st => {
    st = JSON.parse(JSON.stringify(st));
    if (st.bottles > 1) {
      st.total++;
      st.bottles--;
      st.caps++;
      st.earned.b++;
      return recycle(st);
    }
    if (st.caps > 3) {
      st.total++;
      st.bottles++;
      st.caps -= 3;
      st.earned.c++;
      return recycle(st);
    }
    return st;
  };
  return recycle(state);
};
export default recycle;

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
