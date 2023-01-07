let accordionFlush = $('#accordionFlush');
let inputIndex = $('#inputIndex');

//Кнопка Отправить

function resetForm() {
    $('#form').remove();
    $('#order').text('Спасибо за заказ!');
}

$('#btnSubmit').click(function() {
    if ($('#inputName').val().trim() === '') {
        alert("Заполните поле Имя");
        return
    }
    if ($('#inputSurname').val().trim() === '') {
        alert("Заполните поле Фамилия");
        return
    }
    if ($('#inputPhone').val().trim() === '') {
        alert("Заполните поле Телефон");
        return
    }
    if ($('#inputCountry').val().trim() === '') {
        alert("Заполните поле Страна");
        return
    }
    if ($(inputIndex).val().trim() === '') {
        alert("Заполните поле Индекс");
        return
    }
    if ($(inputIndex).val().length !== 6) {
        alert("Индекс должен состоять из 6 символов");
        return
    }
    if ($('#inputAddress').val().trim() === '') {
        alert("Заполните поле Адрес");
    } else {
        $('#btnSubmit').prop('click', resetForm)
    }
})


//Разрешаем вводить только символы

$(inputIndex).keypress(function(e){
    let string = parseInt(e.key)
    if (string || e.key === 'Backspace' || e.key === '0') {
    } else {
        return false;
    }
})


// Accordion на jQuery

let icons = {
    header: "ui-icon",
    activeHeader: "ui-icon-active"
};

$(accordionFlush).accordion({
    icons: icons
});

$("#toggle").button().on("click", function () {
    if ($(accordionFlush).accordion("option", "icons")) {
        $(accordionFlush).accordion("option", "icons", null);
    } else {
        $(accordionFlush).accordion("option", "icons", icons);
    }
});

