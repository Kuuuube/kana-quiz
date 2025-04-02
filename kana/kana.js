let kana = {
	'hsingle':
		{ 'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o' },
	'hk':
		{ 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko' },
	'hs':
		{ 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so' },
	'ht':
		{ 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to' },
	'hn':
		{ 'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no' },
	'hh':
		{ 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho' },
	'hm':
		{ 'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo' },
	'hy':
		{ 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo' },
	'hr':
		{ 'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro' },
	'hw':
		{ 'わ': 'wa', 'を': 'wo' },
	'hn1':
		{ 'ん': 'n' },
	'hg':
		{ 'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go' },
	'hz':
		{ 'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo' },
	'hd':
		{ 'だ': 'da', 'ぢ': 'di', 'づ': 'du', 'で': 'de', 'ど': 'do' },
	'hb':
		{ 'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo' },
	'hp':
		{ 'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po' },

	'hdk':
		{ 'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo' },
	'hds':
		{ 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho' },
	'hdc':
		{ 'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho' },
	'hdn':
		{ 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo' },
	'hdh':
		{ 'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo' },
	'hdm':
		{ 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo' },
	'hdr':
		{ 'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo' },
	'hdg':
		{ 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo' },
	'hdj':
		{ 'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo' },
	'hdj2':
		{ 'ぢゃ': 'dya', 'ぢゅ': 'dyu', 'ぢょ': 'dyo' },
	'hdb':
		{ 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo' },
	'hdp':
		{ 'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo' },


	'ksingle':
		{ 'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o' },
	'kk':
		{ 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko' },
	'ks':
		{ 'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so' },
	'kt':
		{ 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to' },
	'kn':
		{ 'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no' },
	'kh':
		{ 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho' },
	'km':
		{ 'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo' },
	'ky':
		{ 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo' },
	'kr':
		{ 'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro' },
	'kw':
		{ 'ワ': 'wa', 'ヲ': 'o' },
	'kn1':
		{ 'ン': 'n' },
	'kg':
		{ 'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go' },
	'kz':
		{ 'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo' },
	'kd':
		{ 'ダ': 'da', 'ヂ': 'di', 'ヅ': 'du', 'デ': 'de', 'ド': 'do' },
	'kb':
		{ 'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo' },
	'kp':
		{ 'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po' },

	'kdk':
		{ 'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo' },
	'kds':
		{ 'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho' },
	'kdc':
		{ 'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho' },
	'kdn':
		{ 'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo' },
	'kdh':
		{ 'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo' },
	'kdm':
		{ 'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo' },
	'kdr':
		{ 'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo' },
	'kdg':
		{ 'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo' },
	'kdj':
		{ 'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo' },
	'kdj2':
		{ 'ヂャ': 'dya', 'ヂュ': 'dyu', 'ヂョ': 'dyo' },
	'kdb':
		{ 'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo' },
	'kdp':
		{ 'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo' },
}

let show_tools = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'];

let replacements = {
	'wo': ['o'],
	'chi': ['ti'],
	'shi': ['si'],
	'tsu': ['tu'],
	'du': ['zu'],
	'di': ['ji', 'zi'],
	'fu': ['hu'],
	'dya': ['ja'],
	'dyo': ['jo'],
	'dyu': ['ju'],
	'sha': ['sya'],
	'shu': ['syu'],
	'sho': ['syo'],
};

function get_display_reading(reading) {
	let display_replacements = {
		'wo': 'o',
		'du': 'zu',
		'di': 'ji',
		'dya': 'ja',
		'dyo': 'jo',
		'dyu': 'ju',
	};

	return display_replacements[reading] ?? reading;
}

let active = [];
let shuffled = [];
let fonts = [];

let cur_kana;
let cur_reading;

let total_answered = 0;
let total_correct = 0;
let wrong = false;

function save_settings() {
	const inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			const checked = inputs[i].checked ? '1' : '0';
			localStorage.setItem('kana_' + inputs[i].id, checked);
		}
	}

	collect();
}

function load_settings() {
	const inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			const setting = localStorage.getItem('kana_' + inputs[i].id);
			if (setting === '1') {
				inputs[i].checked = true;
			} else if (setting === '0') {
				inputs[i].checked = false;
			}
		}
	}

	collect();
}

// eslint-disable-next-line no-unused-vars
function check(set) {
	let trs = document.getElementsByClassName(set);
	for (let i = 0; i < trs.length; i++) {
		let tds = trs[i].children;
		for (let x = 0; x < tds.length; x++) {
			tds[x].children[0].checked = true;
		}
	}
	save_settings();
}

// eslint-disable-next-line no-unused-vars
function uncheck(set) {
	let trs = document.getElementsByClassName(set);
	for (let i = 0; i < trs.length; i++) {
		let tds = trs[i].children;
		for (let x = 0; x < tds.length; x++) {
			tds[x].children[0].checked = false;
		}
	}
	save_settings();
}

function shuffle(orig_array) {
	let array = orig_array.slice(0);
	let currentIndex = array.length, temporaryValue, randomIndex;

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
	const kanacheck = document.getElementsByClassName('kanacheck');
	active = [];
	shuffled = [];
	for (let i = 0; i < kanacheck.length; i++) {
		const cur = kanacheck[i];
		if (cur.checked == true) {
			for (const p in kana[cur.id]) {
				active.push([p, kana[cur.id][p]]);
			}
		}
	}

	fonts = [];
	const fontcheck = document.getElementsByClassName('fontcheck');
	for (let i = 0; i < fontcheck.length; i++) {
		if (fontcheck[i].checked == true) {
			fonts.push(fontcheck[i].id);
		}
	}
}

function show_kana() {
	wrong = false;
	document.getElementById('input_box').value = '';

	if (active.length == 0) {
		document.getElementById('hsingle').checked = true;
		save_settings();
	}

	if (fonts.length == 0) {
		document.getElementById('default').checked = true;
		save_settings();
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

	let font = fonts[Math.floor(Math.random() * fonts.length)];

	if (font == 'default') {
		document.getElementById('kana').innerHTML = cur_kana;
	} else {
		document.getElementById('kana').innerHTML = '<img id="kana_image" src="fonts/' + font + '/' + cur_kana + '.png" />';
		//when image fails to load
		document.getElementById('kana_image').onerror = function() {
			collect();
			show_kana();
		};
	}
	document.getElementById('answer').innerHTML = get_display_reading(cur_reading);

	if (show_tools.indexOf(cur_kana) == -1) {
		document.getElementById('tool_stroke').style.visibility = 'hidden';
	} else {
		document.getElementById('tool_stroke').style.visibility = 'visible';
	}
}

function check_answer() {
	let answer = document.getElementById('input_box').value.toLowerCase();
	if (!answer || answer.length <= 0) {
		return;
	}

	let chars = answer.split('');

	let possible = [cur_reading];
	if (cur_reading in replacements) {
		possible = possible.concat(replacements[cur_reading]);
	}

	let err = false;
	for (let i = 0; i < chars.length; i++) {
		err = true;

		for (let x = 0; x < possible.length; x++) {
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
		if (document.getElementById('wrong-answer-hint').checked) {
			document.getElementById('message').innerHTML = '<span id="wrong">' + cur_kana + ' = ' + get_display_reading(cur_reading) + '</span>';
		}
		if (document.getElementById('wrong-answer-audio').checked && chars[0] !== "x") {
			play_sound();
		}
	}

	if (answer == cur_reading) {
		total_answered += 1;
		if (!wrong) {
			total_correct += 1;
		}
		show_kana();
	}

	if (total_answered > 0) {
		document.getElementById('count').innerHTML = total_correct + '/' + total_answered;
		if (!wrong) {
			document.getElementById('message').innerHTML = '&nbsp;';
		}
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

let audioIndex = Math.floor(Math.random() * 2) + 1;
function play_sound() {
	audioIndex = audioIndex == 1 ? 2 : 1;
	let audio = new Audio('../audio/' + cur_reading + '_' + audioIndex + '.mp3');
	audio.play();
	document.getElementById('input_box').focus();
}

// eslint-disable-next-line no-unused-vars
function play_other(file) {
	let audio = new Audio('../audio/' + file + '.mp3');
	audio.play();
}

function stroke_order() {
	document.getElementById('kana').innerHTML = '<img src="stroke/' + cur_kana + '.gif" id="stroke" />';
	document.getElementById('input_box').focus();
}


onload = function () {
	load_settings();

	let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			inputs[i].onclick = save_settings;
			inputs[i].onpropertychange = inputs[i].oninput;
		}
	}

	show_kana();

	document.getElementById('tool_sound').onclick = play_sound;
	document.getElementById('tool_stroke').onclick = stroke_order;

	let kana_div = document.getElementById('kana');
	kana_div.addEventListener("mouseover", show_answer, false);
	kana_div.addEventListener("mouseout", hide_answer, false);

	let answer_input = document.getElementById('input_box');
	answer_input.focus();
	answer_input.addEventListener("input", check_answer, false);

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
