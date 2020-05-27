var chart;
$(document).ready(function() {
chart = new Highcharts.Chart({
    chart: {
      renderTo: 'absPlot', 
      zoomType: 'xy',
      defaultSeriesType: 'line',
      backgroundColor : null
    },
    title: {
      text: "Ho:LiYF\u2084"
    },
	credits: {
		enabled: true,
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF06.TXT.html",
		text: "omlc.org",
		position: {
			align:'right',
			x : -15,
			verticalAlign: 'bottom',
			y : -60,
		}
	},
    xAxis: {
      title: {
        enabled: true,
        text: 'Wavelength (nm)'
      },
      startOnTick: true,
      endOnTick: true,
      showFirstLabel: false,
      showLastLabel: false,
      maxPadding: 0.05,
      gridLineWidth: 1,
    },
    yAxis: {
      title: {
        enabled: true,
        text: 'Absorption for unity concentration (m\u207B\u00B9)'
      },
      startOnTick: true,
      endOnTick: true,
      showFirstLabel: false,
      showLastLabel: false,
      maxPadding: 0.05,
      gridLineWidth: 1,
      labels: { formatter: function() {return this.value;} }
    },
    tooltip: {
      formatter: function() {
        return this.x.toFixed(2) + 'nm, ' + this.y +'m\u207B\u00B9';
      }
    },
    legend: {
      enabled:false
    },
	plotOptions: {
		line: {
			lineWidth: 1,
			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: true,
						radius: 5
					}
				}
			},
			shadow: false,
			states: {
				hover: {
					lineWidth: 1
				}
			}
		},
     },
  series: [
{
	color: 'rgba(223, 83, 83, 1.0)',
	pointInterval: 0.1,
	pointStart: 520,
	data: [127,
266,
364,
74,
422,
244,
306,
185,
129,
105,
238,
439,
296,
302,
303,
253,
315,
10,
189,
323,
344,
273,
551,
459,
450,
333,
135,
309,
203,
480,
522,
277,
206,
345,
310,
316,
292,
333,
247,
489,
122,
265,
697,
451,
380,
520,
433,
805,
312,
677,
498,
643,
830,
655,
718,
713,
1014,
664,
793,
903,
1007,
822,
880,
772,
850,
970,
821,
1128,
1181,
1046,
1063,
1058,
1179,
1029,
1061,
1171,
1292,
1048,
1221,
1014,
1238,
1343,
1167,
1324,
1435,
1242,
1457,
1265,
1501,
1361,
1288,
1014,
1222,
1036,
1496,
1116,
1231,
1175,
1254,
1145,
1412,
1387,
1367,
1310,
1405,
1694,
1790,
1738,
1497,
1719,
1515,
1747,
1827,
2257,
1902,
2280,
2227,
2159,
2266,
2529,
2674,
2643,
2800,
3120,
3050,
3116,
3564,
3422,
3554,
3797,
3952,
4396,
4722,
4622,
5356,
5477,
6150,
6622,
7271,
8608,
10003,
11708,
13772,
16363,
19717,
23696,
28481,
35557,
46352,
59170,
68496,
74773,
81742,
82071,
64463,
44609,
33094,
27213,
22431,
17710,
14000,
11401,
9815,
9460,
9842,
12017,
14996,
20245,
30318,
42591,
52827,
50549,
39136,
29395,
22717,
18473,
16348,
15470,
17084,
21311,
24452,
20945,
14821,
10553,
8209,
6746,
6003,
5545,
5358,
5416,
5326,
5950,
6101,
6794,
6918,
7762,
9801,
12554,
12714,
9822,
7408,
6028,
5764,
5622,
6517,
7377,
9828,
12291,
12790,
11722,
10627,
9576,
8288,
7425,
6212,
5319,
4560,
4427,
3748,
3475,
3356,
3712,
4991,
5805,
5486,
5073,
4318,
4158,
4275,
4482,
5349,
6146,
6460,
6940,
7224,
7665,
8176,
7571,
6308,
5158,
4297,
3581,
3391,
2755,
2312,
2239,
1996,
2028,
1966,
1898,
1978,
2185,
2388,
2426,
2465,
2269,
2285,
1895,
1822,
2028,
2056,
1840,
2110,
1974,
1591,
1477,
1520,
1177,
1230,
1023,
870,
819,
1171,
1094,
1219,
1003,
1050,
1206,
1431,
1547,
1946,
1753,
1565,
1482,
1629,
1468,
1962,
1879,
2138,
2314,
3086,
2759,
2530,
2005,
1822,
1613,
1374,
1125,
1443,
1319,
1560,
1316,
1645,
1730,
1500,
1800,
1149,
938,
1145,
1182,
571,
531,
486,
630,
712,
606,
433,
633,
353,
502,
718,
407,
448,
500,
358,
660,
682,
346,
760,
393,
552,
329,
51,
402,
668,
353,
196,
217,
310,
366,
520,
470,
655,
299,
274,
204,
164,
256,
328,
283,
26,
326,
266,
516,
318,
299,
345,
179,
357,
318,
106,
289,
305,
601,
261,
690,
1,
656,
280,
448,
490,
338,
461,
107,
544,
545,
297,
460,
309,
157,
244,
1,
531,
277,
212,
163,
361,
393,
521,
323,
400,
452,
377,
638,
333,
303,
533,
274,
642,
474,
409,
532,
147,
97,
468,
587,
338,
344,
41,
376,
570,
694,
409,
344,
51,
371,
250,
216,
572,
354,
625,
458,
372,
363,
30,
583,
188,
98,
225,
460,
562,
471,
559,
478,
433,
705,
496,
436,
315,
816,
423,
521,
619,
365,
224,
113,
271,
242,
1,
208,
442,
286,
439,
506,
379,
1,
1,
601,
363,
358,
212,
284,
234,
362,
556,
212,
665,
712,
442,
453,
1,
262,
157,
259,
33,
306,
140,
308,
532,
508,
555,
479,
485,
481,
477,
259,
422,
372,
282,
384,
279,
411,
104,
494,
292,
420,
594,
590,
616,
545,
506],
}]
});
});