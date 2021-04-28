var size = 0;
var placement = 'point';
function categories_Lines_SA_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Red Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,24,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blue Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,119,192,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Orange Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,147,29,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Silver Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,163,161,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Yellow Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,209,5,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Green Line (Washington Metro)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,169,78,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'H Street / Benning Road Line (DC Streetcar)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,66,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Brunswick Line (MARC Train)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,170,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Camden Line (MARC Train)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,89,41,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Penn Line (MARC Train)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,31,62,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vermonter (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Acela Express (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(23,177,199,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Northeast Regional (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cardinal (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Carolinian (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Crescent (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Palmetto (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Silver Meteor (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Silver Star (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fredericksburg Line (VRE)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,55,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Manassas Line (VRE)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,67,135,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AeroTrain':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(42,71,138,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Main Line (Light RailLink)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Main Line (Metro SubwayLink)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Penn-Camden Shuttle (Light RailLink)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Purple Line':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(117,47,144,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'The Tide':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,88,163,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morgantown PRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,175,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Capitol Limited (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Auto Train (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CityLYNX Gold Line (CATS)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,210,69,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LYNX Blue Line (CATS)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,102,174,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Piedmont (Amtrak)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,93,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blue Line (MARTA)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(2,117,178,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gold Line (MARTA)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,167,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Green Line (MARTA)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,157,73,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Red Line (MARTA)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,33,44,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ATL SkyTrain':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,44,69,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'The Plane Train':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,43,68,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Downtown Loop (Atlanta Streetcar)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(29,44,90,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jacksonville Skyway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,55,44,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TECO Streetcar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,207,67,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Airside A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(190,42,52,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Airside C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,125,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Airside E':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(76,127,197,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Airside F':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(39,58,160,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SkyConnect':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Lines_SA_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Line");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Lines_SA_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
