var filter_props_todo_list = {
	remember_grid_values: true,
	alternate_rows: true,
	paging: true,
	results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
	sort: true,
	rows_counter: true,
	rows_counter_text: "Rows: ",
	col_0: "none",
	col_width:['2%'],
	display_all_text: "< Show all >",
	
	/*** Extensions manager ***/
	extensions: { 
					/*** Columns Visibility Manager extension load ***/	
					name:['ColsVisibility'], 
					src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
					description:['Columns visibility manager'], 
					initialize:[function(o){o.SetColsVisibility();}] 
				},
				
	/*** Columns Visibility Manager extension properties ***/
	showHide_cols_tick_to_hide: false,
	btn_showHide_cols_target_id: 'spnColMng',
	showHide_cols_container_target_id: 'colsMng',
	btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
	btn_showHide_cols_close_html: '<button>Close</button>',
	showHide_cols_text: '<font color=red>Displayed columns: </font>',
	showHide_cols_cont_css_class: 'colsMngContainer',
	showHide_cols_enable_hover: false,
	on_before_open_cols_manager: hideIESelects,
	on_after_close_cols_manager: showIESelects			
};

var table_props_todo_list = {
		caption: 'My Todo List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'NeedAction', title: 'Need Action'},
		             {field: 'Description', title: 'Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=TodoService/listMyTodoList',
		buttons: [
		          {button: 'Take Action', script: 'viewXLSelectedRow(\'/html/todo.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=TodoService/deleteTodo\')'}
		          ]
};

var filter_props_my_receiving = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_2: "select",
		col_3: 'select',
		col_width:['2%', '100px', '100px', '100px', '200px', '180px', '180px', '180px', '300px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: { 
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
					
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_my_receiving = {
		caption: 'My Receiving List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'ReceivedInOFA', title: 'OFA Received'},
		             {field: 'Category', title: 'Category'},
		             {field: 'CreateDate', title: 'Received Date'},
		             {field: 'PO', title: 'PO #'},
		             {field: 'RMAID', title: 'RAM ID'},
		             {field: 'SSSTID', title: 'SSST ID'},
		             {field: 'ShortDescription', title: 'Short Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listMyReceiving',
		buttons: [
		          {button: 'New Receiving', script: 'openNewXLWindow(\'/html/new_receiving.htm\')'},
		          {button: 'View', script:'viewXLSelectedRow(\'/html/view_receiving.htm\')'},
		          {button: 'Edit', script: 'editXLSelectedRow(\'/html/edit_receiving.htm\')'}
		          ]
};

var filter_props_all_receiving = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_2: "select",
		col_3: 'select',
		col_4: 'select',
		col_width: ['2%', '100px', '100px', '100px', '200px', '180px', '180px', '180px', '300px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		showHide_cols_at_start: [3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_all_receiving = {
		caption: 'All Receiving List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Vendor', title: 'Vendor'},
		             {field: 'ReceivedInOFA', title: 'OFA Received'},
		             {field: 'Category', title: 'Category'},
		             {field: 'CreateDate', title: 'Received Date'},
		             {field: 'PO', title: 'PO #'},
		             {field: 'RMAID', title: 'RAM ID'},
		             {field: 'SSSTID', title: 'SSST ID'},
		             {field: 'ShortDescription', title: 'Short Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listAllReceiving',
		buttons: [
		          {button: 'New Receiving', script: 'openNewXLWindow(\'/html/new_receiving.htm\')'},
		          {button: 'View', script:'viewXLSelectedRow(\'/html/view_receiving.htm\')'},
		          {button: 'Edit', script: 'editXLSelectedRow(\'/html/edit_receiving_by_admin.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=LogisticsService/deleteReceiving\')'}
		          ]
};

var filter_props_my_shipping = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_2: "select",
		col_width:['2%', '100px', '100px', '150px', '200px', '180px', '180px', '300px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: { 
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
					
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_my_shipping = {
		caption: 'My Shipping List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Category', title: 'Category'},
		             {field: 'CreateDate', title: 'Shipped Date'},
		             {field: 'RMAID', title: 'RAM ID'},
		             {field: 'SSSTID', title: 'SSST ID'},
		             {field: 'ShortDescription', title: 'Short Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listMyShipping',
		buttons: [
		          {button: 'New Shipping', script: 'openNewXLWindow(\'/html/new_shipping.htm\')'},
		          {button: 'View', script:'viewXLSelectedRow(\'/html/view_shipping.htm\')'}
		          ]
};

var filter_props_all_shipping = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_2: "select",
		col_width: ['2%', '100px', '100px', '150px', '200px', '180px', '180px', '300px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_all_shipping = {
		caption: 'All Shipping List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Category', title: 'Category'},
		             {field: 'CreateDate', title: 'Shipped Date'},
		             {field: 'PO', title: 'PO #'},
		             {field: 'RMAID', title: 'RMA ID'},
		             {field: 'SSSTID', title: 'SSST ID'},
		             {field: 'ShortDescription', title: 'Short Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listAllShipping',
		buttons: [
		          {button: 'New Shipping', script: 'openNewXLWindow(\'/html/new_shipping.htm\')'},
		          {button: 'View', script:'viewXLSelectedRow(\'/html/view_shipping.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=LogisticsService/deleteShipping\')'}
		          ]
};

var filter_props_all_item = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_2: "select",
		col_3: 'select',
		col_4: 'select',
		col_width: ['2%', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '80px', '80px', '100px'],
		display_all_text: "<Show all>",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		showHide_cols_at_start: [3,4,11,12,13,14],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_all_item = {
		caption: 'All Items',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Category', title: 'Category'},
		             {field: 'Status', title: 'Status'},
		             {field: 'ReceivedInOFA', title: 'OFA Received'},
		             {field: 'CreateDate', title: 'Received Date'},
		             {field: 'PO', title: 'PO #'},
		             {field: 'RMAID', title: 'RMA ID'},
		             {field: 'SSSTID', title: 'SSST ID'},
		             {field: 'ItemName', title: 'Item Name'},
		             {field: 'Model', title: 'Model'},
		             {field: 'SN', title: 'SN'},
		             {field: 'PlacedLocation', title: 'Placed Location'},
		             {field: 'Bin', title: 'Bin'},
		             {field: 'Comments', title: 'Comments'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listAllReceivedItem',
		buttons: [
		          {button: 'View Receiving', script:'viewXLSelectedRow(\'/html/view_item_receiving.htm\')'},
		          {button: 'Edit', script: 'editXLSelectedRow(\'/html/edit_item_receiving.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=LogisticsService/deleteReceivedItem\')'},
		          {button: 'View Shipping', script:'viewXLSelectedRow(\'/html/view_item_shipping.htm\')'},
		          ]
};

var filter_props_site_config = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_width: ['2%', '100px', '100px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_site_config = {
		caption: 'All Site List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'SiteName', title: 'Site Name'},
		             {field: 'DCOPagerPrimary', title: 'DCO Pager Primary'}
		             ],
		url: '/cgi/dispatcher.cgi?action=SiteConfigService/listAllSites',
		buttons: [
		          {button: 'New Site', script: 'openNewWindow(\'/html/new_site.htm\')'},
		          {button: 'Edit', script: 'editSelectedRow(\'/html/edit_site.htm\')'}
		          ]
};

var filter_props_user_config = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_width: ['2%', '100px', '100px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_user_config = {
		caption: 'All Users List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Username', title: 'User Name'},
		             {field: 'Gid', title: 'Groups'}
		             ],
		url: '/cgi/dispatcher.cgi?action=UserService/listAllUser',
		buttons: [
		          {button: 'New User', script: 'openNewWindow(\'/html/new_user.htm\')'},
		          {button: 'Edit', script: 'editSelectedRow(\'/html/edit_user.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=UserService/deleteUser\')'}
		          ]
};

var filter_props_group_config = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_width: ['2%', '100px', '100px', '300px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_group_config = {
		caption: 'All Groups List',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Name', title: 'Group Name'},
		             {field: 'Gid', title: 'Group Id'},
		             {field: 'Description', title: 'Description'}
		             ],
		url: '/cgi/dispatcher.cgi?action=GroupsService/listAllGroup',
		buttons: [
		          {button: 'New Group', script: 'openNewWindow(\'/html/new_group.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=GroupsService/deleteGroup\')'}
		          ]
};

var filter_props_cut_tickets = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_width: ['2%', '100px', '100px', '100px', '100px'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_cut_tickets = {
		caption: 'Scheduled Tasks',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Creator', title: 'Requested By'},
		             {field: 'StartDate', title: 'Start Date'},
		             {field: 'SchedTime', title: 'Start Time'},
		             {field: 'Recurrence', title: 'Recurrence'},
		             {field: 'Comments', title: 'Comments'}
		             ],
		url: '/cgi/dispatcher.cgi?action=AutoCronService/listAllAutoCrons',
		buttons: [
		          {button: 'New Schedule', script: 'openNewWideWindow(\'/html/new_schedule.htm\')'},
		          {button: 'Edit', script:'editSelectedRow(\'/html/edit_schedule.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=AutoCronService/deleteAutoCron\')'}
		          ]
};

var filter_props_server_numbers = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_width: ['2%'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_server_numbers = {
		caption: 'Server Numbers',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Total', title: 'Total'},
		             {field: 'LastUpdate', title: 'Last Update'}
		             ],
		url: '/cgi/dispatcher.cgi?action=ServerNumberService/listServerNumber',
		buttons: [
		          {button: 'View Details', script:'viewSelectedRow(\'/html/view_server_detail.htm\')'}
		          ]
};

var filter_props_request_access = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_1: "select",
		col_width: ['2%'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_request_access = {
		caption: 'Access Request',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Site', title: 'Site'},
		             {field: 'Total', title: 'Total'},
		             {field: 'LastUpdate', title: 'Last Update'}
		             ],
		url: '/cgi/dispatcher.cgi?action=ServerNumberService/listServerNumber',
		buttons: [
		          {button: 'View Details', script:'viewSelectedRow(\'/html/view_server_detail.htm\')'}
		          ]
};

var filter_props_receiving_category = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_width: ['2%'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_receiving_category = {
		caption: 'Receiving Categories',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Category', title: 'Category'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listAllCategory',
		buttons: [
		          {button: 'New Receiving Category', script:'openNewWindow(\'/html/new_receiving_category.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=LogisticsService/deleteReceivingCategory\')'}
		          ]
};

var filter_props_receiving_courier = {
		remember_grid_values: true,
		alternate_rows: true,
		paging: true,
		results_per_page: ['Results per page: ', [10,20,30,50,100,500]],
		sort: true,
		rows_counter: true,
		rows_counter_text: "Rows: ",
		col_0: "none",
		col_width: ['2%'],
		display_all_text: "< Show all >",
		
		/*** Extensions manager ***/
		extensions: {
						/*** Columns Visibility Manager extension load ***/	
						name:['ColsVisibility'], 
						src:['/js/TableFilter/TFExt_ColsVisibility/TFExt_ColsVisibility.js'], 
						description:['Columns visibility manager'], 
						initialize:[function(o){o.SetColsVisibility();}] 
					},
		/*** Columns Visibility Manager extension properties ***/
		showHide_cols_tick_to_hide: false,
		btn_showHide_cols_target_id: 'spnColMng',
		showHide_cols_container_target_id: 'colsMng',
		//showHide_cols_at_start: [2,3],
		btn_showHide_cols_html: '<button>Columns manager &#9660;</button>',
		btn_showHide_cols_close_html: '<button>Close</button>',
		showHide_cols_text: '<font color=red>Displayed columns: </font>',
		showHide_cols_cont_css_class: 'colsMngContainer',
		showHide_cols_enable_hover: false,
		on_before_open_cols_manager: hideIESelects,
		on_after_close_cols_manager: showIESelects		
};

var table_props_receiving_courier = {
		caption: 'Receiving Couriers',
		columns: [
		             {field: 'Id', checkbox: true},
		             {field: 'Courier', title: 'Courier'}
		             ],
		url: '/cgi/dispatcher.cgi?action=LogisticsService/listAllCourier',
		buttons: [
		          {button: 'New Courier', script:'openNewWindow(\'/html/new_courier.htm\')'},
		          {button: 'Delete', script: 'deleteSelectedRow(\'/cgi/dispatcher.cgi?action=LogisticsService/deleteReceivingCourier\')'}
		          ]
};
