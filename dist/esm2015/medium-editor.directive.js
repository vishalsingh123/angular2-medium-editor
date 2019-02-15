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
export class MediumEditorDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (event, editable) => {
            this.updateModel();
        }));
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    }
    /**
     * Emit updated model
     * @return {?}
     */
    updateModel() {
        /** @type {?} */
        let value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    }
    /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    ngOnDestroy() {
        this.editor.destroy();
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        /** @type {?} */
        const change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !ɵlooseIdentical(viewModel, change.currentValue);
    }
}
MediumEditorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'medium-editor'
            },] }
];
/** @nocollapse */
MediumEditorDirective.ctorParameters = () => [
    { type: ElementRef }
];
MediumEditorDirective.propDecorators = {
    model: [{ type: Input, args: ['editorModel',] }],
    options: [{ type: Input, args: ['editorOptions',] }],
    placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
    update: [{ type: Output, args: ['editorModelChange',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1tZWRpdW0tZWRpdG9yLyIsInNvdXJjZXMiOlsibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLFlBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFjOUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQWFoQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZMLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7Ozs7SUFFdkMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO2dCQUN6QixJQUFJLEVBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsQ0FBQztTQUNIO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUtELFdBQVc7O1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7YUFDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7YUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7O2NBRWpELE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSztRQUU1QixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUF2QkcsVUFBVTs7O29CQStCWixLQUFLLFNBQUMsYUFBYTtzQkFDbEIsS0FBSyxTQUFDLGVBQWU7MEJBQ3JCLEtBQUssU0FBQyxtQkFBbUI7cUJBRXpCLE1BQU0sU0FBQyxtQkFBbUI7Ozs7Ozs7SUFUM0IsOENBQThCOzs7OztJQUM5Qix3Q0FBNkI7Ozs7O0lBQzdCLHVDQUFvQjs7Ozs7SUFDcEIsdUNBQXdCOztJQUV6QixzQ0FBaUM7O0lBQ2hDLHdDQUFxQzs7SUFDckMsNENBQWdEOztJQUVoRCx1Q0FBeUQ7Ozs7O0lBRTdDLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBSZW5kZXJlcixcclxuICAgIMm1bG9vc2VJZGVudGljYWxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgTWVkaXVtRWRpdG9yIGZyb20gJ21lZGl1bS1lZGl0b3InO1xyXG5cclxuLyoqXHJcbiAqIE1lZGl1bSBFZGl0b3Igd3JhcHBlciBkaXJlY3RpdmUuXHJcbiAqXHJcbiAqIEV4YW1wbGVzXHJcbiAqIDxtZWRpdW0tZWRpdG9yXHJcbiAgICAgIFsoZWRpdG9yTW9kZWwpXT1cInRleHRWYXJcIlxyXG4gKiAgICBbZWRpdG9yT3B0aW9uc109XCJ7J3Rvb2xiYXInOiB7J2J1dHRvbnMnOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdoMScsICdoMicsICdoMyddfX1cIlxyXG4gKiAgICBbZWRpdG9yUGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJWYXJcIj48L21lZGl1bS1lZGl0b3I+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ21lZGl1bS1lZGl0b3InXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWRpdW1FZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0Vmlld01vZGVsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGVkaXRvcjogYW55O1xyXG4gIHByaXZhdGUgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuXHRASW5wdXQoJ2VkaXRvck1vZGVsJykgbW9kZWw6IGFueTtcclxuICBASW5wdXQoJ2VkaXRvck9wdGlvbnMnKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCdlZGl0b3JQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoJ2VkaXRvck1vZGVsQ2hhbmdlJykgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtZS1lZGl0YWJsZVwiPicgKyB0aGlzLm1vZGVsICsgJzwvZGl2Pic7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0ge1xyXG4gICAgICAgIHRleHQgOiB0aGlzLnBsYWNlaG9sZGVyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2xvYmFsIE1lZGl1bUVkaXRvclxyXG4gICAgdGhpcy5lZGl0b3IgPSBuZXcgTWVkaXVtRWRpdG9yKCcubWUtZWRpdGFibGUnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5lZGl0b3Iuc3Vic2NyaWJlKCdlZGl0YWJsZUlucHV0JywgKGV2ZW50LCBlZGl0YWJsZSkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hWaWV3KCkge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLmxhc3RWaWV3TW9kZWwpKSB7XHJcbiAgICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgdXBkYXRlZCBtb2RlbFxyXG4gICAqL1xyXG4gIHVwZGF0ZU1vZGVsKCk6IHZvaWQge1xyXG4gICAgbGV0IHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8mbmJzcDsvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxwPjxicj48XFwvcD4vZywgJycpXHJcbiAgICAgICAgICAgICAgICAgLnRyaW0oKTtcclxuICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgTWVkaXVtRWRpdG9yIG9uIGRlc3RydWN0aW9uIG9mIGRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdmlld01vZGVsKSB7XHJcbiAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlID0gY2hhbmdlcy5tb2RlbDtcclxuXHJcbiAgICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhybVsb29zZUlkZW50aWNhbCh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=