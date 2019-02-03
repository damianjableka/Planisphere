var parametry={
skala_legend:1.5,
deklinacja_min:-50, //stopnie 
jasnosc_graniczna_nazw:2.35,
stD_glow_gwiazdy:6,  //7863:3, 15020:6
stD_glow_DM:60,  //7863:30, 15020:60
stD_glow_tytul:0,
rozmiar_glow_gwiazd:1.2,
rozmiar_gwiazd:1,
jasnosc_graniczna_mglawic:{
	galaktyka:8,
	kulista:7,
	otwarta:5.5,
	emisyjna:8,
	refleksyjna:9,
	planetarna:13.8,
},
skok_rownoleznikow:20,//stopnie
skok_poludnikow:2,//h
rozmiar_czcionki_tytul: 20,
rozmiar_czcionki_godzinnej: 4, //deg
rozmiar_czcionki_kierunki: 3.2,
rozmiar_czcionki_azymut: 2.8,
inkrement_drogi_mlecznej: 3, // gdy nie sa wszystkie punkty DM jest bardziej okrag³a
rozmiar_czcionki_nazwy:1.6,//xres* 1.7/(180+2*45) // normalizowany stopien
rozmiar_czcionki_jasnych:1.2,
rozmiar_czcionki_rozwnolezniki:1.1,//// normalizowany stopien
rozmiar_czcionki_poludniki:1.2,// normalizowany stopien
rozmiar_mglawic:0.25,// normalizowany stopien
mglawice_grubosc_linii:2.2,//1.1,//
rozmiar_czcionki_mglawic:1.1,
rozmiar_gwiazd:1,
grubosc_granice:2.2,
rysunki_grubosc:2.2,
rownik_grubosc:2.2,
zegar:{
    rozmiar_czcionki_minut:0.7, // procent rozmiaru czcionki godzin
	tiki:{
	   dlugosc:{
			jeden:3,
			dziesiec:6,
			trzydziesci:12,
			godzina:20,
		},
		grubosc:{
			jeden:7,//1,
			dziesiec:9,//1.5,
			trzydziesci:11,//2,
			godzina:13,//3,
		},
	},
},
ekliptyka:{
	rozmiar_czcionki:0.5,
	prezroczystoscM:0.85,
	tiki:{
		miesiac:0.5,
		piecg:0.4,
		piecd:0.2,
		jedeng:0.3,
		jedend:0.1,
		grubosc_jeden:2,
		grubosc_piec:3,
		grubosc_linii:4,
		},
	},
horyzont:{
	gorny_brzeg:-0.987,
	brzeg_skali:-12,//
	tiki:{
		jednosc:-3,
		dziesiec:-4,
		trzydziesci:-5,
		dziewiedziesat:-6,
		},
	grubosc_tkow:9,//2.2,
	},
poludniki:{
	grubosc:2,
	koniec_d:81,
	koniec_k:83,
	text_delta_rownik:0.3,
	text_delta_dwa:0.3,//80.1
},
skala_roczna:{	szerokosc:20, //stopnie
				stroke:5,
				rozmiar_czcionki_dni:0.6,// procent rozmiaru czcionki miesiecy
				tiki:{
					dlugosc:{
						miesiac:function(){return (parametry.deklinacja_min)},
						dziesiec:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/4)},
						piec:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/3)},
						zwykly:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/2)},
							},
					grubosc:{
						miesiac:function(){return parametry.skala_roczna.stroke}, //stroke
						dziesiec:function(){return parametry.skala_roczna.stroke*3/4},
						piec:function(){return parametry.skala_roczna.stroke/2},
						zwykly:function(){return parametry.skala_roczna.stroke/4},
							}
					
					}
			},
kolory:{tlo_kwadrat:'#ffffff',//kwadrat- œcinki z mapy
		krawedz: '#000000',
		tlo_skali_rocznej: '#ffffff',
		tlo_mapy: '#051031',
		DM: '#17244d',
		rysunki: '#154e03',
		granice: '#444488',
		tiki_skali_rocznej: '#777777',
		rownik: '#3333ff',
		ekliptyka_linia: '#ffff77',
		ekliptyka_linia2: '#ff0000',
		ekliptyka_tiki: '#ffff77',
		rownolezniki_opis: '#7777dd',
		rownolezniki: '#3333aa',
		poludniki_opis: '#777777',
		poludniki: '#777777',
		nazwy_gwiazdozbiorow_stroke: '#06799a',
		nazwy_gwiazdozbiorow_fill: '#0fc1f5',
		nazwy_gwiazd: '#444444',
		tarcza_zegarowa: '#000000',//'#333333',//#09bff5',//kwadrat wokó³ tarczy zegara
		skala_zegarowa: '#000000',//'#001d26',//t³o
		nazwy_mglawic: '#7a7c7d',
		mglawice: '#9fa0a2',
		tlo_skali_azymutu: '#000000',//'#222222',
		tiki_horyzontu: '#37c90a',
		czcionak_kierunku: '#37c90a',
		czcionak_azymut: '#37c90a',
		rownik:"#0b87ab",
		obrys_menu:"#445796",
		czcionka_menu:"#eeeeee",
		siatka_hor:"#37c90a",
		},
}