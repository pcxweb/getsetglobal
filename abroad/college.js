//大學簡介
var collegeJson = [
	{
		"id":"UK",
		"name": "United Kingdom",
		"flag": "/4/uk_-_flag.jpg",
		"list": [
			{"title":"University of Aberdeen","logo":"/16/aberdeen.jpg"},
			{"title":"University of Abertay Dundee","logo":"/65/aber-dundee.jpg"},
			{"title":"Aberystwyth University","logo":"/66/aberystwyth.jpg"},
			{"title":"Anglia Ruskin University","logo":"/5/aru.jpg"},
			{"title":"University of the Arts London","logo":"/156/ual_logo.gif"},
			{"title":"Arts University Bournemouth","logo":"/339/AUB.jpg"},
			{"title":"Aston University","logo":"/1/aston_university.jpg"},
			{"title":"Bangor University","logo":"/67/bangor.jpg"},
			{"title":"University of Bath","logo":"/26/bath.jpg"},
			{"title":"Bath Spa University","logo":"/68/Bath_Spa.jpg"},
			{"title":"University of Bedfordshire","logo":"/69/bedfordshire.jpg"},
			{"title":"Birkbeck College University of London","logo":"/70/birbeck.jpg"},
			{"title":"Birmingham City University","logo":"/17/birmingham-city.jpg"},
			{"title":"University of Birmingham","logo":"/2/birmingham.jpg"},
			{"title":"University College Birmingham","logo":"/109/ucb.jpg"},
			{"title":"University of Bolton","logo":"/111/bolton.jpg"},
			{"title":"Bournemouth University","logo":"/71/bu.jpg"},
			{"title":"University of Bradford","logo":"/112/bradford.jpg"},
			{"title":"University of Brighton","logo":"/114/brighton_university.jpg"},
			{"title":"University of Bristol","logo":"/24/bristol.jpg"},
			{"title":"Brunel University","logo":"/62/brunel.jpg"},
			{"title":"University of Buckingham","logo":"/113/buckingham.jpg"},
			{"title":"University of Cambridge","logo":"/19/cambridge.jpg"},
			{"title":"Canterbury Christ Church University","logo":"/72/cccu.jpg"},
			{"title":"Cardiff Metropolitan University","logo":"/74/CMU_logo.jpg"},
			{"title":"Cardiff University","logo":"/73/cardiff.jpg"},
			{"title":"University of Central Lancashire","logo":"/88/uclan.jpg"},
			{"title":"University of Chester","logo":"/115/chester.jpg"},
			{"title":"University of Chichester","logo":"/12/chichester.jpg"},
			{"title":"City University","logo":"/75/city-university-london.jpg"},
			{"title":"Coventry University","logo":"/76/coventry.jpg"},
			{"title":"Cranfield University","logo":"/77/cranfield.jpg"},
			{"title":"University for the Creative Arts","logo":"/110/uca.jpg"},
			{"title":"University of Cumbria","logo":"/87/cumbria.jpg"},
			{"title":"De Montfort University","logo":"/78/de-montfort.jpg"},
			{"title":"University of Derby","logo":"/116/derby.jpg"},
			{"title":"University of Dundee","logo":"/117/dundee.jpg"},
			{"title":"Durham University","logo":"/27/durham.jpg"},
			{"title":"University of East Anglia","logo":"/118/uea.jpg"},
			{"title":"University of East London","logo":"/119/uel.jpg"},
			{"title":"Edinburgh Napier University","logo":"/90/napier.jpg"},
			{"title":"University of Edinburgh","logo":"/28/edinburgh.jpg"},
			{"title":"University of Essex","logo":"/120/essex.jpg"},
			{"title":"University of Exeter","logo":"/121/exeter.jpg"},
			{"title":"University of Glasgow","logo":"/123/glasgow.jpg"},
			{"title":"Glasgow Caledonian University","logo":"/79/gcu.jpg"},
			{"title":"Glasgow School of Art","logo":"/396/gsa.jpg"},
			{"title":"University of Gloucestershire","logo":"/124/gloucestershire.jpg"},
			{"title":"Goldsmiths University of London","logo":"/80/goldsmiths.jpg"},
			{"title":"University of Greenwich","logo":"/125/greenwich.jpg"},
			{"title":"Heriot Watt University","logo":"/81/heriot-watt.jpg"},
			{"title":"University of Hertfordshire","logo":"/126/hertfordshire.jpg"},
			{"title":"University of Huddersfield","logo":"/128/huddersfield.jpg"},
			{"title":"University of Hull","logo":"/127/hull.jpg"},
			{"title":"Imperial College","logo":"/20/imperial.jpg"},
			{"title":"Instituto Marangoni","logo":"/442/IM.jpg"},
			{"title":"Keele University","logo":"/83/Keele_university.jpg"},
			{"title":"University of Kent","logo":"/129/kent.jpg"},
			{"title":"King's College University of London","logo":"/84/kings-college.jpg"},
			{"title":"Kingston University","logo":"/85/kinston.jpg"},
			{"title":"Lancaster University","logo":"/86/lancaster_logo.jpg"},
			{"title":"University of Leeds","logo":"/130/leeds.jpg"},
			{"title":"Leeds Beckett University","logo":"/89/Leeds_Beckett.jpg"},
			{"title":"Leeds Trinity University","logo":"/338/leedtrin.jpg"},
			{"title":"University of Leicester","logo":"/131/U_of_Leicester.jpg"},
			{"title":"University of Lincoln","logo":"/132/university_of_lincoln_.jpg"},
			{"title":"University of Liverpool","logo":"/133/liverpool.jpg"},
			{"title":"Liverpool Hope University","logo":"/334/liver-hope.jpg"},
			{"title":"Liverpool John Moores University","logo":"/14/ljmu.jpg"},
			{"title":"London Business School University of London","logo":"/9/lbs.jpg"},
			{"title":"London Metropolitan University","logo":"/15/London-met.jpg"},
			{"title":"London South Bank University","logo":"/11/southbank_university.jpg"},
			{"title":"Loughborough University","logo":"/23/loughborough.jpg"},
			{"title":"LSE - University of London","logo":"/21/lse.jpg"},
			{"title":"University of Manchester","logo":"/134/manchester.jpg"},
			{"title":"Manchester Metropolitan University","logo":"/4/man-met.jpg"},
			{"title":"Middlesex University","logo":"/3/Middlesex.jpg"},
			{"title":"University of Newcastle","logo":"/91/newcastle.jpg"},
			{"title":"University of Northampton","logo":"/135/northampton.jpg"},
			{"title":"Northumbria University","logo":"/93/northumbria.jpg"},
			{"title":"Norwich University of the Arts","logo":"/160/NUA.jpg"},
			{"title":"University of Nottingham","logo":"/136/nottingham.jpg"},
			{"title":"Nottingham Trent University","logo":"/94/ntu.jpg"},
			{"title":"University of Oxford","logo":"/18/oxford.jpg"},
			{"title":"Oxford Brookes University","logo":"/333/oxford-brookes.jpg"},
			{"title":"University of Plymouth","logo":"/138/plymouth_university.jpg"},
			{"title":"Plymouth Marjon University","logo":"/82/University_of_St_Mark___St_John.jpg"},
			{"title":"University of Portsmouth","logo":"/137/portsmouth.jpg"},
			{"title":"Queen Margaret University","logo":"/95/qmu.jpg"},
			{"title":"Queen Mary University of London","logo":"/96/qmul.jpg"},
			{"title":"Queen's University Belfast","logo":"/97/queens.jpg"},
			{"title":"Ravensbourne College of Design & Communication","logo":"/159/ravensbourne.jpg"},
			{"title":"University of Reading","logo":"/139/reading.jpg"},
			{"title":"Robert Gordon University","logo":"/98/rgu.jpg"},
			{"title":"Roehampton University","logo":"/99/roehampton.jpg"},
			{"title":"Royal Holloway University of London","logo":"/100/rhul.jpg"},
			{"title":"SAE Institute","logo":"/395/SAE.jpg"},
			{"title":"University of Salford","logo":"/140/salford_university.jpg"},
			{"title":"University of Sheffield","logo":"/141/sheffield.jpg"},
			{"title":"Sheffield Hallam University","logo":"/102/Sheffield_Hallam_University.jpg"},
			{"title":"SOAS University of London","logo":"/101/soas.jpg"},
			{"title":"University of Southampton","logo":"/142/logo-southampton1.png"},
			{"title":"Southampton Solent University","logo":"/103/solent.jpg"},
			{"title":"University of South Wales","logo":"/122/South_Wales.jpg"},
			{"title":"Staffordshire University","logo":"/144/stafordshire.jpg"},
			{"title":"University of St Andrews","logo":"/143/st-andrews.jpg"},
			{"title":"University of Stirling","logo":"/145/stirling.jpg"},
			{"title":"University of Strathclyde","logo":"/146/strathclyde.jpg"},
			{"title":"University of Sunderland","logo":"/147/sunderland.jpg"},
			{"title":"University of Surrey","logo":"/148/surrey.jpg"},
			{"title":"University of Sussex","logo":"/150/sussex.jpg"},
			{"title":"Swansea University","logo":"/104/swansea.jpg"},
			{"title":"Teesside University","logo":"/106/teeside.jpg"},
			{"title":"Trinity St David University of Wales","logo":"/108/trinity.jpg"},
			{"title":"UCL University of London","logo":"/22/ucl.jpg"},
			{"title":"Ulster University","logo":"/149/Ulster_University.jpg"},
			{"title":"University of Warwick","logo":"/25/warwick.jpg"},
			{"title":"University of West London","logo":"/107/west-london.jpg"},
			{"title":"University of Westminster","logo":"/151/westminster.jpg"},
			{"title":"University of the West of England","logo":"/157/uwe.jpg"},
			{"title":"University of the West of Scotland","logo":"/158/uws.jpg"},
			{"title":"University of Winchester","logo":"/152/winchester.jpg"},
			{"title":"University of Wolverhampton","logo":"/153/wolverhampton.jpg"},
			{"title":"University of Worcester","logo":"/154/worcester.jpg"},
			{"title":"University of York","logo":"/155/york_university.jpg"},
			{"title":"York St John University","logo":"/540/York_St_John.jpg"}
		]
	},
	{
		"id":"CN",
		"name": "China",
		"flag": "/2/China--flag.gif",
		"list": [
			{"title": "University of Liverpool","logo": "/133/liverpool.jpg"}
		]
	},
	{
		"id":"USA",
		"name": "USA",
		"flag": "/6/US_-_Flag.png",
		"list": [
			{"title":"University of Alabama at Birmingham","logo":"/545/University-of-Alabama-Birmingham-MHA.jpg"},
			{"title":"Alliant International University","logo":"/553/th.jpg"},
			{"title":"University of Arizona","logo":"/550/th__1_.jpg"},
			{"title":"Ashland University","logo":"/385/Ashland.jpg"},
			{"title":"Bowling Green State University","logo":"/383/BGSU.jpg"},
			{"title":"California State University, Fresno","logo":"/543/csu.jpg"},
			{"title":"Chadron State College","logo":"/555/school_logo_chadron.jpg"},
			{"title":"City College of New York","logo":"/583/City_College_New_York.jpg"},
			{"title":"Cleveland State University","logo":"/551/th__2_.jpg"},
			{"title":"Colorado Mesa University","logo":"/568/cmu.png"},
			{"title":"Colorado State University","logo":"/376/CSU.jpg"},
			{"title":"Drew University","logo":"/450/drew_logo.jpg"},
			{"title":"Florida Atlantic University","logo":"/459/FAU.jpg"},
			{"title":"Florida Polytechnic University","logo":"/569/4001751_logo.jpg"},
			{"title":"George Mason University","logo":"/449/GMU_logo.jpg"},
			{"title":"Hofstra University","logo":"/453/hofstra.jpg"},
			{"title":"Husson University","logo":"/560/Husson_Logo_Color_Medium_300_dpi.jpg"},
			{"title":"University of Idaho","logo":"/548/idaho.jpg"},
			{"title":"James Madison University","logo":"/416/JMU.jpg"},
			{"title":"Kent State University","logo":"/547/Kent_State_University_logo.svg.png"},
			{"title":"Lamar University","logo":"/626/Lamar.jpg"},
			{"title":"University of La Verne","logo":"/382/La_Verne.jpg"},
			{"title":"LIM College","logo":"/571/1133.gif"},
			{"title":"Long Island University","logo":"/483/LIU_Logo.JPG"},
			{"title":"University of Maine","logo":"/417/manine.jpg"},
			{"title":"Marshall University","logo":"/377/Marshall.jpg"},
			{"title":"University of Massachusetts","logo":"/397/UMASS.jpg"},
			{"title":"Mercy College","logo":"/564/mercy_stacked_small.png"},
			{"title":"Monroe College","logo":"/559/th__1_.jpg"},
			{"title":"University of Montana","logo":"/554/um-logo-maroon-copy1.jpg"},
			{"title":"Montana State University","logo":"/386/Montana.jpg"},
			{"title":"Murray State University","logo":"/570/__.png"},
			{"title":"National University","logo":"/572/National_logo.jpg"},
			{"title":"University of Nevada, Reno","logo":"/544/Reno_logo.jpg"},
			{"title":"University of New Hampshire","logo":"/399/01.jpg"},
			{"title":"North Dakota State University","logo":"/384/NDSU.jpg"},
			{"title":"Northeastern Illinois University","logo":"/567/12-neiu-logo.png"},
			{"title":"Northeastern University","logo":"/422/NU.jpg"},
			{"title":"Northern Arizona University","logo":"/387/NAU_logo.gif"},
			{"title":"Northern Kentucky University","logo":"/563/northern_kentucky_university_logo.jpg"},
			{"title":"Nova Southeastern University","logo":"/388/Nova_Southeastern.jpg"},
			{"title":"Ohio University","logo":"/381/ohio-university-logo.jpg"},
			{"title":"Oregon State University","logo":"/378/logos.jpeg"},
			{"title":"Pace University","logo":"/421/Untitled.jpg"},
			{"title":"Pepperdine University","logo":"/451/pepperdine_university_logo.jpg"},
			{"title":"Post University","logo":"/561/th__2_.jpg"},
			{"title":"Roosevelt University","logo":"/420/roosevelt.jpg"},
			{"title":"SAE Institute","logo":"/395/SAE.jpg"},
			{"title":"San Francisco State University","logo":"/562/SFSUemblem.png"},
			{"title":"San Jose State University","logo":"/558/th.jpg"},
			{"title":"Sonoma State University","logo":"/565/Sonoma_01.jpg"},
			{"title":"College of Southern Nevada","logo":"/556/CSN_Logo.svg.png"},
			{"title":"University of South Florida","logo":"/379/USF.jpg"},
			{"title":"St Louis University","logo":"/380/Saint_Louis_University_logo.svg.png"},
			{"title":"Stony Brook University","logo":"/452/sbu.jpg"},
			{"title":"Tarleton State University","logo":"/566/tarleton-state1.jpg"},
			{"title":"Texas A&M Universityâ€“Corpus Christi","logo":"/582/tamucc.jpg"},
			{"title":"University of Tulsa","logo":"/627/uni_of_tulsa.jpg"},
			{"title":"University of California - Berkeley","logo":"/468/berkeley.jpg"},
			{"title":"University of California - Davis","logo":"/467/UC_Davis.jpg"},
			{"title":"University of California - Irvine","logo":"/466/ucirvine.gif"},
			{"title":"University of California - Los Angeles","logo":"/465/ucla-logo.jpg"},
			{"title":"University of California - Riverside","logo":"/473/ucr.jpg"},
			{"title":"University of California - Santa Barbara","logo":"/472/ucsb.jpg"},
			{"title":"University of Virginia","logo":"/463/uva.jpg"},
			{"title":"University of Utah","logo":"/423/university-of-utah.jpg"},
			{"title":"University of Vermont","logo":"/418/vermont.jpg"},
			{"title":"Washington State University","logo":"/549/th.jpg"},
			{"title":"Webster University","logo":"/630/webster_uni.jpg"},
			{"title":"Westcliff University","logo":"/557/WU_Logo_Color_With-Tagline_Final-transparent.gif"},
			{"title":"Western Kentucky University","logo":"/398/WKU.jpg"},
			{"title":"Wichita State University","logo":"/552/Wichita_State_University_422409_i0.jpg"},
			{"title":"Widener University","logo":"/419/logo_stacked_yellow_shield.jpg"},
			{"title":"College of William & Mary","logo":"/471/william___mary.jpg"}
		]
	},
	{
		"id":"CND",
		"name": "Canada",
		"flag": "/11/canada_-_flag.GIF",
		"list": [
			{"title":"Brock University","logo":"/406/brock.jpg"},
			{"title":"University of Manitoba","logo":"/404/Manitoba.jpg"},
			{"title":"University of New Brunswick","logo":"/408/unb.jpg"},
			{"title":"University of Prince Edward Island","logo":"/412/Prince_Edward_Island_University.jpg"},
			{"title":"University of Regina","logo":"/405/Regina.jpg"},
			{"title":"Royal Roads University","logo":"/414/RRU.jpg"},
			{"title":"Simon Fraser University","logo":"/402/sfu.jpg"},
			{"title":"Thompson River University","logo":"/400/tru.jpg"},
			{"title":"Trent University","logo":"/411/trentu.jpg"},
			{"title":"University of Toronto","logo":"/401/uoft.jpg"},
			{"title":"Vancouver Island University","logo":"/413/VIU.jpg"},
			{"title":"University of Western Ontario","logo":"/403/uwo.jpg"},
			{"title":"Wilfred Laurier University","logo":"/407/laurier.jpg"},
			{"title":"University of Windsor","logo":"/410/uwlogo.jpg"},
			{"title":"University of Winnipeg","logo":"/409/winnipeg.jpg"}
		]
	},
	{
		"id":"AU",
		"name": "Australia",
		"flag": "/7/australia_-_flag.gif",
		"list": [
			{"title":"University of Adelaide","logo":"/426/ualogo.jpg"},
			{"title":"Charles Sturt University","logo":"/435/CSU.jpg"},
			{"title":"Curtin University","logo":"/425/curtin-university.jpg"},
			{"title":"Deakin University","logo":"/427/deakin.jpg"},
			{"title":"Edith Cowan University","logo":"/429/ecu.jpg"},
			{"title":"Flinders University","logo":"/433/flinders.jpg"},
			{"title":"Griffith University","logo":"/430/griffith-logo.jpg"},
			{"title":"La Trobe University","logo":"/424/latrobe-uni-logo.jpg"},
			{"title":"Macquarie University","logo":"/432/mq.jpg"},
			{"title":"University of Newcastle","logo":"/428/newcastle.png"},
			{"title":"University of New South Wales","logo":"/585/university-of-new-south-wales.jpg"},
			{"title":"University of Queensland","logo":"/628/_1D6EF86B2E37B59AD8B187616E97383C81374CF8E4FB1F48CF_pimgpsh_fullsize_distr.png"},
			{"title":"RMIT University","logo":"/443/rmit-university.gif"},
			{"title":"SAE Institute","logo":"/395/SAE.jpg"},
			{"title":"University of South Australia","logo":"/431/UNISA.jpg"},
			{"title":"University of Sydney","logo":"/434/usyd.png"},
			{"title":"University of Western Australia","logo":"/441/UWA.jpg"},
			{"title":"Western Sydney University","logo":"/623/wsu.jpg"}
		]
	},
	{
		"id":"NZ",
		"name": "New Zealand",
		"flag": "/8/new-zealand-flag.gif",
		"list": [
			{"title":"SAE Institute","logo":"/395/SAE.jpg"},
			{"title":"University of Auckland","logo":"/458/University_of_Auckland.jpg"},
			{"title":"University of Canterbury","logo":"/456/University_Canterbury.jpg"}
		]
	},
	{
		"id":"IL",
		"name": "Ireland",
		"flag": "/9/irish-flag.jpg",
		"list": [
			{"title":"Dublin Institute of Technology","logo":"/586/dit_logo.jpg"},
			{"title":"University College Dublin","logo":"/446/ucd.jpg"}
		]
	},
	{
		"id":"FN",
		"name": "France",
		"flag": "/23/france-flag.jpg",
		"list": [
			{"title":"Instituto Marangoni","logo":"/442/IM.jpg"}
		]
	},
	{
		"id":"BG",
		"name": "Bulgaria",
		"flag": "/40/Bulgaria_flag.jpg",
		"list": [
			{"title":"Pleven Medical University","logo":"/546/pleven.jpg"}
		]
	},
	{
		"id":"IT",
		"name": "Italy",
		"flag": "/22/italy-flag.gif",
		"list": [
			{"title":"Instituto Marangoni","logo":"/442/IM.jpg"},
			{"title":"Istituto Superiore di Design","logo":"/542/ISTITUTO_SUPERIORE_DI_DESIGN.jpg"}
		]
	},
	{
		"id":"SL",
		"name": "Switzerland",
		"flag": "/18/swiss-flag.jpg",
		"list": [
			{"title":"Business & Hotel Management School","logo":"/477/BHMS.gif"}
		]
	},
	{
		"id":"TL",
		"name": "Thailand",
		"flag": "/17/thai.png",
		"list": [
			{"title":"Lamar University","logo":"/626/Lamar.jpg"},
			{"title":"Webster University","logo":"/630/webster_uni.jpg"}
		]
	}
];

//大學預科課程
var collegeyukeJson = [
	{
		"id":"UK",
		"name": "United Kingdom",
		"flag": "/4/uk_-_flag.jpg",
		"list": [
			{"title": "CEG FoundationCampus","logo": "/33/logo_CEG_01.gif"},
			{"title": "INTO","logo": "/6/into-logo.jpg"},
			{"title": "Kaplan International Pathways","logo": "/32/Kaplan-Logo.jpg"},
			{"title": "King's Education","logo": "/186/Kings_Education.jpg"},
			{"title": "Navitas","logo": "/341/Navitas.jpg"},
			{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"},
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"}
		]
	},
	{
		"id":"USA",
		"name": "USA",
		"flag": "/6/US_-_Flag.png",
		"list": [
			{"title": "CEG FoundationCampus","logo": "/33/logo_CEG_01.gif"},
			{"title": "FLS International","logo": "/366/FLS.jpg"},
			{"title": "INTO","logo": "/6/into-logo.jpg"},
			{"title": "Kaplan International Pathways","logo": "/32/Kaplan-Logo.jpg"},
			{"title": "King's Education","logo": "/186/Kings_Education.jpg"},
			{"title": "Navitas","logo": "/341/Navitas.jpg"},
			{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"},
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"},
			{"title": "University Bridge","logo": "/470/University_Bridge.jpg"}
		]
	},
	{
		"id":"CND",
		"name": "Canada",
		"flag": "/11/canada_-_flag.GIF",
		"list": [
			{"title": "Navitas","logo": "/341/Navitas.jpg"},
			{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"},
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"}
		]
	},
	{
		"id":"AU",
		"name": "Australia",
		"flag": "/7/australia_-_flag.gif",
		"list": [
			{"title": "Kaplan International Pathways","logo": "/32/Kaplan-Logo.jpg"},
			{"title": "Navitas","logo": "/341/Navitas.jpg"},
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"},
			{"title":"Taylors College","logo":"/363/taylors.jpg"}
		]
	},
	{
		"id":"NZ",
		"name": "New Zealand",
		"flag": "/8/new-zealand-flag.gif",
		"list": [
			{"title": "Navitas","logo": "/341/Navitas.jpg"},
			{"title":"Taylors College","logo":"/363/taylors.jpg"}
		]
	},
	{
		"id":"IL",
		"name": "Ireland",
		"flag": "/9/irish-flag.jpg",
		"list": [
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"}
		]
	},
	{
		"id":"NE",
		"name": "Netherlands",
		"flag": "/26/dutch_-_flag.jpg",
		"list": [
			{"title": "CEG FoundationCampus","logo": "/33/logo_CEG_01.gif"},
			{"title": "Study Group International Study Centres","logo": "/31/SGISC.jpg"}
		]
	}
]

//學院
var academyJson = [
	[
		{
			"id":"USA",
			"name": "USA",
			"flag": "/6/US_-_Flag.png",
			"list": [
				{"title": "Community College of Philadelphia","logo": "/576/college_of_philadelphia.jpg"},
				{"title": "Community Colleges of Spokane","logo": "/581/Spokane_Colllege.jpg"},
				{"title": "Ivy Tech Community College","logo": "/580/IVY_TECH.jpg"},
				{"title": "Jackson College","logo": "/575/jackson_college.jpeg"},
				{"title": "Kilgore Community College","logo": "/574/kilgore_college.jpg"},
				{"title": "Mercer County Community College","logo": "/579/mercer_County_Community_College.jpg"},
				{"title": "Pierce College","logo": "/577/pierce_college.jpg"},
				{"title": "Seattle Central Community College","logo": "/369/Seattle.jpg"},
				{"title": "Shoreline Community College","logo": "/573/shoreline_college.jpg"},
				{"title": "Union County College","logo": "/578/union_County_College.jpg"}
			]
		}
	],
	[
		{
			"id":"UK",
			"name": "UK",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title": "Chichester College","logo": "/13/Chi-College_Logo_medium.jpg"},
				{"title": "Guildford College","logo": "/587/guildford_college.jpg"},
				{"title": "Highbury College","logo": "/356/highbury.jpg"},
				{"title": "Le Cordon Bleu","logo": "/391/LCB.jpg"},
				{"title": "Newcastle College","logo": "/331/newcastleCollegeLogo.gif"},
				{"title": "New College Nottingham","logo": "/330/new_college_nottingham.jpg"},
				{"title": "Sheffield College","logo": "/351/sheffield_college.jpg"},
				{"title": "Telford College of Arts & Technology","logo": "/329/Telford.jpg"},
				{"title": "Wakefield College","logo": "/355/wakefield.jpg"},
				{"title": "Walsall College","logo": "/392/Walsall.jpg"}
				
			]
		},
		{
			"id":"AU",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title": "Le Cordon Bleu","logo": "/391/LCB.jpg"}
			]
		},
		{
			"id":"FN",
			"name": "France",
			"flag": "/23/france-flag.jpg",
			"list": [
				{"title": "Le Cordon Bleu","logo": "/391/LCB.jpg"}
			]
		}
	],
	[
		{
			"id":"CND",
			"name": "Canada",
			"flag": "/11/canada_-_flag.GIF",
			"list": [
				{"title": "Alexander College",  "logo": "/617/Alexander_college.jpg"}, 
				{"title": "Ascenda School of Management",  "logo": "/607/Ascenda_School_of_Management.jpg"}, 
				{"title": "Assiniboine Community College",  "logo": "/612/ACC.jpg"}, 
				{"title": "Brescia University College",  "logo": "/616/brescia.jpg"}, 
				{"title": "Brighton College",  "logo": "/621/brighton-college.jpg"}, 
				{"title": "Cambrian College",  "logo": "/606/masterLogo2.png"}, 
				{"title": "Canadian College",  "logo": "/620/___.jpg"}, 
				{"title": "Centennial College",  "logo": "/592/CentennialCollege.jpg"}, 
				{"title": "College of the Rockies",  "logo": "/602/1_member_logo_COTR.jpeg"}, 
				{"title": "Columbia College",  "logo": "/454/columbia.jpg"}, 
				{"title": "Conestoga College",  "logo": "/598/Conestoga_College.png"}, 
				{"title": "Confederation College",  "logo": "/618/confederation_college.jpg"}, 
				{"title": "Durham College",  "logo": "/599/durham.png"}, 
				{"title": "Fanshawe College",  "logo": "/596/image.jpg"}, 
				{"title": "George Brown College",  "logo": "/590/Gbc.jpg"}, 
				{"title": "Holland College",  "logo": "/608/holland_college.png"}, 
				{"title": "Humber College",  "logo": "/588/humber_college.png"}, 
				{"title": "Kings University College",  "logo": "/600/kings_university_college.png"}, 
				{"title": "Langara College",  "logo": "/589/Langara.png"}, 
				{"title": "Mohawk College",  "logo": "/594/mohawk_college.png"}, 
				{"title": "Niagara College",  "logo": "/597/Niagara.png"}, 
				{"title": "RCC Institute of Technology",  "logo": "/611/rccinstitute_logo.jpeg"}, 
				{"title": "Red River College",  "logo": "/601/RRClogo_stackedleftalign_notag.jpg"}, 
				{"title": "Sault College",  "logo": "/603/sault_college.png"}, 
				{"title": "SELC Career College Vancouver",  "logo": "/610/selc.png"}, 
				{"title": "Seneca College",  "logo": "/591/seneca.png"}, 
				{"title": "Sheridan College",  "logo": "/595/sheridan_college.png"}, 
				{"title": "Sprott Shaw college",  "logo": "/367/Sprott_Shaw.jpg"}, 
				{"title": "St Clair College",  "logo": "/605/St.-Clair-College-Logo.jpg"}, 
				{"title": "St Lawrence College",  "logo": "/604/st_-lawrence-college.png"}, 
				{"title": "Toronto Institute of Pharmaceutical Technology",  "logo": "/613/tipt.png"}, 
				{"title": "Western Town College",  "logo": "/614/wtc.png"}, 
				{"title": "Winston College",  "logo": "/609/winston_college.png"}
			]
		}
	],
	[
		{
			"id":"UK7",
			"name": "UK",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title": "Le Cordon Bleu", "logo": "/391/LCB.jpg"}
			]
		},
		{
			"id":"AU7",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title": "Blue Mountains International Hotel Management School", "logo": "/461/BlueMoutains.png"}, 
				{"title": "Charlton Brown", "logo": "/537/Charlton_Brown.jpg"}, 
				{"title": "Einstein College of Australia", "logo": "/531/Einstein.jpg"}, 
				{"title": "Holmes Institute", "logo": "/532/Holmes_Institute.jpg"}, 
				{"title": "Le Cordon Bleu", "logo": "/391/LCB.jpg"}, 
				{"title": "Martin College", "logo": "/460/martin.jpg"}, 
				{"title": "Taylors College", "logo": "/363/taylors.jpg"}, 
				{"title": "Western Institute of Technology", "logo": "/533/western_inst.jpg"}
			]
		},
		{
			"id":"NZ7",
			"name": "New Zealand",
			"flag": "/8/new-zealand-flag.gif",
			"list": [
				{"title": "Taylors College", "logo": "/363/taylors.jpg"}
			]
		},
		{
			"id":"FN7",
			"name": "France",
			"flag": "/23/france-flag.jpg",
			"list": [
				{"title": "Le Cordon Bleu", "logo": "/391/LCB.jpg"}
			]
		}

	]
]


//中学课程
var middleschoolJson = [
	[
		{
			"id":"UK",
			"name": "UK",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title": "Bournemouth Collegiate", "logo": "/354/Bournemouth_Collegiate.jpg" },
				{"title": "Bromsgrove School", "logo": "/36/Bromesgrove_.JPG" },
				{"title": "Buckswood School", "logo": "/480/buckswood_logo.jpg" },
				{"title": "CATS", "logo": "/30/Cats.gif" },
				{"title": "Kent College", "logo": "/37/KC_Logo.jpg" },
				{"title": "Mill Hill", "logo": "/332/Mill_Hill_School.jpg" },
				{"title": "Newbury Hall School", "logo": "/361/Newbury-Hall-School.gif" },
				{"title": "Oxford International Education Group", "logo": "/482/OIEG.jpg" },
				{"title": "Queen Ethelburga's College", "logo": "/40/Queen_ethel_arms.gif" },
				{"title": "Rochester Independent College", "logo": "" },
				{"title": "Rossall School", "logo": "/38/Rossall_logo.gif" },
				{"title": "Ruthin School", "logo": "/534/ruthin.jpg" },
				{"title": "St Edmund's School", "logo": "/39/ses.gif" },
				{"title": "Stover School", "logo": "/353/stover.jpg" }
			]
		},
		{
			"id":"USA",
			"name": "USA",
			"flag": "/6/US_-_Flag.png",
			"list": [
				{"title": "CATS", "logo": "/30/Cats.gif" },
				{"title": "Fairmont Private Schools", "logo": "/364/Fairmont.jpg" },
				{"title": "Oxford International Education Group", "logo": "/482/OIEG.jpg" }
			]
		},
		{
			"id":"CND",
			"name": "Canada",
			"flag": "/11/canada_-_flag.GIF",
			"list": [
				{"title": "Oxford International Education Group", "logo": "/482/OIEG.jpg" }
			]
		},
		{
			"id":"AU",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title": "Brisbane Grammar School", "logo": "/476/Brisbane_Grammar.jpg" },
				{"title": "St Margaret's Anglican Girls' School", "logo": "/475/st_margarets.jpg" },
				{"title": "Woodcroft College", "logo": "/462/woodcroft_college.jpg" }
				
			]
		},
		{
			"id":"SG",
			"name": "Singapore",
			"flag": "/35/singapore_-_flag.gif",
			"list": [
				{"title": "Insworld Institute", "logo": "/478/Insworld.jpg"}
			]
		}	
	],
	[
		{
			"id":"UK2",
			"name": "UK",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title": "Ashbourne College","logo": "/42/ashbourne_logo.gif"}, 
				{"title": "Bellerbys","logo": "/29/bellerbys.jpg"}, 
				{"title": "Brooke House","logo": "/41/Brooke_H.jpeg"}, 
				{"title": "Cambridge Tutors College","logo": "/535/CTC.jpg"}, 
				{"title": "CATS","logo": "/30/Cats.gif"}, 
				{"title": "Lansdowne College","logo": "/394/Lansdowne_Logo.jpg"}, 
				{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"}, 
				{"title": "St Clare's Oxford","logo": "/479/st_clares_oxford.jpg"}
				
			]
		},
		{
			"id":"USA2",
			"name": "USA",
			"flag": "/6/US_-_Flag.png",
			"list": [
				{"title": "CATS","logo": "/30/Cats.gif"}, 
				{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"}
			]
		},
		{
			"id":"CND2",
			"name": "Canada",
			"flag": "/11/canada_-_flag.GIF",
			"list": [
				{"title": "Oxford International Education Group","logo": "/482/OIEG.jpg"}
			]
		},
		{
			"id":"AU2",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title": "Western Institute of Technology","logo": "/533/western_inst.jpg"}
			]
		}

	],
	[
		{
			"id":"UK3",
			"name": "UK",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title": "Diana Princess of Wales International Study Centre","logo": "/360/riddlesworth.jpg"}, 
				{"title": "Kent College","logo": "/37/KC_Logo.jpg"}, 
				{"title": "Rossall School","logo": "/38/Rossall_logo.gif"}, 
				{"title": "International College Sherborne","logo": "/43/sherborne_logo.JPG"}, 
				{"title": "Stover School","logo": "/353/stover.jpg"}
				
			]
		}
	]
]

//私立語言學校
var languageJson = [
	[
		{
			"id":"UK",
			"name": "United Kingdom",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title":"Anglo-Continental","logo":"/161/anglo-continental-logo.jpg"},
				{"title":"Basil Paterson College","logo":"/173/bp_logo.gif"},
				{"title":"Beet Language Centre","logo":"/44/beetlogos.jpg"},
				{"title":"English Language Centre Brighton","logo":"/176/elc_brighton.jpg"},
				{"title":"British Study Centres","logo":"/180/british_study_centres.jpg"},
				{"title":"English in Chester","logo":"/164/eic.jpeg"},
				{"title":"Colchester English Study Centre","logo":"/183/CESE.png"},
				{"title":"Concorde International","logo":"/163/Concorde.jpg"},
				{"title":"Devon School of English","logo":"/175/devon_logo.png"},
				{"title":"Eastbourne School of English","logo":"/174/esoe.jpg"},
				{"title":"EC English Language Centres","logo":"/437/EC_logo.JPG"},
				{"title":"Embassy English","logo":"/10/embassy_english.png"},
				{"title":"Excel English Language School","logo":"/184/excel.gif"},
				{"title":"Exeter Academy","logo":"/165/Exeter-Acad_logo.jpg"},
				{"title":"Frances King School of English","logo":"/45/fk_Logo.jpg"},
				{"title":"Harven School of English","logo":"/166/harven.jpg"},
				{"title":"Hilderstone College","logo":"/177/hilderstone-logo.jpg"},
				{"title":"International House Bristol","logo":"/168/IH_Bristol.jpg"},
				{"title":"International House London","logo":"/7/IH_London_logo.jpg"},
				{"title":"International House Newcastle","logo":"/167/IH_Newcastle.jpg"},
				{"title":"INTO","logo":"/6/into-logo.jpg"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"},
				{"title":"Kaplan International Pathways","logo":"/32/Kaplan-Logo.jpg"},
				{"title":"Katherine & King's College of London","logo":"/447/kkcl.jpg"},
				{"title":"King's Education","logo":"/186/Kings_Education.jpg"},
				{"title":"Language Studies International","logo":"/169/LSI_schools.jpg"},
				{"title":"Leeds English Language School","logo":"/439/Leeds_English.jpg"},
				{"title":"Lewis School of English","logo":"/481/Lewis_School.jpg"},
				{"title":"London School of English","logo":"/187/LSE_logo.jpg"},
				{"title":"LSI Portsmouth","logo":"/179/LSI_logo.jpg"},
				{"title":"Malvern House","logo":"/365/Malvern_H.jpg"},
				{"title":"Meridian School of English","logo":"/624/meridian.jpg"},
				{"title":"Navitas","logo":"/341/Navitas.jpg"},
				{"title":"New School of English","logo":"/629/new_school_logo.jpg"},
				{"title":"Oxford House College","logo":"/171/OHC.jpg"},
				{"title":"Oxford International Education Group","logo":"/482/OIEG.jpg"},
				{"title":"Oxford School of English","logo":"/464/Oxford-School-of-English.jpg"},
				{"title":"Pilgrims","logo":"/358/pilgrims.png"},
				{"title":"Regent","logo":"/8/regent-language-training-logo.jpg"},
				{"title":"Select English","logo":"/469/select_English.jpg"},
				{"title":"Shane Global Language Centres","logo":"/362/Shane.jpg"},
				{"title":"Sidmouth International","logo":"/181/sidmouth.jpg"},
				{"title":"Southampton Language College","logo":"/584/southampton_Language.jpg"},
				{"title":"Southbourne School of English","logo":"/34/logo.gif"},
				{"title":"Stafford House","logo":"/63/SH_logo.jpg"},
				{"title":"St Clare's Oxford","logo":"/479/st_clares_oxford.jpg"},
				{"title":"St Giles International","logo":"/172/SG_logo.jpg"},
				{"title":"Victoria School of English","logo":"/182/VSOE.jpg"},
				{"title":"Wimbledon School of English","logo":"/357/wse_logo.png"}
			]
		},
		{
			"id":"USA",
			"name": "USA",
			"flag": "/6/US_-_Flag.png",
			"list": [
				{"title":"EC English Language Centres","logo":"/437/EC_logo.JPG"},
				{"title":"ELS Language Centers","logo":"/541/ELS.jpg"},
				{"title":"Embassy English","logo":"/10/embassy_english.png"},
				{"title":"FLS International","logo":"/366/FLS.jpg"},
				{"title":"INTO","logo":"/6/into-logo.jpg"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"},
				{"title":"Kaplan International Pathways","logo":"/32/Kaplan-Logo.jpg"},
				{"title":"King's Education","logo":"/186/Kings_Education.jpg"},
				{"title":"Language Studies International","logo":"/169/LSI_schools.jpg"},
				{"title":"Navitas","logo":"/341/Navitas.jpg"},
				{"title":"Oxford House College","logo":"/171/OHC.jpg"},
				{"title":"Oxford International Education Group","logo":"/482/OIEG.jpg"},
				{"title":"St Giles International","logo":"/172/SG_logo.jpg"}
			]
		},
		{
			"id":"CND",
			"name": "Canada",
			"flag": "/11/canada_-_flag.GIF",
			"list": [
				{"title":"EC English Language Centres","logo":"/437/EC_logo.JPG"},
				{"title":"Embassy English","logo":"/10/embassy_english.png"},
				{"title":"English School of Canada","logo":"/445/english_school_canada.jpg"},
				{"title":"International Language Academy of Canada","logo":"/415/___.png"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"},
				{"title":"King George International College","logo":"/368/KGIC_logo.jpg"},
				{"title":"Language Studies International","logo":"/169/LSI_schools.jpg"},
				{"title":"Navitas","logo":"/341/Navitas.jpg"},
				{"title":"Oxford House College","logo":"/171/OHC.jpg"},
				{"title":"Oxford International Education Group","logo":"/482/OIEG.jpg"},
				{"title":"St Giles International","logo":"/172/SG_logo.jpg"}
			]
		},
		{
			"id":"AU",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title":"Discover English","logo":"/455/discover_English.jpg"},
				{"title":"Embassy English","logo":"/10/embassy_english.png"},
				{"title":"International House Brisbane","logo":"/436/IH_Brisbane.jpg"},
				{"title":"INUS Australia","logo":"/370/Inus.jpg"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"},
				{"title":"Kaplan International Pathways","logo":"/32/Kaplan-Logo.jpg"},
				{"title":"Language Studies International","logo":"/169/LSI_schools.jpg"},
				{"title":"Navitas","logo":"/341/Navitas.jpg"},
				{"title":"Oxford House College","logo":"/171/OHC.jpg"}
			]
		},
		{
			"id":"NZ",
			"name": "New Zealand",
			"flag": "/8/new-zealand-flag.gif",
			"list": [
				{"title":"Embassy English","logo":"/10/embassy_english.png"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"},
				{"title":"Language Studies International","logo":"/169/LSI_schools.jpg"},
				{"title":"Navitas","logo":"/341/Navitas.jpg"}
			]
		},
		{
			"id":"IL",
			"name": "Ireland",
			"flag": "/9/irish-flag.jpg",
			"list": [
				{"title":"Atlas Language School","logo":"/538/atlas-logo.jpg"},
				{"title":"Frances King School of English","logo":"/45/fk_Logo.jpg"},
				{"title":"Kaplan International English","logo":"/622/kaplan_english.png"}
			]
		},
		{
			"id":"PP",
			"name": "Philippines",
			"flag": "/27/philippine_flag.png",
			"list": [
				{"title":"Genius English","logo":"/375/GeniusEnglishLogo-web.jpg"}
			]
		}
	],
	[
		{
			"id":"UK",
			"name": "United Kingdom",
			"flag": "/4/uk_-_flag.jpg",
			"list": [
				{"title":"Anglia Ruskin University","logo":"/5/aru.jpg"},
				{"title":"University of the Arts London","logo":"/156/ual_logo.gif"},
				{"title":"University of Bath","logo":"/26/bath.jpg"},
				{"title":"Bath Spa University","logo":"/68/Bath_Spa.jpg"},
				{"title":"Canterbury Christ Church University","logo":"/72/cccu.jpg"},
				{"title":"Chichester College","logo":"/13/Chi-College_Logo_medium.jpg"},
				{"title":"University of Edinburgh","logo":"/28/edinburgh.jpg"},
				{"title":"University of Gloucestershire","logo":"/124/gloucestershire.jpg"},
				{"title":"Guildford College","logo":"/587/guildford_college.jpg"},
				{"title":"INTO","logo":"/6/into-logo.jpg"},
				{"title":"London Metropolitan University","logo":"/15/London-met.jpg"},
				{"title":"Newcastle College","logo":"/331/newcastleCollegeLogo.gif"},
				{"title":"New College Nottingham","logo":"/330/new_college_nottingham.jpg"},
				{"title":"Northumbria University","logo":"/93/northumbria.jpg"},
				{"title":"Nottingham Trent University","logo":"/94/ntu.jpg"},
				{"title":"Oxford Brookes University","logo":"/333/oxford-brookes.jpg"},
				{"title":"Sheffield College","logo":"/351/sheffield_college.jpg"},
				{"title":"Sheffield Hallam University","logo":"/102/Sheffield_Hallam_University.jpg"},
				{"title":"SOAS University of London","logo":"/101/soas.jpg"},
				{"title":"University of Stirling","logo":"/145/stirling.jpg"},
				{"title":"Telford College of Arts & Technology","logo":"/329/Telford.jpg"},
				{"title":"York St John University","logo":"/540/York_St_John.jpg"}
				
			]
		},
		{
			"id":"USA",
			"name": "USA",
			"flag": "/6/US_-_Flag.png",
			"list": [
				{"title":"INTO","logo":"/6/into-logo.jpg"},
				{"title":"University of San Diego - American Language Institute","logo":"/390/USDSU.jpg"}
			]
		},
		{
			"id":"CND",
			"name": "Canada",
			"flag": "/11/canada_-_flag.GIF",
			"list": [
				{"title":"Camber College","logo":"/615/camber_college.jpg"},
				{"title":"Thompson River University","logo":"/400/tru.jpg"}
			]
		},
		{
			"id":"AU",
			"name": "Australia",
			"flag": "/7/australia_-_flag.gif",
			"list": [
				{"title":"University of South Australia","logo":"/431/UNISA.jpg"}
			]
		}
	]
	
]