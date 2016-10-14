<!-- Insert your custom javascript code below -->
var j = jQuery.noConflict();

function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = j(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
j('.bt_left').css('min-height', currentHeight+4);
}
);
j('.bt_left').css('min-height', tallestcolumn+4);
}

j(document).ready(function() {
var allwidth = j(document).width();
 if (allwidth > 990) {
setEqualHeight(j(".bt_mainbody, .bt_right"));
j('.bt_main_inner').on("mousemove", function () {
         var rightheight=j('.bt_left').height();
		 j('.bt_right').css('min-height', rightheight+4);
    });
 
 }
 
});



/*
j(".je_acc ul li span").click(
	function () { j(this).addClass("active") },   //при наведении курсора на элемент
	function () { j(this).removeClass("active") } //при уводе курсора с элемента
);

j(document).ready(function () {
    j('.je_acc ul li.parent').hover(function () {        //   1 - й уровень  
	j(".je_acc ul li.active ul").css("display", "block"); //  2- й уровень
	j(".je_acc ul li.parent ul").css("display", "none"); //  2- й уровень
	j(".je_acc ul ul ul").css("display", "none");  //   3 - й уровень
    });
});


j(document).ready(function () {
    j('.je_acc ul ul li.parent').hover(function () {        //   2 - й уровень  
	j(".je_acc ul ul li.active ul").css("display", "block"); //  3- й уровень
	j(".je_acc ul ul ul ul").css("display", "none");  //   4 - й уровень
    });
});

j(document).ready(function () {
    j('.je_acc ul ul ul li.parent').hover(function () {        //   3 - й уровень  
	j(".je_acc ul ul li.active ul").css("display", "block"); //  4 - й уровень
    });
});
*/
