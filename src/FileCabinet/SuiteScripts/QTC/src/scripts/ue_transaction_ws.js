/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/ui/dialog'],
    /**
     * @param{dialog} dialog
     */
    function (dialog){
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        function beforeLoad (scriptContext){
            log.debug("before load called");
            // await helloWorld();

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        function beforeSubmit (scriptContext){
            try {
            scriptContext.newRecord.setValue({
                fieldId: 'custbody_idcampaign',
                value: 'Testing UE Script'
            });
            } catch (e) {
                log.error ({
                    title: 'User Event Script Account customization project in WebStorm test Failed with error: ' + e.name,
                    details: e.message
                });
            }
        }
/*
        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         * /
        function afterSubmit (scriptContext) {

        }
*/
        return {beforeLoad, beforeSubmit} //, afterSubmit}

    });
