function openNewWindow($url, $arg) {
	if($url.indexOf("?") != -1) {
		$url += "&"+Math.random();
	} else {
		$url += "?"+Math.random();
	}
	var $param = "modal:yes;dialogWidth:750;dialogHeight:500;location:no;status:no;resizable:0;scrollbars:no";
	//var $ret = window.showModalDialog($url, $arg, $param);
	var $ret = window.open($url, $arg, $param);
	if($ret == undefined) {
		$ret = window.returnValue;
	}
	if($ret == 1) {
		//window.location.reload();
		location.reload();
	}
}

function openNewWideWindow($url, $arg) {
	if($url.indexOf("?") != -1) {
		$url += "&"+Math.random();
	} else {
		$url += "?"+Math.random();
	}
	var $param = "modal:yes;dialogWidth:1020;dialogHeight:500;location:no;status:no;resizable:0;scrollbars:no";
	//var $ret = window.showModalDialog($url, $arg, $param);
	var $ret = window.open($url, $arg, $param);
	if($ret == undefined) {
		$ret = window.returnValue;
	}
	if($ret == 1) {
		//window.location.reload();
		location.reload();
	}
}

function openNewXLWindow($url, $arg) {
	if($url.indexOf("?") != -1) {
		$url += "&"+Math.random();
	} else {
		$url += "?"+Math.random();
	}
	var $param = "modal:yes;dialogWidth:1320;dialogHeight:500;location:no;status:no;resizable:0;scrollbars:no";
	//var $ret = window.showModalDialog($url, $arg, $param);
	var $ret = window.showModalDialog($url, $arg, $param);
	if($ret == undefined) {
		$ret = window.returnValue;
	}
	if($ret == 1) {
		//window.location.reload();
		location.reload();
	}
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function closeChildWindow() {
	if (window.opener != undefined) {
		window.opener.returnValue = 1;
	} else {
		window.returnValue = 1;
	}
	window.close();
}

function closeNoRefresh() {
	if (window.opener != undefined) {
		window.opener.returnValue = 0;
	} else {
		window.returnValue = 0;
	}
	window.close();
}

function addCss() {
	$("table:visible").colorize();
	$("td:contains('undefined')").text("");
	$("td:contains('null')").text("");
	$("font:contains('OK')").css("color", "limegreen");
	$("font:contains('NO')").css("color", "red");
	$("font:contains('UN')").css("color", "orange");
}

function getCookie(objName) {
	var arrStr = document.cookie.split("; ");
	for(i = 0;i < arrStr.length;i++) {
	    var temp = arrStr[i].split("=");
	    if(temp[0] == objName) return (temp[1]);
	}
}

function setCookie(sName, sValue) {
    date = new Date();
    outms = 1 * 24 * 60 * 60 * 1000; //1 day in ms
    date.setTime(date.getTime() + outms);
    document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString();
}



/*** IE only: show/hide selects during filtering operations ***/
function hideIESelects(o)
{
	if(tf_isIE)
	{
		var slc = o.tbl.getElementsByTagName('select');
		for(var i=0; i<slc.length; i++)
			slc[i].style.visibility = 'hidden';
	}
}

function showIESelects(o)
{
	if(tf_isIE)
	{
		var slc = o.tbl.getElementsByTagName('select');
		for(var i=0; i<slc.length; i++)
			slc[i].style.visibility = 'visible';
	}
}


function selectAll(list_id) {
	
	$("#" + list_id).children("tbody").children("tr:visible").children("td").children(":checkbox").each(function(){
		$(this).prop("checked", !$(this).prop("checked"));
	});
}

function cancelAll(cur, list_id) {
	//alert(list_id);
	var tmp = !$(cur).prop("checked");
	//$("#" + list_id).children("tbody").children("tr:hidden").children("td").children(":checkbox").each(function(){
	//	$(this).prop("checked", false);
	//});
	//alert($(cur).prop("checked"));
	$(cur).prop("checked", tmp);
}

function selectRow(cur, list_id) {
	var tmp = !$(cur).find(":checkbox").prop("checked");
	$("#" + list_id).children("tbody").children("tr:hidden").children("td").children(":checkbox").each(function(){
		$(this).prop("checked", false);
	});
	
	$(cur).find(":checkbox").prop("checked", tmp);
}

function alertOnlySelectOne($id) {
	var $selected = $("#" + table_id + " tbody input:checked");
	if($selected.length < 1) {
		alert("ERROR: Please selected 1 host!");
		return false;
	}
}

function viewSelectedRow($url) {
	var $sel = $("#div_table_container table tbody input:checked");
	if($sel.length < 1) {
		alert("ERROR: Please selected 1 row!");
		return false;
	} else if($sel.length > 1) {
		alert("ERROR: Please selected only 1 row!");
		return false;
	}
	
	$url += "?id=" + $sel.get(0).value;
	
	openNewWideWindow($url);
}

function viewXLSelectedRow($url) {
	var $sel = $("#div_table_container table tbody input:checked");
	if($sel.length < 1) {
		alert("ERROR: Please selected 1 row!");
		return false;
	} else if($sel.length > 1) {
		alert("ERROR: Please selected only 1 row!");
		return false;
	}
	
	$url += "?id=" + $sel.get(0).value;
	
	openNewXLWindow($url);
}

function editSelectedRow($url) {
	var $sel = $("#div_table_container table tbody input:checked");
	if($sel.length < 1) {
		alert("ERROR: Please selected 1 row!");
		return false;
	} else if($sel.length > 1) {
		alert("ERROR: Please selected only 1 row!");
		return false;
	}
	$url += "?id=" + $sel.get(0).value;
	
	openNewWideWindow($url);
}

function editXLSelectedRow($url) {
	var $sel = $("#div_table_container table tbody input:checked");
	if($sel.length < 1) {
		alert("ERROR: Please selected 1 row!");
		return false;
	} else if($sel.length > 1) {
		alert("ERROR: Please selected only 1 row!");
		return false;
	}
	$url += "?id=" + $sel.get(0).value;
	
	openNewXLWindow($url);
}

function deleteSelectedRow($url) {
	var $sel = $("#div_table_container table tbody input:checked");
	if($sel.length < 1) {
		alert("ERROR: Please selected at least 1 row!");
		return false;
	}
	var param = $sel.get(0).value;
	for(var i = 1; i < $sel.length; i++) {
		param += "," + $sel.get(i).value;
	}
	$url += ("&ids=" + param);
	$.getJSON($url, function(result){
		if(result.status == "OK") {
			alert("Deleted!");
			location.reload();
		} else {
			alert("Delete failed!");
		}
	});
}

function refreshContent($id) {
	$.browser = false;
	var $id = "div_" + $id;
	if($("#" + $id).css("display") != "block") {
		$("#div_right_content > div").css("display", "none");
		$("#" + $id).css("display", "block");
	}
}

function doCallback(fn, args) {
	fn.apply(this, args);
}

function setLastNavCookie(navName, navParam) {
	setCookie("lastNavId", navName);
	setCookie("lastNavParam", navParam);
}

function getLeftNav() {
	var navId = getCookie("lastNavId");
	var navParam = getCookie("lastNavParam");
	if(navId == undefined || navId == "") {
//		doCallback(refreshTodoList, ['todo_list']);
		refreshTableContent('my_receiving');
	} else {
		doCallback(eval(navId), [navParam]);
		//doCallback(refreshTableContent, [navId])
	}
}

function checkNotNullInput() {
	var $flag = false;
	$(".notnull").each(function(){
		if($(this).val().trim() == undefined || $(this).val().trim() == "") {
			//alert("cannot be empty");
			alert('"' + $(this).attr("title") + '" can NOT be empty!');
			$flag = true;
			return false;
		}
	});
	
	return $flag;
}

function loadingSpinner() {
	$("body").append('<div id="loading_spinner"></div>');
	var $cont = '<div class="ajax_overlay" style="background-color: rgb(255, 255, 255); opacity: 0.7; width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 99999;">';
	$cont += '<div class="ajax_loader"></div></div>';
	$("#loading_spinner").append($cont);
}

function removeSpinner() {
	$("#loading_spinner").empty();
}