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
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF03.TXT.html",
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
	pointStart: 435,
	data: [238,
228,
14,
25,
387,
188,
183,
1,
264,
270,
352,
1,
168,
97,
188,
285,
204,
1,
138,
214,
230,
301,
133,
163,
174,
296,
460,
343,
87,
88,
128,
200,
292,
394,
456,
343,
605,
677,
354,
579,
508,
760,
858,
734,
952,
838,
828,
673,
1014,
885,
1233,
750,
756,
1186,
838,
1103,
1275,
1166,
1119,
1417,
1260,
963,
1000,
963,
1125,
948,
1601,
1177,
912,
1396,
1669,
1486,
1318,
1533,
1418,
1876,
1886,
2173,
1449,
1707,
2014,
1924,
1924,
1887,
1987,
2693,
2291,
2264,
2537,
2259,
2430,
2736,
3181,
2828,
2834,
3099,
2828,
3514,
3955,
4422,
4708,
5285,
6032,
7198,
8793,
11156,
13525,
16723,
19482,
19559,
17452,
16050,
15756,
15429,
14190,
12402,
11248,
10873,
11841,
13580,
15950,
18297,
18654,
17047,
16101,
16959,
18944,
20319,
21131,
21187,
21655,
22260,
21777,
21083,
20454,
18442,
15537,
12550,
11587,
11075,
11120,
11744,
11744,
13364,
16755,
23066,
32308,
41147,
40156,
30191,
20717,
14283,
10863,
8113,
7446,
6900,
7470,
7763,
8741,
10143,
12359,
13973,
15461,
15617,
16939,
21894,
30624,
34326,
26039,
18535,
14091,
11989,
11284,
10410,
11603,
12042,
11590,
10056,
8712,
7417,
7340,
7316,
6784,
6066,
5680,
5800,
6136,
6235,
6147,
6392,
6661,
6837,
6891,
6908,
6165,
5755,
5790,
5417,
4861,
4524,
4311,
3884,
4172,
4289,
4390,
4602,
4619,
4580,
5008,
5578,
6166,
6318,
5889,
5395,
4828,
4620,
4868,
5458,
7188,
9102,
11118,
11868,
12270,
12870,
13288,
13173,
11809,
10452,
10503,
10913,
10369,
8973,
7302,
5562,
4436,
3299,
2381,
1923,
1559,
1565,
1313,
1084,
1157,
949,
846,
810,
645,
789,
475,
537,
485,
552,
260,
209,
470,
599,
578,
383,
573,
281,
491,
338,
174,
379,
338,
646,
358,
353,
297,
318,
297,
487,
610,
384,
477,
349,
482,
226,
262,
262,
451,
344,
462,
313,
150,
227,
483,
217,
130,
565,
258,
247,
242,
278,
406,
488,
499,
376,
673,
839,
1327,
1595,
1970,
1896,
1758,
1975,
2471,
2342,
1674,
1318,
1067,
1198,
1187,
1161,
1349,
1585,
1880,
1923,
2162,
2654,
3534,
3665,
3693,
3534,
3858,
4196,
3831,
2865,
2051,
1502,
1319,
1876,
2365,
2211,
1908,
1934,
1681,
1697,
1539,
1466,
1487,
1513,
1382,
1142,
800,
723,
615,
332,
210,
682,
404,
322,
282,
369,
507,
435,
553,
620,
718,
796,
853,
925,
786,
1024,
1169,
1133,
1410,
1436,
1852,
2011,
2159,
2197,
3002,
4010,
5852,
6807,
6199,
5651,
4939,
4821,
5778,
7174,
6967,
5910,
4596,
3493,
2593,
2219,
2320,
2134,
1721,
1906,
1922,
2017,
2092,
1964,
1864,
2039,
1811,
1385,
1365,
1427,
1255,
1057,
1021,
1026,
778,
556,
974,
830,
685,
644,
825,
871,
623,
721,
639,
799,
985,
923,
996,
1095,
991,
804,
609,
903,
439,
496,
717,
820,
857,
764,
1012,
981,
1106,
1382,
1179,
1137,
1257,
955,
992,
1393,
1755,
1561,
1740,
1635,
1624,
1650,
1587,
1357,
1524,
1462,
1483,
1279,
1383,
967,
1190,
1003,
1284,
1279,
1253,
1389,
1614,
1546,
2383,
3410,
4282,
4956,
4238,
3988,
3773,
3203,
2684,
2325,
2840,
2938,
3106,
3280,
2976,
2448,
2277,
2187,
2160,
2022,
2454,
2588,
3248,
4417,
5246,
4754,
4022,
4507,
6235,
9174,
12153,
11982,
9766,
10640,
12081,
9760,
5595,
3047,
2214,
1891,
1575,
1412,
1833,
1266,
1209,
1021,
887,
449,
716,
618,
753,
526,
624,
748,
511,
245,
531,
332,
414,
496,
573,
655,
475,
645,
774,
681,
945,
1366,
1194,
1278,
1461,
1158,
1330,
1054,
1168,
1398,
1545,
1566,
1687,
2201,
1983,
1904,
1446,
966,
977,
1107,
739,
713,
713,
780,
972,
1008,
719,
683,
858,
900,
1133,
1295,
1190,
1227,
1071,
1035,
874,
874,
637,
616,
508,
585,
442,
191,
207,
186,
268,
110,
304,
212,
192,
202,
1,
100,
49,
141,
156,
65,
1,
4,
136,
141,
85,
85,
45,
172,
131,
346,
1,
177,
366],
}]
});
});