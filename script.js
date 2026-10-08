"use strict";

// 画面の準備ができたらローディングを短くフェードアウト。
// 数字の進捗表示は実際の読み込み率ではないため使用しない。
const loading = document.querySelector("#loading");
let loadingClosed = false;
function hideLoading() {
  if (loadingClosed || !loading) return;
  loadingClosed = true;
  loading.classList.add("is-hidden");
  window.setTimeout(() => { loading.remove(); }, 400);
}
if (document.readyState === "complete") {
  hideLoading();
} else {
  window.addEventListener("load", hideLoading, { once:true });
}
// 画像の読み込みが長引いても、操作を不必要に妨げない。
window.setTimeout(hideLoading, 1800);

// モバイルメニュー
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
function closeMenu() {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "メニューを開く");
  menuButton.textContent = "☰";
}
menuButton.addEventListener("click", () => {
  const opened = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
  menuButton.setAttribute("aria-label", opened ? "メニューを閉じる" : "メニューを開く");
  menuButton.textContent = opened ? "×" : "☰";
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

// 学問カード: 押すと詳細を開閉
document.querySelectorAll(".subject-card").forEach(card => {
  card.addEventListener("click", () => {
    const detail = card.querySelector(".subject-detail");
    const willOpen = card.getAttribute("aria-expanded") !== "true";
    card.setAttribute("aria-expanded", String(willOpen));
    detail.hidden = !willOpen;
  });
});

// フッターの年を自動更新
document.querySelector("#year").textContent = String(new Date().getFullYear());
