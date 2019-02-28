(function(){
    var modules={
        "panel-main-cpaphdeeg":    		{url:"$A/modules/p/panel-cpaphdeeg/panel-main.html",router:1},
        "panel-child-cpaphdeeg":    	{url:"$A/modules/p/panel-cpaphdeeg/panel-child.html"},    
        "participant-data":             {url:"$A/modules/p/participant-data-cpaphdeeg.html",Table:"20009295",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-cpaphdeeg",
                                            questionnaire_setup:"online-questionnaire-setup-cpaphdeeg",
                                            online_questionnaire:"online-questionnaire-app-cpaphdeeg"
                                        },
        "participant-form":             {url:"$A/modules/p/participant-form-cpaphdeeg.html",Table:"20009295"},
        "edc-notes-data":  		  		{url:"$A/modules/e/edc-notes-data.html",Table:"20009296",form_module:"edc-notes-form"},
        "edc-notes-form":  		  		{url:"$A/modules/e/edc-notes-form.html",Table:"20009296"},
        "online-questionnaire-setup-cpaphdeeg": 	{url:"$A/modules/o/online-questionnaire-setup-cpaphdeeg.html",Table:"20009295"},


        "panel-permission":   			    {url:"$A/modules/p/permission/permission-panel.html",router:1},
        "permission-check":                 {url:"$A/modules/p/permission/permission-check.html"},
        "permission-role-login-data":       {url:"$A/modules/p/permission/permission-role-login-data.html",Table:"91000617",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$A/modules/p/permission/permission-role-login-form.html",Table:"91000617"},
        "permission-role-table-group-data": {url:"$A/modules/p/permission/permission-role-table-group-data.html",Table:"91000616",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$A/modules/p/permission/permission-role-table-group-form.html",Table:"91000616"},
        "permission-query-data":            {url:"$A/modules/p/permission/permission-query-data.html",Table:"91000615",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$A/modules/p/permission/permission-query-form.html",Table:"91000615"},

    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
