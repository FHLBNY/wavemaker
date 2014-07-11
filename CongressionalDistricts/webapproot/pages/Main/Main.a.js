dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
cbExportCSVClick: function(inSender) {
jojo = this.almanaccongressDojoGrid.toCSV(true);
alert(jojo);
},
_end: 0
});

Main.widgets = {
almanaccongressLiveVariable1: ["wm.LiveVariable", {"type":"com.fhlbny.prod01db.data.AlmanacCongress"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.fhlbny.prod01db.data.AlmanacCongress","view":[
{"caption":"RepId","sortable":true,"dataIndex":"repId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"CongDistrictNo","sortable":true,"dataIndex":"congDistrictNo","type":"java.lang.Short","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"StateAbbr","sortable":true,"dataIndex":"stateAbbr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"RepLastName","sortable":true,"dataIndex":"repLastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"RepFirstName","sortable":true,"dataIndex":"repFirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"RepPfxName","sortable":true,"dataIndex":"repPfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"RepSfxName","sortable":true,"dataIndex":"repSfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"RepMiName","sortable":true,"dataIndex":"repMiName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"PolPartyName","sortable":true,"dataIndex":"polPartyName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
almanaccongressLiveVariable2: ["wm.LiveVariable", {"type":"com.fhlbny.prod01db.data.AlmanacCongress"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.fhlbny.prod01db.data.AlmanacCongress","view":[
{"caption":"RepId","sortable":true,"dataIndex":"repId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"CongDistrictNo","sortable":true,"dataIndex":"congDistrictNo","type":"java.lang.Short","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"StateAbbr","sortable":true,"dataIndex":"stateAbbr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"RepLastName","sortable":true,"dataIndex":"repLastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"RepFirstName","sortable":true,"dataIndex":"repFirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"RepPfxName","sortable":true,"dataIndex":"repPfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"RepSfxName","sortable":true,"dataIndex":"repSfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"RepMiName","sortable":true,"dataIndex":"repMiName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"PolPartyName","sortable":true,"dataIndex":"polPartyName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
almanaccongressLiveVariable3: ["wm.LiveVariable", {"type":"com.fhlbny.prod01db.data.AlmanacCongress"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.fhlbny.prod01db.data.AlmanacCongress","view":[
{"caption":"RepId","sortable":true,"dataIndex":"repId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"CongDistrictNo","sortable":true,"dataIndex":"congDistrictNo","type":"java.lang.Short","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"StateAbbr","sortable":true,"dataIndex":"stateAbbr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"RepLastName","sortable":true,"dataIndex":"repLastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"RepFirstName","sortable":true,"dataIndex":"repFirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"RepPfxName","sortable":true,"dataIndex":"repPfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"RepSfxName","sortable":true,"dataIndex":"repSfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"RepMiName","sortable":true,"dataIndex":"repMiName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"PolPartyName","sortable":true,"dataIndex":"polPartyName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
sv_conngressionalDistrict: ["wm.ServiceVariable", {"firstRow":1,"inFlightBehavior":"executeLast","maxResults":10,"operation":"getAlmanacCongressAll","service":"prod01DB"}, {}, {
input: ["wm.ServiceInput", {"type":"getAlmanacCongressAllInputs"}, {}]
}],
almanaccongressLievVariablePaging: ["wm.LiveVariable", {"firstRow":1,"inFlightBehavior":"executeLast","maxResults":10,"type":"com.fhlbny.prod01db.data.AlmanacCongress"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.fhlbny.prod01db.data.AlmanacCongress","view":[
{"caption":"RepId","sortable":true,"dataIndex":"repId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"CongDistrictNo","sortable":true,"dataIndex":"congDistrictNo","type":"java.lang.Short","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"StateAbbr","sortable":true,"dataIndex":"stateAbbr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},
{"caption":"RepLastName","sortable":true,"dataIndex":"repLastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},
{"caption":"RepFirstName","sortable":true,"dataIndex":"repFirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},
{"caption":"RepPfxName","sortable":true,"dataIndex":"repPfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},
{"caption":"RepSfxName","sortable":true,"dataIndex":"repSfxName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},
{"caption":"RepMiName","sortable":true,"dataIndex":"repMiName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"},
{"caption":"PolPartyName","sortable":true,"dataIndex":"polPartyName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1008,"subType":null,"widthUnits":"px"}
]}, {}]
}],
almanaccongressDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"314px","height":"314px","title":"almanaccongress","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
almanaccongressLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"244px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"almanaccongressLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"almanaccongressDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
repIdEditor1: ["wm.Number", {"borderColor":"#333333","caption":"RepId","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"repId","height":"26px","required":true,"width":"100%"}, {}],
congDistrictNoEditor1: ["wm.Number", {"borderColor":"#333333","caption":"CongDistrictNo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"congDistrictNo","height":"26px","required":true,"width":"100%"}, {}],
stateAbbrEditor1: ["wm.Text", {"caption":"StateAbbr","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"stateAbbr","height":"26px","maxChars":2,"required":true,"width":"100%"}, {}],
repLastNameEditor1: ["wm.Text", {"caption":"RepLastName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"repLastName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}],
repFirstNameEditor1: ["wm.Text", {"caption":"RepFirstName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"repFirstName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}],
repPfxNameEditor1: ["wm.Text", {"caption":"RepPfxName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"repPfxName","height":"26px","maxChars":30,"width":"100%"}, {}],
repSfxNameEditor1: ["wm.Text", {"caption":"RepSfxName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"repSfxName","height":"26px","maxChars":30,"width":"100%"}, {}],
repMiNameEditor1: ["wm.Text", {"caption":"RepMiName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"repMiName","height":"26px","maxChars":30,"width":"100%"}, {}],
polPartyNameEditor1: ["wm.Text", {"caption":"PolPartyName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"polPartyName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
almanaccongressSaveButton: ["wm.Button", {"caption":"Save","height":"30px","margin":"4"}, {"onclick":"almanaccongressLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"almanaccongressLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
almanaccongressCancelButton: ["wm.Button", {"caption":"Cancel","height":"30px","margin":"4"}, {"onclick":"almanaccongressDialog.hide","onclick1":"almanaccongressLiveForm1.cancelEdit"}]
}]
}],
loadingDialog1: ["wm.LoadingDialog", {"serviceVariableToTrack":["almanaccongressLievVariablePaging"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"almanaccongressLiveForm1","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
almanaccongressLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"almanaccongressDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"almanaccongressLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"almanaccongressDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"almanaccongressSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
dataNavigator1: ["wm.DataNavigator", {"border":"0","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"almanaccongressLievVariablePaging","targetProperty":"liveSource"}, {}]
}]
}],
almanaccongressDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Rep ID: \" + ${repId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"District Number: \" + ${congDistrictNo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Political Party: \" + ${polPartyName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"First Name: \" + ${repFirstName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Last Name: \" + ${repLastName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Middle Initial: \" + ${repMiName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name Prefix: \" + ${repPfxName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name Suffix: \" + ${repSfxName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"State: \" + ${stateAbbr}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"repId","title":"Rep ID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"congDistrictNo","title":"District Number","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"polPartyName","title":"Political Party","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"repFirstName","title":"First Name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"repLastName","title":"Last Name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"repMiName","title":"Middle Initial","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"repPfxName","title":"Name Prefix","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"repSfxName","title":"Name Suffix","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"stateAbbr","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"","height":"45%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"styles":{}}, {"onCellDblClick":"almanaccongressLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"almanaccongressLievVariablePaging","targetProperty":"dataSet"}, {}]
}]
}],
almanaccongressGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
cbExportCSV: ["wm.Button", {"caption":"Export CSV","height":"30px","imageIndex":73,"imageList":"app.silkIconList","margin":"4","width":"120px"}, {"onclick":"cbExportCSVClick"}],
almanaccongressNewButton: ["wm.Button", {"caption":"New","height":"30px","margin":"4"}, {"onclick":"almanaccongressLivePanel1.popupLivePanelInsert"}],
almanaccongressUpdateButton: ["wm.Button", {"caption":"Update","height":"30px","margin":"4"}, {"onclick":"almanaccongressLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"almanaccongressDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
almanaccongressDeleteButton: ["wm.Button", {"caption":"Delete","height":"30px","margin":"4"}, {"onclick":"almanaccongressLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"almanaccongressDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';