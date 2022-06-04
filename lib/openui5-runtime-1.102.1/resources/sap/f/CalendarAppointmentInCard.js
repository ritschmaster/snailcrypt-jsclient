/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/unified/CalendarAppointment'],function(C){"use strict";var a=C.extend("sap.f.CalendarAppointmentInCard",{metadata:{library:"sap.f",properties:{clickable:{type:"boolean",group:"Data",defaultValue:false}},events:{press:{}}}});a.prototype.ontap=function(){this._firePress();};a.prototype.onsapenter=function(){this._firePress();};a.prototype._firePress=function(){if(this.getClickable()){this.$().addClass("sapUiCalendarAppSel");setTimeout(function(){this.$().removeClass("sapUiCalendarAppSel");}.bind(this),180);this.firePress({});}};return a;});
