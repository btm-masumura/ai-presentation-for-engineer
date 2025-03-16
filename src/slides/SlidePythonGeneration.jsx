import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlidePythonGeneration = () => {
  // サブスライドの状態管理
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  
  // サブスライドの内容を配列で管理
  const subSlides = [
    // サブスライド1: Google Colabの基本
    {
      title: "5.1 Google Colabとは",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Google Colabの基本</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-semibold">概要:</span> GoogleのクラウドベースのPython実行環境。ブラウザ上でPythonコードを書いて実行できる</li>
              <li><span className="font-semibold">特徴:</span> GPUやTPUの無料利用、Googleドライブとの連携、ノートブック形式のコーディング環境</li>
              <li><span className="font-semibold">メリット:</span> 環境構築不要、チームでの共有が容易、豊富なライブラリが事前インストール済み</li>
            </ul>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200 mt-4 mb-2">
              <p className="font-bold text-blue-700 mb-2">Google Colabにアクセス：</p>
              <a 
                href="https://colab.research.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-blue-100 p-3 rounded hover:bg-blue-200 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#F9AB00">
                  <path d="M12.11 15.39l-3.88-3.88a.996.996 0 0 1 0-1.41l3.88-3.88a.996.996 0 0 1 1.41 0l3.88 3.88a.996.996 0 0 1 0 1.41l-3.88 3.88a.996.996 0 0 1-1.41 0z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                Google Colab を別タブで開く
              </a>
            </div>
          </div>
          
          <div className="w-full bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Google Colabの基本操作</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded shadow">
                <p className="font-semibold text-gray-700 mb-1">コードセル</p>
                <p className="text-sm">Pythonコードを記述して実行するための領域。実行ボタンまたはShift+Enterで実行</p>
              </div>
              <div className="bg-gray-100 p-3 rounded shadow">
                <p className="font-semibold text-gray-700 mb-1">テキストセル</p>
                <p className="text-sm">マークダウン形式で説明文やドキュメントを追加できる</p>
              </div>
              <div className="bg-gray-100 p-3 rounded shadow">
                <p className="font-semibold text-gray-700 mb-1">ランタイム</p>
                <p className="text-sm">CPU、GPU、TPUから選択可能。「ランタイム」→「ランタイムのタイプを変更」</p>
              </div>
              <div className="bg-gray-100 p-3 rounded shadow">
                <p className="font-semibold text-gray-700 mb-1">ファイル操作</p>
                <p className="text-sm">左側のファイルタブからアップロード・ダウンロード可能</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド2: AI生成による基本的なPythonプログラム
    {
      title: "5.2 AI生成による基本的なPythonプログラム",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">簡単なPythonプログラム例</h3>
              
              <div className="mb-4">
                <div className="font-bold mb-2">プロンプト：</div>
                <div className="bg-white p-3 rounded border border-gray-300 text-sm">
                  簡単な数当てゲームをPythonで作ってください。コンピュータがランダムに1〜100の数字を選び、ユーザーがその数字を当てるゲームです。ユーザーの入力が大きいか小さいかをヒントとして表示してください。
                </div>
              </div>
              
              <div className="font-bold mb-2">生成されたPythonコード：</div>
              <div className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono whitespace-pre-wrap">
    {`import random

def number_guessing_game():
    # 1から100までのランダムな数を選ぶ
    secret_number = random.randint(1, 100)
    attempts = 0
    guess = 0
    
    print("数当てゲームを始めます！")
    print("1から100までの数字を当ててください。")
    
    # ゲームのメインループ
    while guess != secret_number:
        # ユーザーからの入力を受け取る
        try:
            guess = int(input("あなたの予想を入力してください: "))
            attempts += 1
            
            # 入力値をチェック
            if guess < 1 or guess > 100:
                print("1から100までの数字を入力してください。")
                continue
                
            # ヒントを表示
            if guess < secret_number:
                print("もっと大きい数字です！")
            elif guess > secret_number:
                print("もっと小さい数字です！")
            else:
                print(f"正解です！{attempts}回の試行で当てました！")
        except ValueError:
            print("有効な数字を入力してください。")

if __name__ == "__main__":
    number_guessing_game()
    
    # もう一度プレイするか尋ねる
    while True:
        play_again = input("もう一度プレイしますか？ (y/n): ").lower()
        if play_again == 'y':
            number_guessing_game()
        elif play_again == 'n':
            print("遊んでくれてありがとう！またね！")
            break
        else:
            print("'y'か'n'を入力してください。")`}
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Google Colabで最適なPythonプログラム</h3>
            <p className="mb-3">
              Google Colabは対話型ノートブック環境のため、次のようなプログラムが実行しやすく、学習に最適です：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">データ可視化</p>
                <p className="text-sm">matplotlib/seabornを使ったグラフ描画、データ分析結果の視覚化</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">機械学習モデル</p>
                <p className="text-sm">scikit-learn/TensorFlowなどを使った小規模なML実験</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">データ処理スクリプト</p>
                <p className="text-sm">Pandas/NumPyを使ったデータ加工・分析</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-700 mb-1">対話型アプリ</p>
                <p className="text-sm">入力を受け取り結果を表示する教育用アプリ（クイズ、ゲームなど）</p>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
              <p className="font-semibold text-yellow-800">ポイント：</p>
              <p className="text-sm mt-1">
                生成AIに「Google Colab向けのPythonコード」と指定すると、ノートブック環境に適した
                インタラクティブなコードを生成してくれます。特に出力の可視化や段階的な実行に適したコードが得られます。
              </p>
            </div>
          </div>
        </div>
      )
    },
    // サブスライド3: AI活用によるPythonアプリ開発
    {
      title: "5.3 AI活用によるPythonアプリ開発",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">AIプロンプトでPythonアプリを開発</h3>
            <p className="mb-4">
              生成AIを使って簡単なPythonアプリケーションを作成できます。
              適切なプロンプトを作成し、Google Colabで実行するだけで、様々なアプリが開発可能です。
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">効果的なプロンプトの構成</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">目的を明確に伝える</p>
                    <p className="text-sm text-gray-600">
                      「テキストを音声に変換するツールを作りたい」など、目的を明確に
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">技術要件を詳細に</p>
                    <p className="text-sm text-gray-600">
                      「gTTSライブラリを使用」「BeautifulSoupでスクレイピング」など具体的に
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">機能仕様を明記</p>
                    <p className="text-sm text-gray-600">
                      「テキスト入力→QRコード生成→画像表示」など、処理の流れを説明
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">実行環境の指定</p>
                    <p className="text-sm text-gray-600">
                      「Google Colabで実行可能なコード」と明示して最適化を促す
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-purple-100 p-3">
                  <h4 className="font-bold text-purple-800">テキスト音声合成ツール</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-2 mb-3">
                    <p className="text-sm font-semibold text-gray-700">主な機能:</p>
                    <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                      <li>テキストを音声に変換</li>
                      <li>合成した音声を再生する</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-2 rounded mt-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">プロンプト例:</p>
                    <p className="text-xs text-gray-600 whitespace-normal break-words">
                      Google Colab上でテキストを音声に変換し、再生するPythonコードを作成してください。具体的には、gTTSライブラリを使って、指定した日本語のテキストを音声ファイルに変換し、その音声を再生する機能を持つコードにしてください。また、コードはすべて1つのセルにまとめて出力してください。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-green-100 p-3">
                  <h4 className="font-bold text-green-800">ニュース取得ツール</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-2 mb-3">
                    <p className="text-sm font-semibold text-gray-700">主な機能:</p>
                    <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                      <li>ニュースの自動取得と表示</li>
                      <li>タイトルとリンクを取得</li>
                      <li>クリックでニュースサイト表示</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-2 rounded mt-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">プロンプト例:</p>
                    <div className="text-xs text-gray-600 whitespace-normal break-words">
                      <p className="mb-1">
                        PythonでYahoo!ニュースから最新のニュースタイトルとリンクを取得するプログラムを作成してください。
                        以下の要件に従ってください：
                      </p>
                      <ol className="list-decimal pl-4 mt-1 mb-1">
                        <li>requestsとBeautifulSoupライブラリを使用すること。</li>
                        <li>Yahoo!ニュースのURLは'https://news.yahoo.co.jp/'とすること。</li>
                        <li>ウェブページを取得し、HTMLを解析すること。</li>
                        <li>ニュースアイテムはリスト要素（li）で、クラス名は'sc-1nhdoj2-0'を含むこと。</li>
                        <li>各ニュースアイテムから、aタグを使用してタイトルとリンクを取得すること。</li>
                        <li>結果として、ニュースタイトルとそのリンクを表示すること。</li>
                        <li>Google Colabで動作すること。</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-100 p-3">
                  <h4 className="font-bold text-blue-800">QRコード生成ツール</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-2 mb-3">
                    <p className="text-sm font-semibold text-gray-700">主な機能:</p>
                    <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                      <li>テキストからQRコード生成</li>
                      <li>サイズ・エラー訂正レベル調整</li>
                      <li>画像として表示する</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-2 rounded mt-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">プロンプト例:</p>
                    <div className="text-xs text-gray-600 whitespace-normal break-words">
                      <p className="mb-1">目的: ユーザが入力したURLをQRコードに変換するツールをGoogle Colab上で作成する。</p>
                      <p className="mb-1">要件: gradioを使って、ユーザがURLを入力するとQRコードを生成し、画像として表示する。</p>
                      <p className="mb-1">QRコードのサイズとエラー訂正レベルを調整できるようにする。</p>
                      <p className="mb-1">生成したQRコードは一時ファイルとして保存し、そのパスを出力として返すこと。</p>
                      <p>Google Colab上で実行できるように、必要なライブラリのインストールコマンドも含めること。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-3">アプリ開発のポイント</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-yellow-700 mb-1">インタラクティブな開発</p>
                  <p className="text-sm text-gray-600">
                    エラーやバグが発生したら、そのメッセージを生成AIに送り、解決策を得られます。「このエラーの解決方法は？」と質問するだけで具体的な修正案が得られます。
                  </p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-yellow-700 mb-1">機能の段階的追加</p>
                  <p className="text-sm text-gray-600">
                    まず基本機能を実装し、動作確認後に「〜の機能を追加したい」と依頼することで、既存コードに新機能を追加できます。一度に完璧を求めるより段階的に改善しましょう。
                  </p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-yellow-700 mb-1">コードの理解を深める</p>
                  <p className="text-sm text-gray-600">
                    生成されたコードの特定部分について「この部分の動作を詳しく説明して」と質問することで、コードの理解を深められます。学習効果も高まります。
                  </p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-yellow-700 mb-1">永続的な保存</p>
                  <p className="text-sm text-gray-600">
                    完成したColabノートブックは「ファイル」→「ドライブにコピーを保存」で永続的に保存できます。またはGitHubにコードをエクスポートしておくことも有効です。
                  </p>
                </div>
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

export default SlidePythonGeneration;

