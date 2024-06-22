var kana = {
	'hentaigana-a': {'𛀂𛀅𛀃𛀄':'a'},
	'hentaigana-i': {'𛀆𛀇𛀈𛀉':'i'},
	'hentaigana-u': {'𛀊𛀋𛀌𛀍𛀎':'u'},
	'hentaigana-e': {'𛀁𛀏𛀐𛀑𛀒𛀓':'e'},
	'hentaigana-o': {'𛀔𛀕𛀖':'o'},
	'hentaigana-ka': {'𛀗𛀘𛀙𛀚𛀛𛀢𛀜𛀝𛀞𛀟𛀠𛀡':'ka'},
	'hentaigana-ki': {'𛀣𛀤𛀥𛀦𛀻𛀧𛀨𛀩𛀪':'ki'},
	'hentaigana-ku': {'𛀫𛀬𛀭𛀮𛀯𛀰𛀱':'ku'},
	'hentaigana-ke': {'𛀳𛀲𛀢𛀴𛀵𛀶𛀷':'ke'},
	'hentaigana-ko': {'𛀸𛂘𛀹𛀻𛀺':'ko'},
	'hentaigana-sa': {'𛀼𛀽𛀾𛀿𛁀𛁁𛁂𛁃':'sa'},
	'hentaigana-si': {'𛁄𛁅𛁆𛁇𛁈𛁉':'shi'},
	'hentaigana-su': {'𛁊𛁋𛁌𛁍𛁎𛁏𛁐𛁑':'su'},
	'hentaigana-se': {'𛁒𛁓𛁔𛁕𛁖':'se'},
	'hentaigana-so': {'𛁗𛁘𛁙𛁚𛁛𛁜𛁝':'so'},
	'hentaigana-ta': {'𛁞𛁟𛁠𛁡':'ta'},
	'hentaigana-ti': {'𛁢𛁣𛁤𛁥𛁦𛁧𛁨':'chi'},
	'hentaigana-tu': {'𛁩𛁪𛁫𛁬𛁭':'tsu'},
	'hentaigana-te': {'𛁮𛁯𛁰𛁱𛁲𛁳𛁴𛁵𛁶𛂎':'te'},
	'hentaigana-to': {'𛁷𛁸𛁹𛁺𛁻𛁼𛁽𛁭':'to'},

	'hentaigana-na': {'𛁾𛁿𛂀𛂁𛂂𛂃𛂄𛂅𛂆':'na'},
	'hentaigana-ni': {'𛂇𛂈𛂉𛂊𛂋𛂌𛂍𛂎':'ni'},
	'hentaigana-nu': {'𛂏𛂐𛂑':'nu'},
	'hentaigana-ne': {'𛂒𛂓𛂔𛂕𛂖𛂗𛂘':'ne'},
	'hentaigana-no': {'𛂙𛂚𛂛𛂜𛂝':'no'},
	'hentaigana-ha': {'𛂞𛂟𛂠𛂡𛂢𛂣𛂤𛂥𛂦𛂧𛂨':'ha'},
	'hentaigana-hi': {'𛂩𛂪𛂫𛂬𛂭𛂮𛂯':'hi'},
	'hentaigana-hu': {'𛂰𛂱𛂲':'hu'},
	'hentaigana-he': {'𛂳𛂴𛂵𛂶𛂷𛂸𛂹':'he'},
	'hentaigana-ho': {'𛂺𛂻𛂼𛂽𛂾𛂿𛃀𛃁':'ho'},
	'hentaigana-ma': {'𛃂𛃃𛃄𛃅𛃆𛃇𛃈𛃖':'ma'},
	'hentaigana-mi': {'𛃉𛃊𛃋𛃌𛃍𛃎𛃏':'mi'},
	'hentaigana-mu': {'𛃐𛃑𛃒𛃓𛄝𛄞':'mu'},
	'hentaigana-me': {'𛃔𛃕𛃖':'me'},
	'hentaigana-mo': {'𛃗𛃘𛃙𛃚𛃛𛃜𛄝𛄞':'mo'},
	'hentaigana-ya': {'𛃝𛃞𛃟𛃠𛃡𛃢':'ya'},
	'hentaigana-yi': {'𛀆':'yi'},
	'hentaigana-yu': {'𛃣𛃤𛃥𛃦':'yu'},
	'hentaigana-ye': {'𛀁':'ye'},
	'hentaigana-yo': {'𛃧𛃨𛃩𛃪𛃫𛃬𛃢':'yo'},

	'hentaigana-ra': {'𛃭𛃮𛃯𛃰𛁽':'ra'},
	'hentaigana-ri': {'𛃱𛃲𛃳𛃴𛃵𛃶𛃷':'ri'},
	'hentaigana-ru': {'𛃸𛃹𛃺𛃻𛃼𛃽':'ru'},
	'hentaigana-re': {'𛃾𛃿𛄀𛄁':'re'},
	'hentaigana-ro': {'𛄂𛄃𛄄𛄅𛄆𛄇':'ro'},
	'hentaigana-wa': {'𛄈𛄉𛄊𛄋𛄌':'wa'},
	'hentaigana-wi': {'𛄍𛄎𛄏𛄐𛄑':'wi'},
	'hentaigana-wu': {'𛄟':'wu'},
	'hentaigana-we': {'𛄒𛄓𛄔𛄕':'we'},
	'hentaigana-wo': {'𛄖𛄗𛄘𛄙𛄚𛄛𛄜𛀅':'o'},
	'hentaigana-n': {'𛄝𛄞':'n'},
}

var active = [];
var shuffled = [];

var replacements = {
	'o': ['wo'],
	'chi': ['ci'],
	'shi': ['si'],
	'tsu': ['tu'],
	'zu': ['du'],
	'ji': ['di', 'zi'],
	'fu': ['hu'],
	'ja': ['dya'],
	'jo': ['dyo'],
	'ju': ['dyu']
};

var cur_kana;
var cur_reading;

var total_answered = 0;
var total_correct = 0;

function save_settings() {
	inputs = document.getElementsByTagName('input');
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			checked = inputs[i].checked ? '1' : '0';
			localStorage.setItem('kana_' + inputs[i].id, checked);
		}
	}

	collect();
}

function load_settings() {
	inputs = document.getElementsByTagName('input');
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			var setting = localStorage.getItem('kana_' + inputs[i].id);
			if (setting === '1') {
				inputs[i].checked = true;
			} else if (setting === '0') {
				inputs[i].checked = false;
			}
		}
	}

	collect();
}

function check(set) {
	var trs = document.getElementsByClassName(set);
	for (i = 0; i < trs.length; i++) {
		var tds = trs[i].children;
		for (x = 0; x < tds.length; x++) {
			if (tds[x].children[0].id != 'KOI-WIN') {
				tds[x].children[0].checked = true;
			}
		}
	}
	save_settings();
}

function uncheck(set) {
	var trs = document.getElementsByClassName(set);
	for (i = 0; i < trs.length; i++) {
		var tds = trs[i].children;
		for (x = 0; x < tds.length; x++) {
			tds[x].children[0].checked = false;
		}
	}
	save_settings();
}

function shuffle(orig_array) {
	var array = orig_array.slice(0);
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function collect() {
	kanacheck = document.getElementsByClassName('kanacheck');
	active = [];
	shuffled = [];
	for (i = 0; i < kanacheck.length; i++) {
		cur = kanacheck[i];
		if (cur.checked == true) {
			for (let key in kana[cur.id]) {
				let key_array = Array.from(key);
				for (let j = 0; j < key_array.length; j++) {
					active.push([key_array[j], kana[cur.id][key]]);
				}
			}
		}
	}
}

function show_kana() {
	wrong = false;
	document.getElementById('input_box').value = '';

	if (active.length == 0) {
		document.getElementById('hentaigana-a').checked = true;
		save_settings();
	}

	if (total_answered > 0) {
		document.getElementById('count').innerHTML = total_correct + '/' + total_answered;
	}

	if (shuffled.length == 0) {
		shuffled = shuffle(active);
	}

	if (cur_kana && shuffled[0][0] == cur_kana) {
		shuffled.shift();
	}

	cur_kana = shuffled[0][0];
	cur_reading = shuffled[0][1];

	shuffled.shift();

	document.getElementById('kana').innerHTML = cur_kana;

	document.getElementById('answer').innerHTML = cur_reading;
}

function check_answer() {
	answer = document.getElementById('input_box').value.toLowerCase();
	if (!answer) {
		answer = 'x';
	}

	chars = answer.split('');

	possible = [cur_reading];
	if (cur_reading in replacements) {
		possible = possible.concat(replacements[cur_reading]);
	}

	for (i = 0; i < chars.length; i++) {
		var err = true;

		for (x = 0; x < possible.length; x++) {
			if (chars[i] == possible[x].charAt(i)) {
				err = false;
			}
			if (answer == possible[x]) {
				answer = cur_reading;
			}
		}

		if (err) {
			break;
		}
	}

	if (err) {
		wrong = true;
		document.getElementById('message').innerHTML = '<span id="wrong">' + cur_kana + ' = ' + cur_reading + '</span>';
	}

	if (answer == cur_reading) {
		total_answered += 1;
		if (!wrong) {
			total_correct += 1;
		}
		show_kana();
	}
}

function force_next() {
	if (shuffled.length > 3) {
		shuffled.splice(3, 0, [cur_kana, cur_reading]);
	}
	if (shuffled.length > 13) {
		shuffled.splice(13, 0, [cur_kana, cur_reading]);
	}
	total_answered += 1;

	show_kana();
}

function show_answer() {
	document.getElementById('answer').style.visibility = 'visible';
}

function hide_answer() {
	document.getElementById('answer').style.visibility = 'hidden';
}

function play_sound() {
	var audio = new Audio('../audio/' + cur_reading + '.mp3');
	audio.play();
	document.getElementById('input_box').focus();
}

function play_other(file) {
	var audio = new Audio('../audio/' + file + '.mp3');
	audio.play();
}

function stroke_order() {
	document.getElementById('kana').innerHTML = '<img src="stroke/' + cur_kana + '.gif" id="stroke" />';
	document.getElementById('input_box').focus();
}


onload = function () {
	load_settings();

	inputs = document.getElementsByTagName('input');
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			inputs[i].onclick = save_settings;
			inputs[i].onpropertychange = inputs[i].oninput;
		}
	}

	show_kana();

	var kana_div = document.getElementById('kana');
	kana_div.onmouseover = show_answer;
	kana_div.onmouseout = hide_answer;

	var answer_input = document.getElementById('input_box');
	answer_input.focus();
	answer_input.oninput = check_answer;
	answer_input.onpropertychange = answer_input.oninput;

	document.body.onkeydown = function (e) {
		let focus_keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let submit_keys = [" ", "Enter"];
		if ((focus_keys.includes(e.key) || submit_keys.includes(e.key)) && !(e.ctrlKey || e.altKey || e.metaKey)) {
			document.getElementById('input_box').focus();
		}

		if (submit_keys.includes(e.key)) {
			e.preventDefault();
			if (!wrong) {
				check_answer();
			} else {
				force_next();
			}
		}
	}
}