import { startWorker } from "./snippets/browser-async-executor-b51ed65827bac93b/src/worker.js";
import { websocket_transport } from "./snippets/libp2p-wasm-ext-7e5f5edb880ee0f5/src/websockets.js";
let wasm;
const cachedTextDecoder =
  "undefined" != typeof TextDecoder
    ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
    : {
        decode: () => {
          throw Error("TextDecoder not available");
        },
      };
"undefined" != typeof TextDecoder && cachedTextDecoder.decode();
let cachedUint8Memory0 = null;
function getUint8Memory0() {
  return (
    (null !== cachedUint8Memory0 &&
      cachedUint8Memory0.buffer === wasm.memory.buffer) ||
      (cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer)),
    cachedUint8Memory0
  );
}
function getStringFromWasm0(e, t) {
  return (
    (e >>>= 0), cachedTextDecoder.decode(getUint8Memory0().slice(e, e + t))
  );
}
const heap = new Array(128).fill(void 0);
heap.push(void 0, null, !0, !1);
let heap_next = heap.length;
function addHeapObject(e) {
  heap_next === heap.length && heap.push(heap.length + 1);
  const t = heap_next;
  return (heap_next = heap[t]), (heap[t] = e), t;
}
function getObject(e) {
  return heap[e];
}
function dropObject(e) {
  e < 132 || ((heap[e] = heap_next), (heap_next = e));
}
function takeObject(e) {
  const t = getObject(e);
  return dropObject(e), t;
}
let WASM_VECTOR_LEN = 0;
const cachedTextEncoder =
    "undefined" != typeof TextEncoder
      ? new TextEncoder("utf-8")
      : {
          encode: () => {
            throw Error("TextEncoder not available");
          },
        },
  encodeString = function (e, t) {
    const n = cachedTextEncoder.encode(e);
    return t.set(n), { read: e.length, written: n.length };
  };
function passStringToWasm0(e, t, n) {
  if (void 0 === n) {
    const n = cachedTextEncoder.encode(e),
      _ = t(n.length, 1) >>> 0;
    return (
      getUint8Memory0()
        .subarray(_, _ + n.length)
        .set(n),
      (WASM_VECTOR_LEN = n.length),
      _
    );
  }
  let _ = e.length,
    r = t(_, 1) >>> 0;
  const a = getUint8Memory0();
  let i = 0;
  for (; i < _; i++) {
    const t = e.charCodeAt(i);
    if (t > 127) break;
    a[r + i] = t;
  }
  if (i !== _) {
    0 !== i && (e = e.slice(i)), (r = n(r, _, (_ = i + 3 * e.length), 1) >>> 0);
    const t = getUint8Memory0().subarray(r + i, r + _);
    (i += encodeString(e, t).written), (r = n(r, _, i, 1) >>> 0);
  }
  return (WASM_VECTOR_LEN = i), r;
}
function isLikeNone(e) {
  return null == e;
}
let cachedInt32Memory0 = null;
function getInt32Memory0() {
  return (
    (null !== cachedInt32Memory0 &&
      cachedInt32Memory0.buffer === wasm.memory.buffer) ||
      (cachedInt32Memory0 = new Int32Array(wasm.memory.buffer)),
    cachedInt32Memory0
  );
}
let cachedFloat64Memory0 = null;
function getFloat64Memory0() {
  return (
    (null !== cachedFloat64Memory0 &&
      cachedFloat64Memory0.buffer === wasm.memory.buffer) ||
      (cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer)),
    cachedFloat64Memory0
  );
}
function debugString(e) {
  const t = typeof e;
  if ("number" == t || "boolean" == t || null == e) return `${e}`;
  if ("string" == t) return `"${e}"`;
  if ("symbol" == t) {
    const t = e.description;
    return null == t ? "Symbol" : `Symbol(${t})`;
  }
  if ("function" == t) {
    const t = e.name;
    return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function";
  }
  if (Array.isArray(e)) {
    const t = e.length;
    let n = "[";
    t > 0 && (n += debugString(e[0]));
    for (let _ = 1; _ < t; _++) n += ", " + debugString(e[_]);
    return (n += "]"), n;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
  let _;
  if (!(n.length > 1)) return toString.call(e);
  if (((_ = n[1]), "Object" == _))
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch (e) {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : _;
}
const CLOSURE_DTORS =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => {
        wasm.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
      });
function makeMutClosure(e, t, n, _) {
  const r = { a: e, b: t, cnt: 1, dtor: n },
    a = (...e) => {
      r.cnt++;
      const t = r.a;
      r.a = 0;
      try {
        return _(t, r.b, ...e);
      } finally {
        0 == --r.cnt
          ? (wasm.__wbindgen_export_3.get(r.dtor)(t, r.b),
            CLOSURE_DTORS.unregister(r))
          : (r.a = t);
      }
    };
  return (a.original = r), CLOSURE_DTORS.register(a, r, r), a;
}
function __wbg_adapter_44(e, t, n) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4c39054f7f82e995(
    e,
    t,
    addHeapObject(n),
  );
}
function __wbg_adapter_49(e, t) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5666368b3099f94b(
    e,
    t,
  );
}
export function worker_entry_point(e) {
  wasm.worker_entry_point(e);
}
function handleError(e, t) {
  try {
    return e.apply(this, t);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function __wbg_adapter_152(e, t, n, _) {
  wasm.wasm_bindgen__convert__closures__invoke2_mut__h9ad06f9448a06267(
    e,
    t,
    addHeapObject(n),
    addHeapObject(_),
  );
}
function getArrayU8FromWasm0(e, t) {
  return (e >>>= 0), getUint8Memory0().subarray(e / 1, e / 1 + t);
}
let cachedUint32Memory0 = null;
function getUint32Memory0() {
  return (
    (null !== cachedUint32Memory0 &&
      cachedUint32Memory0.buffer === wasm.memory.buffer) ||
      (cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer)),
    cachedUint32Memory0
  );
}
function passArrayJsValueToWasm0(e, t) {
  const n = t(4 * e.length, 4) >>> 0,
    _ = getUint32Memory0();
  for (let t = 0; t < e.length; t++) _[n / 4 + t] = addHeapObject(e[t]);
  return (WASM_VECTOR_LEN = e.length), n;
}
function passArray8ToWasm0(e, t) {
  const n = t(1 * e.length, 1) >>> 0;
  return getUint8Memory0().set(e, n / 1), (WASM_VECTOR_LEN = e.length), n;
}
function _assertClass(e, t) {
  if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return e.ptr;
}
const ClusterDescriptorFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) =>
        wasm.__wbg_clusterdescriptor_free(e >>> 0),
      );
export class ClusterDescriptor {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(ClusterDescriptor.prototype);
    return (
      (t.__wbg_ptr = e),
      ClusterDescriptorFinalization.register(t, t.__wbg_ptr, t),
      t
    );
  }
  toJSON() {
    return {
      id: this.id,
      parties: this.parties,
      prime: this.prime,
      kappa: this.kappa,
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (
      (this.__wbg_ptr = 0), ClusterDescriptorFinalization.unregister(this), e
    );
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_clusterdescriptor_free(e);
  }
  get id() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.clusterdescriptor_id(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get parties() {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.clusterdescriptor_parties(n, this.__wbg_ptr);
      var e = getInt32Memory0()[n / 4 + 0],
        t = getInt32Memory0()[n / 4 + 1];
      if (getInt32Memory0()[n / 4 + 2]) throw takeObject(t);
      return takeObject(e);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get prime() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.clusterdescriptor_prime(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get kappa() {
    return wasm.clusterdescriptor_kappa(this.__wbg_ptr) >>> 0;
  }
}
const LoaderHelperFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_loaderhelper_free(e >>> 0));
export class LoaderHelper {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(LoaderHelper.prototype);
    return (
      (t.__wbg_ptr = e), LoaderHelperFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), LoaderHelperFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_loaderhelper_free(e);
  }
  mainJS() {
    return takeObject(wasm.loaderhelper_mainJS(this.__wbg_ptr));
  }
}
const NadaValueFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_nadavalue_free(e >>> 0));
export class NadaValue {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(NadaValue.prototype);
    return (
      (t.__wbg_ptr = e), NadaValueFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), NadaValueFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_nadavalue_free(e);
  }
  static new_secret_integer(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.nadavalue_new_secret_integer(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return NadaValue.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static new_secret_unsigned_integer(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.nadavalue_new_secret_unsigned_integer(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return NadaValue.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static new_secret_blob(e) {
    const t = passArray8ToWasm0(e, wasm.__wbindgen_malloc),
      n = WASM_VECTOR_LEN,
      _ = wasm.nadavalue_new_secret_blob(t, n);
    return NadaValue.__wrap(_);
  }
  static new_public_integer(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.nadavalue_new_public_integer(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return NadaValue.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static new_public_unsigned_integer(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.nadavalue_new_public_unsigned_integer(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return NadaValue.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  to_byte_array() {
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nadavalue_to_byte_array(r, this.__wbg_ptr);
      var e = getInt32Memory0()[r / 4 + 0],
        t = getInt32Memory0()[r / 4 + 1],
        n = getInt32Memory0()[r / 4 + 2];
      if (getInt32Memory0()[r / 4 + 3]) throw takeObject(n);
      var _ = getArrayU8FromWasm0(e, t).slice();
      return wasm.__wbindgen_free(e, 1 * t, 1), _;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  to_integer() {
    let e, t;
    try {
      const s = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nadavalue_to_integer(s, this.__wbg_ptr);
      var n = getInt32Memory0()[s / 4 + 0],
        _ = getInt32Memory0()[s / 4 + 1],
        r = getInt32Memory0()[s / 4 + 2],
        a = getInt32Memory0()[s / 4 + 3],
        i = n,
        o = _;
      if (a) throw ((i = 0), (o = 0), takeObject(r));
      return (e = i), (t = o), getStringFromWasm0(i, o);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
}
const NadaValuesFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_nadavalues_free(e >>> 0));
export class NadaValues {
  toJSON() {
    return { length: this.length };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), NadaValuesFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_nadavalues_free(e);
  }
  constructor() {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nadavalues_new(n);
      var e = getInt32Memory0()[n / 4 + 0],
        t = getInt32Memory0()[n / 4 + 1];
      if (getInt32Memory0()[n / 4 + 2]) throw takeObject(t);
      return (this.__wbg_ptr = e >>> 0), this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  insert(e, t) {
    const n = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN;
    _assertClass(t, NadaValue),
      wasm.nadavalues_insert(this.__wbg_ptr, n, _, t.__wbg_ptr);
  }
  get length() {
    return wasm.nadavalues_length(this.__wbg_ptr) >>> 0;
  }
}
const NillionClientFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_nillionclient_free(e >>> 0));
export class NillionClient {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), NillionClientFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_nillionclient_free(e);
  }
  constructor(e, t, n) {
    try {
      const o = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(e, UserKey);
      var _ = e.__destroy_into_raw();
      _assertClass(t, NodeKey);
      var r = t.__destroy_into_raw();
      const s = passArrayJsValueToWasm0(n, wasm.__wbindgen_malloc),
        c = WASM_VECTOR_LEN;
      wasm.nillionclient_new(o, _, r, s, c);
      var a = getInt32Memory0()[o / 4 + 0],
        i = getInt32Memory0()[o / 4 + 1];
      if (getInt32Memory0()[o / 4 + 2]) throw takeObject(i);
      return (this.__wbg_ptr = a >>> 0), this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static enable_remote_logging() {
    wasm.nillionclient_enable_remote_logging();
  }
  get party_id() {
    let e, t;
    try {
      const s = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nillionclient_party_id(s, this.__wbg_ptr);
      var n = getInt32Memory0()[s / 4 + 0],
        _ = getInt32Memory0()[s / 4 + 1],
        r = getInt32Memory0()[s / 4 + 2],
        a = getInt32Memory0()[s / 4 + 3],
        i = n,
        o = _;
      if (a) throw ((i = 0), (o = 0), takeObject(r));
      return (e = i), (t = o), getStringFromWasm0(i, o);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get user_id() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nillionclient_user_id(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  store_values(e, t, n, _) {
    const r = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      a = WASM_VECTOR_LEN;
    _assertClass(t, NadaValues);
    let i = 0;
    return (
      isLikeNone(n) ||
        (_assertClass(n, Permissions), (i = n.__destroy_into_raw())),
      _assertClass(_, PaymentReceipt),
      takeObject(
        wasm.nillionclient_store_values(
          this.__wbg_ptr,
          r,
          a,
          t.__wbg_ptr,
          i,
          _.__wbg_ptr,
        ),
      )
    );
  }
  retrieve_value(e, t, n, _) {
    const r = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      a = WASM_VECTOR_LEN,
      i = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      o = WASM_VECTOR_LEN,
      s = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      c = WASM_VECTOR_LEN;
    return (
      _assertClass(_, PaymentReceipt),
      takeObject(
        wasm.nillionclient_retrieve_value(
          this.__wbg_ptr,
          r,
          a,
          i,
          o,
          s,
          c,
          _.__wbg_ptr,
        ),
      )
    );
  }
  update_values(e, t, n, _) {
    const r = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      a = WASM_VECTOR_LEN,
      i = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      o = WASM_VECTOR_LEN;
    return (
      _assertClass(n, NadaValues),
      _assertClass(_, PaymentReceipt),
      takeObject(
        wasm.nillionclient_update_values(
          this.__wbg_ptr,
          r,
          a,
          i,
          o,
          n.__wbg_ptr,
          _.__wbg_ptr,
        ),
      )
    );
  }
  delete_values(e, t) {
    const n = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN,
      r = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      a = WASM_VECTOR_LEN;
    return takeObject(
      wasm.nillionclient_delete_values(this.__wbg_ptr, n, _, r, a),
    );
  }
  compute(e, t, n, _, r) {
    const a = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      i = WASM_VECTOR_LEN;
    _assertClass(t, ProgramBindings);
    const o = passArrayJsValueToWasm0(n, wasm.__wbindgen_malloc),
      s = WASM_VECTOR_LEN;
    return (
      _assertClass(_, NadaValues),
      _assertClass(r, PaymentReceipt),
      takeObject(
        wasm.nillionclient_compute(
          this.__wbg_ptr,
          a,
          i,
          t.__wbg_ptr,
          o,
          s,
          _.__wbg_ptr,
          r.__wbg_ptr,
        ),
      )
    );
  }
  compute_result(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN;
    return takeObject(wasm.nillionclient_compute_result(this.__wbg_ptr, t, n));
  }
  retrieve_permissions(e, t, n) {
    const _ = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      r = WASM_VECTOR_LEN,
      a = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      i = WASM_VECTOR_LEN;
    return (
      _assertClass(n, PaymentReceipt),
      takeObject(
        wasm.nillionclient_retrieve_permissions(
          this.__wbg_ptr,
          _,
          r,
          a,
          i,
          n.__wbg_ptr,
        ),
      )
    );
  }
  update_permissions(e, t, n, _) {
    const r = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      a = WASM_VECTOR_LEN,
      i = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      o = WASM_VECTOR_LEN;
    return (
      _assertClass(n, Permissions),
      _assertClass(_, PaymentReceipt),
      takeObject(
        wasm.nillionclient_update_permissions(
          this.__wbg_ptr,
          r,
          a,
          i,
          o,
          n.__wbg_ptr,
          _.__wbg_ptr,
        ),
      )
    );
  }
  store_program(e, t, n, _) {
    const r = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      a = WASM_VECTOR_LEN,
      i = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      o = WASM_VECTOR_LEN,
      s = passArray8ToWasm0(n, wasm.__wbindgen_malloc),
      c = WASM_VECTOR_LEN;
    return (
      _assertClass(_, PaymentReceipt),
      takeObject(
        wasm.nillionclient_store_program(
          this.__wbg_ptr,
          r,
          a,
          i,
          o,
          s,
          c,
          _.__wbg_ptr,
        ),
      )
    );
  }
  request_price_quote(e, t) {
    const n = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN;
    return (
      _assertClass(t, Operation),
      takeObject(
        wasm.nillionclient_request_price_quote(
          this.__wbg_ptr,
          n,
          _,
          t.__wbg_ptr,
        ),
      )
    );
  }
  cluster_information(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN;
    return takeObject(
      wasm.nillionclient_cluster_information(this.__wbg_ptr, t, n),
    );
  }
  static enable_tracking(e) {
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      var t = isLikeNone(e)
          ? 0
          : passStringToWasm0(
              e,
              wasm.__wbindgen_malloc,
              wasm.__wbindgen_realloc,
            ),
        n = WASM_VECTOR_LEN;
      wasm.nillionclient_enable_tracking(r, t, n);
      var _ = getInt32Memory0()[r / 4 + 0];
      if (getInt32Memory0()[r / 4 + 1]) throw takeObject(_);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static get build_version() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.nillionclient_build_version(r);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
}
const NodeKeyFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_nodekey_free(e >>> 0));
export class NodeKey {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(NodeKey.prototype);
    return (
      (t.__wbg_ptr = e), NodeKeyFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), NodeKeyFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_nodekey_free(e);
  }
  static from_seed(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN,
      _ = wasm.nodekey_from_seed(t, n);
    return NodeKey.__wrap(_);
  }
  static from_base58(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN,
      _ = wasm.nodekey_from_base58(t, n);
    return NodeKey.__wrap(_);
  }
}
const OperationFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_operation_free(e >>> 0));
export class Operation {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(Operation.prototype);
    return (
      (t.__wbg_ptr = e), OperationFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), OperationFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_operation_free(e);
  }
  static store_values(e, t) {
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(e, NadaValues),
        wasm.operation_store_values(r, e.__wbg_ptr, t);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      if (getInt32Memory0()[r / 4 + 2]) throw takeObject(_);
      return Operation.__wrap(n);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static update_values(e, t) {
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(e, NadaValues),
        wasm.operation_update_values(r, e.__wbg_ptr, t);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      if (getInt32Memory0()[r / 4 + 2]) throw takeObject(_);
      return Operation.__wrap(n);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static compute(e, t) {
    const n = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN;
    _assertClass(t, NadaValues);
    const r = wasm.operation_compute(n, _, t.__wbg_ptr);
    return Operation.__wrap(r);
  }
  static retrieve_value() {
    const e = wasm.operation_retrieve_value();
    return Operation.__wrap(e);
  }
  static store_program(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passArray8ToWasm0(e, wasm.__wbindgen_malloc),
        a = WASM_VECTOR_LEN;
      wasm.operation_store_program(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return Operation.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static retrieve_permissions() {
    const e = wasm.operation_retrieve_permissions();
    return Operation.__wrap(e);
  }
  static update_permissions() {
    const e = wasm.operation_update_permissions();
    return Operation.__wrap(e);
  }
}
const OperationCostFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_operationcost_free(e >>> 0));
export class OperationCost {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(OperationCost.prototype);
    return (
      (t.__wbg_ptr = e),
      OperationCostFinalization.register(t, t.__wbg_ptr, t),
      t
    );
  }
  toJSON() {
    return {
      base_fee: this.base_fee,
      congestion_fee: this.congestion_fee,
      storage_fee: this.storage_fee,
      preprocessing_fee: this.preprocessing_fee,
      compute_fee: this.compute_fee,
      total: this.total,
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), OperationCostFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_operationcost_free(e);
  }
  get base_fee() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_base_fee(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get congestion_fee() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_congestion_fee(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get storage_fee() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_storage_fee(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get preprocessing_fee() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_preprocessing_fee(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get compute_fee() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_compute_fee(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  get total() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.operationcost_total(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
}
const PaymentReceiptFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_paymentreceipt_free(e >>> 0));
export class PaymentReceipt {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), PaymentReceiptFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_paymentreceipt_free(e);
  }
  constructor(e, t) {
    _assertClass(e, PriceQuote);
    const n = passStringToWasm0(
        t,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN,
      r = wasm.paymentreceipt_new(e.__wbg_ptr, n, _);
    return (this.__wbg_ptr = r >>> 0), this;
  }
}
const PermissionsFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_permissions_free(e >>> 0));
export class Permissions {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(Permissions.prototype);
    return (
      (t.__wbg_ptr = e), PermissionsFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), PermissionsFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_permissions_free(e);
  }
  constructor() {
    const e = wasm.permissions_new();
    return (this.__wbg_ptr = e >>> 0), this;
  }
  static default_for_user(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN,
      _ = wasm.permissions_default_for_user(t, n);
    return Permissions.__wrap(_);
  }
  add_retrieve_permissions(e) {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16),
        _ = passArrayJsValueToWasm0(e, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      wasm.permissions_add_retrieve_permissions(n, this.__wbg_ptr, _, r);
      var t = getInt32Memory0()[n / 4 + 0];
      if (getInt32Memory0()[n / 4 + 1]) throw takeObject(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  add_update_permissions(e) {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16),
        _ = passArrayJsValueToWasm0(e, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      wasm.permissions_add_update_permissions(n, this.__wbg_ptr, _, r);
      var t = getInt32Memory0()[n / 4 + 0];
      if (getInt32Memory0()[n / 4 + 1]) throw takeObject(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  add_delete_permissions(e) {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16),
        _ = passArrayJsValueToWasm0(e, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      wasm.permissions_add_delete_permissions(n, this.__wbg_ptr, _, r);
      var t = getInt32Memory0()[n / 4 + 0];
      if (getInt32Memory0()[n / 4 + 1]) throw takeObject(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  add_compute_permissions(e) {
    try {
      const n = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.permissions_add_compute_permissions(
        n,
        this.__wbg_ptr,
        addHeapObject(e),
      );
      var t = getInt32Memory0()[n / 4 + 0];
      if (getInt32Memory0()[n / 4 + 1]) throw takeObject(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  is_retrieve_allowed(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN;
    return 0 !== wasm.permissions_is_retrieve_allowed(this.__wbg_ptr, t, n);
  }
  is_update_allowed(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN;
    return 0 !== wasm.permissions_is_update_allowed(this.__wbg_ptr, t, n);
  }
  is_delete_allowed(e) {
    const t = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      n = WASM_VECTOR_LEN;
    return 0 !== wasm.permissions_is_delete_allowed(this.__wbg_ptr, t, n);
  }
  is_compute_allowed(e, t) {
    const n = passStringToWasm0(
        e,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc,
      ),
      _ = WASM_VECTOR_LEN,
      r = passStringToWasm0(t, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc),
      a = WASM_VECTOR_LEN;
    return (
      0 !== wasm.permissions_is_compute_allowed(this.__wbg_ptr, n, _, r, a)
    );
  }
}
const PreprocessingProtocolConfigFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) =>
        wasm.__wbg_preprocessingprotocolconfig_free(e >>> 0),
      );
export class PreprocessingProtocolConfig {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (
      (this.__wbg_ptr = 0),
      PreprocessingProtocolConfigFinalization.unregister(this),
      e
    );
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_preprocessingprotocolconfig_free(e);
  }
  get batch_size() {
    return wasm.preprocessingprotocolconfig_batch_size(this.__wbg_ptr) >>> 0;
  }
}
const PriceQuoteFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_pricequote_free(e >>> 0));
export class PriceQuote {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(PriceQuote.prototype);
    return (
      (t.__wbg_ptr = e), PriceQuoteFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  toJSON() {
    return { expires_at: this.expires_at, cost: this.cost, nonce: this.nonce };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), PriceQuoteFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_pricequote_free(e);
  }
  get expires_at() {
    return takeObject(wasm.pricequote_expires_at(this.__wbg_ptr));
  }
  get cost() {
    const e = wasm.pricequote_cost(this.__wbg_ptr);
    return OperationCost.__wrap(e);
  }
  get nonce() {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.pricequote_nonce(_, this.__wbg_ptr);
      var e = getInt32Memory0()[_ / 4 + 0],
        t = getInt32Memory0()[_ / 4 + 1],
        n = getArrayU8FromWasm0(e, t).slice();
      return wasm.__wbindgen_free(e, 1 * t, 1), n;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const ProgramBindingsFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_programbindings_free(e >>> 0));
export class ProgramBindings {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (
      (this.__wbg_ptr = 0), ProgramBindingsFinalization.unregister(this), e
    );
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_programbindings_free(e);
  }
  constructor(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.programbindings_new(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return (this.__wbg_ptr = t >>> 0), this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  add_input_party(e, t) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN,
        i = passStringToWasm0(
          t,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        o = WASM_VECTOR_LEN;
      wasm.programbindings_add_input_party(_, this.__wbg_ptr, r, a, i, o);
      var n = getInt32Memory0()[_ / 4 + 0];
      if (getInt32Memory0()[_ / 4 + 1]) throw takeObject(n);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  add_output_party(e, t) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN,
        i = passStringToWasm0(
          t,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        o = WASM_VECTOR_LEN;
      wasm.programbindings_add_output_party(_, this.__wbg_ptr, r, a, i, o);
      var n = getInt32Memory0()[_ / 4 + 0];
      if (getInt32Memory0()[_ / 4 + 1]) throw takeObject(n);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const UserKeyFinalization =
  "undefined" == typeof FinalizationRegistry
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((e) => wasm.__wbg_userkey_free(e >>> 0));
export class UserKey {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(UserKey.prototype);
    return (
      (t.__wbg_ptr = e), UserKeyFinalization.register(t, t.__wbg_ptr, t), t
    );
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), UserKeyFinalization.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    wasm.__wbg_userkey_free(e);
  }
  static generate() {
    const e = wasm.userkey_generate();
    return UserKey.__wrap(e);
  }
  static from_seed(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.userkey_from_seed(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return UserKey.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  public_key() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.userkey_public_key(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
  static from_base58(e) {
    try {
      const _ = wasm.__wbindgen_add_to_stack_pointer(-16),
        r = passStringToWasm0(
          e,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        a = WASM_VECTOR_LEN;
      wasm.userkey_from_base58(_, r, a);
      var t = getInt32Memory0()[_ / 4 + 0],
        n = getInt32Memory0()[_ / 4 + 1];
      if (getInt32Memory0()[_ / 4 + 2]) throw takeObject(n);
      return UserKey.__wrap(t);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  to_base58() {
    let e, t;
    try {
      const r = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.userkey_to_base58(r, this.__wbg_ptr);
      var n = getInt32Memory0()[r / 4 + 0],
        _ = getInt32Memory0()[r / 4 + 1];
      return (e = n), (t = _), getStringFromWasm0(n, _);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, t, 1);
    }
  }
}
async function __wbg_load(e, t) {
  if ("function" == typeof Response && e instanceof Response) {
    if ("function" == typeof WebAssembly.instantiateStreaming)
      try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (t) {
        if ("application/wasm" == e.headers.get("Content-Type")) throw t;
        console.warn(
          "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
          t,
        );
      }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  }
  {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function __wbg_get_imports() {
  const e = { wbg: {} };
  return (
    (e.wbg.__wbg_new_72fb9a18b5ae2624 = function () {
      return addHeapObject(new Object());
    }),
    (e.wbg.__wbindgen_string_new = function (e, t) {
      return addHeapObject(getStringFromWasm0(e, t));
    }),
    (e.wbg.__wbg_set_1f9b04f170055d33 = function () {
      return handleError(function (e, t, n) {
        return Reflect.set(getObject(e), getObject(t), getObject(n));
      }, arguments);
    }),
    (e.wbg.__wbindgen_object_drop_ref = function (e) {
      takeObject(e);
    }),
    (e.wbg.__wbindgen_module = function () {
      return addHeapObject(__wbg_init.__wbindgen_wasm_module);
    }),
    (e.wbg.__wbindgen_memory = function () {
      return addHeapObject(wasm.memory);
    }),
    (e.wbg.__wbindgen_number_new = function (e) {
      return addHeapObject(e);
    }),
    (e.wbg.__wbg_startWorker_999d186cbabd739c = function (e, t, n, _, r) {
      return addHeapObject(
        startWorker(
          takeObject(e),
          takeObject(t),
          takeObject(n),
          takeObject(_),
          LoaderHelper.__wrap(r),
        ),
      );
    }),
    (e.wbg.__wbindgen_object_clone_ref = function (e) {
      return addHeapObject(getObject(e));
    }),
    (e.wbg.__wbg_name_c1b921b610dd2f64 = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).name,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_close_e37e2399b189a4cd = function (e) {
      getObject(e).close();
    }),
    (e.wbg.__wbg_static_accessor_URL_1a7ae0d56f4d6839 = function () {
      return addHeapObject(import.meta.url);
    }),
    (e.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function () {
      return addHeapObject(new Date());
    }),
    (e.wbg.__wbg_getTime_2bc4375165f02d15 = function (e) {
      return getObject(e).getTime();
    }),
    (e.wbg.__wbg_getItem_164e8e5265095b87 = function () {
      return handleError(function (e, t, n, _) {
        const r = getObject(t).getItem(getStringFromWasm0(n, _));
        var a = isLikeNone(r)
            ? 0
            : passStringToWasm0(
                r,
                wasm.__wbindgen_malloc,
                wasm.__wbindgen_realloc,
              ),
          i = WASM_VECTOR_LEN;
        (getInt32Memory0()[e / 4 + 1] = i), (getInt32Memory0()[e / 4 + 0] = a);
      }, arguments);
    }),
    (e.wbg.__wbg_instanceof_Window_f401953a2cf86220 = function (e) {
      let t;
      try {
        t = getObject(e) instanceof Window;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_localStorage_e381d34d0c40c761 = function () {
      return handleError(function (e) {
        const t = getObject(e).localStorage;
        return isLikeNone(t) ? 0 : addHeapObject(t);
      }, arguments);
    }),
    (e.wbg.__wbg_setItem_ba2bb41d73dac079 = function () {
      return handleError(function (e, t, n, _, r) {
        getObject(e).setItem(
          getStringFromWasm0(t, n),
          getStringFromWasm0(_, r),
        );
      }, arguments);
    }),
    (e.wbg.__wbindgen_cb_drop = function (e) {
      const t = takeObject(e).original;
      return 1 == t.cnt-- && ((t.a = 0), !0);
    }),
    (e.wbg.__wbg_abort_2aa7521d5690750e = function (e) {
      getObject(e).abort();
    }),
    (e.wbg.__wbg_now_3014639a94423537 = function () {
      return Date.now();
    }),
    (e.wbg.__wbg_new_ab6fd82b10560829 = function () {
      return handleError(function () {
        return addHeapObject(new Headers());
      }, arguments);
    }),
    (e.wbg.__wbg_new_0d76b0581eca6298 = function () {
      return handleError(function () {
        return addHeapObject(new AbortController());
      }, arguments);
    }),
    (e.wbg.__wbg_signal_a61f78a3478fd9bc = function (e) {
      return addHeapObject(getObject(e).signal);
    }),
    (e.wbg.__wbg_append_7bfcb4937d1d5e29 = function () {
      return handleError(function (e, t, n, _, r) {
        getObject(e).append(getStringFromWasm0(t, n), getStringFromWasm0(_, r));
      }, arguments);
    }),
    (e.wbg.__wbg_instanceof_Response_849eb93e75734b6e = function (e) {
      let t;
      try {
        t = getObject(e) instanceof Response;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_status_61a01141acd3cf74 = function (e) {
      return getObject(e).status;
    }),
    (e.wbg.__wbg_headers_9620bfada380764a = function (e) {
      return addHeapObject(getObject(e).headers);
    }),
    (e.wbg.__wbg_next_196c84450b364254 = function () {
      return handleError(function (e) {
        return addHeapObject(getObject(e).next());
      }, arguments);
    }),
    (e.wbg.__wbg_done_298b57d23c0fc80c = function (e) {
      return getObject(e).done;
    }),
    (e.wbg.__wbg_value_d93c65011f51a456 = function (e) {
      return addHeapObject(getObject(e).value);
    }),
    (e.wbg.__wbg_stringify_8887fe74e1c50d81 = function () {
      return handleError(function (e) {
        return addHeapObject(JSON.stringify(getObject(e)));
      }, arguments);
    }),
    (e.wbg.__wbindgen_string_get = function (e, t) {
      const n = getObject(t),
        _ = "string" == typeof n ? n : void 0;
      var r = isLikeNone(_)
          ? 0
          : passStringToWasm0(
              _,
              wasm.__wbindgen_malloc,
              wasm.__wbindgen_realloc,
            ),
        a = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = a), (getInt32Memory0()[e / 4 + 0] = r);
    }),
    (e.wbg.__wbg_text_450a059667fd91fd = function () {
      return handleError(function (e) {
        return addHeapObject(getObject(e).text());
      }, arguments);
    }),
    (e.wbg.__wbg_new_abda76e883ba8a5f = function () {
      return addHeapObject(new Error());
    }),
    (e.wbg.__wbg_stack_658279fe44541cf6 = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).stack,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_error_f851667af71bcfc6 = function (e, t) {
      let n, _;
      try {
        (n = e), (_ = t), console.error(getStringFromWasm0(e, t));
      } finally {
        wasm.__wbindgen_free(n, _, 1);
      }
    }),
    (e.wbg.__wbg_buffer_12d079cc21e14bdb = function (e) {
      return addHeapObject(getObject(e).buffer);
    }),
    (e.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function (
      e,
      t,
      n,
    ) {
      return addHeapObject(new Uint8Array(getObject(e), t >>> 0, n >>> 0));
    }),
    (e.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
      return handleError(function (e, t) {
        getObject(e).randomFillSync(takeObject(t));
      }, arguments);
    }),
    (e.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = function (e, t, n) {
      return addHeapObject(getObject(e).subarray(t >>> 0, n >>> 0));
    }),
    (e.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
      return handleError(function (e, t) {
        getObject(e).getRandomValues(getObject(t));
      }, arguments);
    }),
    (e.wbg.__wbg_crypto_1d1f22824a6a080c = function (e) {
      return addHeapObject(getObject(e).crypto);
    }),
    (e.wbg.__wbindgen_is_object = function (e) {
      const t = getObject(e);
      return "object" == typeof t && null !== t;
    }),
    (e.wbg.__wbg_process_4a72847cc503995b = function (e) {
      return addHeapObject(getObject(e).process);
    }),
    (e.wbg.__wbg_versions_f686565e586dd935 = function (e) {
      return addHeapObject(getObject(e).versions);
    }),
    (e.wbg.__wbg_node_104a2ff8d6ea03a2 = function (e) {
      return addHeapObject(getObject(e).node);
    }),
    (e.wbg.__wbindgen_is_string = function (e) {
      return "string" == typeof getObject(e);
    }),
    (e.wbg.__wbg_require_cca90b1a94a0255b = function () {
      return handleError(function () {
        return addHeapObject(module.require);
      }, arguments);
    }),
    (e.wbg.__wbindgen_is_function = function (e) {
      return "function" == typeof getObject(e);
    }),
    (e.wbg.__wbg_call_b3ca7c6051f9bec1 = function () {
      return handleError(function (e, t, n) {
        return addHeapObject(getObject(e).call(getObject(t), getObject(n)));
      }, arguments);
    }),
    (e.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (e) {
      return addHeapObject(getObject(e).msCrypto);
    }),
    (e.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function (e) {
      return addHeapObject(new Uint8Array(e >>> 0));
    }),
    (e.wbg.__wbg_code_5ee5dcc2842228cd = function (e) {
      return getObject(e).code;
    }),
    (e.wbg.__wbg_reason_5ed6709323849cb1 = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).reason,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_wasClean_8222e9acf5c5ad07 = function (e) {
      return getObject(e).wasClean;
    }),
    (e.wbg.__wbg_data_3ce7c145ca4fbcdc = function (e) {
      return addHeapObject(getObject(e).data);
    }),
    (e.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function (e) {
      let t;
      try {
        t = getObject(e) instanceof ArrayBuffer;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_new_63b92bc8671ed464 = function (e) {
      return addHeapObject(new Uint8Array(getObject(e)));
    }),
    (e.wbg.__wbg_send_70603dff16b81b66 = function () {
      return handleError(function (e, t, n) {
        getObject(e).send(getStringFromWasm0(t, n));
      }, arguments);
    }),
    (e.wbg.__wbg_send_5fcd7bab9777194e = function () {
      return handleError(function (e, t, n) {
        getObject(e).send(getArrayU8FromWasm0(t, n));
      }, arguments);
    }),
    (e.wbg.__wbg_instanceof_Error_e20bb56fd5591a93 = function (e) {
      let t;
      try {
        t = getObject(e) instanceof Error;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_name_e7429f0dda6079e2 = function (e) {
      return addHeapObject(getObject(e).name);
    }),
    (e.wbg.__wbg_message_5bf28016c2b49cfb = function (e) {
      return addHeapObject(getObject(e).message);
    }),
    (e.wbg.__wbg_toString_ffe4c9ea3b3532e9 = function (e) {
      return addHeapObject(getObject(e).toString());
    }),
    (e.wbg.__wbg_setTimeout_75cb9b6991a4031d = function () {
      return handleError(function (e, t) {
        return addHeapObject(setTimeout(getObject(e), t));
      }, arguments);
    }),
    (e.wbg.__wbg_get_e3c254076557e348 = function () {
      return handleError(function (e, t) {
        return addHeapObject(Reflect.get(getObject(e), getObject(t)));
      }, arguments);
    }),
    (e.wbg.__wbg_now_4e659b3d15f470d9 = function (e) {
      return getObject(e).now();
    }),
    (e.wbg.__wbg_iterator_2cee6dadfd956dfa = function () {
      return addHeapObject(Symbol.iterator);
    }),
    (e.wbg.__wbg_call_27c0f87801dedf93 = function () {
      return handleError(function (e, t) {
        return addHeapObject(getObject(e).call(getObject(t)));
      }, arguments);
    }),
    (e.wbg.__wbg_next_40fc327bfc8770e6 = function (e) {
      return addHeapObject(getObject(e).next);
    }),
    (e.wbg.__wbg_set_a47bac70306a19a7 = function (e, t, n) {
      getObject(e).set(getObject(t), n >>> 0);
    }),
    (e.wbg.__wbg_length_c20a40f15020d68a = function (e) {
      return getObject(e).length;
    }),
    (e.wbg.__wbg_self_ce0dbfc45cf2f5be = function () {
      return handleError(function () {
        return addHeapObject(self.self);
      }, arguments);
    }),
    (e.wbg.__wbg_window_c6fb939a7f436783 = function () {
      return handleError(function () {
        return addHeapObject(window.window);
      }, arguments);
    }),
    (e.wbg.__wbg_globalThis_d1e6af4856ba331b = function () {
      return handleError(function () {
        return addHeapObject(globalThis.globalThis);
      }, arguments);
    }),
    (e.wbg.__wbg_global_207b558942527489 = function () {
      return handleError(function () {
        return addHeapObject(global.global);
      }, arguments);
    }),
    (e.wbg.__wbindgen_is_undefined = function (e) {
      return void 0 === getObject(e);
    }),
    (e.wbg.__wbg_newnoargs_e258087cd0daa0ea = function (e, t) {
      return addHeapObject(new Function(getStringFromWasm0(e, t)));
    }),
    (e.wbg.__wbg_clearTimeout_76877dbc010e786d = function (e) {
      return addHeapObject(clearTimeout(takeObject(e)));
    }),
    (e.wbg.__wbg_dial_30e8812bd98d8882 = function () {
      return handleError(function (e, t, n, _) {
        return addHeapObject(
          getObject(e).dial(getStringFromWasm0(t, n), 0 !== _),
        );
      }, arguments);
    }),
    (e.wbg.__wbindgen_is_null = function (e) {
      return null === getObject(e);
    }),
    (e.wbg.__wbg_write_3d1f2c679934dd25 = function () {
      return handleError(function (e, t, n) {
        return addHeapObject(getObject(e).write(getArrayU8FromWasm0(t, n)));
      }, arguments);
    }),
    (e.wbg.__wbg_shutdown_a85687f76230bdad = function () {
      return handleError(function (e) {
        getObject(e).shutdown();
      }, arguments);
    }),
    (e.wbg.__wbg_close_6a852f1689b0b8e2 = function (e) {
      getObject(e).close();
    }),
    (e.wbg.__wbg_instanceof_Object_71ca3c0a59266746 = function (e) {
      let t;
      try {
        t = getObject(e) instanceof Object;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_toString_c816a20ab859d0c1 = function (e) {
      return addHeapObject(getObject(e).toString());
    }),
    (e.wbg.__wbindgen_error_new = function (e, t) {
      return addHeapObject(new Error(getStringFromWasm0(e, t)));
    }),
    (e.wbg.__wbg_clusterdescriptor_new = function (e) {
      return addHeapObject(ClusterDescriptor.__wrap(e));
    }),
    (e.wbg.__wbg_nadavalue_new = function (e) {
      return addHeapObject(NadaValue.__wrap(e));
    }),
    (e.wbg.__wbg_permissions_new = function (e) {
      return addHeapObject(Permissions.__wrap(e));
    }),
    (e.wbg.__wbg_pricequote_new = function (e) {
      return addHeapObject(PriceQuote.__wrap(e));
    }),
    (e.wbg.__wbg_new_d9bc3a0147634640 = function () {
      return addHeapObject(new Map());
    }),
    (e.wbg.__wbg_fromEntries_c9d8ec8925e677a8 = function () {
      return handleError(function (e) {
        return addHeapObject(Object.fromEntries(getObject(e)));
      }, arguments);
    }),
    (e.wbg.__wbg_set_8417257aaedc936b = function (e, t, n) {
      return addHeapObject(getObject(e).set(getObject(t), getObject(n)));
    }),
    (e.wbg.__wbg_new_16b304a2cfa7ff4a = function () {
      return addHeapObject(new Array());
    }),
    (e.wbg.__wbg_set_d4638f722068f043 = function (e, t, n) {
      getObject(e)[t >>> 0] = takeObject(n);
    }),
    (e.wbg.__wbg_isArray_2ab64d95e09ea0ae = function (e) {
      return Array.isArray(getObject(e));
    }),
    (e.wbg.__wbg_length_cd7af8117672b8b8 = function (e) {
      return getObject(e).length;
    }),
    (e.wbg.__wbg_get_bd8e338fbd5f5cc8 = function (e, t) {
      return addHeapObject(getObject(e)[t >>> 0]);
    }),
    (e.wbg.__wbg_new_6c74223c77cfabad = function () {
      return handleError(function (e, t) {
        return addHeapObject(new WebSocket(getStringFromWasm0(e, t)));
      }, arguments);
    }),
    (e.wbg.__wbg_setbinaryType_b0cf5103cd561959 = function (e, t) {
      getObject(e).binaryType = takeObject(t);
    }),
    (e.wbg.__wbg_addEventListener_4283b15b4f039eb5 = function () {
      return handleError(function (e, t, n, _, r) {
        getObject(e).addEventListener(
          getStringFromWasm0(t, n),
          getObject(_),
          getObject(r),
        );
      }, arguments);
    }),
    (e.wbg.__wbg_addEventListener_53b787075bd5e003 = function () {
      return handleError(function (e, t, n, _) {
        getObject(e).addEventListener(getStringFromWasm0(t, n), getObject(_));
      }, arguments);
    }),
    (e.wbg.__wbg_error_8e3928cfb8a43e2b = function (e) {
      console.error(getObject(e));
    }),
    (e.wbg.__wbg_new_81740750da40724f = function (e, t) {
      try {
        var n = { a: e, b: t };
        const _ = new Promise((e, t) => {
          const _ = n.a;
          n.a = 0;
          try {
            return __wbg_adapter_152(_, n.b, e, t);
          } finally {
            n.a = _;
          }
        });
        return addHeapObject(_);
      } finally {
        n.a = n.b = 0;
      }
    }),
    (e.wbg.__wbg_new_cf3ec55744a78578 = function (e) {
      return addHeapObject(new Date(getObject(e)));
    }),
    (e.wbg.__wbg_newwithlength_66ae46612e7f0234 = function (e) {
      return addHeapObject(new Array(e >>> 0));
    }),
    (e.wbg.__wbindgen_bigint_from_str = function (e, t) {
      return addHeapObject(BigInt(getStringFromWasm0(e, t)));
    }),
    (e.wbg.__wbg_entries_95cc2c823b285a09 = function (e) {
      return addHeapObject(Object.entries(getObject(e)));
    }),
    (e.wbg.__wbg_read_c68b57fe8b00a7b9 = function (e) {
      return addHeapObject(getObject(e).read);
    }),
    (e.wbg.__wbg_listenon_ff60af88e263af6b = function () {
      return handleError(function (e, t, n) {
        return addHeapObject(getObject(e).listen_on(getStringFromWasm0(t, n)));
      }, arguments);
    }),
    (e.wbg.__wbg_newaddrs_71100193fa47c194 = function (e, t) {
      const n = getObject(t).new_addrs;
      var _ = isLikeNone(n)
          ? 0
          : passArrayJsValueToWasm0(n, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = r), (getInt32Memory0()[e / 4 + 0] = _);
    }),
    (e.wbg.__wbg_newconnections_44d312e897866295 = function (e, t) {
      const n = getObject(t).new_connections;
      var _ = isLikeNone(n)
          ? 0
          : passArrayJsValueToWasm0(n, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = r), (getInt32Memory0()[e / 4 + 0] = _);
    }),
    (e.wbg.__wbg_localaddr_91f6c1af88a435e2 = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).local_addr,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_observedaddr_1ca1352afe737cc2 = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).observed_addr,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_connection_632aa60cbc9cffe2 = function (e) {
      return addHeapObject(getObject(e).connection);
    }),
    (e.wbg.__wbg_expiredaddrs_c5a2f22f3c1b584f = function (e, t) {
      const n = getObject(t).expired_addrs;
      var _ = isLikeNone(n)
          ? 0
          : passArrayJsValueToWasm0(n, wasm.__wbindgen_malloc),
        r = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = r), (getInt32Memory0()[e / 4 + 0] = _);
    }),
    (e.wbg.__wbg_websockettransport_84c8ba3f0c468e40 = function () {
      return addHeapObject(websocket_transport());
    }),
    (e.wbg.__wbg_has_0af94d20077affa2 = function () {
      return handleError(function (e, t) {
        return Reflect.has(getObject(e), getObject(t));
      }, arguments);
    }),
    (e.wbg.__wbg_fetch_1e4e8ed1f64c7e28 = function (e) {
      return addHeapObject(fetch(getObject(e)));
    }),
    (e.wbg.__wbg_fetch_921fad6ef9e883dd = function (e, t) {
      return addHeapObject(getObject(e).fetch(getObject(t)));
    }),
    (e.wbg.__wbindgen_jsval_loose_eq = function (e, t) {
      return getObject(e) == getObject(t);
    }),
    (e.wbg.__wbindgen_boolean_get = function (e) {
      const t = getObject(e);
      return "boolean" == typeof t ? (t ? 1 : 0) : 2;
    }),
    (e.wbg.__wbindgen_number_get = function (e, t) {
      const n = getObject(t),
        _ = "number" == typeof n ? n : void 0;
      (getFloat64Memory0()[e / 8 + 1] = isLikeNone(_) ? 0 : _),
        (getInt32Memory0()[e / 4 + 0] = !isLikeNone(_));
    }),
    (e.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function (e) {
      let t;
      try {
        t = getObject(e) instanceof Uint8Array;
      } catch (e) {
        t = !1;
      }
      return t;
    }),
    (e.wbg.__wbg_String_b9412f8799faab3e = function (e, t) {
      const n = passStringToWasm0(
          String(getObject(t)),
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbindgen_debug_string = function (e, t) {
      const n = passStringToWasm0(
          debugString(getObject(t)),
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbindgen_throw = function (e, t) {
      throw new Error(getStringFromWasm0(e, t));
    }),
    (e.wbg.__wbindgen_rethrow = function (e) {
      throw takeObject(e);
    }),
    (e.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function (e) {
      return addHeapObject(getObject(e).queueMicrotask);
    }),
    (e.wbg.__wbg_resolve_b0083a7967828ec8 = function (e) {
      return addHeapObject(Promise.resolve(getObject(e)));
    }),
    (e.wbg.__wbg_then_a73caa9a87991566 = function (e, t, n) {
      return addHeapObject(getObject(e).then(getObject(t), getObject(n)));
    }),
    (e.wbg.__wbindgen_link_fc1eedd35dc7e0a6 = function (e) {
      const t = passStringToWasm0(
          "data:application/javascript," +
            encodeURIComponent(
              "onmessage = function (ev) {\n            let [ia, index, value] = ev.data;\n            ia = new Int32Array(ia.buffer);\n            let result = Atomics.wait(ia, index, value);\n            postMessage(result);\n        };\n        ",
            ),
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        n = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = n), (getInt32Memory0()[e / 4 + 0] = t);
    }),
    (e.wbg.__wbg_new_d1187ae36d662ef9 = function () {
      return handleError(function (e, t) {
        return addHeapObject(new Worker(getStringFromWasm0(e, t)));
      }, arguments);
    }),
    (e.wbg.__wbg_setonmessage_503809e5bb51bd33 = function (e, t) {
      getObject(e).onmessage = getObject(t);
    }),
    (e.wbg.__wbg_of_6a70eed8d41f469c = function (e, t, n) {
      return addHeapObject(Array.of(getObject(e), getObject(t), getObject(n)));
    }),
    (e.wbg.__wbg_postMessage_7380d10e8b8269df = function () {
      return handleError(function (e, t) {
        getObject(e).postMessage(getObject(t));
      }, arguments);
    }),
    (e.wbg.__wbg_waitAsync_5d743fc9058ba01a = function () {
      return addHeapObject(Atomics.waitAsync);
    }),
    (e.wbg.__wbg_new_8cccba86b0f574cb = function (e) {
      return addHeapObject(new Int32Array(getObject(e)));
    }),
    (e.wbg.__wbg_waitAsync_46d5c36955b71a79 = function (e, t, n) {
      return addHeapObject(Atomics.waitAsync(getObject(e), t, n));
    }),
    (e.wbg.__wbg_async_19c0400d97cc72fe = function (e) {
      return getObject(e).async;
    }),
    (e.wbg.__wbg_value_571d60108110e917 = function (e) {
      return addHeapObject(getObject(e).value);
    }),
    (e.wbg.__wbg_then_0c86a60e8fcfe9f6 = function (e, t) {
      return addHeapObject(getObject(e).then(getObject(t)));
    }),
    (e.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function (e) {
      queueMicrotask(getObject(e));
    }),
    (e.wbg.__wbg_readyState_1c157e4ea17c134a = function (e) {
      return getObject(e).readyState;
    }),
    (e.wbg.__wbg_close_acd9532ff5c093ea = function () {
      return handleError(function (e) {
        getObject(e).close();
      }, arguments);
    }),
    (e.wbg.__wbg_removeEventListener_92cb9b3943463338 = function () {
      return handleError(function (e, t, n, _) {
        getObject(e).removeEventListener(
          getStringFromWasm0(t, n),
          getObject(_),
        );
      }, arguments);
    }),
    (e.wbg.__wbg_newwitheventinitdict_c939a6b964db4d91 = function () {
      return handleError(function (e, t, n) {
        return addHeapObject(
          new CloseEvent(getStringFromWasm0(e, t), getObject(n)),
        );
      }, arguments);
    }),
    (e.wbg.__wbg_dispatchEvent_63c0c01600a98fd2 = function () {
      return handleError(function (e, t) {
        return getObject(e).dispatchEvent(getObject(t));
      }, arguments);
    }),
    (e.wbg.__wbg_url_5f6dc4009ac5f99d = function (e, t) {
      const n = passStringToWasm0(
          getObject(t).url,
          wasm.__wbindgen_malloc,
          wasm.__wbindgen_realloc,
        ),
        _ = WASM_VECTOR_LEN;
      (getInt32Memory0()[e / 4 + 1] = _), (getInt32Memory0()[e / 4 + 0] = n);
    }),
    (e.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0 = function () {
      return handleError(function (e, t, n) {
        return addHeapObject(
          new Request(getStringFromWasm0(e, t), getObject(n)),
        );
      }, arguments);
    }),
    (e.wbg.__wbindgen_closure_wrapper1257 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_44));
    }),
    (e.wbg.__wbindgen_closure_wrapper1262 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_44));
    }),
    (e.wbg.__wbindgen_closure_wrapper1265 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_49));
    }),
    (e.wbg.__wbindgen_closure_wrapper1269 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_44));
    }),
    (e.wbg.__wbindgen_closure_wrapper1279 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_49));
    }),
    (e.wbg.__wbindgen_closure_wrapper8024 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_44));
    }),
    (e.wbg.__wbindgen_closure_wrapper8048 = function (e, t, n) {
      return addHeapObject(makeMutClosure(e, t, 75, __wbg_adapter_44));
    }),
    e
  );
}
function __wbg_init_memory(e, t) {
  e.wbg.memory =
    t || new WebAssembly.Memory({ initial: 25, maximum: 16384, shared: !0 });
}
function __wbg_finalize_init(e, t) {
  return (
    (wasm = e.exports),
    (__wbg_init.__wbindgen_wasm_module = t),
    (cachedFloat64Memory0 = null),
    (cachedInt32Memory0 = null),
    (cachedUint32Memory0 = null),
    (cachedUint8Memory0 = null),
    wasm.__wbindgen_start(),
    wasm
  );
}
function initSync(e, t) {
  if (void 0 !== wasm) return wasm;
  const n = __wbg_get_imports();
  return (
    __wbg_init_memory(n, t),
    e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
    __wbg_finalize_init(new WebAssembly.Instance(e, n), e)
  );
}
async function __wbg_init(e, t) {
  if (void 0 !== wasm) return wasm;
  void 0 === e && (e = new URL("index_bg.wasm", import.meta.url));
  const n = __wbg_get_imports();
  ("string" == typeof e ||
    ("function" == typeof Request && e instanceof Request) ||
    ("function" == typeof URL && e instanceof URL)) &&
    (e = fetch(e)),
    __wbg_init_memory(n, t);
  const { instance: _, module: r } = await __wbg_load(await e, n);
  return __wbg_finalize_init(_, r);
}
export { initSync };
export default __wbg_init;
