// [SP]ハンバーガをクリックしたらメニューを表示
$(".menu-icon").on("click", function () {
  if ($(".header-list").css("display") === "block") {
    $(".header-list").slideUp("1500");
  } else {
    $(".header-list").slideDown("1500");
  }
  /* メニューアイコンを切り替える */
  $("i", this).toggleClass("fas fa-bars fas fa-times");
});

// Windowサイズによってスタイルを変更
$(window).on("load resize", function () {
  if (window.innerWidth > 950) {
    $(".header-list").css("display", "flex");
  } else {
    $(".header-list").css("display", "none");
    $("i").removeClass("fas fa-times");
    $("i").addClass("fas fa-bars");
  }
});

// アコーディオンメニュー
$(".nav-item").on("click", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(this).children(".nav-item_sub").slideToggle();
    $(".nav-item").not($(this)).children(".nav-item_sub").slideUp();
  }
});
