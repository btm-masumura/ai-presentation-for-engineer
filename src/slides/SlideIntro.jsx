import React from 'react';

const SlideIntro = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">株式会社BTM <br></br>ITEエンジニア向け<br></br>生成AI講座</h1>
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">生成AI基礎から実務活用</h2>
        
        <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">👨‍💻</span>
            </div>
            <div className="h-px w-8 bg-blue-200 flex items-center justify-center">
                <span className="bg-white px-2 text-xl">×</span>
            </div>
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-4">
                <span className="text-3xl">🤖</span>
            </div>
            <div className="h-px w-8 bg-blue-200 flex items-center justify-center">
                <span className="bg-white px-2 text-xl">=</span>
            </div>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center ml-4">
                <span className="text-3xl">🚀</span>
            </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-4">初級〜中級エンジニアのための実践的AI活用術</p>
        <p className="text-gray-600">オンライン研修（3時間）</p>
      </div>
      
      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">研修の概要</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">1</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">対象</p>
              <p className="text-gray-600">エンジニア歴1～3年目の初級～中級エンジニア</p>
              <p className="text-gray-600">生成AI初心者～中級者</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">2</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">形式</p>
              <p className="text-gray-600">オンライン研修</p>
              <p className="text-gray-600">(Google Meetは全員の顔が見れないので、リアクションで協力をお願いします！)</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">3</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">時間</p>
              <p className="text-gray-600">約3時間</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-600 font-bold text-sm">4</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">前提</p>
              <p className="text-gray-600">課金なしの環境で実践可能</p>
              <p className="text-gray-600">・テキスト生成AI：Gemini</p>
              <p className="text-gray-600">・画像生成AI：ImageFX</p>
              <p className="text-gray-600">・音楽生成AI：Suno AI</p>
              <p className="text-gray-600">・開発ツール：Google Colab</p>
              <p className="text-gray-600">・開発ツール：VSCode</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">研修の内容</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">1. AIと生成AIの基礎</p>
            <p className="text-sm text-gray-600">AI概念/生成AI特徴</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">2. 代表的な生成AIツール</p>
            <p className="text-sm text-gray-600">ChatGPT, Claude, Gemini</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">3. 画像生成AI</p>
            <p className="text-sm text-gray-600">Midjourney, DALL-E, ImageFX</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">4. 音楽生成ハンズオン</p>
            <p className="text-sm text-gray-600">Suno.ai×Gemini×ImageFX</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">5. プログラム生成（Python）</p>
            <p className="text-sm text-gray-600">Python×Google Colab×AI</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-semibold text-blue-700">6. プログラム学習（React）</p>
            <p className="text-sm text-gray-600">React×AIの活用</p>
          </div>
          <div className="bg-gray-50 p-3 rounded md:col-span-2">
            <p className="font-semibold text-blue-700">7. まとめと参考リソース</p>
            <p className="text-sm text-gray-600">復習 / Q&A / 終了</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIntro;