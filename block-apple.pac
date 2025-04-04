function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "oscp.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "oscp2.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "certs.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "crl.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "crl.entrust.net")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "crl3.digicert.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "crl4.digicert.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ocsp.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ocsp.digicert.cn")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ocsp.digicert.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ocsp.entrust.net")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ocsp2.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "valid.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ppq.apple.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
if (dnsDomainIs(host, "ppq-ext.v.aaplimg.com")) {
        return "PROXY 127.0.0.1:8080";  
    }
    return "DIRECT";
}
