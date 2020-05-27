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
      text: "Nd:GaScGa Garnet"
    },
	credits: {
		enabled: true,
		href: "http://omlc.org/spectra/PhotochemCAD/html/NDGSGG.TXT.html",
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
	pointStart: 325,
	data: [6311,
6405,
6304,
6437,
6468,
6608,
6824,
6944,
7077,
7069,
7094,
7043,
7075,
7076,
7219,
7288,
7420,
7459,
7515,
7516,
7331,
7253,
7362,
7347,
7448,
7643,
7974,
8319,
8380,
8122,
8007,
8019,
8024,
8145,
8120,
8062,
8287,
8262,
8522,
8645,
8456,
8465,
8506,
8654,
8957,
8844,
8269,
7875,
7813,
7678,
7493,
7341,
7182,
7146,
6913,
6622,
6425,
6303,
6226,
6095,
6022,
5830,
5799,
5757,
5625,
5519,
5517,
5434,
5436,
5335,
5337,
5346,
5284,
5369,
5238,
5313,
5237,
5404,
5257,
5397,
5507,
5543,
5550,
5470,
5419,
5516,
5449,
5481,
5438,
5447,
5520,
5513,
5571,
5633,
5672,
5688,
5976,
6313,
6628,
6665,
6263,
5991,
5771,
5604,
5597,
5485,
5467,
5615,
5708,
5721,
5738,
5807,
5906,
6150,
6610,
7055,
6681,
6390,
6306,
6217,
6313,
6344,
6541,
7021,
7192,
7179,
7101,
7200,
7237,
7379,
7606,
7989,
8519,
9698,
11668,
13252,
12513,
11773,
12353,
14842,
19804,
25268,
25591,
23928,
21969,
21400,
21281,
20440,
19302,
19029,
20440,
20718,
17726,
14468,
12804,
12186,
12021,
11603,
10851,
10310,
9811,
9374,
8771,
8505,
8368,
8237,
7943,
7624,
7940,
8639,
8388,
7780,
7554,
7742,
8544,
10725,
16799,
20881,
12847,
10699,
12091,
14567,
13461,
8680,
7805,
8516,
10402,
13964,
15341,
10422,
8327,
9211,
13505,
14858,
9526,
7072,
6422,
6659,
7472,
6790,
5876,
5244,
4959,
4809,
4701,
4618,
4580,
4453,
4482,
4403,
4367,
4392,
4372,
4333,
4413,
4345,
4270,
4263,
4396,
4462,
4346,
4256,
4266,
4263,
4284,
4305,
4143,
4238,
4168,
4143,
4181,
4341,
4283,
4241,
4240,
4119,
4144,
4205,
4197,
4142,
4165,
4252,
4194,
4213,
4217,
4210,
4128,
4133,
4197,
4171,
4245,
4085,
4226,
4181,
4177,
4100,
4168,
4172,
4173,
4070,
4247,
4239,
4370,
4237,
4408,
4462,
4245,
4243,
4256,
4246,
4146,
3994,
4036,
4082,
4036,
4122,
4074,
4013,
4066,
4029,
4066,
4080,
4132,
4110,
4145,
4076,
4022,
4086,
4135,
4092,
4212,
4129,
4159,
4238,
4363,
4483,
4273,
4253,
4360,
4295,
4217,
4298,
4431,
4412,
4390,
4273,
4382,
4468,
4489,
4408,
4476,
4436,
4456,
4507,
4553,
4578,
4551,
4527,
4583,
4599,
4606,
4657,
4639,
4679,
4735,
4770,
4766,
4857,
4844,
4763,
4876,
4899,
4901,
4953,
5042,
5012,
5010,
5020,
5098,
5146,
5259,
5239,
5305,
5365,
5399,
5437,
5370,
5462,
5484,
5591,
5574,
5635,
5674,
5768,
5806,
5807,
5924,
6021,
6028,
6049,
6124,
6143,
6200,
6261,
6317,
6338,
6479,
6504,
6598,
6612,
6649,
6794,
6860,
6893,
6941,
7046,
7061,
7154,
7273,
7320,
7434,
7524,
7584,
7648,
7733,
7845,
7928,
8009,
8067,
8154,
8339,
8403,
8479,
8570,
8672,
8760,
8895,
8949,
9092,
9127,
9279,
9352,
9507,
9571,
9666,
9749,
9909,
10006,
10156,
10264,
10356,
10547,
10595,
10753,
10834,
11010,
11140,
11293,
11373,
11499,
11706,
11868,
11895,
12125,
12240,
12370,
12507,
12712,
12830,
13055,
13168,
13338,
13544,
13668,
13820,
13934,
14169,
14397,
14493,
14712,
14781,
15088,
15225,
15380,
15514,
15792,
15940,
16128,
16295,
16493,
16728,
16822,
17099,
17308,
17568,
17639,
17894,
18125,
18314,
18531,
18670,
18913,
19121,
19394,
19606,
19766,
19990,
20325,
20538,
20753,
20952,
21161,
21480,
21782,
21927,
22108,
22459,
22661,
23072,
23371,
23409,
23668,
24032,
24321,
24659,
24677,
25012,
25399,
25593,
25789,
25983,
26280,
26644,
26827,
27122,
27294,
27736,
27956,
28216,
28523,
28829,
29001,
29303,
29451,
29796,
30106,
30427,
30632,
30968,
31129,
31519,
31704,
32054,
32383,
32637,
32998,
33344,
33661,
34006,
34327,
34654,
34789,
35239,
35465,
35756,
35996,
36402,
36701,
37020,
37423,
38093,
39654,
42171,
39616,
38995,
39270,
39405,
39774,
40071,
40606,
41529,
44440,
44808,
42913,
42445,
42479,
42891,
43875,
44257,
43779,
43889,
44109,
44445,
44890,
45516,
46821,
47903,
46935,
46694,
46695,
46709,
46866,
47342,
47652,
47771,
48103,
48333,
48612,
48864,
49152,
49444,
49790,
50092,
50416,
50606,
50903,
51170,
51495,
51641,
51918,
52200,
52428,
52872,
53050,
53308,
53530,
53713,
54064,
54190,
54593,
54787,
55180,
55115,
55359,
55742,
55879,
56156,
56438,
56723,
57013,
57234,
57259,
57532,
57911,
58065,
58143,
58429,
58826,
58880,
59097,
59179,
59261,
59761,
59705,
59959,
60188,
60333,
60508,
60832,
61102,
61224,
61468,
61438,
61717,
61905,
61905,
62287,
62384,
62644,
62809,
63042,
63143,
63346,
63380,
63758,
63689,
63828,
64074,
64110,
64323,
64539,
64721,
64758,
65203,
65353,
65658,
65851,
66124,
66204,
66323,
66126,
66048,
66048,
65970,
65971,
66167,
66405,
66246,
66606,
66606,
66688,
66851,
66892,
66933,
66852,
66852,
66771,
66976,
67183,
67859,
68741,
69337,
69430,
68969,
68034,
67520,
67020,
66979,
66735,
66413,
66176,
65864,
65903,
65904,
65904,
65788,
65673,
65635,
65789,
65828,
65984,
65484,
65146,
64961,
64668,
64632,
64380,
64417,
64345,
64132,
63957,
63818,
63576,
63440,
63543,
63305,
63305,
63238,
63171,
63138,
62938,
62872,
62545,
62578,
62709,
62417,
62417,
62321,
62289,
62130,
62162,
62130,
61910,
62131,
62005,
61942,
61755,
61817,
61849,
61601,
61663,
61725,
61819,
62230,
62520,
62488,
61977,
61542,
61328,
61358,
61328,
61666,
61359,
61208,
61027,
61269,
61361,
61422,
60643,
60179,
59671,
59727,
60152,
60411,
60010,
59396,
58854,
58563,
58616,
58616,
58459,
58433,
58200,
58174,
58539,
58382,
57970,
57344,
56905,
56619,
56501,
56383,
56715,
58100,
59265,
59265,
59651,
61008,
59764,
56861,
56316,
56293,
55383,
55052,
54987,
55517,
55971,
55563,
55384,
55496,
55341,
55033,
55520,
56111,
55165,
54710,
54904,
54840,
53892,
53207,
53227,
52757,
52299,
51981,
51999,
52074,
51907,
51945,
51523,
51182,
50988,
50865,
50433,
49927,
49548,
49289,
48986,
48781,
48578,
48302,
48119,
47834,
47656,
47407,
47104,
46847,
46511,
46456,
46195,
45896,
45669,
45471,
45080,
44939,
44660,
44373,
44151,
43847,
43691,
43500,
43171,
42963,
42677,
42396,
42185,
41845,
41640,
41374,
41153,
40738,
40494,
40293,
39946,
39732,
39404,
39149,
38859,
38574,
38311,
38025,
37743,
37474,
37217,
36998,
36723,
36476,
36224,
36016,
35897,
35755,
35637,
35590,
35358,
35090,
34774,
34419,
34019,
33601,
33308,
32918,
32662,
32390,
32142,
31974,
31699,
31528,
31284,
31037,
30794,
30541,
30292,
30099,
29838,
29723,
29439,
29266,
29011,
28683,
28452,
28234,
28003,
27779,
27549,
27422,
27230,
26961,
26784,
26604,
26382,
26121,
25900,
25718,
25516,
25275,
25122,
24975,
24758,
24622,
24492,
24397,
24315,
24289,
24195,
24243,
24346,
24589,
25120,
26050,
27398,
27668,
26571,
24934,
23867,
23244,
22866,
22751,
22779,
22963,
23003,
22669,
22415,
22214,
22268,
22268,
22249,
22323,
22401,
22541,
22778,
23244,
24037,
24405,
23660,
22333,
21017,
20114,
19571,
19514,
19545,
19548,
19227,
18876,
18398,
17798,
17178,
16729,
16455,
16367,
16407,
16544,
17053,
17846,
18101,
17310,
16437,
15840,
15448,
15081,
14604,
14433,
14159,
13865,
13541,
13269,
13045,
12889,
12688,
12594,
12460,
12378,
12389,
12433,
12479,
12385,
12131,
11951,
11778,
11659,
11558,
11449,
11417,
11548,
11784,
12301,
13442,
15891,
21501,
31685,
32588,
22654,
16511,
13483,
11973,
11092,
10716,
10396,
10267,
10388,
10620,
11143,
12282,
14850,
19085,
25584,
28938,
24570,
23615,
21937,
16430,
13812,
13712,
13830,
12038,
10199,
9298,
9085,
9604,
11123,
12906,
12027,
10360,
9696,
9282,
9012,
8976,
9329,
10090,
11153,
11817,
12573,
13953,
13871,
13378,
12711,
10458,
8912,
8274,
8049,
8162,
8665,
9212,
9540,
9665,
9036,
8019,
7235,
6902,
6693,
6513,
6413,
6343,
6330,
6423,
6660,
7091,
7067,
6647,
6295,
6061,
5887,
5743,
5700,
5593,
5591,
5568,
5526,
5479,
5449,
5370,
5378,
5399,
5364,
5308,
5317,
5291,
5280,
5331,
5249,
5204,
5215,
5193,
5169,
5200,
5171,
5122,
5198,
5163,
5173,
5158,
5209,
5246,
5301,
5377,
5593,
5970,
6474,
6412,
5785,
5406,
5211,
5233,
5171,
5143,
5148,
5159,
5159,
5153,
5190,
5202,
5206,
5237,
5343,
5406,
5390,
5424,
5473,
5549,
5448,
5391,
5319,
5329,
5330,
5337,
5381,
5309,
5423,
5423,
5518,
5694,
5699,
5614,
5551,
5537,
5524,
5508,
5572,
5558,
5630,
5680,
5671,
5693,
5726,
5813,
5790,
5797,
5893,
5955,
6004,
5958,
6001,
6004,
6070,
6014,
6083,
6131,
6184,
6257,
6277,
6366,
6345,
6297,
6417,
6465,
6491,
6545,
6595,
6590,
6676,
6584,
6704,
6750,
6762,
6782,
6890,
6941,
7067,
7162,
7286,
7307,
7390,
7418,
7540,
7559,
7671,
7741,
7845,
7925,
7914,
7970,
8023,
8171,
8266,
8342,
8533,
8826,
9294,
10039,
10970,
12667,
15724,
21675,
33042,
45574,
39825,
25690,
17671,
13788,
11801,
10852,
10347,
10131,
10004,
10194,
10395,
10829,
11534,
12666,
15140,
19603,
23212,
21080,
17138,
14610,
13055,
12221,
11809,
11714,
11827,
12043,
12438,
12543,
12028,
11422,
11070,
10886,
10917,
10922,
10983,
11147,
11214,
11430,
11809,
12242,
12710,
13242,
13753,
14725,
16668,
20168,
24333,
23359,
18875,
15994,
14446,
13688,
13414,
13309,
13689,
14295,
14693,
14614,
14450,
14400,
14694,
15417,
16668,
18383,
19166,
18661,
18610,
18433,
17475,
16792,
16396,
16405,
16874,
17716,
18863,
19504,
19309,
19178,
19541,
20698,
23611,
28899,
33671,
31114,
25416,
21949,
20791,
21085,
22417,
25380,
30877,
41699,
62176,
82670,
67177,
44842,
32735,
27717,
26564,
28028,
29473,
27043,
23718,
21652,
20501,
19932,
19864,
20241,
21582,
24821,
31167,
39991,
36331,
26413,
21912,
19815,
18980,
18675,
18813,
19155,
19958,
21338,
22794,
23065,
22353,
22066,
22092,
21247,
20519,
20439,
20345,
19623,
19011,
18716,
18703,
18857,
19171,
19614,
19792,
19694,
19405,
19136,
18765,
18493,
18162,
18051,
17959,
18070,
18187,
18237,
18290,
18334,
18554,
18802,
18950,
19437,
19771,
19731,
19451,
19184,
19077,
18980,
19042,
19026,
19159,
19208,
19303,
19439,
19492,
19572,
19689,
19709,
19719,
19800,
19868,
19970,
20138,
20283,
20373,
20537,
20827,
20813,
20721,
20721,
20756,
20831,
20899,
20957,
21108,
21213,
21304,
21389,
21503,
21566,
21685,
21726,
21797,
21948,
22054,
22107,
22295,
22314,
22411,
22465,
22633,
22708,
22830,
22874,
22906,
23142,
23198,
23247,
23357,
23475,
23660,
23806,
24057,
24253,
24185,
24189,
24151,
24164,
24245,
24305,
24537,
24524,
24694,
25011,
25190,
25199,
25163,
25177,
25141,
25231,
25267,
25398,
25548,
25553,
25672,
25764,
25852,
25899,
25936,
26096,
26176,
26237,
26361,
26471,
26635,
26693,
26874,
26771,
26869,
26972,
27081,
27195,
27235,
27351,
27537,
27356,
27690,
27696,
27783,
27716,
27778,
27928,
27856,
27923,
28121,
28110,
28263,
28310,
28279,
28438,
28598,
28765,
29197,
29510,
29387,
29376,
29612,
29886,
29817,
29590,
29483,
29568,
29500,
29433,
29444,
29506,
29517,
29535,
29625,
29614,
29750,
29830,
29802,
29928,
29951,
30131,
30160,
30108,
29981,
30201,
30289,
30436,
30448,
30448,
30431,
30413,
30401,
30544,
30490,
30586,
30526,
30639,
30675,
30808,
30983,
31050,
31002,
30862,
30802,
30802,
30827,
30785,
30857,
30869,
30924,
30821,
30979,
30948,
31076,
31218,
31224,
31218,
31274,
31317,
31249,
31323,
31367,
31448,
31435,
31373,
31361,
31473,
31467,
31393,
31530,
31430,
31530,
31624,
31606,
31505,
31612,
31675,
31688,
31606,
31682,
31682,
31669,
31626,
31569,
31557,
31632,
31613,
31538,
31645,
31570,
31595,
31551,
31564,
31608,
31558,
31558,
31502,
31477,
31483,
31440,
31446,
31440,
31372,
31341,
31422,
31341,
31323,
31292,
31305,
31329,
31323,
31219,
31206,
31293,
31213,
31213,
31152,
31232,
31170,
31146,
31073,
31097,
31006,
31067,
31079,
31116,
30988,
31049,
30970,
30958,
30879,
30849,
30916,
30958,
30862,
30765,
30808,
30497,
30551,
30521,
30456,
30433,
30362,
30339,
30222,
30339,
30187,
30100,
30089,
29996,
30002,
29858,
29756,
29830,
29563,
29507,
29558,
29446,
29401,
29463,
29351,
29223,
29020,
29004,
29020,
28851,
28900,
28754,
28700,
28609,
28625,
28486,
28433,
28354,
28306,
28344,
28181,
28186,
28097,
28092,
28045,
27962,
27875,
27833,
27746,
27752,
27644,
27604,
27523,
27584,
27553,
27478,
27407,
27317,
27262,
27237,
27252,
27089,
27133,
27000,
26892,
26795,
26732,
26732,
26654,
26684,
26510,
26396,
26220,
26230,
26135,
26042,
25911,
25935,
25796,
25810,
25667,
25626,
25512,
25331,
25390,
25304,
25241,
25295,
25085,
25184,
25368,
25513,
25682,
25719,
25614,
25180,
24958,
24616,
24461,
24290,
24183,
24145,
24196,
24137,
24095,
24036,
23969,
24099,
24155,
24372,
24587,
24924,
25115,
25429,
25754,
26258,
27134,
27414,
27070,
26033,
25227,
24780,
24335,
24067,
24017,
23767,
23705,
23709,
23763,
23750,
23913,
24026,
23980,
24119,
24323,
24534,
24426,
24285,
23968,
23926,
23952,
24006,
24133,
24316,
24897,
25189,
24277,
23699,
23546,
23690,
24150,
24735,
25790,
26625,
25892,
23991,
22764,
21993,
21601,
21239,
20979,
20819,
20614,
20569,
20415,
20232,
20461,
20461,
20805,
21002,
20823,
20336,
20075,
19737,
19751,
19644,
19571,
19484,
19415,
19163,
18989,
18902,
18688,
18726,
18701,
18449,
18197,
17943,
17821,
17743,
17539,
17626,
17638,
17488,
17521,
17314,
17126,
16897,
16765,
16779,
16716,
16822,
16811,
16932,
17153,
17071,
16846,
16583,
16400,
16212,
16066,
15947,
15871,
15681,
15640,
15516,
15322,
15140,
15014,
14845,
14747,
14550,
14461,
14418,
14247,
14137,
14052,
13924,
13828,
13686,
13577,
13437,
13320,
13239,
13118,
13048,
12961,
12889,
12854,
12648,
12685,
12378,
12373,
12296,
12195,
12130,
12005,
11903,
11861,
11748,
11674,
11493,
11433,
11329,
11349,
11169,
11133,
11059,
10981,
10957,
10846,
10769,
10663,
10607,
10576,
10506,
10408,
10261,
10287,
10283,
10212,
10095,
10075,
9941,
9929,
9919,
9784,
9709,
9668,
9593,
9580,
9533,
9404,
9391,
9325,
9306,
9287,
9166,
9129,
9072,
9019,
8954,
8924,
8951,
8845,
8838,
8717,
8727,
8632,
8596,
8615,
8443,
8408,
8345,
8247,
8241,
8223,
8120,
8051,
7959,
7970,
8017,
7814,
7821,
7727,
7725,
7663,
7697,
7542,
7535,
7554,
7479,
7482,
7423,
7325,
7220,
7280,
7171,
7165,
7192,
7075,
7110,
7021,
6830,
6922,
6851,
6783,
6795,
6834,
6736,
6622,
6637,
6525,
6512,
6507,
6414,
6467,
6462,
6447,
6328,
6348,
6192,
6345,
6218,
6215,
6250,
6089,
6064,
6116,
6069,
6043,
6023,
6044,
6072,
6151,
5970,
5965,
6004,
6058,
5980,
6138,
6102,
6078,
6137,
6138,
6179,
6255,
6103,
6216,
6295,
6346,
6381,
6329,
6321,
6233,
6164,
6351,
6279,
6248,
6244,
6233,
6302,
6320,
6248,
6480,
6536,
6622,
6738,
6783,
6996,
6989,
7237,
7435,
7697,
8099,
8652,
9425,
10645,
12704,
15696,
20152,
26154,
31711,
33927,
31158,
26159,
21957,
19864,
19760,
22101,
27202,
34401,
40813,
45363,
47298,
37954,
28728,
22105,
16397,
12815,
10663,
9400,
8519,
8096,
7801,
7606,
7661,
7945,
8320,
8996,
9603,
9723,
9651,
9017,
8803,
8674,
8826,
9471,
10773,
12740,
16234,
22195,
28194,
30726,
31476,
28752,
24327,
20874,
19510,
19133,
18120,
16027,
14006,
12663,
12390,
12774,
13940,
15660,
17267,
19128,
21935,
25930,
30674,
34906,
39367,
42950,
39012,
27967,
19262,
14435,
12182,
11332,
10975,
10773,
10723,
11076,
11802,
13202,
15153,
16853,
18086,
19562,
21399,
23272,
24915,
25039,
23871,
21937,
19736,
17444,
15749,
14929,
15130,
16336,
17755,
18272,
18170,
17516,
15877,
13657,
11696,
10152,
9194,
8700,
8549,
8783,
9064,
9747,
10776,
12493,
15174,
18845,
22554,
23740,
21704,
18021,
15140,
13021,
12105,
12303,
12942,
13420,
13494,
12627,
11156,
9715,
8492,
7678,
7024,
6518,
6157,
5970,
5892,
5849,
5959,
6149,
6412,
6490,
6502,
6260,
5874,
5413,
5064,
4810,
4477,
4426,
4167,
4142,
4066,
4114,
4006,
3813,
3741,
3641,
3595,
3482,
3439,
3550,
3363,
3435,
3459,
3365,
3247,
3245,
3337,
3281,
3354,
3243,
3279,
3396,
3296,
3315,
3290,
3298,
3235,
3332,
3331,
3370,
3242,
3233,
3279,
3272,
3188,
3318,
3426,
3405,
3340,
3285,
3337,
3221,
3173,
3333,
3238,
3217,
3307,
3304,
3380,
3418,
3403,
3334,
3345,
3244,
3354,
3358,
3328,
3368,
3307,
3381,
3488,
3408,
3380,
3535,
3456,
3500,
3600,
3587,
3835,
3736,
3919,
4055,
4029,
4345,
4605,
4981,
5583,
6106,
6560,
7053,
7083,
6917,
6897,
6686,
6472,
5951,
5435,
4900,
4636,
4351,
4302,
4168,
4103,
4131,
4090,
3865,
3831,
3911,
3969,
4035,
4132,
4104,
4130,
4173,
4211,
4374,
4480,
4557,
4727,
4937,
5035,
5227,
5410,
5712,
5931,
5853,
5889,
5713,
5462,
5511,
5378,
5376,
5314,
5322,
5269,
5386,
5421,
5602,
5912,
6152,
6247,
6647,
7062,
7445,
7949,
8316,
8958,
9760,
10662,
11802,
13482,
16322,
20098,
22692,
22198,
19848,
16924,
14316,
12481,
11419,
11547,
12605,
15014,
19184,
26503,
37161,
45857,
43371,
33739,
24808,
18869,
15227,
12820,
11537,
10910,
10887,
11542,
13040,
14295,
13986,
11877,
9981,
8971,
8463,
8875,
9519,
10717,
11581,
12086,
11811,
10852,
10088,
9403,
8942,
8904,
9121,
9730,
11027,
12729,
13825,
14521,
14671,
15153,
16649,
18865,
22362,
27634,
34719,
43374,
52449,
57287,
55024,
46155,
36167,
28974,
23753,
20516,
18303,
17633,
18244,
19910,
23260,
29415,
39219,
54306,
69468,
72683,
56903,
40576,
29999,
24834,
23016,
22981,
23269,
23005,
22654,
21973,
20947,
19975,
19225,
19382,
20912,
23415,
26163,
26802,
24390,
20619,
17232,
14567,
12790,
11207,
10418,
9852,
9635,
9908,
10324,
11423,
13142,
15458,
17825,
18343,
17701,
17647,
18605,
19858,
20422,
19217,
16685,
13847,
11180,
9383,
8220,
7539,
7081,
7064,
7410,
7661,
8438,
9702,
11024,
12654,
13409,
12222,
10578,
8743,
7271,
6098,
5752,
5184,
5056,
5065,
5131,
5402,
5634,
5630,
5557,
5298,
4953,
4558,
4389,
3994,
4048,
3888,
3790,
3879,
3855,
4067,
4073,
4268,
4478,
4302,
4301,
3862,
3655,
3607,
3566,
3469,
3168,
3283,
3095,
3159,
3114,
3128,
3004,
3187,
3016,
2844,
3062,
2982,
3015,
2968,
2970,
3171,
3137,
3069,
2987,
3005,
2794,
2794,
2841],
}]
});
});