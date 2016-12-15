webpackJsonp([2,8],{

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(52)

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/jarvis/Workspace/OS/src/views/addDataFrom/addData.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fe724782", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fe724782", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] addData.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe724782!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addData.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe724782!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addData.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },

/***/ 54:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    attrs: {
	      "id": "content"
	    }
	  }, [_c('div', {
	    staticClass: "panel panel-default"
	  }, [_c('div', {
	    staticClass: "panel-heading"
	  }, [_c('i', {
	    staticClass: "icon-edit icon-large"
	  }), _vm._v("\n            Form Default\n          ")]), _vm._v(" "), _c('div', {
	    staticClass: "panel-body"
	  }, [_c('form', [_c('fieldset', [_c('legend', [_vm._v("Default Inputs")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Text field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Password field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.")])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Disabled field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "disabled": "",
	      "placeholder": "This is field is disabled!"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Tooltip field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "data-toggle": "tooltip",
	      "placeholder": "This is field is disabled!",
	      "title": "",
	      "data-original-title": "Input tips here"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Textarea field")]), _vm._v(" "), _c('textarea', {
	    staticClass: "form-control",
	    attrs: {
	      "rows": "4"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("File input")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "file"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Large field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control input-lg",
	    attrs: {
	      "placeholder": ".input-lg",
	      "type": "text"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Small field")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control input-sm",
	    attrs: {
	      "placeholder": ".input-sm",
	      "type": "text"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "form-group row"
	  }, [_c('div', {
	    staticClass: "col-lg-2"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Column sizing")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-2",
	      "type": "text"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-3"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Column sizing")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-3",
	      "type": "text"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-7"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Column sizing")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-7",
	      "type": "text"
	    }
	  })])])]), _vm._v(" "), _c('fieldset', [_c('legend', [_vm._v("Input Validation States")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-warning"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-warning"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.")])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-error"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-error"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.")])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-success"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-success"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.")])])]), _vm._v(" "), _c('fieldset', [_c('legend', [_vm._v("Checkboxes and radios")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Checkbox")]), _vm._v(" "), _c('div', {
	    staticClass: "checkbox"
	  }, [_c('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), _vm._v("\n                    Option one is this and that—be sure to include why it's great\n                  ")])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Inline checkbox")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "checkbox-inline"
	  }, [_c('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), _vm._v("\n                    1\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "checkbox-inline"
	  }, [_c('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), _vm._v("\n                    2\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "checkbox-inline"
	  }, [_c('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), _vm._v("\n                    3\n                  ")])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Radio")]), _vm._v(" "), _c('div', {
	    staticClass: "radio"
	  }, [_c('input', {
	    attrs: {
	      "checked": "",
	      "name": "options_radio",
	      "type": "radio",
	      "value": "option1"
	    }
	  }), _vm._v("\n                    Option one is this and that—be sure to include why it's great\n                    "), _c('br'), _vm._v(" "), _c('input', {
	    attrs: {
	      "checked": "",
	      "name": "options_radio",
	      "type": "radio",
	      "value": "option2"
	    }
	  }), _vm._v("\n                    Option two can be something else and selecting it will deselect option one\n                  ")])])]), _vm._v(" "), _c('fieldset', [_c('legend', [_vm._v("Selects")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Single select")]), _vm._v(" "), _c('select', {
	    staticClass: "form-control"
	  }, [_c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")])])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "control-label"
	  }, [_vm._v("Multiple select")]), _vm._v(" "), _c('select', {
	    staticClass: "form-control",
	    attrs: {
	      "multiple": ""
	    }
	  }, [_c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "form-actions"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("Submit")]), _vm._v(" "), _c('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Cancel")])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "panel panel-default"
	  }, [_c('div', {
	    staticClass: "panel-heading"
	  }, [_c('i', {
	    staticClass: "icon-edit icon-large"
	  }), _vm._v("\n            Form Horizontal\n          ")]), _vm._v(" "), _c('div', {
	    staticClass: "panel-body"
	  }, [_c('form', {
	    staticClass: "form-horizontal"
	  }, [_c('fieldset', [_c('legend', [_vm._v("Default inputs")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Text field")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Password field")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.%fieldset")])])]), _vm._v(" "), _c('legend', [_vm._v("Validation inputs")]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-warning"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Text field")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-error"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Password field")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "form-group has-success"
	  }, [_c('label', {
	    staticClass: "col-lg-2 control-label"
	  }, [_vm._v("Input field with help")]), _vm._v(" "), _c('div', {
	    staticClass: "col-lg-10"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v("Example block-level help text here.")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "form-actions"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("Save")]), _vm._v(" "), _c('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Cancel")])])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fe724782", module.exports)
	  }
	}

/***/ }

});