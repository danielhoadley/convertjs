// Script to convert JSON responses returned by the CanLII API to CSV

// Include dependencies

var json2csv = require('json2csv');
var fs = require('fs');

// Set up columns in the CSV
var fields = ['databaseId', 'caseId.en', 'title', 'citation'];

// Give it the data

var cases = [
  {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc56"
        },
        "title": "Canada (Attorney General) v. Fairmont Hotels Inc.",
        "citation": "2016 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc55"
        },
        "title": "Jean Coutu Group (PJC) Inc. v. Canada (Attorney General)",
        "citation": "2016 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc54"
        },
        "title": "Windsor (City) v. Canadian Transit Co.",
        "citation": "2016 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc53"
        },
        "title": "Alberta (Information and Privacy Commissioner) v. University of Calgary",
        "citation": "2016 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc52"
        },
        "title": "Lizotte v. Aviva Insurance Company of Canada",
        "citation": "2016 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc51"
        },
        "title": "Mennillo v. Intramodal inc.",
        "citation": "2016 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc50"
        },
        "title": "Royal Bank of Canada v. Trang",
        "citation": "2016 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc49"
        },
        "title": "British Columbia Teachers\u0027 Federation v. British Columbia",
        "citation": "2016 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc48"
        },
        "title": "Benhaim v. St‑Germain",
        "citation": "2016 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc47"
        },
        "title": "Edmonton (City) v. Edmonton East (Capilano) Shopping Centres Ltd.",
        "citation": "2016 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc46"
        },
        "title": "R. v. Diamond",
        "citation": "2016 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc45"
        },
        "title": "Urban Communications Inc. v. BCNET Networking Society",
        "citation": "2016 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc44"
        },
        "title": "Morasse v. Nadeau‑Dubois",
        "citation": "2016 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc43"
        },
        "title": "R. v. Anthony‑Cook",
        "citation": "2016 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc42"
        },
        "title": "Endean v. British Columbia",
        "citation": "2016 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc41"
        },
        "title": "R. v. C.K-D.",
        "citation": "2016 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc40"
        },
        "title": "R. v. Rowson",
        "citation": "2016 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc39"
        },
        "title": "Conférence des juges de paix magistrats du Québec v. Quebec (Attorney General)",
        "citation": "2016 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc38"
        },
        "title": "Canada (Attorney General) v. Igloo Vikski Inc.",
        "citation": "2016 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc37"
        },
        "title": "Ledcor Construction Ltd. v. Northbridge Indemnity Insurance Co.",
        "citation": "2016 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc36"
        },
        "title": "Musqueam Indian Band v. Musqueam Indian Band (Board of Review)",
        "citation": "2016 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc35"
        },
        "title": "Lafortune v. Financière agricole du Québec",
        "citation": "2016 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc34"
        },
        "title": "Ferme Vi‑Ber inc. v. Financière agricole du Québec",
        "citation": "2016 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc33"
        },
        "title": "R. v. Villaroman",
        "citation": "2016 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc32"
        },
        "title": "R. v. Cawthorne",
        "citation": "2016 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc31"
        },
        "title": "R. v. K.R.J.",
        "citation": "2016 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc30"
        },
        "title": "Lapointe Rosenstein Marchand Melançon LLP v. Cassels Brock \u0026 Blackwell LLP",
        "citation": "2016 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc29"
        },
        "title": "Wilson v. Atomic Energy of Canada Ltd.",
        "citation": "2016 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc28"
        },
        "title": "R. v. Williamson",
        "citation": "2016 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc27"
        },
        "title": "R. v. Jordan",
        "citation": "2016 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc26"
        },
        "title": "R. v. Vassell",
        "citation": "2016 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc25"
        },
        "title": "British Columbia (Workers’ Compensation Appeal Tribunal) v. Fraser Health Authority",
        "citation": "2016 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016canlii37772"
        },
        "title": "Stephen Patrick Burrows v. Her Majesty the Queen",
        "citation": "2016 CanLII 37772 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc24"
        },
        "title": "R. v. Saeed",
        "citation": "[2016] 1 SCR 518, 2016 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc23"
        },
        "title": "Rogers Communications Inc. v. Châteauguay (City)",
        "citation": "[2016] 1 SCR 467, 2016 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc22"
        },
        "title": "R. v. D.L.W.",
        "citation": "[2016] 1 SCR 402, 2016 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc21"
        },
        "title": "Canada (National Revenue) v. Thompson",
        "citation": "[2016] 1 SCR 381, 2016 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc20"
        },
        "title": "Canada (Attorney General) v. Chambre des notaires du Québec",
        "citation": "[2016] 1 SCR 336, 2016 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc19"
        },
        "title": "Heritage Capital Corp. v. Equitable Trust Co.",
        "citation": "[2016] 1 SCR 306, 2016 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc18"
        },
        "title": "Krayzel Corp. v. Equitable Trust Co.",
        "citation": "[2016] 1 SCR 273, 2016 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc17"
        },
        "title": "R. v. Laliberté",
        "citation": "[2016] 1 SCR 270, 2016 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc16"
        },
        "title": "R. v. Shaoulle",
        "citation": "[2016] 1 SCR 268, 2016 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc15"
        },
        "title": "World Bank Group v. Wallace",
        "citation": "[2016] 1 SCR 207, 2016 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc14"
        },
        "title": "R. v. Safarzadeh‑Markhali",
        "citation": "[2016] 1 SCR 180, 2016 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc13"
        },
        "title": "R. v. Lloyd",
        "citation": "[2016] 1 SCR 130, 2016 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc12"
        },
        "title": "Daniels v. Canada (Indian Affairs and Northern Development)",
        "citation": "[2016] 1 SCR 99, 2016 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc11"
        },
        "title": "R. v. Borowiec",
        "citation": "[2016] 1 SCR 80, 2016 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc10"
        },
        "title": "R. v. Knapczyk",
        "citation": "[2016] 1 SCR 78, 2016 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc8"
        },
        "title": "Commission scolaire de Laval v. Syndicat de l’enseignement de la région de Laval",
        "citation": "[2016] 1 SCR 29, 2016 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc7"
        },
        "title": "R. v. Newman",
        "citation": "[2016] 1 SCR 27, 2016 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc6"
        },
        "title": "R. v. Gagnon",
        "citation": "[2016] 1 SCR 25, 2016 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc5"
        },
        "title": "R. v. Meer",
        "citation": "[2016] 1 SCR 23, 2016 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc3"
        },
        "title": "R. v. Spicer",
        "citation": "[2016] 1 SCR 11, 2016 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc2"
        },
        "title": "R. v. Seruhungo",
        "citation": "[2016] 1 SCR 9, 2016 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc4"
        },
        "title": "Carter v. Canada (Attorney General)",
        "citation": "[2016] 1 SCR 13, 2016 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2016scc1"
        },
        "title": "Canadian Pacific Railway Co. v. Canada (Attorney General)",
        "citation": "[2016] 1 SCR 6, 2016 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc65"
        },
        "title": "R. v. Riesberry",
        "citation": "[2015] 3 SCR 1167, 2015 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc64"
        },
        "title": "R. v. Lacasse",
        "citation": "[2015] 3 SCR 1089, 2015 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc63"
        },
        "title": "R. v. McKenna",
        "citation": "[2015] 3 SCR 1087, 2015 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc62"
        },
        "title": "M.M. v. United States of America",
        "citation": "[2015] 3 SCR 973, 2015 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc61"
        },
        "title": "Kanthasamy v. Canada (Citizenship and Immigration)",
        "citation": "[2015] 3 SCR 909, 2015 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc60"
        },
        "title": "Canadian Imperial Bank of Commerce v. Green",
        "citation": "[2015] 3 SCR 801, 2015 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc59"
        },
        "title": "R. v. Appulonappa",
        "citation": "[2015] 3 SCR 754, 2015 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc58"
        },
        "title": "B010 v. Canada (Citizenship and Immigration)",
        "citation": "[2015] 3 SCR 704, 2015 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc57"
        },
        "title": "Canadian Broadcasting Corp. v. SODRAC 2003 Inc.",
        "citation": "[2015] 3 SCR 615, 2015 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc56"
        },
        "title": "Caron v. Alberta",
        "citation": "[2015] 3 SCR 511, 2015 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc55"
        },
        "title": "R. v. Moriarity",
        "citation": "[2015] 3 SCR 485, 2015 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc54"
        },
        "title": "R. v. Hecimovic",
        "citation": "[2015] 3 SCR 483, 2015 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc53"
        },
        "title": "Saskatchewan (Attorney General) v. Lemare Lake Logging Ltd.",
        "citation": "[2015] 3 SCR 419, 2015 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc52"
        },
        "title": "407 ETR Concession Co. v. Canada (Superintendent of Bankruptcy)",
        "citation": "[2015] 3 SCR 397, 2015 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc51"
        },
        "title": "Alberta (Attorney General) v. Moloney",
        "citation": "[2015] 3 SCR 327, 2015 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc50"
        },
        "title": "R. v. Singh Riar",
        "citation": "[2015] 3 SCR 325, 2015 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015canlii71798"
        },
        "title": "R. v. Neville",
        "citation": "[2015] 3 SCR 323, 2015 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015canlii66363"
        },
        "title": "R. v. M.J.B.",
        "citation": "[2015] 3 SCR 321, 2015 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc47"
        },
        "title": "Wilson v. British Columbia (Superintendent of Motor Vehicles)",
        "citation": "[2015] 3 SCR 300, 2015 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc46"
        },
        "title": "Goodwin v. British Columbia (Superintendent of Motor Vehicles)",
        "citation": "[2015] 3 SCR 250, 2015 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015canlii65222"
        },
        "title": "R. v. Riesberry",
        "citation": "2015 CanLII 65222 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc45"
        },
        "title": "ATCO Gas and Pipelines Ltd. v. Alberta (Utilities Commission)",
        "citation": "[2015] 3 SCR 219, 2015 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc44"
        },
        "title": "Ontario (Energy Board) v. Ontario Power Generation Inc.",
        "citation": "[2015] 3 SCR 147, 2015 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc43"
        },
        "title": "Stuart Olson Dominion Construction Ltd. v. Structal Heavy Steel",
        "citation": "[2015] 3 SCR 127, 2015 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc42"
        },
        "title": "Chevron Corp. v. Yaiguaje",
        "citation": "[2015] 3 SCR 69, 2015 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc41"
        },
        "title": "Guindon v. Canada",
        "citation": "[2015] 3 SCR 3, 2015 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc40"
        },
        "title": "R. v. Simpson",
        "citation": "[2015] 2 SCR 827, 2015 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc39"
        },
        "title": "Quebec (Commission des droits de la personne et des droits de la jeunesse) v. Bombardier Inc. (Bombardier Aerospace Training Center)",
        "citation": "[2015] 2 SCR 789, 2015 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc38"
        },
        "title": "R. v. Rodgerson",
        "citation": "[2015] 2 SCR 760, 2015 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc37"
        },
        "title": "Strickland v. Canada (Attorney General)",
        "citation": "[2015] 2 SCR 713, 2015 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc36"
        },
        "title": "Société en commandite Place Mullins v. Services immobiliers Diane Bisson inc.",
        "citation": "[2015] 2 SCR 699, 2015 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc35"
        },
        "title": "Hinse v. Canada (Attorney General)",
        "citation": "[2015] 2 SCR 621, 2015 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc34"
        },
        "title": "R. v. Smith",
        "citation": "[2015] 2 SCR 602, 2015 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc33"
        },
        "title": "R. v. Tatton",
        "citation": "[2015] 2 SCR 574, 2015 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc32"
        },
        "title": "Caplin v. Canada (Justice)",
        "citation": "[2015] 2 SCR 570, 2015 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc31"
        },
        "title": "Canada (Attorney General) v. Barnaby",
        "citation": "[2015] 2 SCR 563, 2015 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc30"
        },
        "title": "Kahkewistahaw First Nation v. Taypotat",
        "citation": "[2015] 2 SCR 548, 2015 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc29"
        },
        "title": "R. v. Barabash",
        "citation": "[2015] 2 SCR 522, 2015 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc28"
        },
        "title": "R. v. Kokopenace",
        "citation": "[2015] 2 SCR 398, 2015 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc27"
        },
        "title": "R. v. St-Cloud",
        "citation": "[2015] 2 SCR 328, 2015 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc26"
        },
        "title": "Bowden Institution v. Khadr",
        "citation": "[2015] 2 SCR 325, 2015 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc25"
        },
        "title": "Yukon Francophone School Board, Education Area #23 v. Yukon (Attorney General)",
        "citation": "[2015] 2 SCR 282, 2015 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc24"
        },
        "title": "Henry v. British Columbia (Attorney General)",
        "citation": "[2015] 2 SCR 214, 2015 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc23"
        },
        "title": "White Burgess Langille Inman v. Abbott and Haliburton Co.",
        "citation": "[2015] 2 SCR 182, 2015 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015canlii20665"
        },
        "title": "Canada (Attorney General) v. Barnaby",
        "citation": "2015 CanLII 20665 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015canlii20664"
        },
        "title": "Caplin v. Canada (Minister of Justice)",
        "citation": "2015 CanLII 20664 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc22"
        },
        "title": "Quebec (Attorney General) v. Canada (Attorney General)",
        "citation": "[2015] 2 SCR 179, 2015 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc21"
        },
        "title": "Association des parents de l’école Rose‑des‑vents v. British Columbia (Education)",
        "citation": "[2015] 2 SCR 139, 2015 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc20"
        },
        "title": "Sanofi-Aventis v. Apotex Inc.",
        "citation": "[2015] 2 SCR 136, 2015 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc19"
        },
        "title": "Zurich Insurance Co. v. Chubb Insurance Co. of Canada",
        "citation": "[2015] 2 SCR 134, 2015 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc18"
        },
        "title": "Theratechnologies Inc. v. 121851 Canada Inc.",
        "citation": "[2015] 2 SCR 106, 2015 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc17"
        },
        "title": "Carey v. Laiken",
        "citation": "[2015] 2 SCR 79, 2015 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc16"
        },
        "title": "Mouvement laïque québécois v. Saguenay (City)",
        "citation": "[2015] 2 SCR 3, 2015 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc15"
        },
        "title": "R. v. Nur",
        "citation": "[2015] 1 SCR 773, 2015 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc14"
        },
        "title": "Quebec (Attorney General) v. Canada (Attorney General)",
        "citation": "[2015] 1 SCR 693, 2015 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc13"
        },
        "title": "R. v. Sanghera",
        "citation": "[2015] 1 SCR 691, 2015 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc12"
        },
        "title": "Loyola High School v. Quebec (Attorney General)",
        "citation": "[2015] 1 SCR 613, 2015 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc11"
        },
        "title": "R. v. Araya",
        "citation": "[2015] 1 SCR 581, 2015 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc10"
        },
        "title": "Potter v. New Brunswick Legal Aid Services Commission",
        "citation": "[2015] 1 SCR 500, 2015 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc9"
        },
        "title": "R. v. Grant",
        "citation": "[2015] 1 SCR 475, 2015 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc8"
        },
        "title": "R. v. Perrone",
        "citation": "[2015] 1 SCR 473, 2015 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc7"
        },
        "title": "Canada (Attorney General) v. Federation of Law Societies of Canada",
        "citation": "[2015] 1 SCR 401, 2015 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc6"
        },
        "title": "R. v. Goleski",
        "citation": "[2015] 1 SCR 399, 2015 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc5"
        },
        "title": "Carter v. Canada (Attorney General)",
        "citation": "[2015] 1 SCR 331, 2015 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc4"
        },
        "title": "Saskatchewan Federation of Labour v. Saskatchewan",
        "citation": "[2015] 1 SCR 245, 2015 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc3"
        },
        "title": "Tervita Corp. v. Canada (Commissioner of Competition)",
        "citation": "[2015] 1 SCR 161, 2015 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc2"
        },
        "title": "Meredith v. Canada (Attorney General)",
        "citation": "[2015] 1 SCR 125, 2015 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2015scc1"
        },
        "title": "Mounted Police Association of Ontario v. Canada (Attorney General)",
        "citation": "[2015] 1 SCR 3, 2015 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc76"
        },
        "title": "R. v. MacLeod",
        "citation": "[2014] 3 SCR 619, 2014 SCC 76 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc77"
        },
        "title": "R. v. Fearon",
        "citation": "[2014] 3 SCR 621, 2014 SCC 77 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc75"
        },
        "title": "R. v. Wilcox",
        "citation": "[2014] 3 SCR 616, 2014 SCC 75 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc74"
        },
        "title": "R. v. Day",
        "citation": "[2014] 3 SCR 614, 2014 SCC 74 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc73"
        },
        "title": "R. v. Wills",
        "citation": "[2014] 3 SCR 612, 2014 SCC 73 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc72"
        },
        "title": "Wakeling v. United States of America",
        "citation": "[2014] 3 SCR 549, 2014 SCC 72 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc71"
        },
        "title": "Bhasin v. Hrynew",
        "citation": "[2014] 3 SCR 494, 2014 SCC 71 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc70"
        },
        "title": "British Columbia Teachers\u0027 Federation v. British Columbia Public School Employers\u0027 Association",
        "citation": "[2014] 3 SCR 492, 2014 SCC 70 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc69"
        },
        "title": "R. v. Dunn",
        "citation": "[2014] 3 SCR 490, 2014 SCC 69 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc68"
        },
        "title": "Febles v. Canada (Citizenship and Immigration)",
        "citation": "[2014] 3 SCR 431, 2014 SCC 68 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc67"
        },
        "title": "Thibodeau v. Air Canada",
        "citation": "[2014] 3 SCR 340, 2014 SCC 67 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc66"
        },
        "title": "Imperial Oil v. Jacques",
        "citation": "[2014] 3 SCR 287, 2014 SCC 66 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc65"
        },
        "title": "R. v. Lepine",
        "citation": "[2014] 3 SCR 285, 2014 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc64"
        },
        "title": "R. v. Bouchard",
        "citation": "[2014] 3 SCR 283, 2014 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc63"
        },
        "title": "R. v. Mohamed",
        "citation": "[2014] 3 SCR 280, 2014 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc62"
        },
        "title": "Kazemi Estate v. Islamic Republic of Iran",
        "citation": "[2014] 3 SCR 176, 2014 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc61"
        },
        "title": "R. v. Steele",
        "citation": "[2014] 3 SCR 138, 2014 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc60"
        },
        "title": "R. v. Conception",
        "citation": "[2014] 3 SCR 82, 2014 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc59"
        },
        "title": "Trial Lawyers Association of British Columbia v. British Columbia (Attorney General)",
        "citation": "[2014] 3 SCR 31, 2014 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc58"
        },
        "title": "R. v. Mack",
        "citation": "[2014] 3 SCR 3, 2014 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc57"
        },
        "title": "Marcotte v. Fédération des caisses Desjardins du Québec",
        "citation": "[2014] 2 SCR 805, 2014 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc56"
        },
        "title": "Amex Bank of Canada v. Adams",
        "citation": "[2014] 2 SCR 787, 2014 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc55"
        },
        "title": "Bank of Montreal v. Marcotte",
        "citation": "[2014] 2 SCR 725, 2014 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc54"
        },
        "title": "R. v. Mian",
        "citation": "[2014] 2 SCR 689, 2014 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc53"
        },
        "title": "Sattva Capital Corp. v. Creston Moly Corp.",
        "citation": "[2014] 2 SCR 633, 2014 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc52"
        },
        "title": "R. v. Hart",
        "citation": "[2014] 2 SCR 544, 2014 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc51"
        },
        "title": "Quebec (Commission des normes du travail) v. Asphalte Desjardins inc.",
        "citation": "[2014] 2 SCR 514, 2014 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc50"
        },
        "title": "R. v. Taylor",
        "citation": "[2014] 2 SCR 495, 2014 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc49"
        },
        "title": "Canada (Attorney General) v. Confédération des syndicats nationaux",
        "citation": "[2014] 2 SCR 477, 2014 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc48"
        },
        "title": "Grassy Narrows First Nation v. Ontario (Natural Resources)",
        "citation": "[2014] 2 SCR 447, 2014 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc47"
        },
        "title": "R. v. Sipos",
        "citation": "[2014] 2 SCR 423, 2014 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc46"
        },
        "title": "R. v. Quesnelle",
        "citation": "[2014] 2 SCR 390, 2014 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc45"
        },
        "title": "United Food and Commercial Workers, Local 503 v. Wal‑Mart Canada Corp.",
        "citation": "[2014] 2 SCR 323, 2014 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc44"
        },
        "title": "Tsilhqot’in Nation v. British Columbia",
        "citation": "[2014] 2 SCR 257, 2014 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc43"
        },
        "title": "R. v. Spencer",
        "citation": "[2014] 2 SCR 212, 2014 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc42"
        },
        "title": "Canadian Artists’ Representation v. National Gallery of Canada",
        "citation": "[2014] 2 SCR 197, 2014 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc41"
        },
        "title": "R. v. Anderson",
        "citation": "[2014] 2 SCR 167, 2014 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc40"
        },
        "title": "Canadian National Railway Co. v. Canada (Attorney General)",
        "citation": "[2014] 2 SCR 135, 2014 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc39"
        },
        "title": "McCormick v. Fasken Martineau DuMoulin LLP",
        "citation": "[2014] 2 SCR 108, 2014 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc38"
        },
        "title": "Stubicar v. Canada",
        "citation": "[2014] 2 SCR 104, 2014 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014canlii23904"
        },
        "title": "Canadian Artists’ Representation v. National Gallery of Canada",
        "citation": "2014 CanLII 23904 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc37"
        },
        "title": "Canada (Citizenship and Immigration) v. Harkat",
        "citation": "[2014] 2 SCR 33, 2014 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc36"
        },
        "title": "John Doe v. Ontario (Finance)",
        "citation": "[2014] 2 SCR 3, 2014 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc35"
        },
        "title": "Union Carbide Canada Inc. v. Bombardier Inc.",
        "citation": "[2014] 1 SCR 800, 2014 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc34"
        },
        "title": "Immeubles Jacques Robitaille inc. v. Québec (City)",
        "citation": "[2014] 1 SCR 784, 2014 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc33"
        },
        "title": "Dionne v. Commission scolaire des Patriotes",
        "citation": "[2014] 1 SCR 765, 2014 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc32"
        },
        "title": "Reference re Senate Reform",
        "citation": "[2014] 1 SCR 704, 2014 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc31"
        },
        "title": "Ontario (Community Safety and Correctional Services) v. Ontario (Information and Privacy Commissioner)",
        "citation": "[2014] 1 SCR 674, 2014 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc30"
        },
        "title": "R. v. Jackson",
        "citation": "[2014] 1 SCR 672, 2014 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc29"
        },
        "title": "Peracomo Inc. v. TELUS Communications Co.",
        "citation": "[2014] 1 SCR 621, 2014 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc28"
        },
        "title": "R. v. Clarke",
        "citation": "[2014] 1 SCR 612, 2014 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc27"
        },
        "title": "R. v. Carvery",
        "citation": "[2014] 1 SCR 605, 2014 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc26"
        },
        "title": "R. v. Summers",
        "citation": "[2014] 1 SCR 575, 2014 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc25"
        },
        "title": "Martin v. Alberta (Workers’ Compensation Board)",
        "citation": "[2014] 1 SCR 546, 2014 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc24"
        },
        "title": "Mission Institution v. Khela",
        "citation": "[2014] 1 SCR 502, 2014 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc23"
        },
        "title": "R. v. Leinen",
        "citation": "[2014] 1 SCR 500, 2014 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc22"
        },
        "title": "R. v. Vokurka",
        "citation": "[2014] 1 SCR 498, 2014 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc21"
        },
        "title": "Reference re Supreme Court Act, ss. 5 and 6",
        "citation": "[2014] 1 SCR 433, 2014 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc20"
        },
        "title": "Canada (Attorney General) v. Whaling",
        "citation": "[2014] 1 SCR 392, 2014 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc19"
        },
        "title": "R. v. Hutchinson",
        "citation": "[2014] 1 SCR 346, 2014 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc18"
        },
        "title": "R. v. Hogg",
        "citation": "[2014] 1 SCR 344, 2014 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014canlii7229"
        },
        "title": "R. v. Waite",
        "citation": "[2014] 1 SCR 341, 2014 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc16"
        },
        "title": "R. v. Babos",
        "citation": "[2014] 1 SCR 309, 2014 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc15"
        },
        "title": "R. v. Sekhon",
        "citation": "[2014] 1 SCR 272, 2014 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc14"
        },
        "title": "R. v. Flaviano",
        "citation": "[2014] 1 SCR 270, 2014 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc13"
        },
        "title": "Bernard v. Canada (Attorney General)",
        "citation": "[2014] 1 SCR 227, 2014 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc12"
        },
        "title": "A.I. Enterprises Ltd. v. Bram Enterprises Ltd.",
        "citation": "[2014] 1 SCR 177, 2014 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc11"
        },
        "title": "Telecommunications Employees Association of Manitoba Inc. v. Manitoba Telecom Services Inc.",
        "citation": "[2014] 1 SCR 142, 2014 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc8"
        },
        "title": "Bruno Appliance and Furniture, Inc. v. Hryniak",
        "citation": "[2014] 1 SCR 126, 2014 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc7"
        },
        "title": "Hryniak v. Mauldin",
        "citation": "[2014] 1 SCR 87, 2014 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014canlii1687"
        },
        "title": "R. v. Yelle",
        "citation": "[2014] 1 SCR 140, 2014 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc9"
        },
        "title": "R. v. Koczab",
        "citation": "[2014] 1 SCR 138, 2014 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc6"
        },
        "title": "R. v. Auclair",
        "citation": "[2014] 1 SCR 83, 2014 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc5"
        },
        "title": "R. v. James",
        "citation": "[2014] 1 SCR 80, 2014 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc4"
        },
        "title": "R. v. Davis",
        "citation": "[2014] 1 SCR 78, 2014 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc3"
        },
        "title": "R. v. MacDonald",
        "citation": "[2014] 1 SCR 37, 2014 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc2"
        },
        "title": "R. v. W.E.B.",
        "citation": "[2014] 1 SCR 34, 2014 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2014scc1"
        },
        "title": "Vivendi Canada Inc. v. Dell’Aniello",
        "citation": "[2014] 1 SCR 3, 2014 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc73"
        },
        "title": "Cinar Corporation v. Robinson",
        "citation": "[2013] 3 SCR 1168, 2013 SCC 73 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc72"
        },
        "title": "Canada (Attorney General) v. Bedford",
        "citation": "[2013] 3 SCR 1101, 2013 SCC 72 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc71"
        },
        "title": "Wood v. Schaeffer",
        "citation": "[2013] 3 SCR 1053, 2013 SCC 71 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc70"
        },
        "title": "IBM Canada Limited v. Waterman",
        "citation": "[2013] 3 SCR 985, 2013 SCC 70 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013canlii81862"
        },
        "title": "Raynald Grenier v. Attorney General of Quebec",
        "citation": "2013 CanLII 81862 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc69"
        },
        "title": "AIC Limited v. Fischer",
        "citation": "[2013] 3 SCR 949, 2013 SCC 69 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc68"
        },
        "title": "R. v. McRae",
        "citation": "[2013] 3 SCR 931, 2013 SCC 68 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc67"
        },
        "title": "McLean v. British Columbia (Securities Commission)",
        "citation": "[2013] 3 SCR 895, 2013 SCC 67 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc66"
        },
        "title": "Amaratunga v. Northwest Atlantic Fisheries Organization",
        "citation": "[2013] 3 SCR 866, 2013 SCC 66 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc65"
        },
        "title": "Quebec (Agence du revenu) v. Services Environnementaux AES inc.",
        "citation": "[2013] 3 SCR 838, 2013 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc64"
        },
        "title": "Katz Group Canada Inc. v. Ontario (Health and Long‑Term Care)",
        "citation": "[2013] 3 SCR 810, 2013 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc63"
        },
        "title": "La Souveraine, Compagnie d’assurance générale v. Autorité des marchés financiers",
        "citation": "[2013] 3 SCR 756, 2013 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc62"
        },
        "title": "Alberta (Information and Privacy Commissioner) v. United Food and Commercial Workers, Local 401",
        "citation": "[2013] 3 SCR 733, 2013 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc61"
        },
        "title": "R. v. Hay",
        "citation": "[2013] 3 SCR 694, 2013 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc60"
        },
        "title": "R. v. Vu",
        "citation": "[2013] 3 SCR 657, 2013 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc59"
        },
        "title": "Infineon Technologies AG v. Option consommateurs",
        "citation": "[2013] 3 SCR 600, 2013 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc58"
        },
        "title": "Sun‑Rype Products Ltd. v. Archer Daniels Midland Company",
        "citation": "[2013] 3 SCR 545, 2013 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc57"
        },
        "title": "Pro‑Sys Consultants Ltd. v. Microsoft Corporation",
        "citation": "[2013] 3 SCR 477, 2013 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc56"
        },
        "title": "R. v. Pappas",
        "citation": "[2013] 3 SCR 452, 2013 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc55"
        },
        "title": "R. v. Cairney",
        "citation": "[2013] 3 SCR 420, 2013 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc54"
        },
        "title": "R. v. R.L.",
        "citation": "[2013] 3 SCR 418, 2013 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc53"
        },
        "title": "Cuthbertson v. Rasouli",
        "citation": "[2013] 3 SCR 341, 2013 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc52"
        },
        "title": "Castonguay Blasting Ltd. v. Ontario (Environment)",
        "citation": "[2013] 3 SCR 323, 2013 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc51"
        },
        "title": "British Columbia (Forests) v. Teal Cedar Products Ltd.",
        "citation": "[2013] 3 SCR 301, 2013 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc50"
        },
        "title": "R. v. MacKenzie",
        "citation": "[2013] 3 SCR 250, 2013 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc49"
        },
        "title": "R. v. Chehil",
        "citation": "[2013] 3 SCR 220, 2013 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc48"
        },
        "title": "Envision Credit Union v. Canada",
        "citation": "[2013] 3 SCR 191, 2013 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc47"
        },
        "title": "Divito v. Canada (Public Safety and Emergency Preparedness)",
        "citation": "[2013] 3 SCR 157, 2013 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc46"
        },
        "title": "Régie des rentes du Québec v. Canada Bread Company Ltd.",
        "citation": "[2013] 3 SCR 125, 2013 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc45"
        },
        "title": "Payette v. Guay inc.",
        "citation": "[2013] 3 SCR 95, 2013 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc44"
        },
        "title": "Marine Services International Ltd. v. Ryan Estate",
        "citation": "[2013] 3 SCR 53, 2013 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc43"
        },
        "title": "Ontario v. Criminal Lawyers’ Association of Ontario",
        "citation": "[2013] 3 SCR 3, 2013 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc42"
        },
        "title": "Conseil scolaire francophone de la Colombie‑Britannique v. British Columbia",
        "citation": "[2013] 2 SCR 774, 2013 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc41"
        },
        "title": "R. v. Youvarajah",
        "citation": "[2013] 2 SCR 720, 2013 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc40"
        },
        "title": "Ezokola v. Canada (Citizenship and Immigration)",
        "citation": "[2013] 2 SCR 678, 2013 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc39"
        },
        "title": "Canadian National Railway Co. v. McKercher LLP",
        "citation": "[2013] 2 SCR 649, 2013 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc38"
        },
        "title": "R. v. Vuradin",
        "citation": "[2013] 2 SCR 639, 2013 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc37"
        },
        "title": "Sable Offshore Energy Inc. v. Ameron International Corp.",
        "citation": "[2013] 2 SCR 623, 2013 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc36"
        },
        "title": "Agraira v. Canada (Public Safety and Emergency Preparedness)",
        "citation": "[2013] 2 SCR 559, 2013 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc35"
        },
        "title": "R. v. Baldree",
        "citation": "[2013] 2 SCR 520, 2013 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc34"
        },
        "title": "Communications, Energy and Paperworkers Union of Canada, Local 30 v. Irving Pulp \u0026 Paper, Ltd.",
        "citation": "[2013] 2 SCR 458, 2013 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc33"
        },
        "title": "Nishi v. Rascal Trucking Ltd.",
        "citation": "[2013] 2 SCR 438, 2013 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc32"
        },
        "title": "R. v. Gauthier",
        "citation": "[2013] 2 SCR 403, 2013 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc31"
        },
        "title": "R. v. Ibanescu",
        "citation": "[2013] 2 SCR 400, 2013 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc30"
        },
        "title": "Cojocaru v. British Columbia Women’s Hospital and Health Centre",
        "citation": "[2013] 2 SCR 357, 2013 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc29"
        },
        "title": "Daishowa‑Marubeni International Ltd. v. Canada",
        "citation": "[2013] 2 SCR 336, 2013 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc28"
        },
        "title": "R. v. A.D.H.",
        "citation": "[2013] 2 SCR 269, 2013 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc27"
        },
        "title": "R. v. Buzizi",
        "citation": "[2013] 2 SCR 248, 2013 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc26"
        },
        "title": "Behn v. Moulton Contracting Ltd.",
        "citation": "[2013] 2 SCR 227, 2013 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc25"
        },
        "title": "R. v. Levkovic",
        "citation": "[2013] 2 SCR 204, 2013 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013canlii21697"
        },
        "title": "Apotex Inc. v. Minister of Health, et al.",
        "citation": "2013 CanLII 21697 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc24"
        },
        "title": "R. v. G.M.",
        "citation": "[2013] 2 SCR 202, 2013 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc23"
        },
        "title": "R. v. MacIntosh",
        "citation": "[2013] 2 SCR 200, 2013 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc22"
        },
        "title": "R. v. W.H.",
        "citation": "[2013] 2 SCR 180, 2013 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc21"
        },
        "title": "R. v. Murphy",
        "citation": "[2013] 2 SCR 178, 2013 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc20"
        },
        "title": "R. v. Lévesque",
        "citation": "[2013] 2 SCR 176, 2013 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc19"
        },
        "title": "Penner v. Niagara (Regional Police Services Board)",
        "citation": "[2013] 2 SCR 125, 2013 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc18"
        },
        "title": "Ediger v. Johnston",
        "citation": "[2013] 2 SCR 98, 2013 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc17"
        },
        "title": "R. v. Mailhot",
        "citation": "[2013] 2 SCR 96, 2013 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc16"
        },
        "title": "R. v. TELUS Communications Co.",
        "citation": "[2013] 2 SCR 3, 2013 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc15"
        },
        "title": "R. v. Pham",
        "citation": "[2013] 1 SCR 739, 2013 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc14"
        },
        "title": "Manitoba Metis Federation Inc. v. Canada (Attorney General)",
        "citation": "[2013] 1 SCR 623, 2013 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc13"
        },
        "title": "Antrim Truck Centre Ltd. v. Ontario (Transportation)",
        "citation": "[2013] 1 SCR 594, 2013 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc12"
        },
        "title": "R. v. J.F.",
        "citation": "[2013] 1 SCR 565, 2013 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc11"
        },
        "title": "Saskatchewan (Human Rights Commission) v. Whatcott",
        "citation": "[2013] 1 SCR 467, 2013 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc10"
        },
        "title": "R. v. Taylor",
        "citation": "[2013] 1 SCR 465, 2013 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc9"
        },
        "title": "R. v. Named Person B",
        "citation": "[2013] 1 SCR 405, 2013 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc8"
        },
        "title": "R. v. Blacklaws",
        "citation": "[2013] 1 SCR 403, 2013 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc7"
        },
        "title": "R. v. Bélanger",
        "citation": "[2013] 1 SCR 401, 2013 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc6"
        },
        "title": "Sun Indalex Finance, LLC v. United Steelworkers",
        "citation": "[2013] 1 SCR 271, 2013 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc5"
        },
        "title": "Quebec (Attorney General) v. A",
        "citation": "[2013] 1 SCR 61, 2013 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc4"
        },
        "title": "R. v. Sanichar",
        "citation": "[2013] 1 SCR 54, 2013 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc3"
        },
        "title": "R. v. Ryan",
        "citation": "[2013] 1 SCR 14, 2013 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc2"
        },
        "title": "R. v. O’Brien",
        "citation": "[2013] 1 SCR 7, 2013 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2013scc1"
        },
        "title": "R. v. Manning",
        "citation": "[2013] 1 SCR 3, 2013 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc75"
        },
        "title": "R. v. Davey",
        "citation": "[2012] 3 SCR 828, 2012 SCC 75 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc74"
        },
        "title": "R. v. Emms",
        "citation": "[2012] 3 SCR 810, 2012 SCC 74 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc73"
        },
        "title": "R. v. Yumnu",
        "citation": "[2012] 3 SCR 777, 2012 SCC 73 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc72"
        },
        "title": "R. v. N.S.",
        "citation": "[2012] 3 SCR 726, 2012 SCC 72 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc71"
        },
        "title": "Professional Institute of the Public Service of Canada v. Canada (Attorney General)",
        "citation": "[2012] 3 SCR 660, 2012 SCC 71 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc70"
        },
        "title": "Sriskandarajah v. United States of America",
        "citation": "[2012] 3 SCR 609, 2012 SCC 70 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc69"
        },
        "title": "R. v. Khawaja",
        "citation": "[2012] 3 SCR 555, 2012 SCC 69 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc68"
        },
        "title": "Reference re Broadcasting Regulatory Policy CRTC 2010-167 and Broadcasting Order CRTC 2010-168",
        "citation": "[2012] 3 SCR 489, 2012 SCC 68 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc67"
        },
        "title": "Newfoundland and Labrador v. AbitibiBowater Inc.",
        "citation": "[2012] 3 SCR 443, 2012 SCC 67 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc66"
        },
        "title": "R. v. Aucoin",
        "citation": "[2012] 3 SCR 408, 2012 SCC 66 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc65"
        },
        "title": "Construction Labour Relations v. Driver Iron Inc.",
        "citation": "[2012] 3 SCR 405, 2012 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc64"
        },
        "title": "Canada (Attorney General) v. Kane",
        "citation": "[2012] 3 SCR 398, 2012 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc63"
        },
        "title": "R. v. D.J.W.",
        "citation": "[2012] 3 SCR 396, 2012 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc62"
        },
        "title": "R. v. P.D.T.",
        "citation": "[2012] 3 SCR 394, 2012 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc61"
        },
        "title": "Moore v. British Columbia (Education)",
        "citation": "[2012] 3 SCR 360, 2012 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc60"
        },
        "title": "Teva Canada Ltd. v. Pfizer Canada Inc.",
        "citation": "[2012] 3 SCR 625, 2012 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc59"
        },
        "title": "R. v. Nedelcu",
        "citation": "[2012] 3 SCR 311, 2012 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc58"
        },
        "title": "R. v. Dineley",
        "citation": "[2012] 3 SCR 272, 2012 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc57"
        },
        "title": "R. v. St‑Onge Lamoureux",
        "citation": "[2012] 3 SCR 187, 2012 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc56"
        },
        "title": "R. v. Boudreault",
        "citation": "[2012] 3 SCR 157, 2012 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc55"
        },
        "title": "Opitz v. Wrzesnewskyj",
        "citation": "[2012] 3 SCR 76, 2012 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc54"
        },
        "title": "R. v. Picot",
        "citation": "[2012] 3 SCR 74, 2012 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc53"
        },
        "title": "R. v. Cole",
        "citation": "[2012] 3 SCR 34, 2012 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc52"
        },
        "title": "Canada v. GlaxoSmithKline Inc.",
        "citation": "[2012] 3 SCR 3, 2012 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc51"
        },
        "title": "Southcott Estates Inc. v. Toronto Catholic District School Board",
        "citation": "[2012] 2 SCR 675, 2012 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc50"
        },
        "title": "R. v. Rochon",
        "citation": "[2012] 2 SCR 673, 2012 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc49"
        },
        "title": "R. v. Prokofiew",
        "citation": "[2012] 2 SCR 639, 2012 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc48"
        },
        "title": "R. v. D.C.",
        "citation": "[2012] 2 SCR 626, 2012 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc47"
        },
        "title": "R. v. Mabior",
        "citation": "[2012] 2 SCR 584, 2012 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc46"
        },
        "title": "A.B. v. Bragg Communications Inc.",
        "citation": "[2012] 2 SCR 567, 2012 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc45"
        },
        "title": "Canada (Attorney General) v. Downtown Eastside Sex Workers United Against Violence Society",
        "citation": "[2012] 2 SCR 524, 2012 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc44"
        },
        "title": "R. v. Bellusci",
        "citation": "[2012] 2 SCR 509, 2012 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc43"
        },
        "title": "Canada v. Craig",
        "citation": "[2012] 2 SCR 489, 2012 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc42"
        },
        "title": "R. v. Knott",
        "citation": "[2012] 2 SCR 470, 2012 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc41"
        },
        "title": "R. v. Walle",
        "citation": "[2012] 2 SCR 438, 2012 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc40"
        },
        "title": "R. v. Vu",
        "citation": "[2012] 2 SCR 411, 2012 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc39"
        },
        "title": "R. v. Punko",
        "citation": "[2012] 2 SCR 396, 2012 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc38"
        },
        "title": "Re:Sound v. Motion Picture Theatre Associations of Canada",
        "citation": "[2012] 2 SCR 376, 2012 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc37"
        },
        "title": "Alberta (Education) v. Canadian Copyright Licensing Agency (Access Copyright)",
        "citation": "[2012] 2 SCR 345, 2012 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc36"
        },
        "title": "Society of Composers, Authors and Music Publishers of Canada v. Bell Canada",
        "citation": "[2012] 2 SCR 326, 2012 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc35"
        },
        "title": "Rogers Communications Inc. v. Society of Composers, Authors and Music Publishers of Canada",
        "citation": "[2012] 2 SCR 283, 2012 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc34"
        },
        "title": "Entertainment Software Association v. Society of Composers, Authors and Music Publishers of Canada",
        "citation": "[2012] 2 SCR 231, 2012 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc33"
        },
        "title": "R. v. Venneri",
        "citation": "[2012] 2 SCR 211, 2012 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc32"
        },
        "title": "Clements v. Clements",
        "citation": "[2012] 2 SCR 181, 2012 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc31"
        },
        "title": "R. v. Mayuran",
        "citation": "[2012] 2 SCR 162, 2012 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc30"
        },
        "title": "Westmount (City) v. Rossy",
        "citation": "[2012] 2 SCR 136, 2012 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc29"
        },
        "title": "Halifax (Regional Municipality) v. Canada (Public Works and Government Services)",
        "citation": "[2012] 2 SCR 108, 2012 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc28"
        },
        "title": "R. v. Gibbons",
        "citation": "[2012] 2 SCR 92, 2012 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc27"
        },
        "title": "Annapolis County District School Board v. Marshall",
        "citation": "[2012] 2 SCR 84, 2012 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc26"
        },
        "title": "R. v. Roy",
        "citation": "[2012] 2 SCR 60, 2012 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc25"
        },
        "title": "Cinar Corporation v. Robinson",
        "citation": "[2012] 2 SCR 55, 2012 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc24"
        },
        "title": "R. v. Maybin",
        "citation": "[2012] 2 SCR 30, 2012 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc23"
        },
        "title": "Tessier Ltée v. Quebec (Commission de la santé et de la sécurité du travail)",
        "citation": "[2012] 2 SCR 3, 2012 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc22"
        },
        "title": "R. v. R.P.",
        "citation": "[2012] 1 SCR 746, 2012 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc21"
        },
        "title": "R. v. Jesse",
        "citation": "[2012] 1 SCR 716, 2012 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc20"
        },
        "title": "Calgary (City) v. Canada",
        "citation": "[2012] 1 SCR 689, 2012 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc19"
        },
        "title": "Breeden v. Black",
        "citation": "[2012] 1 SCR 666, 2012 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc18"
        },
        "title": "Éditions Écosociété Inc. v. Banro Corp.",
        "citation": "[2012] 1 SCR 636, 2012 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc17"
        },
        "title": "Club Resorts Ltd. v. Van Breda",
        "citation": "[2012] 1 SCR 572, 2012 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc16"
        },
        "title": "R. v. Tse",
        "citation": "[2012] 1 SCR 531, 2012 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc15"
        },
        "title": "R. v. Kociuk",
        "citation": "[2012] 1 SCR 529, 2012 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc14"
        },
        "title": "Fundy Settlement v. Canada",
        "citation": "[2012] 1 SCR 520, 2012 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc13"
        },
        "title": "R. v. Ipeelee",
        "citation": "[2012] 1 SCR 433, 2012 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc12"
        },
        "title": "Doré v. Barreau du Québec",
        "citation": "[2012] 1 SCR 395, 2012 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc11"
        },
        "title": "R. v. Eastgaard",
        "citation": "[2012] 1 SCR 393, 2012 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc10"
        },
        "title": "Halifax (Regional Municipality) v. Nova Scotia (Human Rights Commission)",
        "citation": "[2012] 1 SCR 364, 2012 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc9"
        },
        "title": "Momentous.ca Corp. v. Canadian American Association of Professional Baseball Ltd.",
        "citation": "[2012] 1 SCR 359, 2012 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc8"
        },
        "title": "Richard v. Time Inc.",
        "citation": "[2012] 1 SCR 265, 2012 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc7"
        },
        "title": "S.L. v. Commission scolaire des Chênes",
        "citation": "[2012] 1 SCR 235, 2012 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc6"
        },
        "title": "R v. T.L.M.",
        "citation": "[2012] 1 SCR 233, 2012 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc5"
        },
        "title": "R. v. D.A.I.",
        "citation": "[2012] 1 SCR 149, 2012 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc4"
        },
        "title": "Reference re Broadcasting Act",
        "citation": "[2012] 1 SCR 142, 2012 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc3"
        },
        "title": "Merck Frosst Canada Ltd. v. Canada (Health)",
        "citation": "[2012] 1 SCR 23, 2012 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc2"
        },
        "title": "Catalyst Paper Corp. v. North Cowichan (District)",
        "citation": "[2012] 1 SCR 5, 2012 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2012scc1"
        },
        "title": "Toronto-Dominion Bank v. Canada",
        "citation": "[2012] 1 SCR 3, 2012 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc66"
        },
        "title": "Reference re Securities Act",
        "citation": "[2011] 3 SCR 837, 2011 SCC 66 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc65"
        },
        "title": "R.P. v. R.C.",
        "citation": "[2011] 3 SCR 819, 2011 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc64"
        },
        "title": "L.M.P. v. L.S.",
        "citation": "[2011] 3 SCR 775, 2011 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc63"
        },
        "title": "Copthorne Holdings Ltd. v. Canada",
        "citation": "[2011] 3 SCR 721, 2011 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc62"
        },
        "title": "Newfoundland and Labrador Nurses\u0027 Union v. Newfoundland and Labrador (Treasury Board)",
        "citation": "[2011] 3 SCR 708, 2011 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc61"
        },
        "title": "Alberta (Information and Privacy Commissioner) v. Alberta Teachers\u0027 Association",
        "citation": "[2011] 3 SCR 654, 2011 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc60"
        },
        "title": "Quebec (Attorney General) v. Canada (Human Resources and Social Development)",
        "citation": "[2011] 3 SCR 635, 2011 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc59"
        },
        "title": "Nor-Man Regional Health Authority Inc. v. Manitoba Association of Health Care Professionals",
        "citation": "[2011] 3 SCR 616, 2011 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc58"
        },
        "title": "R. v. Bouchard-Lebrun",
        "citation": "[2011] 3 SCR 575, 2011 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc57"
        },
        "title": "Public Service Alliance of Canada v. Canada Post Corp.",
        "citation": "[2011] 3 SCR 572, 2011 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc56"
        },
        "title": "Lax Kw\u0027alaams Indian Band v. Canada (Attorney General)",
        "citation": "[2011] 3 SCR 535, 2011 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc55"
        },
        "title": "R. v. Banwait",
        "citation": "[2011] 3 SCR 533, 2011 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc54"
        },
        "title": "R. v. Sarrazin",
        "citation": "[2011] 3 SCR 505, 2011 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc53"
        },
        "title": "Canada (Canadian Human Rights Commission) v. Canada (Attorney General)",
        "citation": "[2011] 3 SCR 471, 2011 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc52"
        },
        "title": "British Columbia (Workers\u0027 Compensation Board) v. Figliola",
        "citation": "[2011] 3 SCR 422, 2011 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc51"
        },
        "title": "R. v. Barros",
        "citation": "[2011] 3 SCR 368, 2011 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc50"
        },
        "title": "R. v. Dorfer",
        "citation": "[2011] 3 SCR 366, 2011 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc49"
        },
        "title": "R. v. Whyte",
        "citation": "[2011] 3 SCR 364, 2011 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc48"
        },
        "title": "R. v. Katigbak",
        "citation": "[2011] 3 SCR 326, 2011 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc47"
        },
        "title": "Crookes v. Newton",
        "citation": "[2011] 3 SCR 269, 2011 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc46"
        },
        "title": "R. v. Côté",
        "citation": "[2011] 3 SCR 215, 2011 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc45"
        },
        "title": "R. v. J.M.H.",
        "citation": "[2011] 3 SCR 197, 2011 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc44"
        },
        "title": "Canada (Attorney General) v. PHS Community Services Society",
        "citation": "[2011] 3 SCR 134, 2011 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc43"
        },
        "title": "R. v. Topp",
        "citation": "[2011] 3 SCR 119, 2011 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc42"
        },
        "title": "R. v. Imperial Tobacco Canada Ltd.",
        "citation": "[2011] 3 SCR 45, 2011 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc41"
        },
        "title": "Kuwait Airways Corp. v. Iraq",
        "citation": "[2011] 3 SCR 42, 2011 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc40"
        },
        "title": "R. v. Sinclair",
        "citation": "[2011] 3 SCR 3, 2011 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc39"
        },
        "title": "Dubé v. Canada",
        "citation": "[2011] 2 SCR 764, 2011 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc38"
        },
        "title": "Bastien Estate v. Canada",
        "citation": "[2011] 2 SCR 710, 2011 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc37"
        },
        "title": "Alberta (Aboriginal Affairs and Northern Development) v. Cunningham",
        "citation": "[2011] 2 SCR 670, 2011 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc36"
        },
        "title": "Canada Trustco Mortgage Co. v. Canada",
        "citation": "[2011] 2 SCR 635, 2011 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc35"
        },
        "title": "Schreyer v. Schreyer",
        "citation": "[2011] 2 SCR 605, 2011 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc34"
        },
        "title": "R. v. Nixon",
        "citation": "[2011] 2 SCR 566, 2011 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc33"
        },
        "title": "Aecon Buildings v. Stephenson Engineering Ltd.",
        "citation": "[2011] 2 SCR 560, 2011 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc32"
        },
        "title": "R. v. Campbell",
        "citation": "[2011] 2 SCR 549, 2011 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc31"
        },
        "title": "R. v. E.M.W.",
        "citation": "[2011] 2 SCR 542, 2011 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc30"
        },
        "title": "Canada (Attorney General) v. Mavi",
        "citation": "[2011] 2 SCR 504, 2011 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc29"
        },
        "title": "R. v. O\u0027Brien",
        "citation": "[2011] 2 SCR 485, 2011 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc28"
        },
        "title": "R. v. J.A.",
        "citation": "[2011] 2 SCR 440, 2011 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc27"
        },
        "title": "Masterpiece Inc. v. Alavida Lifestyles Inc.",
        "citation": "[2011] 2 SCR 387, 2011 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc26"
        },
        "title": "i Trade Finance Inc. v. Bank of Montreal",
        "citation": "[2011] 2 SCR 360, 2011 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc25"
        },
        "title": "Canada (Information Commissioner) v. Canada (Minister of National Defence)",
        "citation": "[2011] 2 SCR 306, 2011 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc24"
        },
        "title": "Alberta v. Elder Advocates of Alberta Society",
        "citation": "[2011] 2 SCR 261, 2011 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc23"
        },
        "title": "Sharbern Holding Inc. v. Vancouver Airport Centre Ltd.",
        "citation": "[2011] 2 SCR 175, 2011 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc22"
        },
        "title": "R. v. V.Y.",
        "citation": "[2011] 2 SCR 173, 2011 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc21"
        },
        "title": "R. v. Loewen",
        "citation": "[2011] 2 SCR 167, 2011 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc20"
        },
        "title": "Ontario (Attorney General) v. Fraser",
        "citation": "[2011] 2 SCR 3, 2011 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc19"
        },
        "title": "R. v. Reynolds",
        "citation": "[2011] 1 SCR 693, 2011 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc18"
        },
        "title": "British Columbia (Attorney General) v. Malik",
        "citation": "[2011] 1 SCR 657, 2011 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc17"
        },
        "title": "R. v. J.A.A.",
        "citation": "[2011] 1 SCR 628, 2011 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc16"
        },
        "title": "R. v. St-Onge",
        "citation": "[2011] 1 SCR 625, 2011 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc15"
        },
        "title": "Seidel v. TELUS Communications Inc.",
        "citation": "[2011] 1 SCR 531, 2011 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc14"
        },
        "title": "R. v. S.D.",
        "citation": "[2011] 1 SCR 527, 2011 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc13"
        },
        "title": "R. v. White",
        "citation": "[2011] 1 SCR 433, 2011 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc12"
        },
        "title": "Withler v. Canada (Attorney General)",
        "citation": "[2011] 1 SCR 396, 2011 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc11"
        },
        "title": "Québec (Attorney General) v. Canada",
        "citation": "[2011] 1 SCR 368, 2011 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc10"
        },
        "title": "Kerr v. Baranow",
        "citation": "[2011] 1 SCR 269, 2011 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc9"
        },
        "title": "Bou Malhab v. Diffusion Métromédia CMR inc.",
        "citation": "[2011] 1 SCR 214, 2011 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc8"
        },
        "title": "R. v. Miljevic",
        "citation": "[2011] 1 SCR 203, 2011 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc7"
        },
        "title": "Smith v. Alliance Pipeline Ltd.",
        "citation": "[2011] 1 SCR 160, 2011 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc6"
        },
        "title": "R. v. Ahmad",
        "citation": "[2011] 1 SCR 110, 2011 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc5"
        },
        "title": "R. v. Caron",
        "citation": "[2011] 1 SCR 78, 2011 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc4"
        },
        "title": "R. v. Bruce",
        "citation": "[2011] 1 SCR 76, 2011 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc3"
        },
        "title": "Canadian Broadcasting Corp. v. The Queen",
        "citation": "[2011] 1 SCR 65, 2011 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc2"
        },
        "title": "Canadian Broadcasting Corp. v. Canada (Attorney General)",
        "citation": "[2011] 1 SCR 19, 2011 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2011scc1"
        },
        "title": "Celgene Corp. v. Canada (Attorney General)",
        "citation": "[2011] 1 SCR 3, 2011 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc67"
        },
        "title": "Manuge v. Canada",
        "citation": "[2010] 3 SCR 672, 2010 SCC 67 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc66"
        },
        "title": "Canadian Food Inspection Agency v. Professional Institute of the Public Service of Canada",
        "citation": "[2010] 3 SCR 657, 2010 SCC 66 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc65"
        },
        "title": "Nu-Pharm Inc. v. Canada (Attorney General)",
        "citation": "[2010] 3 SCR 648, 2010 SCC 65 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc64"
        },
        "title": "Parrish \u0026 Heimbecker Ltd. v. Canada (Agriculture and Agri-Food)",
        "citation": "[2010] 3 SCR 639, 2010 SCC 64 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc63"
        },
        "title": "Canada (Attorney General) v. McArthur",
        "citation": "[2010] 3 SCR 626, 2010 SCC 63 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc62"
        },
        "title": "Canada (Attorney General) v. TeleZone Inc.",
        "citation": "[2010] 3 SCR 585, 2010 SCC 62 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc61"
        },
        "title": "Reference re Assisted Human Reproduction Act",
        "citation": "[2010] 3 SCR 457, 2010 SCC 61 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc60"
        },
        "title": "Century Services Inc. v. Canada (Attorney General)",
        "citation": "[2010] 3 SCR 379, 2010 SCC 60 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc58"
        },
        "title": "R. v. Tran",
        "citation": "[2010] 3 SCR 350, 2010 SCC 58 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc57"
        },
        "title": "Gavrila v. Canada (Justice)",
        "citation": "[2010] 3 SCR 342, 2010 SCC 57 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc56"
        },
        "title": "Németh v. Canada (Justice)",
        "citation": "[2010] 3 SCR 281, 2010 SCC 56 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc55"
        },
        "title": "R. v. Gomboc",
        "citation": "[2010] 3 SCR 211, 2010 SCC 55 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc53"
        },
        "title": "Beckman v. Little Salmon/Carmacks First Nation",
        "citation": "[2010] 3 SCR 103, 2010 SCC 53 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc54"
        },
        "title": "R. v. Hay",
        "citation": "[2010] 3 SCR 206, 2010 SCC 54 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc59"
        },
        "title": "R. v. White",
        "citation": "[2010] 3 SCR 374, 2010 SCC 59 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc52"
        },
        "title": "R. v. Lee",
        "citation": "[2010] 3 SCR 99, 2010 SCC 52 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc51"
        },
        "title": "de Montigny v. Brossard (Succession)",
        "citation": "[2010] 3 SCR 64, 2010 SCC 51 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc50"
        },
        "title": "R. v. Imoro",
        "citation": "[2010] 3 SCR 62, 2010 SCC 50 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc49"
        },
        "title": "R. v. Lutoslawski",
        "citation": "[2010] 3 SCR 60, 2010 SCC 49 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc48"
        },
        "title": "Royal Bank of Canada v. Radius Credit Union Ltd.",
        "citation": "[2010] 3 SCR 38, 2010 SCC 48 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc47"
        },
        "title": "Bank of Montreal v. Innovation Credit Union",
        "citation": "[2010] 3 SCR 3, 2010 SCC 47 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc46"
        },
        "title": "Communications, Energy and Paperworkers Union of Canada v. Native Child and Family Services of Toronto",
        "citation": "[2010] 2 SCR 737, 2010 SCC 46 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc45"
        },
        "title": "NIL/TU,O Child and Family Services Society v. B.C. Government and Service Employees\u0027 Union",
        "citation": "[2010] 2 SCR 696, 2010 SCC 45 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc44"
        },
        "title": "Christensen v. Roman Catholic Archbishop of Québec",
        "citation": "[2010] 2 SCR 694, 2010 SCC 44 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc43"
        },
        "title": "Rio Tinto Alcan Inc. v. Carrier Sekani Tribal Council",
        "citation": "[2010] 2 SCR 650, 2010 SCC 43 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc42"
        },
        "title": "R. v. Allen",
        "citation": "[2010] 2 SCR 648, 2010 SCC 42 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc41"
        },
        "title": "Globe and Mail v. Canada (Attorney General)",
        "citation": "[2010] 2 SCR 592, 2010 SCC 41 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc40"
        },
        "title": "Kuwait Airways Corp. v. Iraq",
        "citation": "[2010] 2 SCR 571, 2010 SCC 40 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc39"
        },
        "title": "Quebec (Attorney General) v. Canadian Owners and Pilots Association",
        "citation": "[2010] 2 SCR 536, 2010 SCC 39 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc38"
        },
        "title": "Quebec (Attorney General) v. Lacombe",
        "citation": "[2010] 2 SCR 453, 2010 SCC 38 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc37"
        },
        "title": "R. v. Willier",
        "citation": "[2010] 2 SCR 429, 2010 SCC 37 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc36"
        },
        "title": "R. v. McCrimmon",
        "citation": "[2010] 2 SCR 402, 2010 SCC 36 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc35"
        },
        "title": "R. v. Sinclair",
        "citation": "[2010] 2 SCR 310, 2010 SCC 35 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc34"
        },
        "title": "Burke v. Hudson\u0027s Bay Co.",
        "citation": "[2010] 2 SCR 273, 2010 SCC 34 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc33"
        },
        "title": "Progressive Homes Ltd. v. Lombard General Insurance Co. of Canada",
        "citation": "[2010] 2 SCR 245, 2010 SCC 33 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc32"
        },
        "title": "R. v. Pickton",
        "citation": "[2010] 2 SCR 198, 2010 SCC 32 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc31"
        },
        "title": "R. v. Cornell",
        "citation": "[2010] 2 SCR 142, 2010 SCC 31 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc30"
        },
        "title": "Syndicat des professeurs et des professeures de l\u0027Université du Québec à Trois-Rivières v. Université du Québec à Trois-Rivières",
        "citation": "[2010] 2 SCR 132, 2010 SCC 30 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc29"
        },
        "title": "Syndicat des professeurs du Cégep de Ste-Foy v. Quebec (Attorney General)",
        "citation": "[2010] 2 SCR 123, 2010 SCC 29 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc28"
        },
        "title": "Syndicat de la fonction publique du Québec v. Quebec (Attorney General)",
        "citation": "[2010] 2 SCR 61, 2010 SCC 28 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc27"
        },
        "title": "Vancouver (City) v. Ward",
        "citation": "[2010] 2 SCR 28, 2010 SCC 27 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc26"
        },
        "title": "R. v. Shea",
        "citation": "[2010] 2 SCR 17, 2010 SCC 26 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc25"
        },
        "title": "R. v. Levigne",
        "citation": "[2010] 2 SCR 3, 2010 SCC 25 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc24"
        },
        "title": "R. v. Nolet",
        "citation": "[2010] 1 SCR 851, 2010 SCC 24 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc23"
        },
        "title": "Ontario (Public Safety and Security) v. Criminal Lawyers\u0027 Association",
        "citation": "[2010] 1 SCR 815, 2010 SCC 23 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc22"
        },
        "title": "R. v. Conway",
        "citation": "[2010] 1 SCR 765, 2010 SCC 22 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc21"
        },
        "title": "Toronto Star Newspapers Ltd. v. Canada",
        "citation": "[2010] 1 SCR 721, 2010 SCC 21 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc20"
        },
        "title": "R. v. S.G.T.",
        "citation": "[2010] 1 SCR 688, 2010 SCC 20 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc19"
        },
        "title": "Yugraneft Corp. v. Rexx Management Corp.",
        "citation": "[2010] 1 SCR 649, 2010 SCC 19 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc18"
        },
        "title": "R. v. Hurley",
        "citation": "[2010] 1 SCR 637, 2010 SCC 18 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc17"
        },
        "title": "Quebec (Attorney General) v. Moses",
        "citation": "[2010] 1 SCR 557, 2010 SCC 17 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc16"
        },
        "title": "R. v. National Post",
        "citation": "[2010] 1 SCR 477, 2010 SCC 16 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc15"
        },
        "title": "R. v. Szczerbaniwicz",
        "citation": "[2010] 1 SCR 455, 2010 SCC 15 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc14"
        },
        "title": "Montréal (City) v. Montreal Port Authority",
        "citation": "[2010] 1 SCR 427, 2010 SCC 14 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc13"
        },
        "title": "R. v. Briscoe",
        "citation": "[2010] 1 SCR 411, 2010 SCC 13 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc12"
        },
        "title": "R. v. Laboucan",
        "citation": "[2010] 1 SCR 397, 2010 SCC 12 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc11"
        },
        "title": "Reference re Broome v. Prince Edward Island",
        "citation": "[2010] 1 SCR 360, 2010 SCC 11 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc10"
        },
        "title": "R. v. Cunningham",
        "citation": "[2010] 1 SCR 331, 2010 SCC 10 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc9"
        },
        "title": "R. v. Baker",
        "citation": "[2010] 1 SCR 329, 2010 SCC 9 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc8"
        },
        "title": "R. v. Morelli",
        "citation": "[2010] 1 SCR 253, 2010 SCC 8 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc7"
        },
        "title": "R. v. Beaulieu",
        "citation": "[2010] 1 SCR 248, 2010 SCC 7 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc6"
        },
        "title": "R. v. Nasogaluak",
        "citation": "[2010] 1 SCR 206, 2010 SCC 6 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc5"
        },
        "title": "Fullowka v. Pinkerton\u0027s of Canada Ltd.",
        "citation": "[2010] 1 SCR 132, 2010 SCC 5 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc4"
        },
        "title": "Tercon Contractors Ltd. v. British Columbia (Transportation and Highways)",
        "citation": "[2010] 1 SCR 69, 2010 SCC 4 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc3"
        },
        "title": "Canada (Prime Minister) v. Khadr",
        "citation": "[2010] 1 SCR 44, 2010 SCC 3 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010scc2"
        },
        "title": "MiningWatch Canada v. Canada (Fisheries and Oceans)",
        "citation": "[2010] 1 SCR 6, 2010 SCC 2 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2010canlii1135"
        },
        "title": "R. v. J.Z.S.",
        "citation": "[2010] 1 SCR 3, 2010 SCC 1 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2005canlii78927"
        },
        "title": "Edgar Richard Goforth v. Her Majesty the Queen",
        "citation": "2005 CanLII 78926 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "2001scc800"
        },
        "title": "Westec Aerospace Inc. v. Raytheon Aircraft Company",
        "citation": "[2001] 1 SCR 800, 2001 SCC 800 (CanLII)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1998canlii19445"
        },
        "title": "Corbière v. Canada (Minister of Indian and Northern Affairs)",
        "citation": "1998 CanLII 19445 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1997canlii17810"
        },
        "title": "Hill v. Nova Scotia (Attorney General)",
        "citation": "1997 CanLII 17810 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1997canlii17783"
        },
        "title": "Thomson Newspapers Co. v. Canada (Attorney General)",
        "citation": "1997 CanLII 17783 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1987canlii5373"
        },
        "title": "Emco Ltd. v. Union Insurance Society of Canton Ltd.",
        "citation": "1987 CanLII 5373 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1987canlii5366"
        },
        "title": "Papamonolopoulos v. Bd. of Education",
        "citation": "1987 CanLII 5366 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1987canlii5275"
        },
        "title": "Schnurr v. Royal Ottawa Hospital",
        "citation": "1987 CanLII 5275 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1986canlii3963"
        },
        "title": "Grahan v. persyko",
        "citation": "1986 CanLII 3963 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1986canlii4039"
        },
        "title": "Re City of Oshawa and 505191 Ontario Ltd.",
        "citation": "1986 CanLII 4039 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1986canlii3955"
        },
        "title": "Nelles v. The Queen",
        "citation": "1986 CanLII 3955 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1985canlii3114"
        },
        "title": "Greenberg v. Maffert",
        "citation": "1985 CanLII 3114 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1985canlii3122"
        },
        "title": "R. v. Lewis",
        "citation": "1985 CanLII 3122 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1985canlii3080"
        },
        "title": "Metals \u0026 Alloys Company Limited v. Regional Assessment Commissioner, Region Number 11",
        "citation": "1985 CanLII 3080 (SCC)"
    }, {
        "databaseId": "csc-scc",
        "caseId": {
            "en": "1970canlii222"
        },
        "title": "Bélanger v. The Queen",
        "citation": "[1970] SCR 567, 1970 CanLII 222 (SCC)"
    }

];
var csv = json2csv({ data: cases, fields: fields });

fs.writeFile('cases.csv', csv, function(err) {
  if (err) throw err;
  console.log('Case list converted and saved as CSV!!');
});

