function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.yinxiang.com"))
        return "PROXY 127.0.0.1:7073";

    // by default use no proxy
    return "DIRECT";
}
