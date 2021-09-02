import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
interface MarkerComponents {
  id: string;
  header: string;
  address: string;
  contact?: string;
  price?: string;
  openHours?: string;
  driveIn?: string;
  waitTime?: string;
  translate?: string;
  lon: number;
  lat: number;
}

const icons: MarkerComponents[] = [
  {
    id: "1",
    header: "HRVATSKI ZAVOD ZA JAVNO ZDRAVSTVO",
    address: "Rockefellerova 2, 10 000 Zagreb",
    contact: "covid@hzjz.hr",
    price: "150,00 kn(390,00 kn)",
    openHours:
      "Svaki radni dan od 07:30 – 09:30 sati te subotom od 08:00 – 10:00 sati",
    driveIn: "DA",
    waitTime: "24 - 48 sati",
    translate: "DA - DA",
    lon: 15.9809638,
    lat: 45.8291116,
  },
  {
    id: "2",
    header: "NZJZ DR. ANDRIJA ŠTAMPAR",
    address: "Mirogojska cesta 16,10 000 Zagreb",
    contact: "covidtest@stampar.hr",
    price: "500,00 Kn",
    openHours:
      "Od ponedjeljka do petka od 8 do 14 h, subotom i nedjeljom od 8 do 12 sati",
    driveIn: "DA",
    waitTime: "24 sata",
    translate: "DA - DA",
    lon: 15.9806294,
    lat: 45.8315145,
  },
  {
    id: "3",
    header: "DOM ZDRAVLJA ZAGREBAČKE ŽUPANIJE,Samobor",
    address:
      "Stažnje parkiralište Autobusnog kolodvora Samobor, 151. samoborske brigade HV",
    contact: "01 3330 751",
    price: "",
    openHours: "Prije dolaska potrebno je dogovoriti termin",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 15.7159625,
    lat: 45.808274,
  },
  {
    id: "4",
    header: "KLINIKA ZA INFEKTIVNE BOLESTI DR. FRAN MIHALJEVIĆ",
    address: "Mirogojska 8,10 000 Zagreb",
    contact: "bfm@bfm.hr",
    price: "150,00 kn (501,49 Kn)",
    openHours:
      "radnim danom od 8.00 do 11.00 sati, subotom od 8.00 do 10.00 sati RT-PCR, radnim danom od 11.00 do 17.00 sati, subotom od 10.00-14.00 sati, nedjeljom i blagdanom od 08.00-14.00 sati",
    driveIn: "NE",
    waitTime: "24 - 48 sati",
    translate: "DA - DA",
    lon: 15.9806834,
    lat: 45.8304653,
  },
  {
    id: "5",
    header: "ZJZ Brodsko-posavske županije ",
    address:
      "Vladimira Nazora 2a, Slavonski Brod ulaz preko puta Obrtničke škole (siva vrata) kod kontejnera ",
    contact: "035/444-769 ",
    price: "590,00 kn (700,00 kn, 990,00 kn)",
    openHours: "Obavezna najava Radnim danom od 7:00 - 10:00h",
    driveIn: "DA",
    waitTime: "U roku 5 sati, ili isti dan (i vikendom)",
    translate: "DA - DA",
    lon: 18.0262757,
    lat: 45.1562584,
  },
  {
    id: "6",
    header: "ZJZ DUBROVAČKO-NERETVANSKE ŽUPANIJE",
    address: "Ul. dr. Ante Šercera 4a, 20 000 Dubrovnik",
    contact: "mikrobiologija@zzjzdnz.hr",
    price: "650,00 kn (1.000,00kn)",
    openHours: "07:30 do 10:00 sati od ponedjeljka do subote",
    driveIn: "NE",
    waitTime: "Do 4 ili do 24 sata",
    translate: "DA - NE",
    lon: 18.0764078,
    lat: 42.648001,
  },
  {
    id: "7",
    header: "OB DUBROVNIK",
    address: "Dr. Roka Mišetića 2, 20 000 Dubrovnik",
    contact: "info@covid.test@bolnica-du.hr ",
    price: "650,00 Kn",
    openHours:
      "Svaki radni dan i subotom od 7:30 do 10:00 h na lokaciji DRIVE-IN testiranje",
    driveIn: "DA",
    waitTime: "Od 12 do 24 sata",
    translate: "DA - NE",
    lon: 18.0757673,
    lat: 42.647708,
  },
  {
    id: "8",
    header: "DOM ZDRAVLJA DUBROVNIK",
    address: "Dr. Ante Starčevića 1,20 000 Dubrovnik",
    contact: "020 641 613,099 5291 888, covid19@domzdravljadubrovnik.hr",
    price: "",
    openHours: "07:00 do 19:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 18.0940339,
    lat: 42.6474745,
  },
  {
    id: "9",
    header: "Dom zdravlja Dubrovnik",
    address: "Vatroslava Lisinskog 60,20 000 Dubrovnik (Auto kamp Solitudo)",
    contact:
      "ambulanta COVID-19 099 5298 734, amb.za.covid@dom-zdravlja-korcula.hr",
    price: "",
    openHours: "Svaki dan od 08:00 do 20:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 18.070536,
    lat: 42.662093,
  },
  {
    id: "10",
    header: "DOM ZDRAVLJA KORČULA",
    address: "Ulica 57 br.5, 20 260 Korčula",
    contact:
      "ambulanta COVID-19 099 5298 734, amb.za.covid@dom-zdravlja-korcula.hr",
    price: "650,00 Kn",
    openHours:
      "Ponedjeljkom, srijedom i petkom od 11 do 13 sati; utorkom, četvrtkom i nedjeljom od 15 sati; subotom u 8 sati",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 17.1367352,
    lat: 42.9496227,
  },
  {
    id: "11",
    header: "DOM ZDRAVLJA KORČULA - OREBIĆ	",
    address: "hotel Orsan (Šetalište kralja Petra Krešimira IV 29)",
    contact: "099 5298 734, amb.za.covid@dom-zdravlja-korcula.hr",
    price: "",
    openHours: "Ponedjeljkom, srijedom i petkom od 12 sati",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 17.157319,
    lat: 42.9749227,
  },
  {
    id: "12",
    header: "ZJZ ISTARSKE ŽUPANIJE",
    address: "Nazorova ul. 23,52 000 Pula",
    contact: "Obvezna prethodna najava:099 5298 222, covidtest@zzjziz.hr",
    price: "750,00 Kn",
    openHours: "Svaki dan osim nedjelje (11:00 - po prethodnoj najavi)",
    driveIn: "",
    waitTime: "do 24 sata",
    translate: "DA - NE",
    lon: 13.8491123,
    lat: 44.8615053,
  },
  {
    id: "13",
    header: "ISTARSKI DOM ZDRAVLJA PULA",
    address: "Flanatička 27,52 100 Pula",
    contact: "COVID-19 ambulanta 095 4321 879",
    price: "",
    openHours: "Od ponedjeljka do nedjelje od 08:00 -20:00",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 13.8504412,
    lat: 44.8672938,
  },

  {
    id: "14",
    header: "ISTARSKI DOM ZDRAVLJA LABIN",
    address: "Sv. Mikule 2,52 220 Labin",
    contact: "COVID-19 ambulanta 095 4321 881",
    price: "",
    openHours: "Od ponedjeljka do petka od 13:00 - 18:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 14.1185004,
    lat: 45.1001159,
  },
  {
    id: "15",
    header: "ISTARSKI DOM ZDRAVLJA ROVINJ",
    address: "Istarska bb,52 210 Rovinj",
    contact: "COVID-19 ambulanta 095 4321 874",
    price: "",
    openHours: "Od ponedjeljka do petka od 13:00 - 18:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 13.640683,
    lat: 45.0809496,
  },
  {
    id: "16",
    header: "ISTARSKI DOM ZDRAVLJA PAZIN",
    address: "Jurja Dobrile 1,52 000 Pazin",
    contact: "COVID-19 ambulanta 095 4321 875",
    price: "",
    openHours: "Od ponedjeljka do petka od 09:00 - 11:00 te 15:00 - 18:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 13.9417292,
    lat: 45.2389894,
  },
  {
    id: "17",
    header: "ISTARSKI DOM ZDRAVLJA POREČ",
    address: "M.Giosefi 2, 52 210 Poreč",
    contact: "COVID-19 ambulanta 095 4321 876 ",
    price: "",
    openHours: "Od ponedjeljka do petka od 11:00 - 18:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 13.6057907,
    lat: 45.2275291,
  },
  {
    id: "18",
    header: "ISTARSKI DOM ZDRAVLJA BUZET",
    address: "Goričica bb, 52 420 Buzet",
    contact: "COVID-19 ambulanta 095 4321 882",
    price: "",
    openHours: "Od ponedjeljka do petka od 09:00 - 11:00 te 15:00 - 18:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 13.9635076,
    lat: 45.4087849,
  },
  {
    id: "19",
    header: "ISTARSKI DOM ZDRAVLJA UMAG",
    address: "E. Pascali 3,52 470 Umag",
    contact: "COVID-19 ambulanta 095 4321 880",
    price: "",
    openHours:
      "Pon, sri. i pet. od 12:00 - 17:00 te uto. i čet. od 08:00 - 12:00",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 13.5246194,
    lat: 45.4328169,
  },
  {
    id: "20",
    header: "ZAVOD ZA JAVNO ZDRAVSTVO LIČKO-SENJSKE ŽUPANIJE",
    address: "Senjskih žrtava 2 ,53000 Gospić",
    contact:
      "isključivo po narudžbi 053/573-656(pon.-pet. od 8:00; prema zakazanom terminu), mikrobiologija@zzjzlsz.hr",
    price: "650,00 kn",
    openHours:
      "od ponedjeljka do petka u 8:00 sati nadalje prema ranije zakazanom terminu",
    driveIn: "",
    waitTime: "24 sata",
    translate: "",
    lon: 15.3748271,
    lat: 44.5479505,
  },
  {
    id: "21",
    header: "ZJZ MEĐIMURSKE ŽUPANIJE",
    address:
      "COVID kontejneru na parkiralištu iza ŽB Čakovec, Svetojelenska cesta",
    contact: "040 386 841 (7:00 - 15:00h), mikrobiologija@zzjz-ck.hr",
    price: "500,00 kn(1.000,00 kn)",
    openHours: "Od 07:30 radnim danom prema prethodnom telefonskom dogovoru",
    driveIn: "",
    waitTime: "do 12 sati",
    translate: "DA - NE",
    lon: 16.4320017,
    lat: 46.3950611,
  },
  {
    id: "22",
    header: "ZJZ OSJEČKO-BARANJSKE ŽUPANIJE",
    address: "Ul. Franje Krežme 1, 31 000 Osijek",
    contact: "031 225 771, 031 225 761, mikrobiologija.zzjz@gmail.com",
    price: "400,00 kn(700,00 kn)",
    openHours: "Svaki radni dan od 08:00 - 10:00",
    driveIn: "",
    waitTime: "do 24 sata	",
    translate: "DA - NE",
    lon: 18.6876505,
    lat: 45.5583397,
  },
  {
    id: "23",
    header: "KBC OSIJEK",
    address: "Ul. Josipa Huttlera 4, 31 000 Osijek",
    contact: "031 511 050 ",
    price: "698,21 Kn",
    openHours: "Od ponedjeljka do subote od 07:30 - 10:30",
    driveIn: "",
    waitTime: "do 24 sata",
    translate: "DA - NE",
    lon: 18.7145154,
    lat: 45.5577195,
  },
  {
    id: "24",
    header: "OŽB Požega",
    address: "Osječka 107",
    contact: "034 254 548",
    price: "600,00 Kn",
    openHours: "Uzimanje uzoraka u 8:00 sati",
    driveIn: "NE",
    waitTime: "7 - 9 sati",
    translate: "DA - NE",
    lon: 17.6991243,
    lat: 45.34407,
  },
  {
    id: "25",
    header: "Zavod za javno zdravstvo PSŽ",
    address:
      "Dom zdravlja PSŽ, Matije Gupca 10 (pon., sri., pet.), Pakrac, Bolnička 68 (uto. i čet.)",
    contact: "",
    price: "490,00 Kn",
    openHours: "	Radnim danom 12-14 sati i subotom 10-12 sati",
    driveIn: "",
    waitTime: "48 sati",
    translate: "",
    lon: 17.1898705,
    lat: 45.4323854,
  },
  {
    id: "26",
    header: "NZZJZ PRIMORSKO-GORANSKE ŽUPANIJE",
    address: "Krešimirova ul. 52 a,51 000 Rijeka",
    contact:
      "051 334 530 (od 07:00-15:00), nakon radnog vremena:091 1435163,091 7234573 mis.kancelarija@zzjzpgz.hr, Pravne osobe: narucivanje.poslovni@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours:
      "ispred glavnog ulaza u sjedište NZZJZ-a, od ponedjeljka do subote od 08:00 - 12:00",
    driveIn: "DA",
    waitTime: "do 24 sata",
    translate: "DA - NE",
    lon: 14.4255815,
    lat: 45.3322612,
  },
  {
    id: "27",
    header: "Ispostava Mali Lošinj",
    address: "D. Skopinića 4, 51 550 Mali Lošinj",
    contact: "051 233 574 , senka.stojanovic@zzjzpgz.hr ",
    price: "490,00 Kn",
    openHours:
      "Pon, uto, čet i pet, od 08:00 - 09:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati",
    translate: "",
    lon: 14.4638737,
    lat: 44.5332996,
  },
  {
    id: "28",
    header: "Ispostava Cres",
    address: "Turion 26, 51 557 Cres",
    contact: " 051 572 218 , epid.cres@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours: "Pon, uto i pet, od 10:00 - 11:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati",
    translate: "",
    lon: 14.4085817,
    lat: 44.9624287,
  },
  {
    id: "29",
    header: "Ispostava Rab",
    address: "Palit 143a, 51 280 Rab",
    contact: "051 776 924 , epidemiologija.rab@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours: "Pon, sri i pet, od 08:00 - 09:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati",
    translate: "",
    lon: 14.7578583,
    lat: 44.7638748,
  },
  {
    id: "30",
    header: "Ispostava Krk",
    address: "Vinogradska 2b, 51 500 Krk",
    contact: "051 221 955 epidemiologija.krk@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours:
      "Pon, uto, čet i pet, od 08:00 - 09:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati",
    translate: "",
    lon: 14.5698248,
    lat: 45.0286566,
  },
  {
    id: "31",
    header: "Ispostava Crikvenica",
    address: "Kotorska ulica bb,51 260 Crikvenica",
    contact: "051 241 055",
    price: "490,00 Kn",
    openHours:
      "Od ponedjeljka do petka od 08:00 - 09:00 (uz telefonsku najavu)",
    driveIn: "",
    waitTime: "do 48 sati",
    translate: "",
    lon: 14.694578,
    lat: 45.175701,
  },

  {
    id: "32",
    header: "DOM ZDRAVLJA OPATIJA",
    address: "Stubište dr. Vande Ekl 1,51 410 Opatija",
    contact: "051 718 067, epidemiologija.opatija@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours:
      "Od ponedjeljka do petka od 08:00 - 10:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati	",
    translate: "",
    lon: 14.3029252,
    lat: 45.3341836,
  },
  {
    id: "33",
    header: "Ispostava Delnice",
    address: "I.G. Kovačića 1, Delnice",
    contact: "051 814 097 , epidemiologija.delnice@zzjzpgz.hr",
    price: "490,00 Kn",
    openHours: "Pon, čet i pet, od 08:00 - 09:00 (poželjna telefonska najava)",
    driveIn: "",
    waitTime: "do 48 sati	",
    translate: "",
    lon: 14.8040221,
    lat: 45.3981705,
  },
  {
    id: "34",
    header: "KBC Rijeka, Klinički zavod za kliničku mikrobiologiju",
    address: "Krešimirova 42 (ispred ulaza u Hitni trakt)",
    contact: "051 658 844 ili pcr-covid@kbc-rijeka.hr",
    price: "490,00 Kn",
    openHours:
      "svakog radnog dana i vikendom od 08.30 do 09.30 i od 12 do 13 sati",
    driveIn: "",
    waitTime: "do 24 sata	",
    translate: "",
    lon: 14.4265066,
    lat: 45.3320368,
  },
  {
    id: "35",
    header: "ZJZ Sisačko-moslavačke županije",
    address: "Ul. Kralja Tomislava 1, Sisak",
    contact: "",
    price: "",
    openHours: "Svaki radni dan od 7.30 do 9.30",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 16.3745472,
    lat: 45.4840339,
  },
  {
    id: "36",
    header: "KBC SPLIT",
    address: "Spinčićeva ul. 1, 21 000 Split",
    contact: "Nema mogućnosti naručivanja",
    price: "698,00 Kn",
    openHours: "",
    driveIn: "",
    waitTime: "do 12 sati",
    translate: "DA - NE",
    lon: 16.4579709,
    lat: 43.5041092,
  },
  {
    id: "37",
    header: "NZJZ SPLITSKO-DALMATINSKE ŽUPANIJE",
    address: "Vukovarska ul. 46, 21 000 Split",
    contact:
      "Naručivanje isključivo putem nadležnog liječnika ili online https://prijavnicentar.hr/hr_HR/testiranje/split",
    price: "400,00 kn",
    openHours:
      "od 07:00 do 19:00 sati, radnim danima i subotom bez prethodne prijave i rezervacije termina",
    driveIn: "DA",
    waitTime: "24 do 48 sati",
    translate: "DA - NE",
    lon: 16.4500388,
    lat: 43.5111228,
  },
  {
    id: "38",
    header: "Zračna luka Split",
    address: "Cesta Dr. Franje Tuđmana 1270, 21217, Kaštel Štafilić",
    contact: "",
    price: "400,00 Kn",
    openHours:
      "od 07:00 do 20:00 sati, svakim danom bez prethodne prijave i rezervacije termina.",
    driveIn: "",
    waitTime: "",
    translate: "DA - NE",
    lon: 16.2989364,
    lat: 43.5367144,
  },
  {
    id: "39",
    header: "Dom zdravlja Makarska",
    address: "Ulica Stjepana Ivičevića bb, 21300 Makarska",
    contact: "",
    price: "",
    openHours: "Radnim danom od 07:00 - 08:30",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 17.0218101,
    lat: 43.292536,
  },
  {
    id: "40",
    header: "NZJZ SDŽ Sinj, Gradski stadion NK Junak",
    address: "Put šumarije 1a, Sinj	",
    contact:
      "Isključivo uz prethodno naručivanje (od 30.11.) https://www.nzjz-split.hr/index.php/2-uncategorised/455-testiranje-na-sars-cov-2-online-narucivanje",
    price: "400,00 Kn",
    openHours: "Radnim danom od 7:15 do 10:00",
    driveIn: "",
    waitTime: "	",
    translate: "",
    lon: 16.6531991,
    lat: 43.7033111,
  },
  {
    id: "41",
    header: "Grad Makarska ",
    address: "Trg Hrpina 1 21300 Makarska",
    contact:
      "https://makarska.hr/novosti/svi-punktovi-za-testiranje-na-covid-19-u-makarskoj 099 747 40 58",
    price: "200,00 Kn (650,00Kn) ",
    openHours: "Svakim danom od 8:00 - 14:00 i 16:00 - 22:00",
    driveIn: "",
    waitTime: "24 sata - 20 min",
    translate: "DA - NE",
    lon: 17.0198067,
    lat: 43.2944144,
  },
  {
    id: "42",
    header: "Grad Makarska",
    address: "Lička 21, 21300 Makarska",
    contact:
      "https://makarska.hr/novosti/svi-punktovi-za-testiranje-na-covid-19-u-makarskoj, 099 747 40 58",
    price: "200,00 Kn (650,00Kn)",
    openHours: "Svakim danom od 8:00 - 14:00",
    driveIn: "",
    waitTime: "24 sata - 20 min",
    translate: "DA",
    lon: 17.0101003,
    lat: 43.3049614,
  },
  {
    id: "43",
    header: "ZJZ ŠIBENSKO-KNINSKE ŽUPANIJE",
    address: "Ul. Matije Gupca 74, 22 000 Šibenik",
    contact: "022 341 232, narudzba.covid@zzjz-sibenik.hr",
    price: "650,00 Kn",
    openHours: "Od ponedjeljka do petka prema dogovoru",
    driveIn: "NE",
    waitTime: "48 sati",
    translate: "DA - NE",
    lon: 15.9015773,
    lat: 43.7331456,
  },
  {
    id: "44",
    header: "OB ŠIBENIK",
    address: "Stjepana Radića 83, 22 000 Šibenik",
    contact: "",
    price: "",
    openHours: "",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 15.8989996,
    lat: 43.73208,
  },
  {
    id: "45",
    header: "OPĆA VETERANSKA BOLNICA 'HRVATSKI PONOS'",
    address: "Kralja Svetoslava Suronje 12, 22 300 Knin",
    contact: "",
    price: "",
    openHours: "",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 16.2148109,
    lat: 44.052377,
  },
  {
    id: "46",
    header: "ZJZ VARAŽDINSKE ŽUPANIJE",
    address: "Ul. Ivana Meštrovića 1/11 , 42 000 Varaždin",
    contact:
      "042 653 130 radnim danom od 10:00 - 14:00 sati epidemiologija@zzjzzv.hr",
    price: "400,00 Kn",
    openHours: "Prema dogovoru.",
    driveIn: "DA",
    waitTime: "do 24 sata",
    translate: "DA - NE",
    lon: 16.3285122,
    lat: 46.3026425,
  },
  {
    id: "47",
    header: "Dom zdravlja Varaždin",
    address: "Nova lokacija: kod Arene Varaždin",
    contact: "",
    price: "",
    openHours: "Svaki dan od 8 - 11 te od 16 - 19",
    driveIn: "DA",
    waitTime: "",
    translate: "",
    lon: 16.3612519,
    lat: 46.3165127,
  },
  {
    id: "48",
    header: "Zavod za javno zdravstvo 'Sveti Rok'",
    address: "Virovitičko - podravske županije Ljudevita Gaja 21, Virovitica",
    contact:
      "Isključivo po prethodnoj najavi i dogovoru na broj telefona +385995826909 i +385995826920",
    price: "698,00 kn",
    openHours: "od 7:30 do 8:30 sati",
    driveIn: "",
    waitTime: "do 24 sata",
    translate: "",
    lon: 17.3901139,
    lat: 45.8286413,
  },
  {
    id: "49",
    header: "ZJZ Vukovarsko-srijemske županije",
    address: "Zvonarska 57, Vinkovci ",
    contact: " 032/ 349-251 i 091 270 0360",
    price: "850,00 kn",
    openHours: "",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 18.817807,
    lat: 45.2921093,
  },
  {
    id: "50",
    header: "ZAVOD ZA JAVNO ZDRAVSTVO ZADAR",
    address: "Ul. Ljudevita Posavskog 7a,23 000 Zadar",
    contact: "023 643 380",
    price: "650,00 Kn",
    openHours: "Svaki radni dan od 7:30 - 13:30",
    driveIn: "",
    waitTime: "do 24 sata",
    translate: "DA - NE",
    lon: 15.235268,
    lat: 44.1080821,
  },
  {
    id: "51",
    header: "OB ZADAR",
    address: "Bože Peričića 5, 23 000 Zadar",
    contact: "+ 385(0)23 505 757, covid19.test@bolnica-zadar.hr",
    price: "150,00 kn(600,00 kn)",
    openHours: "Radnim danom u 7:30, 10:30 i 13 sati; vikendom u 7:30",
    driveIn: "NE",
    waitTime: "24 - 48 sati",
    translate: "DA - NE",
    lon: 15.2345953,
    lat: 44.107354,
  },
  {
    id: "52",
    header: "DOM ZDRAVLJA ZAGREBAČKE ŽUPANIJE",
    address: "Zelengaj BB, 10290 Zaprešić",
    contact: "01 3315 906",
    price: "490,00 Kn",
    openHours:
      "Od ponedjeljka do petka od 8 do 11 sati, uz prethodnu najavu telefonom i dogovor termina",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 15.7876041,
    lat: 45.8698757,
  },
  {
    id: "53",
    header: "ZJZ ZAGREBAČKE ŽUPANIJE, Ivanić-grad",
    address:
      "Ivanić-grad, stražnje parkiralište Sb Naftalan (križanje Vukovarske i Naftalanske ulice)",
    contact: "01 2883 137 ili putem online platforme",
    price: "500,00 Kn",
    openHours:
      "Od ponedjeljka do subote od 8:30 do 10:30 h, uz prethodno dogovoren termin",
    driveIn: "",
    waitTime: "",
    translate: "DA - DA",
    lon: 16.3872076,
    lat: 45.7067196,
  },
  {
    id: "54",
    header: "ZJZ ZAGREBAČKE ŽUPANIJE, Dugo Selo",
    address: "Đure Dubenika 2, parkiralište kod sportske dvorane",
    contact: "01 2883 137 ",
    price: "500,00 Kn",
    openHours:
      "Od ponedjeljka do subote od 8:00 do 10:30 sati, uz prethodno dogovoren termin",
    driveIn: "",
    waitTime: "",
    translate: "DA - DA",
    lon: 16.2310599,
    lat: 45.810805,
  },
  {
    id: "55",
    header: "DOM ZDRAVLJA ZAGREBAČKE ŽUPANIJE, Ispostava Velika Gorica",
    address: "Matice hrvatske 5, 10 410 Velika Gorica",
    contact: "01 6379 717",
    price: "",
    openHours: "Radnim danom od 08:00 - 12:00, uz prethodnu najavu telefonom",
    driveIn: "",
    waitTime: "",
    translate: "",
    lon: 16.06593,
    lat: 45.7137423,
  },
];

const pinIcon: L.DivIcon = L.divIcon({
  className: "marker-component-icon",
  popupAnchor: [15, 0],
  iconAnchor: [0, 0],
  iconSize: [25, 25],
});

const MarkerComponent = () => {
  return (
    <>
      {icons.map((icon, id) => (
        <Marker
          position={[icon.lat, icon.lon]}
          icon={pinIcon}
          key={id}
          title={icon.header}
        >
          <Popup>
            <h1>🏬 {icon.header}</h1>
            <h2>📌 {icon.address}</h2>
            {icon.contact ? (
              <h3>
                📞 Kontakt: <strong>{icon.contact}</strong>
              </h3>
            ) : (
              <div></div>
            )}
            {icon.price ? <h4>🔖 Cijena: {icon.price}</h4> : <div></div>}
            {icon.openHours ? (
              <h4>⌚ Radno vrijeme: {icon.openHours}</h4>
            ) : (
              <div></div>
            )}
            {icon.waitTime ? (
              <h4>⏱ Vrijeme čekanja: {icon.waitTime}</h4>
            ) : (
              <div></div>
            )}
            {icon.translate ? (
              <h4>📝 Prijevod(plaćanje): {icon.translate}</h4>
            ) : (
              <div></div>
            )}
            {icon.driveIn ? <h4>🚘 Drive in: {icon.driveIn}</h4> : <div></div>}
            <br />
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkerComponent;
