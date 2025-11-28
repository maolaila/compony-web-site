<template>
  <div class="app-wrapper">
    <header class="site-header">
      <div class="container header-inner">
        <div class="logo">株式会社 OFFICIAL</div>
        <nav class="main-nav">
          <router-link to="/">ホーム</router-link>
          <router-link to="/service">事業案内</router-link>
          <router-link to="/about">会社概要</router-link>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="container">
        <div class="footer-info">
          <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
          <p>TEL: 03-1234-5678 (代表)</p>
        </div>
        <div class="copyright">
          &copy; 2024 OFFICIAL Co., Ltd. All Rights Reserved.
        </div>
        <div class="privacy">
           <small>プライバシーポリシー | 特定商取引法に基づく表記</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper { min-height: 100vh; display: flex; flex-direction: column; background: #fff; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
.site-header { border-bottom: 1px solid #eaeaea; background: #fff; position: sticky; top: 0; z-index: 100; }
.header-inner { display: flex; justify-content: space-between; align-items: center; height: 70px; }
.logo { font-size: 1.5rem; font-weight: bold; color: #0f4c81; letter-spacing: 0.05em; }
.main-nav a { margin-left: 30px; font-weight: 500; font-size: 0.95rem; color: #333; }
.main-nav a:hover, .main-nav a.router-link-active { color: #0f4c81; }
.site-main { flex: 1; }
.site-footer { background: #333; color: #ccc; padding: 40px 0 20px; font-size: 0.85rem; text-align: center; }
.footer-info p { margin-bottom: 5px; }
.copyright { margin-top: 20px; color: #666; }
.privacy { margin-top: 10px; color: #555; }
</style>
