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
		href: "http://omlc.org/spectra/PhotochemCAD/html/CELSAF1.TXT.html",
		text: "omlc.org",
		position: {
			align:'right',
			x : -15,
			verticalAlign: 'bottom',
			y : -60,
		}
	},
    title: {
      text: "Ce:LiSrAlF\u2086"
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
    data: [0.01531787302461,
0.0137091704448339,
0.0149209843996697,
0.0138105653490157,
0.0141321320451352,
0.0139900343294176,
0.014613902689862,
0.0150223793038516,
0.0153120790300853,
0.0153033880382983,
0.0149108449092516,
0.0144631139823573,
0.0138156350942248,
0.0135570780885612,
0.0127230325767342,
0.012588901603488,
0.0130221475440706,
0.0130658922027319,
0.0136978721555108,
0.0135633066326752,
0.0132289931486015,
0.0121275547894607,
0.011946927010154,
0.0113476831264394,
0.011245563972942,
0.0105769370047945,
0.01059113229138,
0.0110888364210496,
0.0115513420339818,
0.0121197328968524,
0.0124399959442038,
0.0123532308761968,
0.0126787085186204,
0.0118358271651433,
0.0107514810898504,
0.0094104610571143,
0.00953691498761534,
0.00898967220475977,
0.00914915190405145,
0.00962817040137897,
0.0105450700349088,
0.0104355635383925,
0.0103266364413286,
0.0106487825369005,
0.010130075177079,
0.0104972695800802,
0.0108392601068992,
0.0102198820922114,
0.010127612729406,
0.0102930312730854,
0.00970146443211611,
0.00982589046453351,
0.00986471022784883,
0.0094644900560569,
0.00977142691600156,
0.0101825108275273,
0.0102308906818083,
0.0117248721699958,
0.0116809826614714,
0.0119322971739792,
0.0115766907600272,
0.0103065023103553,
0.00878340599968133,
0.00905572374234106,
0.00896664107652418,
0.00936555759954807,
0.00986253747990208,
0.0104481654764836,
0.0114006981763402,
0.0117332734620566,
0.0124197169633675,
0.0133344438489506,
0.0141719657574924,
0.0136183495806596,
0.0137828990251604,
0.0130952967249446,
0.0124250764083028,
0.0116547648362472,
0.0114172110607355,
0.0116314440082854,
0.0125054680823327,
0.0129514608108695,
0.0129782580355462,
0.0130614018569752,
0.0129181453423527,
0.0129924533221316,
0.0131303503918189,
0.0133001144313919,
0.0133314020018251,
0.0127057954430233,
0.0121337833335747,
0.0110914437185857,
0.0110161217897649,
0.0116944536987413,
0.0127570722945667,
0.0132901197908368,
0.0144732534727755,
0.0149542998681866,
0.015068731260049,
0.0151512956820256,
0.0153135275287165,
0.0155438388110723,
0.016262294132132,
0.0164390109651346,
0.0165461998638411,
0.0171067688341034,
0.0173617045931892,
0.0168605240668048,
0.0175891188782827,
0.0182713617335632,
0.0185697524515839,
0.0198328432579631,
0.0214725437084462,
0.0217014064921709,
0.023126729145241,
0.0238017295073656,
0.0230383707287397,
0.0237510320552747,
0.0242232426090357,
0.0246737256833292,
0.0258209365992149,
0.0279082231267291,
0.028284832770833,
0.0294305951880875,
0.029658009473181,
0.0301939539667135,
0.031656937584194,
0.0340281298434173,
0.0361603198284978,
0.0383794197314484,
0.0411272216347756,
0.0418109129886872,
0.0420252907861002,
0.0428668684908093,
0.0450743804047105,
0.0466894563784637,
0.049824007416313,
0.0532250822022973,
0.0559178411576401,
0.0578081318713154,
0.0596361371438504,
0.0606428436925127,
0.0622709561539464,
0.0660573315758217,
0.0696640931674319,
0.0739922070773643,
0.0790807827686603,
0.0830293900372264,
0.0868331474426756,
0.0899242435215899,
0.0935339021104625,
0.0972478526007793,
0.102291524834509,
0.105666526645132,
0.111517012616423,
0.116822863102394,
0.121986760722511,
0.126705969262859,
0.134194707186002,
0.140163970045048,
0.145139562843113,
0.152048901313788,
0.159914248881035,
0.165766183350957,
0.170980778423164,
0.178860610976723,
0.189000101394904,
0.198647102278488,
0.209119747381839,
0.218361168648696,
0.228674478902617,
0.236134246853137,
0.244738328722279,
0.254747454263656,
0.264901429668149,
0.276185234004954,
0.286802728971421,
0.295305415936382,
0.302214754407057,
0.311441690687602,
0.322392340339238,
0.336529686979446,
0.3507249735649,
0.365253414835523,
0.381549024436172,
0.39028347118212,
0.397801179077886,
0.410301722264872,
0.420325332792561,
0.42890044468908,
0.442429421904196,
0.452047452815157,
0.460216985094949,
0.475730405434767,
0.491750800295494,
0.508220229731883,
0.524457899387285,
0.535944493532454,
0.542230977591726,
0.545765314251778,
0.55590480466996,
0.564335066703362,
0.574894621724582,
0.588916088474296,
0.604400538841491,
0.610817387777569,
0.629227805379724,
0.649086721613048,
0.663282008198502,
0.678100149195359,
0.68926807364167,
0.695670437591436,
0.694743398467488,
0.702290076335878,
0.717368947086345,
0.734128076248968,
0.744383446557643,
0.759230557527123,
0.762677984269305,
0.763938178078422,
0.771021336384837,
0.780161362747512,
0.787360400944421,
0.799730579254603,
0.805249359039356,
0.815750974115329,
0.822457522777641,
0.835276735663485,
0.84544519605429,
0.858076104118082,
0.86234917508003,
0.871387806538523,
0.872372785607718,
0.878021930269276,
0.877428045830497,
0.88165766183351,
0.892144791923172,
0.903501021191535,
0.914538580761041,
0.926633544331301,
0.934730651679534,
0.932746208554833,
0.941118530642988,
0,
0,
0,
0.936816489708417,
0.94644900560569,
0.963555774439793,
0.975158248475455,
0.973955994611585,
0.972637860857221,
0.976925416805481,
0.97717166157278,
0.973608354940104,
0.981430247548416,
0.99227950229587,
0.993061691556701,
0.986920057360546,
0.985210828975767,
0.978084215710416,
0.981560612425221,
0.979692049191013,
0.974274664310442,
0.982284861740806,
0.992771991830468,
0.987166302127845,
0.987919521416052,
1,
0.995596564161247,
0.990063299390182,
0.986572417689065,
0.986775207497429,
0.980807393137013,
0.977620696148442,
0.971102452308182,
0.969697408635949,
0.969958138389559,
0.970870692527195,
0.972145371322624,
0.975911467763663,
0.978765010067066,
0.97743239132639,
0.980619088314961,
0.972435071048858,
0.962628735315845,
0.957240320407897,
0.951026261280183,
0.948245143908339,
0.94885351333343,
0.951446325883222,
0.947636774483248,
0.949563277662703,
0.94353752335704,
0.933687732665093,
0.933253183075742,
0.928096527948781,
0.922201138519924,
0.912148558019613,
0.91229340788273,
0.893404985732288,
0.88758202123499,
0.879919463476107,
0.874893173225951,
0.860321276996393,
0.855034256992627,
0.848979532714342,
0.837536393528108,
0.828483277083303,
0.823399046887901,
0.821733273462057,
0.81867694135029,
0.81592479395107,
0.812375972304706,
0.807697321726031,
0.801280472789953,
0.789866303576343,
0.778495589321668,
0.774352883236525,
0.769630777698915,
0.76289525906398,
0.755754160812318,
0.752726798673175,
0.741544389240552,
0.732331937946319,
0.727407042600345,
0.724770775091618,
0.716804032620189,
0.706954241928241,
0.703028810637774,
0.697495545866709,
0.692686530411229,
0.684821182843982,
0.68205455045845,
0.674869997247853,
0.66858351318858,
0.657314193838087,
0.64944884627084,
0.638758926372815,
0.634036820835204,
0.627967611570607,
0.623593145704477,
0.619798079290815,
0.617639816330373,
0.613656445094659,
0.608572214899257,
0.607384446021698,
0.605226183061257,
0.598693454234686,
0.589394093022582,
0.579457392412764,
0.574633891970972,
0.568651592624245,
0.56440749163492,
0.560931094920115,
0.554499760997726,
0.544794820168895,
0.540174109535467,
0.537595781971986,
0.536031403450324,
0.534380115010791,
0.528209510842012,
0.523197705578168,
0.517244376204064,
0.511435896693078,
0.510595767487,
0.514506713791155,
0.513811434448194,
0.514130104147052,
0.514144589133363,
0.510523342555441,
0.504483103263467,
0.501919260686299,
0.499297478163883,
0.495270651969234,
0.491272795747208,
0.488998652896273,
0.484899401770065,
0.484117212509234,
0.481712704781494,
0.482770108782247,
0.479786201602039,
0.475600040557962,
0.468285122470559,
0.465141880440923,
0.461839303561858,
0.460419774903313,
0.459565160710923,
0.459898315396092,
0.454785115228066,
0.449440155279053,
0.446601097961962,
0.446296913249417,
0.442328027000015,
0.444240045193157,
0.44486289960456,
0.442400451931573,
0.43817083592856,
0.434361284528586,
0.43010269855295,
0.428856989730145,
0.428161710387184,
0.425192288193288,
0.425134348248041,
0.423859669452612,
0.420397757724119,
0.417978765010067,
0.417326940626041,
0.415414922432898,
0.414516853281574,
0.412966959746223,
0.411938525718093,
0.410316207251184,
0.408809768674769,
0.406202471138665,
0.407245390153106,
0.408172429277054,
0.407824789605574,
0.407245390153106,
0.404826397439054,
0.400538841490795,
0.39861233831134,
0.398293668612483,
0.395208366528094,
0.395657401103756,
0.395106971623912,
0.393904717760042,
0.392094094471081,
0.391934759621652,
0.390225531236873,
0.390442806031548,
0.391413300114431,
0.392007184553211,
0.394556542144068,
0.395512551240639,
0.395744311021626,
0.394542057157756,
0.395613946144821,
0.396613410200327,
0.397120384721236,
0.397815664064197,
0.396555470255081,
0.394107507568405,
0.391036690470328,
0.390297956168431,
0.390022741428509,
0.390660080826224,
0.391876819676405,
0.393079073540275,
0.393397743239133,
0.389472311948665,
0.387574778741834,
0.384344626794328,
0.380897200052146,
0.377261468487912,
0.37698625374799,
0.375928849747237,
0.376667584049133,
0.376493764213393,
0.375175630459029,
0.373669191882614,
0.372887002621783,
0.371032924373886,
0.370815649579211,
0.372032388429393,
0.370583889798224,
0.367513072700146,
0.367701377522198,
0.366296333849965,
0.364731955328302,
0.365166504917653,
0.364123585903211,
0.362283992641627,
0.360545794284224,
0.360371974448484,
0.360502339325289,
0.360183669626432,
0.359546330228718,
0.361501803380796,
0.3596477251329,
0.357605342062952,
0.357257702391471,
0.355027014499471,
0.350696003592277,
0.348624650549705,
0.347089242000666,
0.346785057288121,
0.346625722438692,
0.346408447644017,
0.34591595810942,
0.345814563205238,
0.343974969943653,
0.342454046380926,
0.340744817996147,
0.339513594159653,
0.337355331199212,
0.335776467691238,
0.334270029114822,
0.331532366701913,
0.328910584179498,
0.328881614206875,
0.32909888900155,
0.329330648782537,
0.329287193823602,
0.328548459521706,
0.326578501383316,
0.32378289902516,
0.321624636064719,
0.320770021872329,
0.320277532337732,
0.317930964555238,
0.317119805321784,
0.314758752552979,
0.312991584222953,
0.312238364934745,
0.311658965482278,
0.309225487781914,
0.306849950026797,
0.305676666135551,
0.302185784434434,
0.301244260324174,
0.300462071063343,
0.301157350406304,
0.301374625200979,
0.302460999174356,
0.300360676159161,
0.299390182076278,
0.29846314295233,
0.296015180265655,
0.294798441415473,
0.294421831771369,
0.293234062893811,
0.291466894563785,
0.288946506945551,
0.285542535162304,
0.283847791763837,
0.282471718064226,
0.279285021075655,
0.279256051103032,
0,
0,
0,
0,
0,
0,
0,
0.262830076625578,
0.261540912843837,
0.259136405116097,
0.258035546156409,
0.25658704752524,
0.255008184017266,
0.253125135796747,
0.252878891029448,
0.251662152179266,
0.250372988397526,
0.24851891014963,
0.248243695409708,
0.245187363297942,
0.242753885597578,
0.241276416993786,
0.239132639019656,
0.235033387893448,
0.234265683618929,
0.232657850138332,
0.230861711835682,
0.228428234135319,
0.227805379723916,
0.225458811941423,
0.223532308761968,
0.221895505308747,
0.221345075828903,
0.219592392485189,
0.217665889305735,
0.215507626345293,
0.213725973028955,
0.210365456204644,
0.207874038559034,
0.206671784695163,
0.206324145023683,
0.204658371597839,
0.20458594666628,
0.203571997624462,
0.201181974883034,
0.198183582716514,
0.196546779263294,
0.193620812028333,
0.190492054985008,
0.189130466271709,
0.187783362544722,
0.18510364007706,
0.183495806596463,
0.18243840259571,
0.179555890319684,
0.177470052290801,
0.175963613714385,
0.174384750206411,
0.172067152396541,
0.170328954039138,
0.16828657096919,
0.166722192447528,
0.163999015020931,
0.162173906745658,
0.161188927676463,
0.159132059620204,
0.157118646522879,
0.156017787563191,
0.155047293480308,
0.152570360821009,
0.151005982299347,
0.150267247997451,
0.149818213421788,
0.148615959557918,
0.148065530078074,
0.147761345365529,
0.14545823254197,
0.142963917899098,
0.141091009168996,
0.139610643567942,
0.1371177774237,
0.135043527383867,
0.133626895722584,
0.131746744499326,
0.129882526761012,
0.129001839593262,
0.128484725581934,
0.127367933137303,
0.126477106479134,
0.125389284007127,
0.124318843518693,
0.121951996755363,
0.120005214595072,
0.118472703043296,
0.117061865376537,
0.115332358010922,
0.11425177803207,
0.112586004606226,
0.111231658386083,
0.110242333820995,
0.108731549748685,
0.107548126367021,
0.107112128279039,
0.105892492431595,
0.103295334385909,
0.101615075973753,
0.100249141764561,
0.0988918985471559,
0.0976070802613091,
0.0969291829019222,
0.095906542868317,
0.0950374436896157,
0.0936208120283326,
0.0920057360545794,
0.0914857250459898,
0.0906441473412807,
0.0895085244144444,
0.0882280516244912,
0.0874241348841925,
0.0860538551791068,
0.0853455393484653,
0.0849761721975173,
0.0843286933093848,
0.0833335747497718,
0.0824108811217173,
0.0814403870388342,
0.0797890985993018,
0.0786882396396135,
0.0775453742196213,
0.0764068542955227,
0.0753175833248837,
0.0744557266393383,
0.0736691918826137,
0.0731086229123513,
0.0724118950707591,
0.0717064762373799,
0.0713240725987514,
0.0701942436664397,
0.0687283630516969,
0.0679707982675956,
0.0669510552312528,
0.0659588336689022,
0.0655619450439619,
0.0657574923591697,
0.0649608181120269,
0.0640048090154555,
0.0634963859959152,
0.062996653968162,
0.0621232092935672,
0.0616524472384374,
0.0613019105696945,
0.0602242275881049,
0.0590842591653751,
0.0580326491591465,
0.0569274447035647,
0.0561959528948245,
0.055522401031331,
0.0546446108608427,
0.0543780871127077,
0.0537697176876168,
0.0527354896649623,
0.0521430537248142,
0.0518098990396454,
0.0509683213349363,
0.0502484175152454,
0.049867462375248,
0.0491098975911468,
0.0480887060561728,
0.0475368280776975,
0.0474151541926793,
0.047103726986978,
0.0469950895896403,
0.0469545316279676,
0.0469226646580819,
0.0465301215290351,
0.0461158509205209,
0.0458580181641728,
0.0453032431884352,
0.0440169764039573,
0.0428060315483002,
0.0420484667641989,
0.0409534017990353,
0.0407057085331054,
0.0404565667685444,
0.040384141836986,
0.0400640236394977,
0.0397641844228457,
0.0390746990744094,
0.0388588727783652,
0.0383881107232354,
0.0382171878847574,
0.0376942798789055,
0.0369830670510016,
0.0363616611382302,
0.0361081738777757,
0.0356794182829497,
0.0357692251980822,
0.0360777554065211,
0.0364094615930588,
0.0362573692367861,
0.0357446007213523,
0.0350522183756536,
0.0346234627808277,
0.0335747497718615,
0.0329243738864667,
0.0321219056447992,
0.0311383750742356,
0.0302866578791083,
0.0300621405912771,
0.0299564001912018,
0.0298970117473239,
0.0302272694352304,
0.0301997479612382,
0.0299795761693005,
0.0293581702565291,
0.0290206700754668,
0.0285455625244434,
0.027495401016846,
0.0271579008357837,
0.0268971710821733,
0.0269000680794357,
0.0268189521560902,
0.0268377826382954,
0.0266306473340383,
0.0266407868244564,
0.0260744238596694,
0.0255080608948824,
0.0254153569824876,
0.0249388009328331,
0.0245158393325318,
0.0240812897431812,
0.0236177701812072,
0.0234265683618929,
0.0232962034850877,
0.0228978663615163,
0.0228138534409085,
0.0225791966626592,
0.0222865999391631,
0.0218100438895085,
0.0215710416153657,
0.0211987774671553,
0.0212987238727059,
0.0211654619986384,
0.0213581123165839,
0.0214175007604618,
0.0215029621797007,
0.0214175007604618,
0.0213914277851007,
0.0208511377956748,
0.0201008155047293,
0.0195909439865579,
0.0192404073178151,
0.0188797311586541,
0.0188029607312021,
0.0189767805669424,
0.0187754392572099,
0.0185422309775917,
0.0184524240624593,
0.0182626707417761,
0.0182930892130307,
0.0185523704680099,
0.0186914263366021,
0.0186581108680852,
0.0185827889392645,
0.0183684111418515,
0.0182105247910541,
0.0179193765661891,
0.0174775844836827,
0.017257412691745,
0.0168952880339528,
0.0165780668337268,
0.0162724336225502,
0.016150759737532,
0.016021843359358,
0.0157958775728957,
0.0158103625592074,
0.0156814461810334,
0.0155612207946463,
0.0153931949534308,
0.0152266176108464,
0.0145863812158697,
0.0143560699335139,
0.0143557802337877,
0.0141763112533859,
0.014256992627142,
0.0143105870764952,
0.0140970783782609,
0.0137891275692744,
0.0136066167417472,
0.0134740791169952,
0.0133150339672929,
0.0131105059605719,
0.0128941002650752,
0.0126847922128714,
0.0125770239147124,
0.0127843040688327,
0.0129634833495082,
0.0130099801555688,
0.0129042397554934,
0.0123797384011472,
0.0120053015049901,
0.0119763315323667,
0.0118860900676449,
0.0116214493677303,
0.0115947969929168,
0.0115246896591683,
0.0113424685313672,
0.0112003708156496,
0.0113208859017628,
0.0113271144458768,
0.011400408476614,
0.0112055854107218,
0.0110598664484262,
0.0108398395063517,
0.0105783855034257,
0.0104222373509857,
0.0101557136028506,
0.00993177571447195,
0.0096619204194852,
0.00953416284021612,
0.00930950070252183,
0.00938598143024755,
0.00934875501542651,
0.00943870678042209,
0.00942146964671118,
0.00930602430580703,
0.00928357257702391,
0.00921621739067457,
0.00933948462418703,
0.00916508538899431,
0.00894737604472964,
0.00875892637281458,
0.00837999913090082,
0.00788519199849356,
0.00759737532048032,
0.00730767559424656,
0.00711256282862813,
0.00750785810507409,
0.00776887755841071,
0.00801265987803641,
0.00840375450845199,
0.00856497240610108,
0.00817170502773875,
0.00800585193446992,
0.00793009545605979,
0.00747584628532526,
0.00717615191853644,
0.00714573344728189,
0.00691310456711618,
0.00670567956313281,
0.00671712270231905,
0.00651346379477671,
0.00621101728058867,
0.00623998725321204,
0.00617451511508322,
0.00584671987484972,
0.00553630661819025,
0.00543766386140765,
0.00533366165968973,
0.00511957356200298,
0.00519619913959181,
0.00544461665483726,
0.00561018004837985,
0.00539638165041934,
0.00554268001216739,
0.0056517519590944,
0.00568796442487362,
0.00554456306038791,
0.00552500832886713,
0.00533090951229051,
0.0051317409505048,
0.0048450830713965,
0.00474542636557208,
0.00456798528325391,
0.00460781899561105,
0.00462520097918507,
0.00455364514680534,
0.00453698741254689,
0.00465257760331416,
0.00462635977809001,
0.00454524385474456,
0.00445022234453988,
0.004327679360343,
0.00422990570273911,
0.00422193896026768,
0.00405449251850457,
0.00421324796848067,
0.00424207309124093,
0.00448571056100352,
0.00437374161681417,
0.00454625780378637,
0.00435578023378768,
0.00425119863261729,
0.00399944957052016,
0.0042246911076669,
0.00419311383750742,
0.0044186450743804,
0.00451091443718586,
0.00432260961513391,
0.00397525964337964,
0.00386836044439938,
0.00379506641366224,
0.00396265770528847,
0.00401914915190405,
0.00396178860610977,
0.00379723916160899,
0.00372988397525964,
0.00345553833451627,
0.00342251256572562,
0.00328620884453264,
0.00319191158364355,
0.00278835986499993,
0.00250793053000565,
0.00243347770036357,
0.00253950780016513,
0.00265958833668902,
0.00284629981024668,
0.00290670220316642,
0.00293683097469473,
0.00287526978287005,
0.00267870851862045,
0.00248489940177007,
0.00243898199516201,
0.00239263003896461,
0.00223822008488202,
0.00205063951214566,
0.00232237785535293,
0.00221823080377189,
0.00218694323333864,
0.00210626185958254,
0.00228167504381708,
0.00210669640917189,
0.00238031780059968,
0.0023401943885163,
0.00227892289641786,
0.00217506554456306,
0.00204165882063241,
0.00187754392572099,
0.00174037110534931,
0.00187189478105943,
0.00216883700044903,
0.00239610643567942,
0.00222561814679085,
0.00216275330619813,
0.00191592913944696,
0.00175630459029216,
0.00142672769674233,
0.00146298361748048,
0.00146298361748048,
0.00159363819401191,
0.00170589683792749,
0.00213190028535423,
0.00239393368773266,
0.00251560757275084,
0.00262047887364746,
0.00237408925648565,
0.00210365456204644,
0.00194518881179657,
0.00172979706534177,
0.00144965743007373,
0.00140672393064589,
0.00143538971855672,
0.00123036922230108,
0.0013746396859655,
0.00144878833089503,
0.00111963150194823,
0.000716166693222475,
0.00044400828541217,
0.000434317829569651,
0.000531932152324116,
0.000810406014166317,
0.00117438475020641,
0.00144561611889277,
0.00123316482465924,
0.0011649550241175,
0.0010218143893854,
0.00097408635948839,
0.000793748279907875,
0.000812738096962498,
0.000824760635601199,
0.00104458478786738,
0.00091032344974434,
0.00074607818995611,
0.000600982082071932,
0.000563857062155076,
0.000569173052131466,
0.000480916030534351,
0.000588162869186088,
0.000459825890464533,
0.000239291973869085,
8.05249359039355e-05,
0,
0.000118687080840709,
0.000377956747830873,
0.000592102785462868,
0.000619870504222373,
0.000518461115054246,
0.00034506134391703,
0.00041225719541695,
0.000436142937844924,
0.000415965351912742,
0.000633863000999464,
0.000725683329229254,
0.000857076640062575,
0.000902472587163405,
0.000919492446079638,
0.000764169937859409,
0.000876457551747613,
0.00081730086765068,
0.000808682300795226,
0.000892159276909483,
0.00109910627634457,
0.000980937758013818,
0.000839318046844446,
0.000773353419181019,
0.00066497675159697,
0.000880296073120211,
0.00107186001709228,
0.000942885698973014,
0.000831626519112939,
0.000840158176050523,
0.000834407636484783,
0.000670741776149021,
0.000751466604864058,
0.000612758375943335,
0.00035330330112838,
0.000159653519127424,
0.000236293581702565,
0.000622637136607906,
0.00102560945579906,
0.00150325187942697,
0.00156264032330489,
0.00150614887668931,
0.00104546837203239,
0.000689137708764865,
0.000264452395092487,
0.000235772122195344,
0.000184654605501398,
0,
0,
9.14915190405145e-05,
3.07298984602459e-05,
0.000175080029549372,
0.000621246577921984,
0.00111635789504179,
0.0012132914234396,
0.00129162622941321,
0.00132004577255674,
0.00117448614511059,
0.000829975230673407,
0.000649159146544606,
0.000480249721164013,
0.00017789011689384,
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
2.19650332430436e-05,
0,
0,
0,
0,
0,
0,
0,
2.29355273259267e-05,
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
5.60511030317076e-05,
0.000282268928255863,
0.000177136897605632,
0.000172501701985892,
0.00014845662470849,
3.05140721642018e-05,
0,
0,
0,
0,
0,
0,
0,
0,
0,
2.14739922070774e-06,
0.000119388154178194,
0.000172342367136463,
0.000417891855092197,
0.000568448802815881,
0.000630328664339412,
0.000808653330822602,
0.000814012775757927,
0.000576545910164115,
0.000397134869707548,
0.000139632371047409,
0,
0,
0,
0,
0.00014300447586077,
0,
0.000191114909396411,
0.000399206222750119,
0.000483059808508481,
0.000289294146617031,
0.00043147877225256,
0.000445804423714819,
0.000320393412228225,
0.000156799976824022,
0.000227703984819734,
0.000216622970291293,
0.00045413329084404,
0.000775830351840317,
0.00104591740660805,
0.00129116270985124,
0.0011525558758347,
0.000910222054840158,
0.000690455842519229,
0.000600677897359387,
0.000526659617306662,
0.000579283572577024,
0.000825079305300056,
0.000776612541101149,
0.000663441343047931,
0.000548474006692064,
0.000660124281182554,
0.000703246085432449,
0.000688427944435592,
0.000402306009820821,
0.000435100018830482,
0.000529600069527934,
0.000142383069947999,
0.000306603705259498,
0.000525182148702869,
0.000336109622376407,
0,
0,
0,
0,
0,
6.63962802555151e-05,
0.000484001332618741,
0.000795283688456914,
0.000654779321233541,
0.000749945681301331,
0.000475165490968611,
0.000531642452597882,
0.000789967698480525,
0.000945927546098469,
0.00105618726190304,
0.0018243840259571,
0.00192664802931761,
0.0015549632805597,
0.00129897011747324,
0.00154395469096282,
0.00133005489809812,
0.000883888349725509,
0.000974202239378884,
0.00121692715500384,
0.00099099033851413,
0.000769790112548343,
0.00110240885322363,
0.00108534553934847,
0.00122950012312238,
0.00114193838086823,
0.00110789866303576,
0.00102468241667512,
0.0011635934354042,
0.000842070194243666,
0.00054398366093544,
0.000378217477584484,
0.000670567956313281,
0.000655822240247983,
0.000787490765821226,
0.00084107073018816,
0.00098051769341078,
0.000740602865130292,
0.0009344409519533,
0.00121368251807002,
0.00181294088677086,
0.00221504410678332,
0.00229572548053942,
0.00218766748265423,
0.00209177687327085,
0.0017351565102771,
0.00172284427191216,
0.00204701826556774,
0.0022269217955589,
0.00246447557107059,
0.00264915914654461,
0.00257847241334357,
0.00253690050262902,
0.00219288207772644,
0.00204904616365138,
0.00219114387936903,
0.00210582730999319,
0.00186537653721917,
0.00182655677390385,
0.00181554818430697,
0.00151498471833944,
0.00138451844663007,
0.00139759838926952,
0.00186117589118878,
0.00172849341657372,
0.00190173385286151,
0.00227037675449397,
0.00252357431522227,
0.00264930399640772,
0.00308877848110434,
0.00326114981821342,
0.00323840838970407,
0.00310036647015369,
0.00287353158451265,
0.00302852093804771,
0.00299650911829888,
0.00298187928212408,
0.00275866564306097,
0.00247707750916175,
0.00189014586381216,
0.00183365441719658,
0.0015215029621797,
0.00164737749322827,
0.00185436794762229,
0.00205034981241943,
0.00212277474397787,
0.0026448136506511,
0.00294378376812434,
0.0025221258165911,
0.00231165896548228,
0.002341063487695,
0.00205121891159813,
0.00194938945782696,
0.00240928777322305,
0.00277025363211032,
0.00263699175804279,
0.00227457740052436,
0.00195040340686878,
0.00193026927589553,
0.00215174471660124,
0.00242811825542825,
0.00283688456914408,
0.00302504454133291,
0.00278024827266538,
0.00228515144053189,
0.00225256022133059,
0.00192780682822255,
0.00200660515375813,
0.0024517287831163,
0.00258397670814201,
0.00234946477975578,
0.00260338658979967,
0.00299013572432174,
0.00282312383214798,
0.00321146631516433,
0.0034617668786303,
0.00353766820690354,
0.00351956197401393,
0.00390341411127366,
0.00360821009024146,
0.00339919173776381,
0.0033793473065168,
0.00317800599678433,
0.0028481828584672,
0.00277836522444486,
0.00295754450512044,
0.00318017874473109,
0.0034652432753451,
0.00369555455770094,
0.00401581760505236,
0.00402914379245912,
0.00376189579500847,
0.00323623564175732,
0.00285919144806408,
0.00267378362327448,
0.00256905717224097,
0.00271709373234642,
0.00307067224821473,
0.00351391282935238,
0.00382418123614873,
0.00407955154482379,
0.00423396149890638,
0.00420962672190275,
0.00454408505583962,
0.00458319451888118,
0.00453713226241001,
0.00440618798615235,
0.00442936396425105,
0.00413778118979678,
0.00407477149934093,
0.00413676724075496,
0.00431985746773469,
0.00432449266335443,
0.00423338209945392,
0.00388356968002665,
0.00392543129046743,
0.0039071802077147,
0.00405145067137912,
0.00416341961556846,
0.00439141330011443,
0.00200515665512696,
0,
0,
0,
0,
0,
0.000164462534582905,
0.00313513043730174,
0.00460883294465287,
0.00490823761171546,
0.00506366151483987,
0.0051411561916074,
0.00518359720150064,
0.00540304474412272,
0.00546866173211466,
0.00605457942842244,
0.00644770195692165,
0.00633616756232165,
0.00625432738966062,
0.00613743355012529,
0.00599258368700841,
0.0061314947057375,
0.00631023943682373,
0.00625809348610165,
0.00603038950128192,
0.00577733679041673,
0.00525095238784999,
0.00534843634572765,
0.00502049625563104]
}]
});
});