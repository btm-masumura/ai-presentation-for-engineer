import React from 'react';

const SlideImageGeneration = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">画像生成AIの特徴</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <span className="font-semibold">概要:</span>
            テキストの説明（プロンプト）から詳細な画像を生成する技術。<br></br>
            　　 芸術作品からリアル写真まで様々なスタイルに対応</li>
          <li><span className="font-semibold">代表的サービス:</span> 
            <ul className="list-disc pl-6 mt-2">
              <li><span className="font-semibold">DALL-E 3 (OpenAI):</span> ChatGPTと統合され、会話しながらの描写が得意</li>
              <li><span className="font-semibold">Midjourney:</span> 芸術的な表現や美しい構図を生成するのに優れる</li>
              <li><span className="font-semibold">Stable Diffusion:</span> オープンソースで自前環境での利用や細かいカスタマイズが可能</li>
              <li><span className="font-semibold">ImageFX (Google):</span> ブラウザで簡単に使える無料サービス</li>
            </ul>
          </li>
          <li><span className="font-semibold">従来の画像処理との違い:</span> 
            <ul className="list-disc pl-6 mt-2">
              <li><span className="font-semibold">言語理解:</span> 言葉の説明から内容を理解して画像化</li>
              <li><span className="font-semibold">創造性:</span> 実在しないものでも特徴を組み合わせて生成可能</li>
              <li><span className="font-semibold">スタイル変換:</span> 同じ内容を様々な画風やスタイルで表現可能</li>
            </ul>
          </li>
          <li><span className="font-semibold">活用シーン:</span> デザイン案の作成、イラスト制作、商品イメージ、広告素材、プレゼン資料</li>
        </ul>
      </div>
      <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">ImageFXでのハンズオン</h3>
        <p className="mb-4">
          ImageFXは無料で使えるGoogleの画像生成AIです。<br></br>
          さっそく試してみましょう！
        </p>
        
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
      <div className="w-full bg-gray-100 rounded-lg p-6 mb-6">
        <div className="font-bold mb-2">プロンプト例（日本語）：</div>
        <div className="bg-white p-4 rounded border border-gray-300 mb-4">
          富士山を背景に、桜の木の下で伝統的な着物を着た女性が日本茶を飲んでいる様子。高品質な写真風。
        </div>
        <div className="font-bold mb-2">プロンプト例（英語）：</div>
        <div className="bg-white p-4 rounded border border-gray-300 mb-4">
        A woman dressed in a traditional kimono drinking Japanese tea under a cherry blossom tree with Mount Fuji in the background. High-quality photograph style.
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold mb-2">生成画像：</div>
            <div className="bg-gray-200 rounded relative overflow-hidden">
              {/* 実際の画像を表示 */}
              <img 
                src={require('./images/output.png')} 
                alt="画像生成結果例" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">バリエーション：</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-200 h-24 rounded overflow-hidden">
                <img 
                  src={require('./images/1.png')} 
                  alt="バリエーション1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 h-24 rounded overflow-hidden">
                <img 
                  src={require('./images/2.png')} 
                  alt="バリエーション2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 h-24 rounded overflow-hidden">
                <img 
                  src={require('./images/3.png')} 
                  alt="バリエーション3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 h-24 rounded overflow-hidden">
                <img 
                  src={require('./images/4.png')} 
                  alt="バリエーション4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">画像生成AIの活用方法</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>商品イメージの作成</li>
          <li>コンセプトアート・デザインの提案</li>
          <li>広告・マーケティング素材</li>
          <li>プレゼンテーション資料の作成</li>
          <li>アイデアの視覚化</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideImageGeneration;