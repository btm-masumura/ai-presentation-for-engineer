import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideSummary = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);

  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: 研修の要点
    {
      title: "7.1 研修の要点",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">生成AI活用の5つのポイント</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">1</div>
                <h4 className="font-bold text-gray-800 mb-2">生成AIの基礎</h4>
                <p className="text-sm">AI技術の進化とGPTモデルの仕組み</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">2</div>
                <h4 className="font-bold text-gray-800 mb-2">代表的ツール</h4>
                <p className="text-sm">ChatGPT, Claude, Gemini, ImageFX, Suno AI 等</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">3</div>
                <h4 className="font-bold text-gray-800 mb-2">マルチモーダル活用</h4>
                <p className="text-sm">文章・画像・音楽・コードなど複合的活用</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow text-center md:col-span-3 lg:col-span-1">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">4</div>
                <h4 className="font-bold text-gray-800 mb-2">実務シーンでの応用</h4>
                <p className="text-sm">コード開発、ドキュメント作成、デザイン案生成</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow text-center md:col-span-3 lg:col-span-2">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">5</div>
                <h4 className="font-bold text-gray-800 mb-2">注意点とベストプラクティス</h4>
                <p className="text-sm">機密情報の取り扱い、ハルシネーション対策、プロンプトエンジニアリングの重要性</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">セクション別の要点</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">セクション</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">主要内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">AIと生成AIの基礎</td>
                    <td className="px-4 py-3 text-sm text-gray-600">AI定義、歴史、生成AI特徴</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">代表的な生成AIツール</td>
                    <td className="px-4 py-3 text-sm text-gray-600">ChatGPT, Claude, Gemini特性と活用法</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">画像生成AI</td>
                    <td className="px-4 py-3 text-sm text-gray-600">各サービス比較、ImageFXハンズオン</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">音楽生成ハンズオン</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Suno AIによる楽曲制作</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">プログラム生成（Python）</td>
                    <td className="px-4 py-3 text-sm text-gray-600">AI活用コーディング、Colab連携</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">プログラム学習（React）</td>
                    <td className="px-4 py-3 text-sm text-gray-600">AI支援開発・学習手法</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド2: 追加参考リソース
    {
      title: "7.2 追加参考リソース",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-lg font-bold text-blue-700 mb-4">公式ドキュメント</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://platform.openai.com/docs" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-700 font-bold text-xs">O</span>
                      </div>
                      <span>OpenAIドキュメント</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.anthropic.com/ja/docs/welcome" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-purple-700 font-bold text-xs">A</span>
                      </div>
                      <span>Anthropic (Claude)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://support.google.com/gemini/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-700 font-bold text-xs">G</span>
                      </div>
                      <span>Google Gemini</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/CompVis/stable-diffusion" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-yellow-700 font-bold text-xs">SD</span>
                      </div>
                      <span>Stable Diffusion</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://suno.com/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-red-700 font-bold text-xs">S</span>
                      </div>
                      <span>Suno AI</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-lg font-bold text-blue-700 mb-4">学習リソース</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://huggingface.co/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-700 font-bold text-xs">HF</span>
                      </div>
                      <span>Hugging Face</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://beta.reactjs.org/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-700 font-bold text-xs">R</span>
                      </div>
                      <span>React公式ドキュメント</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-700 font-bold text-xs">K</span>
                      </div>
                      <span>Kaggle Learn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.deeplearning.ai/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-purple-700 font-bold text-xs">DL</span>
                      </div>
                      <span>DeepLearning.AI</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://colab.research.google.com/" className="flex items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-yellow-700 font-bold text-xs">GC</span>
                      </div>
                      <span>Google Colab</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3 text-center">Prompt Engineering リソース</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">OpenAI Cookbook</p>
                <p className="text-sm text-gray-600">プロンプト設計のガイドラインと実践例</p>
                <a href="https://github.com/openai/openai-cookbook" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/openai/openai-cookbook</a>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">Learn Prompting</p>
                <p className="text-sm text-gray-600">無料のプロンプトエンジニアリング講座</p>
                <a href="https://learnprompting.org/" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">learnprompting.org</a>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">Prompt Engineering Guide</p>
                <p className="text-sm text-gray-600">テクニックと最新リサーチ</p>
                <a href="https://www.promptingguide.ai/" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">promptingguide.ai</a>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">Awesome ChatGPT Prompts</p>
                <p className="text-sm text-gray-600">コミュニティ作成のプロンプト集</p>
                <a href="https://github.com/f/awesome-chatgpt-prompts" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/f/awesome-chatgpt-prompts</a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド3: クロージング
    {
      title: "7.3 クロージング",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-6 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">お疲れさまでした！</h3>
            <p className="text-lg mb-6">生成AI基礎から実務活用の研修は以上となります</p>

            <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="text-3xl">🚀</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">今後も進化し続けるAI技術をキャッチアップし、<br />業務効率化とスキルアップにお役立てください</p>

            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transform transition-transform hover:scale-105">
              質疑応答タイム
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">今後の学習ステップ</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5 border-b">
                <h4 className="font-bold text-blue-700 mb-2">Step 1: 実務での活用開始</h4>
                <p className="text-sm text-gray-600">学んだツールを日常業務に取り入れる（ドキュメント作成、コード生成など）</p>
              </div>
              <div className="p-5 border-b">
                <h4 className="font-bold text-blue-700 mb-2">Step 2: プロンプトスキル向上</h4>
                <p className="text-sm text-gray-600">より効果的な指示を出すためのプロンプトエンジニアリングを学ぶ</p>
              </div>
              <div className="p-5 border-b">
                <h4 className="font-bold text-blue-700 mb-2">Step 3: 応用事例の研究</h4>
                <p className="text-sm text-gray-600">業界別のAI活用事例を調査し、自分の業務に応用する方法を考える</p>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-blue-700 mb-2">Step 4: チーム内で知見共有</h4>
                <p className="text-sm text-gray-600">学んだことを同僚と共有し、組織全体のAIリテラシー向上に貢献する</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 bg-yellow-50 rounded-lg p-5">
            <h3 className="text-lg font-bold text-yellow-800 mb-2 text-center">研修アンケートのお願い</h3>
            <p className="text-center text-sm mb-4">今後の研修改善のため、アンケートへのご協力をお願いいたします</p>
            <div className="flex justify-center">
              <div className="inline-block bg-white px-4 py-2 rounded border border-yellow-300 text-center">
                <p className="font-bold text-yellow-800 mb-1">アンケートQRコード</p>
                <div className="w-32 h-32 mx-auto">
                  <img
                    src={require('./images/qr.png')}
                    alt="アンケートQRコード"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">スマートフォンで読み取り、お答えください</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3"><a href="https://google.com" target="_blank" rel="noopener noreferrer">https://google.com</a></p>
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
            className={`flex items-center px-3 py-1 rounded text-sm ${subSlideIndex > 0
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
            className={`flex items-center px-3 py-1 rounded text-sm ${subSlideIndex < subSlides.length - 1
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

export default SlideSummary;