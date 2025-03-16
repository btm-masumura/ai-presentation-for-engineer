import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideAIBasics = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  
  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: AIとは
    {
        title: "1.1 AIとは",
        content: (
          <div className="flex flex-col items-center">
            <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">人工知能（AI）の基本</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-semibold">定義:</span> AIとは、人間が行う判断や作業を、コンピュータに自動で実行させる技術のこと。</li>
                <li><span className="font-semibold">身近な例:</span> スマートフォンの音声アシスタント（Siri, Google アシスタント）、ネットショッピングでのおすすめ商品表示、写真の自動タグ付けや自動補正</li>
                <li><span className="font-semibold">歴史的背景:</span> 1950年代～ルールに基づくシステムから、現在は膨大なデータと計算資源を利用したディープラーニングや生成AIへと進化</li>
              </ul>
            </div>
            
            <div className="w-full mb-6">
              <div className="font-bold text-gray-700 mb-4">AI技術の進化と身近な例</div>
              
              {/* 年表スタイルのタイムライン */}
              <div className="relative">
                {/* 横線 */}
                <div className="absolute left-0 right-0 top-3 h-1 bg-gray-300 z-0"></div>
                
                {/* タイムラインアイテム */}
                <div className="flex justify-between items-start relative z-10">
                  {/* 1950-60年代 */}
                  <div className="w-1/4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                        <span className="text-gray-700 font-bold text-xs">50s</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg w-full">
                        <div className="text-center">
                          <div className="text-gray-700 font-bold text-sm mb-1">1950-60年代</div>
                          <div className="text-xs font-semibold">ルールベース</div>
                        </div>
                        <div className="text-xs mt-2 text-center">
                          <p>「もしA、ならばB」のルール</p>
                          <p className="mt-1 text-blue-600">例: 初期のチェスAI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 1980-90年代 */}
                  <div className="w-1/4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                        <span className="text-gray-700 font-bold text-xs">80s</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg w-full">
                        <div className="text-center">
                          <div className="text-gray-700 font-bold text-sm mb-1">1980-90年代</div>
                          <div className="text-xs font-semibold">機械学習</div>
                        </div>
                        <div className="text-xs mt-2 text-center">
                          <p>データからパターン学習</p>
                          <p className="mt-1 text-blue-600">例: 迷惑メールフィルター</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 2000-10年代 */}
                  <div className="w-1/4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                        <span className="text-gray-700 font-bold text-xs">00s</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg w-full">
                        <div className="text-center">
                          <div className="text-gray-700 font-bold text-sm mb-1">2000-10年代</div>
                          <div className="text-xs font-semibold">ディープラーニング</div>
                        </div>
                        <div className="text-xs mt-2 text-center">
                          <p>多層ニューラルネット</p>
                          <p className="mt-1 text-blue-600">例: 顔認証、翻訳</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 2020年代～ */}
                  <div className="w-1/4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mb-2 animate-pulse">
                        <span className="text-blue-700 font-bold text-xs">20s</span>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg w-full">
                        <div className="text-center">
                          <div className="text-blue-700 font-bold text-sm mb-1">2020年代～</div>
                          <div className="text-xs font-semibold">生成AI</div>
                        </div>
                        <div className="text-xs mt-2 text-center">
                          <p>新しいコンテンツ生成</p>
                          <p className="mt-1 text-blue-600">例: ChatGPT, DALL-E</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 進化の矢印 */}
                <div className="flex justify-center mt-4">
                  <svg width="80%" height="30" viewBox="0 0 300 30">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
                      </marker>
                    </defs>
                    <line x1="10" y1="15" x2="290" y2="15" stroke="#4B5563" 
                    strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,3" />
                  </svg>
                </div>
                <div className="text-center text-sm text-gray-500 mt-1">AIの計算能力とデータ量の増加</div>
              </div>
            </div>
          </div>
        )
      },
    // サブスライド2: 生成AIとは
    {
      title: "1.2 生成AIとは",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">生成AI (Generative AI) の特徴</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-semibold">概要:</span> 学習したデータをもとに新しい文章・画像・音楽・プログラムなどを生成する技術</li>
              <li><span className="font-semibold">ブレイクのきっかけ:</span> ChatGPTやMidjourneyなどの実用的サービスの登場</li>
              <li><span className="font-semibold">従来AIとの違い:</span> 
                <ul className="list-disc pl-6 mt-2">
                  <li><span className="font-semibold">創造性:</span> 新しいコンテンツを生み出す能力</li>
                  <li><span className="font-semibold">大規模モデル:</span> 数千億のパラメータを持つ巨大なモデル</li>
                  <li><span className="font-semibold">自然言語処理の高度化:</span> 人間の言語理解や生成能力の飛躍的向上</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full mb-6">
            <div className="bg-purple-100 p-4 rounded-lg transform transition-all hover:scale-105 shadow-sm">
              <div className="text-purple-800 font-bold mb-2">テキスト生成</div>
              <div className="text-sm mb-2">ChatGPT, Claude, Gemini</div>
              <div className="h-20 bg-white rounded flex items-center justify-center p-2">
                <div className="space-y-2 w-full">
                  <div className="h-3 bg-purple-200 rounded w-full"></div>
                  <div className="h-3 bg-purple-200 rounded w-5/6"></div>
                  <div className="h-3 bg-purple-200 rounded w-4/6"></div>
                  <div className="h-3 bg-purple-200 rounded w-3/6"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg transform transition-all hover:scale-105 shadow-sm">
              <div className="text-green-800 font-bold mb-2">画像生成</div>
              <div className="text-sm mb-2">DALL-E, Midjourney, Stable Diffusion</div>
              <div className="h-20 bg-white rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 p-2 w-full h-full">
                  <div className="bg-green-200 rounded"></div>
                  <div className="bg-green-200 rounded"></div>
                  <div className="bg-green-200 rounded"></div>
                  <div className="bg-green-200 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-100 p-4 rounded-lg transform transition-all hover:scale-105 shadow-sm">
              <div className="text-yellow-800 font-bold mb-2">その他</div>
              <div className="text-sm mb-2">音楽生成AI, 動画生成AI, 検索AI</div>
              <div className="h-20 bg-white rounded flex items-center justify-center p-2">
                <div className="flex flex-col w-full space-y-1">
                  <div className="h-4 flex space-x-1">
                    <div className="w-1/3 bg-yellow-200 rounded"></div>
                    <div className="w-1/4 bg-yellow-200 rounded"></div>
                    <div className="w-1/2 bg-yellow-200 rounded"></div>
                  </div>
                  <div className="h-4 flex space-x-1">
                    <div className="w-1/4 bg-yellow-200 rounded"></div>
                    <div className="w-1/3 bg-yellow-200 rounded"></div>
                  </div>
                  <div className="h-4 flex space-x-1">
                    <div className="w-1/5 bg-yellow-200 rounded"></div>
                    <div className="w-1/2 bg-yellow-200 rounded"></div>
                    <div className="w-1/5 bg-yellow-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">生成AIの仕組み (シンプルに)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow text-center">
                <div className="font-bold mb-2">1. データ学習</div>
                <div className="text-sm">インターネット上の膨大なテキスト・画像などを学習</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <div className="font-bold mb-2">2. パターン認識</div>
                <div className="text-sm">データの特徴やパターンを認識・記憶</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <div className="font-bold mb-2">3. 新コンテンツ生成</div>
                <div className="text-sm">学習を基に、指示に沿った新しい内容を創造</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド3: Geminiハンズオン演習
    {
      title: "1.3 Geminiハンズオン演習",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Geminiでのハンズオン</h3>
            <p className="mb-4">
              Geminiは無料で使える高性能な生成AIです。（BTMアカウントでは有料版が利用できます。）<br></br>
              日常生活でもすぐに活用できます。さっそく試してみましょう！
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
              <p className="font-bold text-blue-700 mb-2">Geminiにアクセス：</p>
              <a 
                href="https://gemini.google.com/app?hl=ja" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-blue-100 p-3 rounded hover:bg-blue-200 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#4285F4"/>
                </svg>
                Gemini を別タブで開く
              </a>
            </div>
          </div>
          
          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 日常使いの例1：冷蔵庫の中身でレシピ */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-green-100 p-4">
                  <h4 className="font-bold text-green-800">日常使い例1：冷蔵庫の中身でレシピ</h4>
                </div>
                <div className="p-4 border-b border-gray-200 h-40">
                  <p className="font-semibold text-gray-700 mb-2">プロンプト：</p>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    冷蔵庫に玉ねぎ、豚肉の薄切り、ニンジン、キャベツ、卵があります。簡単に作れる夕食のレシピを提案してください。調理時間は30分以内で、子供も食べられる味付けがいいです。
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-semibold text-gray-700 mb-2">Geminiの回答：</p>
                  <div className="bg-white border border-gray-200 p-3 rounded text-sm">
                    <h3 className="text-lg font-bold mb-3">冷蔵庫にある食材で作る簡単レシピ</h3>
                    <p className="mb-3">冷蔵庫にある食材を使って、30分以内に作れるお子様も喜ぶ夕食レシピを提案します。</p>
                    
                    <div className="mb-3">
                      <h4 className="font-bold text-green-700">豚肉と野菜の卵とじ丼</h4>
                      <p><span className="font-semibold">材料:</span> 豚肉薄切り、玉ねぎ、にんじん、キャベツ、卵、調味料</p>
                      <p><span className="font-semibold">ポイント:</span> 野菜をさっと炒めて、溶き卵でとじることで、柔らかい食感に</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-bold text-green-700">野菜たっぷり豚肉の甘酢炒め</h4>
                      <p><span className="font-semibold">材料:</span> 豚肉薄切り、玉ねぎ、にんじん、キャベツ、甘酢調味料</p>
                      <p><span className="font-semibold">ポイント:</span> 甘酢味で子供も食べやすく、野菜もたっぷり摂れます</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-700">簡単野菜スープと卵焼き</h4>
                      <p><span className="font-semibold">材料:</span> 玉ねぎ、にんじん、キャベツ、卵、コンソメ</p>
                      <p><span className="font-semibold">ポイント:</span> 優しい味付けのスープと卵焼きで栄養バランス良く</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 日常使いの例2：子供の質問 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-purple-100 p-4">
                  <h4 className="font-bold text-purple-800">日常使い例2：子供の質問</h4>
                </div>
                <div className="p-4 border-b border-gray-200 h-40">
                  <p className="font-semibold text-gray-700 mb-2">プロンプト：</p>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    5歳の子供に「なぜ空は青いの？」と聞かれました。わかりやすく説明してあげたいので、幼児向けの言葉で簡単に説明してください。
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-semibold text-gray-700 mb-2">Geminiの回答：</p>
                  <div className="bg-white border border-gray-200 p-3 rounded text-sm">
                    <p className="mb-2">
                      空が青く見えるのは、太陽の光と空気の粒が関係しているからだよ。
                    </p>
                    <p className="mb-2">
                      太陽の光は、赤や黄色、青など、いろんな色の光が集まってできているんだ。
                    </p>
                    <p className="mb-2">
                      そして、空気の中には、とっても小さな粒がたくさん浮かんでいるんだ。
                    </p>
                    <p className="mb-2">
                      太陽の光が空気の粒に当たると、光は色ごとにバラバラになって、いろんな方向に飛んでいくんだ。
                    </p>
                    <p className="mb-2">
                      青い光は、他の色の光よりも空気の粒にぶつかりやすく、いろんな方向にたくさん飛んでいくんだ。
                    </p>
                    <p className="mb-2">
                      だから、空をみると、青い光がたくさん目に入ってきて、空が青く見えるんだよ。
                    </p>
                    <p>
                      夕焼けの時は、太陽の光が昼間よりもっと遠くの空気を通ってくるから、青い光は遠くまで届かなくて、赤い光や黄色い光の方がたくさん届くんだ。だから、夕焼けは赤や黄色に見えるんだよ。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">効果的なプロンプト設計（深津式）</h3>
            
            <div className="mb-4">
              <p className="mb-2">より良い回答を得るためのプロンプト設計の基本構造：</p>
              <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <span className="font-bold text-blue-700">ロールの設定</span>
                    <p className="text-sm text-gray-600">AIに特定の専門家や立場を指定して回答の質を向上</p>
                    <p className="text-xs bg-blue-100 p-1.5 rounded mt-1">"料理専門家として"、"子供向け科学解説者として"</p>
                  </li>
                  <li>
                    <span className="font-bold text-blue-700">コンテキストの提供</span>
                    <p className="text-sm text-gray-600">状況や背景情報を詳しく説明</p>
                    <p className="text-xs bg-blue-100 p-1.5 rounded mt-1">"冷蔵庫にある食材は〜"、"5歳の子供に説明するために〜"</p>
                  </li>
                  <li>
                    <span className="font-bold text-blue-700">タスクの明確化</span>
                    <p className="text-sm text-gray-600">具体的に何をしてほしいかを明確に</p>
                    <p className="text-xs bg-blue-100 p-1.5 rounded mt-1">"レシピを提案してください"、"わかりやすく説明してください"</p>
                  </li>
                  <li>
                    <span className="font-bold text-blue-700">制約条件の指定</span>
                    <p className="text-sm text-gray-600">回答の形式や制限事項を伝える</p>
                    <p className="text-xs bg-blue-100 p-1.5 rounded mt-1">"調理時間30分以内"、"幼児向けの言葉で"</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-blue-700 mb-2">プロンプト例（深津式）：</p>
              <div className="bg-blue-100 p-3 rounded text-sm">
                <p><span className="font-semibold">ロール：</span>あなたは栄養バランスと時短料理に詳しい料理専門家です。</p>
                <p><span className="font-semibold">コンテキスト：</span>私は仕事から帰宅後、短時間で栄養バランスの良い夕食を作りたいと考えています。冷蔵庫には玉ねぎ、豚肉の薄切り、ニンジン、キャベツ、卵があります。</p>
                <p><span className="font-semibold">タスク：</span>これらの食材を使った簡単な夕食レシピを提案してください。</p>
                <p><span className="font-semibold">制約：</span>調理時間は30分以内、子供も食べられる味付け、材料の買い足しは最小限にしてください。</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // 現在のサブスライド
  const currentSubSlide = subSlides[subSlideIndex];
  
  // サブスライドを進める
  const nextSubSlide = () => {
    if (subSlideIndex < subSlides.length - 1) {
      setSubSlideIndex(subSlideIndex + 1);
    }
  };
  
  // サブスライドを戻す
  const prevSubSlide = () => {
    if (subSlideIndex > 0) {
      setSubSlideIndex(subSlideIndex - 1);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* サブスライドのタイトル */}
      <div className="mb-4 border-b pb-2 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-blue-600">{currentSubSlide.title}</h2>
        <div className="text-sm text-gray-500">
          サブスライド {subSlideIndex + 1} / {subSlides.length}
        </div>
      </div>
      
      {/* サブスライドの内容 */}
      <div className="flex-grow overflow-y-auto">
        {currentSubSlide.content}
      </div>
      
      {/* サブスライドのナビゲーション */}
      {subSlides.length > 1 && (
        <div className="flex justify-between mt-4 pt-2 border-t">
          <button
            onClick={prevSubSlide}
            className={`flex items-center px-3 py-1 rounded text-sm ${
              subSlideIndex > 0
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={subSlideIndex === 0}
          >
            <ChevronLeft size={14} className="mr-1" />
            前のポイント
          </button>
          
          <button
            onClick={nextSubSlide}
            className={`flex items-center px-3 py-1 rounded text-sm ${
              subSlideIndex < subSlides.length - 1
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={subSlideIndex === subSlides.length - 1}
          >
            次のポイント
            <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideAIBasics;