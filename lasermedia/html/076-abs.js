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
      text: "Tm:LiYF\u2084"
    },
	credits: {
		enabled: true,
		href: "http://omlc.org/spectra/PhotochemCAD/html/TMYLF06.TXT.html",
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
	pointInterval: 1,
	pointStart: 1550,
	data: [10,
157,
239,
228,
129,
157,
204,
193,
305,
230,
372,
414,
407,
372,
281,
386,
321,
332,
297,
310,
286,
246,
317,
236,
267,
211,
433,
284,
355,
285,
320,
234,
358,
402,
433,
544,
223,
536,
394,
540,
292,
360,
305,
312,
374,
316,
421,
286,
410,
67,
432,
359,
652,
374,
530,
486,
532,
599,
406,
726,
517,
868,
379,
651,
637,
693,
649,
589,
575,
671,
627,
544,
1007,
772,
942,
705,
992,
1014,
1069,
947,
1028,
1277,
1411,
1372,
1130,
1411,
1377,
1354,
1261,
1297,
1447,
1598,
1470,
1423,
1580,
1630,
1724,
1751,
1852,
2039,
2129,
2060,
2097,
2410,
2688,
2508,
2733,
2719,
2966,
3089,
3115,
3170,
3563,
3657,
3719,
3990,
4099,
4533,
4612,
5101,
5438,
6188,
6694,
7557,
8292,
9813,
10771,
12288,
13629,
15243,
16545,
17494,
18184,
18511,
18719,
18013,
17589,
16651,
16493,
15464,
15055,
14024,
13325,
12312,
11342,
10812,
10010,
9553,
8653,
8264,
7754,
7648,
6909,
6737,
6369,
5986,
5834,
5285,
5201,
4735,
4710,
4281,
4041,
3785,
3802,
3514,
3394,
3301,
3081,
3057,
2814,
2894,
2791,
2749,
2730,
2559,
2697,
2629,
2864,
2688,
2744,
2754,
2782,
2933,
3023,
2952,
3042,
3146,
3163,
3303,
3544,
3671,
3999,
4169,
4315,
4410,
4445,
4235,
3703,
3449,
2915,
2776,
2451,
2498,
2319,
2288,
2179,
2277,
2140,
1891,
2083,
1947,
1995,
1580,
1763,
1455,
1685,
1371,
1439,
1323,
1294,
1258,
884,
1244,
913,
1211,
649,
945,
905,
878,
799,
732,
970,
770,
943,
632,
1042,
822,
1060,
708,
874,
908,
885,
903,
668,
941,
738,
807,
653,
794,
682,
841,
662,
671,
772,
720,
808,
799,
712,
877,
889,
763,
873,
1111,
1184,
1012,
907,
1143,
1164,
1227,
1220,
1454,
1470,
1452,
1229,
1500,
1506,
1742,
1669,
1575,
1564,
1990,
1790,
1834,
1527,
1507,
1516,
1244,
1215,
886,
1289,
884,
823,
738,
848,
873,
723,
730,
674,
931,
598,
705,
541,
781,
652,
494,
710,
468,
726,
439,
637,
488,
599,
495,
364,
628,
530,
613,
499,
579,
380,
785,
680,
870,
769,
996,
1169,
1052,
1188,
1043,
1190,
992,
1073,
918,
918,
952,
918,
793,
860,
773,
784,
739,
512,
590,
465,
434,
306,
355,
209,
326,
386,
315,
218,
304,
466,
331,
366,
309,
285,
327,
360,
336,
440,
278,
369,
186,
263,
279,
252,
425,
4,
272,
1,
290,
90,
147,
191,
110,
57,
1,
313,
1,
333,
1,
293,
101,
271,
220,
119,
362,
282,
353,
38,
469,
327,
371,
219,
168,
433,
274,
367,
179,
301,
232,
378,
184,
19,
279,
270,
270,
1,
85,
17,
156,
1,
1,
1,
106,
1,
1,
126,
249,
134,
1,
124,
88,
298,
91,
210,
179,
469,
206,
318,
78,
349,
294,
168,
193,
160,
292,
30,
114,
32,
312,
13,
116,
1,
55,
171,
1,
130,
1,
88,
77,
44,
40,
14,
245,
9,
199,
1,
402,
102,
265,
128,
181,
259,
217,
352,
14,
363,
186,
186,
160,
230,
153,
103,
184,
83,
207,
266,
160,
31,
169,
156,
134,
108,
1,
97,
174,
139,
51,
137,
159,
84,
258,
367,
164,
186,
245,
256,
287,
265,
330,
208,
246,
215,
310,
173,
323,
6,
129,
222,
114,
193,
1,
196,
13,
167,
1,
132,
1,
123,
51,
1,
141,
1,
234,
1,
142,
67,
153,
96,
1,
142,
76,
226,
41,
15,
78,
224,
129,
81,
195,
204,
268,
64,
156,
165,
258,
44,
1,
73,
211,
1,
1,
1,
177,
20,
1,
1,
18,
153,
1,
23,
1,
25,
56,
1,
1,
1,
1,
1,
35,
1,
264,
68,
61,
101,
22,
286,
1,
189,
1,
317,
172,
106,
115,
44,
174,
1,
97,
1,
133,
115,
52,
89,
1,
171,
89,
166,
28,
230,
83,
43,
65,
1,
61,
2,
1,
1,
2,
134,
198,
112,
218,
64,
293,
154,
247,
130,
216,
205,
192,
170,
1,
347,
104,
292,
98,
206,
212,
149,
171,
70,
434,
81,
220,
8,
151,
237,
167,
165,
1,
231,
143,
196,
1,
104,
95,
1],
}]
});
});