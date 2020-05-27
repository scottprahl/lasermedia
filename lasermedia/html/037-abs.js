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
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF10.TXT.html",
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
	pointInterval: 0.2,
	pointStart: 1125,
	data: [272,
94,
39,
446,
153,
192,
331,
396,
341,
163,
133,
431,
287,
292,
490,
217,
356,
431,
84,
138,
391,
237,
242,
193,
79,
351,
30,
15,
84,
1,
148,
15,
1,
94,
163,
1,
217,
84,
109,
193,
277,
406,
461,
396,
262,
486,
361,
826,
560,
501,
780,
780,
660,
891,
605,
665,
936,
765,
826,
760,
496,
806,
705,
670,
881,
725,
411,
1027,
1082,
1163,
1249,
1188,
1564,
2128,
2195,
2637,
2507,
2637,
2872,
2815,
2335,
2041,
1958,
1498,
1687,
1523,
1671,
1345,
1285,
1488,
1523,
1376,
1758,
1605,
1641,
2103,
2092,
2247,
2403,
2757,
3151,
3591,
3746,
4219,
4019,
3501,
3719,
3310,
3004,
2647,
2082,
1810,
2221,
1758,
2041,
2113,
1876,
2165,
2533,
2752,
2951,
2862,
2852,
3099,
2873,
2878,
2642,
2118,
2201,
2304,
2227,
2538,
2315,
2279,
2747,
2804,
3130,
3725,
3703,
4106,
4615,
4316,
4305,
3891,
3305,
3278,
2909,
2831,
2820,
2294,
2491,
2978,
2873,
3560,
4235,
4948,
6465,
7887,
8440,
9155,
8540,
7659,
7346,
6488,
6075,
6087,
5583,
5411,
5684,
5467,
5489,
5456,
5339,
5561,
5124,
4463,
4004,
3300,
2570,
2502,
1969,
1856,
1815,
1169,
1295,
1346,
1108,
1270,
836,
646,
947,
912,
486,
751,
506,
307,
571,
278,
631,
601,
45,
337,
427,
387,
422,
114,
31,
641,
308,
576,
636,
233,
288,
546,
651,
776,
776,
347,
706,
816,
561,
671,
606,
342,
987,
751,
666,
786,
283,
701,
786,
377,
847,
661,
442,
576,
646,
611,
852,
522,
387,
776,
676,
756,
581,
392,
792,
691,
562,
917,
686,
591,
942,
676,
691,
872,
596,
747,
1063,
877,
1073,
872,
532,
1149,
1210,
952,
1194,
852,
1038,
1341,
967,
1235,
1028,
1109,
1494,
1580,
1397,
1800,
1606,
1530,
1657,
1489,
1347,
1514,
1235,
1321,
1713,
1245,
1377,
1159,
1255,
1489,
1377,
1271,
1570,
1089,
1094,
1586,
1084,
1413,
1210,
917,
1255,
1210,
943,
948,
772,
747,
1144,
988,
1149,
1169,
837,
1003,
1321,
1089,
1469,
1550,
1387,
1934,
2057,
2207,
2394,
2472,
2800,
3285,
3401,
3865,
4096,
4812,
4698,
5092,
5357,
4938,
5114,
5318,
5186,
5696,
5379,
5335,
5646,
5302,
4900,
5048,
4118,
3817,
3903,
3476,
3726,
3822,
3523,
4107,
3919,
3956,
4361,
4534,
4649,
5103,
4993,
5098,
5191,
4415,
4236,
4166,
3301,
2947,
2461,
2032,
2120,
1627,
1474,
1525,
1059,
722,
1180,
832,
913,
787,
617,
627,
817,
557,
702,
522,
304,
602,
448,
453,
682,
294,
343,
453,
567,
572,
413,
12,
348,
343,
363,
473,
81,
210,
423,
46,
121,
294,
1,
150,
274,
249,
368,
116,
1,
244,
71,
254,
155,
1,
22,
398,
32,
274,
428,
12,
324,
324,
234,
573,
349,
165,
478,
344,
697,
533,
314,
468,
652,
508,
618,
418,
319,
672,
508,
344,
428,
299,
478,
458,
344,
274,
289,
1,
180,
249,
126,
141,
1,
1,
101,
1,
1,
62,
1,
2,
1,
1,
7,
1,
1,
47,
12,
42,
250,
1,
1,
364,
27,
264,
264,
121,
349,
339,
96,
399,
156,
180,
314,
161,
185,
583,
1,
240,
369,
225,
369,
205,
1,
349,
126,
195,
87],
}]
});
});
