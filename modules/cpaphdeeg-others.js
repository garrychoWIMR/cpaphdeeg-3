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
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
