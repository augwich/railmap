# RailMap.xyz

This repo houses all the data files used for the [railmap.xyz](https://railmap.xyz) project. This includes all datasets in their exported form, as well as website files.

A number of programs are used to develop this data: Google Sheets is used for Station datasets, QGIS for Line datasets, and Mapbox to style the data. Trello keeps track of the project.


## How to Use

This data has been collected from various government and crowd-sources sources around the internet. It is a synthesis of passenger railway stations, lines, and a significant amount of related information. You are free to use any portion of the data that you would like (See licenses below). You may also contribute to the dataset in a couple ways, as outlined below.

You can always monitor the status of this project by visiting the [Trello Board](https://trello.com/b/GinKUKvq/usa-rail-project)


## Data Organization

The repo dataset structure is organized as follows:

```
- Data
	- Lines
		- Builds
		- QGIS Data
	- Stations
		- Builds
		- QGIS Data		

```

The repo also contains folders for current website and custom Mapbox style icons.


## Data

See below for detailed descriptions of the datasets. All descriptions are also present on the [Trello Board](https://trello.com/b/GinKUKvq/usa-rail-project). Whenever this Readme and the Trello board differ, follow the Trello board.


### Stations

All Station data is collected in Google Sheets which you can access [here](https://trello.com/c/ku71y8LA). These sheets are downloaded as .csv files, to be used with Mapbox. The .csv files are collected in this repo.

Station coordinates are retrieved from QGIS, and copied into Google Sheets. These station data files are also present as .gpkg files.

```
**STATION VALUES**
*updated for version 0.1.7*

1. geo_longitude [float]
 - station longitude coordinate

2. geo_latitude [float]
 - station latitude coordinate

3. Unique_ID [int]
 - unique station id number

4. Name [string]
 - name of station

5. City [string]
 - city and state of station

6. Neighborhood [string]
 - neighborhood of station, if applicable

7. Multi_System [bool]
 - whether the station serves multiple systems. "False" for most stations

8. System [string]
 - system(s) that serve this station

9. System_Code [string]
 - System Codes of the systems that serve this station.
 - See the [System Codes](https://trello.com/c/PLDbhUPZ) card for more details

10. Multi_Line [bool]
 - whether the station serves multiple lines/routes within any one system
 - note that Multi-Line is marked "True" if the station has a protected connection to another station.

11. Lines [string]
 - name of lines/routes serving this station
 - written as "LineName (System)"
 - *note that I've used the more colloquial definition of "Line" here - what might technically be called a "route" or "service" depending on the system - to ease clarity for the layperson. Line does **not** refer to a fixed length of track.*

12. Service [string]
 - if the line has multiple services/branches, this indicates which services/branch serves this station
 - written as "ServiceName (LineName)"
 - If limited, may contain an optional descriptor indicating how the service is limited, appended to the end of the service tag (written as "ServiceName - Service (Designator)"). Descriptors may include, but are not limited to, the following: "Late Nights Only", "Weekends Only", "Rush Hours Only", "Special Events".

13. Limited_Service [bool/string]
 - whether the lines/routes serving this station operate at a "limited service" capacity at this station.
 - written as "ServiceName - bool"
 - written as simple "bool" if only one service serves this station
 - a service is categorized as "Limited Service" if it meets one of the following:
a) the total number of trains that serve this station is less than 6 per day in a single direction
b) the total number of days in which a train serves this station is less than 5 (to catch systems that run only on weekend or only on some weekdays).
c) the total number of hours in which a train serves this station in a single day is less than 33% of the total hours that system operates per day (to catch lines that run late-nights or rush hours only)

14. Service_Frequency [string]
 - how frequently the service serves this station
 - written as "ServiceName - ServiceFrequency"
 - written as simple "ServiceFrequency" if only one service/line/route serves this station.
 - possible ServiceFrequency values: None (<1), Minimal (<5), Light (<15), Moderate (<35), Heavy (<70), Constant (>70)

15. Terminus [bool]
 - whether the station is a terminus for a service. This includes partial termini (i.e. only some trains end their trip at this station).

16. Connections [string]
 - whether the station has a "protected connection" to another station
 - written as "StationName (SystemName)"
 - written as "None" if no connections are present

17. Handicap_Accessible [bool/string]
 - whether the station is handicap accessible
 - possible values: True, False, Partial

18. Status [string]
 - the current status of this station
 - possible values: Built, Planned, Under Construction, Closed

19. Year_Opened [int]
 - what year this station was first opened
 - this is a rough value, as the definition of "first opened" can be vague/interpreted differently. Currently, this value indicates the year this station in it's current form opened. This means complete rebuilds count, but simple retrofits or refurbishments do not.

20. Web_Link [string]
 - URL to Wikipedia page for this station.

21. Name_Link_HTML [string]
 - a combination of Name and Web_Link, wrapped in HTML. Currently used for station popups.
```

### Lines

All line data is developed through QGIS, and saved as .gpkg files. The builds are exported as .geojson files for use with Mapbox.

```
**LINE VALUES**
*updated for version 0.1.7*

0. fid [int]
 - auto-generated unique ID number for each line feature.

1. Line [string]
 - line that uses this route
 - Written as: "LineName (GoverningSystem)"

2. System [string]
 - system that uses this line (one system per line - no two systems may share a single line)

3. Operator [string]
 - authority that owns/operates the line
 - full names are written first, followed by abbreviations.

4. Service [string]
 - what branches/services use this line (e.g. F and D service both use the Sixth Avenue (Orange) Line in the NYC Subway System)
 - Written as: "ServiceName (LineName)"
 - Written as "All Service" if all service uses the line or no service designations exist.
 - Written as "None (No Regular Service)" if the line does not see normal service (i.e. special events only)"
 - Left blank (NULL) if service designations are not applicable to this line.
 - If limited, may contain an optional descriptor indicating how the service is limited, appended to the end of the service tag (written as "ServiceName - Service (Designator)"). Descriptors may include, but are not limited to, the following: "Late Nights Only", "Weekends Only", "Rush Hours Only", "Special Events".

5. Limited Service [boolean]
 - indicates whether the line is classified as "Limited Service"
 - See [Station Data Values](https://trello.com/c/uOcm3oSb) for classification details.

6. Service Frequency [string]
 - Indicates the frequency in which trains travel along the line in a given day
 - See [Station Data Values](https://trello.com/c/uOcm3oSb) for classification details

7. Status [string]
 - built status of the route/line.
 - Possible values: Built, Under Construction, Planned, Proposed (legacy value)

8. Line Type [string]
 - type of rail/system that occupies this line. 
 - Possible values: "Heavy Rail", "Light Rail", "Streetcar", "Commuter Rail", "Intercity Rail", "Heritage Rail", "Monorail", "People Mover",

9. Electrification [string]
 - whether the section of line is electrified and supports electric trains
 - Possible values: Overhead, Third Rail, None

10. System Code [string]
 - The system code applied to this system. Used for easy filtering/categorization of lines.
 - See the [Dataset Category](https://trello.com/c/PLDbhUPZ) card for system codes.

```
Line Data is exported from QGIS using the following settings:

```
- Line Projection in QGIS: WGS84/Pseudo-Mercator EPSG:3857
- Offset line features 20 units in QGIS
- Exporting GeoJSON from QGIS:
 - Format: GeoJSON
 - CRS: EPSG:4326 - WSG 84 (Should be default)
 - Geometry Type: Automatic
 - Coordinate_precision: 6
 - Write_box: No
 - Do not add saved file to map
```
Before uploading to Mapbox, delete the line below (should be line 4): 

```
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"
```

### Connections

All connection datasets are developed in QGIS, and saved as .gpkg files. As with lines, the builds are exported as .geojson files for use with Mapbox.

```
**CONNECTION VALUES**
*updated for version 0.1.4*

1. Data Type [string]
	- (used to indicate stations that are directly connected, either to allow passing between lines within the fare zone, or multiple stations that are directly connected to allow inter-system transfers (usually by sharing a name or location))
	- Possible values: Transfer (Local), Transfer (Protected)
	- Protected: transfers within the system and/or station complex. Typically fare-protected if within the same system
	- Local: A typical connection due to station proximity, but not within the same station. Typically not fare protected (or may only be at certain times).
```

### Dataset Categories / System Codes

To ease the accessing/filtering of data, all systems are assigned a unique "System Code". This code is written as XX01, where XX is the two-letter code for the region it is present in (using the 9 regions as defined by the 2018 Federal Census Bureau), and 01 is a unique number for each system. For example, the NYC Subway is given the system code "MA02".

Below is a list of all currently-assigned system codes, as of v0.11. Please see [this Trello card](https://trello.com/c/PLDbhUPZ) for the most recent list.

```
For data that is cataloged outside of Trello, the datasets are broken into categories that correspond to current (2018) Federal Census Bureau categories. These are as follows:

- New England (Northeast): CT, MA, ME, NH, RI, VT (Station ID# 1001 - 1700)
 - NE01 - Amtrak
 - NE02 - MBTA Subway
 - NE03 - MBTA Commuter Rail
 - NE04 - CapeFLYER
 - NE05 - CTrail (Shore Line East, Hartford Line)
 - *Metro-North Railroad*

- Mid Atlantic (Northeast): PA, NJ, NY (Station ID# 1701 - 3900)
 - MA01 - Amtrak
 - MA02 - NYC Subway
 - MA03 - Metro-North Railroad
 - MA04 - Long Island Railroad
 - MA05 - PATH
 - MA06 - Staten Island Railroad
 - MA07 - Hudson-Bergen Light Rail
 - MA08 - Newark Light Rail
 - MA09 - NJ Transit Rail
 - MA10 - River LINE
 - MA11 - PATCO Speedline
 - MA12 - SEPTA Rapid Transit
 - MA13 - SEPTA Regional Rail
 - MA14 - Pittsburgh Light Rail
 - MA15 - Buffalo Metro Rail
 - MA16 - AirTrain

- South Atlantic (South): DC, DE, FL, GA, MD, NC, SC, VA, WV (ID# 3900 - 4xxx )
 - SA01 - Amtrak

- East North Central (Midwest): IL, IN, MI, OH, WI (Id 4000)
 - EN01 - Amtrak

- East South Central (South): AL, KY, MS, TN (Id 5000)
 - ES01 - Amtrak

- West North Central (Midwest): IA, KS, MN, MO, ND, NE, SD (Id 6000)
 - WN01 - Amtrak

- West South Central (South): AR, LA, OK, TX (Id 7000)
 - WS - Amtrak

- Mountain (West): AZ, CO, ID, MT, NM, NV, UT, WY (Id 8000)
 - MN01 - Amtrak

- Pacific (West): AK, CA, HI, OR, WA (Id 9000)
 - PA01 - Amtrak

Note: Italics mark systems whose line data, while spread across that particular dataset category, is only present in another category (i.e. line data is not broken up even if it crosses categories, but rather is kept in the primary category)

Note: Unlike other lines, Amtrak *is* broken up between categories, as the feature set would cover too large of a coordinate range otherwise. Amtrak is always listed as "XX01" for each respective category
```

## Contributions

If you would like to help contribute to this dataset, please reach out to the project developers on Trello.

Currently, assistance is being sought for the following:
* Dataset Review/Corrections - Reviewing existing station and line data for accuracy/correctness.
* System Completion - Notifying the project if there are systems missing from the system roadmap.


## Version

This readme was updated for verion 0.11. Version 1 will be released when a substantial enough portion of the dataset and map has been completed.


## Authors

* **August R.** - *Main Developer*


## Disclaimer

Last updated: December 10, 2019

The information contained on http://www.railmap.xyz/ website (the "Service") and in this dataset (the "Data") is for general information purposes only.

RailMap.xyz and its developers assume no responsibility for errors or omissions in the contents on the Service or in the Data.

In no event shall RailMap.xyz and its developers be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other arising out of or in connection with the use of the Service, the Data, or the contents of the Service or Data. RailMap.xyz reserves the right to make additions, deletions, or modification to the contents on the Service and in the Data at any time without prior notice. This Disclaimer for RailMap.xyz has been created with the help of Disclaimer Generator.

RailMap.xyz does not warrant that the website is free of viruses or other harmful components.


## License

This project is licensed under the Creative Commons Zero v1.0 Universal license. See the [License.md](LICENSE.md) file for details.
