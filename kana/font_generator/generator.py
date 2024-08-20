from PIL import Image, ImageDraw, ImageFont
import os

kanas = [
    "ア", "あ", "イ", "い", "ウ", "う", "エ", "え", "オ", "お", "カ", "か", "ガ", "が", "キ", "き", "ギ", "ぎ", "キャ", "きゃ", "ギャ", "ぎゃ", "キュ", "きゅ", "ギュ", "ぎゅ", "キョ", "きょ", "ギョ", "ぎょ", "ク", "く", "グ", "ぐ", "ケ", "け", "ゲ", "げ", "コ", "こ", "ゴ", "ご", "サ", "さ", "ザ", "ざ", "シ", "し", "ジ", "じ", "シャ", "しゃ", "ジャ", "じゃ", "シュ", "しゅ", "ジュ", "じゅ", "ショ", "しょ", "ジョ", "じょ", "ス", "す", "ズ", "ず", "セ", "せ", "ゼ", "ぜ", "ソ", "そ", "ゾ", "ぞ", "タ", "た", "ダ", "だ", "チ", "ち", "ヂ", "ぢ", "チャ", "ちゃ", "ヂャ", "ぢゃ", "チュ", "ちゅ", "ヂュ", "ぢゅ", "チョ", "ちょ", "ヂョ", "ぢょ", "ツ", "つ", "ヅ", "づ", "テ", "て", "デ", "で", "ト", "と", "ド", "ど", "ナ", "な", "ニ", "に", "ニャ", "にゃ", "ニュ", "にゅ", "ニョ", "にょ", "ヌ", "ぬ", "ネ", "ね", "ノ", "の", "ハ", "は", "バ", "ば", "パ", "ぱ", "ヒ", "ひ", "ビ", "び", "ピ", "ぴ", "ヒャ", "ひゃ", "ビャ", "びゃ", "ピャ", "ぴゃ", "ヒュ", "ひゅ", "ビュ", "びゅ", "ピュ", "ぴゅ", "ヒョ", "ひょ", "ビョ", "びょ", "ピョ", "ぴょ", "フ", "ふ", "ブ", "ぶ", "プ", "ぷ", "ヘ", "へ", "ベ", "べ", "ペ", "ぺ", "ホ", "ほ", "ボ", "ぼ", "ポ", "ぽ", "マ", "ま", "ミ", "み", "ミャ", "みゃ", "ミュ", "みゅ", "ミョ", "みょ", "ム", "む", "メ", "め", "モ", "も", "ヤ", "や", "ユ", "ゆ", "ヨ", "よ", "ラ", "ら", "リ", "り", "リャ", "りゃ", "リュ", "りゅ", "リョ", "りょ", "ル", "る", "レ", "れ", "ロ", "ろ", "ワ", "わ", "ヲ", "を", "ン", "ん"
]

fonts = [
    "sakamata-font-500-nostrict.ttf"
]

colors = [
    "white",
    "black"
]

def get_font_size(font_name, image, text_to_render):
    fontsize = 10
    font = ImageFont.truetype(font_name, fontsize)
    while font.getbbox(text_to_render)[2] < image.size[0] and font.getbbox(text_to_render)[3] < image.size[1]:
        fontsize += 1
        font = ImageFont.truetype(font_name, fontsize)
    return fontsize

for kana in kanas:
    for font in fonts:
        for color in colors:
            image_width, image_height = (92, 60)
            image = Image.new(mode = "RGBA", size = (image_width, image_height))
            draw = ImageDraw.Draw(image)

            initialized_font = ImageFont.truetype(font, get_font_size(font, image, kana))
            _, _, textbox_width, textbox_height = draw.textbbox((0, 0), kana, font = initialized_font)
            draw.text(((image_width-textbox_width)/2, (image_height-textbox_height)/2), kana, font = initialized_font, fill = color)

            font_folder = font.rsplit(".", 1)[0] + "_" + color
            os.makedirs(font_folder, exist_ok=True)
            image.save(font_folder + "/" + kana + ".png")
