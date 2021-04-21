// https://raw.githubusercontent.com/kuyur/kuyur.github.io/master/pac/proxy-163.pac

var domains = {
  'music.126.net': 1,
  'ip.ws.126.net': 1,
  'music.163.com': 1,
  'music.httpdns.c.163.com': 1,
  'ipservice.163.com': 1,
  'api.bilibili.com': 1,
  'douban.fm': 1,
  'iqiyi.com': 1,
  'kugou.com': 1,
  'kuwo.cn': 1,
  'hot.vrs.sohu.com': 1,
  '3g.music.qq.com': 1,
  'mqqplayer.3g.qq.com': 1,
  'proxy.music.qq.com': 1,
  'proxymc.qq.com': 1,
  'y.qq.com': 1,
  'youku.com': 1,
  'tudou.com': 1,
  'tianyancha.com': 1 
};

var proxy = __PROXY__;
var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
  var lastPos;
  do {
    if (domains[host]) {
      return proxy;
    }
    lastPos = host.indexOf('.') + 1;
    host = host.slice(lastPos);
  } while (lastPos >= 1);
  return direct;
}
