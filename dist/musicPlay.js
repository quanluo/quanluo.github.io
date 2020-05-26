const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'SURPRISE-DRIVE',
            artist: '松冈充',
            url: 'http://music.163.com/song/media/outer/url?id=29751409.mp3',
            cover: 'http://p1.music.126.net/Oo0kXusaoF9DGwjAJFeAtA==/6671836558494023.jpg',
            lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
        {
            name: 'Be The One',
            artist: 'PANDORA / Beverly',
            url: 'http://music.163.com/song/media/outer/url?id=530986958.mp3',
            cover: 'http://p1.music.126.net/91YBBcxEO37hoIfm9W5TjA==/109951163116520306.jpg',
            theme: '#46718b'
        },
		{
            name: '我ら思う、故に我ら在り',
            artist: '氣志團',
            url: 'http://music.163.com/song/media/outer/url?id=40729281.mp3',
            cover: 'http://p1.music.126.net/5kUo3f5_GyyQNiSvPOIhXA==/18610333813518047.jpg',
            theme: '#46718b'
        },
		{
            name: 'Anything Goes! (「仮面ライダーオーズ/000」)',
            artist: '大黒摩季',
            url: 'http://music.163.com/song/media/outer/url?id=38689229.mp3',
            cover: 'http://p2.music.126.net/mQxtTZ1t2ZHS8LJ4qEDLWQ==/2543170398297999.jpg',
            lrc: '/./dist/music/lrc/38689229.lrc',
	    theme: '#46718b'
        },
		{
            name: 'Break the Chain (「仮面ライダーキバ」)',
            artist: 'Tourbillon',
            url: 'http://music.163.com/song/media/outer/url?id=38689234.mp3',
            cover: 'http://p2.music.126.net/mQxtTZ1t2ZHS8LJ4qEDLWQ==/2543170398297999.jpg',
            lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },
		{
            name: 'Just Live More',
            artist: '湘南乃風',
            url: 'http://rh01.sycdn.kuwo.cn/resource/n2/99/25/305360002.mp3',
            cover: 'http://img1.kuwo.cn/star/starheads/120/82/85/3360615613.jpg',
	    lrc: '/./dist/music/lrc/湘南乃風-Just Live More.lrc',
            theme: '#46718b'
        }
    ]
});