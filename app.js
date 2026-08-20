const homeScreen = document.getElementById("homeScreen");
const oneCardBtn = document.getElementById("oneCardBtn");
const oneCardScreen = document.getElementById("oneCardScreen");

const backHome = document.getElementById("backHome");

const randomBtn = document.getElementById("randomBtn");

const questionScreen = document.getElementById("questionScreen");
const backQuestion = document.getElementById("backQuestion");
const drawFromQuestion = document.getElementById("drawFromQuestion");
const questionInput = document.getElementById("questionInput");
const moodChips = document.querySelectorAll(".mood-chip");

const resultScreen = document.getElementById("resultScreen");
const backOneCard = document.getElementById("backOneCard");
const drawAgain = document.getElementById("drawAgain");

const cardRoman = document.getElementById("cardRoman");
const cardName = document.getElementById("cardName");
const cardPosition = document.getElementById("cardPosition");
const readCardBtn = document.getElementById("readCardBtn");
const cardMeaning = document.getElementById("cardMeaning");
const copyAiBtn = document.getElementById("copyAiBtn");

const meaningKeywords = document.getElementById("meaningKeywords");
const meaningMessage = document.getElementById("meaningMessage");

const newReadingBtn = document.getElementById("newReadingBtn");
const newReadingScreen = document.getElementById("newReadingScreen");
const backNewReading = document.getElementById("backNewReading");

const threeSpreadScreen = document.getElementById("threeSpreadScreen");
const backThreeSpread = document.getElementById("backThreeSpread");
const flowSpreadBtn = document.getElementById("flowSpreadBtn");

const spreadQuestionScreen =
  document.getElementById("spreadQuestionScreen");

const backSpreadQuestion =
  document.getElementById("backSpreadQuestion");

const spreadQuestionTitle =
  document.getElementById("spreadQuestionTitle");

const spreadQuestionSubtitle =
  document.getElementById("spreadQuestionSubtitle");

const spreadQuestionInput =
  document.getElementById("spreadQuestionInput");

const spreadMoodChips =
  document.querySelectorAll(".spread-mood-chip");

const drawSpreadBtn =
  document.getElementById("drawSpreadBtn");

const spreadResultScreen =
  document.getElementById("spreadResultScreen");

const backSpreadResult =
  document.getElementById("backSpreadResult");

const spreadCards = [
  document.getElementById("spreadCard1"),
  document.getElementById("spreadCard2"),
  document.getElementById("spreadCard3")
];

const spreadCardNames = [
  document.getElementById("spreadCardName1"),
  document.getElementById("spreadCardName2"),
  document.getElementById("spreadCardName3")
];

const spreadCardPositions = [
  document.getElementById("spreadCardPosition1"),
  document.getElementById("spreadCardPosition2"),
  document.getElementById("spreadCardPosition3")
];

const copySpreadAiBtn =
  document.getElementById("copySpreadAiBtn");

const drawSpreadAgain =
  document.getElementById("drawSpreadAgain");

const physicalReadingBtn =
  document.getElementById("physicalReadingBtn");

const virtualReadingBtn =
  document.getElementById("virtualReadingBtn");

const physicalSpreadScreen =
  document.getElementById("physicalSpreadScreen");

const backPhysicalSpread =
  document.getElementById("backPhysicalSpread");

const physicalThreeBtn =
  document.getElementById("physicalThreeBtn");

const physicalFiveBtn =
  document.getElementById("physicalFiveBtn");

const physicalHexagramBtn =
  document.getElementById("physicalHexagramBtn");

const physicalThreeRecordScreen =
  document.getElementById("physicalThreeRecordScreen");

const backPhysicalThreeRecord =
  document.getElementById("backPhysicalThreeRecord");

const physicalQuestionInput =
  document.getElementById("physicalQuestionInput");

const physicalSummaryInput =
  document.getElementById("physicalSummaryInput");

let selectedSpreadMood = "";
let selectedSpread = "";
let currentSpreadCards = [];

/* ================================
   TAROT DECK — 78 CARDS
================================ */

const majorArcana = [
  ["0", "THE FOOL"],
  ["I", "THE MAGICIAN"],
  ["II", "THE HIGH PRIESTESS"],
  ["III", "THE EMPRESS"],
  ["IV", "THE EMPEROR"],
  ["V", "THE HIEROPHANT"],
  ["VI", "THE LOVERS"],
  ["VII", "THE CHARIOT"],
  ["VIII", "STRENGTH"],
  ["IX", "THE HERMIT"],
  ["X", "WHEEL OF FORTUNE"],
  ["XI", "JUSTICE"],
  ["XII", "THE HANGED MAN"],
  ["XIII", "DEATH"],
  ["XIV", "TEMPERANCE"],
  ["XV", "THE DEVIL"],
  ["XVI", "THE TOWER"],
  ["XVII", "THE STAR"],
  ["XVIII", "THE MOON"],
  ["XIX", "THE SUN"],
  ["XX", "JUDGEMENT"],
  ["XXI", "THE WORLD"]
];


const suits = [
  "WANDS",
  "CUPS",
  "SWORDS",
  "PENTACLES"
];


const ranks = [
  "ACE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "PAGE",
  "KNIGHT",
  "QUEEN",
  "KING"
];

/* ================================
   CARD MEANINGS
================================ */

const cardMeanings = {

  "THE FOOL": {
    upright: {
      keywords: "始まり・自由・可能性・冒険",
      message: "新しい流れが始まろうとしています。先が見えなくても、心が向く方向へ軽やかに一歩踏み出して。"
    },
    reversed: {
      keywords: "無計画・ためらい・軽率・迷走",
      message: "勢いだけで進むより、足元を確かめたいとき。怖がりすぎず、必要な準備を整えてから動いて。"
    }
  },

  "THE MAGICIAN": {
    upright: {
      keywords: "実行力・才能・創造・始動",
      message: "必要なものはすでに手元にあります。考えるだけで終わらせず、自分の力を使って形にしていくとき。"
    },
    reversed: {
      keywords: "空回り・自信不足・未熟・悪用",
      message: "力をうまく使えていない可能性があります。焦って結果を求めず、自分の得意なことをもう一度見直して。"
    }
  },

  "THE HIGH PRIESTESS": {
    upright: {
      keywords: "直感・静けさ・洞察・内なる声",
      message: "表面だけでは見えないものに目を向けるとき。答えを急がず、自分の感覚と静かな気づきを信じて。"
    },
    reversed: {
      keywords: "混乱・思い込み・閉鎖・直感の鈍り",
      message: "考えすぎや先入観で、本来の感覚が見えにくくなっているかも。一度情報から離れ、心を静かに整えて。"
    }
  },

  "THE EMPRESS": {
    upright: {
      keywords: "豊かさ・愛情・受容・育む",
      message: "受け取り、育て、満たしていく流れ。今ある優しさや豊かさを大切にすると、自然に物事が育っていきそう。"
    },
    reversed: {
      keywords: "過保護・依存・不足感・停滞",
      message: "与えすぎたり、満たされることを外に求めすぎている可能性があります。まず自分自身を十分にいたわって。"
    }
  },

  "THE EMPEROR": {
    upright: {
      keywords: "安定・責任・統率・秩序",
      message: "曖昧さよりも、方針を決めて現実を整えるとき。責任を持って行動することで、安定した土台が築けそう。"
    },
    reversed: {
      keywords: "頑固・支配・不安定・責任回避",
      message: "自分のやり方に固執しすぎていないか見直して。力で押すより、柔軟さと相手の立場を取り入れることが大切。"
    }
  },

  "THE HIEROPHANT": {
    upright: {
      keywords: "信頼・伝統・学び・助言",
      message: "一人で答えを出すより、信頼できる知恵や経験に耳を傾けたいとき。基本や約束を大切にすると安定します。"
    },
    reversed: {
      keywords: "型破り・反発・独自性・価値観のズレ",
      message: "当たり前とされる形が自分には合わないのかも。周囲に合わせるだけでなく、自分にとって納得できる価値観を探して。"
    }
  },

  "THE LOVERS": {
    upright: {
      keywords: "選択・調和・結びつき・共鳴",
      message: "心から望むものを選ぶとき。誰かとの結びつきだけでなく、自分の気持ちと行動を一致させることが鍵になります。"
    },
    reversed: {
      keywords: "迷い・不一致・誘惑・選択ミス",
      message: "気持ちと行動が噛み合っていない可能性があります。周囲ではなく、自分が本当に大切にしたいものを見直して。"
    }
  },

  "THE CHARIOT": {
    upright: {
      keywords: "前進・意志・突破・統制",
      message: "迷いを抱えたままでも進めるとき。方向を定め、自分の意志で異なる力をひとつにまとめて前へ進んで。"
    },
    reversed: {
      keywords: "暴走・停滞・迷走・制御不足",
      message: "急いで進もうとして方向を見失っているかも。いったん速度を落とし、本当に向かいたい場所を確認して。"
    }
  },

  "STRENGTH": {
    upright: {
      keywords: "勇気・忍耐・包容力・内なる強さ",
      message: "強く押すより、穏やかに向き合うことが力になるとき。感情を否定せず、丁寧に扱うことで状況を乗り越えられそう。"
    },
    reversed: {
      keywords: "自信低下・弱気・感情的・消耗",
      message: "頑張り続けて少し疲れているのかも。無理に強くあろうとせず、自分の弱さも含めて優しく受け止めて。"
    }
  },

  "THE HERMIT": {
    upright: {
      keywords: "内省・静けさ・探求・ひとりの時間",
      message: "外の答えより、自分の内側にある答えを探すとき。静かな時間が大切なものを見せてくれそう。"
    },
    reversed: {
      keywords: "孤立・閉じこもる・迷走・内省の長期化",
      message: "考えることに少し疲れているのかも。ひとりで答えを探し続けるより、外の世界にも目を向けて。"
    }
  },

  "WHEEL OF FORTUNE": {
    upright: {
      keywords: "転機・幸運・巡り合わせ・変化",
      message: "流れが切り替わろうとしています。すべてをコントロールしようとせず、訪れた機会を柔軟に受け取って。"
    },
    reversed: {
      keywords: "停滞・タイミングのズレ・悪循環・想定外",
      message: "今は思った通りに流れにくい時期かも。無理に動かすより、状況が変わるまで柔軟に対応して。"
    }
  },

  "JUSTICE": {
    upright: {
      keywords: "公平・判断・責任・バランス",
      message: "感情だけでなく、事実を冷静に見つめるとき。自分の選択に責任を持つことで、納得できる答えに近づけそう。"
    },
    reversed: {
      keywords: "不公平・偏り・責任逃れ・判断ミス",
      message: "都合のいい見方に偏っていないか確認して。自分にも相手にも同じ基準を向けることが必要かもしれません。"
    }
  },

  "THE HANGED MAN": {
    upright: {
      keywords: "停滞・受容・視点転換・忍耐",
      message: "今すぐ動くより、立ち止まって見方を変えるとき。進まない時間にも、後から意味が見えてくることがあります。"
    },
    reversed: {
      keywords: "無駄な我慢・行き詰まり・執着・停滞",
      message: "待ち続けること自体が目的になっていないか確認して。報われない我慢なら、別の選択肢を考えてもよさそう。"
    }
  },

  "DEATH": {
    upright: {
      keywords: "終わり・変容・手放し・再出発",
      message: "ひとつの流れを終わらせ、新しい段階へ移るとき。失うことだけでなく、空いた場所に何を迎えるかを考えて。"
    },
    reversed: {
      keywords: "変化への抵抗・執着・停滞・未練",
      message: "終わったものを手放せず、次へ進みにくくなっているのかも。変化を拒むより、小さく受け入れることから始めて。"
    }
  },

  "TEMPERANCE": {
    upright: {
      keywords: "調和・節度・融合・穏やかな回復",
      message: "極端に走らず、ちょうどいい場所を探すとき。異なるものをうまく混ぜ合わせることで、自然な流れが生まれます。"
    },
    reversed: {
      keywords: "不均衡・極端・焦り・噛み合わなさ",
      message: "何かに偏りすぎてバランスを崩している可能性があります。少し速度を落とし、配分を整えて。"
    }
  },

  "THE DEVIL": {
    upright: {
      keywords: "執着・誘惑・依存・欲望",
      message: "強く惹かれるものに縛られていないか見つめるとき。欲しい気持ちを否定せず、それに支配されていないか確認して。"
    },
    reversed: {
      keywords: "解放・執着を断つ・自覚・自由",
      message: "縛られていたものから離れられる兆し。自分を苦しくしていた習慣や関係を、少しずつ手放していけそう。"
    }
  },

  "THE TOWER": {
    upright: {
      keywords: "崩壊・衝撃・急変・真実",
      message: "予想外の出来事が、古い前提を壊すかもしれません。揺さぶられるからこそ、本当に必要なものが見えてきます。"
    },
    reversed: {
      keywords: "変化回避・小さな崩れ・恐れ・先延ばし",
      message: "大きな変化を避けようとして、問題を抱え続けているのかも。壊れる前に、小さく修正することを意識して。"
    }
  },

  "THE STAR": {
    upright: {
      keywords: "希望・癒し・信頼・未来",
      message: "少し先に光が見えてくるとき。すぐに答えが出なくても、未来への希望を持って進んで大丈夫。"
    },
    reversed: {
      keywords: "失望・自信低下・希望を見失う・停滞",
      message: "今は先が見えにくくなっているかも。希望が消えたのではなく、疲れて見えなくなっている可能性があります。"
    }
  },

  "THE MOON": {
    upright: {
      keywords: "不安・曖昧・直感・見えないもの",
      message: "まだ全体像が見えていないとき。想像だけで答えを決めず、曖昧さを抱えたまま少し様子を見る余裕を持って。"
    },
    reversed: {
      keywords: "霧が晴れる・真相・不安の軽減・気づき",
      message: "混乱していたことが少しずつ見え始めそう。思い込みがほどけ、現実を落ち着いて見られるようになっていきます。"
    }
  },

  "THE SUN": {
    upright: {
      keywords: "喜び・成功・明快・活力",
      message: "明るく素直なエネルギーが広がるとき。複雑に考えすぎず、今ある喜びや好意をそのまま受け取って。"
    },
    reversed: {
      keywords: "一時的停滞・曇り・期待過剰・喜びの遅れ",
      message: "良いものはあるのに、十分に楽しめていないのかも。完璧を求めず、小さな明るさに目を向けて。"
    }
  },

  "JUDGEMENT": {
    upright: {
      keywords: "復活・決断・目覚め・再評価",
      message: "過去を振り返り、新しい答えを出すとき。以前とは違う視点で向き合えば、止まっていたものが再び動き出しそう。"
    },
    reversed: {
      keywords: "決断できない・過去への執着・自己否定・停滞",
      message: "答えを出すことを怖がっているのかも。過去を責め続けるより、今の自分が何を選びたいかに目を向けて。"
    }
  },

  "THE WORLD": {
    upright: {
      keywords: "完成・達成・統合・一区切り",
      message: "ひとつの流れが美しくまとまるとき。これまで積み重ねたものを受け取り、次の段階へ進む準備が整っています。"
    },
    reversed: {
      keywords: "未完成・停滞・あと一歩・終わりきらない",
      message: "まだ終わっていないことが残っているようです。無理に区切りをつけず、足りない部分を丁寧に整えて。"
    }
  },
   
   "ACE OF WANDS": {
  upright: {
    keywords: "始まり・情熱・ひらめき・行動力",
    message: "新しい情熱が芽生えるとき。心が動いた方向には、これから育っていく可能性があります。まずは小さな一歩を踏み出して。"
  },
  reversed: {
    keywords: "停滞・空回り・意欲低下・タイミング待ち",
    message: "やりたい気持ちはあっても、まだ力がうまく形にならないとき。焦って動くより、情熱を注ぐ先をもう一度確かめて。"
  }
},

"TWO OF WANDS": {
  upright: {
    keywords: "計画・展望・選択・未来を見る",
    message: "今いる場所の先に、新しい可能性が見えています。目の前だけでなく少し遠くを見て、これから進みたい方向を選ぶとき。"
  },
  reversed: {
    keywords: "迷い・不安・計画不足・一歩をためらう",
    message: "先へ進みたい気持ちと、不安がぶつかっているようです。すべてを決めなくても大丈夫。まず確かな一歩から始めて。"
  }
},

"THREE OF WANDS": {
  upright: {
    keywords: "発展・見通し・前進・可能性の広がり",
    message: "これまで積み重ねてきたものが、次の展開へつながり始めています。視野を広げて、少し先の未来を楽しみにして。"
  },
  reversed: {
    keywords: "遅れ・停滞・見通し不足・期待とのずれ",
    message: "思っていたより進みが遅く感じるかもしれません。計画を少し調整すれば、また流れを取り戻せそうです。"
  }
},

"FOUR OF WANDS": {
  upright: {
    keywords: "安定・喜び・安心・祝福",
    message: "ほっとできる場所や、喜びを分かち合える時間が訪れそうです。今ある幸せや安心を、素直に受け取って。"
  },
  reversed: {
    keywords: "不安定・居心地の悪さ・すれ違い・未完成",
    message: "安心したいのに、どこか落ち着かない状態かもしれません。形を整えるより先に、自分が心地よくいられる場所を確かめて。"
  }
},

"FIVE OF WANDS": {
  upright: {
    keywords: "競争・衝突・刺激・意見の違い",
    message: "人との違いや小さな衝突が、状況を動かす刺激になりそうです。勝ち負けだけでなく、そこから得られるものにも目を向けて。"
  },
  reversed: {
    keywords: "争いの回避・緊張の緩和・内輪もめ・消耗",
    message: "争い続けることに疲れているのかもしれません。すべてに反応せず、本当に向き合う必要があるものを選んで。"
  }
},

"SIX OF WANDS": {
  upright: {
    keywords: "成功・評価・自信・前進",
    message: "努力が認められたり、手応えを感じられそうなとき。ここまで進んできた自分をきちんと評価して、次へ進んで。"
  },
  reversed: {
    keywords: "自信低下・評価不足・期待外れ・承認への執着",
    message: "思ったほど評価されず、自信が揺らぐことがあるかもしれません。他人の反応だけで、自分の価値を決めないで。"
  }
},

"SEVEN OF WANDS": {
  upright: {
    keywords: "防衛・粘り強さ・信念・踏ん張る",
    message: "自分の立場や大切なものを守るために、踏ん張るとき。簡単に譲らなくて大丈夫。自分が信じるものを見失わないで。"
  },
  reversed: {
    keywords: "疲労・弱気・圧倒される・守りきれない",
    message: "頑張り続けて少し疲れているようです。すべてを守ろうとせず、本当に大切なものへ力を残して。"
  }
},

   "EIGHT OF WANDS": {
  upright: {
    keywords: "急展開・スピード・進展・知らせ",
    message: "物事が一気に動き始めそうです。考えすぎるより、訪れた流れに乗るとき。嬉しい知らせや急な展開にも期待して。"
  },
  reversed: {
    keywords: "遅延・停滞・すれ違い・焦り",
    message: "思うような速さで進まず、もどかしく感じるかもしれません。無理に動かそうとせず、流れが整うのを少し待って。"
  }
},

"NINE OF WANDS": {
  upright: {
    keywords: "警戒・粘り強さ・忍耐・あと一歩",
    message: "ここまでよく踏ん張ってきました。少し警戒心が強くなっていても、あと一歩進める力は残っています。簡単に諦めないで。"
  },
  reversed: {
    keywords: "疲労・防御過剰・限界・消耗",
    message: "頑張り続けたことで、心も体も疲れているのかもしれません。守り続けることだけに力を使わず、自分を休ませることも大切です。"
  }
},

"TEN OF WANDS": {
  upright: {
    keywords: "重圧・責任・抱え込み・努力",
    message: "たくさんのものを背負いながら進んでいるとき。責任感はあなたの強さですが、すべてをひとりで抱える必要はありません。"
  },
  reversed: {
    keywords: "解放・手放す・負担軽減・限界",
    message: "抱えていたものを少しずつ下ろしていいときです。本当に自分が背負うべきものなのか、一度整理してみて。"
  }
},

"PAGE OF WANDS": {
  upright: {
    keywords: "好奇心・知らせ・挑戦・可能性",
    message: "心を弾ませる新しいものが見つかりそうです。まだ完成していなくても、その好奇心には未来を動かす力があります。"
  },
  reversed: {
    keywords: "未熟・気まぐれ・空回り・自信不足",
    message: "興味はあるのに、どう動けばいいのか迷っているのかもしれません。完璧に始めようとせず、小さく試してみて。"
  }
},

"KNIGHT OF WANDS": {
  upright: {
    keywords: "情熱・行動・勢い・冒険",
    message: "強い情熱があなたを前へ押しています。考えるだけで終わらせず、今は勢いを味方につけて動いてみて。"
  },
  reversed: {
    keywords: "暴走・衝動・焦り・気まぐれ",
    message: "勢いが強すぎて、周囲や先のことが見えにくくなっているかもしれません。少しだけ速度を落とせば、力をもっと上手に使えそうです。"
  }
},

"QUEEN OF WANDS": {
  upright: {
    keywords: "魅力・自信・情熱・明るさ",
    message: "あなた自身の魅力や存在感が自然に伝わるとき。誰かと比べず、自分らしい明るさと情熱を堂々と表現して。"
  },
  reversed: {
    keywords: "自信喪失・嫉妬・不安定・内向き",
    message: "周囲を気にするあまり、自分の魅力を見失っているのかもしれません。誰かの光ではなく、自分の中にある火を思い出して。"
  }
},

"KING OF WANDS": {
  upright: {
    keywords: "リーダーシップ・情熱・決断・実行力",
    message: "自分の意思で方向を決め、力強く進めるときです。情熱だけでなく経験や判断力も味方につけて、堂々と行動して。"
  },
  reversed: {
    keywords: "独断・強引・支配・空回り",
    message: "自分の考えを通そうとする気持ちが強くなっているかもしれません。力で動かすより、周囲を見る余裕を持つことで状況は整っていきます。"
  }
},

   "ACE OF CUPS": {
  upright: {
    keywords: "愛情・始まり・心が満たされる・感情の芽生え",
    message: "心に新しい感情が生まれるとき。愛情や喜びを素直に受け取り、自分の気持ちにもやさしく心を開いて。"
  },
  reversed: {
    keywords: "感情の停滞・愛情不足・心を閉ざす・満たされない",
    message: "気持ちはあっても、うまく表現できなかったり受け取れなかったりするとき。まずは自分の本当の感情を無視しないで。"
  }
},

"TWO OF CUPS": {
  upright: {
    keywords: "相思相愛・結びつき・調和・心の交流",
    message: "ふたつの心が自然に向き合うとき。恋愛だけでなく、互いを尊重し合える大切な関係や絆が育っていきそうです。"
  },
  reversed: {
    keywords: "すれ違い・不調和・温度差・関係の揺らぎ",
    message: "気持ちがなくなったというより、ふたりの間にずれが生まれているのかもしれません。相手だけでなく、自分の望みも確かめて。"
  }
},

"THREE OF CUPS": {
  upright: {
    keywords: "喜び・友情・交流・祝福",
    message: "人との楽しいつながりが心を満たしてくれるとき。嬉しいことはひとりで抱えず、大切な人たちと分かち合って。"
  },
  reversed: {
    keywords: "人間関係の乱れ・第三者・距離感・遊びすぎ",
    message: "人との関わりが少し複雑になっているかもしれません。周囲に振り回されず、自分にとって心地よい距離を取り戻して。"
  }
},

"FOUR OF CUPS": {
  upright: {
    keywords: "停滞・退屈・無関心・見落とし",
    message: "目の前にあるものでは心が動かず、少し閉じこもりたくなるとき。気づいていない選択肢がないか、静かに周囲を見渡して。"
  },
  reversed: {
    keywords: "再始動・気づき・関心の回復・新しい可能性",
    message: "止まっていた気持ちが少しずつ外へ向かい始めそうです。これまで見過ごしていたものの中に、新しい可能性が見つかるかも。"
  }
},

"FIVE OF CUPS": {
  upright: {
    keywords: "喪失・後悔・悲しみ・失望",
    message: "失ったものや思い通りにならなかったことに、心が向きやすいとき。それでも、まだあなたの手元に残っている大切なものがあります。"
  },
  reversed: {
    keywords: "回復・受容・立ち直り・過去を手放す",
    message: "悲しみや後悔から、少しずつ顔を上げられるとき。過去を消すのではなく、抱えたままでも前へ進めることに気づけそうです。"
  }
},

"SIX OF CUPS": {
  upright: {
    keywords: "懐かしさ・思い出・再会・純粋な気持ち",
    message: "懐かしい記憶や人とのつながりが、今の心に影響しているとき。昔感じていた素直な気持ちの中に、大切なヒントがありそうです。"
  },
  reversed: {
    keywords: "過去への執着・思い出の美化・成長・過去から離れる",
    message: "過去を大切にしながらも、そこだけに留まらないことが必要なとき。今の自分だから選べる未来へ目を向けて。"
  }
},

"SEVEN OF CUPS": {
  upright: {
    keywords: "選択肢・幻想・迷い・夢",
    message: "たくさんの可能性が見えているぶん、何を選ぶべきか迷いやすいとき。魅力的に見えるものが、本当に望んでいるものか確かめて。"
  },
  reversed: {
    keywords: "現実を見る・選択・迷いが晴れる・方向性",
    message: "ぼんやりしていた選択肢が整理され、現実的な答えが見え始めそうです。すべてを求めるより、本当に大切なものをひとつ選んで。"
  }
},

"EIGHT OF CUPS": {
  upright: {
    keywords: "離れる・見切り・探求・次へ進む",
    message: "今あるものを大切に思いながらも、心はその先を求めているようです。満たされない理由を認め、新しい道へ進むとき。"
  },
  reversed: {
    keywords: "未練・戻る・離れられない・決心の揺らぎ",
    message: "離れようとしても気持ちが残り、何度も振り返ってしまうとき。本当に手放したいのか、それともまだ向き合いたいのか確かめて。"
  }
},

"NINE OF CUPS": {
  upright: {
    keywords: "満足・願望成就・喜び・充足",
    message: "願っていたことが実り、満足感を得やすいとき。今ある幸せを素直に受け取り、自分が手にしたものを楽しんで。"
  },
  reversed: {
    keywords: "満たされなさ・期待外れ・過剰・空虚",
    message: "望んだものがあっても、どこか満たされないとき。本当に欲しいものが何なのか、もう一度見つめて。"
  }
},

"TEN OF CUPS": {
  upright: {
    keywords: "幸福・愛情・調和・心のつながり",
    message: "大切な人との間に、深い安心や喜びを感じられるとき。特別な出来事だけでなく、一緒にいられる幸せを大切にして。"
  },
  reversed: {
    keywords: "不調和・理想とのずれ・すれ違い・家庭の問題",
    message: "理想としていた関係と現実との間に、少しずれを感じるかもしれません。完璧な形より、互いが本当に望んでいるものを見つめて。"
  }
},

"PAGE OF CUPS": {
  upright: {
    keywords: "好意・素直な感情・知らせ・ときめき",
    message: "やわらかな感情や、小さなときめきが生まれそうです。考えすぎず、心が感じたことを素直に受け取って。"
  },
  reversed: {
    keywords: "感情の未熟さ・気まぐれ・傷つきやすさ・現実逃避",
    message: "気持ちが揺れやすく、感情に振り回されているかもしれません。相手の反応を想像する前に、自分の本音を落ち着いて確かめて。"
  }
},

"KNIGHT OF CUPS": {
  upright: {
    keywords: "愛情表現・ロマンス・誘い・理想",
    message: "心が動く出来事や、気持ちを伝える流れが訪れそうです。理屈だけではなく、素直な感情に従って動いてみて。"
  },
  reversed: {
    keywords: "気まぐれ・理想化・曖昧な好意・感情の波",
    message: "魅力的な言葉や雰囲気に、期待が膨らみすぎているかもしれません。言葉だけでなく、実際の行動にも目を向けて。"
  }
},

"QUEEN OF CUPS": {
  upright: {
    keywords: "共感・愛情・直感・包容力",
    message: "人の気持ちを深く感じ取れるとき。相手を思いやる優しさと同じくらい、自分自身の感情も大切に扱って。"
  },
  reversed: {
    keywords: "感情過多・依存・不安・自己犠牲",
    message: "誰かを思う気持ちが強すぎて、自分の心が置き去りになっているかもしれません。相手への優しさを、自分にも向けて。"
  }
},

"KING OF CUPS": {
  upright: {
    keywords: "成熟した愛情・包容力・安定・感情の調和",
    message: "深い感情を持ちながらも、穏やかに扱えるとき。感情に流されず、それでも心を閉ざさない成熟した向き合い方が力になります。"
  },
  reversed: {
    keywords: "感情を隠す・不安定・抑圧・気持ちの操作",
    message: "本当の気持ちをうまく表せず、内側に抱え込んでいるのかもしれません。感情をコントロールすることと、無視することは別物です。"
  }
},

   "ACE OF SWORDS": {
  upright: {
    keywords: "明晰・真実・決断・突破",
    message: "曖昧だったことに光が差し、考えがはっきりしてくるとき。事実をまっすぐ見つめ、自分が正しいと思う方向へ進んで。"
  },
  reversed: {
    keywords: "混乱・誤解・判断不足・言葉のすれ違い",
    message: "考えや情報が絡まり、答えを急ぐほど混乱しやすいとき。思い込みで決めず、事実をひとつずつ整理して。"
  }
},

"TWO OF SWORDS": {
  upright: {
    keywords: "迷い・保留・均衡・静観",
    message: "まだ答えを急がなくてもいいとき。情報と気持ちが揃うまで、静かに状況を見つめて。"
  },
  reversed: {
    keywords: "停滞の解除・決断・混乱・動き出す",
    message: "保留されていたことが動き始めそう。避けていた選択にも、そろそろ向き合うとき。"
  }
},

"THREE OF SWORDS": {
  upright: {
    keywords: "悲しみ・傷心・痛み・厳しい真実",
    message: "心が痛む現実と向き合うことになるかもしれません。痛みを無理に消そうとせず、感じたことを認めることが回復の始まりです。"
  },
  reversed: {
    keywords: "回復・癒し・許し・痛みを手放す",
    message: "抱えてきた痛みが、少しずつ和らいでいくとき。忘れる必要はありません。傷ついた経験を抱えながらでも、前へ進めます。"
  }
},

"FOUR OF SWORDS": {
  upright: {
    keywords: "休息・静養・停止・心を整える",
    message: "今は動くことより、休んで力を取り戻すことが必要なとき。答えを出そうとせず、静かな時間を自分に与えて。"
  },
  reversed: {
    keywords: "再始動・休息不足・落ち着かない・回復途中",
    message: "そろそろ動きたい気持ちが戻ってきそう。ただし、まだ十分に休めていない可能性もあります。無理のない速度で再開して。"
  }
},

"FIVE OF SWORDS": {
  upright: {
    keywords: "対立・勝敗・傷つけ合い・後味の悪さ",
    message: "勝つことにこだわるほど、大切なものを失いやすいとき。正しさを証明することより、この先どんな関係や結果を望むのか考えて。"
  },
  reversed: {
    keywords: "和解・争いを終える・歩み寄り・過去のしこり",
    message: "争いを続けるより、終わらせる方法を探すとき。完全に納得できなくても、少しずつ歩み寄れる余地がありそうです。"
  }
},

"SIX OF SWORDS": {
  upright: {
    keywords: "移行・前進・距離を置く・穏やかな変化",
    message: "難しい状況から少しずつ離れ、より穏やかな場所へ向かうとき。急激ではなくても、確実に景色は変わっていきます。"
  },
  reversed: {
    keywords: "停滞・戻ってしまう・未解決・離れられない",
    message: "前へ進みたいのに、まだ何かが心を引き戻しているようです。無理に忘れようとせず、残っている問題を丁寧に見つめて。"
  }
},

"SEVEN OF SWORDS": {
  upright: {
    keywords: "策略・秘密・慎重・単独行動",
    message: "すべてを表に出さず、慎重に動く必要があるとき。賢く立ち回ることは大切ですが、自分自身にも嘘をつかないで。"
  },
  reversed: {
    keywords: "露見・告白・見直し・ごまかしの限界",
    message: "隠していたことや避けていた問題が、表に出やすいとき。ごまかし続けるより、正直に向き合うことで流れを変えられそうです。"
  }
},

   "EIGHT OF SWORDS": {
  upright: {
    keywords: "束縛・思い込み・身動きできない・不安",
    message: "動けないように感じても、実際には選べる道が残っているかもしれません。怖さだけで可能性を閉じず、自分を縛っている考えを見直して。"
  },
  reversed: {
    keywords: "解放・視野が広がる・自立・突破口",
    message: "自分を縛っていた考えから、少しずつ抜け出せそうです。すべてが解決していなくても、自分で選び直せることに気づいて。"
  }
},

"NINE OF SWORDS": {
  upright: {
    keywords: "不安・心配・考えすぎ・眠れない夜",
    message: "頭の中で不安が大きくなりやすいとき。考えていることのすべてが現実とは限りません。ひとりで想像を膨らませすぎないで。"
  },
  reversed: {
    keywords: "不安の軽減・回復・解放・向き合う",
    message: "長く抱えていた心配から、少しずつ抜け出せそうです。不安を否定せず、現実と想像を分けて考えることで心が軽くなっていきます。"
  }
},

"TEN OF SWORDS": {
  upright: {
    keywords: "終焉・限界・決着・再出発の前",
    message: "ひとつの流れが限界まで来ているようです。苦しい状況が永遠に続くわけではありません。終わるからこそ、次の朝が始まります。"
  },
  reversed: {
    keywords: "回復・再生・最悪期を越える・立ち直る",
    message: "一番苦しいところを越え、少しずつ回復へ向かうとき。急いで元通りになろうとせず、新しい形で立ち上がって。"
  }
},

"PAGE OF SWORDS": {
  upright: {
    keywords: "好奇心・情報・観察・警戒",
    message: "もっと知りたいという気持ちが強くなるとき。よく観察し、必要な情報を集めることは大切ですが、考えるだけで終わらせないで。"
  },
  reversed: {
    keywords: "詮索・早とちり・噂・未熟な言葉",
    message: "情報を集めすぎて、かえって混乱しているかもしれません。断片的な情報だけで答えを決めず、確かな事実を見極めて。"
  }
},

"KNIGHT OF SWORDS": {
  upright: {
    keywords: "迅速・決断・突進・率直",
    message: "答えが見えたら、一気に動けるとき。迷いを振り切る力がありますが、勢いだけでなく周囲を見る余裕も忘れないで。"
  },
  reversed: {
    keywords: "暴走・性急・攻撃的・無計画",
    message: "早く答えを出したい気持ちが強くなりすぎているかもしれません。言葉や行動にする前に、一度だけ立ち止まって。"
  }
},

"QUEEN OF SWORDS": {
  upright: {
    keywords: "知性・自立・率直・冷静な判断",
    message: "感情を持ちながらも、事実を冷静に見られるとき。必要な境界線を引き、自分にとって本当に大切なものを選んで。"
  },
  reversed: {
    keywords: "厳しさ・批判・冷淡・傷からの防御",
    message: "傷ついた経験から、必要以上に厳しくなっているのかもしれません。自分を守りながらも、すべてを拒絶する必要はありません。"
  }
},

"KING OF SWORDS": {
  upright: {
    keywords: "論理・判断力・公正・知性",
    message: "感情だけに流されず、冷静な判断ができるとき。事実と自分の基準をもとに、曖昧だったことへ明確な答えを出して。"
  },
  reversed: {
    keywords: "独断・冷酷・理屈に偏る・権力の乱用",
    message: "正しさや理屈を優先しすぎて、大切な感情を置き去りにしているかもしれません。正論だけでは届かないものにも目を向けて。"
  }
},

   "ACE OF PENTACLES": {
  upright: {
    keywords: "好機・安定・豊かさ・現実的な始まり",
    message: "現実の世界で育てていける、新しい可能性が差し出されています。小さなきっかけでも、丁寧に育てれば確かな成果につながりそうです。"
  },
  reversed: {
    keywords: "機会損失・不安定・準備不足・実りの遅れ",
    message: "可能性はあっても、まだ十分に形にできないとき。焦って結果を求めず、土台や準備を整えることから始めて。"
  }
},

"TWO OF PENTACLES": {
  upright: {
    keywords: "両立・柔軟性・やりくり・バランス",
    message: "いくつものことを抱えながら、うまく調整していくとき。完璧な均衡を求めず、状況に合わせて柔軟に動いて。"
  },
  reversed: {
    keywords: "余裕不足・混乱・負担過多・バランス崩壊",
    message: "抱えているものが多すぎて、うまく回らなくなっているかもしれません。優先順位を決め、手放せるものは少し減らして。"
  }
},

"THREE OF PENTACLES": {
  upright: {
    keywords: "協力・技術・成長・積み重ね",
    message: "自分の力を活かしながら、人と協力することで大きく育つとき。学びや経験を重ねるほど、確かな形になっていきます。"
  },
  reversed: {
    keywords: "連携不足・未熟・評価されない・噛み合わない",
    message: "力はあっても、周囲とうまく噛み合っていない可能性があります。役割や目的をもう一度確認すると、流れを整えられそうです。"
  }
},

"FOUR OF PENTACLES": {
  upright: {
    keywords: "保持・安定・執着・守る",
    message: "手にしているものを守りたい気持ちが強くなるとき。安定は大切ですが、失うことを恐れて抱え込みすぎていないかも確かめて。"
  },
  reversed: {
    keywords: "手放す・解放・浪費・執着の緩和",
    message: "握りしめていたものを、少し緩められるとき。必要なものまで失わないようにしながら、不要な執着は手放して。"
  }
},

"FIVE OF PENTACLES": {
  upright: {
    keywords: "困難・不足・孤独・不安",
    message: "足りないものや苦しい部分に意識が向きやすいとき。それでも、助けや支えがまったくないわけではありません。ひとりで抱え込まないで。"
  },
  reversed: {
    keywords: "回復・改善・援助・苦境を抜ける",
    message: "厳しかった状況に、少しずつ出口が見えてきそうです。差し出される助けを受け取りながら、焦らず立て直して。"
  }
},

"SIX OF PENTACLES": {
  upright: {
    keywords: "与える・受け取る・支援・公平な交換",
    message: "与えることと受け取ることのバランスを見つめるとき。どちらか一方だけが無理をせず、自然に循環する関係を大切にして。"
  },
  reversed: {
    keywords: "不公平・一方通行・見返り・依存",
    message: "与える側と受け取る側のバランスが崩れているかもしれません。そのやり取りが互いに納得できるものか、一度見直して。"
  }
},

"SEVEN OF PENTACLES": {
  upright: {
    keywords: "積み重ね・評価・忍耐・成長を待つ",
    message: "これまで育ててきたものを振り返り、成果を待つとき。すぐに答えが出なくても、積み重ねたものが無駄になったわけではありません。"
  },
  reversed: {
    keywords: "焦り・成果不足・徒労感・見直し",
    message: "努力に対して結果が見えず、もどかしく感じているかもしれません。同じやり方を続けるより、力を注ぐ場所を見直して。"
  }
},

   "EIGHT OF PENTACLES": {
  upright: {
    keywords: "努力・熟練・集中・積み重ね",
    message: "目の前のことを丁寧に積み重ねるほど、確かな力になっていくとき。派手な結果を急がず、今できることを磨き続けて。"
  },
  reversed: {
    keywords: "惰性・集中不足・手抜き・成長の停滞",
    message: "続けてはいるものの、目的を見失っているのかもしれません。ただ繰り返すのではなく、何を身につけたいのかを確かめて。"
  }
},

"NINE OF PENTACLES": {
  upright: {
    keywords: "自立・豊かさ・達成・自分を満たす",
    message: "自分の力で築いてきたものを、ゆっくり味わえるとき。誰かから与えられる幸せだけでなく、自分自身で満たせる豊かさを大切にして。"
  },
  reversed: {
    keywords: "依存・不安定・見栄・満足できない",
    message: "外から見える豊かさと、心の満足が一致していないのかもしれません。誰かの基準ではなく、自分にとっての豊かさを見直して。"
  }
},

"TEN OF PENTACLES": {
  upright: {
    keywords: "安定・継続・豊かさ・長期的な基盤",
    message: "一時的な結果ではなく、長く続いていく安定を築けるとき。これまで受け継いだものと、これから残したいものを大切にして。"
  },
  reversed: {
    keywords: "基盤の揺らぎ・不安定・価値観の違い・継続への不安",
    message: "長く続けたいものの土台に、少し見直しが必要かもしれません。形を守ることより、本当に大切にしたい価値を確かめて。"
  }
},

"PAGE OF PENTACLES": {
  upright: {
    keywords: "学び・可能性・現実的な一歩・成長",
    message: "これから形にしていける可能性が芽生えています。まだ小さくても、興味を持ったことを丁寧に学び、現実的な一歩を重ねて。"
  },
  reversed: {
    keywords: "準備不足・先延ばし・集中不足・未熟",
    message: "やりたいことはあっても、まだ行動が追いついていないのかもしれません。大きな目標より、まず今日できることをひとつ始めて。"
  }
},

"KNIGHT OF PENTACLES": {
  upright: {
    keywords: "堅実・継続・責任・着実な前進",
    message: "急激な変化より、確実に積み重ねることが力になるとき。ゆっくりでも、自分が決めたことを続ければ目的地へ近づいていきます。"
  },
  reversed: {
    keywords: "停滞・マンネリ・頑固・動かない",
    message: "安定を守ることが、変化を避ける理由になっているかもしれません。同じやり方を続けるだけでなく、小さな変化を取り入れて。"
  }
},

"QUEEN OF PENTACLES": {
  upright: {
    keywords: "安定・包容力・現実感覚・豊かさ",
    message: "自分と周囲を現実的に支えながら、心地よい環境を育てられるとき。誰かを大切にするのと同じように、自分自身も満たして。"
  },
  reversed: {
    keywords: "自己犠牲・余裕不足・不安・自分を後回し",
    message: "周囲のために動きすぎて、自分の余裕がなくなっているのかもしれません。まず自分の足元を整えることも、大切な役割です。"
  }
},

"KING OF PENTACLES": {
  upright: {
    keywords: "安定・成功・信頼・現実的な豊かさ",
    message: "経験と積み重ねが、確かな安定につながるとき。目先の結果に振り回されず、長く守り育てられるものを選んで。"
  },
  reversed: {
    keywords: "執着・頑固・物質偏重・安定への固執",
    message: "失いたくない気持ちが強くなりすぎているのかもしれません。持っているものを守るだけでなく、それが今も自分を豊かにしているか確かめて。"
  }
}

};

const tarotDeck = [];


/* Major Arcana */

majorArcana.forEach(card => {

  tarotDeck.push({
    roman: card[0],
    name: card[1]
  });

});


/* Minor Arcana */

suits.forEach(suit => {

  ranks.forEach(rank => {

    tarotDeck.push({
      roman: suit,
      name: `${rank} OF ${suit}`
    });

  });

});


/* ================================
   NAVIGATION
================================ */

oneCardBtn.addEventListener("click", () => {

  homeScreen.classList.add("home-hidden");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);

});


backHome.addEventListener("click", () => {

  oneCardScreen.classList.remove("active");
  homeScreen.classList.remove("home-hidden");

  window.scrollTo(0, 0);

});


/* ================================
   RANDOM DRAW
================================ */

function drawThreeCards() {

  const shuffledDeck = [...tarotDeck];

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledDeck[i], shuffledDeck[j]] =
      [shuffledDeck[j], shuffledDeck[i]];
  }

  currentSpreadCards = shuffledDeck
    .slice(0, 3)
    .map((card) => ({
      card: card,
      reversed: Math.random() < 0.5
    }));

const spreadLabels =
  selectedSpread === "RELATIONSHIP"
    ? ["YOU", "THEM", "CONNECTION"]
    : selectedSpread === "GUIDANCE"
    ? ["SITUATION", "CHALLENGE", "ADVICE"]
    : ["PAST", "PRESENT", "FUTURE"];

document.querySelectorAll(".spread-position").forEach((label, index) => {
  label.textContent = spreadLabels[index];
});

  spreadCards.forEach((element, index) => {

    const result = currentSpreadCards[index];

    /* いったん全部伏せる */
    element.classList.remove("revealed");

    spreadCardNames[index].textContent =
      result.card.name;

    spreadCardPositions[index].textContent =
      result.reversed
        ? "REVERSED ↓"
        : "UPRIGHT ↑";
  });

  spreadQuestionScreen.classList.remove("active");
  spreadResultScreen.classList.add("active");

  window.scrollTo(0, 0);
}
function drawRandomCard() {

  const randomIndex =
    Math.floor(Math.random() * tarotDeck.length);

  const selectedCard =
  tarotDeck[randomIndex];

  const reversed =
    Math.random() < 0.5;


  cardRoman.textContent =
    selectedCard.roman;

  cardName.textContent =
    selectedCard.name;

  cardPosition.textContent =
    reversed
      ? "REVERSED ↓"
      : "UPRIGHT ↑";


  oneCardScreen.classList.remove("active");
  resultScreen.classList.add("active");

  window.scrollTo(0, 0);

}

randomBtn.addEventListener("click", () => {
  oneCardScreen.classList.remove("active");
  questionScreen.classList.add("active");
  window.scrollTo(0, 0);
});

backQuestion.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  oneCardScreen.classList.add("active");
  window.scrollTo(0, 0);
});

moodChips.forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
  });
});

drawFromQuestion.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  drawRandomCard();
});

drawSpreadBtn.addEventListener("click", () => {
  drawThreeCards();
});

spreadCards.forEach((card) => {

  card.addEventListener("click", () => {
    card.classList.add("revealed");
  });

});

backSpreadResult.addEventListener("click", () => {

  spreadResultScreen.classList.remove("active");
  spreadQuestionScreen.classList.add("active");

  window.scrollTo(0, 0);
});


drawAgain.addEventListener(
  "click",
  drawRandomCard
);


backOneCard.addEventListener("click", () => {

  resultScreen.classList.remove("active");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);

});

newReadingBtn.addEventListener("click", () => {
  homeScreen.classList.add("home-hidden");
  newReadingScreen.classList.add("active");
  window.scrollTo(0, 0);
});

backNewReading.addEventListener("click", () => {
  newReadingScreen.classList.remove("active");
  homeScreen.classList.remove("home-hidden");
  window.scrollTo(0, 0);
});

virtualReadingBtn.addEventListener("click", () => {
  newReadingScreen.classList.remove("active");
  threeSpreadScreen.classList.add("active");

  window.scrollTo(0, 0);
});

physicalReadingBtn.addEventListener("click", () => {
  newReadingScreen.classList.remove("active");
  physicalSpreadScreen.classList.add("active");

  window.scrollTo(0, 0);
});

backPhysicalSpread.addEventListener("click", () => {
  physicalSpreadScreen.classList.remove("active");
  newReadingScreen.classList.add("active");

  window.scrollTo(0, 0);
});

physicalThreeBtn.addEventListener("click", () => {
  physicalSpreadScreen.classList.remove("active");
  physicalThreeRecordScreen.classList.add("active");

  window.scrollTo(0, 0);
});

backPhysicalThreeRecord.addEventListener("click", () => {
  physicalThreeRecordScreen.classList.remove("active");
  physicalSpreadScreen.classList.add("active");

  window.scrollTo(0, 0);
});

backThreeSpread.addEventListener("click", () => {
  threeSpreadScreen.classList.remove("active");
  newReadingScreen.classList.add("active");

  window.scrollTo(0, 0);
});

flowSpreadBtn.addEventListener("click", () => {

  selectedSpread = "FLOW";

  spreadQuestionTitle.textContent = "FLOW";
  spreadQuestionSubtitle.textContent =
    "past · present · future";

  threeSpreadScreen.classList.remove("active");
  spreadQuestionScreen.classList.add("active");

  window.scrollTo(0, 0);
});

relationshipSpreadBtn.addEventListener("click", () => {

  selectedSpread = "RELATIONSHIP";

  spreadQuestionTitle.textContent = "RELATIONSHIP";
  spreadQuestionSubtitle.textContent =
    "you · them · connection";

  threeSpreadScreen.classList.remove("active");
  spreadQuestionScreen.classList.add("active");

  window.scrollTo(0, 0);
});

guidanceSpreadBtn.addEventListener("click", () => {

  selectedSpread = "GUIDANCE";

  spreadQuestionTitle.textContent = "GUIDANCE";
  spreadQuestionSubtitle.textContent =
    "situation · challenge · advice";

  threeSpreadScreen.classList.remove("active");
  spreadQuestionScreen.classList.add("active");

  window.scrollTo(0, 0);
});

backSpreadQuestion.addEventListener("click", () => {

  spreadQuestionScreen.classList.remove("active");
  threeSpreadScreen.classList.add("active");

  window.scrollTo(0, 0);
});

spreadMoodChips.forEach((chip) => {

  chip.addEventListener("click", () => {

    spreadMoodChips.forEach((item) => {
      item.classList.remove("selected");
    });

    chip.classList.add("selected");
    selectedSpreadMood = chip.dataset.mood;

  });
  
});

copySpreadAiBtn.addEventListener("click", async () => {

  if (currentSpreadCards.length !== 3) return;

  const question =
    spreadQuestionInput.value.trim() ||
    "質問は入力されていません";

  const mood =
    selectedSpreadMood ||
    "気分は選択されていません";

  const labels =
  selectedSpread === "RELATIONSHIP"
    ? [
        "YOU｜あなた",
        "THEM｜相手",
        "CONNECTION｜ふたりの関係"
      ]
    : selectedSpread === "GUIDANCE"
    ? [
        "SITUATION｜状況",
        "CHALLENGE｜課題",
        "ADVICE｜アドバイス"
      ]
    : [
        "PAST｜過去",
        "PRESENT｜現在",
        "FUTURE｜これから"
      ];

  const cardTexts = currentSpreadCards.map((result, index) => {

    const cardName = result.card.name;

    const position =
      result.reversed ? "REVERSED ↓" : "UPRIGHT ↑";

    const direction =
      result.reversed ? "reversed" : "upright";

    const meaning =
      cardMeanings[cardName]?.[direction];

    const keywords =
      meaning?.keywords || "";

    const message =
      meaning?.message || "";

    return `
【${labels[index]}】
${cardName}
${position}

【基本キーワード】
${keywords}

【カードの基本メッセージ】
${message}`;
  }).join("\n");

  const spreadDescription =
  selectedSpread === "RELATIONSHIP"
    ? "RELATIONSHIP\nあなた・相手・ふたりの関係"
    : selectedSpread === "GUIDANCE"
    ? "GUIDANCE\n状況・課題・アドバイス"
    : "FLOW\n過去・現在・これから";
  
  const prompt = `タロットWebアプリ「78」で3枚のカードを引きました。

【スプレッド】
${spreadDescription}

【質問】
${question}

【今の気分】
${mood}

【出たカード】
${cardTexts}

この3枚を、それぞれのポジションの意味と、
タロットカードの一般的な象徴、
私の質問・今の気分を踏まえて詳しく解釈してください。

1枚ずつバラバラに読むだけでなく、
3枚のつながりや流れも含めて説明してください。

未来や他者の気持ちを事実として断定するのではなく、
カードから考えられる可能性やニュアンスとして読んでください。

質問と同じ言語で回答してください。`;

  try {
    await navigator.clipboard.writeText(prompt);

    copySpreadAiBtn.textContent = "✓ COPIED";

    setTimeout(() => {
      copySpreadAiBtn.textContent = "✦ COPY FOR AI";
    }, 1500);

  } catch (error) {
    console.error("Copy failed:", error);
  }

});

readCardBtn.addEventListener("click", () => {

  const card = cardMeanings[cardName.textContent];

  const isReversed =
    cardPosition.textContent.includes("REVERSED");

  if (card) {

    const meaning =
      isReversed ? card.reversed : card.upright;

    meaningKeywords.textContent =
      meaning.keywords;

    meaningMessage.textContent =
      meaning.message;

  } else {

    meaningKeywords.textContent =
      "COMING SOON";

    meaningMessage.textContent =
      "This card is waiting to be added to the 78 library.";

  }


  cardMeaning.classList.toggle("active");

});
copyAiBtn.addEventListener("click", async () => {

  const question =
    questionInput.value.trim() || "質問は入力されていません";

  const selectedMoods =
    Array.from(moodChips)
      .filter(chip => chip.classList.contains("selected"))
      .map(chip => chip.dataset.mood);

  const moodText =
    selectedMoods.length > 0
      ? selectedMoods.join("・")
      : "気分は選択されていません";


  const card = cardMeanings[cardName.textContent];

  const isReversed =
    cardPosition.textContent.includes("REVERSED");

  const meaning =
    card
      ? (isReversed ? card.reversed : card.upright)
      : null;


  const keywords =
    meaning ? meaning.keywords : "";

  const message =
    meaning ? meaning.message : "";


  const text = `タロットWebアプリ「78」でカードを引きました。

【質問】
${question}

【今の気分】
${moodText}

【出たカード】
${cardName.textContent}
${cardPosition.textContent}

【基本キーワード】
${keywords}

【カードの基本メッセージ】
${message}

この結果を、タロットカードの一般的な象徴と、
私の質問・今の気分を踏まえて詳しく解釈してください。

カード単体の意味だけでなく、
この質問に対してどのように読めるのかを説明してください。

未来や他者の気持ちを事実として断定するのではなく、
カードから考えられる可能性やニュアンスとして読んでください。

質問と同じ言語で回答してください。`;


  try {

    await navigator.clipboard.writeText(text);

    const originalText = copyAiBtn.textContent;

    copyAiBtn.textContent = "✓ COPIED";

    setTimeout(() => {
      copyAiBtn.textContent = originalText;
    }, 1800);

  } catch (error) {

    console.error("Copy failed:", error);

    copyAiBtn.textContent = "COPY FAILED";

    setTimeout(() => {
      copyAiBtn.textContent = "✦ COPY FOR AI";
    }, 1800);

  }

});
