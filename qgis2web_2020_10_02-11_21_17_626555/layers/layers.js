var wms_layers = [];

var format_Lines_NE_0 = new ol.format.GeoJSON();
var features_Lines_NE_0 = format_Lines_NE_0.readFeatures(json_Lines_NE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_NE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_NE_0.addFeatures(features_Lines_NE_0);
var lyr_Lines_NE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lines_NE_0, 
                style: style_Lines_NE_0,
                interactive: true,
    title: 'Lines_NE<br />\
    <img src="styles/legend/Lines_NE_0_0.png" /> Acela Express (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_1.png" /> Blue Line (MBTA Subway)<br />\
    <img src="styles/legend/Lines_NE_0_2.png" /> CapeFLYER (CapeFLYER)<br />\
    <img src="styles/legend/Lines_NE_0_3.png" /> Downeaster (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_4.png" /> Ethan Allen Express (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_5.png" /> Fairmount Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_6.png" /> Fitchburg Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_7.png" /> Framingham/Worcester Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_8.png" /> Franklin Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_9.png" /> Green Line (MBTA Subway)<br />\
    <img src="styles/legend/Lines_NE_0_10.png" /> Greenbush Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_11.png" /> Hartford Line (CTrail)<br />\
    <img src="styles/legend/Lines_NE_0_12.png" /> Haverhill Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_13.png" /> Kingston/Plymouth Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_14.png" /> Lake Shore Limited (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_15.png" /> Lowell Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_16.png" /> Middleborough/Lakeville Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_17.png" /> Needham Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_18.png" /> New Haven - Springfield Shuttle (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_19.png" /> Newburyport/Rockport Line (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_20.png" /> Northeast Regional (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_21.png" /> Orange Line (MBTA Subway)<br />\
    <img src="styles/legend/Lines_NE_0_22.png" /> Providence/Stoughton Line (MBTA Commuer Rail)<br />\
    <img src="styles/legend/Lines_NE_0_23.png" /> Red Line (MBTA Subway)<br />\
    <img src="styles/legend/Lines_NE_0_24.png" /> Shore Line East (CTrail)<br />\
    <img src="styles/legend/Lines_NE_0_25.png" /> South Coast Rail (MBTA Commuter Rail)<br />\
    <img src="styles/legend/Lines_NE_0_26.png" /> Vermonter (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_27.png" /> <br />\
    <img src="styles/legend/Lines_NE_0_28.png" /> Valley Flyer (Amtrak)<br />\
    <img src="styles/legend/Lines_NE_0_29.png" /> Franklin/Foxboro Line (MBTA Commuter Rail)<br />'
        });
var format_Lines_MA_1 = new ol.format.GeoJSON();
var features_Lines_MA_1 = format_Lines_MA_1.readFeatures(json_Lines_MA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_MA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_MA_1.addFeatures(features_Lines_MA_1);
var lyr_Lines_MA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lines_MA_1, 
                style: style_Lines_MA_1,
                interactive: true,
    title: 'Lines_MA<br />\
    <img src="styles/legend/Lines_MA_1_0.png" /> <br />\
    <img src="styles/legend/Lines_MA_1_1.png" /> <6> Pelham Bay Park Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_2.png" /> <7> Flushing Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_3.png" /> 1 Broadway - Seventh Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_4.png" /> 2 Seventh Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_5.png" /> 3 Seventh Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_6.png" /> 4 Lexington Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_7.png" /> 5 Lexington Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_8.png" /> 6 Lexington Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_9.png" /> 7 Flushing Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_10.png" /> 8th Street - Hoboken (Hudson-Bergen Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_11.png" /> A Eighth Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_12.png" /> Acela Express<br />\
    <img src="styles/legend/Lines_MA_1_13.png" /> Acela Express (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_14.png" /> Adirondack (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_15.png" /> Airline Terminals Train (AirTrain JFK)<br />\
    <img src="styles/legend/Lines_MA_1_16.png" /> Airport Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_17.png" /> AirTrain LaGuardia (Planned)<br />\
    <img src="styles/legend/Lines_MA_1_18.png" /> AirTrain Newark (AirTrain Newark)<br />\
    <img src="styles/legend/Lines_MA_1_19.png" /> Atlantic City Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_20.png" /> B Sixth Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_21.png" /> Babylon Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_22.png" /> Belmont Park (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_23.png" /> Bergen County Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_24.png" /> Blue Line (Pittsburgh Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_25.png" /> Broad Street Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_26.png" /> Broad Street Station - Newark Penn Station (Newark Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_27.png" /> C Eighth Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_28.png" /> Cardinal (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_29.png" /> Carolinian (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_30.png" /> Chestnut Hill East Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_31.png" /> Chestnut Hill West Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_32.png" /> City Terminal Zone (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_33.png" /> Crescent (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_34.png" /> Cynwyd Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_35.png" /> D Sixth Avenue Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_36.png" /> E Eighth Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_37.png" /> East Side Access (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_38.png" /> Empire Service (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_39.png" /> Ethan Allen Express (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_40.png" /> F Queens Boulevard Express / Sixth Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_41.png" /> Far Rockaway Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_42.png" /> Fox Chase Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_43.png" /> G Brooklyn - Queens Crosstown (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_44.png" /> Gladstone Branch (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_45.png" /> Grove Street - Newark Penn Station (Newark Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_46.png" /> Harlem Line (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_47.png" /> Hempstead Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_48.png" /> Hoboken - 33rd Street (HOB-33) (PATH)<br />\
    <img src="styles/legend/Lines_MA_1_49.png" /> Hoboken - Tonnelle (Hudson-Bergen Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_50.png" /> Hoboken - World Trade Center (HOB-WTC) (PATH)<br />\
    <img src="styles/legend/Lines_MA_1_51.png" /> Howard Beach Train (AirTrain JFK)<br />\
    <img src="styles/legend/Lines_MA_1_52.png" /> Hudson Line (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_53.png" /> J Nassau Street Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_54.png" /> Jamaica Station Train (AirTrain JFK)<br />\
    <img src="styles/legend/Lines_MA_1_55.png" /> Journal Square - 33rd Street (JSQ-33) (PATH)<br />\
    <img src="styles/legend/Lines_MA_1_56.png" /> Journal Square - 33rd Street (via Hoboken) (JSQ-33 via HOB) (PATH)<br />\
    <img src="styles/legend/Lines_MA_1_57.png" /> Keystone Service (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_58.png" /> L 14th Street - Canarsie Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_59.png" /> Lake Shore Limited (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_60.png" /> Lansdale / Doylestown Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_61.png" /> Long Beach Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_62.png" /> M Queens Boulevard / Sixth Avenue Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_63.png" /> Main Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_64.png" /> Main Line (Staten Island Railway)<br />\
    <img src="styles/legend/Lines_MA_1_65.png" /> Manayunk / Norristown Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_66.png" /> Maple Leaf (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_67.png" /> Market - Frankford Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_68.png" /> Meadowlands Shuttle (NJ Transit Rail)<br />\
    <img src="styles/legend/Lines_MA_1_69.png" /> Media / Elwyn Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_70.png" /> Montauk Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_71.png" /> Montclair-Boonton Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_72.png" /> Morristown Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_73.png" /> N Broadway Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_74.png" /> New Haven Line (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_75.png" /> Newark - World Trade Center (NWK-WTC) (PATH)<br />\
    <img src="styles/legend/Lines_MA_1_76.png" /> Norristown High Speed Line (SEPTA Suburban)<br />\
    <img src="styles/legend/Lines_MA_1_77.png" /> North Jersey Coast Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_78.png" /> Northeast Corridor (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_79.png" /> Northeast Regional (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_80.png" /> Oyster Bay Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_81.png" /> Palmetto (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_82.png" /> Paoli / Thorndale Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_83.png" /> Pascack Valley Line (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_84.png" /> Pascack Valley Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_85.png" /> PATCO Speedline<br />\
    <img src="styles/legend/Lines_MA_1_86.png" /> Penn Station Access (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_87.png" /> Pennsylvanian (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_88.png" /> Port Jarvis Line (Metro-North Railroad)<br />\
    <img src="styles/legend/Lines_MA_1_89.png" /> Port Jefferson Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_90.png" /> Port Washington Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_91.png" /> Q Second Avenue / Broadway Express / Brighton Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_92.png" /> R Broadway Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_93.png" /> Raritan Valley Line (NJ Transit)<br />\
    <img src="styles/legend/Lines_MA_1_94.png" /> Red Line (Pittsburgh Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_95.png" /> River LINE (River LINE)<br />\
    <img src="styles/legend/Lines_MA_1_96.png" /> Ronkonkoma Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_97.png" /> Route 10 / Lancaster Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_98.png" /> Route 101 / Media-Sharon Hill Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_99.png" /> Route 102 / Media-Sharon Hill Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_100.png" /> Route 11 / Woodland Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_101.png" /> Route 13 / Chester Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_102.png" /> Route 15 / Girard Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_103.png" /> Route 34 / Baltimore Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_104.png" /> Route 36 / Elmwood Avenue Line (SEPTA City Transit)<br />\
    <img src="styles/legend/Lines_MA_1_105.png" /> S 42nd Street Shuttle (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_106.png" /> S Franklin Avenue Shuttle (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_107.png" /> S Rockaway Park Shuttle (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_108.png" /> Silver Meteor (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_109.png" /> Silver Star (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_110.png" /> Trenton Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_111.png" /> Vermonter (Amtrak)<br />\
    <img src="styles/legend/Lines_MA_1_112.png" /> W Broadway Local (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_113.png" /> Warminster Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_114.png" /> West Hempstead Branch (Long Island Rail Road)<br />\
    <img src="styles/legend/Lines_MA_1_115.png" /> West Side - Tonnelle (Hudson-Bergen Light Rail)<br />\
    <img src="styles/legend/Lines_MA_1_116.png" /> West Trenton Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_117.png" /> Wilmington / Newark Line (SEPTA Regional Rail)<br />\
    <img src="styles/legend/Lines_MA_1_118.png" /> Z Nassau Street Express (NYC Subway)<br />\
    <img src="styles/legend/Lines_MA_1_119.png" /> Main Line (NFTA Metro)<br />\
    <img src="styles/legend/Lines_MA_1_120.png" /> Capitol Limited (Amtrak)<br />'
        });
var format_Lines_SA_2 = new ol.format.GeoJSON();
var features_Lines_SA_2 = format_Lines_SA_2.readFeatures(json_Lines_SA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_SA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_SA_2.addFeatures(features_Lines_SA_2);
var lyr_Lines_SA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lines_SA_2, 
                style: style_Lines_SA_2,
                interactive: true,
    title: 'Lines_SA<br />\
    <img src="styles/legend/Lines_SA_2_0.png" /> <br />\
    <img src="styles/legend/Lines_SA_2_1.png" /> Red Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_2.png" /> Blue Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_3.png" /> Orange Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_4.png" /> Silver Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_5.png" /> Yellow Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_6.png" /> Green Line (Washington Metro)<br />\
    <img src="styles/legend/Lines_SA_2_7.png" /> H Street / Benning Road Line (DC Streetcar)<br />\
    <img src="styles/legend/Lines_SA_2_8.png" /> Brunswick Line (MARC Train)<br />\
    <img src="styles/legend/Lines_SA_2_9.png" /> Camden Line (MARC Train)<br />\
    <img src="styles/legend/Lines_SA_2_10.png" /> Penn Line (MARC Train)<br />\
    <img src="styles/legend/Lines_SA_2_11.png" /> Vermonter (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_12.png" /> Acela Express (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_13.png" /> Northeast Regional (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_14.png" /> Cardinal (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_15.png" /> Carolinian (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_16.png" /> Crescent (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_17.png" /> Palmetto (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_18.png" /> Silver Meteor (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_19.png" /> Silver Star (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_20.png" /> Fredericksburg Line (VRE)<br />\
    <img src="styles/legend/Lines_SA_2_21.png" /> Manassas Line (VRE)<br />\
    <img src="styles/legend/Lines_SA_2_22.png" /> AeroTrain<br />\
    <img src="styles/legend/Lines_SA_2_23.png" /> Main Line (Light RailLink)<br />\
    <img src="styles/legend/Lines_SA_2_24.png" /> Main Line (Metro SubwayLink)<br />\
    <img src="styles/legend/Lines_SA_2_25.png" /> Penn-Camden Shuttle (Light RailLink)<br />\
    <img src="styles/legend/Lines_SA_2_26.png" /> Purple Line<br />\
    <img src="styles/legend/Lines_SA_2_27.png" /> The Tide<br />\
    <img src="styles/legend/Lines_SA_2_28.png" /> Morgantown PRT<br />\
    <img src="styles/legend/Lines_SA_2_29.png" /> Capitol Limited (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_30.png" /> Auto Train (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_31.png" /> CityLYNX Gold Line (CATS)<br />\
    <img src="styles/legend/Lines_SA_2_32.png" /> LYNX Blue Line (CATS)<br />\
    <img src="styles/legend/Lines_SA_2_33.png" /> Piedmont (Amtrak)<br />\
    <img src="styles/legend/Lines_SA_2_34.png" /> Blue Line (MARTA)<br />\
    <img src="styles/legend/Lines_SA_2_35.png" /> Gold Line (MARTA)<br />\
    <img src="styles/legend/Lines_SA_2_36.png" /> Green Line (MARTA)<br />\
    <img src="styles/legend/Lines_SA_2_37.png" /> Red Line (MARTA)<br />\
    <img src="styles/legend/Lines_SA_2_38.png" /> ATL SkyTrain<br />\
    <img src="styles/legend/Lines_SA_2_39.png" /> The Plane Train<br />\
    <img src="styles/legend/Lines_SA_2_40.png" /> Downtown Loop (Atlanta Streetcar)<br />\
    <img src="styles/legend/Lines_SA_2_41.png" /> Jacksonville Skyway<br />\
    <img src="styles/legend/Lines_SA_2_42.png" /> TECO Streetcar<br />\
    <img src="styles/legend/Lines_SA_2_43.png" /> Airside A<br />\
    <img src="styles/legend/Lines_SA_2_44.png" /> Airside C<br />\
    <img src="styles/legend/Lines_SA_2_45.png" /> Airside E<br />\
    <img src="styles/legend/Lines_SA_2_46.png" /> Airside F<br />\
    <img src="styles/legend/Lines_SA_2_47.png" /> SkyConnect<br />'
        });
var format_Connections_NE_3 = new ol.format.GeoJSON();
var features_Connections_NE_3 = format_Connections_NE_3.readFeatures(json_Connections_NE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Connections_NE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Connections_NE_3.addFeatures(features_Connections_NE_3);
var lyr_Connections_NE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Connections_NE_3, 
                style: style_Connections_NE_3,
                interactive: true,
    title: 'Connections_NE<br />\
    <img src="styles/legend/Connections_NE_3_0.png" /> Transfer<br />\
    <img src="styles/legend/Connections_NE_3_1.png" /> Connection<br />'
        });
var format_Connections_MA_4 = new ol.format.GeoJSON();
var features_Connections_MA_4 = format_Connections_MA_4.readFeatures(json_Connections_MA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Connections_MA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Connections_MA_4.addFeatures(features_Connections_MA_4);
var lyr_Connections_MA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Connections_MA_4, 
                style: style_Connections_MA_4,
                interactive: true,
    title: 'Connections_MA<br />\
    <img src="styles/legend/Connections_MA_4_0.png" /> Transfer<br />\
    <img src="styles/legend/Connections_MA_4_1.png" /> Connection<br />'
        });
var format_Connections_SA_5 = new ol.format.GeoJSON();
var features_Connections_SA_5 = format_Connections_SA_5.readFeatures(json_Connections_SA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Connections_SA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Connections_SA_5.addFeatures(features_Connections_SA_5);
var lyr_Connections_SA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Connections_SA_5, 
                style: style_Connections_SA_5,
                interactive: true,
    title: 'Connections_SA<br />\
    <img src="styles/legend/Connections_SA_5_0.png" /> Transfer<br />\
    <img src="styles/legend/Connections_SA_5_1.png" /> Connection<br />'
        });
var format_Stations_NE_6 = new ol.format.GeoJSON();
var features_Stations_NE_6 = format_Stations_NE_6.readFeatures(json_Stations_NE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_NE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_NE_6.addFeatures(features_Stations_NE_6);
var lyr_Stations_NE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_NE_6, 
                style: style_Stations_NE_6,
                interactive: true,
                title: '<img src="styles/legend/Stations_NE_6.png" /> Stations_NE'
            });
var format_Stations_MA_7 = new ol.format.GeoJSON();
var features_Stations_MA_7 = format_Stations_MA_7.readFeatures(json_Stations_MA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_MA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_MA_7.addFeatures(features_Stations_MA_7);
var lyr_Stations_MA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_MA_7, 
                style: style_Stations_MA_7,
                interactive: true,
                title: '<img src="styles/legend/Stations_MA_7.png" /> Stations_MA'
            });
var format_Stations_SA_8 = new ol.format.GeoJSON();
var features_Stations_SA_8 = format_Stations_SA_8.readFeatures(json_Stations_SA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_SA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_SA_8.addFeatures(features_Stations_SA_8);
var lyr_Stations_SA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_SA_8, 
                style: style_Stations_SA_8,
                interactive: true,
                title: '<img src="styles/legend/Stations_SA_8.png" /> Stations_SA'
            });
var group_Stations = new ol.layer.Group({
                                layers: [lyr_Stations_NE_6,lyr_Stations_MA_7,lyr_Stations_SA_8,],
                                title: "Stations"});
var group_StationConnections = new ol.layer.Group({
                                layers: [lyr_Connections_NE_3,lyr_Connections_MA_4,lyr_Connections_SA_5,],
                                title: "Station Connections"});
var group_Lines = new ol.layer.Group({
                                layers: [lyr_Lines_NE_0,lyr_Lines_MA_1,lyr_Lines_SA_2,],
                                title: "Lines"});

lyr_Lines_NE_0.setVisible(true);lyr_Lines_MA_1.setVisible(true);lyr_Lines_SA_2.setVisible(true);lyr_Connections_NE_3.setVisible(true);lyr_Connections_MA_4.setVisible(true);lyr_Connections_SA_5.setVisible(true);lyr_Stations_NE_6.setVisible(true);lyr_Stations_MA_7.setVisible(true);lyr_Stations_SA_8.setVisible(true);
var layersList = [group_Lines,group_StationConnections,group_Stations];
lyr_Lines_NE_0.set('fieldAliases', {'fid': 'fid', 'Line': 'Line', 'System': 'System', 'Operator': 'Operator', 'Service': 'Service', 'Limited Service': 'Limited Service', 'Service Frequency': 'Service Frequency', 'Status': 'Status', 'Line Type': 'Line Type', 'Electrification': 'Electrification', 'System Code': 'System Code', });
lyr_Lines_MA_1.set('fieldAliases', {'fid': 'fid', 'Line': 'Line', 'System': 'System', 'Operator': 'Operator', 'Service': 'Service', 'Limited Service': 'Limited Service', 'Service Frequency': 'Service Frequency', 'Status': 'Status', 'Line Type': 'Line Type', 'Electrification': 'Electrification', 'System Code': 'System Code', });
lyr_Lines_SA_2.set('fieldAliases', {'fid': 'fid', 'Line': 'Line', 'System': 'System', 'Operator': 'Operator', 'Service': 'Service', 'Limited Service': 'Limited Service', 'Service Frequency': 'Service Frequency', 'Status': 'Status', 'Line Type': 'Line Type', 'Electrification': 'Electrification', 'System Code': 'System Code', });
lyr_Connections_NE_3.set('fieldAliases', {'fid': 'fid', 'Transfer Type': 'Transfer Type', });
lyr_Connections_MA_4.set('fieldAliases', {'fid': 'fid', 'Transfer Type': 'Transfer Type', });
lyr_Connections_SA_5.set('fieldAliases', {'fid': 'fid', 'Transfer Type': 'Transfer Type', });
lyr_Stations_NE_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Stations_MA_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Stations_SA_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Lines_NE_0.set('fieldImages', {'fid': 'TextEdit', 'Line': 'TextEdit', 'System': 'TextEdit', 'Operator': 'TextEdit', 'Service': 'TextEdit', 'Limited Service': 'TextEdit', 'Service Frequency': 'TextEdit', 'Status': 'TextEdit', 'Line Type': 'TextEdit', 'Electrification': 'TextEdit', 'System Code': 'TextEdit', });
lyr_Lines_MA_1.set('fieldImages', {'fid': 'TextEdit', 'Line': 'UniqueValues', 'System': 'ValueMap', 'Operator': 'ValueMap', 'Service': 'UniqueValues', 'Limited Service': 'CheckBox', 'Service Frequency': 'ValueMap', 'Status': 'ValueMap', 'Line Type': 'ValueMap', 'Electrification': 'ValueMap', 'System Code': 'TextEdit', });
lyr_Lines_SA_2.set('fieldImages', {'fid': 'TextEdit', 'Line': 'UniqueValues', 'System': 'ValueMap', 'Operator': 'ValueMap', 'Service': 'UniqueValues', 'Limited Service': 'CheckBox', 'Service Frequency': 'ValueMap', 'Status': 'ValueMap', 'Line Type': 'ValueMap', 'Electrification': 'ValueMap', 'System Code': 'TextEdit', });
lyr_Connections_NE_3.set('fieldImages', {'fid': 'TextEdit', 'Transfer Type': 'ValueMap', });
lyr_Connections_MA_4.set('fieldImages', {'fid': 'TextEdit', 'Transfer Type': 'ValueMap', });
lyr_Connections_SA_5.set('fieldImages', {'fid': 'TextEdit', 'Transfer Type': 'ValueMap', });
lyr_Stations_NE_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Stations_MA_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Stations_SA_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Lines_NE_0.set('fieldLabels', {});
lyr_Lines_MA_1.set('fieldLabels', {});
lyr_Lines_SA_2.set('fieldLabels', {});
lyr_Connections_NE_3.set('fieldLabels', {});
lyr_Connections_MA_4.set('fieldLabels', {});
lyr_Connections_SA_5.set('fieldLabels', {});
lyr_Stations_NE_6.set('fieldLabels', {});
lyr_Stations_MA_7.set('fieldLabels', {});
lyr_Stations_SA_8.set('fieldLabels', {});
lyr_Stations_SA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});