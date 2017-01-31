

var projectboard_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Project Board Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"select" , name:"status", label:"Project Status", inputWidth:140, options:[
					{ value:"Open", text:"Open" },
					{ value:"In Active", text:"In Active" },
					{ value:"Closed", text:"Closed" }
			] },
		{ type:"button" , name:"search:projectboard", value:"Search", command:"save"  }
		]  }
	];


var projectboard_grid_context=
	[
		{ type:"fieldset" , name:"projectboard_list", label:"Project Boards", list:[
			{ type:"container" , name:"projectboard_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"projectboard_action_set", label:"Actions", offsetLeft:"30", list:[
	 { type:"button" , name:"projectboard:burndownchart:handle_custom_changes", value:"Burndown Chart", width:"100", command:""  },
	 { type:"button" , name:"projectboard:sprintvelocity:handle_custom_changes", value:"Velocity Chart", width:"100", command:""  },
	 { type:"button" , name:"projectboard:projectboardresult:handle_custom_changes", value:"Board Facts", width:"100", command:""  },
			]  },
	 { type:"fieldset" , name:"projectboard_view_set", label:"Next Steps", offsetLeft:"30", list:[
		{ type:"button" , name:"scroll:sprint", value:"Go To Sprint", width:"100"  }, 
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"projectboard_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"projectboard_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"projectboard_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	
var sprint_grid_context=
	[
		{ type:"fieldset" , name:"sprint_list", label:"Sprint List", list:[
				{ type:"container" , name:"sprint_grid_container", id:"sprint_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprint_action_set", label:"Actions", offsetLeft:"30", list:[
		        { type:"button" , name:"sprint:sprintresult:handle_custom_changes", value:"Sprint Facts", width:"100"  },
				{ type:"button" , name:"create:sprint", value:"Create", width:"100"  },
				{ type:"button" , name:"save:sprint", value:"Save", width:"100"  },
				
		 ]  },
		 { type:"fieldset" , name:"sprint_next_step", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:sprintboard", value:"Go To Board", width:"100"  }, 
		 ]  },
		 { type:"fieldset" , name:"sprint_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:projectboard", value:"Back To Project", width:"100"  }, 
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprint_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"sprint_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"sprint_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var sprintboard_grid_context=
	[
		{ type:"fieldset" , name:"sprintboard_list", label:"Board List", list:[
				{ type:"container" , name:"sprintboard_grid_container", id:"sprintboard_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprintboard_action_set", label:"Next Steps", offsetLeft:"30", list:[
				{ type:"button" , name:"view:sprintboard:viewBoard", value:"Open Board", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"sprint_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:sprint", value:"Back To Sprint", width:"100"  }, 
		         { type:"button" , name:"scroll:projectboard", value:"Back To Project", width:"100"  }, 
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprintboard_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"sprintboard_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"sprintboard_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];


var backlog_grid_context=
	[
		{ type:"fieldset" , name:"backlog_list", label:"Backlog List", list:[
				{ type:"container" , name:"backlog_grid_container", id:"backlog_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"backlog_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"view:board:viewBoard", value:"View Board", width:"100"  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"backlog_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"backlog_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"backlog_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var feature_tab_grid_context=
	[
		{ type:"fieldset" , name:"feature_list", label:"Feature List", list:[
				{ type:"container" , name:"feature_tab_grid_container", id:"feature_tab_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"feature_action_set", label:"Actions", offsetLeft:"30", list:[
                { type:"button" , name:"feature:featuretestresult:handle_custom_changes", value:"Feature Run Facts", width:"120", command:""  }, 
				{ type:"button" , name:"update:feature:feature_putto_backlog", value:"Remove From Sprint", width:"120", command:"feature:feature_"  },
				  
		 ]  },
		 { type:"fieldset" , name:"feature_view_set", label:"Next Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:tasks", value:"Go To Tasks", width:"120"  }, 
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"feature_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"feature_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"feature_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var tasks_grid_context=
	[
		{ type:"fieldset" , name:"tasks_list", label:"Tasks List", list:[
				{ type:"container" , name:"tasks_grid_container", id:"tasks_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"tasks_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:tasks", value:"Create", width:"100"  },
				{ type:"button" , name:"save:tasks", value:"Save", width:"100"  },
				{ type:"button" , name:"burndownchart:tasks:removeMe", value:"Close", width:"100", command:""  }  
		 ]  },
		 { type:"fieldset" , name:"tasks_next_step", label:"Next Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:tasknote:tabwidget", value:"Go To Note", width:"100"  },   
		 ]  },
		 { type:"fieldset" , name:"tasks_previous_step", label:"Previous Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:feature:tabwidget", value:"Back To Feature", width:"100"  },   
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"tasks_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"tasks_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"tasks_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];


var tasknote_grid_context=
	[
		{ type:"fieldset" , name:"tasknote_list", label:"Task Note List", list:[
				{ type:"container" , name:"tasknote_grid_container", id:"tasknote_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"tasknote_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:tasknote", value:"Create", width:"100"  },
				{ type:"button" , name:"save:tasknote", value:"Save", width:"100"  },
				
		 ]  },
		 { type:"fieldset" , name:"tasks_previous_step", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:tasks:tabwidget", value:"Back To Task", width:"100"  }, 
		        { type:"button" , name:"scroll:feature:tabwidget", value:"Back To Feature", width:"100"  },
		        { type:"button" , name:"scroll:mytasks", value:"Back To Task", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"tasknote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"tasknote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"tasknote_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var projectboardresult_grid_context=
	[
		{ type:"fieldset" , name:"projectboardresult_list", label:"Test Run Facts", list:[
			{ type:"container" , name:"projectboardresult_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"projectboardresult_action_set", label:"Actions", offsetLeft:"30", list:[
      { type:"button" , name:"projectboard:projectboardresult:removeMe", value:"Close", width:"100", command:""  }                                                          				
        ]  },
     { type:"newcolumn"   },
	 { type:"fieldset" , name:"projectboardresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"projectboardresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"projectboardresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

var burndownchart_grid_context=
	[
		{ type:"fieldset" , name:"burndownchart_list", label:"Burndown Chart", list:[
			{ type:"container" , name:"burndownchart_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"burndownchart_action_set", label:"Actions", offsetLeft:"30", list:[
      { type:"button" , name:"burndownchart:sprinttasks:handle_custom_changes", value:"Sprint Tasks", width:"100"  },
      { type:"button" , name:"projectboard:burndownchart:removeMe", value:"Close", width:"100", command:""  },
      //{ type:"button" , name:"search:tasks", value:"Adjust Tasks",  width:"100" }
        ]  },
     { type:"newcolumn"   },
	 { type:"fieldset" , name:"burndownchart_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"burndownchart_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"burndownchart_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

var sprinttasks_grid_context=
	[
		{ type:"fieldset" , name:"sprinttasks_list", label:"Sprint Tasks", list:[
				{ type:"container" , name:"sprinttasks_grid_container", id:"sprinttasks_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprinttasks_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"update:sprinttasks:update_sprint_tasks", value:"Save", width:"100"  },
				//{ type:"button" , name:"subtasks:sprinttasks:create_testuser_tasks", value:"Add Sub Tasks", width:"100"  },
				//{ type:"button" , name:"sprinttasks:feature:handle_custom_changes", value:"View Feature", width:"100"  },
				//{ type:"button" , name:"sprinttasks:sprinttasks:remove_custom_table", value:"Clear", width:"100", command:""  }
		 ]  },
		 { type:"fieldset" , name:"sprinttasks_next_step", label:"Previous Steps", offsetLeft:"30", list:[
		       { type:"button" , name:"scroll:projectboard", value:"Go To Board", width:"100"  },   
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"sprinttasks_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"sprinttasks_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"sprinttasks_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
var sprintresult_grid_context=
	[
		{ type:"fieldset" , name:"sprintresult_list", label:"Test Run Facts", list:[
			{ type:"container" , name:"sprintresult_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"sprintresult_action_set", label:"Actions", offsetLeft:"30", list:[
	       { type:"button" , name:"projectboard:sprintresult:removeMe", value:"Close", width:"100", command:""  }                                                          				
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"sprintresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"sprintresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"sprintresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

var sprintvelocity_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"sprintvelocity_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	            { type:"select" , name:"choice", label:"Selection", inputWidth:140, options:[
	              { value:"Velocity", text:"Overal Velocity" },
	              { value:"Development", text:"Dev - Estimate vs Actual" },
	              { value:"Testing", text:"QA - Estimate vs Actual" },
	              { value:"Overall", text:"Overall - Estimate vs Actual" },
	              ] },
	              { type:"container" , name:"sprintvelocity_chart1_cont", inputWidth:"1100", inputHeight:"400"  },
	              { type:"button" , name:"projectboard:sprintvelocity:removeMe", value:"Close", width:"100", command:"project:remove_custom_table"  },
	                                                                                            			
	    ]  },
	    { type:"newcolumn"   },
		{ type:"fieldset" , name:"sprintvelocity_list", label:"Project Velocity", list:[
			{ type:"container" , name:"sprintvelocity_grid_container", inputWidth:"500", inputHeight:"200"  },
			{ type:"newcolumn"   },
			{ type:"container" , name:"sprintvelocity_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  },
	];

function update_backlog_relation(table){
	 //dhtmlx.message("Row Id="+rowId + " table="+table);
	 var data_form=dataforms[table];
	 var url=www_url+'/rest/feature';
	 var objid;
	 var data;
	 var response
	 try{
		  data_form.forEachItem(function(name){
	          
	          var colid=name;
		           if(colid){
		        	   
		              var tags=colid.split(":");
		             
		              if(tags.length==4){
		               var col=tags[1];
		               var isnullable=tags[1];
		               var type=tags[3].replace("2","");
		               var val =data_form.getItemValue(colid);
		               var coltype=data_form.getItemType(colid);
		               
		               if(col=='objid' && val!='newid' &&val!=''){
		            	   url+="/"+val+"/update"
		               }
		               
		               if(col.indexOf("backlog2board")>=0 &&val!=''){
		               		data="feature2board='"+val+"'";
		               }
		              }
		           }
		          
		        });
		  if(data){
		       url+='?token='+token +'&data='+data;
		       response=executeGet(url);
		  }else{
			  if(debug){
				  dhtmlx.message("method>>update_backlog_relation >> No data to update!")
			  }
			 
		  }
		       
		}catch(err){
		  dhtmlx.message(err);
		  return null;
		}	
		return response;
}

function feature_putto_backlog(name){
	 var response;
	 var items=name.split(":");
	 var table=items[1];
	 var url=www_url+'/rest/feature';
	 var grid=gridlist[table];
	 if(grid){
		 var rowid=grid.getSelectedRowId();
		 if(!rowid){
			 dhtmlx.alert("Please select a row first to put this feature to backlog!")
		 }
		 if(rowid){
			 var feature_objid=grid.cells(rowid,1).getValue();
			 if(feature_objid){
				 url+="/"+feature_objid+"/update";
				 data="feature2board=null";
				 url+='?token='+token +'&data='+data;
			    response=executeGet(url);
			    viewBoard();
			 }
			 
		 }
		 
	 }
	 //dhtmlx.alert(response);
	 return response;
	
}

function projectboard_advance_context(){
	var local=[];
	var grid=gridlist["sprintboard"];
	if(grid){
		 var cont;
		 var idx=0;
	try{
		grid.forEachRow(function(id){
			var labelval=grid.cells(id,3).getValue();
			 if(local.length==0 &&idx==0){
				 local[idx]={ type:"fieldset" , name:"board_fieldset_"+id, label:labelval, offsetLeft:"20", list:[
				           { type:"container" , name:"board_container_"+id, inputWidth:300, inputHeight:500  },
				           { type:"container" , name:"board_grid_container_"+id, inputWidth:0, inputHeight:0  }
				           ]  };
				    
			 }else{
				 local[++idx]={ type:"newcolumn"  };
				 local[++idx]={ type:"fieldset" , name:"board_fieldset_"+id, label:labelval, offsetLeft:"20", list:[
				 { type:"container" , name:"board_container_"+id, inputWidth:300, inputHeight:500  },
				 { type:"container" , name:"board_grid_container_"+id, inputWidth:0, inputHeight:0  }
				 ]  };
			 }
			 /*
				grid.forEachCell(rowId,function(c){
		          
		           		var colid=grid.getColumnId(colIdx);
		           		var value=grid.cells(rowId,colIdx).getValue();
		           });
		           */
			});
	}catch(err){
		dhtmlx.message(err);
	}
		return local;
      
	}else{
		dhtmlx.message("Please use search tab and select a sprint to go to sprint board!");
	}

}
function loadDataView(){
	

	if(advance_form){
		
		var grid=gridlist["sprintboard"];
		if(grid){
			
		try{
			grid.forEachRow(function(id){
				var labelval=grid.cells(id,3).getValue();
				var board_objid=grid.cells(id,1).getValue();
				var sprint_objid=grid.cells(id,2).getValue();
				
				boardlayout[id] = new dhtmlXLayoutObject({
					parent: advance_form.getContainer("board_container_"+id),
					pattern: '1C'
				});

				boardcell[id] = boardlayout[id].cells('a');
				boardcell[id].setText(labelval);
				var board = boardcell[id].attachDataView({
					type:{
						template:"#Sprint# <br/> #Feature# <br/> #Scenerio# <br/>#Testcount# <br/>#Executed# <br/>#Passed# <br/>#Failed# <br/>#Enddate#",
						//template_edit:'<input class=\'dhx_item_editor\' bind=\'obj.Package\'>',
						padding:5,
						height:120
					},
					drag:true,
					select:true
					
				});
				
				board.attachEvent("onItemClick", function (id, ev, html){
				    //dhtmlx.message("Item id="+id);
				    addSprintTask("feature",id);
				    return true;
				});
				board.attachEvent("onAfterDrop", function (context,ev){
					 var url=www_url+'/rest/feature/'+context.start+'/update';
					 var data="feature2board='"+board.get("id").objid+"',status='"+board.get("id").status+"'";
					 url+='?token='+token +'&data='+data;
				     response=executeGet(url);
				     viewBoard();
				     //dhtmlx.message("Board Updated!")
				     
				});
				//set board objid
				board.set("id",{
				    "objid":board_objid,
				    "status":labelval
				});
			
				var localgrid= new dhtmlXGridObject(advance_form.getContainer("board_grid_container_"+id));
				localgrid.setUserData("","boardname",labelval);
				localgrid.setUserData("","board_objid",board_objid);
				var gurl=www_url+'/rest/boarddata/filter?token='+token +"&filters=boarddata2board='"+board_objid+"' and boarddata2sprint='"+sprint_objid+"'";
				localgrid.load(gurl);
				localgrid.attachEvent("onXLE", function(localgrid,count){
					hideGrid(localgrid);
					bindData(board,localgrid);
			  	}); 
				boarddataview[id]=board;
				boardgrid[id]=localgrid;
				
				});
		}catch(err){
			dhtmlx.message(err + " Please select the sprint and board first using search tab to load data in sprint Board");
		}
		
	}
  }
}

function addSprintTask(table,id){
	search_tabbar.tabs("advance").disable();
	search_tabbar.tabs("task").enable();
	search_tabbar.tabs("task").setActive();
	initTabWidget();
	if(task_form){
		task_form.unload();
		task_form=null;
	}
	var str = [
	   		{ type:"container" , name:"task_tab_container", inputWidth:"100%", inputHeight:"100%"  }
	   	];
	task_form = task_tab.attachForm(str);
	tabwidget_container=table+"_tab_container";
	var filter="objid='"+id+"'";
    addTabContainer(table,tabwidget_container,task_form,filter);
    addTabWidgetLayout(table,tabwidget_container,task_form,filter);
    
}



function bindData(boarddataview,grid){
	if(grid &&boarddataview){
		grid.forEachRow(function(id){
			var feature_objid=grid.cells(id,1).getValue();
			var feature_name=grid.cells(id,3).getValue();
			var sprint=grid.cells(id,4).getValue();
			var startdate=grid.cells(id,6).getValue();
			var enddate=grid.cells(id,7).getValue();
			var scenerio_count=grid.cells(id,8).getValue();
			var testcount=grid.cells(id,9).getValue();
			var executed=grid.cells(id,10).getValue();
			var passed=grid.cells(id,11).getValue();
			var failed=grid.cells(id,12).getValue();
			if(feature_name){
				
				boarddataview.add({
				    id:feature_objid,
				    Sprint:sprint,
				    Feature:feature_name,
				    Scenerio:"Scenerio Count:"+scenerio_count,
				    Testcount:"Test Count:"+testcount,
				    Executed:"Executed:"+executed,
				    Passed:"Passed:"+passed,
				    Failed:"Failed:"+failed,
				    Enddate:"End Date:"+enddate 
				});
				
			}
		});
	
	}
	
}

function hideGrid(grid){
	var colNum=grid.getColumnsNum();
	
	for( var i=0;i<colNum;i++){
		grid.setColumnHidden(i,true);
	}
}

function viewBoard(){
	search_tabbar.tabs("regular").disable();
	search_tabbar.tabs("advance").enable();
	search_tabbar.tabs("advance").setActive();
	addAdvanceForm(menuid)
	loadDataView();
}

function compareDates(date1 , date2) {
	if(date1 &&date2){
		try{
			  return date1.getFullYear() >= date2.getFullYear()
			   && date1.getMonth()>= data2.getMonth()
			    &&  date1.getDate() >= date2.getDate();
		}catch (err){
			
		}
	}
	return false;
	}

function update_sprint_tasks(name){
	var items=name.split(":");
	var table=items[1];
	//var parent_id=getWidgetForm(table).getUserData("parent_objid","");
	//dhtmlx.alert("parent_id="+parent_id);
	if(!verify_row(table)){
		return;
	}
	
	var form=getDataForm(table);
	var storypoint;
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("storypoint")>=0){
				storypoint= form.getItemValue(name);
				if(storypoint==""){
					form.setItemValue(name,0);
				}
			 }
			
		 });
	}
	//dataforms["tasks"]=form;
	saveChanges(table, "tasks");
}