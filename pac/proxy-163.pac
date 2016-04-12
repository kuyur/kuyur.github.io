// https://github.com/kuyur/proxy.pac

var domains = {
  'music.126.net': 1,
  'music.163.com': 1
};

var proxy = 'SOCKS5 127.0.0.1:11080; SOCKS 127.0.0.1:11080; DIRECT;';
var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
  var lastPos;
  do {
    if (domains.hasOwnProperty(host)) {
      return proxy;
    }
    lastPos = host.indexOf('.') + 1;
    host = host.slice(lastPos);
  } while (lastPos >= 1);
  return direct;
}
