
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "APE_DataLimits_munis_0": {
            "type": "geojson",
            "data": json_APE_DataLimits_munis_0
        }
                    ,
        "NDVIAbsencia_1": {
            "type": "geojson",
            "data": json_NDVIAbsencia_1
        }
                    ,
        "NDVIBaix_2": {
            "type": "geojson",
            "data": json_NDVIBaix_2
        }
                    ,
        "NDVIMitj_3": {
            "type": "geojson",
            "data": json_NDVIMitj_3
        }
                    ,
        "NDVIALT_4": {
            "type": "geojson",
            "data": json_NDVIALT_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#4c4c4c"
            }
        },
        {
            "id": "lyr_APE_DataLimits_munis_0_0",
            "type": "fill",
            "source": "APE_DataLimits_munis_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#f0f0f0', "fill-outline-color":"#6a6a6a"}
        }
,
        {
            "id": "lyr_NDVIAbsencia_1_0",
            "type": "fill",
            "source": "NDVIAbsencia_1",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'NDVI_Ab'], 0.0], ['<=', ['get', 'NDVI_Ab'], 10157.219427]], 1.0, ['all', ['>', ['get', 'NDVI_Ab'], 10157.219427], ['<=', ['get', 'NDVI_Ab'], 32026.830635]], 1.0, ['all', ['>', ['get', 'NDVI_Ab'], 32026.830635], ['<=', ['get', 'NDVI_Ab'], 107623.596693]], 1.0, ['all', ['>', ['get', 'NDVI_Ab'], 107623.596693], ['<=', ['get', 'NDVI_Ab'], 254699.162019]], 1.0, ['all', ['>', ['get', 'NDVI_Ab'], 254699.162019], ['<=', ['get', 'NDVI_Ab'], 362892.178588]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'NDVI_Ab'], 0.0], ['<=', ['get', 'NDVI_Ab'], 10157.219427]], '#fff5f0', ['all', ['>', ['get', 'NDVI_Ab'], 10157.219427], ['<=', ['get', 'NDVI_Ab'], 32026.830635]], '#fdbea5', ['all', ['>', ['get', 'NDVI_Ab'], 32026.830635], ['<=', ['get', 'NDVI_Ab'], 107623.596693]], '#fc7050', ['all', ['>', ['get', 'NDVI_Ab'], 107623.596693], ['<=', ['get', 'NDVI_Ab'], 254699.162019]], '#d42020', ['all', ['>', ['get', 'NDVI_Ab'], 254699.162019], ['<=', ['get', 'NDVI_Ab'], 362892.178588]], '#67000d', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIBaix_2_0",
            "type": "fill",
            "source": "NDVIBaix_2",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'NDVI_Baix'], 0.0], ['<=', ['get', 'NDVI_Baix'], 7683.523404]], 1.0, ['all', ['>', ['get', 'NDVI_Baix'], 7683.523404], ['<=', ['get', 'NDVI_Baix'], 29442.166584]], 1.0, ['all', ['>', ['get', 'NDVI_Baix'], 29442.166584], ['<=', ['get', 'NDVI_Baix'], 82872.05672]], 1.0, ['all', ['>', ['get', 'NDVI_Baix'], 82872.05672], ['<=', ['get', 'NDVI_Baix'], 186021.292957]], 1.0, ['all', ['>', ['get', 'NDVI_Baix'], 186021.292957], ['<=', ['get', 'NDVI_Baix'], 284726.948192]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'NDVI_Baix'], 0.0], ['<=', ['get', 'NDVI_Baix'], 7683.523404]], '#f7fecb', ['all', ['>', ['get', 'NDVI_Baix'], 7683.523404], ['<=', ['get', 'NDVI_Baix'], 29442.166584]], '#f7fbae', ['all', ['>', ['get', 'NDVI_Baix'], 29442.166584], ['<=', ['get', 'NDVI_Baix'], 82872.05672]], '#f5e765', ['all', ['>', ['get', 'NDVI_Baix'], 82872.05672], ['<=', ['get', 'NDVI_Baix'], 186021.292957]], '#fbcf13', ['all', ['>', ['get', 'NDVI_Baix'], 186021.292957], ['<=', ['get', 'NDVI_Baix'], 284726.948192]], '#f5b000', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIMitj_3_0",
            "type": "fill",
            "source": "NDVIMitj_3",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'NDVI_Mitj'], 0.0], ['<=', ['get', 'NDVI_Mitj'], 6249.848892]], 1.0, ['all', ['>', ['get', 'NDVI_Mitj'], 6249.848892], ['<=', ['get', 'NDVI_Mitj'], 24451.845301]], 1.0, ['all', ['>', ['get', 'NDVI_Mitj'], 24451.845301], ['<=', ['get', 'NDVI_Mitj'], 60166.540374]], 1.0, ['all', ['>', ['get', 'NDVI_Mitj'], 60166.540374], ['<=', ['get', 'NDVI_Mitj'], 145425.624657]], 1.0, ['all', ['>', ['get', 'NDVI_Mitj'], 145425.624657], ['<=', ['get', 'NDVI_Mitj'], 482849.426017]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'NDVI_Mitj'], 0.0], ['<=', ['get', 'NDVI_Mitj'], 6249.848892]], '#fff5eb', ['all', ['>', ['get', 'NDVI_Mitj'], 6249.848892], ['<=', ['get', 'NDVI_Mitj'], 24451.845301]], '#fed2a6', ['all', ['>', ['get', 'NDVI_Mitj'], 24451.845301], ['<=', ['get', 'NDVI_Mitj'], 60166.540374]], '#fd9243', ['all', ['>', ['get', 'NDVI_Mitj'], 60166.540374], ['<=', ['get', 'NDVI_Mitj'], 145425.624657]], '#df4f05', ['all', ['>', ['get', 'NDVI_Mitj'], 145425.624657], ['<=', ['get', 'NDVI_Mitj'], 482849.426017]], '#7f2704', '#ffffff']}
        }
,
        {
            "id": "lyr_NDVIALT_4_0",
            "type": "fill",
            "source": "NDVIALT_4",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'NDVI_Alt'], 0.0], ['<=', ['get', 'NDVI_Alt'], 8257.803195]], 1.0, ['all', ['>', ['get', 'NDVI_Alt'], 8257.803195], ['<=', ['get', 'NDVI_Alt'], 31919.912535]], 1.0, ['all', ['>', ['get', 'NDVI_Alt'], 31919.912535], ['<=', ['get', 'NDVI_Alt'], 94717.286139]], 1.0, ['all', ['>', ['get', 'NDVI_Alt'], 94717.286139], ['<=', ['get', 'NDVI_Alt'], 389607.933642]], 1.0, ['all', ['>', ['get', 'NDVI_Alt'], 389607.933642], ['<=', ['get', 'NDVI_Alt'], 576145.997413]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'NDVI_Alt'], 0.0], ['<=', ['get', 'NDVI_Alt'], 8257.803195]], '#f7fcf5', ['all', ['>', ['get', 'NDVI_Alt'], 8257.803195], ['<=', ['get', 'NDVI_Alt'], 31919.912535]], '#caeac3', ['all', ['>', ['get', 'NDVI_Alt'], 31919.912535], ['<=', ['get', 'NDVI_Alt'], 94717.286139]], '#7bc87c', ['all', ['>', ['get', 'NDVI_Alt'], 94717.286139], ['<=', ['get', 'NDVI_Alt'], 389607.933642]], '#2a924a', ['all', ['>', ['get', 'NDVI_Alt'], 389607.933642], ['<=', ['get', 'NDVI_Alt'], 576145.997413]], '#00441b', '#ffffff']}
        }
],
}