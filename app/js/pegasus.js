//0.3.5
function pegasus(a, b, c) { return c = new XMLHttpRequest, c.open("GET", a), a = [], pegasus.timeout && (c.timeout = pegasus.timeout), c.ontimeout = function(a) { b = a }, c.onreadystatechange = c.then = function(d, e, f, g) { if (d && d.call && (a = [, d, e]), b && a[2] && a[2](b, c), 4 == c.readyState && (f = a[0 | c.status / 200])) { try { g = JSON.parse(c.responseText) } catch (a) { g = null } f(g, c) } }, c.send(), c }
