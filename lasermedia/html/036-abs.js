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
		href: "http://omlc.org/spectra/PhotochemCAD/html/HOYLF09.TXT.html",
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
	pointStart: 865,
	data: [71,
75,
72,
62,
68,
72,
69,
67,
74,
79,
76,
67,
87,
79,
75,
76,
78,
75,
75,
85,
70,
64,
80,
89,
81,
73,
72,
82,
82,
69,
76,
67,
77,
77,
90,
81,
75,
74,
94,
82,
81,
71,
80,
82,
71,
76,
90,
88,
92,
88,
79,
86,
85,
81,
83,
85,
76,
89,
85,
85,
81,
96,
105,
87,
88,
83,
90,
97,
85,
93,
94,
92,
93,
99,
111,
90,
117,
104,
116,
99,
117,
127,
111,
118,
115,
120,
137,
128,
136,
149,
150,
168,
189,
177,
225,
239,
299,
334,
382,
416,
410,
397,
345,
329,
318,
339,
342,
411,
482,
592,
763,
1046,
1283,
1407,
1327,
1137,
904,
796,
763,
740,
751,
763,
846,
988,
1205,
1458,
1645,
1763,
1811,
1922,
2083,
2354,
2600,
2600,
2233,
1761,
1312,
975,
746,
570,
529,
425,
383,
360,
318,
285,
292,
289,
312,
347,
349,
357,
351,
384,
481,
495,
562,
511,
461,
401,
309,
261,
242,
213,
183,
167,
147,
153,
163,
142,
141,
156,
136,
133,
126,
143,
150,
138,
141,
141,
143,
122,
147,
147,
127,
127,
134,
133,
146,
129,
127,
136,
142,
139,
142,
119,
115,
115,
108,
147,
145,
126,
144,
186,
158,
177,
178,
215,
241,
237,
242,
248,
251,
272,
263,
255,
275,
274,
347,
370,
371,
415,
467,
518,
529,
540,
522,
481,
455,
400,
371,
373,
366,
394,
386,
403,
454,
551,
672,
813,
1015,
1149,
1325,
1347,
1423,
1409,
1341,
1270,
1168,
1082,
970,
920,
816,
814,
804,
801,
818,
832,
760,
685,
666,
588,
541,
452,
396,
364,
323,
257,
218,
182,
208,
199,
194,
149,
115,
138,
124,
124,
113,
120,
79,
113,
75,
101,
77,
106,
104,
75,
99,
57,
69,
44,
80,
72,
69,
33,
87,
84,
99,
72,
101,
87,
76,
62,
67,
47,
17,
44,
70,
107,
52,
77,
42,
52,
22,
70,
49,
46,
92,
18,
15,
83,
43,
73,
58,
49,
63,
17,
23,
50,
63,
17,
52,
58,
26,
28,
66,
51,
65,
79,
25,
46,
23,
29,
77,
64,
37,
64,
56,
59,
1],
}]
});
});