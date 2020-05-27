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
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF05.TXT.html",
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
	data: [1,
330,
214,
108,
245,
134,
124,
216,
226,
242,
247,
344,
279,
284,
229,
117,
194,
27,
179,
287,
292,
343,
232,
217,
309,
406,
193,
285,
316,
184,
199,
129,
358,
287,
105,
456,
278,
288,
147,
254,
264,
47,
377,
326,
174,
241,
256,
237,
278,
375,
278,
137,
452,
310,
382,
581,
617,
434,
358,
348,
491,
384,
426,
548,
523,
534,
371,
611,
561,
530,
500,
495,
583,
471,
717,
492,
861,
533,
872,
473,
914,
678,
433,
838,
685,
583,
629,
773,
830,
918,
892,
785,
422,
565,
632,
720,
515,
720,
680,
721,
865,
768,
728,
523,
759,
708,
1033,
1105,
838,
864,
638,
695,
896,
809,
717,
1021,
908,
985,
1151,
1131,
1302,
1168,
1360,
1267,
1543,
1175,
1440,
1534,
1498,
1509,
1436,
1661,
1919,
1898,
2390,
2237,
2786,
2905,
3631,
4871,
5761,
7303,
8635,
9532,
9514,
8660,
8309,
8473,
8832,
10386,
12415,
12654,
10432,
7699,
6163,
5584,
6135,
6285,
6072,
5946,
6530,
7133,
7894,
7530,
7442,
7513,
7460,
7556,
8034,
9561,
12291,
14635,
17990,
18515,
15314,
10911,
7929,
7028,
5764,
4999,
5236,
5492,
7295,
9313,
9418,
8239,
7060,
6750,
6914,
8156,
10923,
15047,
17701,
17311,
14279,
10537,
7793,
6197,
4917,
4426,
4012,
3825,
3842,
4217,
5178,
5167,
4479,
4285,
4357,
5248,
7282,
8485,
9293,
10474,
10684,
9048,
6239,
5059,
3793,
3276,
3282,
3207,
3473,
3604,
4203,
4781,
5572,
6231,
6673,
6031,
6083,
6181,
6187,
6616,
6868,
6640,
6062,
5457,
4910,
4525,
4347,
4121,
3546,
3231,
2396,
2322,
1989,
1842,
1790,
1817,
1801,
2329,
2431,
2993,
3187,
3009,
3074,
2550,
2374,
2084,
2221,
1811,
2360,
2297,
1991,
2282,
1834,
1593,
1443,
993,
936,
1060,
1076,
794,
1056,
918,
790,
862,
914,
1033,
1411,
1354,
1646,
1573,
1736,
1195,
1226,
1774,
1879,
1774,
1911,
2012,
1797,
1939,
1625,
1256,
1500,
1345,
1705,
1601,
1403,
1523,
1134,
1114,
857,
857,
438,
485,
618,
603,
430,
359,
405,
319,
518,
330,
315,
631,
250,
321,
760,
414,
302,
308,
389,
675,
283,
304,
590,
82,
321,
499,
114,
185,
317,
110,
470,
191,
197,
182,
502,
376,
340,
204,
331,
98,
1,
236,
267,
216,
156,
237,
441,
558,
56,
92,
42,
42,
301,
185,
109,
282,
343,
303,
237,
451,
21,
294,
508,
209,
32,
301,
530,
256,
140,
54,
25,
349,
288,
1,
172,
67,
153,
27,
93,
306,
362,
125,
241,
460,
343,
578,
258,
676,
523,
285,
458,
504,
235,
505,
281,
1,
90,
80,
308,
532,
238,
16,
1,
244,
550,
326,
347,
556,
287,
176,
1,
268,
212,
56,
609,
391,
569,
103,
1,
311,
332,
29,
226,
40,
293,
364,
294,
46,
1,
274,
687,
220,
109,
357,
1,
348,
85,
111,
298,
354,
319,
1,
2,
305,
356,
240,
311,
215,
1,
1,
1,
192,
126,
142,
132,
97,
199,
103,
331,
119,
150,
170,
302,
363,
35,
31,
56,
1,
67,
153,
331,
174,
159,
428,
1,
75,
1,
75,
121,
132,
61,
218,
1,
169,
1,
83,
1,
104,
69,
14,
364,
278,
162,
273,
67],
}]
});
});
