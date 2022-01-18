/*
 * Generated 12/7/2020 3:39:04 PM
 * Copyright (C) 2020
 */

///<reference path="../node_modules/@types/daterangepicker/index.d.ts" />
///<reference path="../node_modules/moment/moment.d.ts" />

module TcHmi {
    export module Controls {
        export module DateTimePicker {
            export class DateTimePickerControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __elementInput!: JQuery;
                protected __drp!: daterangepicker;
                protected __startDateTime!: string;
                protected __endDateTime!: string;

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.daterangepicker-root');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    this.__elementInput = this.__elementTemplateRoot.find('.daterangepicker-input');

                    //TcHmi_Controls_DateTimePicker_DateTimePickerControl


                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    var $this = this;

                    var input = <HTMLElement>this.__elementInput.get(0);

                    this.__drp = new daterangepicker(input, {
                        "showDropdowns": true,
                        "showWeekNumbers": true,
                        "timePicker": true,
                        "timePicker24Hour": true,
                        "timePickerSeconds": true,
                        "minDate": "1970-01-01",
                        "maxDate": "2106-02-06",
                        "drops": "auto",
                        locale: {
                            format: 'YYYY-MM-DD HH:mm:ss'
                        }
                    }, function (start, end) {
                           
                            $this.__startDateTime = start.format('YYYY-MM-DDTHH:mm:ss');
                            $this.__endDateTime = end.format('YYYY-MM-DDTHH:mm:ss');
                            // inform the system that the function has a changed result.
                            TcHmi.EventProvider.raise($this.__id + ".onFunctionResultChanged", ["getStartDateTime"]);
                            TcHmi.EventProvider.raise($this.__id + ".onFunctionResultChanged", ["getEndDateTime"]);
                    });

                }

                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                public getStartDateTime() {
                    return this.__startDateTime + "Z";
                }

                public getEndDateTime() {
                    return this.__endDateTime + "Z";
                }

               public setStartDateTime(valueNew: string | null) {
                   return;
               }
               
               public setEndDateTime(valueNew: string | null) {
                   return;
               }
               


            }
        }

        registerEx('DateTimePickerControl', 'TcHmi.Controls.DateTimePicker', DateTimePicker.DateTimePickerControl);
    }
}