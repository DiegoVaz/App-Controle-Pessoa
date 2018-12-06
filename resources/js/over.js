//Action Column Checkbox

Ext.define('MyApp.overrides.grid.column.Action', {
    override: 'Ext.grid.column.Action',
    defaultRenderer: function(v, meta, record, rowIdx, colIdx, store, view){
        
        var me = this;
        var prefix = Ext.baseCSSPrefix;
        var scope = me.origScope || me;
        var items = me.items;
        var len = items.length;
        var i = 0;
        var item;
        var ret;
        var disabled;
        var tooltip;
        
        scope.sortable = false;
        
        ret = Ext.isFunction(me.origRenderer) ? me.origRenderer.apply(scope, arguments) || '' : '';
        
        meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
        
        for (; i < len; i++) {
            item = items[i];
            
            disabled = item.disabled || (item.isDisabled ? item.isDisabled.call(item.scope || scope, view, rowIdx, colIdx, item, record) : false);
            tooltip = disabled ? null : (item.tooltip || (item.getTip ? item.getTip.apply(item.scope || scope, arguments) : null));
            
            if (!item.hasActionConfiguration) {               
                item.stopSelection = me.stopSelection;
                item.disable = Ext.Function.bind(me.disableAction, me, [i], 0);
                item.enable = Ext.Function.bind(me.enableAction, me, [i], 0);
                item.hasActionConfiguration = true;
            }
            
            ret += '<div role="button" class="' + prefix + 'action-col-icon ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                (tooltip ? ' data-qtip="' + tooltip + '"' : '') + ' ></div>';
        }
        
        return ret;
    }
});