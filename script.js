document.addEventListener('DOMContentLoaded', () => {
  // フェードインさせたい要素を取得
  const fadeElements = document.querySelectorAll('.fade-in');

  // Intersection Observerのオプション設定
  // threshold: 0.1 → 要素が10%表示されたらコールバック実行
  const options = {
    threshold: 0.1
  };

  // Intersection Observerのコールバック関数
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 要素が表示されたらクラスを付与してアニメーション実行
        entry.target.classList.add('fade-in-show');
        // 一度アニメーションしたら監視を止める場合は unobserve
        observer.unobserve(entry.target);
      }
    });
  };

  // Intersection Observerを作成
  const observer = new IntersectionObserver(observerCallback, options);

  // 取得した要素を監視
  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});
