<!-- Theme: saved choice, else system preference (runs before paint) -->
<script>
    (function () {
        var t;
        try { t = localStorage.getItem('theme'); } catch (e) {}
        if (t !== 'light' && t !== 'dark') {
            t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', t);
    })();
</script>

<!-- Google Font Link (https://fonts.google.com/) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;700&display=swap" rel="stylesheet">

<script type="module" src="/src/js/app.js"></script>
