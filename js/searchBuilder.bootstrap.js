/*! SearchBuilder Bootstrap 3 styling 2.1.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-bs', 'datatables.net-searchbuilder'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-bs')(root);

				if (! root.DataTable.SearchBuilder) {
					require('datatables.net-searchbuilder')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-bs');

			if (! window.DataTable.SearchBuilder) {
				require('datatables.net-searchbuilder');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


Object.assign(DataTable.SearchBuilder.classes, {
    clearAll: 'btn btn-default dtsb-clearAll'
});
Object.assign(DataTable.Group.classes, {
    add: 'btn btn-default dtsb-add',
    clearGroup: 'btn btn-default dtsb-clearGroup',
    logic: 'btn btn-default dtsb-logic',
    search: 'btn btn-default dtsb-search'
});
Object.assign(DataTable.Criteria.classes, {
    condition: 'form-control dtsb-condition',
    data: 'form-control dtsb-data',
    delete: 'btn btn-default dtsb-delete',
    left: 'btn btn-default dtsb-left',
    right: 'btn btn-default dtsb-right',
    value: 'form-control dtsb-value'
});


return DataTable;
}));
