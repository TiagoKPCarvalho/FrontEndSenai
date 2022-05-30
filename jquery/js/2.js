/* $("#p777").text("Teste de Texto");

$("#alvo").click(function () {
    alert("Usuário clicou no texto");
});

$("#txt1").mousedown(function () {
    $("#txt2").text("Botão do mouse para BAIXO");
})
    .mouseup(function () {
        $("#txt2").text("Botão do mouse para CIMA");
    });

$("#txt3").keypress(function () {
    $("p1").text($("#txt3").val());
});

$("#txt4").keyup(function () {
    $("#p1").text($("#txt4").val());
    $("#p2").text("");
})
    .keydown(function () {
        $("#p2").text("tecla pressionada");
    }); */

/* var num = 0;

$(document).ready(function () {
    $("div").scroll(function () {
        $("p").text(num += 1);
    });
}); */

/* $(document).ready(function () {
    $("div p").first().css({ "border": "1px solid #f00", "background-color": "#ffa" });
    $("div p").last().css({ "border": "1px solid #f00", "background-color": "#afa" });
}); */

/* $(document).ready(function () {
    $("#bt1").click(function () {
        $("#caixa").animate({ width: "400px" })
            .animate({ height: "400px" });
    });
    $("#bt2").click(function () {
        $("#caixa").animate({ width: "100px" })
            .animate({ height: "100px" });
    });
}); */

/* $(document).ready(function () {
    $("#bt1").click(function () {
        $("#caixa").animate({ width: "400px" })
            .animate({ height: "400px" })
            .animate({ opacity: "0.3" })
            .animate({ opacity: "1" })
            .animate({ height: "100px" })
            .animate({ width: "100px" });
    });
}); */

$(document).ready(function () {
    $("div p").eq(0).css({ "color": "red"});
    $("div p").eq(1).css({ "color": "blue", "font-size": "30px" });
    $("div p").eq(2).css({ "color": "green", "font-size": "40px", "text-align": "center" });
});