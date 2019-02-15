/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, ɵlooseIdentical } from '@angular/core';
import * as MediumEditor from 'medium-editor';
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
        this.update = new EventEmitter();
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
        this.editor.subscribe('editableInput', (/**
         * @param {?} event
         * @param {?} editable
         * @return {?}
         */
        function (event, editable) {
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
        return !ɵlooseIdentical(viewModel, change.currentValue);
    };
    MediumEditorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'medium-editor'
                },] }
    ];
    /** @nocollapse */
    MediumEditorDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MediumEditorDirective.propDecorators = {
        model: [{ type: Input, args: ['editorModel',] }],
        options: [{ type: Input, args: ['editorOptions',] }],
        placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
        update: [{ type: Output, args: ['editorModelChange',] }]
    };
    return MediumEditorDirective;
}());
export { MediumEditorDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.lastViewModel;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.active;
    /** @type {?} */
    MediumEditorDirective.prototype.model;
    /** @type {?} */
    MediumEditorDirective.prototype.options;
    /** @type {?} */
    MediumEditorDirective.prototype.placeholder;
    /** @type {?} */
    MediumEditorDirective.prototype.update;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1tZWRpdW0tZWRpdG9yLyIsInNvdXJjZXMiOlsibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLFlBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFXOUM7SUFnQkUsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRkwsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkIsQ0FBQzs7OztJQUV2Qyx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUEyQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRztnQkFDekIsSUFBSSxFQUFHLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUM7U0FDSDtRQUVELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxRQUFRO1lBQ3JELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBVzs7OztJQUFYOztZQUNNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNwQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO2FBQzVCLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCxpREFBaUI7Ozs7O0lBQWpCLFVBQWtCLE9BQU8sRUFBRSxTQUFTO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTs7WUFFakQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBRTVCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBdkJHLFVBQVU7Ozt3QkErQlosS0FBSyxTQUFDLGFBQWE7MEJBQ2xCLEtBQUssU0FBQyxlQUFlOzhCQUNyQixLQUFLLFNBQUMsbUJBQW1CO3lCQUV6QixNQUFNLFNBQUMsbUJBQW1COztJQWdFN0IsNEJBQUM7Q0FBQSxBQTlFRCxJQThFQztTQTNFWSxxQkFBcUI7Ozs7OztJQUVoQyw4Q0FBOEI7Ozs7O0lBQzlCLHdDQUE2Qjs7Ozs7SUFDN0IsdUNBQW9COzs7OztJQUNwQix1Q0FBd0I7O0lBRXpCLHNDQUFpQzs7SUFDaEMsd0NBQXFDOztJQUNyQyw0Q0FBZ0Q7O0lBRWhELHVDQUF5RDs7Ozs7SUFFN0MsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFJlbmRlcmVyLFxyXG4gICAgybVsb29zZUlkZW50aWNhbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBNZWRpdW1FZGl0b3IgZnJvbSAnbWVkaXVtLWVkaXRvcic7XHJcblxyXG4vKipcclxuICogTWVkaXVtIEVkaXRvciB3cmFwcGVyIGRpcmVjdGl2ZS5cclxuICpcclxuICogRXhhbXBsZXNcclxuICogPG1lZGl1bS1lZGl0b3JcclxuICAgICAgWyhlZGl0b3JNb2RlbCldPVwidGV4dFZhclwiXHJcbiAqICAgIFtlZGl0b3JPcHRpb25zXT1cInsndG9vbGJhcic6IHsnYnV0dG9ucyc6IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2gxJywgJ2gyJywgJ2gzJ119fVwiXHJcbiAqICAgIFtlZGl0b3JQbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclZhclwiPjwvbWVkaXVtLWVkaXRvcj5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbWVkaXVtLWVkaXRvcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZGl1bUVkaXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGxhc3RWaWV3TW9kZWw6IHN0cmluZztcclxuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XHJcbiAgcHJpdmF0ZSBhY3RpdmU6IGJvb2xlYW47XHJcblxyXG5cdEBJbnB1dCgnZWRpdG9yTW9kZWwnKSBtb2RlbDogYW55O1xyXG4gIEBJbnB1dCgnZWRpdG9yT3B0aW9ucycpIG9wdGlvbnM6IGFueTtcclxuICBASW5wdXQoJ2VkaXRvclBsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgnZWRpdG9yTW9kZWxDaGFuZ2UnKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1lLWVkaXRhYmxlXCI+JyArIHRoaXMubW9kZWwgKyAnPC9kaXY+JztcclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgPSB7XHJcbiAgICAgICAgdGV4dCA6IHRoaXMucGxhY2Vob2xkZXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHbG9iYWwgTWVkaXVtRWRpdG9yXHJcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBNZWRpdW1FZGl0b3IoJy5tZS1lZGl0YWJsZScsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLmVkaXRvci5zdWJzY3JpYmUoJ2VkaXRhYmxlSW5wdXQnLCAoZXZlbnQsIGVkaXRhYmxlKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFZpZXcoKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMubGFzdFZpZXdNb2RlbCkpIHtcclxuICAgICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCB1cGRhdGVkIG1vZGVsXHJcbiAgICovXHJcbiAgdXBkYXRlTW9kZWwoKTogdm9pZCB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyZuYnNwOy9nLCAnJylcclxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPHA+PGJyPjxcXC9wPi9nLCAnJylcclxuICAgICAgICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBNZWRpdW1FZGl0b3Igb24gZGVzdHJ1Y3Rpb24gb2YgZGlyZWN0aXZlXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB2aWV3TW9kZWwpIHtcclxuICAgIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzLm1vZGVsO1xyXG5cclxuICAgIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICHJtWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==