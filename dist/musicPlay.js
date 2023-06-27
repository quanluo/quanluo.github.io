const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.5,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '夏の喚く',
            artist: '邱有句',
            url: 'http://music.163.com/song/media/outer/url?id=434871406.mp3',
            cover: 'http://p1.music.126.net/7BPYzlYTQp285WXdO-u2Ug==/18215609137826245.jpg',
            lrc: '/./dist/music/lrc/434871406.lrc',
            theme: '#46718b'
        },
        {
            name: 'Journey',
            artist: 'Capo Productions',
            url: 'http://music.163.com/song/media/outer/url?id=16846088.mp3',
            cover: 'http://p1.music.126.net/x-LVbj4tX6oEDH3qkqJP2g==/663005511556827.jpg',
            theme: '#46718b'
        },
		{
            name: 'River Flows In You',
            artist: 'Martin Ermen',
            url: 'http://music.163.com/song/media/outer/url?id=20110049.mp3',
            cover: 'http://p1.music.126.net/QnFSKGqltSSQ1PAO3z44dg==/5680077069158217.jpg',
            theme: '#46718b'
        },
		{
            name: 'Somewhere',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=5307932.mp3',
            cover: 'http://p1.music.126.net/wpk6nSJhIhmQTzCq7oh_Hg==/731175232477827.jpg',
            lrc: '/./dist/music/lrc/38689229.lrc',
	    theme: '#46718b'
        },
		{
            name: '盗将行',
            artist: '花粥 / 马雨阳',
            url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
            cover: 'http://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg',
            lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },
    ]
});