<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Creating the Future</h1>
        <p>確かな技術で、新しい価値を創造する</p>
      </div>
    </div>
    
    <div class="container section">
      <h2 class="section-title">お知らせ</h2>
      <ul class="news-list">
        <li>
          <span class="date">2024.11.01</span>
          <span class="category">News</span>
          <span class="title">コーポレートサイトをリニューアルいたしました。</span>
        </li>
        <li>
          <span class="date">2024.10.15</span>
          <span class="category">Press</span>
          <span class="title">新規事業の開始について</span>
        </li>
        <li>
          <span class="date">2024.04.01</span>
          <span class="category">Info</span>
          <span class="title">本社オフィスを移転いたしました。</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}
.hero-content h1 { font-size: 3rem; margin-bottom: 10px; letter-spacing: 0.1em; }
.hero-content p { font-size: 1.2rem; opacity: 0.9; }
.section { padding: 60px 20px; }
.section-title { font-size: 1.8rem; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
.news-list li { border-bottom: 1px solid #f0f0f0; padding: 15px 0; display: flex; align-items: center; flex-wrap: wrap; }
.date { width: 100px; color: #888; font-family: 'Roboto', sans-serif; }
.category { background: #eee; padding: 2px 10px; font-size: 0.8rem; margin-right: 15px; border-radius: 3px; }
</style>
