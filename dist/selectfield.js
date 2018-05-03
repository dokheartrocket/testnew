//The MIT License (MIT)

//Copyright (c) 2015 zetta83

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.
////////////////////////////////////////////////////////////////// 
// mdl-selectfield
!function(){"use strict";var s=function(s){this.element_=s,this.init()};window.MaterialSelectfield=s,s.prototype.Constant_={},s.prototype.CssClasses_={LABEL:"mdl-selectfield__label",SELECT:"mdl-selectfield__select",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded"},s.prototype.onFocus_=function(s){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},s.prototype.onBlur_=function(s){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},s.prototype.onReset_=function(s){this.updateClasses_()},s.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty()},s.prototype.checkDisabled=function(){this.select_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},s.prototype.checkDisabled=s.prototype.checkDisabled,s.prototype.checkValidity=function(){this.select_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID)},s.prototype.checkValidity=s.prototype.checkValidity,s.prototype.checkDirty=function(){this.select_.value&&this.select_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},s.prototype.checkDirty=s.prototype.checkDirty,s.prototype.disable=function(){this.select_.disabled=!0,this.updateClasses_()},s.prototype.disable=s.prototype.disable,s.prototype.enable=function(){this.select_.disabled=!1,this.updateClasses_()},s.prototype.enable=s.prototype.enable,s.prototype.change=function(s){s&&(this.select_.value=s),this.updateClasses_()},s.prototype.change=s.prototype.change,s.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.select_=this.element_.querySelector("."+this.CssClasses_.SELECT),this.select_)){this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.select_.addEventListener("change",this.boundUpdateClassesHandler),this.select_.addEventListener("focus",this.boundFocusHandler),this.select_.addEventListener("blur",this.boundBlurHandler),this.select_.addEventListener("reset",this.boundResetHandler);var s=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),s&&this.element_.classList.add(this.CssClasses_.IS_INVALID)}},s.prototype.mdlDowngrade_=function(){this.select_.removeEventListener("change",this.boundUpdateClassesHandler),this.select_.removeEventListener("focus",this.boundFocusHandler),this.select_.removeEventListener("blur",this.boundBlurHandler),this.select_.removeEventListener("reset",this.boundResetHandler)},componentHandler.register({constructor:s,classAsString:"MaterialSelectfield",cssClass:"mdl-js-selectfield",widget:!0})}();
//# sourceMappingURL=mdl-selectfield.min.js.map