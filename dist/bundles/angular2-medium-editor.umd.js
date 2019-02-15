(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('medium-editor')) :
    typeof define === 'function' && define.amd ? define('angular2-medium-editor', ['exports', '@angular/core', 'medium-editor'], factory) :
    (factory((global['angular2-medium-editor'] = {}),global.ng.core,global.MediumEditor));
}(this, (function (exports,core,MediumEditor) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Medium Editor wrapper directive.
     *
     * Examples
     * <medium-editor
     * [(editorModel)]="textVar"
     *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
     *    [editorPlaceholder]="placeholderVar"></medium-editor>
     */
    var MediumEditorDirective = /** @class */ (function () {
        function MediumEditorDirective(el) {
            this.el = el;
            this.update = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        MediumEditorDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.element = this.el.nativeElement;
                this.element.innerHTML = '<div class="me-editable">' + this.model + '</div>';
                this.active = true;
                if (this.placeholder && this.placeholder.length) {
                    this.options.placeholder = {
                        text: this.placeholder
                    };
                }
                // Global MediumEditor
                this.editor = new MediumEditor('.me-editable', this.options);
                this.editor.subscribe('editableInput', ( /**
                 * @param {?} event
                 * @param {?} editable
                 * @return {?}
                 */function (event, editable) {
                    _this.updateModel();
                }));
            };
        /**
         * @return {?}
         */
        MediumEditorDirective.prototype.refreshView = /**
         * @return {?}
         */
            function () {
                if (this.editor) {
                    this.editor.setContent(this.model);
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MediumEditorDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.isPropertyUpdated(changes, this.lastViewModel)) {
                    this.lastViewModel = this.model;
                    this.refreshView();
                }
            };
        /**
         * Emit updated model
         */
        /**
         * Emit updated model
         * @return {?}
         */
        MediumEditorDirective.prototype.updateModel = /**
         * Emit updated model
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value = this.editor.getContent();
                value = value.replace(/&nbsp;/g, '')
                    .replace(/<p><br><\/p>/g, '')
                    .trim();
                this.lastViewModel = value;
                this.update.emit(value);
            };
        /**
         * Remove MediumEditor on destruction of directive
         */
        /**
         * Remove MediumEditor on destruction of directive
         * @return {?}
         */
        MediumEditorDirective.prototype.ngOnDestroy = /**
         * Remove MediumEditor on destruction of directive
         * @return {?}
         */
            function () {
                this.editor.destroy();
            };
        /**
         * @param {?} changes
         * @param {?} viewModel
         * @return {?}
         */
        MediumEditorDirective.prototype.isPropertyUpdated = /**
         * @param {?} changes
         * @param {?} viewModel
         * @return {?}
         */
            function (changes, viewModel) {
                if (!changes.hasOwnProperty('model')) {
                    return false;
                }
                /** @type {?} */
                var change = changes.model;
                if (change.isFirstChange()) {
                    return true;
                }
                return !core.ɵlooseIdentical(viewModel, change.currentValue);
            };
        MediumEditorDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'medium-editor'
                    },] }
        ];
        /** @nocollapse */
        MediumEditorDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MediumEditorDirective.propDecorators = {
            model: [{ type: core.Input, args: ['editorModel',] }],
            options: [{ type: core.Input, args: ['editorOptions',] }],
            placeholder: [{ type: core.Input, args: ['editorPlaceholder',] }],
            update: [{ type: core.Output, args: ['editorModelChange',] }]
        };
        return MediumEditorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MediumEditorModule = /** @class */ (function () {
        function MediumEditorModule() {
        }
        MediumEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        exports: [
                            MediumEditorDirective
                        ],
                        declarations: [
                            MediumEditorDirective
                        ],
                    },] }
        ];
        return MediumEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MediumEditorModule = MediumEditorModule;
    exports.MediumEditorDirective = MediumEditorDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular2-medium-editor.umd.js.map