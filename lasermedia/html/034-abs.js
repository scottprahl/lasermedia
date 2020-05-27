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
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF07.TXT.html",
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
	pointStart: 620,
	data: [166,
242,
1,
227,
1,
46,
398,
333,
353,
449,
272,
141,
510,
262,
26,
192,
277,
318,
464,
398,
152,
338,
545,
424,
535,
429,
207,
444,
172,
51,
480,
338,
167,
253,
258,
581,
601,
708,
460,
233,
217,
248,
182,
238,
465,
182,
238,
546,
480,
142,
253,
384,
369,
183,
430,
203,
208,
233,
163,
541,
138,
344,
268,
440,
405,
349,
415,
425,
98,
486,
541,
253,
811,
248,
420,
365,
587,
314,
623,
674,
602,
279,
173,
410,
350,
826,
461,
522,
694,
577,
436,
730,
234,
598,
481,
710,
214,
174,
486,
446,
451,
1016,
300,
335,
441,
583,
689,
325,
771,
431,
624,
487,
492,
761,
659,
487,
634,
598,
467,
532,
894,
462,
981,
725,
260,
436,
528,
614,
594,
487,
462,
502,
930,
1001,
644,
650,
604,
568,
879,
935,
976,
1001,
1027,
731,
777,
1022,
930,
935,
752,
879,
910,
1027,
691,
625,
1222,
1192,
1130,
1269,
946,
1325,
1089,
1233,
1012,
1233,
1408,
1331,
1331,
1351,
1362,
1475,
1382,
1828,
1563,
1631,
1787,
1657,
2079,
2247,
2216,
2268,
2490,
2840,
2989,
3086,
3403,
3630,
4356,
5032,
5138,
6203,
7646,
8904,
10166,
11412,
11437,
10284,
9123,
7859,
6913,
6163,
5753,
5566,
5589,
5290,
4732,
4301,
4241,
3956,
3934,
3603,
3376,
3274,
3151,
3333,
3452,
3625,
4555,
5257,
6267,
7688,
8965,
10719,
11374,
11329,
10776,
10091,
9191,
7777,
6549,
5128,
4379,
3226,
3199,
2380,
2322,
2312,
1695,
1778,
1436,
1757,
1783,
1632,
1690,
1887,
2055,
1966,
2291,
2228,
1841,
1992,
2018,
2018,
2613,
2852,
2687,
2788,
2863,
2375,
2186,
2439,
2534,
2592,
2381,
2244,
2555,
1992,
2376,
2402,
2386,
3157,
3686,
3849,
3313,
3072,
2842,
2371,
2019,
1732,
1328,
1540,
1462,
1581,
1297,
1076,
1261,
1035,
969,
1036,
801,
1148,
1442,
984,
852,
1195,
1092,
1138,
1087,
1287,
1308,
1082,
1072,
1391,
1303,
1618,
1453,
1608,
1422,
1707,
2009,
1701,
1952,
2061,
2303,
2816,
2414,
2758,
2726,
2488,
2689,
2641,
2525,
2445,
2472,
2366,
2119,
2356,
1900,
2193,
2546,
2409,
2125,
2245,
1931,
1978,
2267,
2451,
2282,
2351,
2870,
3250,
3052,
3309,
3829,
4315,
4359,
4260,
3315,
3266,
3234,
2854,
2568,
2828,
2356,
2057,
2451,
1853,
2473,
2246,
2241,
2420,
3084,
3471,
3954,
3856,
3661,
3758,
3542,
3818,
3434,
3862,
4184,
4129,
4514,
4343,
4830,
4542,
4531,
5042,
4658,
5305,
4925,
5587,
5547,
5514,
5154,
4531,
4004,
3106,
2531,
2600,
1792,
1599,
1615,
1233,
1243,
941,
1166,
1028,
671,
772,
895,
483,
900,
493,
803,
564,
226,
498,
438,
251,
296,
488,
569,
635,
196,
276,
661,
40,
266,
377,
560,
191,
388,
20,
322,
241,
246,
141,
438,
257,
388,
166,
171,
1,
51,
191,
378,
287,
363,
530,
136,
267,
358,
267,
176,
469,
86,
176,
182,
373,
232,
368,
16,
71,
116,
217,
292,
242,
11,
66,
162,
81,
192,
106,
505,
288,
434,
267,
257,
343,
1,
1,
1,
464,
157,
1,
227,
328,
177,
237,
647,
253,
147,
222,
212,
243,
268,
399,
434,
1,
273,
233,
293,
233,
576,
208,
152,
354,
551,
1,
152],
}]
});
});
