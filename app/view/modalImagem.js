/*
 * File: app/view/modalImagem.js
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

Ext.define('AppLogin.view.modalImagem', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.Img',
        'Ext.form.Label'
    ],

    height: 400,
    width: 600,
    layout: 'fit',
    bodyPadding: 0,
    title: 'Imagem',
    titleAlign: 'center',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'image',
                    hidden: true,
                    itemId: 'modalImg'
                },
                {
                    xtype: 'label',
                    itemId: 'load',
                    text: 'Carregando...'
                }
            ]
        });

        me.callParent(arguments);
    },

    setImg: function(url) {
        var comp = Ext.ComponentQuery.query('#modalImg')[0];
        comp.setSrc(url);

        setTimeout(function(){
            Ext.ComponentQuery.query('#load')[0].setVisible(false);
            comp.setVisible(true);
        }, 800);
    }

});