define("UsrRealtyFreedomUIPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_crighav",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_sazd81g",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_sazd81g"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPotentialCustmoer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrPotentialCustmoer_lm7t6sv",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrPotentialCustmoer_lm7t6sv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fa0zxtb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fa0zxtb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrPotentialCustmoer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_hfncr52",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrComment_rphgmht",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrComment_rphgmht"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_sazd81g": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrPotentialCustmoer_lm7t6sv": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustmoer"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrComment_rphgmht": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});