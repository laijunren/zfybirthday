// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "曾凡一！",
        "你好吗？",//这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最近有开心吧",  // 同上...
        "生日快乐呀～",
        "找了好久都没有喜欢的照片",
        "就没放在这里了，因为..",
        "每一张都好看，哈哈",
        "嗯想说的有点长",
        "就当是我对你的一封笑忘书吧",
        "确实冰岛没有想象中的美好",
        "可能是天气的不好",
        "也是花费太高了",
        "或许是对它期待过高了",
        "嗯，也许是有人不在身边吧",
        "加上遇到暴雪无法返回时",
        "感觉又难上了几分",
        "可是啊不可思议的事发生了",
        "嗯有人说我是她男朋友诶",
        "嗯..是魔法药水的功效",
        "循次苦旅，以达繁星",
        "好像是这样的",
        "不用再纠结，应该要这样的",
        "但是啊，我好像太害怕了",
        "距离真的能拖垮一切",
        "体会过的我",
        "找不到方法，没办法解决它",
        "我只能回避，想着回去应该会好吧",
        "只要在等一会，就一会",
        "我们就能见面了，时间很快",
        "我快要抓住它了",
        "现在想想，我们好像",
        "生日都没有在一起庆祝过吧",
        "嗯，想想也是",
        "好像时间从来没有友善过哦",
        "才发现",
        "但是以后应该会好吧",
        "嗯..",
        "很想念去看康姆士的日子",
        "也很期待一起的旅游",
        "也会很期待以后的日子",
        "当然也很想你的日子",
        "不想会是是幻想~~",
        "~该是要如何，就如何",
        "要许愿了哦",
        "너의 기억에 난 어떤 사람일까",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "记得好像是过年的时候发的": "./imgs/1.jpg",
        "求你照片的时候发的": "./imgs/2.jpg",
        "这张片也是": "./imgs/3.jpg",
        "嗯好像是主动的": "./imgs/4.jpg",
        "青春啊": "./imgs/5.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
