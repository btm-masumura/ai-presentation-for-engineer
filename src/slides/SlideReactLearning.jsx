import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideReactLearning = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  
  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: React学習をAIで加速
    {
      title: "6.1 React学習をAIで加速",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">AIを活用したReact学習の利点</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold text-blue-600 mb-2">1. サンプルコード生成</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>様々なUIコンポーネント</li>
                  <li>Hooksの使用例</li>
                  <li>状態管理パターン</li>
                  <li>データフェッチング</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold text-blue-600 mb-2">2. コード解説</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>複雑なコードの説明</li>
                  <li>ベストプラクティスの解説</li>
                  <li>アンチパターンの指摘</li>
                  <li>パフォーマンス改善提案</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold text-blue-600 mb-2">3. エラー解決</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>エラーメッセージの解読</li>
                  <li>デバッグのヒント</li>
                  <li>バグ修正案の提示</li>
                  <li>StackOverflow不要に</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-bold text-blue-600 mb-2">4. カスタマイズ学習</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>レベルに合わせた説明</li>
                  <li>特定分野の深掘り</li>
                  <li>プロジェクト特化の知識</li>
                  <li>ステップバイステップ解説</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">AIへの効果的な質問方法</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-gray-700">基本から学ぶ</p>
                <p className="text-sm text-gray-600">「Reactの基本概念をコード例と一緒に説明してください」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-gray-700">特定機能の実装</p>
                <p className="text-sm text-gray-600">「Reactでドラッグ&ドロップ機能を実装するシンプルな例を示してください」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-gray-700">コードレビュー</p>
                <p className="text-sm text-gray-600">「以下のReactコードをレビューし、改善点を指摘してください（コードを貼り付け）」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-gray-700">エラー解決</p>
                <p className="text-sm text-gray-600">「Reactで"Cannot read property 'map' of undefined"エラーが発生しています。原因と解決策を教えてください」</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド2: 具体的フロー
    {
      title: "6.2 具体的フロー",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <div className="relative">
              <div className="absolute left-8 inset-y-0 w-1 bg-blue-200"></div>
              <div className="space-y-6 relative">
                <div className="flex">
                  <div className="flex-shrink-0 w-16">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex-grow">
                    <h4 className="font-bold text-gray-800 mb-2">React環境を準備</h4>
                    <p className="text-sm mb-2">Create React App (CRA) または Viteでプロジェクト作成</p>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                      # Create React Appの場合<br/>
                      npx create-react-app my-app<br/><br/>
                      # Viteの場合<br/>
                      npm create vite@latest my-app -- --template react
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-16">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex-grow">
                    <h4 className="font-bold text-gray-800 mb-2">AIにコード生成を依頼</h4>
                    <p className="text-sm mb-2">具体的な機能やUIの実装例を質問</p>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      「Reactでログインフォームを作成し、バリデーション機能も実装してください。ユーザー名は4文字以上、パスワードは8文字以上必須とします。」
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-16">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex-grow">
                    <h4 className="font-bold text-gray-800 mb-2">コードを実装して実行</h4>
                    <p className="text-sm mb-2">生成されたコードをコピー＆ペーストし、必要に応じて修正</p>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                      # プロジェクトディレクトリに移動<br/>
                      cd my-app<br/><br/>
                      # 開発サーバーを起動<br/>
                      npm start  # または npm run dev (Viteの場合)
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-16">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex-grow">
                    <h4 className="font-bold text-gray-800 mb-2">エラーや改善点をAIに相談</h4>
                    <p className="text-sm mb-2">発生したエラーメッセージやコードを貼り付けて質問</p>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      「以下のエラーが発生しました。解決方法を教えてください：<br/>
                      Error: React Hook "useState" is called in function "loginForm" that is neither a React function component nor a custom React Hook function.」
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-16">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex-grow">
                    <h4 className="font-bold text-gray-800 mb-2">コードを理解し学習に活用</h4>
                    <p className="text-sm mb-2">AIに詳細な解説を求め、コードの仕組みを理解</p>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      「このコードのuseStateとuseEffectの役割を初心者向けに詳しく解説してください。特にdependency arrayの意味を知りたいです。」
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">React学習のメリット</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-green-700 mb-1">学習速度向上</p>
                <p className="text-sm">概念理解→実装→解説のサイクルを素早く繰り返し可能</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-green-700 mb-1">実践的コード生成</p>
                <p className="text-sm">実務で使えるサンプルを即座に得られる</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-green-700 mb-1">カスタマイズ学習</p>
                <p className="text-sm">自分のペース・関心に合わせた学習内容を設計可能</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-green-700 mb-1">つまずきポイント解消</p>
                <p className="text-sm">エラーやバグの即時解決で挫折リスク低減</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド3: 実践演習
    {
      title: "6.3 実践演習",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">React学習ハンズオン演習</h3>
            <p className="mb-4">以下のいずれかのタスクをAIに依頼し、サンプルコードを生成してもらいましょう：</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-yellow-700 mb-2">タスク1: Todoリスト</h4>
                <p className="text-sm mb-2">シンプルなToDoリストアプリの基本機能</p>
                <div className="bg-gray-100 p-3 rounded text-xs">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>「Reactで簡単なTodoリストアプリを作成してください。機能としては、タスクの追加、完了のチェック、削除ができるようにしたいです。useState hookを使用した実装例を示してください。」</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-yellow-700 mb-2">タスク2: フォーム処理</h4>
                <p className="text-sm mb-2">バリデーション付きの入力フォーム</p>
                <div className="bg-gray-100 p-3 rounded text-xs">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>「Reactでフォームを作成し、バリデーション機能を実装してください。名前（必須）、メールアドレス（有効な形式）、年齢（18歳以上）の入力欄があり、エラーメッセージを表示する機能を持つものにしてください。」</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-yellow-700 mb-2">タスク3: APIデータ表示</h4>
                <p className="text-sm mb-2">外部APIからのデータ取得と表示</p>
                <div className="bg-gray-100 p-3 rounded text-xs">
                  <p className="font-semibold">プロンプト例:</p>
                  <p>「ReactでJSONPlaceholderのAPIを使用して投稿一覧を取得し、表示するコンポーネントを作成してください。useEffectフックを使用し、ローディング状態とエラー処理も実装してください。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">学習のステップアップ</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700">1. 理解を深める質問</p>
                <p className="text-sm text-gray-600">「このコードでuseEffectが2回呼ばれる理由は何ですか？」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700">2. コードの最適化</p>
                <p className="text-sm text-gray-600">「このコンポーネントをメモ化してパフォーマンスを向上させる方法を教えてください」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700">3. デザインパターン</p>
                <p className="text-sm text-gray-600">「このコードをContainer/Presentationalパターンで書き直すとどうなりますか？」</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700">4. テスト方法</p>
                <p className="text-sm text-gray-600">「React Testing Libraryを使ってこのコンポーネントをテストするコード例を教えてください」</p>
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

export default SlideReactLearning;