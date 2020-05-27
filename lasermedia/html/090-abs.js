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
		href: "http://omlc.org/spectra/PhotochemCAD/html/TMYSAG6.TXT.html",
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
	pointStart: 1500,
	data: [374,
451,
485,
451,
519,
473,
466,
478,
430,
410,
418,
444,
382,
468,
345,
454,
483,
324,
514,
471,
517,
531,
553,
505,
410,
401,
447,
401,
346,
362,
377,
360,
420,
334,
401,
464,
454,
522,
495,
440,
544,
524,
507,
498,
413,
495,
442,
418,
476,
435,
346,
428,
493,
498,
546,
365,
522,
459,
411,
435,
454,
416,
490,
449,
418,
440,
454,
493,
457,
401,
500,
425,
392,
452,
430,
416,
454,
428,
481,
527,
459,
568,
537,
527,
627,
466,
508,
529,
447,
447,
491,
416,
440,
372,
363,
513,
447,
483,
520,
433,
471,
515,
525,
510,
433,
435,
438,
416,
442,
409,
426,
469,
435,
421,
496,
471,
452,
527,
542,
522,
505,
452,
525,
462,
459,
491,
351,
467,
493,
493,
481,
440,
349,
503,
552,
496,
493,
438,
431,
576,
486,
542,
525,
455,
554,
559,
474,
486,
414,
496,
554,
431,
491,
407,
445,
576,
532,
578,
583,
549,
477,
544,
552,
571,
574,
503,
562,
566,
421,
455,
530,
503,
557,
457,
465,
535,
528,
564,
569,
537,
581,
484,
482,
559,
436,
501,
477,
477,
525,
516,
494,
465,
484,
489,
506,
496,
542,
487,
547,
545,
537,
537,
635,
586,
569,
572,
596,
603,
559,
557,
572,
545,
533,
564,
523,
460,
504,
487,
574,
518,
542,
645,
652,
654,
637,
596,
562,
506,
550,
528,
511,
530,
496,
477,
446,
518,
492,
611,
601,
655,
616,
628,
543,
601,
650,
574,
582,
540,
560,
574,
565,
635,
533,
603,
560,
552,
584,
557,
526,
523,
613,
521,
565,
591,
548,
640,
587,
647,
577,
569,
709,
599,
577,
502,
589,
528,
562,
516,
506,
487,
480,
557,
621,
645,
662,
574,
626,
677,
687,
609,
623,
672,
577,
606,
570,
633,
526,
599,
631,
618,
643,
582,
582,
633,
645,
675,
626,
567,
633,
550,
565,
584,
504,
521,
587,
558,
638,
553,
584,
648,
592,
638,
638,
594,
580,
670,
638,
706,
655,
636,
680,
704,
636,
611,
616,
589,
614,
597,
531,
504,
517,
585,
568,
711,
606,
568,
611,
685,
607,
636,
672,
570,
597,
592,
585,
590,
524,
575,
570,
590,
609,
631,
582,
697,
665,
707,
746,
685,
717,
648,
714,
741,
590,
551,
660,
660,
663,
648,
631,
633,
631,
587,
675,
629,
616,
582,
597,
653,
685,
570,
673,
690,
673,
744,
638,
636,
668,
587,
670,
600,
629,
612,
534,
626,
643,
578,
636,
705,
709,
731,
751,
687,
731,
749,
744,
729,
614,
651,
709,
663,
661,
690,
636,
719,
724,
666,
783,
651,
805,
776,
763,
756,
734,
697,
734,
710,
656,
697,
585,
634,
727,
673,
663,
768,
675,
710,
693,
729,
855,
719,
766,
803,
803,
874,
855,
722,
872,
860,
833,
897,
793,
830,
810,
712,
828,
801,
724,
820,
830,
882,
934,
840,
877,
889,
838,
917,
835,
779,
951,
899,
894,
909,
823,
862,
875,
815,
867,
1003,
917,
1016,
919,
1021,
1048,
969,
946,
961,
996,
984,
979,
944,
946,
954,
971,
1009,
942,
971,
1143,
1014,
1036,
1111,
1053,
1083,
1093,
1106,
1183,
1066,
1088,
1086,
1073,
1204,
1178,
1184,
1178,
1201,
1251,
1221,
1244,
1309,
1408,
1418,
1421,
1421,
1477,
1569,
1577,
1592,
1703,
1682,
1728,
1765,
1734,
1840,
1892,
1788,
1936,
2059,
2004,
2215,
2252,
2340,
2557,
2498,
2622,
2763,
2722,
2837,
2900,
2985,
3079,
3082,
3193,
3345,
3381,
3571,
3714,
3774,
3968,
4154,
4260,
4465,
4450,
4663,
4817,
4917,
5154,
5219,
5191,
5403,
5547,
5649,
5808,
5914,
6105,
6265,
6320,
6499,
6565,
6642,
6864,
6877,
6986,
7232,
7277,
7257,
7451,
7392,
7605,
7640,
7725,
7760,
7860,
7860,
7881,
7789,
7878,
7924,
7863,
8017,
7999,
7960,
8035,
7924,
7964,
7964,
7846,
7828,
7760,
7714,
7803,
7542,
7472,
7514,
7375,
7215,
7219,
7150,
7171,
7085,
7027,
6911,
6935,
6589,
6679,
6592,
6525,
6419,
6278,
6111,
6115,
5889,
5869,
5741,
5589,
5538,
5482,
5397,
5353,
5288,
5102,
5108,
4948,
4903,
4793,
4588,
4588,
4409,
4290,
4211,
4032,
3985,
3927,
3838,
3777,
3714,
3517,
3515,
3489,
3407,
3328,
3149,
3061,
2989,
2925,
2846,
2794,
2718,
2652,
2547,
2571,
2563,
2429,
2247,
2375,
2229,
2282,
2197,
2092,
2139,
2023,
2008,
1971,
1900,
1885,
1942,
1841,
1856,
1820,
1714,
1719,
1688,
1675,
1655,
1624,
1503,
1567,
1552,
1590,
1598,
1529,
1629,
1655,
1560,
1583,
1567,
1455,
1567,
1430,
1369,
1354,
1290,
1364,
1371,
1351,
1473,
1422,
1437,
1427,
1437,
1425,
1453,
1356,
1481,
1501,
1374,
1460,
1354,
1397,
1387,
1384,
1387,
1478,
1417,
1539,
1532,
1440,
1483,
1427,
1397,
1511,
1392,
1437,
1387,
1336,
1387,
1369,
1371,
1397,
1301,
1328,
1445,
1366,
1407,
1364,
1354,
1415,
1435,
1377,
1455,
1432,
1476,
1466,
1488,
1443,
1458,
1372,
1372,
1359,
1260,
1387,
1265,
1233,
1306,
1263,
1349,
1311,
1205,
1273,
1334,
1311,
1334,
1253,
1319,
1276,
1286,
1195,
1200,
1165,
1100,
1195,
1142,
1208,
1102,
1193,
1245,
1233,
1258,
1296,
1228,
1288,
1223,
1298,
1213,
1225,
1153,
1168,
1168,
1105,
1120,
1083,
1208,
1165,
1208,
1246,
1223,
1225,
1276,
1205,
1276,
1238,
1198,
1258,
1178,
1203,
1193,
1178,
1304,
1316,
1266,
1309,
1306,
1344,
1336,
1390,
1390,
1339,
1362,
1407,
1392,
1502,
1563,
1499,
1469,
1261,
1540,
1456,
1568,
1607,
1555,
1617,
1702,
1668,
1707,
1784,
1792,
1797,
1860,
1818,
1951,
1881,
1933,
1925,
1938,
1943,
1933,
2019,
2037,
1948,
2082,
2103,
2177,
2111,
2185,
2265,
2315,
2339,
2352,
2350,
2403,
2395,
2457,
2457,
2516,
2559,
2556,
2583,
2697,
2697,
2724,
2820,
2891,
2943,
2962,
3009,
2993,
3020,
3020,
3145,
3123,
3112,
3131,
3179,
3276,
3254,
3366,
3423,
3468,
3507,
3587,
3661,
3701,
3673,
3744,
3857,
3808,
3848,
3981,
3793,
3903,
4007,
3961,
3999,
4013,
4095,
4077,
4104,
4121,
4019,
4074,
4124,
4063,
4104,
4086,
4060,
4151,
4089,
4148,
4118,
4110,
4039,
4042,
4025,
4074,
4101,
3952,
4028,
4080,
3999,
4107,
4031,
4063,
4069,
4066,
3981,
4005,
3996,
3984,
3935,
3920,
3871,
3747,
3819,
3839,
3793,
3877,
3776,
3722,
3799,
3793,
3839,
3819,
3739,
3759,
3773,
3676,
3633,
3659,
3587,
3602,
3519,
3567,
3616,
3573,
3613,
3630,
3647,
3659,
3599,
3491,
3587,
3573,
3585,
3559,
3381,
3375,
3381,
3347,
3341,
3182,
3316,
3302,
3274,
3327,
3339,
3218,
3274,
3260,
3271,
3257,
3135,
3135,
3013,
3121,
3057,
3076,
3057,
3024,
3027,
3002,
2985,
2971,
2977,
3029,
2922,
2900,
2936,
2894,
2769,
2870,
2831,
2749,
2692,
2660,
2649,
2652,
2622,
2698,
2581,
2592,
2579,
2514,
2533,
2482,
2452,
2447,
2404,
2441,
2372,
2420,
2436,
2396,
2319,
2353,
2212,
2220,
2191,
2144,
2186,
2146,
2086,
2094,
2141,
2078,
2120,
2054,
2028,
2033,
2031,
1991,
2046,
1840,
1929,
1952,
1773,
1812,
1804,
1793,
1749,
1760,
1724,
1786,
1700,
1768,
1757,
1729,
1703,
1600,
1585,
1623,
1562,
1582,
1569,
1411,
1465,
1477,
1549,
1508,
1523,
1521,
1577,
1580,
1534,
1500,
1411,
1409,
1427,
1343,
1361,
1429,
1366,
1442,
1391,
1424,
1424,
1399,
1414,
1444,
1490,
1422,
1401,
1330,
1409,
1437,
1348,
1232,
1194,
1257,
1358,
1315,
1320,
1323,
1338,
1376,
1328,
1439,
1414,
1366,
1424,
1452,
1488,
1534,
1496,
1452,
1409,
1547,
1567,
1654,
1524,
1580,
1593,
1665,
1654,
1690,
1667,
1765,
1822,
1734,
1708,
1721,
1711,
1890,
1843,
1906,
1955,
1966,
1958,
1953,
1984,
2042,
2055,
2123,
2189,
2194,
2165,
2282,
2216,
2253,
2317,
2405,
2375,
2410,
2391,
2383,
2359,
2421,
2386,
2389,
2426,
2346,
2383,
2405,
2306,
2402,
2466,
2383,
2407,
2453,
2375,
2381,
2354,
2319,
2263,
2277,
2256,
2237,
2203,
2264,
2184,
2176,
2264,
2229,
2200,
2234,
2226,
2142,
2094,
2037,
2021,
1979,
1919,
1872,
1916,
1929,
1830,
1776,
1799,
1869,
1833,
1797,
1802,
1804,
1680,
1704,
1732,
1626,
1557,
1580,
1560,
1511,
1537,
1491,
1422,
1509,
1573,
1473,
1537,
1606,
1488,
1532,
1465,
1509,
1499,
1369,
1361,
1394,
1328,
1280,
1250,
1341,
1336,
1235,
1336,
1316,
1336,
1303,
1313,
1346,
1331,
1238,
1278,
1303,
1223,
1258,
1195,
1205,
1265,
1238,
1223,
1303,
1253,
1321,
1286,
1336,
1308,
1271,
1205,
1220,
1233,
1195,
1296,
1175,
1167,
1137,
1213,
1273,
1180,
1165,
1238,
1175,
1238,
1203,
1150,
1185,
1235,
1180,
1173,
1230,
1117,
1178,
1223,
1198,
1198,
1165,
1215,
1190,
1193,
1256,
1105,
1163,
1225,
1183,
1256,
1175,
1120,
1240,
1266,
1183,
1190,
1165,
1160,
1173,
1213,
1118,
1120,
1160,
1253,
1233,
1178,
1230,
1140,
1138,
1158,
1195,
1130,
1160,
1073,
1103,
1075,
1143,
1090,
1135,
1170,
1243,
1193,
1233,
1130,
1198,
1173,
1188,
1210,
1163,
1100,
1128,
1128,
1140,
1050,
1033,
1068,
1108,
1148,
1160,
1213,
1153,
1205,
1241,
1208,
1188,
1103,
1073,
1090,
1070,
1011,
986,
934,
1033,
973,
1043,
1103,
1078,
1128,
1158,
1153,
1135,
1211,
1103,
1103,
1088,
1026,
1068,
929,
1013,
1003,
1021,
971,
1080,
1090,
1068,
1153,
1046,
1061,
1115,
1075,
1048,
1031,
998,
936,
941,
926,
1001,
959,
1011,
1061,
1011,
1038,
1128,
1036,
1106,
1046,
1026,
1033,
1083,
1063,
1003,
1061,
1053,
1041,
993,
1076,
1041,
1018,
1061,
1071,
1153,
1043,
1023,
1048,
998,
1011,
996,
946,
994,
1021,
1076,
964,
1003,
919,
951,
964,
996,
1036,
907,
944,
949,
951,
996,
1048,
966,
986,
959,
959,
922,
954,
951,
969,
1006,
944,
816,
818,
855,
848,
850,
848,
823,
840,
860,
855,
895,
897,
845,
848,
917,
870,
806,
791,
771,
791,
698,
735,
808,
703,
727,
833,
762,
845,
791,
752,
818,
828,
863,
813,
786,
781,
759,
652,
693,
649,
656,
691,
627,
700,
659,
698,
700,
730,
652,
745,
620,
630,
701,
713,
681,
644,
613,
581,
583,
664,
669,
659,
703,
745,
693,
747,
728,
710,
728,
654,
564,
630,
513,
503,
557,
674,
640,
620,
615,
676,
681,
598,
581,
571,
567,
569,
567,
537,
494,
479,
506,
545,
508,
562,
511,
542,
516,
615,
640,
579,
528,
593,
627,
547,
489,
538,
506,
545,
516,
460,
470,
472,
579,
581,
674,
720,
521,
496,
477,
429,
345,
280,
388,
424,
361,
487,
545,
429,
458,
528,
584,
523,
463,
559,
618,
581,
530,
538,
431,
424,
477,
518,
465,
467,
552,
535,
482,
506,
460,
285,
371,
443,
547,
540,
526,
521,
504,
468,
501,
359,
369,
470,
422,
468,
511,
487,
506,
572,
552,
511,
463,
439,
407,
400,
398,
422,
516,
506,
480,
531,
603,
463,
417,
487,
504,
560,
535,
562,
577,
441,
318,
383,
429,
369,
415,
519,
477,
482,
432,
432,
460,
482,
569,
511,
376,
448,
446,
453,
403,
415,
451,
521,
548,
494,
504,
388,
395,
350,
364,
439,
439,
482,
555,
555,
521,
395,
355,
468,
398,
463,
427,
420,
475,
519,
582,
514,
434,
429,
436,
490,
511,
468,
417,
453,
519,
434,
538,
495,
478,
492,
340,
449,
335,
276,
331,
362,
362,
451,
307,
367,
499,
475,
478,
504,
528,
434,
432,
417,
374,
340,
192,
319,
376,
357,
388,
391,
444,
483,
473,
398,
468,
485,
429,
386,
362,
338,
321,
304,
314,
345,
454,
352,
413,
526,
502,
519,
497,
444,
386,
502,
401,
302,
300,
372,
377,
317,
408,
410,
288,
307,
396,
408,
432,
386,
434,
408,
254,
398,
480,
459,
418,
410,
473,
483,
459,
432,
490,
422,
507,
398,
418,
475,
543,
509,
490,
381,
492,
492,
377,
384,
372,
362,
353,
425,
434,
420,
302,
396,
439,
425,
394,
432,
485,
413,
372,
331,
362,
430,
415,
432,
418,
490,
447,
449,
505,
478,
478,
454,
360,
437,
418,
423,
312,
267,
379,
444,
427,
439,
493,
401,
420,
401,
314,
298,
298,
288,
362,
379,
350,
452,
399,
444,
389,
437,
379,
350,
466,
524,
527,
396,
493,
370,
367,
358,
298,
391,
418,
341,
415,
384,
418,
310,
303,
339,
411,
401,
418,
485,
452,
401,
389,
408,
346,
303,
295,
245,
228,
341,
358,
358,
324,
355,
461,
449,
343,
339,
461,
394,
358,
315,
384,
396,
339,
478,
464,
315,
367,
336,
284,
375,
317,
245,
267,
377,
375,
351,
293,
336,
372,
324,
389,
353,
269,
348,
308,
250,
284,
221,
221,
262,
308,
387,
312,
310,
363,
281,
372,
365,
210,
310,
327,
363,
416,
305,
308,
418,
336,
257,
324,
274,
377,
281,
284,
293,
327,
284,
322,
310,
293,
370,
348,
365,
363,
368,
332,
339,
226,
210,
289,
289,
363,
186,
243,
293,
214,
205,
105,
229,
329,
438,
327,
353,
387,
481,
457,
445,
450,
356,
253,
234,
238,
217,
186,
162,
289,
373,
327,
471,
520,
404,
389,
389,
361,
377,
329,
267,
286,
217,
227,
272,
246,
315,
181,
250,
368,
349,
368,
440,
421,
406,
428,
382,
382,
346,
387,
390,
286,
296,
346,
327,
368,
329,
265,
378,
370,
361,
370,
315,
382,
431,
404,
385,
253,
234,
327,
255,
246,
267,
236,
272,
378,
236,
404,
330,
255,
320,
339,
320,
318,
306,
337,
373,
322,
433,
435,
354,
414,
402,
414,
421,
354,
356,
325,
320,
346,
270,
127,
263,
310,
320,
291,
263,
308,
414,
366,
426,
368,
397,
438,
380,
318,
378,
213,
217,
279,
236,
256,
248,
224,
301,
356,
371,
421,
327,
474,
484,
392,
462,
313,
359,
344,
246,
287,
363,
306,
217,
225,
289,
282,
327,
220,
397,
354,
407,
412,
392,
383,
416,
296,
363,
251,
253,
301,
270,
325,
368,
289,
335,
349,
392,
407,
359,
292,
455,
392,
320,
402,
289,
299,
397,
311,
368,
351,
364,
416,
354,
284,
400,
280,
318,
313,
306,
349,
323,
246,
373,
443,
332,
361,
318,
308,
380,
244,
376,
330,
210,
261,
342,
328,
335,
352,
320,
332,
256,
311,
280,
316,
388,
349,
349,
426,
364,
371,
400,
366,
328,
426,
325,
323,
213,
335,
301,
244,
301,
359,
313,
364,
361,
316,
421,
373,
373,
388,
335,
330,
273,
232,
258,
299,
172,
234,
256,
318,
289,
333,
273,
354,
364,
383,
393,
316,
359,
318,
321,
388,
313,
268,
316,
294,
292,
292,
234,
313,
354,
342,
301,
340,
361,
422,
352,
357,
282,
237,
325,
227,
249,
227,
232,
194,
220,
213,
294,
261,
270,
316,
325,
328,
337,
333,
282,
364,
290,
314,
318,
263,
273,
333,
306,
302,
259,
316,
347,
350,
323,
256,
285,
306,
292,
201,
270,
213,
223,
309,
177,
251,
249,
232,
225,
271,
282,
292,
170,
244,
342,
251,
244,
268,
251,
374,
347,
271,
259,
273,
263,
340,
311,
280,
261,
247,
268,
273,
235,
271,
213,
263,
273,
232,
220,
256,
225,
237,
247,
220,
218,
206,
228,
235,
204,
209,
209,
190,
159,
199,
182,
213,
144,
185,
240,
237,
264,
355,
319,
369,
331,
290,
297,
221,
204,
249,
235,
173,
206,
59,
187,
180,
187,
168,
159,
273,
271,
261,
211,
261,
237,
223,
202,
149,
204,
128,
106,
140,
144,
159,
192,
156,
152,
259,
233,
204,
245,
271,
312,
304,
261,
276,
185,
175,
259,
204,
190,
140,
57,
149,
133,
154,
154,
161,
240,
230,
261,
190,
195,
164,
230,
211,
197,
133,
137,
173,
171,
71,
95,
128,
135,
192,
161,
226,
199,
223,
204,
257,
149,
245,
245,
235,
228,
178,
216,
149,
149,
178,
173,
135,
214,
26,
126,
176,
171,
197,
92,
159,
154,
185,
185,
183,
138,
190,
209,
123,
133,
149,
142,
166,
204,
109,
126,
126,
223,
195,
145,
223,
131,
133,
140,
190,
154,
178,
157,
219,
230,
138,
195,
219,
200,
100,
142,
107,
180,
145,
180,
188,
204,
209,
269,
166,
211,
219,
178,
178,
169,
238,
178,
69,
140,
123,
57,
112,
102,
105,
126,
112,
140,
214,
204,
252,
188,
233,
226,
216,
185,
238,
88,
214,
164,
159,
112,
119,
86,
131,
109,
126,
183,
114,
250,
264,
185,
197,
259,
150,
190,
131,
131,
152,
57,
86,
60,
57,
74,
128,
114,
138,
140,
193,
164,
185,
188,
202,
209,
174,
176,
169,
138,
76,
109,
119,
100,
124,
169,
178,
207,
150,
109,
245,
119,
202,
159,
100,
171,
190,
81,
131,
79,
5,
93,
67,
86,
48,
46,
62,
72,
128,
157,
117,
136,
202,
72,
143,
219,
159,
248,
171,
136,
155,
186,
143,
212,
140,
174,
129,
131,
212,
219,
159,
136,
65,
107,
145,
148,
124,
107,
55,
145,
126,
112,
169,
79,
126,
93,
93,
140,
81,
74,
162,
74,
150,
209,
160,
133,
188,
131,
229,
155,
195,
264,
183,
145,
164,
107,
95,
164,
58,
148,
114,
79,
119,
200,
110,
186,
100,
86,
212,
119,
200,
138,
34,
148,
143,
29,
129,
124,
103,
6,
124,
164,
169,
91,
167,
210,
160,
210,
145,
186,
200,
198,
207,
167,
65,
77,
131,
91,
122,
129,
53,
162,
207,
172,
229,
126,
217,
136,
105,
134,
89,
84,
67,
79,
86,
39,
41,
188,
98,
134,
188,
207,
210,
308,
265,
236,
246,
181,
188,
150,
115,
131,
86,
122,
134,
93,
150,
179,
138,
162,
165,
210,
200,
134,
108,
146,
112,
153,
117,
34,
93,
98,
91,
160,
86,
112,
196,
167,
179,
193,
196,
258,
262,
238,
260,
179,
198,
224,
219,
105,
117,
30,
91,
117,
82,
108,
110,
110,
153,
184,
243,
274,
150,
184,
236,
110,
148,
186,
96,
162,
134,
139,
148,
56,
143,
191,
174,
217,
122,
174,
215,
200,
136,
169,
131,
200,
200,
255,
196,
150,
141,
189,
153,
189,
205,
110,
136,
208,
184,
200,
177,
129,
236,
184,
215,
148,
141,
153,
267,
234,
227,
162,
117,
155,
241,
172,
193,
117,
122,
70,
139,
177,
158,
153,
113,
101,
177,
191,
153,
227,
325,
272,
277,
267,
177,
243,
189,
198,
260,
108,
146,
167,
182,
143,
125,
98,
220,
186,
213,
224,
275,
263,
296,
260,
232,
239,
198,
244,
155,
61,
136,
65,
39,
155,
113,
122,
146,
167,
139,
208,
215,
198,
189,
163,
244,
151,
270,
225,
129,
222,
208,
151,
198,
170,
125,
236,
191,
227,
208,
148,
268,
260,
160,
213,
210,
234,
220,
182,
179,
160,
186,
151,
122,
122,
177,
108,
125,
206,
96,
110,
146,
113,
125,
189,
158,
203,
144,
227,
323,
210,
198,
311,
287,
375,
292,
246,
332,
260,
172,
263,
208,
80,
132,
32,
96,
130,
106,
108,
163,
149,
227,
251,
194,
265,
215,
191,
222,
203,
213,
225,
96,
201,
99,
80,
149,
99,
113,
189,
68,
199,
179,
153,
265,
191,
227,
263,
170,
187,
165,
127,
206,
125,
144,
270,
160,
189,
175,
73,
175,
194,
137,
123,
151,
123,
175,
146,
163,
218,
168,
187,
161,
187,
189,
194,
142,
249,
151,
194,
187,
85,
111,
170,
85,
104,
96,
59,
120,
125,
89,
189,
68,
130,
222,
222,
189,
184,
142,
206,
189,
175,
225,
92,
120,
153,
87,
101,
130,
54,
118,
182,
94,
196,
146,
182,
237,
237,
137,
146,
175,
144,
180,
87,
151,
35,
68,
106,
75,
33,
118,
49,
156,
137,
118,
170,
118,
111,
223,
184,
201,
111,
40,
139,
139,
64,
142,
135,
97,
158,
118,
158,
173,
137,
185,
187,
156,
146,
73,
101,
149,
175,
128,
68,
73,
158,
137,
64,
132,
101,
118,
106,
59,
101,
83,
2,
59,
154,
54,
137,
99,
109,
206,
182,
149,
239,
130,
206,
213,
106,
201,
137,
14,
92,
92,
47,
57,
1,
68,
118,
68,
142,
73,
75,
109,
87,
92,
123,
28,
23,
80,
1,
52,
113,
38,
78,
121,
87,
140,
21,
116,
149,
180,
199,
182,
130,
232,
185,
125,
216,
64,
76,
121,
113,
97,
38,
1,
33,
26,
16,
71,
28,
9,
211,
64,
163,
57,
76,
109,
35,
59,
97,
31,
9,
31,
1,
61,
92,
1,
137,
118,
104,
190,
123,
149,
213,
130,
95,
64,
7,
59,
31,
14,
1,
1,
1,
52,
19,
40,
128,
69,
61,
202,
78,
52,
116,
133,
111,
38,
47,
54,
1,
97,
71,
1,
1,
12,
73,
121,
66,
137,
69,
1,
102,
104,
64,
26,
17,
28,
164,
28,
40,
90,
1,
97,
102,
62,
102,
76,
24,
83,
57,
38,
71,
1,
14,
1,
1,
55,
1,
92,
149,
90,
14,
111,
19,
57,
1,
1,
5,
1,
1,
36,
1,
1,
3,
24,
36,
130,
118,
133,
95,
85,
81,
69,
107,
95,
7,
52,
88,
1,
43,
1,
47,
57,
52,
55,
111,
14,
133,
102,
52,
138,
121,
22,
69,
22,
69,
1,
1,
17,
33,
1,
40,
1,
1,
93,
19,
5,
55,
22,
64,
107,
123,
123,
57,
38,
140,
69,
43,
43,
1,
7,
50,
15,
130,
1,
1,
69,
43,
62,
24,
26,
43,
57,
31,
112,
1,
1,
10,
1,
41,
31,
1,
1,
45,
15,
38,
1,
1,
55,
100,
36,
67,
29,
67,
48,
45,
71,
59,
76,
102,
123,
67,
43,
29,
104,
67,
64,
55,
1,
36,
57,
29,
1,
15,
1,
1,
15,
19,
31,
36,
3,
36,
38,
1,
55,
1,
1,
31,
1,
1,
1,
1,
1,
1,
3,
79,
102,
124,
138,
140,
150,
88,
114,
121,
67,
1,
1,
1,
1,
1,
1,
1,
1,
22,
100,
90,
62,
64,
27,
1,
53,
71,
12,
1,
3,
1,
1,
1,
1,
1,
1,
1,
1,
69,
105,
93,
98,
64,
112,
81,
69,
88,
38,
12,
15,
1,
3,
55,
83,
38,
48,
29,
15,
64,
1,
81,
1,
17,
98,
1,
5,
67,
62,
1],
}]
});
});