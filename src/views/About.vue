<template>
  <div class="container page-container">
    <h1 class="page-title">会社概要</h1>
    <div class="table-wrapper">
      <table class="company-table">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>株式会社 OFFICIAL (Official Inc.)</td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>山田 太郎</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              〒100-0005<br>
              東京都千代田区丸の内1-1-1 東京ビルディング 5F
            </td>
          </tr>
          <tr>
            <th>設立</th>
            <td>2020年4月1日</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>500万円</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>
              ・システムエンジニアリングサービス(SES)<br>
              ・Webアプリケーション開発・保守・運用<br>
              ・ITコンサルティング事業<br>
              ・デジタルマーケティング支援
            </td>
          </tr>
          <tr>
            <th>取引銀行</th>
            <td>みずほ銀行、三菱UFJ銀行</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: 60px 20px; }
.page-title { margin-bottom: 40px; font-size: 2rem; text-align: center; }
.table-wrapper { max-width: 800px; margin: 0 auto; }
.company-table { width: 100%; border-collapse: collapse; border-top: 2px solid #0f4c81; }
.company-table th, .company-table td { padding: 20px; border-bottom: 1px solid #ddd; text-align: left; }
.company-table th { width: 30%; background: #f9fbfd; font-weight: bold; color: #333; }
</style>
