AmCharts.makeChart("div_vis_smr_pvd_vie_chart",


    {
        "type": "serial",
        "categoryField": "log_dt",
        "columnWidth": 0,
        "marginTop": 10,
        "minMarginBottom": 20,
        "plotAreaFillAlphas": 1,
        "plotAreaFillColors": "#F6F6F6",
        "sequencedAnimation": false,
        "startDuration": 0.1,
        "startEffect": "easeOutSine",
        "backgroundAlpha": 1,
        "backgroundColor": "#F6F6F6",
        "borderAlpha": 1,
        "borderColor": "#F6F6F6",
        "color": "#69718B",
        "categoryAxis": {
            "autoRotateAngle": 0,
            "axisAlpha": 0.46,
            "axisColor": "#69718B",
            "color": "#69718B",
            "firstDayOfWeek": 0,
            "gridAlpha": 0.49,
            "gridColor": "#69718B",
            "gridCount": 0,
            "labelOffset": -2,
            "minHorizontalGap": 60,
            "minorGridAlpha": 0,
            "minorTickLength": 23,
            "minVerticalGap": 24,
            "tickLength": 2
        },
        "chartCursor": {
            "enabled": true,
            "animationDuration": 0.06,
            "bulletSize": 7,
            "categoryBalloonAlpha": 0,
            "categoryBalloonDateFormat": "",
            "categoryBalloonEnabled": false,
            "categoryBalloonText": "",
            "cursorAlpha": 0,
            "cursorColor": "#D4D4D4",
            "fullWidth": true,
            "graphBulletAlpha": 1,
            "graphBulletSize": 1.2,
            "selectionAlpha": 0,
            "selectWithoutZooming": true,
            "showNextAvailable": true,
            "tabIndex": 10,
            "valueLineAlpha": 0,
            "valueZoomable": true
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonColor": "undefined",
                "balloonText": "전체 [[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletBorderColor": "#69718B",
                "bulletBorderThickness": 1,
                "bulletColor": "#69718B",
                "columnWidth": 0,
                "cornerRadiusTop": 3,
                "fontSize": 2,
                "id": "AmGraph-1",
                "lineAlpha": 0.46,
                "lineColor": "#69718B",
                "lineThickness": 2,
                "title": "전체",
                "topRadius": 0,
                "valueField": "전체"
            },
            {
                "balloonText": "모바일 웹 [[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletBorderColor": "#60A3C0",
                "bulletBorderThickness": 0,
                "bulletColor": "#60A3C0",
                "bulletOffset": -3,
                "fillAlphas": 0.47,
                "id": "AmGraph-2",
                "lineAlpha": 0.86,
                "lineColor": "#60A3C0",
                "negativeFillAlphas": 0,
                "negativeLineAlpha": 0,
                "title": "모바일 웹",
                "topRadius": 0,
                "valueField": "모바일 웹"
            },
            {
                "balloonText": "모바일 앱 [[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletBorderColor": "#68BACF",
                "bulletBorderThickness": 0,
                "bulletColor": "#68BACF",
                "fillAlphas": 0.48,
                "id": "AmGraph-3",
                "lineAlpha": 0.87,
                "lineColor": "#60A3C0",
                "title": "모바일 앱",
                "valueField": "모바일 앱"
            },
            {
                "bullet": "round",
                "bulletBorderColor": "#2B7493",
                "bulletColor": "#2B7493",
                "cornerRadiusTop": 2,
                "fillAlphas": 0.48,
                "id": "AmGraph-5",
                "lineAlpha": 0.89,
                "lineColor": "#2B7493",
                "title": "웹",
                "valueField": "웹"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "axisFrequency": 0,
                "id": "ValueAxis-1",
                "totalText": "",
                "totalTextColor": "#000000",
                "autoRotateCount": 0,
                "axisAlpha": 0,
                "axisThickness": 0,
                "dashLength": 2,
                "firstDayOfWeek": 0,
                "gridColor": "#AAB3B3",
                "gridCount": 4,
                "gridThickness": 0,
                "labelOffset": -9,
                "minHorizontalGap": 59,
                "tickLength": 20,
                "title": "",
                "titleFontSize": 1,
                "titleRotation": 1
            }
        ],
        "allLabels": [],
        "balloon": {
            "animationDuration": 0.38,
            "borderAlpha": 0,
            "borderColor": "#000000",
            "borderThickness": 0,
            "color": "#FFFFFF",
            "fadeOutDuration": 0.98,
            "fillAlpha": 0.89,
            "fillColor": "#1A1A29",
            "horizontalPadding": 10,
            "pointerOrientation": "left",
            "pointerWidth": 5,
            "shadowAlpha": 0,
            "showBullet": true
        },
        "legend": {
            "enabled": true,
            "backgroundAlpha": 1,
            "backgroundColor": "#F6F6F6",
            "left": 1,
            "markerBorderAlpha": 0,
            "rollOverColor": "#0194FF",
            "rollOverGraphAlpha": 0
        },
        "titles": [
            {
                "alpha": 0,
                "bold": false,
                "id": "Title-1",
                "size": 15,
                "text": "페이지뷰"
            }
        ],
        "dataProvider": [
            {
                "log_dt": "2017.04.06",
                "전체": "27563",
                "모바일 웹": "14256",
                "모바일 앱": "18564",
                "웹": "11113"
            },
            {
                "log_dt": "2017.04.07",
                "전체": "29654",
                "모바일 웹": "23456",
                "모바일 앱": "26345",
                "웹": "9865"
            },
            {
                "log_dt": "2017.04.08",
                "전체": "33224",
                "모바일 웹": "23764",
                "모바일 앱": "27452",
                "웹": "12331"
            },
            {
                "log_dt": "2017.04.09",
                "전체": "26345",
                "모바일 웹": "13432",
                "모바일 앱": "22225",
                "웹": "11124"
            },
            {
                "log_dt": "2017.04.10",
                "전체": "34215",
                "모바일 웹": "24563",
                "모바일 앱": "23245",
                "웹": "21334"
            },
            {
                "log_dt": "2017.04.11",
                "전체": "29546",
                "모바일 웹": "17643",
                "모바일 앱": "32456",
                "웹": "11234"
            },
            {
                "log_dt": "2017.04.12",
                "전체": "25232",
                "모바일 웹": "21345",
                "모바일 앱": "12356",
                "웹": "11134"
            }
        ]
    }





);