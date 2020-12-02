let gaData = `<script async src="https://www.googletagmanager.com/gtag/js?id=VUE_APP_GA"></script>
        <script>window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'VUE_APP_GA');</script>`

if (process.env.VUE_APP_GA) {
    gaData = gaData.replace(/VUE_APP_GA/g, process.env.VUE_APP_GA)
} else {
    gaData = ['<!-- ', ' -->'].join(gaData)
}

process.env.VUE_APP_GA_CODE = gaData