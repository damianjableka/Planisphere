var parametry={
deklinacja_min:-50, //stopnie 
jasnosc_graniczna_nazw:2.2,
jasnosc_graniczna_mglawic:6,
skok_rownoleznikow:20,//stopnie
skok_poludnikow:2,//h
rozmiar_czcionki_godzinnej: 20, //px
rozmiar_czcionki_kierunki: 18,
rozmiar_czcionki_azymut: 12,
poludniki:{
koniec_d:81,
koniec_k:83,
text_delta_rownik:0.3,
text_delta_dwa:0.3,//80.1
},
skala_roczna:{	szerokosc:20, //stopnie
				stroke:2,
				tiki:{
					dlugosc:{
						miesiac:function(){return (parametry.deklinacja_min)},
						dziesiec:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/4)},
						piec:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/3)},
						zwykly:function(){return (parametry.deklinacja_min-parametry.skala_roczna.szerokosc/2)},
							},
					grubosc:{
						miesiac:function(){return parametry.skala_roczna.stroke}, //stroke
						dziesiec:function(){return this.miesiac*3/4},
						piec:function(){return this.miesiac/2},
						zwykly:function(){return this.miesiac/4},
							}
					
					}
			},
kolory:{tlo_kwadrat:'#444444',
		krawedz: '#000000',
		tlo_skali_rocznej: '#ffffff',
		tlo_mapy: '#051031',
		DM: '#17244d',
		rysunki: '#154e03',
		granice: '#444488',
		tiki_skali_rocznej: '#777777',
		rownik: '#3333ff',
		ekliptyka_linia: '#ffff77',
		ekliptyka_tiki: '#ffff77',
		rownolezniki_opis: '#7777dd',
		rownolezniki: '#3333aa',
		poludniki_opis: '#777777',
		poludniki: '#777777',
		nazwy_gwiazdozbiorow_stroke: '#760067',
		nazwy_gwiazdozbiorow_fill: '#4a0942',
		nazwy_gwiazd: '#444444',
		tarcza_zegarowa: '#535353',
		skala_zegarowa: '#3a3a3a',
		nazwy_mglawic: '#ff0000',
		mglawice: '#ff0000',
		tlo_skali_azymutu: '#222222',
		tiki_horyzontu: '#297c10',
		czcionak_kierunku: '#37c90a',
		czcionak_azymut: '#1c6506',
		},
}
