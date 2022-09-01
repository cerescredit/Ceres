! function (e) {
    var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
    if (winWidth > 980) {
        winWidth = winWidth < 1366 ? 1366 : winWidth > 1920 ? 1920 : winWidth
        var oHtml = document.getElementsByTagName('html')[0]
        oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
    } else {
        var t = e.document,
            n = t.documentElement,
            i = "orientationchange" in e ? "orientationchange" : "resize",
            a = function e() {
                var t = n.getBoundingClientRect().width;
                return n.style.fontSize = 5 * Math.max(Math.min(t / 750 * 20, 11.2), 8.55) + "px", e
            }();
        n.setAttribute("data-dpr", e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio : 1), /iP(hone|od|ad)/.test(e.navigator.userAgent) && (t.documentElement.classList.add("ios"), parseInt(e.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8 && t.documentElement.classList.add("hairline")), t.addEventListener && (e.addEventListener(i, a, !1), t.addEventListener("DOMContentLoaded", a, !1))
    }

    window.addEventListener('resize', function () {
        var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
        if (winWidth > 980) {
            winWidth = winWidth < 1400 ? 1400 : winWidth > 1920 ? 1920 : winWidth
            var oHtml = document.getElementsByTagName('html')[0]
            oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
        } else {
            var t = e.document,
                n = t.documentElement,
                i = "orientationchange" in e ? "orientationchange" : "resize",
                a = function e() {
                    var t = n.getBoundingClientRect().width;
                    return n.style.fontSize = 5 * Math.max(Math.min(t / 750 * 20, 11.2), 8.55) + "px", e
                }();
            n.setAttribute("data-dpr", e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio : 1), /iP(hone|od|ad)/.test(e.navigator.userAgent) && (t.documentElement.classList.add("ios"), parseInt(e.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8 && t.documentElement.classList.add("hairline")), t.addEventListener && (e.addEventListener(i, a, !1), t.addEventListener("DOMContentLoaded", a, !1))

        }
    })

}(window);