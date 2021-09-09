$(document).ready(function(){
    // $("h2").css("text-decoration", "underline");
    $("h2").addClass("underline"); // use addClass instead of adding inline sytles
    // $("ul").css("border", "solid 1px #ccc");
    $("ul").addClass("border");
    // can also use removeClass

    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
})