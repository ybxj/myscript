function refreshTodoList($id) {
	var table_id = "tbl_" + $id;
	var table_prop_id = "table_props_" + $id;
	var filter_prop_id = "filter_props_" + $id;
	
	setLastNavCookie("refreshTodoList", $id);
	generateHTMLTable(table_id, table_prop_id, filter_prop_id);
	setFilterGrid(table_id, eval(filter_prop_id));
}

function refreshMyReceiving($id) {
	var table_id = "tbl_" + $id;
	var table_prop_id = "table_props_" + $id;
	var filter_prop_id = "filter_props_" + $id;
	
	setLastNavCookie("refreshMyReceiving", $id);
	generateHTMLTable(table_id, table_prop_id, filter_prop_id);
	setFilterGrid(table_id, eval(filter_prop_id));
}

function refreshTableContent($id) {
	var table_id = "tbl_" + $id;
	var table_prop_id = "table_props_" + $id;
	var filter_prop_id = "filter_props_" + $id;
	
	setLastNavCookie('refreshTableContent', $id);
	generateHTMLTable(table_id, table_prop_id, filter_prop_id);
	genHTMLButtons(table_id, table_prop_id, filter_prop_id);
	setFilterGrid(table_id, eval(filter_prop_id));
}

function generateHTMLTable(table_id, table_prop_id, filter_id) {
	//eval(filter_prop_id + '.col_3 = "select"');
	var $content = "";
	$content += '<div style="margin-bottom: 10px;"><b>' + eval(table_prop_id).caption + '</b></div>'
	$content += '<span id="spnColMng"></span>';
	$content += '<div style="width:100%;margin-top:10px">';
	$content += '<div id="colsMng" style="margin:25px 0 0 10px;"></div>';
	$content += '<table id="' + table_id + '" class="mytable" cellpadding="0" cellspacing="0">';
	$content += genHTMLTableHead(table_id, table_prop_id, filter_id);
	
	$content += genHTMLTableBody(table_id, table_prop_id, filter_id);
	
	$content += '</table></div>';
	
//	$("#div_table_container").empty();
	$("#div_table_container").html($content);
}

function genHTMLTableHead(table_id, table_prop_id, filter_id) {
	var $head = '<thead><tr>';
	$head += '<th><input id="tbl_checkall" type="checkbox" onclick="selectAll(\'' + table_id + '\')"/></th>';
//	alert(filter_id);
	//alert(eval(eval(table_prop_id).cols_title)[0]);
	//for(col in eval(table_prop_id).cols_title) {
//	var cols = eval(eval(table_prop_id).cols_title);
	var cols = eval(table_prop_id).columns;
//	alert(cols[0].title);
	for(var i = 1; i < cols.length; i++) {
//		alert(col[0]);
		//$head += '<th width="' + cols[i].width + '" nowrap="">' + cols[i].title + '</th>';
		$head += '<th nowrap="">' + cols[i].title + '</th>';
	}
	$head += '</tr></thead>';
	
	return $head;
}

function genHTMLTableBody(table_id, table_prop_id, filter_id) {
	var $cont = '<tbody>';
	var $url = eval(table_prop_id).url;
	var cols = eval(table_prop_id).columns;
	
	$.ajax({
		async: false,
		dataType: "json",
		url: $url, 
		success: function(result){
			if(result.status == "OK") {
				result = result.message
				var $len = result.length;
				for(i = 0; i < $len; i++) {
					$cont += "<tr onclick=selectRow(this,'" + table_id + "')>";
					for(var j = 0; j < cols.length; j++) {
						if(j == 0) {
							$cont += '<td><input name="Id" value="' + result[i].Id + '" type="checkbox" onchange="cancelAll(this,\'' + table_id + '\')"></input></td>';
						} else {
							var $fl = cols[j].field;
							
							$cont += '<td>' + ((result[i][$fl] == null)?"":result[i][$fl]) + '</td>';
						}
					}
					$cont += '</tr>';
				}
			} else {
				$cont += "<tr><td colspan=15 style='text-align:left;padding-left:5px;'><i>No results found.</i></td></tr>";
			}
	}});
	
	$cont += '</tbody>';
	
	return $cont;
}

function genHTMLButtons(table_id, table_prop_id, filter_id) {
	var $btns = eval(table_prop_id).buttons;
	var $cont = "";
	
	for(var i = 0; i < $btns.length; i++) {
		$cont += '<input type="button" value="' + $btns[i].button + '" onclick="' + $btns[i].script + '" />&nbsp;';
	}
	
	$("#div_buttons").html($cont);
}

function refreshPurviewConfig($id) {
	setLastNavCookie('refreshPurviewConfig', $id);
	var $cont = '<input type="button" value="Set Purview Config" onclick="openNewWindow(\'/html/set_purview_config.htm\')" />';
	$("#div_table_container").empty();
	$("#div_buttons").html($cont);
	openNewWindow('/html/set_purview_config.htm');
}
