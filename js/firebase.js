
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved }
    from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZE8Zp8dyMhWFeucDPBucQDUl_UhqIUxg",
    authDomain: "sewing-e7f7c.firebaseapp.com",
    projectId: "sewing-e7f7c",
    storageBucket: "sewing-e7f7c.appspot.com",
    messagingSenderId: "143023435439",
    appId: "1:143023435439:web:b976a2263b7cb3e67b2e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "sewing01");






$("#save").on("click", function () {
    //日付を取得
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = `${year}/${month}/${day}`
    console.log(formattedDate);

    const goods = {
        title: $("#title input").val(),
        completeHeight: $("#complete_height").val(),
        completeWidth: $("#complete_width").val(),
        resultHeight: $("#result_height").val(),
        resultWidth: $("#result_width").val(),
        createdAd: formattedDate

    };
    console.log(goods);
    const newPostRef = push(dbRef);//鍵を取得
    set(newPostRef, goods);//鍵とデータを紐付け



});
//削除ボタンの動作
$(document).on("click", ".deleteBtn", function () {
    const key = $(this).attr("data-key");
    const targetRef = ref(db, `sewing01/${key}`);
    remove(targetRef);
    $(`div.card[data-key=${key}]`).remove();
});

//追加されたデータを自動で取得
onChildAdded(dbRef, function (data) {
    const goods = data.val();
    const key = data.key;
    const $card = $("<div>").addClass("card").attr("data-key", key);
    const $title = $("<h2>").text(`作品名　　${goods.title}`);
    const $size1 = $("<p>").addClass("final").text(`必要な布サイズ　　${goods.resultHeight}×${goods.resultWidth}cm`);
    const $size2 = $("<p>").text(`(仕上がりサイズ　　${goods.completeHeight}×${goods.completeWidth}cm)`);
    const $date = $("<p>").addClass("date").text(goods.createdAd);
    const $deleteBtn = $("<img>").addClass("deleteBtn").attr("src", "./img/trash.svg").attr("data-key", key);
    $card.append($title, $size1, $size2, $date,$deleteBtn);

    $("#history").prepend($card);
    $("#history").scrollTop(0);


});

function onChildRemovedCallback(data) {
    const key = data.key;
    $(`div.card[data-key=${key}]`).remove();
}

// onChildAdded(dbRef,onChildAddedCallback);
// onChildRemoved(dbRef,onChildRemovedCallback);
