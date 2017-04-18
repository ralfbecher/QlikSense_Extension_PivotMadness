define(["jquery", "qlik", "text!./template.ng.html"],
    function ($, qlik, ngTemplate) {
        'use strict';

        return {
            initialProperties: {
                version: 1.0,
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 0,
                        qHeight: 0
                }]
                }
            },
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    settings: {
                        uses: "settings",
                        items: {

                            options: {
                                label: "Options",
                                type: "items",
                                items: {
                                    patchAllPivots: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Patch all Pivots on Sheet",
                                        ref: "patchAllPivots",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            },

                            topDims: {
                                type: "items",
                                label: "Top Dims",
                                items: {
                                    hideTopDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Hide (F5)",
                                        ref: "hideTopDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    disableInteractionTopDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Disable Interaction (F5)",
                                        ref: "disableInteractionTopDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        },
                                        show: function (layout) {
                                            return !(layout.hideTopDims);
                                        }
                                    },
                                    disableSelectionTopDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Disable Selection (F5)",
                                        ref: "disableSelectionTopDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        },
                                        show: function (layout) {
                                            return !(layout.hideTopDims || layout.disableInteractionTopDims);
                                        }
                                    },
                                    expandTopButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Expand Button",
                                        ref: "expandTopButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    collapseTopButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Collapse Button",
                                        ref: "collapseTopButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    rotateLeftTopButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Rotate to left Button",
                                        ref: "rotateLeftTopButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    rotateRightTopButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Rotate to right Button",
                                        ref: "rotateRightTopButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            },
                            leftDims: {
                                type: "items",
                                label: "Left Dims",
                                items: {
                                    hideLeftDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Hide (F5)",
                                        ref: "hideLeftDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    disableInteractionLeftDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Disable Interaction (F5)",
                                        ref: "disableInteractionLeftDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        },
                                        show: function (layout) {
                                            return !(layout.hideLeftDims);
                                        }
                                    },
                                    disableSelectionLeftDims: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Disable Selection (F5)",
                                        ref: "disableSelectionLeftDims",
                                        defaultValue: false,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        },
                                        show: function (layout) {
                                            return !(layout.hideLeftDims || layout.disableInteractionLeftDims);
                                        }
                                    },
                                    expandLeftButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Expand Button",
                                        ref: "expandLeftButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    collapseLeftButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Collapse Button",
                                        ref: "collapseLeftButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    rotateLeftLeftButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Rotate to left Button",
                                        ref: "rotateLeftLeftButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    rotateRightLeftButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Rotate to right Button",
                                        ref: "rotateRightLeftButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            },
                            fullExpand: {
                                type: "items",
                                label: "Full Expand",
                                items: {
                                    fullExpandedOnButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Full Expand 'on' Button",
                                        ref: "fullExpandedOnButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    fullExpandedOffButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Full Expand 'off' Button",
                                        ref: "fullExpandedOffButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            },
                            indentMode: {
                                type: "items",
                                label: "Indent Mode",
                                items: {
                                    indentModeOnButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Indent Mode 'on' Button",
                                        ref: "indentModeOnButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    },
                                    indentModeOffButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Indent Mode 'of' Button",
                                        ref: "indentModeOffButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            },
                            transpose: {
                                type: "items",
                                label: "Transpose",
                                items: {
                                    transposeDimsButton: {
                                        type: "boolean",
                                        component: "switch",
                                        label: "Show Transpose Dims Button",
                                        ref: "transposeDimsButton",
                                        defaultValue: true,
                                        trueOption: {
                                            value: true,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: false,
                                            translation: "properties.off"
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            },
            snapshot: {
                canTakeSnapshot: false
            },
            template: ngTemplate,
            controller: ["$scope", "$document", "$element", function (scope, document, element) {

                if (scope.component.model.hasOwnProperty("enigmaModel")) {
                    // Enigma until 3.2.2
                    scope.enigmaModel = scope.component.model.enigmaModel.app;    
                } else {
                    // Enigma from 3.2.3
                    scope.enigmaModel = scope.component.model.app;    
                }
                scope.vm = {};
                scope.vm.sheetId = qlik.navigation.getCurrentSheetId().sheetId;
                scope.vm.sheetObjects = [];
                scope.vm.pivotObjectsToPatch = [];
                scope.vm.pivotLeftDims = [];
                scope.vm.pivotColumnOrder = [];

                // button functions
                scope.vm.expandTopAll = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "top",
                            "action": "expand"
                        });
                }
                scope.vm.collapseTopAll = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "top",
                            "action": "collapse"
                        });
                }
                scope.vm.expandLeftAll = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "left",
                            "action": "expand"
                        });
                }
                scope.vm.collapseLeftAll = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "left",
                            "action": "collapse"
                        });
                }
                scope.vm.fullExpandOn = function () {
                    if (!isEditMode())
                        patchPivot({
                            "fullExpand": "on"
                        });
                }
                scope.vm.fullExpandOff = function () {
                    if (!isEditMode())
                        patchPivot({
                            "fullExpand": "off"
                        });
                }
                scope.vm.indentModeOn = function () {
                    if (!isEditMode())
                        patchPivot({
                            "indentMode": "on"
                        });
                }
                scope.vm.indentModeOff = function () {
                    if (!isEditMode())
                        patchPivot({
                            "indentMode": "off"
                        });
                }
                scope.vm.rotateLeftTop = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "top",
                            "action": "rotateLeft"
                        });
                }
                scope.vm.rotateRightTop = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "top",
                            "action": "rotateRight"
                        });
                }
                scope.vm.rotateLeftLeft = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "left",
                            "action": "rotateLeft"
                        });
                }
                scope.vm.rotateRightLeft = function () {
                    if (!isEditMode())
                        patchPivot({
                            "level": "left",
                            "action": "rotateRight"
                        });
                }
                scope.vm.transposeDims = function () {
                    if (!isEditMode())
                        patchPivot({
                            "transpose": true
                        });
                }

                // local functions
                function getSheetObjects() {
                    scope.vm.sheetObjects = [];
                    scope.vm.pivotObjectsToPatch = [];
                    scope.vm.pivotLeftDims = [];
                    scope.vm.pivotColumnOrder = [];
                    return scope.enigmaModel.getObject(scope.vm.sheetId).then(function (sheetObj) {
                        return sheetObj.getProperties().then(function (sheetProp) {
                            if (scope.vm.patchAllPivots) {
                                scope.vm.sheetObjects = sheetProp.cells.filter(function (d) {
                                    return (d.type === 'pivot-table');
                                });
                            } else {
                                var pivotHelper = -1;
                                var sheetObjectsTmp = sheetProp.cells.filter(function (d, i) {
                                    if (d.name === scope.layout.qInfo.qId) pivotHelper = i;
                                    return (d.type === 'pivot-table' || d.name === scope.layout.qInfo.qId);
                                });
                                if (sheetObjectsTmp.length > 1 && pivotHelper > 0) {
                                    // patch pivot table previously added before helper
                                    scope.vm.sheetObjects.push(sheetObjectsTmp[pivotHelper - 1]);
                                }
                            }
                            console.log("scope.vm.sheetObjects", scope.vm.sheetObjects);
                        });

                    });
                }

                function layoutOptions() {
                    scope.vm.sheetObjects.forEach(function (obj) {
                        setLayoutOption(obj.name);
                    });

                    function setLayoutOption(tid) {
                        var selector = tid.length > 0 ? "div[tid='" + tid + "'] " : "";
                        console.log(tid, selector);

                        if (scope.vm.hideTopDims) {
                            $(selector + '.top-meta-headers .qv-pt-meta-button').css('display', 'none');

                        } else {
                            if (scope.vm.disableSelectionTopDims) {
                                $(selector + '.top-meta-headers .qv-pt-meta-button').css({
                                    "pointer-events": "none"
                                });
                                $(selector + '.top-meta-headers .qv-pt-meta-button .lui-caret').css('display', 'none');

                            }
                            if (scope.vm.disableInteractionTopDims) {
                                $(selector + '.top-meta-headers .qv-pt-meta-button').css({
                                    "opacity": .7,
                                    "pointer-events": "none"
                                });
                                $(selector + '.top-meta-headers').css({
                                    "pointer-events": "none"
                                });
                                $(selector + '.top-meta-headers .qv-pt-meta-button .lui-caret').css('display', 'none');
                            }
                        }
                        if (scope.vm.hideLeftDims) {
                            $(selector + '.left-meta-headers .qv-pt-meta-button').css('display', 'none');

                        } else {
                            if (scope.vm.disableSelectionLeftDims) {
                                $(selector + '.left-meta-headers .qv-pt-meta-button').css({
                                    "pointer-events": "none"
                                });
                                $(selector + '.left-meta-headers .qv-pt-meta-button .lui-caret').css('display', 'none');

                            }
                            if (scope.vm.disableInteractionLeftDims) {
                                $(selector + '.left-meta-headers .qv-pt-meta-button').css({
                                    "opacity": .7,
                                    "pointer-events": "none"
                                });
                                $(selector + '.left-meta-headers').css({
                                    "pointer-events": "none"
                                });
                                $(selector + '.left-meta-headers .qv-pt-meta-button .lui-caret').css('display', 'none');
                            }
                        }
                    }
                }

                function patchPivot(patchMode) {
                    scope.enigmaModel.getObject(scope.vm.sheetId).then(function (sheetObj) {
                        sheetObj.getProperties().then(function (sheetProp) {
                            var proms = scope.vm.sheetObjects.map(function (obj, i) {
                                //console.log(obj);
                                var objName = obj.name;
                                return scope.enigmaModel.getObject(obj.name).then(function (obj) {
                                    return obj.getProperties();
                                });
                            });
                            var colsLeft = [];
                            var colsTop = [];
                            Promise.all(proms).then(function (props) {
                                if (scope.vm.pivotObjectsToPatch.length === 0) {
                                    props.forEach(function (prop, i) {
                                        //console.log(i, prop);
                                        if (prop.hasOwnProperty('qHyperCubeDef')) {
                                            scope.vm.pivotObjectsToPatch.push(i);
                                            scope.vm.pivotLeftDims.push(prop.qHyperCubeDef.qNoOfLeftDims);
                                            scope.vm.pivotColumnOrder.push(prop.qHyperCubeDef.qInterColumnSortOrder);
                                        }
                                    });
                                }
                                //ApplyPatches
                                var proms2 = scope.vm.pivotObjectsToPatch.map(function (i) {
                                    return scope.enigmaModel.getObject(scope.vm.sheetObjects[i].name).then(function (obj) {
                                        colsLeft = scope.vm.pivotColumnOrder[i].slice(0, scope.vm.pivotLeftDims[i]);
                                        colsTop = scope.vm.pivotColumnOrder[i].slice(scope.vm.pivotLeftDims[i]);

                                        if (patchMode.transpose) {
                                            var e = colsTop.concat(colsLeft);
                                            scope.vm.pivotColumnOrder[i] = e;
                                            scope.vm.pivotLeftDims[i] = colsTop.length;
                                            return obj.applyPatches([{
                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                "qOp": "Replace",
                                                "qValue": "[" + e.toString() + "]"
                                            }, {
                                                "qPath": "/qHyperCubeDef/qNoOfLeftDims",
                                                "qOp": "Replace",
                                                "qValue": "" + colsTop.length
                                            }], true);
                                        } else {
                                            if (patchMode.fullExpand) {
                                                if (patchMode.fullExpand === "on") {
                                                    return obj.applyPatches([{
                                                        "qPath": "/qHyperCubeDef/qAlwaysFullyExpanded",
                                                        "qOp": "Replace",
                                                        "qValue": "true"
                                                    }], true);
                                                } else if (patchMode.fullExpand === "off") {
                                                    return obj.applyPatches([{
                                                        "qPath": "/qHyperCubeDef/qAlwaysFullyExpanded",
                                                        "qOp": "Replace",
                                                        "qValue": "false"
                                                    }], true);
                                                }

                                            } else if (patchMode.indentMode) {
                                                if (patchMode.indentMode === "on") {
                                                    return obj.applyPatches([{
                                                        "qPath": "/qHyperCubeDef/qIndentMode",
                                                        "qOp": "Replace",
                                                        "qValue": "true"
                                                    }], true);

                                                } else if (patchMode.indentMode === "off") {
                                                    return obj.applyPatches([{
                                                        "qPath": "/qHyperCubeDef/qIndentMode",
                                                        "qOp": "Replace",
                                                        "qValue": "false"
                                                    }], true);
                                                }

                                            } else {
                                                if (patchMode.level === "top") {
                                                    if (patchMode.action === "expand") {
                                                        return obj.expandTop("/qHyperCubeDef", 0, 0, true);
                                                    } else if (patchMode.action === "collapse") {
                                                        return obj.collapseTop("/qHyperCubeDef", 0, 0, true);
                                                    } else if (patchMode.action === "rotateLeft") {
                                                        if (scope.vm.pivotLeftDims[i] !== -1) {
                                                            var e = colsTop.shift();
                                                            colsTop.push(e);
                                                            e = colsLeft.concat(colsTop);
                                                            scope.vm.pivotColumnOrder[i] = e;
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + (colsLeft.length > 0 ? colsLeft.toString() + "," : "") + colsTop.toString() + "]"
                                                    }], true);
                                                        }
                                                    } else if (patchMode.action === "rotateRight") {
                                                        if (scope.vm.pivotLeftDims[i] !== -1) {
                                                            colsTop.unshift(colsTop.pop());
                                                            var e = colsLeft.concat(colsTop);
                                                            scope.vm.pivotColumnOrder[i] = e;
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + (colsLeft.length > 0 ? colsLeft.toString() + "," : "") + colsTop.toString() + "]"
                                                    }], true);
                                                        }
                                                    }
                                                } else { // left
                                                    if (patchMode.action === "expand") {
                                                        return obj.expandLeft("/qHyperCubeDef", 0, 0, true);
                                                    } else if (patchMode.action === "collapse") {
                                                        return obj.collapseLeft("/qHyperCubeDef", 0, 0, true);
                                                    } else if (patchMode.action === "rotateLeft") {
                                                        if (scope.vm.pivotLeftDims[i] === -1) {
                                                            var e = scope.vm.pivotColumnOrder[i].shift();
                                                            scope.vm.pivotColumnOrder[i].push(e);
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + scope.vm.pivotColumnOrder[i].toString() + "]"
                                                    }], true);
                                                        } else {
                                                            var e = colsLeft.shift();
                                                            colsLeft.push(e);
                                                            e = colsLeft.concat(colsTop);
                                                            scope.vm.pivotColumnOrder[i] = e;
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + (colsLeft.length > 0 ? colsLeft.toString() + "," : "") + colsTop.toString() + "]"
                                                    }], true);
                                                        }
                                                    } else if (patchMode.action === "rotateRight") {
                                                        if (scope.vm.pivotLeftDims[i] === -1) {
                                                            scope.vm.pivotColumnOrder[i].unshift(scope.vm.pivotColumnOrder[i].pop());
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + pivotColumnOrder[i].toString() + "]"
                                                    }], true);
                                                        } else {
                                                            colsLeft.unshift(colsLeft.pop());
                                                            var e = colsLeft.concat(colsTop);
                                                            scope.vm.pivotColumnOrder[i] = e;
                                                            return obj.applyPatches([{
                                                                "qPath": "/qHyperCubeDef/qInterColumnSortOrder",
                                                                "qOp": "Replace",
                                                                "qValue": "[" + (colsLeft.length > 0 ? colsLeft.toString() + "," : "") + colsTop.toString() + "]"
                                                    }], true);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                });
                                Promise.all(proms2).then(function (props) {
                                    console.log("all patched", props);
                                    if (patchMode.transpose) {
                                        setTimeout(function() { layoutOptions() }, 100);
                                    }
                                });
                            });
                        });
                    });

                }

                function setModel() {
                    scope.vm.patchAllPivots = scope.layout.patchAllPivots;
                    scope.vm.hideTopDims = scope.layout.hideTopDims;
                    scope.vm.disableSelectionTopDims = scope.layout.disableSelectionTopDims;
                    scope.vm.disableInteractionTopDims = scope.layout.disableInteractionTopDims;
                    scope.vm.expandTopButton = scope.layout.expandTopButton;
                    scope.vm.collapseTopButton = scope.layout.collapseTopButton;
                    scope.vm.hideLeftDims = scope.layout.hideLeftDims;
                    scope.vm.disableSelectionLeftDims = scope.layout.disableSelectionLeftDims;
                    scope.vm.disableInteractionLeftDims = scope.layout.disableInteractionLeftDims;
                    scope.vm.expandLeftButton = scope.layout.expandLeftButton;
                    scope.vm.collapseLeftButton = scope.layout.collapseLeftButton;
                    scope.vm.fullExpandedOnButton = scope.layout.fullExpandedOnButton;
                    scope.vm.fullExpandedOffButton = scope.layout.fullExpandedOffButton;
                    scope.vm.indentModeOnButton = scope.layout.indentModeOnButton;
                    scope.vm.indentModeOffButton = scope.layout.indentModeOffButton;
                    scope.vm.rotateLeftTopButton = scope.layout.rotateLeftTopButton;
                    scope.vm.rotateRightTopButton = scope.layout.rotateRightTopButton;
                    scope.vm.rotateLeftLeftButton = scope.layout.rotateLeftLeftButton;
                    scope.vm.rotateRightLeftButton = scope.layout.rotateRightLeftButton
                    scope.vm.transposeDimsButton = scope.layout.transposeDimsButton;
                }

                function isEditMode() {
                    return !(qlik.navigation.getMode() === "analysis");
                }

                // initial calls
                console.log("initial calls");
                setModel();
                getSheetObjects().then(function () {
                    layoutOptions();
                });

                // bind model, re-render when model changes
                scope.component.model.Validated.bind(function () {
                    console.log("validated calls");
                    setModel();
                    getSheetObjects().then(function () {
                        layoutOptions();
                    });
                });

                scope.$watch(isEditMode, function (newValue, oldValue) {
                    if (oldValue === true && newValue === false) {
                        console.log("watch calls");
                        getSheetObjects().then(function () {
                            layoutOptions();
                        });
                    }
                });

                // suppress hover menu
                if ($('#pivotHelper-fullScreen').length == 0) {
                    $('<style type="text/css" id="pivotHelper-fullScreen">.qv-object-bi-irregular-pivot-madness .qv-object-nav a {display: none;}</style>').appendTo("head");
                }

}]
        };
    });