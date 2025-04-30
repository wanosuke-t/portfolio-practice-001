// ドロワーメニュー
$("#js-drawer-icon").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
  $("#js-drawer").toggleClass("is-checked");
});

const drawer = document.querySelector("#js-drawer");
window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    drawer.classList.add("is-show");
  } else {
    drawer.classList.remove("is-show");
  }
});


// スマホのドロワーアイコンを消す処理
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
  $("#js-drawer").removeClass("is-checked");
});

//ドロワーの外側をクリックしたらモーダルを閉じる
$(document).on("click", function (e) {
  // クリックした要素がドロワーの中またはトリガーなら何もしない
  if ($(e.target).closest("#js-drawer-content, #js-drawer-icon").length) {
    return;
  }

  // ドロワーを閉じる
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
  $("#js-drawer").removeClass("is-checked");
});

// スワイパー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade", // フェード切り替え
  allowTouchMove: false, // ユーザーのスワイプ操作を無効

  // 自動再生
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ページトップボタン
const pageTop = document.querySelector("#js-pagetop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});