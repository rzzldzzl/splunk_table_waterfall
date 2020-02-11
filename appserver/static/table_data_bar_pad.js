 require([
     'underscore',
     'jquery',
     'splunkjs/mvc',
     'splunkjs/mvc/tableview',
     'splunkjs/mvc/simplexml/ready!'
 ], function(_, $, mvc, TableView) {

    var DataBarCellRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            return (cell.field === 'Waterfall');
        },
        render: function($td, cell) {
            var cell_value = cell.value.toString().split("|");
            var start_percent = Math.min(Math.max(parseFloat(cell_value[0]), 0), 100);
            var percent = Math.min(Math.max(parseFloat(cell_value[1]), 0), 100);
            var background_color = cell_value[2];
            $td.html('<div class="data-bar" style="background-clip: content-box; padding: 0px 0px 0px '+start_percent+'%; height: 16px; min-width: 1px; background-color: '+background_color+'; width:'+percent+'%"></div></div>');
        }
    });

    mvc.Components.get('waterfallTable').getVisualization(function(tableView) {
        tableView.addCellRenderer(new DataBarCellRenderer());
    });

});
