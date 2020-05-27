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
      text: "Tm:Y\u2083Sc\u2082Al\u2083O\u2081\u2082"
    },
	credits: {
		enabled: true,
		href: "http://omlc.org/spectra/PhotochemCAD/html/TMYSAG5.TXT.html",
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
	pointStart: 1050,
	data: [1,
1,
1,
1,
82,
51,
1,
1,
66,
1,
7,
1,
10,
31,
22,
23,
74,
144,
20,
1,
62,
22,
1,
15,
1,
1,
12,
95,
78,
55,
5,
55,
73,
124,
1,
5,
25,
38,
29,
36,
73,
15,
81,
86,
52,
84,
12,
24,
34,
77,
5,
93,
76,
67,
90,
133,
1,
92,
86,
82,
76,
15,
68,
75,
66,
81,
66,
22,
64,
85,
76,
1,
133,
75,
25,
57,
153,
44,
54,
71,
27,
137,
44,
86,
25,
60,
213,
66,
64,
93,
19,
61,
76,
35,
28,
1,
102,
125,
92,
112,
111,
7,
25,
21,
36,
79,
18,
63,
27,
88,
3,
26,
36,
30,
69,
52,
1,
1,
11,
47,
41,
67,
74,
51,
4,
33,
1,
1,
1,
10,
52,
53,
1,
1,
77,
47,
29,
61,
1,
1,
1,
1,
90,
14,
32,
1,
1,
1,
33,
1,
1,
29,
18,
14,
1,
1,
56,
20,
9,
34,
1,
19,
1,
1,
1,
1,
11,
1,
89,
86,
47,
1,
1,
1,
1,
1,
1,
1,
1,
1,
36,
1,
18,
25,
1,
1,
1,
1,
1,
1,
1,
62,
50,
55,
86,
1,
1,
1,
1,
1,
1,
1,
50,
1,
46,
96,
1,
69,
7,
1,
133,
1,
1,
4,
1,
1,
162,
93,
28,
1,
1,
65,
27,
1,
1,
1,
20,
59,
1,
124,
77,
33,
112,
20,
51,
101,
9,
126,
117,
86,
144,
146,
83,
122,
110,
88,
33,
40,
71,
142,
160,
159,
112,
195,
169,
98,
194,
145,
154,
159,
279,
245,
182,
141,
201,
246,
146,
233,
203,
137,
187,
164,
230,
211,
183,
187,
264,
230,
278,
293,
227,
245,
257,
278,
269,
224,
366,
292,
264,
314,
308,
301,
290,
243,
279,
265,
272,
308,
291,
341,
400,
247,
471,
396,
414,
367,
461,
349,
369,
411,
435,
382,
354,
404,
422,
370,
436,
394,
315,
333,
334,
425,
405,
366,
446,
432,
517,
524,
482,
419,
431,
414,
543,
431,
408,
521,
541,
532,
479,
373,
401,
479,
502,
539,
478,
447,
465,
461,
425,
557,
520,
565,
567,
498,
554,
545,
576,
619,
620,
624,
612,
535,
588,
525,
605,
593,
619,
539,
576,
537,
631,
597,
418,
473,
646,
617,
559,
550,
644,
667,
614,
714,
721,
540,
722,
652,
681,
694,
638,
661,
791,
651,
767,
608,
566,
747,
774,
712,
695,
669,
723,
773,
636,
798,
751,
813,
842,
764,
809,
778,
697,
770,
736,
740,
756,
752,
702,
796,
683,
807,
817,
669,
763,
732,
736,
806,
780,
779,
857,
780,
819,
826,
730,
778,
823,
672,
774,
675,
720,
771,
849,
851,
718,
701,
751,
775,
638,
672,
636,
691,
772,
676,
797,
758,
713,
815,
831,
848,
771,
572,
706,
757,
701,
779,
759,
747,
860,
837,
686,
701,
687,
710,
690,
778,
785,
754,
761,
891,
773,
837,
808,
731,
872,
778,
785,
770,
747,
803,
887,
877,
934,
801,
836,
870,
839,
827,
864,
824,
796,
825,
900,
858,
917,
905,
1019,
933,
923,
889,
864,
824,
976,
890,
1029,
956,
928,
1009,
1002,
998,
915,
878,
1008,
1007,
943,
1043,
968,
1055,
1120,
1124,
1136,
1105,
1057,
1183,
1104,
1095,
1094,
1062,
1179,
1278,
1185,
1298,
1255,
1262,
1272,
1229,
1225,
1349,
1198,
1363,
1401,
1403,
1508,
1420,
1458,
1566,
1484,
1592,
1478,
1494,
1560,
1627,
1693,
1732,
1748,
1639,
1736,
1727,
1762,
1855,
1748,
1873,
1857,
1916,
1943,
1896,
2041,
2135,
2056,
2118,
2189,
2110,
2239,
2168,
2170,
2302,
2248,
2270,
2368,
2201,
2366,
2347,
2328,
2514,
2422,
2412,
2534,
2476,
2584,
2601,
2588,
2705,
2603,
2604,
2740,
2693,
2773,
2732,
2791,
2750,
2923,
2807,
2902,
2849,
2938,
2937,
2971,
2988,
2956,
3006,
3141,
3079,
3053,
3019,
3087,
3085,
3081,
3082,
3005,
3040,
2981,
3116,
3133,
3122,
3099,
3025,
2997,
3119,
3021,
3032,
2964,
2923,
2889,
2890,
2889,
2896,
2814,
2720,
2760,
2685,
2689,
2546,
2633,
2526,
2483,
2479,
2507,
2418,
2402,
2310,
2230,
2142,
2127,
2048,
2127,
2031,
1992,
1974,
1901,
1903,
1811,
1742,
1749,
1563,
1601,
1588,
1528,
1524,
1482,
1411,
1435,
1384,
1391,
1398,
1245,
1247,
1224,
1217,
1208,
1119,
1099,
1095,
1064,
1019,
1018,
998,
965,
947,
881,
910,
858,
902,
993,
828,
875,
809,
926,
879,
833,
807,
846,
819,
919,
782,
861,
889,
800,
839,
808,
834,
744,
685,
740,
829,
740,
875,
911,
897,
971,
908,
955,
954,
891,
1000,
1083,
1117,
1238,
1314,
1337,
1571,
1647,
1638,
1858,
1924,
2136,
2316,
2401,
2813,
3005,
3202,
3524,
3695,
3947,
4058,
4184,
4275,
4433,
4428,
4491,
4486,
4462,
4570,
4472,
4612,
4660,
4746,
4856,
4940,
5151,
5086,
4955,
5126,
5067,
4939,
4786,
4608,
4301,
4191,
4062,
3760,
3518,
3188,
3046,
3017,
2906,
2857,
2676,
2590,
2609,
2476,
2345,
2361,
2262,
2238,
2236,
2109,
2159,
2093,
2049,
2050,
2058,
2008,
1990,
1932,
1984,
1944,
1895,
1933,
1912,
1821,
1901,
1883,
1778,
1793,
1803,
1757,
1751,
1658,
1754,
1636,
1693,
1792,
1646,
1645,
1591,
1557,
1569,
1607,
1416,
1508,
1457,
1450,
1422,
1287,
1297,
1279,
1221,
1239,
1241,
1150,
1055,
1089,
1026,
985,
1018,
1001,
955,
977,
896,
1037,
820,
872,
818,
880,
721,
735,
811,
730,
771,
720,
711,
697,
701,
614,
586,
635,
616,
609,
533,
568,
617,
501,
492,
572,
485,
554,
532,
570,
569,
539,
520,
521,
512,
537,
492,
421,
436,
445,
426,
474,
406,
461,
528,
509,
430,
434,
386,
478,
359,
440,
457,
451,
473,
423,
492,
550,
502,
447,
456,
445,
444,
461,
403,
485,
458,
470,
474,
553,
461,
496,
408,
481,
380,
397,
434,
446,
504,
527,
477,
519,
555,
554,
508,
458,
442,
402,
414,
472,
461,
377,
474,
452,
408,
427,
429,
374,
375,
356,
365,
344,
356,
416,
461,
412,
441,
356,
342,
297,
324,
267,
312,
319,
279,
329,
400,
350,
283,
348,
340,
267,
378,
285,
234,
240,
280,
279,
380,
371,
337,
466,
381,
303,
274,
321,
354,
325,
283,
338,
316,
348,
327,
385,
353,
293,
254,
307,
313,
304,
240,
264,
314,
362,
310,
334,
358,
345,
323,
315,
255,
325,
233,
257,
256,
324,
320,
190,
282,
276,
179,
292,
276,
163,
226,
207,
269,
268,
244,
304,
252,
322,
185,
206,
226,
285,
158,
112,
179,
120,
217,
188,
192,
221,
198,
104,
191,
134,
98,
110,
141,
173,
185,
174,
145,
109,
181,
132,
166,
122,
114,
65,
72,
146,
145,
61,
53,
84,
41,
65,
114,
53,
94,
76,
1,
84,
160,
67,
91,
65,
91,
40,
1,
28,
47,
109,
93,
27,
14,
120,
54,
58,
74,
73,
132,
91,
21,
99,
29,
1,
101,
38,
17,
66,
20,
44,
48,
10,
56,
20,
52,
51,
32,
11,
33,
9,
1,
42,
1,
38,
14,
28,
62,
11,
3,
2,
1,
1,
14,
11,
1,
1,
25,
7,
28,
1,
1,
1,
24,
1,
1,
1,
1,
1,
60,
1,
41,
1,
1,
1,
1,
1,
15,
1,
1,
1,
1,
1,
1,
1,
40,
1,
35,
1,
1,
1,
1,
1,
12,
11,
1,
16,
1,
42,
1,
1,
1,
1,
1,
1,
1,
1,
16,
12,
56,
52,
1,
1,
1,
41,
8,
1,
30,
5,
16,
1,
39,
26,
17,
1,
1,
1,
1,
1,
1,
38,
2,
1,
17,
2,
3,
32,
18,
40,
1,
1,
1,
1,
25,
46,
57,
12,
21,
27,
34,
25,
1,
1,
1,
1,
1,
37,
26,
27,
41,
1,
1,
1,
1,
1,
1,
1,
61,
32,
1,
35,
1,
83,
5,
1,
1,
1,
1,
1,
1,
55,
27,
14,
67,
39,
80,
74,
1,
1,
1,
1,
1,
31,
6,
24,
28,
57,
44,
1,
17,
16,
32,
1,
1,
1,
31,
10,
56,
57,
54,
55,
64,
63,
1,
1,
21,
1,
1,
89,
7,
43,
20,
73,
67,
22,
1,
13,
29,
1,
69,
1,
84,
51,
82,
103,
36,
84,
44,
14,
47,
115,
35,
71,
87,
66,
97,
77,
76,
23,
49,
44,
40,
54,
19,
23,
78,
43,
5,
92,
150,
151,
106,
42,
1,
81,
71,
60,
88,
166,
64,
107,
124,
150,
109,
69,
27,
136,
27,
77,
74,
95,
60,
81,
158,
150,
152,
45,
152,
176,
192,
103,
119,
189,
134,
130,
142,
31,
88,
92,
123,
117,
124,
130,
127,
165,
107,
126,
81,
173,
94,
154,
200,
199,
63,
184,
171,
121,
128,
78,
135,
147,
109,
238,
217,
192,
178,
133,
115,
149,
55,
69,
187,
115,
185,
150,
134,
239,
157,
215,
233,
220,
182,
154,
190,
223,
93,
129,
245,
136,
275,
166,
212,
201,
202,
214,
132,
129,
162,
117,
128,
230,
224,
189,
345,
218,
174,
268,
247,
112,
101,
181,
236,
191,
171,
265,
181,
207,
277,
141,
267,
262,
131,
162,
149,
184,
213,
168,
257,
232,
204,
337,
187,
181,
207,
206,
166,
243,
137,
219,
277,
203,
297,
184,
224,
196,
234,
268,
193,
166,
265,
247,
221,
267,
212,
314,
271,
185,
223,
209,
279,
181,
119,
247,
241,
228,
271,
250,
169,
332,
318],
}]
});
});
