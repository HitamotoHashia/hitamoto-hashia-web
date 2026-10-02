// =========================
// HTMLから必要なものを取得
// =========================

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

const loading = document.querySelector("#loading");

const progress = document.querySelector("#progress");
const progressBar = document.querySelector("#progress-bar");

const menuLinks = document.querySelectorAll(".menu a");


// =========================
// LOADING：プログレスバー
// =========================

let count = 0;

const timer = setInterval(function () {

    count++;

    // 数字を更新
    progress.textContent = count + "%";

    // バーを更新
    progressBar.value = count;


    // 100%になったら終了
    if (count >= 100) {
        clearInterval(timer);
    }

}, 50);


// =========================
// ハンバーガーメニュー
// =========================

menuButton.addEventListener("click", function () {

    // メニューを開閉
    menu.classList.toggle("open");

    // ボタンの状態を切り替え
    menuButton.classList.toggle("active");


    // ボタンの文字を変更
    if (menuButton.classList.contains("active")) {

        menuButton.textContent = "×";

    } else {

        menuButton.textContent = "☰";

    }

});


// =========================
// メニューリンクを押したとき
// =========================

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // メニューを閉じる
        menu.classList.remove("open");

        // activeも解除
        menuButton.classList.remove("active");

        // ボタンを☰に戻す
        menuButton.textContent = "☰";

    });

});


// =========================
// LOADING画面を消す
// =========================

window.addEventListener("load", function () {

    // 5秒後にフェードアウト開始
    setTimeout(function () {

        loading.style.opacity = "0";

    }, 5000);


    // 5.5秒後に完全に非表示
    setTimeout(function () {

        loading.style.display = "none";

    }, 5500);

});