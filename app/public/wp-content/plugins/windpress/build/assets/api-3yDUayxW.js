var e = (function e2(t2) {
  function n2(e3, t3, r2) {
    var i, a = {};
    if (Array.isArray(e3)) return e3.concat(t3);
    for (i in e3) a[r2 ? i.toLowerCase() : i] = e3[i];
    for (i in t3) {
      var o = r2 ? i.toLowerCase() : i, s = t3[i];
      a[o] = o in a && typeof s == `object` ? n2(a[o], s, o == `headers`) : s;
    }
    return a;
  }
  function r(e3, r2, i, a, o) {
    var s = typeof e3 == `string` ? e3 : (r2 = e3).url, c = { config: r2 }, l = n2(t2, r2), u = {};
    a || (a = l.data), (l.transformRequest || []).map(function(e4) {
      a = e4(a, l.headers) || a;
    }), l.auth && (u.authorization = l.auth), a && typeof a == `object` && typeof a.append != `function` && typeof a.text != `function` && (a = JSON.stringify(a), u[`content-type`] = `application/json`);
    try {
      u[l.xsrfHeaderName] = decodeURIComponent(document.cookie.match(RegExp(`(^|; )` + l.xsrfCookieName + `=([^;]*)`))[2]);
    } catch {
    }
    return l.baseURL && (s = s.replace(/^(?!.*\/\/)\/?/, l.baseURL + `/`)), l.params && (s += (~s.indexOf(`?`) ? `&` : `?`) + (l.paramsSerializer ? l.paramsSerializer(l.params) : new URLSearchParams(l.params))), (l.fetch || fetch)(s, { method: (i || l.method || `get`).toUpperCase(), body: a, headers: n2(l.headers, u, true), credentials: l.withCredentials ? `include` : o }).then(function(e4) {
      for (var t3 in e4) typeof e4[t3] != `function` && (c[t3] = e4[t3]);
      return l.responseType == `stream` ? (c.data = e4.body, c) : e4[l.responseType || `text`]().then(function(e5) {
        c.data = e5, c.data = JSON.parse(e5);
      }).catch(Object).then(function() {
        return (l.validateStatus ? l.validateStatus(e4.status) : e4.ok) ? c : Promise.reject(c);
      });
    });
  }
  return t2 || (t2 = {}), r.request = r, r.get = function(e3, t3) {
    return r(e3, t3, `get`);
  }, r.delete = function(e3, t3) {
    return r(e3, t3, `delete`);
  }, r.head = function(e3, t3) {
    return r(e3, t3, `head`);
  }, r.options = function(e3, t3) {
    return r(e3, t3, `options`);
  }, r.post = function(e3, t3, n3) {
    return r(e3, n3, `post`, t3);
  }, r.put = function(e3, t3, n3) {
    return r(e3, n3, `put`, t3);
  }, r.patch = function(e3, t3, n3) {
    return r(e3, n3, `patch`, t3);
  }, r.all = Promise.all.bind(Promise), r.spread = function(e3) {
    return e3.apply.bind(e3, e3);
  }, r.CancelToken = typeof AbortController == `function` ? AbortController : Object, r.defaults = t2, r.create = e2, r;
})(), t;
function n(n2 = {}) {
  return t || (t = e.create(Object.assign({ baseURL: window.windpress.rest_api.url || ``, headers: { "content-type": `application/json`, accept: `application/json`, "X-WP-Nonce": window.windpress.rest_api.nonce || `` } }, n2))), t;
}
export {
  n as t
};
