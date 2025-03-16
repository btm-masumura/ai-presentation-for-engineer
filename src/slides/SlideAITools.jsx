import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideAITools = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  
  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: 各サービスの特徴
    {
      title: "2.1 各サービスの特徴",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">代表的な生成AIサービス</h3>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">C</span>
                  </div>
                  <h4 className="text-lg font-bold ml-3 text-gray-800">ChatGPT (OpenAI)</h4>
                </div>
                <ul className="mt-2 pl-14 list-disc">
                  <li>GPT-4o / GPT-4.5</li>
                  <li>対話型AIの代表格</li>
                  <li>GPTsやハイレベルのモデル、DeepResearchや検索機能が使える(有料)</li>
                  <li>日本語を含む多言語対応に優れている</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">C</span>
                  </div>
                  <h4 className="text-lg font-bold ml-3 text-gray-800">Claude (Anthropic)</h4>
                </div>
                <ul className="mt-2 pl-14 list-disc">
                  <li>大規模コンテキストウィンドウ (100kトークン可能)</li>
                  <li>長文要約や文書解析が得意</li>
                  <li>情報の正確性とバイアス軽減に注力</li>
                  <li>基本的なClaude 3.5 Sonetは無料利用可</li>
                </ul>
                <p className="pt-3 px-3 text-gray-700">※この資料はClaude 3.7 Sonetにより、ReactとTailwindcssで作成されています。</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">G</span>
                  </div>
                  <h4 className="text-lg font-bold ml-3 text-gray-800">Google Gemini</h4>
                </div>
                <ul className="mt-2 pl-14 list-disc">
                  <li>マルチモーダル対応 (テキスト/画像など)</li>
                  <li>Google検索との連携</li>
                  <li>最新の情報へのアクセス可能</li>
                  <li>拡張機能（Gmail、Docs、スプレッドシート、Drive、 Youtube等）との連携</li>
                </ul>
                <p className="pt-3 px-3 text-gray-700">※BTMでもGoogle Workspaceのアカウントプラン内で有料プランが使えます。</p>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">サービス比較表</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-r">サービス</th>
                    <th className="px-4 py-2 border-b border-r">最新モデル<br></br><small>（2025年3月）</small></th>
                    <th className="px-4 py-2 border-b border-r">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-r font-semibold">ChatGPT</td>
                    <td className="px-4 py-2 border-b border-r">GPT-4.5<br></br>GPT-4o<br></br>o3-mini...など</td>
                    <td className="px-4 py-2 border-b border-r">汎用性が高い</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r font-semibold">Claude</td>
                    <td className="px-4 py-2 border-b border-r">Claude 3.7 Sonnet</td>
                    <td className="px-4 py-2 border-b border-r">長文やコーディング処理に強い</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-r font-semibold">Gemini</td>
                    <td className="px-4 py-2 border-r">Gemini 2.0 Flash</td>
                    <td className="px-4 py-2 border-r">Googleサービス連携</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド2: Geminiの使い方
    {
      title: "2.2 Geminiの使い方 (ハンズオン)",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Geminiの基本操作</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <span className="font-semibold">Geminiサイトにアクセス:</span>
                <a href="https://gemini.google.com/" className="ml-2 text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://gemini.google.com/</a>
              </li>
              <li>
                <span className="font-semibold">Googleアカウントでログイン</span>
                <p className="text-sm text-gray-600 mt-1">※Gmailアカウントをお持ちの方は、そのまま利用できます</p>
              </li>
              <li>
                <span className="font-semibold">会話を開始:</span>
                <div className="bg-white p-3 rounded mt-1 border border-gray-300">
                  <p className="text-gray-700">質問や指示を入力して「送信」ボタンをクリック</p>
                </div>
              </li>
              <li>
                <span className="font-semibold">応答を確認し、会話を継続:</span>
                <p className="text-sm text-gray-600 mt-1">画像やファイルの送信も可能。音声入力が便利です！</p>
              </li>
            </ol>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-gray-800 mb-3">プロンプト例1: 創作</h4>
              <div className="bg-gray-100 p-3 rounded mb-2 text-sm">
                「ポップソングの歌詞を書いて。テーマは"夏の思い出"で、サビを含む」
              </div>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <p className="text-xs text-gray-500 mb-1">回答例:</p>
                <p className="font-bold mb-1">「夏の日の記憶」</p>
                <p className="text-xs">
                  1番:<br/>
                  眩しい太陽 砂浜を照らして<br/>
                  波の音だけが 耳に残ってる<br/>
                  あの日の約束 まだ覚えてるかな<br/>
                  <br/>
                  サビ:<br/>
                  夏の日の記憶 キラキラと輝いて<br/>
                  君との思い出 胸に刻んだ<br/>
                  あの日に戻れるなら もう一度言いたい<br/>
                  「ずっと忘れない」って
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-gray-800 mb-3">プロンプト例2: コード</h4>
              <div className="bg-gray-100 p-3 rounded mb-2 text-sm">
                「Reactのhooksを使ったカウンターサンプルコードを教えて」
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono text-green-400 whitespace-pre-wrap">
                <p className="text-xs text-gray-400 mb-2">回答例:</p>
                {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <h1>カウント: {count}</h1>
    <button onClick={() => setCount(count + 1)}>
      増やす
    </button>
    <button onClick={() => setCount(count - 1)}>
      減らす
    </button>
    <button onClick={() => setCount(0)}>
      リセット
    </button>
    </div>
  );
}

export default Counter;`}
                </div>
            </div>
          </div>
          
          <div className="w-full bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Gemini利用時の注意点</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">課金不要:</span> 有料機能はBTMのWorkspaceのアカウントで利用可能です。</li>
              <li><span className="font-semibold">APIは使用不可:</span> Google AI StudioやAPIの利用は制限されています。</li>
              <li><span className="font-semibold">ハルシネーション:</span> 時に事実と異なる情報を生成することがあるので十分に注意してください。</li>
              <li><span className="font-semibold">複雑な会話:</span> 会話の履歴が長くなると文脈の理解が難しくなることもあります。</li>
              <li><span className="font-semibold">企業情報や個人情報:</span> 機密情報は入力しないよう繊細の注意を払ってください。</li>
            </ul>
          </div>
        </div>
      )
    },
    // サブスライド3: 実践演習
    {
      title: "2.3 実践演習",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">ハンズオン演習</h3>
            <p className="mb-4">Geminiを使って、以下のタスクに挑戦してみましょう：</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-700 mb-2">タスク1: コンテンツ作成</h4>
                <p className="mb-2">新しい技術サービスの紹介文を作成してください。</p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>AIを活用したプログラミング学習アプリの紹介文を書いてください。主な機能は、コード診断、パーソナライズされた学習パス、リアルタイムフィードバックです。ターゲットは未経験から1年目のエンジニアで、300字程度でお願いします。</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-700 mb-2">タスク2: 企画アイデア出し</h4>
                <p className="mb-2">新しいモバイルアプリのアイデアを5つ提案してもらいましょう。</p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>「プログラミング初心者向けのモバイルアプリのアイデアを5つ提案してください。各アイデアには、アプリ名、主な機能、差別化ポイントを含めてください。」</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-700 mb-2">タスク3: コード説明</h4>
                <p className="mb-2">難解なコードの説明をわかりやすく依頼してみましょう。</p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>「以下のReactコードが何をしているのか、初心者にもわかるように説明してください。特にuseEffectとuseStateの役割を詳しく説明してください。」</p>
                  
                  <div className="mt-2 relative">
                    <div className="bg-gray-800 p-3 rounded text-green-400 font-mono text-xs whitespace-pre-wrap code-to-copy">
                      <pre>
                {`import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Tokyo');

  useEffect(() => {
    setLoading(true);
    // 実際のアプリではここでAPIを呼び出します
    fetch(\`https://api.example.com/weather?city=\${city}\`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [city]); // cityが変更されたときだけ実行

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>天気アプリ</h1>
      <select value={city} onChange={handleCityChange}>
        <option value="Tokyo">東京</option>
        <option value="Osaka">大阪</option>
        <option value="Sapporo">札幌</option>
      </select>
      
      {loading ? (
        <p>ロード中...</p>
      ) : (
        <div>
          <h2>{city}の天気</h2>
          <p>{weather?.description}</p>
          <p>気温: {weather?.temperature}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;`}
                      </pre>
                    </div>
                    <button 
                      onClick={() => {
                        const codeElement = document.querySelector('.code-to-copy');
                        if (codeElement) {
                          navigator.clipboard.writeText(codeElement.textContent);
                          const notification = document.querySelector('.copy-notification');
                          if (notification) {
                            notification.classList.remove('hidden');
                            setTimeout(() => {
                              notification.classList.add('hidden');
                            }, 2000);
                          }
                        }
                      }}
                      className="absolute top-2 right-2 bg-gray-700 text-gray-300 p-1 rounded hover:bg-gray-600"
                      title="コードをコピー"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <span className="copy-notification hidden absolute top-2 right-10 bg-green-600 text-white text-xs py-1 px-2 rounded">
                      コピーしました!
                    </span>
                  </div>
                  
                  <p className="text-xs mt-2 text-gray-500">※このコードサンプルを使ってGeminiに質問してみましょう</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">効果的なプロンプトのコツ</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">具体的に指示する</p>
                <p className="text-sm">「記事を書いて」ではなく「〇〇向けの、〇〇に関する800字の記事を書いて」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">目的を伝える</p>
                <p className="text-sm">「これは顧客向けの説明資料のためです」など背景情報を提供</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">出力形式を指定</p>
                <p className="text-sm">「表形式で」「箇条書きで」「Markdownで」など</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">段階的に指示</p>
                <p className="text-sm">複雑なタスクは分割して、順番に依頼</p>
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

export default SlideAITools;