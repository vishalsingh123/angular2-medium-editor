import { Directive, ElementRef, EventEmitter, Input, Output, ɵlooseIdentical } from '@angular/core';
import * as MediumEditor from 'medium-editor';

var MediumEditorDirective = /** @class */ (function () {
    function MediumEditorDirective(el) {
        this.el = el;
        this.update = new EventEmitter();
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
        return !ɵlooseIdentical(viewModel, change.currentValue);
    };
    return MediumEditorDirective;
}());
MediumEditorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'medium-editor'
            },] },
];
MediumEditorDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
MediumEditorDirective.propDecorators = {
    "model": [{ type: Input, args: ['editorModel',] },],
    "options": [{ type: Input, args: ['editorOptions',] },],
    "placeholder": [{ type: Input, args: ['editorPlaceholder',] },],
    "update": [{ type: Output, args: ['editorModelChange',] },],
};

export { MediumEditorDirective };
//# sourceMappingURL=angular2-medium-editor.js.map
