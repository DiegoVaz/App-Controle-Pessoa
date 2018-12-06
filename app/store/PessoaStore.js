/*
 * File: app/store/PessoaStore.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AppLogin.store.PessoaStore', {
    extend: 'Ext.data.Store',

    requires: [
        'AppLogin.model.Pessoa'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'AppLogin.model.Pessoa',
            storeId: 'PessoaStore'
        }, cfg)]);
    }
});