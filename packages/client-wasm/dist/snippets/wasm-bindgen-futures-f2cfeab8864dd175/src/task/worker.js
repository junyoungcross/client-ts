onmessage = function (e) {
  let [t, a, s] = e.data;
  t = new Int32Array(t.buffer);
  let n = Atomics.wait(t, a, s);
  postMessage(n);
};
