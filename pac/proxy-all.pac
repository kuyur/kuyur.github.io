// https://github.com/kuyur/proxy.pac

var proxy = 'SOCKS5 127.0.0.1:11080; SOCKS 127.0.0.1:11080; DIRECT;';
var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
  return proxy;
}
