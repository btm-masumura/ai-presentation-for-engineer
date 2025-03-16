import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideMusicGeneration = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  
  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: 概要
    {
      title: "4.1 音楽生成の概要",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">音楽生成AIの特徴</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-semibold">Suno.ai:</span> 歌詞からメロディ・ボーカルまで自動生成する音楽AI</li>
              <li><span className="font-semibold">AIツール連携:</span> Geminiで歌詞、ImageFXでジャケット、Sunoで楽曲</li>
              <li><span className="font-semibold">メリット:</span> 音楽制作知識がなくても短時間で楽曲制作可能</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full mb-6">
            <div className="bg-purple-100 p-4 rounded-lg flex flex-col items-center">
              <div className="text-purple-800 font-bold mb-2">1. 歌詞作成</div>
              <div className="h-24 bg-purple-200 rounded flex items-center justify-center p-2 text-sm text-center">
                Geminiで歌詞を生成
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center">
              <div className="text-green-800 font-bold mb-2">2. ジャケット作成</div>
              <div className="h-24 bg-green-200 rounded flex items-center justify-center p-2 text-sm text-center">
                ImageFXで画像を生成
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
              <div className="text-blue-800 font-bold mb-2">3. 楽曲生成</div>
              <div className="h-24 bg-blue-200 rounded flex items-center justify-center p-2 text-sm text-center">
                Suno.aiで音楽を生成
              </div>
            </div>
          </div>
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Suno AIでのハンズオン</h3>
            <p className="mb-4">
              Suno AIは無料でも使える音楽生成AIです。<br></br>
              さっそく試してみましょう！
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
              <p className="font-bold text-blue-700 mb-2">【作詞】Geminiにアクセス：</p>
              <a 
                href="https://gemini.google.com/" 
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
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
              <p className="font-bold text-blue-700 mb-2">【作曲】Suno AIにアクセス：</p>
              <a 
                href="https://suno.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-blue-100 p-3 rounded hover:bg-blue-200 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#4285F4"/>
                </svg>
                Suno AI を別タブで開く
              </a>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド2: 歌詞生成
    {
      title: "4.2.1 歌詞生成 (Gemini)",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-gray-100 rounded-lg p-6 mb-6">
            <div className="font-bold mb-2">Gemini もしくは Suno AIでの歌詞生成:</div>
            <div className="bg-white p-4 rounded border border-gray-300 mb-4">
              <p className="font-semibold text-gray-700 mb-2">プロンプト例:</p>
              <p className="bg-blue-50 p-2 rounded">「ノスタルジックなJ-POP風の歌詞を書いて。夏の終わりをテーマにした2番まであるもの」</p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <p className="font-semibold text-gray-700 mb-2">生成された歌詞の例:</p>
              <div className="text-gray-800">
                <p className="font-bold mb-1">「夏の残像」</p>
                <p className="mb-2">
                  <span className="font-semibold">1番:</span><br />
                  風鈴の音が遠ざかる 窓辺に揺れる夕暮れ<br />
                  麦わら帽子とあの思い出 眠るように閉じ込めた<br />
                  セミの声も弱くなって 空は秋の色に染まる<br /><br />
                  
                  <span className="font-semibold">サビ:</span><br />
                  さよなら 夏の日々よ<br />
                  君との約束は 砂に書いた言葉<br />
                  波に消されても 心に残る<br />
                  また会える日まで
                </p>
                <p>
                  <span className="font-semibold">2番:</span><br />
                  花火の灰が降り注いだ 君の笑顔が揺れてた<br />
                  縁側で食べた西瓜の種 未来に蒔いたつもりで<br />
                  夕立の後の虹のように いつか会えることを願って<br />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg w-full max-w-5xl">
            <p className="font-semibold text-blue-800 mb-2">ポイント:</p>
            <ul className="list-disc pl-6 text-blue-800">
              <li>具体的な要素（季節、テーマ、曲調）を指定するとよい</li>
              <li>納得いくまで複数回生成し、好きな部分を組み合わせても可</li>
              <li>生成した歌詞はテキストファイルに保存しておく</li>
            </ul>
          </div>
        </div>
      )
    },
    // サブスライド3: 楽曲生成
    {
      title: "4.2.2 楽曲生成 (Suno.ai)",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-gray-100 rounded-lg p-6 mb-6">
            <div className="font-bold mb-2">Suno.aiでの楽曲生成:</div>
            <div className="bg-white p-4 rounded border border-gray-300 mb-4">
              <ol className="list-decimal pl-6 space-y-3">
                <li><a href="https://suno.com" className="text-blue-600 underline">https://suno.com</a> にアクセス（アカウント作成が必要）
                  <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                    <p className="font-bold text-blue-700 mb-2">【作曲】Suno AIにアクセス：</p>
                    <a 
                      href="https://suno.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center bg-blue-100 p-3 rounded hover:bg-blue-200 transition-colors"
                    >
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#4285F4"/>
                      </svg>
                      Suno AI を別タブで開く
                    </a>
                  </div>
                </li>
                <li>"Custom Mode" をON → 生成した歌詞を貼り付け</li>
                <li>
                  Song Descriptionにジャンルや雰囲気を英語で記載
                  <div className="bg-blue-50 p-2 mt-1 rounded text-sm">
                    例: nostalgia, jpop, emotional, summer, acoustic guitar
                  </div>
                </li>
                <li>"Create" ボタンをクリック → 1分程度で曲が生成</li>
                <li>MP3をダウンロード</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <div className="flex items-center justify-center">
                <div className="w-full h-16 bg-gray-200 rounded-lg relative">
                  <div className="absolute inset-0 flex items-center px-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      ▶
                    </div>
                    <div className="h-8 ml-4 flex-grow relative">
                      <div className="absolute top-1/2 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 w-1/3 h-1 bg-blue-500 transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-600 rounded-full transform -translate-y-1/2"></div>
                    </div>
                    <div className="ml-4 text-gray-600">0:18 / 1:00</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-6">
                    <div className="flex justify-between h-full">
                      {[...Array(40)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 bg-blue-400 mx-px" 
                          style={{ 
                            height: `${Math.floor(Math.random() * 100)}%`,
                            opacity: 0.5 + Math.random() * 0.5
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg w-full max-w-5xl">
            <p className="font-semibold text-yellow-800 mb-2">制限と注意点:</p>
            <ul className="list-disc pl-6 text-yellow-800 space-y-2">
              <li>無料アカウントは1日5回程度の生成が可能です。</li>
              <li>生成された曲の著作権はSunoにありますが、商用利用は有料版のみ許可されています。</li>
              <li>歌詞と音楽の調和が完璧でない場合もあります。</li>
              <li>日本語の歌詞は発音が不自然になることがあります。</li>
            </ul>
          </div>
        </div>
      )
    },
    // サブスライド4: ジャケット画像
    {
      title: "4.2.3 ジャケット画像作成 (ImageFX)",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="font-bold mb-2">ジャケット画像生成 (ImageFX):</div>
              <div className="bg-white p-4 rounded border border-gray-300 mb-4">
                <p className="font-semibold text-gray-700 mb-2">プロンプト例（日本語）</p>
                <p className="bg-blue-50 p-2 rounded">夏の終わりの夕暮れ、海辺で赤い鳥居と夕日、ノスタルジックなアニメ風アルバムカバー</p>
              </div>
              <div className="bg-white p-4 rounded border border-gray-300 mb-4">
                <p className="font-semibold text-gray-700 mb-2">プロンプト例（英語）</p>
                <p className="bg-blue-50 p-2 rounded">At the end of summer, a nostalgic anime-style album cover featuring a red torii gate and the sunset by the seaside.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">ImageFXでジャケ写を作成する</h3>
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
              <p className="font-bold text-blue-700 mb-2">ImageFXにアクセス：</p>
              <a 
                href="https://labs.google/fx/ja/tools/image-fx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-blue-100 p-3 rounded hover:bg-blue-200 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#4285F4"/>
                </svg>
                ImageFX を別タブで開く
              </a>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド5: 組み合わせと応用
    {
      title: "4.3 聞いてみよう！",
      content: (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 gap-6 w-full mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-3">生成した曲を聞かせてください！</h3>
              <p className="text-sm mb-2">挙手制もしくは指名制で2名の方の1番サビまでをお聞きします。</p>
              <p className="text-sm mb-2">聞いてる間もリアクションやコメントをお忘れなく！</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-3">ここまでで学んだこと</h3>
              <p className="text-sm mb-2">テキスト生成や画像生成、音楽生成を通して生成AIとの対話を学びました。</p>
              <p className="text-sm mb-2">ここからはお仕事に活かすためのハンズオンです！</p>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-800 mb-3 text-center">自分でもやってみよう！</h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold">1. テーマを決める</p>
                <p className="text-sm text-gray-600">例: 「夏の思い出」「未来への旅」「デジタル時代の恋愛」など</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold">2. テキスト生成AIで歌詞を生成、画像生成AIでジャケット作成</p>
                <p className="text-sm text-gray-600">個人またはお子さんなどと作業、15分程度</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold">3. Suno AIで楽曲生成</p>
                <p className="text-sm text-gray-600">複数バージョン試して最適なものを選択</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold">4. 完成</p>
                <p className="text-sm text-gray-600">作成した曲とジャケットを保存しよう！</p>
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

export default SlideMusicGeneration;