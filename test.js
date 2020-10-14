function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.yinxiang.com"))
        return "PROXY netsys34:7073";

    // by default use no proxy
    return "DIRECT";
}
