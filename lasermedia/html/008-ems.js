var chart;
$(document).ready(function() {
chart = new Highcharts.Chart({
    chart: {
      renderTo: 'emsPlot', 
      zoomType: 'xy',
      defaultSeriesType: 'line',
      backgroundColor : null
    },
	credits: {
		enabled: true,
		href: "http://omlc.org/spectra/PhotochemCAD/html/CELCAF2.TXT.html",
		text: "omlc.org",
		position: {
			align:'right',
			x : -15,
			verticalAlign: 'bottom',
			y : -60,
		}
	},
    title: {
      text: "Ce:LiCaAlF\u2086"
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
        text: 'Normalized Emission'
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
        return this.x.toFixed(2) + 'nm, ' + this.y.toFixed(4);
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
	pointStart: 260,
    data: [0.0091829256501982,
0.00192139611331335,
0.00812781591414483,
0.00869109542685875,
0.00979599729285507,
0.0108711205646331,
0.0120883689451803,
0.0134023010731896,
0.0155322440297786,
0.0166354055883206,
0.0167475587353766,
0.0174746205162912,
0.0176264139998066,
0.0173305617325728,
0.0174833220535628,
0.0167050178864933,
0.0146553224402978,
0.0142270134390409,
0.0129904283090013,
0.0135086531953979,
0.0128144638886203,
0.0125089432466402,
0.0115537078217152,
0.0121241419317413,
0.0131035482935319,
0.0157807212607561,
0.0182026491346805,
0.02057333462245,
0.0218979019626801,
0.0208247123658513,
0.0189422798027652,
0.0181107995745915,
0.0163907957072416,
0.0137358600019337,
0.0138557478487866,
0.014833220535628,
0.0149511747075317,
0.0154181572077734,
0.0169854007541332,
0.0178971284927004,
0.0182509910084115,
0.0181301363240839,
0.0168316735956686,
0.0152151213381031,
0.0126829739920719,
0.0121908537174901,
0.0128192980759934,
0.0138083728125302,
0.0139147249347385,
0.0146640239775694,
0.0144368171710335,
0.0139862709078604,
0.0138915208353476,
0.0139504979212994,
0.0142840568500435,
0.0137793676882916,
0.0148912307841052,
0.0165648264526733,
0.0177192303973702,
0.0180885623126752,
0.0185265396886783,
0.018359276805569,
0.0168403751329402,
0.0166798801121531,
0.016759160785072,
0.0162738083728125,
0.015077830416707,
0.0147568403751329,
0.0146968964517065,
0.0152760320990042,
0.0161181475393986,
0.0175016919655806,
0.0183979503045538,
0.0145876438170743,
0.0100319056366625,
0.00802330078313836,
0.00663637242579522,
0.00538818524606014,
0.00832930484385575,
0.0121560475684038,
0.0149395726578362,
0.0157333462244997,
0.0174456153920526,
0.0178391182442231,
0.0171903702987528,
0.0156192594024944,
0.0158464662090303,
0.0151000676786232,
0.0157082084501595,
0.0173731025814561,
0.019105675335976,
0.0194508363144155,
0.0206052402591124,
0.0211399013825776,
0.0211128299332882,
0.0195446195494537,
0.0176998936478778,
0.0161017113023301,
0.0158648361210481,
0.0158290631344871,
0.0183660446678913,
0.0196374359470173,
0.0200473750362564,
0.0203171226916755,
0.0209803731992652,
0.0206787199071836,
0.0219017693125786,
0.023513487382771,
0.0247568403751329,
0.0258454993715556,
0.0268046021463792,
0.0272010055109736,
0.0274900899158851,
0.02709562022624,
0.0268742144445519,
0.026193560862419,
0.0261790583002997,
0.0289461471526636,
0.0313458377646718,
0.0328144638886203,
0.0354906700183699,
0.0392448999323214,
0.0393966934158368,
0.0404631151503432,
0.0411147636082375,
0.0414744271487963,
0.0422256598665764,
0.0431422217925167,
0.0425524509329982,
0.0423426472010055,
0.0424499661606884,
0.0429498211350672,
0.0452895678236488,
0.0491540172097071,
0.05478971284927,
0.0570163395533211,
0.0566325050758967,
0.0562554384607947,
0.0563463211834091,
0.0558551677463018,
0.058415353379097,
0.0620758000580102,
0.0638634825485836,
0.0655950884656289,
0.0676119114376873,
0.069936188726675,
0.0721531470559799,
0.0756975732379387,
0.0801189210093783,
0.0825766218698637,
0.084211544039447,
0.0868094363337523,
0.0897331528570047,
0.0898462728415353,
0.084922169583293,
0.0801285893841245,
0.0780566566760128,
0.0784520932031326,
0.0814744271487963,
0.091500531760611,
0.101179541719037,
0.108131103161559,
0.114492893744562,
0.118456927390506,
0.120351928840762,
0.122759354152567,
0.127690225273132,
0.13100647781108,
0.13561829256502,
0.140307454316929,
0.147375036256405,
0.151348738277096,
0.1536304747172,
0.1579619066035,
0.164449386058204,
0.166731122498308,
0.171197911631055,
0.177288987721164,
0.179715749782462,
0.182741951078024,
0.187556801701634,
0.192110606207097,
0.19936188726675,
0.207860388668665,
0.21291694866093,
0.216997002803829,
0.221202745818428,
0.225137774340133,
0.226829739920719,
0.230871120564633,
0.232543749395727,
0.233597602243063,
0.236159721550807,
0.246533887653485,
0.257952238228754,
0.271749008991588,
0.280817944503529,
0.285323407135261,
0.280141158271295,
0.27765638596152,
0.279532050662284,
0.284317896161655,
0.286029198491734,
0.295117470753166,
0.303335589287441,
0.31034516097844,
0.317180701924007,
0.329005124238615,
0.340317122691676,
0.348148506236102,
0.352576621869864,
0.355680170163396,
0.357768539108576,
0.364961809919753,
0.370994875761385,
0.376061104128396,
0.384743304650488,
0.390321956879049,
0.39182055496471,
0.398250024170937,
0.407077250314222,
0.414057816880982,
0.423281446388862,
0.434177704727835,
0.441293628541042,
0.450314222179252,
0.460746398530407,
0.474156434303394,
0.483196364691096,
0.489277772406459,
0.499100841148603,
0.505888040220439,
0.511379677076284,
0.520516291211447,
0.531509233297883,
0.539417963840279,
0.552808662863773,
0.565416223532824,
0.577317992845403,
0.595397853620806,
0.60509523349125,
0.615614425215121,
0.62848303200232,
0.638576815237359,
0.642018756647008,
0.647191337136227,
0.652605626994102,
0.658474330465049,
0.664314028811757,
0.67933868316736,
0.697389538818525,
0.710780237842019,
0.727651551774147,
0.740104418447259,
0.745199651938509,
0.754887363434207,
0.767166199361887,
0.77989944890264,
0.7941409649038,
0.806516484578942,
0.809755390118921,
0.816658609687712,
0.814183505752683,
0.823349125012085,
0.836343420670985,
0.847645750749299,
0.854365271197912,
0.861104128396017,
0.860233974668858,
0.86061104128396,
0.863221502465436,
0.866005994392343,
0.867862322343614,
0.880121821521802,
0.889683844145799,
0.900870153727159,
0.910731895968288,
0.922498308034419,
0.929527216474911,
0.932940152760321,
0.943759064101325,
0.953282413226337,
0.96570627477521,
0.965174514164169,
0.971478294498695,
0.97785942183119,
0.982403557961907,
0.987817847819781,
0.996422701343904,
1,
0.992168616455574,
0.979599729285507,
0.97080150826646,
0.972831866963164,
0.974185439427632,
0.976022430629411,
0.988011215314706,
0.991878565213188,
0.986754326597699,
0.988494634052016,
0.990524992748719,
0.993618872667505,
0.987527796577395,
0.982306874214445,
0.975539011892101,
0.977472686841342,
0.971574978246157,
0.978439524315963,
0.990138257758871,
0.992265300203036,
0.994198975152277,
1,
0.99342550517258,
0.979212994295659,
0.976602533114183,
0.971478294498695,
0.966228367011505,
0.972541815720777,
0.978052789326114,
0.975055593154791,
0.971865029488543,
0.968481098327371,
0.957894227980277,
0.948525572851204,
0.93819008024751,
0.931190176931258,
0.916233201198879,
0.909397660253312,
0.903683650778304,
0.897747268684134,
0.887866189693512,
0.889123078410519,
0.885062361017113,
0.88471429952625,
0.889683844145799,
0.896625737213575,
0.888629991298463,
0.880721260756067,
0.873112249830803,
0.86061104128396,
0.849037996712753,
0.838074059750556,
0.829440201102195,
0.818389248767282,
0.818505269264237,
0.817074349801798,
0.820390602339747,
0.823977569370589,
0.82759354152567,
0.821144735569951,
0.815653098714106,
0.81801218215218,
0.82005220922363,
0.818031518901673,
0.817963840278449,
0.814193174127429,
0.804012375519675,
0.78952915014986,
0.779957459151117,
0.768084694962777,
0.75684037513294,
0.747549067001837,
0.741042250797641,
0.735753649811467,
0.731828289664508,
0.710509523349125,
0.693744561539205,
0.68736343420671,
0.678487866189694,
0.674427148796287,
0.686763994972445,
0.699178188146573,
0.698868800154694,
0.693696219665474,
0.68455960553031,
0.680614908633859,
0.676438170743498,
0.673431306197428,
0.670260079280673,
0.669815334042348,
0.6680266847143,
0.663327854587644,
0.662999129846273,
0.665764285023688,
0.665744948274195,
0.663492216958329,
0.665387218408586,
0.661316832640433,
0.657256115247027,
0.651203712655903,
0.646669244899932,
0.634815817461085,
0.627487189403461,
0.622372619162719,
0.619375422991395,
0.612394856424635,
0.608053756163589,
0.603538625157111,
0.598182345547713,
0.59470173063908,
0.594885429759258,
0.601053852847336,
0.601488929710916,
0.606023397466886,
0.605114570240743,
0.603422604660157,
0.599226530020304,
0.599371555641497,
0.599245866769796,
0.602939185922846,
0.602774823552161,
0.602591124431983,
0.604834187373103,
0.601769312578556,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0.603200232040994,
0.612858938412453,
0.618321570144059,
0.622208256792033,
0.619704147732766,
0.614483225369815,
0.615092332978826,
0.617316059170454,
0.622527313158658,
0.624625350478585,
0.627980276515518,
0.627400174030745,
0.626762061297496,
0.623474813883786,
0.625582519578459,
0.62771923039737,
0.631818621289761,
0.636875181282027,
0.644803248573915,
0.646137484288891,
0.648196848109833,
0.650314222179252,
0.650304553804506,
0.646707918398917,
0.648631924973412,
0.64805182248864,
0.649328047955139,
0.650043507686358,
0.654239582326211,
0.657913564729769,
0.658629024460988,
0.65788455960553,
0.657536498114667,
0.656743691385478,
0.658812723581166,
0.658348641593348,
0.658290631344871,
0.659073769699314,
0.659624867059847,
0.654664990815044,
0.656695349511747,
0.656811370008702,
0.655631828289665,
0.65098134003674,
0.650391569177221,
0.64700763801605,
0.641815720777337,
0.639475974088756,
0.638180411872764,
0.636246736923523,
0.634786812336846,
0.630948467562603,
0.626297979309678,
0.621338103064875,
0.617586773663347,
0.613371362274002,
0.611582712945954,
0.608633858648361,
0.607173934061684,
0.602378420187566,
0.599825969254568,
0.597853620806343,
0.596751426085275,
0.596625737213574,
0.595610557865223,
0.592129942956589,
0.588513970801508,
0.585101034516098,
0.581929807599343,
0.579019626800735,
0.576505849366722,
0.57332495407522,
0.569283573431306,
0.565754616648941,
0.566015662767089,
0.565735279899449,
0.566180025137774,
0.565329208160108,
0.561983950497921,
0.558087595475201,
0.553852847336363,
0.549183022333946,
0.544899932321377,
0.540587837184569,
0.535366914821618,
0.529430532727449,
0.526684714299526,
0.523068742144446,
0.520583969834671,
0.517209707048245,
0.516059170453447,
0.511805085565117,
0.508363144155468,
0.505104901865996,
0.501672628831094,
0.497321860195301,
0.492303973702021,
0.488707338296432,
0.484985014019143,
0.480208836894518,
0.474552837667988,
0.472155080730929,
0.468722807696026,
0.464691095426859,
0.461007444648555,
0.457845886106546,
0.453688484965677,
0.448902639466306,
0.444145799091173,
0.440326791066422,
0.435734313061974,
0.431151503432273,
0.427545199651939,
0.424499661606884,
0.421608817557769,
0.419240065744948,
0.415604756840375,
0.411418350575268,
0.407019240065745,
0.401595281833124,
0.397012472203423,
0.393038770182732,
0.390186599632602,
0.386560959102775,
0.384704631151503,
0.380150826646041,
0.374920235908344,
0.369360920429276,
0.365280866286377,
0.360011602049695,
0.357536498114667,
0.355003383931161,
0.352209223629508,
0.347520061877598,
0.343672048728609,
0.338915208353476,
0.334487092719714,
0.330029971961713,
0.327960939766025,
0.325302136710819,
0.323494150633279,
0.321811853427439,
0.318514937638983,
0.313574398143672,
0.309455670501789,
0.304379773760031,
0.29992265300203,
0.295610557865223,
0.290447645750749,
0.284549937155564,
0.280218505269264,
0.275896741757711,
0.272899545586387,
0.269370588804022,
0.266276708885236,
0.262815430726095,
0.26005027554868,
0.256395629894615,
0.254239582326211,
0.251609784395243,
0.247703760997776,
0.243372329111476,
0.241603016532921,
0.238944213477714,
0.236053369428599,
0.232998163008798,
0.230029971961713,
0.226268974185439,
0.223329788262593,
0.220583969834671,
0.21949144348835,
0.218031518901673,
0.216030165329208,
0.213168326404331,
0.209668374746205,
0.205762351348738,
0.202262399690612,
0.198926810403171,
0.196886783331722,
0.19546553224403,
0.194218311901769,
0.192990428309001,
0.191801218215218,
0.189519481775114,
0.187421444455187,
0.184936672145412,
0.182848303200232,
0.180672918882336,
0.17890360630378,
0.176960262979793,
0.17457217441748,
0.171052886009862,
0.16710818911341,
0.163675916078507,
0.160630378033453,
0.15824228947114,
0.15635695639563,
0.154326597698927,
0.152044861258822,
0.148554577975442,
0.145286667311225,
0.143517354732669,
0.142028425021754,
0.140500821811853,
0.139514647587741,
0.138151406748526,
0.135743981436721,
0.133230204002707,
0.130755100067679,
0.129014792613362,
0.12771923039737,
0.125978922943053,
0.124161268490767,
0.122643333655613,
0.120932031325534,
0.119530116987334,
0.118263559895582,
0.11724838054723,
0.116378226820072,
0.115401720970705,
0.114028811756744,
0.112617229043798,
0.110731895968288,
0.108633858648361,
0.106458474330465,
0.104505462631732,
0.102455767185536,
0.101111863095814,
0.100377066615102,
0.0994972445131973,
0.0980953301749976,
0.0990815043991105,
0.099294208643527,
0.0982886976699217,
0.0968384414579909,
0.0954848689935222,
0.0926926423668181,
0.0909097940636179,
0.0895243159624867,
0.088812723581166,
0.0879019626800735,
0.0858580682587257,
0.0838857198104999,
0.0820525959586194,
0.0803277579038963,
0.0787692158948081,
0.0780160495020787,
0.0780827612878275,
0.0780402204389442,
0.0775113603403268,
0.0770917528763415,
0.0770289084404912,
0.0754529633568597,
0.0736169389925554,
0.0718921009378323,
0.0702484772309775,
0.0683351058687035,
0.0673189596828773,
0.0668761481195011,
0.0669921686164556,
0.0674108092429663,
0.0671062554384608,
0.065908343807406,
0.064894131296529,
0.0641767378903606,
0.0631789616165523,
0.0628966450739631,
0.0628744078120468,
0.0625389152083535,
0.0621492797060814,
0.0616542589190757,
0.0607473653678817,
0.0600473750362564,
0.0597225176447839,
0.0594663057140095,
0.0590389635502272,
0.0585304070385768,
0.0576931257855554,
0.0564352702310742,
0.0546553224402978,
0.0527854587643817,
0.0519066034999517,
0.0513177994779078,
0.050509523349125,
0.0496654742337813,
0.0492487672822199,
0.0482345547713429,
0.0475577685391086,
0.0472860872087402,
0.0474340133423571,
0.047396306680847,
0.0472619162718747,
0.0470424441651358,
0.0468838828192981,
0.0463076476844242,
0.0459035096200329,
0.0453205066228367,
0.0447181668761481,
0.0442424828386348,
0.0435937348931645,
0.042570820845016,
0.0417422411292662,
0.041383544426182,
0.0408343807405975,
0.040397370202069,
0.0407144928937446,
0.0406951561442521,
0.0398685101034516,
0.0390041574011409,
0.0383167359566857,
0.037172000386735,
0.036606400464082,
0.0362341680363531,
0.0358222952721647,
0.0353620806342454,
0.035250894324664,
0.0350004834187373,
0.0348941312965291,
0.0353321086725321,
0.0354858358309968,
0.0353050372232428,
0.0349289374456154,
0.0343053272744852,
0.0330813110316156,
0.0320980373199265,
0.0310722227593542,
0.0306874214444552,
0.030670018369912,
0.0308479164652422,
0.0311050952334912,
0.0318485932514744,
0.0320313255341777,
0.0318447259015759,
0.0314270521125399,
0.0307144928937446,
0.02970704824519,
0.0290254278255825,
0.028483998839795,
0.027877791743208,
0.0280054142898579,
0.0281552740984241,
0.0283370395436527,
0.0288378613555061,
0.0294576041767379,
0.0293473847046311,
0.0291482161848593,
0.0288117567436914,
0.0284269554287924,
0.0280566566760128,
0.0281214347868123,
0.0283602436430436,
0.0284385574784879,
0.0281968481098327,
0.0280179831770279,
0.0274630184665958,
0.0266595765251861,
0.0255303103548294,
0.024168036353089,
0.0230745431692932,
0.0222411292661704,
0.0215585420090883,
0.0213206999903316,
0.0217267717296722,
0.0220651648457894,
0.0222449966160688,
0.0225321473460311,
0.0228260659383158,
0.0226288310934932,
0.0223494150633279,
0.0220545296335686,
0.0213709755390119,
0.0206719520448613,
0.0203741661026781,
0.020501788649328,
0.0209059267137194,
0.0213168326404331,
0.0214367204872861,
0.0214618582616262,
0.0212346514550904,
0.0209600696122982,
0.021179541719037,
0.0214270521125399,
0.021459924586677,
0.0214028811756744,
0.0211224983080344,
0.0204524799381224,
0.019650971671662,
0.0188523639176254,
0.0177230977472687,
0.0169438267427245,
0.0168065358213284,
0.0169699313545393,
0.0169805665667601,
0.0175142608527507,
0.0182094169970028,
0.0184733636275742,
0.0185497437880692,
0.0186096877114957,
0.0182442231460891,
0.0178101131199845,
0.0174552837667988,
0.017352798994489,
0.0175964420380934,
0.0177356666344387,
0.0176244803248574,
0.0172735183215701,
0.0167156530987141,
0.0160311321666828,
0.0154732669438267,
0.0150517258048922,
0.0146108479164652,
0.0146176157787876,
0.0146214831286861,
0.0151716136517451,
0.0154597312191821,
0.0156898385381417,
0.0158048921976216,
0.0159383157691192,
0.0158338973218602,
0.0156975732379387,
0.0156414966644107,
0.0156618002513777,
0.0158396983467079,
0.0155680170163396,
0.0152131876631538,
0.0151339069902349,
0.0146601566276709,
0.0140655515807793,
0.0138122401624287,
0.0141496664410713,
0.014239582326211,
0.0141970414773277,
0.0141332302040027,
0.013938895871604,
0.0134506429469206,
0.0132195687904863,
0.0132031325534178,
0.0132186019530117,
0.0131064488059557,
0.0130484385574785,
0.01261142801895,
0.0123532824132263,
0.0122614328531374,
0.0126123948564246,
0.0124064584743305,
0.0123165425891908,
0.0124103258242289,
0.0123716523252441,
0.0121879532050662,
0.0124238615488736,
0.0125611524702697,
0.0123503819008025,
0.0123204099390892,
0.0127409842405492,
0.0130378033452577,
0.0132495407521996,
0.0129749589094073,
0.0124103258242289,
0.0111718070192401,
0.0101305230590738,
0.00965387218408586,
0.00988301266557092,
0.0102678139804699,
0.010906893551194,
0.0115682103838345,
0.0116958329304844,
0.0113323020400271,
0.0104718166876148,
0.00971961713236005,
0.00887092719713816,
0.00848631924973412,
0.00846814270521125,
0.0086096877114957,
0.0086947694092623,
0.00894566373392633,
0.00876370492120274,
0.00850932998163009,
0.00881049985497438,
0.00861461858261626,
0.00830571400947501,
0.00813110316155854,
0.00783370395436527,
0.00722072899545586,
0.00703983370395437,
0.00717644783911824,
0.00764565406555158,
0.00820274581842792,
0.00856975732379387,
0.00882480904959876,
0.00876979599729285,
0.00849057333462245,
0.00825340810209804,
0.00817673789036063,
0.00832630764768442,
0.00853050372232428,
0.00879580392536015,
0.00905191917238712,
0.00930793773566664,
0.0093966934158368,
0.00955960553031036,
0.00939650004834187,
0.0089903316252538,
0.00864816784298559,
0.00825775887073383,
0.00769970028038287,
0.00685816494247317,
0.00546021463791937,
0.00458213284346901,
0.00422101904669825,
0.00406400464081988,
0.00439350285217055,
0.0059643236971865,
0.00726027264816784,
0.00811892100937832,
0.008782171516968,
0.0093582132843469,
0.00971961713236005,
0.00951832157014406,
0.00846263173160592,
0.0052514744271488,
0.00233181862128976,
0.000627467852653969,
5.04553804505463e-07,
0.00069992265300203,
0.00390457314125495,
0.00672493473847046,
0.00781291694866093,
0.0080160495020787,
0.00747404041380644,
0.00647346031132167,
0.0054573141254955,
0.00514202842502175,
0.00511070289084405,
0.00552953688484966,
0.00585362080634245,
0.00614715266363724,
0.00624983080344194,
0.00617867156530987,
0.00567572271101228,
0.00565628927777241,
0.00611544039446969,
0.00648573914724935,
0.00647326694382674,
0.00623726191627187,
0.00560630378033453,
0.00481417383737794,
0.00398424054916369,
0.00382616262206323,
0.00437000870153727,
0.00505327274485159,
0.00562351348738277,
0.00617741467659287,
0.00618988688001547,
0.00580469883012666,
0.00548496567726965,
0.00538025717876825,
0.005463695252828,
0.00561606883882819,
0.00573257275451997,
0.0057332495407522,
0.00563675916078507,
0.00474688194914435,
0.00232234361403848,
0.000598559412162815,
0,
0,
0.00024079087305424,
0.00237822682007155,
0.00405559315479068,
0.0048239388958716,
0.00500309387991879,
0.00488658996422701,
0.00477047278352509,
0.00445218988688002,
0.00440181765445229,
0.00438209416997003,
0.00451561442521512,
0.00498095330174998,
0.00575848399883979,
0.00610161461858262,
0.00653688484965677,
0.00711147636082375,
0.00738895871603983,
0.00750826646040801,
0.00747771439621,
0.00682152180218505,
0.00599593928260659,
0.00564227013439041,
0.00563762931451223,
0.00578004447452383,
0.00612936285410423,
0.00639775693705888,
0.00662921782848303,
0.00664884462921783,
0.00671130233007831,
0.00703499951658126,
0.00706651841825389,
0.00678178478197815,
0.0062094169970028,
0.00544774243449676,
0.00504495794256985,
0.00511611718070192,
0.00522498308034419,
0.00530465048825292,
0.00553920525959586,
0.00555689838538142,
0.00551890167262883,
0.00529720583969835,
0.00519781494730736,
0.00535482935318573,
0.00551165039156918,
0.00548090495987625,
0.00515459731219182,
0.00506439137580973,
0.00519597795610558,
0.00561742241129266,
0.0061696799767959,
0.00690892390989075,
0.00722952721647491,
0.00760359663540559,
0.00738480131489897,
0.00729314512230494,
0.0075559315479068,
0.00784859325147443,
0.00749966160688388,
0.00721125398820458,
0.00693232137677656,
0.00653930194334332,
0.00622643333655612,
0.00599564923136421,
0.00573624673692352,
0.00565725611524703,
0.00575703374262786,
0.00539766025331142,
0.00193686551290728,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0.00271478294498695,
0.00516175190950401,
0.00620467949337716,
0.00646147152663637,
0.00617519095040124,
0.00622237261916272,
0.00624412646234168,
0.00596055303103548,
0.00567485255728512,
0.00598153340423475,
0.00634187373102581,
0.00641486996035966,
0.00599574591511167,
0.00592507009571691,
0.0056774630184666,
0.00554693995939283,
0.00589113410035773,
0.00644426181958813,
0.00655747848786619,
0.00624054916368558,
0.00535047858454994,
0.00481736440104418,
0.00435192884076187,
0.00437667988011215,
0.00495040123755197,
0.00541042250797641,
0.00515150343227304,
0.00519278739243933,
0.00526075606690515,
0.00504457120758001,
0.0054168036353089,
0.00561123465145509,
0.00538721840858552,
0.00510200135357246,
0.00495861935608624,
0.00442685874504496,
0.00434332398723775,
0.00457294788746012,
0.00469380257178768,
0.00435076863579232,
0.00442047761771246,
0.00449250700957169,
0.00417296722420961,
0.0039253601469593,
0.003970704824519,
0.00366934158367978,
0.00311698733442908,
0.00316880982306874,
0.00353765831963647,
0.00365483902156048,
0.00339640336459441,
0.00341380643913758,
0.00342734216378227,
0.00327825582519578,
0.0033505752682974,
0.003811466692449,
0.00419008024751039,
0.00408556511650392,
0.00329701247220342,
0.00249212027458184,
0.00205994392342647,
0.0016005027554868,
0.00132040993908924,
0.0013513487382771,
0.00150111186309581,
0.00146118147539399,
0.00143314318862999,
0.00133413903122885,
0.00138306100744465,
0.00175268297399207,
0.00217944503528957,
0.00231934641786716,
0.0027813980469883,
0.00331315865802959,
0.00366431402881176,
0.00394518031518902,
0.00451861162138644,
0.00470260079280673,
0.00478371845692739,
0.00453195397853621,
0.00439650004834187,
0.00442840568500435,
0.00445141641690032,
0.00454152566953495,
0.00474978246156821,
0.00495823262109639,
0.00460901092526346,
0.00490399303877018,
0.00470704824518998,
0.00462380353862516,
0.00450536594798414,
0.00481011311998453,
0.00462264333365561,
0.00492139611331335,
0.00496364691095427,
0.00457497824615682,
0.00412810596538722,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0.00445296335685971,
0.00394295658899739,
0.00347036643140288,
0.00299738953881852,
0.00292603693319153,
0.00357816880982307,
0.00387943536691482,
0.00354558638692836,
0.00319781494730736,
0.00284491926907087,
0.00202078700570434,
0.00125050758967418,
0.00106719520448613,
0.00149444068452093,
0.00169679976795901,
0.00180933965000483,
0.00199709948757614,
0.0017220342260466,
0.00108691868896838,
0.000708469496277676,
0.000752566953495117,
0.000968191047084985,
0.00128589384124529,
0.00152837667988011,
0.00151793483515421,
0.00158542009088272,
0.00194285990524993,
0.00180962970124722,
0.00120574301459925,
0.00090789906216765,
0.00067360533694286,
0.000437203906023397,
0.00088603886686648,
0.00136672145412356,
0.00138238422121241,
0.000895223822875375,
0.000177143962099971,
0,
0,
0.000282374552837668,
0.000905685004350768,
0.00127960939766025,
0.00139253601469593,
0.00109620032872474,
0.000728154307260949,
0.000546814270521125,
0.000704428115633762,
0.000799013825775887,
0.000971768345741081,
0.00119153050372232,
0.00120903026201296,
0.00136604466789133,
0.00156888717006671,
0.00169892681040317,
0.001304457120758,
0.000934767475587354,
9.47404041380644e-05,
0,
0,
0.000247220342260466,
0.000364526733056173,
0.000361674562506043,
0.00015599922653002,
0.000130049308711206,
0.000512307841051919,
0.00114357536498115,
0.00192671371942377,
0.00252199555254762,
0.00248370878855264,
0.00227525862902446,
0.00200232040993909,
0.00164517064681427,
0.00153224402977859,
0.00197824615682104,
0.00255080730929131,
0.00296625737213574,
0.00330484385574785,
0.00334332398723775,
0.00299197524896065,
0.0021480228173644,
0.00139930387701827,
0.000909358986754326,
0.000417055013052306,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0.000219510780237842,
0.000653640143091946,
0.00141003577298656,
0.00128231654258919,
0.000344049115343711,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0]
}]
});
});
