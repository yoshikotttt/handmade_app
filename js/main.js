//opening
$(window).on("load",function(){
    $("#opening").delay(1500).fadeOut('slow');
    $("#opening_logo").delay(1200).fadeOut("slow");
});


$("#dicision").on("click", function () {
    //入力値の名前を決める
    const completeHeightInput = $("#complete_height");
    const completeWidthInput = $("#complete_width");
    const machiSizeInput = $("#machi_size");
    const resultHeightInput = $("#result_height");
    const resultWidthInput = $("#result_width");
    const machiYesRadio = $('input[name="machi_yn"]:checked').val();
    const frillYesRadio = $('input[name="frill_yn"]:checked').val();
    const patternYesRadio = $('input[name="pattern_yn"]:checked').val();
    const title = $("input[type='text']").val();
    //タイトル未入力アラート
    if (title === "") {
        alert("タイトルが未入力です");
        return false;
    }
    //フォームの入力値を変数に代入、parseIntで文字列から数値に変換
    const completeHeight = parseInt(completeHeightInput.val());
    const completeWidth = parseInt(completeWidthInput.val());
    const machiSize = parseInt(machiSizeInput.val());
    let resultHeight = resultHeightInput.val();
    let resultWidth = resultWidthInput.val();

    //マチ未入力アラート
    if (machiYesRadio === "yes" && machiSizeInput.val() === "") {
        alert("マチの値が未入力です");
        return false;
    }
    //８パターンの結果
    if (machiYesRadio === "yes" && frillYesRadio === "yes" && patternYesRadio === "yes") {


        resultHeight = (completeHeight * 2) + machiSize + 8;
        resultWidth = completeWidth + machiSize + 2;

        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());

    } if (machiYesRadio === "yes" && frillYesRadio === "yes" && patternYesRadio === "no") {
        resultHeight = (completeHeight * 2) + machiSize + 6;
        resultWidth = completeWidth + machiSize + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());

    } if (machiYesRadio === "yes" && frillYesRadio === "no" && patternYesRadio === "yes") {
        resultHeight = (completeHeight * 2) + machiSize + 4;
        resultWidth = completeWidth + machiSize + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());

    } if (machiYesRadio === "yes" && frillYesRadio === "no" && patternYesRadio === "no") {
        resultHeight = (completeHeight * 2) + machiSize + 2;
        resultWidth = completeWidth + machiSize + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());


    } if (machiYesRadio === "no" && frillYesRadio === "yes" && patternYesRadio === "no") {
        resultHeight = (completeHeight * 2) + 6;
        resultWidth = completeWidth + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());
    } if (machiYesRadio === "no" && frillYesRadio === "no" && patternYesRadio === "yes") {
        resultHeight = (completeHeight * 2) + machiSize + 4;
        resultWidth = completeWidth + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());

    } if (machiYesRadio === "no" && frillYesRadio === "no" && patternYesRadio === "no") {
        resultHeight = (completeHeight * 2) + 2;
        resultWidth = completeWidth + 2;


        resultHeightInput.val(resultHeight.toString());
        resultWidthInput.val(resultWidth.toString());

    }


});


//クリアボタンで内容を全て消去
$("#clear").on("click", function () {
    $("input[type='text']").val("");
    $("#complete_height").val("");
    $("#complete_width").val("");
    $("#machi_size").val("");
    $("#result_height").val("");
    $("#result_width").val("");
    $("#machi_yn").prop("checked", true);
    $("#frill_yn").prop("checked", true);
    $("#pattern_yn").prop("checked", true);
});



