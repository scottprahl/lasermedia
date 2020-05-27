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
		href: "http://omlc.org/spectra/PhotochemCAD/html/CEKYF2.TXT.html",
		text: "omlc.org",
		position: {
			align:'right',
			x : -15,
			verticalAlign: 'bottom',
			y : -60,
		}
	},
    title: {
      text: "Ce:KYF\u2084"
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
	pointStart: 279.8,
    data: [0.000891351920217831,
0.0013565975644388,
0.00124926916459249,
0.0014151646258958,
0.00139172777842741,
0.00152613467417269,
0.00110194945124701,
0.00128164308504418,
0.00178390658670631,
0.00214790438167148,
0.00215074419925497,
0.002620984581461,
0.00291415398493226,
0.00267460701936087,
0.0027215475335349,
0.00266174431618863,
0.00244825685314802,
0.00271386332125019,
0.00268914020346458,
0.00271870771595142,
0.00244658637221656,
0.00215224763209328,
0.00201860915757647,
0.00153176419491171,
0.00148544175868232,
0.00185022467968528,
0.00219534604012495,
0.00209962748275228,
0.00263668710221673,
0.00268045370262098,
0.0026714331055911,
0.00270417453184772,
0.00256285184504619,
0.00280306700299016,
0.00287589997160182,
0.00292434391861417,
0.00279404640596028,
0.0024216962063378,
0.00216945358568732,
0.00165497886841622,
0.0018452132368909,
0.00180378530979069,
0.00173897064965003,
0.00129362043332275,
0.00204800962197016,
0.0021094833202479,
0.00221088151278753,
0.00255650401750664,
0.00350851110034579,
0.00381220453368525,
0.00337938292434392,
0.00343901909359705,
0.0038646576349331,
0.00323973071847385,
0.00292183819721698,
0.00319746755090791,
0.00329034629069709,
0.00339959574361459,
0.003210163205987,
0.00260528206070528,
0.00286571003791992,
0.00284633245911498,
0.00242670764913218,
0.0025352889096771,
0.00281659789853499,
0.00283714481399195,
0.00254965504568765,
0.00231762524430784,
0.00242503716820072,
0.0028162638023487,
0.0027026710990094,
0.00282077410086364,
0.00325727076825418,
0.00284232330487947,
0.00237659322118838,
0.00265990678716402,
0.00320014032039824,
0.0032395636703807,
0.00347777425120692,
0.00329936688772698,
0.00322118838013464,
0.0031139435043349,
0.0030340945158111,
0.0029440555936054,
0.00326178106676912,
0.00306833937490604,
0.00304745836326278,
0.00336451564405392,
0.00411238995706864,
0.00440155020630439,
0.00484673337453853,
0.00482902627666505,
0.00530026894742997,
0.00510214990895879,
0.00545128042363396,
0.00519035130213989,
0.00487195763660358,
0.00442560513171742,
0.00418388654093513,
0.00394584300820206,
0.00362694819838632,
0.0042022618311812,
0.00398777207958171,
0.00366570335599619,
0.0034116232063211,
0.00368591617526686,
0.00354860264270083,
0.00363663698778878,
0.00455322987488098,
0.00458947931109366,
0.00448440606050482,
0.00484439470123449,
0.00501511785242971,
0.00536875866561983,
0.00540651153467083,
0.00539498521624376,
0.0049337654310676,
0.00472528941082137,
0.0044643602893273,
0.00490052286053155,
0.0057033559961913,
0.00613049797036567,
0.00636486644504953,
0.00617693734026026,
0.00614887326061173,
0.00552762140220169,
0.00544225982660408,
0.00535973806858995,
0.00516913619431034,
0.00514374488415215,
0.00465880426974926,
0.00456726191470524,
0.00461353423650669,
0.00557589830112089,
0.00564622554833537,
0.00641915707532198,
0.00685080934801129,
0.00730183919950554,
0.00661142943053305,
0.00626814559911799,
0.00630038588109517,
0.00926582363062326,
0.0429981791757847,
0.0501378146768455,
0.0521423917945977,
0.0525015451948616,
0.0493176085394985,
0.016021081469355,
0.00947780766082555,
0.00802248467333745,
0.00848704542037653,
0.00927751699714348,
0.00958438434425271,
0.00944840719643185,
0.00978901825835658,
0.00979202512403321,
0.0100783455556855,
0.00956133170739856,
0.0104582129194995,
0.0112495197367322,
0.0116796685765832,
0.0117859111638241,
0.0129306917461537,
0.0136122479661895,
0.0142916325610143,
0.0157354292300753,
0.0173696607253228,
0.0185239630489618,
0.0193174414914054,
0.0204516980438668,
0.0210163205987004,
0.0221472361892989,
0.0240749711842039,
0.0268897315537143,
0.029208359086581,
0.0319262315620667,
0.0344553396922974,
0.0369309924327214,
0.0387217479912467,
0.0404774234502113,
0.0422381103519703,
0.0452767151662964,
0.0485358234635752,
0.0519903780298348,
0.0562734911380987,
0.0604647277951322,
0.063956032941884,
0.0678465830312547,
0.0732556002873227,
0.0787615054374154,
0.0859195162287222,
0.0920067487429631,
0.0985617159180128,
0.104501946110285,
0.110487279287707,
0.115562200357483,
0.123087716953711,
0.129706162404156,
0.13610577485258,
0.143001520137648,
0.150936304562083,
0.159338823647328,
0.168000267276949,
0.177555418204901,
0.187361141272572,
0.19813574328049,
0.207072816263802,
0.216778310475586,
0.227653141339392,
0.239179459766467,
0.251557723468587,
0.265055209394785,
0.277934617376343,
0.290814025357901,
0.30406093914438,
0.316021582613634,
0.325159113308722,
0.337153166396606,
0.348980171391344,
0.360322736915958,
0.37093029083073,
0.386933498154119,
0.401633730350968,
0.41478041528156,
0.427876985784207,
0.440305363914271,
0.453852964268413,
0.469438551358936,
0.48542505387301,
0.501110869819421,
0.518250004176202,
0.530678382306266,
0.543056646008386,
0.556921637739505,
0.569082738920535,
0.583782971117385,
0.598382974458347,
0.613033092227252,
0.625561699213203,
0.641715249820423,
0.654193742378431,
0.668409535105157,
0.680637455523445,
0.693683911598149,
0.708083457227336,
0.724487579974275,
0.735997193592035,
0.751365618161469,
0.763510014533184,
0.773850291498923,
0.781818485541988,
0.793729014583299,
0.800928787397892,
0.813223527053439,
0.822177304846065,
0.8353741042046,
0.849172276698462,
0.861032691311829,
0.873811870437499,
0.885956266809214,
0.893473431000785,
0.902226751081636,
0.910412107645791,
0.916392429380419,
0.924043232046506,
0.932011426089571,
0.933732021448975,
0.937540717972704,
0.937791290112423,
0.941950787631759,
0.945241635066736,
0.95135559527588,
0.954997243706463,
0.957285802582564,
0.960459716352338,
0.962581227135292,
0.964218298448123,
0.966339809231078,
0.968778711391009,
0.967358802599268,
0.966506857324224,
0.969162922005245,
0.974207774418255,
0.980321734627399,
0.984748509095769,
0.989860180746037,
0.988590615238127,
0.988624024856756,
0.987788784391026,
0.988507091191554,
0.989024940280307,
0.991697709770643,
0.991029517398059,
0.993518533985934,
0.994888328349732,
0.99684279103954,
0.997510983412124,
0.997394049746922,
0.996792676611597,
0.994687870637957,
0.993401600320732,
0.99705995356063,
0.998162470975394,
0.998930892203865,
1,
0.998580091208259,
0.996926315086113,
0.998346223877855,
0.997594507458697,
0.996157893857642,
0.994353774451665,
0.992599769473631,
0.98950937975043,
0.9901608673137,
0.988490386382239,
0.987955832484172,
0.984631575430566,
0.982994504117735,
0.979202512403321,
0.978033175751299,
0.977882832467467,
0.976529742912985,
0.976930658336535,
0.975076424502614,
0.973272305096637,
0.971702053021065,
0.967893356497336,
0.95890616908608,
0.955916008218766,
0.955581912032474,
0.954312346524564,
0.954763376376059,
0.958037519001721,
0.96014232497536,
0.960008686500844,
0.957653308387485,
0.956767953493811,
0.954546213854969,
0.952207540550924,
0.950403421144948,
0.9486327113576,
0.944272756126489,
0.942167950152849,
0.937674356447221,
0.932779847318043,
0.931159480814526,
0.930791975009605,
0.930424469204684,
0.927350784290797,
0.925713712977966,
0.920902727895361,
0.920852613467417,
0.918781217112407,
0.91781233817216,
0.916191971668643,
0.917829042981474,
0.913853298364599,
0.911347576967409,
0.908891969998163,
0.907989910295174,
0.903212334831198,
0.902193341463007,
0.900673203815378,
0.900372517247716,
0.89643018224947,
0.895127207122931,
0.891067938459483,
0.888629036299551,
0.884653291682675,
0.881846883717822,
0.877470223677397,
0.873628117535038,
0.869184638257354,
0.867146651520973,
0.864006147369828,
0.861867931777559,
0.859545963282829,
0.857675024639594,
0.853465412692314,
0.852980973222191,
0.850341613350484,
0.849439553647495,
0.846466097589496,
0.84419424352271,
0.838831999732723,
0.835724905200207,
0.831381654778411,
0.827522843826738,
0.825718724420761,
0.82448256853148,
0.823263117451514,
0.823981424252042,
0.82259492507893,
0.820206137346942,
0.817834054424269,
0.814125586756427,
0.807477072649216,
0.804670664684363,
0.801279588393498,
0.797704759200174,
0.795315971468186,
0.79326127992249,
0.790471576766951,
0.78799926498839,
0.786362193675559,
0.785927868633379,
0.784725122362728,
0.783455556854818,
0.781150293169403,
0.779864022852179,
0.776873861984865,
0.776907271603495,
0.775888278235304,
0.777074319696641,
0.775988507091191,
0.774318026159731,
0.772146400948833,
0.769473631458497,
0.76556470607888,
0.761856238411039,
0.760369510382039,
0.757546397607871,
0.756193308053389,
0.75569216377395,
0.753871339558659,
0.751064931593806,
0.749093764094683,
0.746354175367088,
0.74356447221155,
0.741142274860932,
0.739070878505922,
0.736799024439136,
0.735813440689574,
0.733591701050733,
0.73325760486444,
0.732221906686935,
0.731136094081486,
0.728847535205386,
0.726558976329285,
0.724220303025241,
0.722082087432972,
0.721280256585871,
0.720161034361793,
0.718390324574445,
0.716586205168468,
0.714665152097289,
0.711441123899571,
0.708885288074437,
0.708367438985684,
0.706112289728213,
0.705243639643853,
0.702938375958438,
0.701184370980405,
0.699029450578822,
0.698528306299384,
0.696724186893407,
0.695204049245778,
0.694853248250171,
0.693967893356497,
0.692347526852981,
0.690693750730835,
0.690393064163173,
0.687703589863522,
0.684780248233466,
0.682608623022568,
0.680938142091108,
0.67916743230376,
0.677229674423267,
0.67582647044084,
0.674439971267728,
0.672335165294088,
0.67078161802783,
0.669963082371415,
0.667156674406562,
0.66515209728881,
0.664400380869652,
0.662663080700934,
0.660842256485642,
0.660691913201811,
0.659221889982126,
0.657350951338891,
0.656215024305498,
0.65444431451815,
0.652322803735195,
0.650936304562083,
0.648463992783522,
0.645340193441692,
0.643485959607771,
0.642266508527805,
0.639977949651705,
0.638474516813391,
0.638975661092829,
0.638173830245728,
0.637104722449593,
0.635901976178942,
0.634699229908291,
0.631608840185089,
0.628652088936405,
0.626664216627967,
0.626246596395102,
0.626062843492642,
0.625127374171024,
0.624693049128844,
0.62340677881162,
0.62090105741443,
0.617643619598082,
0.615371765531296,
0.61269899604096,
0.610961695872242,
0.609190986084894,
0.607620734009321,
0.606284349264153,
0.605649566510198,
0.603578170155188,
0.601991213270301,
0.601506773800177,
0.601022334330054,
0.600771762190335,
0.60032073233884,
0.599385263017223,
0.597247047424954,
0.595693500158696,
0.593755742278202,
0.591283430499641,
0.589629654377495,
0.588761004293136,
0.587341095501395,
0.58503583181598,
0.583916609591902,
0.58249670080016,
0.580341780398577,
0.577936287857274,
0.576917294489083,
0.57559761455323,
0.574077476905601,
0.572323471927568,
0.570435828475018,
0.568280908073434,
0.566543607904716,
0.564555735596278,
0.563035597948649,
0.560947496784324,
0.55860882348028,
0.55672118002773,
0.555401500091876,
0.554148639393281,
0.553597380685899,
0.553196465262349,
0.55189349013581,
0.550189599585721,
0.547516830095384,
0.545896463591868,
0.543808362427543,
0.542087767068139,
0.540935135225431,
0.539932846666555,
0.537260077176219,
0.535355728914354,
0.533184103703456,
0.531413393916109,
0.529609274510131,
0.528573576332626,
0.526852980973222,
0.525633529893256,
0.523127808496066,
0.521357098708718,
0.519669912967943,
0.518717738837011,
0.517598516612933,
0.515794397206956,
0.513171742144563,
0.51018158127725,
0.507625745452116,
0.505153433673555,
0.503382723886207,
0.501695538145432,
0.500492791874781,
0.498337871473197,
0.496233065499557,
0.494495765330839,
0.492691645924862,
0.490720478425739,
0.489300569633998,
0.487797136795683,
0.486410637622572,
0.486243589529426,
0.485926198152448,
0.484472879742078,
0.483303543090056,
0.482100796819404,
0.48016303893891,
0.477607203113776,
0.476120475084777,
0.474049078729766,
0.47177722466298,
0.469655713880026,
0.467868299283364,
0.465980655830814,
0.464811319178792,
0.463792325810601,
0.46277333244241,
0.461854567930107,
0.460250906235905,
0.45816280507158,
0.456174932763143,
0.454103536408132,
0.451798272722717,
0.45061223126138,
0.4493760753721,
0.448039690626931,
0.446302390458213,
0.44476554800127,
0.442710856455574,
0.440606050481934,
0.438284081987204,
0.436981106860665,
0.435460969213036,
0.434041060421295,
0.431969664066285,
0.430449526418656,
0.429196665720061,
0.427576299216544,
0.425488198052219,
0.424151813307051,
0.422915657417771,
0.420376526401951,
0.418422063712143,
0.416200324073301,
0.413794831531998,
0.411656615939729,
0.40973556286855,
0.408499406979269,
0.407330070327247,
0.406294372149742,
0.404824348930057,
0.403504668994203,
0.401249519736732,
0.399545629186643,
0.397374003975745,
0.394935101815813,
0.392412675609308,
0.390541736966073,
0.388720912750781,
0.38708384143795,
0.385346541269231,
0.384444481566243,
0.383692765147086,
0.381738302457277,
0.379717020530211,
0.377578804937942,
0.375457294154987,
0.37325225932546,
0.372149741910696,
0.371080634114562,
0.369460267611045,
0.367606033777124,
0.365467818184855,
0.363530060304362,
0.361425254330722,
0.360022050348295,
0.357984063611914,
0.356864841387836,
0.354910378698027,
0.353490469906286,
0.351953627449343,
0.350633947513489,
0.348044702069726,
0.346056829761288,
0.344636920969547,
0.343066668893975,
0.341295959106627,
0.339324791607504,
0.337554081820156,
0.335532799893089,
0.333845614152314,
0.332592753453719,
0.331440121611012,
0.330337604196248,
0.329452249302574,
0.328182683794664,
0.326462088435261,
0.324858426741059,
0.322887259241936,
0.320598700365835,
0.318761171341229,
0.317341262549488,
0.31618863070678,
0.314701902677781,
0.313165060220838,
0.311327531196231,
0.309339658887794,
0.307819521240165,
0.306433022067053,
0.305029818084627,
0.303977415097807,
0.302607620734009,
0.300770091709403,
0.299266658871089,
0.297395720227854,
0.296009221054742,
0.294489083407113,
0.293653842941383,
0.292701668810451,
0.291365284065282,
0.289678098324508,
0.288241484723452,
0.286971919215542,
0.285084275762992,
0.284616541102183,
0.283664366971251,
0.282194343751566,
0.280690910913252,
0.280173061824499,
0.279120658837679,
0.278385647227837,
0.277968026994972,
0.276481298965972,
0.274610360322737,
0.272756126488816,
0.271252693650502,
0.269916308905334,
0.268763677062626,
0.268062075071413,
0.26670898551693,
0.265238962297245,
0.263484957319212,
0.262465963951022,
0.261012645540651,
0.259743080032741,
0.259676260795483,
0.259960242553831,
0.259692965604798,
0.258657267427292,
0.258122713529225,
0.255733925797237,
0.254263902577552,
0.252092277366654,
0.250338272388621,
0.249018592452767,
0.247281292284049,
0.245042847835892,
0.243756577518668,
0.242871222624994,
0.241618361926399,
0.240833235888612,
0.240165043516028,
0.238494562584568,
0.237458864407063,
0.235387468052052,
0.234034378497569,
0.232347192756795,
0.232079915807761,
0.230994103202312,
0.229808061740975,
0.228571905851695,
0.22728563553447,
0.22543140170055,
0.224061607336752,
0.223042613968562,
0.221722934032708,
0.220019043482619,
0.21868265873745,
0.21701217780599,
0.215492040158362,
0.214406227552912,
0.214172360222508,
0.213604396705812,
0.212719041812138,
0.211816982109149,
0.210881512787532,
0.209778995372768,
0.208158628869251,
0.20673872007751,
0.205636202662747,
0.204283113108264,
0.202980137981725,
0.201660458045871,
0.200741693533568,
0.199756109784007,
0.198653592369243,
0.197083340293671,
0.196197985399997,
0.195145582413177,
0.194059769807728,
0.192857023537076,
0.191721096503683,
0.191002789703156,
0.190067320381538,
0.188847869301572,
0.188012628835842,
0.187444665319145,
0.186292033476438,
0.185039172777843,
0.184404390023888,
0.183669378414045,
0.182767318711057,
0.181497753203147,
0.181096837779597,
0.180478759834956,
0.179576700131968,
0.178908507759384,
0.178708050047609,
0.177705761488733,
0.176803701785744,
0.176319262315621,
0.174999582379767,
0.173312396638992,
0.172393632126689,
0.171190885856038,
0.169436880878005,
0.168919031789252,
0.16880209812405,
0.168267544225983,
0.167833219183803,
0.167766399946545,
0.166946193809198,
0.166247932779847,
0.165374271252694,
0.16451230309206,
0.163650334931427,
0.162795048694519,
0.161487062125186,
0.160217496617276,
0.159460768755325,
0.158899487162354,
0.15892955581912,
0.15875749628318,
0.158298114027028,
0.157082003908925,
0.156089738235638,
0.154785092628168,
0.154180378530979,
0.153886373887042,
0.153705961946444,
0.15310625929205,
0.15217914237509,
0.151063261112874,
0.150161201409886,
0.149543123465246,
0.148684496266475,
0.148051383993452,
0.147640445684313,
0.146696623958038,
0.146305731420076,
0.145919850324909,
0.145427058450128,
0.14425103987438,
0.14363296192974,
0.142346691612515,
0.141067103219017,
0.139819253963216,
0.139115981491071,
0.138457812004076,
0.13778794915056,
0.137420443345639,
0.136790672034479,
0.136023921286938,
0.135075088117869,
0.134443646325777,
0.133716987120592,
0.133105591099678,
0.132955247815846,
0.13265122028632,
0.131819320782453,
0.130801997895194,
0.130048610995105,
0.129318610828057,
0.128416551125069,
0.127701585286404,
0.127141974174365,
0.126522225748793,
0.125807259910128,
0.12502046339141,
0.124208609658721,
0.123286504184555,
0.122269181297295,
0.120767418939913,
0.120396572173129,
0.120137647628752,
0.1199171441458,
0.119461102851511,
0.119289043315571,
0.11807627415933,
0.117018859729716,
0.116098424736482,
0.115605632861701,
0.114772062876902,
0.114332726391928,
0.113440689574528,
0.112602108146935,
0.111821993551944,
0.111232313783138,
0.11021666137681,
0.109630322569868,
0.10893540250238,
0.108298949267494,
0.107428628702203,
0.106909109132519,
0.106414646776807,
0.105621168334363,
0.105011442794381,
0.104328216093413,
0.103800344119072,
0.103285835992182,
0.10312379934183,
0.102410503984097,
0.102210046272322,
0.101652105641214,
0.100992265673287,
0.100165377612215,
0.0995690159196833,
0.0990628601974508,
0.0986753086213521,
0.097756544109049,
0.0970516011559728,
0.0964635918680988,
0.0956066351502598,
0.0947830880510499,
0.0945391978350567,
0.0939561999899771,
0.0932997009839133,
0.0926264971685348,
0.0920134306666889,
0.091128075773015,
0.0907772747774084,
0.0905083273474433,
0.0901892654895344,
0.0896597230342615,
0.0892086931827673,
0.0886156724520989,
0.0881011643252092,
0.0874413243572825,
0.0868850542071062,
0.0864206605081603,
0.085972971618529,
0.0853665870404089,
0.0850458547015686,
0.0848253512186158,
0.0844962664751182,
0.084103703456225,
0.0834639092594758,
0.0826219868700199,
0.0816998813958539,
0.0810684396037619,
0.0804453502163273,
0.0801931075956768,
0.0799709336317926,
0.0796435193692264,
0.0793979586723017,
0.0792041828842524,
0.0785109332976964,
0.0780148004610527,
0.0779446402619314,
0.0777441825501562,
0.077206287690226,
0.0770492624826688,
0.0768604981374138,
0.0762507725974308,
0.0753386900088535,
0.0750045938225615,
0.0746638157125436,
0.0739688956450562,
0.0734593989609608,
0.0731720762407497,
0.0723719158745803,
0.0717571788918029,
0.0716369042647378,
0.0715667440656165,
0.0714648447287974,
0.0712593755742278,
0.0708501077460201,
0.0702737918246663,
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
0.0655012278034846,
0.0644655296259793,
0.0640445684312514,
0.0634849573192122,
0.0631475201710573,
0.0629988473681573,
0.0626296710823046,
0.0622204032540968,
0.0619798539999666,
0.0615923024238678,
0.0614519820256252,
0.0614118904832701,
0.0612765815278219,
0.0610627599685949,
0.0607771077293153,
0.0605081602993502,
0.0599502196682425,
0.0594006314417921,
0.0590180913084877,
0.0588309974441642,
0.0582346357516329,
0.0579606768788734,
0.0575864891502263,
0.057389372400314,
0.0567746354175367,
0.0564722783689424,
0.0560863972737751,
0.0558274727293988,
0.0552194176703473,
0.0549421178357249,
0.0546314083824733,
0.0544743831749161,
0.0544576783656015,
0.0541252526602409,
0.053660858961295,
0.0534453669211366,
0.0529575864891502,
0.0522192339174448,
0.0520304695721898,
0.0519987304344921,
0.0518851377311528,
0.0519486160065483,
0.0517682040659506,
0.0512637188246496,
0.0509379750430149,
0.0505203548101498,
0.0501027345772848,
0.0499958237976713,
0.0498955949417837,
0.0496450228020647,
0.049337654310676,
0.0490352972620818,
0.0488298281075122,
0.0487412926181448,
0.0484673337453853,
0.048081452650218,
0.047747356463926,
0.0473130314217463,
0.0471710405425722,
0.0470591183201644,
0.0469355027312363,
0.0467266926148038,
0.0462840151679669,
0.0457294154987221,
0.0454203765264019,
0.0453234886323773,
0.0451647929438885,
0.0451113375540818,
0.0448858226283347,
0.0446452733742044,
0.0445300101899337,
0.0442042664082989,
0.0441374471710405,
0.043972069558826,
0.0438083624275429,
0.0433573325760486,
0.0430800327414263,
0.0428678816631308,
0.0427526184788601,
0.0426323438517949,
0.042396806040459,
0.0421879959240265,
0.04153984932262,
0.041184036884219,
0.0406628468336034,
0.040385546998981,
0.0398994370479261,
0.0399512219568014,
0.0397424118403688,
0.0400163707131283,
0.0399411990712126,
0.0399996659038137,
0.0399528924377328,
0.0398392997343935,
0.0394484071964318,
0.0393164392028465,
0.0393465078596128,
0.039234585637205,
0.039234585637205,
0.0389739906118972,
0.0386231896162905,
0.0381120224512637,
0.0377060955849189,
0.0375958438434425,
0.0374688872926516,
0.0374672168117201,
0.0377511985700683,
0.0377161184705077,
0.0373703289176954,
0.0372467133287673,
0.0371080634114562,
0.0365016788333361,
0.0363246078546013,
0.0362260494796452,
0.0360489785009104,
0.0357783605900139,
0.035753303376042,
0.0356630974057431,
0.0353590698762174,
0.035143577836059,
0.0349030285819287,
0.0348796418488883,
0.0346574678850041,
0.0341229139869368,
0.0336635317307853,
0.0335332342181314,
0.0332676277500292,
0.0332008085127708,
0.0335315637371999,
0.0338690008853549,
0.033862318961629,
0.0335833486460752,
0.0333578337203281,
0.0330721814810484,
0.0326211516295541,
0.0325259342164609,
0.0324958655596946,
0.0323254765046857,
0.0321317007166363,
0.0318978333862319,
0.0314668493059152,
0.0312463458229624,
0.0311979018759501,
0.0312964602509062,
0.0314067119923826,
0.0316105106660207,
0.0317224328884286,
0.0314501444966006,
0.0310592519586389,
0.0309423182934367,
0.0307134624058266,
0.0304729131516964,
0.0305581076792008,
0.0308053388570569,
0.0308303960710288,
0.0308036683761255,
0.0306733708634716,
0.0305965287406244,
0.0302206705310459,
0.0299383592536291,
0.0296426841287607,
0.0296543774952809,
0.0294004643936989,
0.0295842172961596,
0.0297813340460719,
0.0300152013764763,
0.0298063912600438,
0.0296627298999382,
0.0293236222708518,
0.0290329585887777,
0.028747306349498,
0.0285886106610093,
0.0285668944089003,
0.0284850408432588,
0.0284249035297262,
0.0284633245911498,
0.0284232330487947,
0.0283463909259476,
0.0282662078412375,
0.0281776723518701,
0.0278519285702354,
0.0278235303944005,
0.0278586104939612,
0.0277968026994972,
0.0274376492992332,
0.0274309673755074,
0.0273875348712894,
0.0271302808078446,
0.0269699146384244,
0.0271286103269131,
0.0271770542739255,
0.027364148138249,
0.027324056595894,
0.0272956584200591,
0.0271469856171592,
0.02696490319563,
0.0266976262465964,
0.0266157726809548,
0.0264219968929055,
0.0264737818017807,
0.0262499373569651,
0.0261279922489685,
0.0260812187828876,
0.0261781066769123,
0.0258523628952776,
0.0259358869418506,
0.0258623857808663,
0.0258774201092495,
0.0255232781517799,
0.0255299600755057,
0.0251591133087216,
0.0250388386816564,
0.0249035297262082,
0.0249335983829745,
0.0247448340377195,
0.0247364816330622,
0.0243906920802499,
0.0241217446502848,
0.0240983579172444,
0.0240565958939579,
0.0240950169553815,
0.0243138499574027,
0.0244775570886858,
0.0246228889297229,
0.0247414930758565,
0.0248734610694419,
0.0249168935736599,
0.0248149942368408,
0.0244541703556454,
0.0242119506205837,
0.0239029116482635,
0.0235771678666288,
0.0234234836209345,
0.0234518817967693,
0.0233048794748008,
0.0229991814643436,
0.0229022935703189,
0.0226433690259426,
0.0224495932378932,
0.0224228655429898,
0.0225548335365752,
0.0223042613968562,
0.022082087432972,
0.0218883116449226,
0.0216945358568732,
0.021617693734026,
0.0215024305497553,
0.0217864123081035,
0.0218181514458012,
0.0218515610644304,
0.0219384260728664,
0.0222524764879809,
0.0223042613968562,
0.0224362293904415,
0.022332659572691,
0.0223042613968562,
0.0222307602358719,
0.0220102567529192,
0.0217496617276114,
0.0218331857741844,
0.0216227051768204,
0.0219233917444832,
0.0220854283948349,
0.0223894559243606,
0.022456275161619,
0.0224696390090707,
0.0222792041828842,
0.0223343300536224,
0.0224061607336752,
0.0223476939010741,
0.0224946962230426,
0.0224011492908808,
0.0222541469689123,
0.0220286320431652,
0.021766366536926,
0.021388837846416,
0.0208776706813892,
0.0206889063361342,
0.0204299817917578,
0.0204968010290163,
0.0202529108130231,
0.0204132769824432,
0.0203330938977332,
0.0204333227536208,
0.02046673237225,
0.0208058400013364,
0.0205435744950971,
0.0203097071646927,
0.020002338673304,
0.0196649015251491,
0.0195680136311244,
0.0198419725038839,
0.0198937574127591,
0.0200925446436029,
0.0200841922389456,
0.0200207139635501,
0.0197417436479963,
0.0198453134657468,
0.0198235972136378,
0.0198018809615288,
0.0196181280590682,
0.0195830479595075,
0.0191604162838481,
0.0191804620550256,
0.0190134139618796,
0.019061857908892,
0.0190668693516863,
0.0193174414914054,
0.019083574161001,
0.0193424987053773,
0.0193658854384177,
0.0195128877603862,
0.0195028648747975,
0.019436045637539,
0.0194978534320031,
0.0196481967158345,
0.0195028648747975,
0.0193358167816514,
0.0192740089871874,
0.0191286771461504,
0.0190284482902628,
0.0189532766483471,
0.0189415832818268,
0.0189716519385931,
0.0188363429831448,
0.0186342147904382,
0.0184755191019495,
0.0183418806274326,
0.0182717204283113,
0.0182700499473798,
0.0184053589028281,
0.0185456793010708,
0.0185757479578371,
0.0185540317057281,
0.0183585854367472,
0.0179108965471159,
0.0176920635450946,
0.0177121093162722,
0.0178758164475552,
0.0178173496149541,
0.0179760453034429,
0.018328516779981,
0.018535656415482,
0.0186208509429865,
0.0189766633813875,
0.0190969380084526,
0.0190869151228639,
0.0189048327013347,
0.0188680821208426,
0.0187277617225999,
0.0185055877587157,
0.0181146952207541,
0.0179727043415799,
0.0176853816213688,
0.0175717889180295,
0.0175450612231261,
0.0174715600621419,
0.0175099811235655,
0.0174949467951823,
0.0175200040091542,
0.017489935352388,
0.0175617660324407,
0.0176436195980823,
0.0175333678566059,
0.0173780131299801,
0.0172594089838464,
0.0173679902443914,
0.0170138482869218,
0.017152498204233,
0.0171909192656566,
0.0173045119689959,
0.0171374638758499,
0.0171190885856038,
0.0170522693483454,
0.0170205302106476,
0.0172276698461487,
0.0171424753186442,
0.0170923608907004,
0.0169403471259376,
0.0167482418188196,
0.0165280724320532,
0.0167666171090657,
0.0169553814543207,
0.0169102784691713,
0.0169787681873611,
0.016818402017941,
0.0165477841070444,
0.0161226467099878,
0.0158144429781334,
0.0159579372901458,
0.0158775871573426,
0.0159450745869736,
0.0161730952341179,
0.016435193692264,
0.0245894793110937,
0.0400314050415114,
0.0429046322436229,
0.0435962113492474,
0.0438401015652406,
0.0356781317341263,
0.0204266408298949,
0.017468219100279,
0.016667390541737,
0.0163835758314819,
0.0160676878873428,
0.0161639075889949,
0.0161149624977031,
0.0161737634264905,
0.0162850174565257,
0.016467266926148,
0.016359687954162,
0.0164747840903396,
0.0165606468102167,
0.0164719442727561,
0.0162860197450846,
0.0138355912667257,
0.0106765447772414,
0.0077184571438117,
0.00495214072131367,
0.00361625712042497,
0.00555000584668326,
0.00874329719526252,
0.0118263368023654,
0.0144623557122095,
0.0158369944707081,
0.0161568915690827,
0.0160229189983796,
0.0157414429614286,
0.0159312095952425,
0.0160967542555502,
0.0164664316856823,
0.01666171090657,
0.0168334363463241,
0.0168534821175016,
0.0168835507742679,
0.0168635050030904,
0.0169286537594173,
0.0169119489501027,
0.0169687453017724,
0.0170389055008937,
0.0167499122997511,
0.0169938025157443,
0.0244792275696173,
0.0392262332325476,
0.0582262833469756,
0.0783956701134256,
0.0970566125987672,
0.10338606484807,
0.0964869786011393,
0.0808947095868901,
0.0617593505170138,
0.042923007533869,
0.0292117000484439,
0.0214205769841137,
0.0180211482885923,
0.0171023837762892,
0.0168501411556387,
0.0167916743230376,
0.0166418321834856,
0.0163717154168685,
0.016350500309039,
0.0160159029784675,
0.0157120424970349,
0.015700683226701,
0.0157461203080367,
0.0154567930107078,
0.0154389188647412,
0.0152875732923509,
0.0147718958288091,
0.0144326211516296,
0.0143541085478509,
0.0145697676361024,
0.0146484472879742,
0.0147678866745736,
0.0148375457294155,
0.0145776188964803,
0.014374822511401,
0.0144391360272622,
0.0143517698745469,
0.0144139117651972,
0.0146359186809883,
0.0145974976195647,
0.0144561749327631,
0.0144576783656015,
0.0144668660107245,
0.014735145248317,
0.0148938409368057,
0.014994905033159,
0.0151211933915774,
0.0150879508210414,
0.0150864473882031,
0.0152003741877286,
0.0155495047024038,
0.0156625962614637,
0.0159507542221406,
0.0160673537911565,
0.0161005963616925,
0.0160483103085378,
0.0160356146534587,
0.0157808663114111,
0.015518767853265,
0.0151078295441258,
0.0146666555301271,
0.0145124701401533,
0.0141788750981408,
0.014041895661761,
0.0141067103219017,
0.0141209094098191,
0.0142381771712076,
0.0144773900405927,
0.0143257103720161,
0.0145682642032641,
0.0146639827606368,
0.0145587424619548,
0.0146041795432905,
0.0148301956133171,
0.014750012528607,
0.0149062024956985,
0.0147189415832818,
0.014238678315487,
0.0140983579172444,
0.0140985249653375,
0.0139971267727979,
0.0141123899570686,
0.014668827155338,
0.0148869919649867,
0.0150032574378163,
0.0152085595442928,
0.0151240332091609,
0.0147236189298899,
0.0143753236556805,
0.0139197835056713,
0.0134629069709169,
0.0134660808846867,
0.013573993952859,
0.0136276163907589,
0.013668877269766,
0.0136538429413828,
0.0139196164575781,
0.0139861015986503,
0.013776456241752,
0.0137557422782019,
0.0136428177672352,
0.0133573325760486,
0.0130307535539482,
0.0129904949635,
0.0129585887777091,
0.0131525316138516,
0.0129260143995456,
0.0131555384795283,
0.0134690877503633,
0.0137729482317959,
0.0140592686634482,
0.0148475686150043,
0.0154963834087834,
0.0158971317842407,
0.0161882966105942,
0.0163229373736699,
0.0161467016354008,
0.0157365985667274,
0.0154185389973773,
0.0150164542371749,
0.0145251657952324,
0.0141574929422181,
0.0138958956283514,
0.0140353807861283,
0.0140721313666204,
0.01436680420293,
0.0146349163924294,
0.0149025274376493,
0.0153057815345038,
0.0160297679701986,
0.0165902143227035,
0.0171324524330555,
0.0180695922356046,
0.0184621552544978,
0.0187294322035314,
0.0192522927350784,
0.0192940547583649,
0.0188263200975561,
0.0184554733307719,
0.0181531162821776,
0.0171675325326161,
0.0165411021833186,
0.0160351135091793,
0.0152880744366303,
0.0144870788299952,
0.0142497034896347,
0.0140664517314535,
0.0139226233232548,
0.0139189482652056,
0.013831415064397,
0.0134426941516463,
0.0133549939027446,
0.0131844377996425,
0.0131413393916108,
0.0131077627248885,
0.0134498772196515,
0.0135400831899504,
0.0137296827756711,
0.0136538429413828,
0.0136089070043265,
0.0137171541686852,
0.0137338589779998,
0.0134724287122263,
0.0133533234218131,
0.0132373920451698,
0.0127826871356263,
0.0125162454270584,
0.0127522843826738,
0.0129828107512153,
0.0128725590097389,
0.0128556871523312,
0.0130733508177004,
0.0131324858426741,
0.0131109366386583,
0.0132758131065934,
0.0132692982309607,
0.0131537009505036,
0.01287155672118,
0.0128506757095368,
0.0128044033877353,
0.0129221722934033,
0.0127121928403187,
0.0127699914805472,
0.0127471058917862,
0.0128045704358285,
0.0129903279154068,
0.0134186392262332,
0.0137235019962247,
0.013882865877086,
0.014405726408633,
0.0146683260110586,
0.0148318660942485,
0.0149015251490904,
0.0150613901742312,
0.0149521407213137,
0.0148893306382908,
0.0149097105056546,
0.0146811887142308,
0.0146559644521658,
0.0146942184654962,
0.0145492207206455,
0.014457177221322,
0.0143374037385363,
0.0142430215659088,
0.0138741793762424,
0.013708968812121,
0.0135424218632544,
0.0137462205368926,
0.0136244424769891,
0.0163523378380636,
0.0174348094816498,
0.0173679902443914,
0.0174381504435127,
0.0176786996976429,
0.0149633329435544,
0.0140216828424904,
0.0138090306199155,
0.0136981106860665,
0.0136060671867431,
0.0136623623941333,
0.0135034996575514,
0.0137487262582898,
0.0136438200557941,
0.0135818452132369,
0.0137189916977098,
0.0137002823112774,
0.0136600237208292,
0.0137371999398627,
0.0136556804704074,
0.0135723234719276,
0.0137061289945375,
0.0136456575848187,
0.0135918680988257,
0.0135176987454688,
0.0135801747323054,
0.0139822594925079,
0.0139204516980439,
0.0137881496082722,
0.0139306416317258,
0.0139787514825518,
0.0133740373853632,
0.0132562684796953,
0.0134903028581929,
0.0133179092260662,
0.0131573760085529,
0.01344236005546,
0.0136516713161719,
0.0136180946494496,
0.0136075706195814,
0.0134894676177271,
0.0133025408014968,
0.0133651838364265,
0.0132103302540801,
0.0133008703205653,
0.0134027696573844,
0.0132509229407146,
0.0132791540684563,
0.0130917261079465,
0.0127815177989743,
0.0128418221606,
0.0130384377662329,
0.0129196665720061,
0.0131784240682893,
0.013431000785126,
0.0132622822110486,
0.0132337169871206,
0.0130770258757496,
0.0128658770860131,
0.0128687169035965,
0.0130853782804069,
0.0129988473681573,
0.0130541402869886]
}]
});
});