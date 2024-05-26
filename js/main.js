$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger-btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在しない場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在する場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $('.hamburger-menu a').on('click', function () {
    // ここでheaderからopenクラスを削除します
    $('header').removeClass('open');
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300 && $(window).width() > 950) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    return false;
  });
  
});
