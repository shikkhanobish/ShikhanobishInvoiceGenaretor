function InvoicePrint() {
    $(".hideWhenPrint").hide();
    window.print();
    $(".hideWhenPrint").show();
}