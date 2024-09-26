var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.370000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tripshuahinthewesthernzone_1 = new ol.format.GeoJSON();
var features_Tripshuahinthewesthernzone_1 = format_Tripshuahinthewesthernzone_1.readFeatures(json_Tripshuahinthewesthernzone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tripshuahinthewesthernzone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tripshuahinthewesthernzone_1.addFeatures(features_Tripshuahinthewesthernzone_1);
var lyr_Tripshuahinthewesthernzone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tripshuahinthewesthernzone_1, 
                style: style_Tripshuahinthewesthernzone_1,
                popuplayertitle: "Trips huahin the westhern zone",
                interactive: true,
                title: '<img src="styles/legend/Tripshuahinthewesthernzone_1.png" /> Trips huahin the westhern zone'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "ตำบล",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ตำบล'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "พิกัดที่ท่องเที่ยวโซนใต้",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> พิกัดที่ท่องเที่ยวโซนใต้'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Tripshuahinthewesthernzone_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Tripshuahinthewesthernzone_1,lyr__2,lyr__3];
lyr_Tripshuahinthewesthernzone_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'pictures': 'pictures', });
lyr__2.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'x': 'x', 'y': 'y', 'รูปภาพ': 'รูปภาพ', });
lyr__3.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'x': 'x', 'y': 'y', 'รูปภาพ': 'รูปภาพ', });
lyr_Tripshuahinthewesthernzone_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'pictures': 'TextEdit', });
lyr__2.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'รูปภาพ': 'TextEdit', });
lyr__3.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'รูปภาพ': 'TextEdit', });
lyr_Tripshuahinthewesthernzone_1.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'pictures': 'header label - always visible', });
lyr__2.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'รูปภาพ': 'header label - always visible', });
lyr__3.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'รูปภาพ': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});