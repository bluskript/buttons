const lyrics = [
    [
        29000,
        'Nagareteku toki no naka de demo kedarusa ga hora guruguru mawatte',
        '流れてく　時の中ででも　気だるさが　ほらグルグル廻って'
    ],
    [
        36000,
        'Watashi kara hanareru kokoro mo mienaiwa sou shiranai?',
        '私から　離れる心も　見えないわ　そう知らない？'
    ],
    [
        43000,
        'Jibun kara ugoku koto mo naku toki no sukima ni nagasare tsuzukete',
        '自分から　動くこともなく　時の隙間に　流され続けて'
    ],
    [
        50000,
        'Shiranai wa mawari no koto nado watashi wa watashi sore dake',
        '知らないわ　周りのことなど　私は私　それだけ'
    ],
    [
        57000,
        'Yume miteru? Nani mo mitenai? Kataru mo muda na jibun no kotoba',
        '夢見てる？　なにも見てない？　語るも無駄な　自分の言葉'
    ],
    [
        63500,
        'Kanashimu nante tsukareru dake yo nani mo kanjizu sugoseba ii no',
        '悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの'
    ],
    [
        70500,
        'Tomadou kotoba ataerarete mo jibun no kokoro tada uwa no sora',
        '戸惑う言葉　与えられても　自分の心　ただ上の空'
    ],
    [
        77500,
        'Moshi watashi kara ugoku no naraba subete kaeru no nara kuro ni suru',
        'もし私から　動くのならば　すべて変えるのなら　黒にする'
    ],
    [
        84500,
        'Konna jibun ni mirai wa aru no? Konna sekai ni watashi wa iru no?',
        'こんな自分に　未来はあるの？　こんな世界に　私はいるの？'
    ],
    [
        91500,
        'Ima setsunai no? Ima kanashii no? Jibun no koto mo wakaranai mama',
        '今切ないの？　今悲しいの？　自分の事も　わからないまま'
    ],
    [
        98000,
        'Ayumu koto sae tsukareru dake yo hito no koto nado shiri mo shinaiwa',
        '歩むことさえ　疲れるだけよ　人のことなど　知りもしないわ'
    ],
    [
        105000,
        'Konna watashi mo kawareru no nara moshi kawareru no nara shiro ni naru',
        'こんな私も　変われるのなら　もし変われるのなら　白になる'
    ],
    [
        112000,
        '',
        ''
    ],
    [
        126500,
        'Nagareteku toki no naka de demo kedarusa ga hora guruguru mawatte',
        '流れてく　時の中ででも　気だるさがほら　グルグル廻って'
    ],
    [
        133500,
        'Watashi kara hanareru kokoro mo mienaiwa sou shiranai?',
        '私から　離れる心も　見えないわそう　知らない？'
    ],
    [
        140500,
        'Jibun kara ugoku koto mo naku toki no sukima ni nagasare tsuzukete',
        '自分から　動くこともなく　時の隙間に　流され続けて'
    ],
    [
        147500,
        'Shiranai wa mawari no koto nado watashi wa watashi sore dake',
        '知らないわ　周りのことなど　私は私　それだけ'
    ],
    [
        154500,
        'Yume miteru? Nani mo mitenai? Kataru mo muda na jibun no kotoba',
        '夢見てる？　なにも見てない？　語るも無駄な　自分の言葉'
    ],
    [
        161000,
        'Kanashimu nante tsukareru dake yo nani mo kanjizu sugoseba ii no',
        '悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの'
    ],
    [
        168000,
        'Tomadou kotoba ataerarete mo jibun no kokoro tada uwa no sora',
        '戸惑う言葉　与えられても　自分の心　ただ上の空'
    ],
    [
        174500,
        'Moshi watashi kara ugoku no naraba subete kaeru no nara kuro ni suru',
        'もし私から　動くのならば　すべて変えるのなら　黒にする'
    ],
    [
        181500,
        'Ugoku no naraba ugoku no naraba subete kowasuwa subete kowasuwa',
        '動くのならば　動くのならば　すべて壊すわ　すべて壊すわ'
    ],
    [
        188500,
        'Kanashimu naraba kanashimu naraba watashi no kokoro shiroku kawareru?',
        '悲しむならば　悲しむならば　私の心　白く変われる？'
    ],
    [
        195500,
        'Anata no koto mo watashi no koto mo subete no koto mo mada shiranai no',
        '貴方の事も　私のことも　全ての事も　まだ知らないの'
    ],
    [
        202500,
        'Omoi mabuta wo aketa no naraba subete kowasu no nara kuro ni nare!!!',
        '重い目蓋を　開けたのならば　すべて壊すのなら　黒になれ！！！'
    ],
    [
        210000,
        ':3',
        ':3'
    ]
];

// what the fuck typescript
export default lyrics.sort((a, b) => (a[0] as number) - (b[0] as number));