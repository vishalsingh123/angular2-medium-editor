(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('medium-editor')) :
	typeof define === 'function' && define.amd ? define('angular2-medium-editor', ['exports', '@angular/core', 'medium-editor'], factory) :
	(factory((global['angular2-medium-editor'] = {}),global.ng.core,global.MediumEditor));
}(this, (function (exports,core,MediumEditor) { 'use strict';

var MediumEditorDirective = /** @class */ (function () {
    function MediumEditorDirective(el) {
        this.el = el;
        this.update = new core.EventEmitter();
    }
    MediumEditorDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.element = this.el.nativeElement;
        this.element.innerHTML = '<div class="me-editable">' + this.model + '</div>';
        this.active = true;
        if (this.placeholder && this.placeholder.length) {
            this.options.placeholder = {
                text: this.placeholder
            };
        }
        this.editor = new MediumEditor('.me-editable', this.options);
        this.editor.subscribe('editableInput', function (event, editable) {
            _this.updateModel();
        });
    };
    MediumEditorDirective.prototype.refreshView = function () {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    };
    MediumEditorDirective.prototype.ngOnChanges = function (changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    };
    MediumEditorDirective.prototype.updateModel = function () {
        var value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    };
    MediumEditorDirective.prototype.ngOnDestroy = function () {
        this.editor.destroy();
    };
    MediumEditorDirective.prototype.isPropertyUpdated = function (changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        var change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !core.ɵlooseIdentical(viewModel, change.currentValue);
    };
    return MediumEditorDirective;
}());
MediumEditorDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'medium-editor'
            },] },
];
MediumEditorDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
MediumEditorDirective.propDecorators = {
    "model": [{ type: core.Input, args: ['editorModel',] },],
    "options": [{ type: core.Input, args: ['editorOptions',] },],
    "placeholder": [{ type: core.Input, args: ['editorPlaceholder',] },],
    "update": [{ type: core.Output, args: ['editorModelChange',] },],
};

exports.MediumEditorDirective = MediumEditorDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-medium-editor.umd.js.map
