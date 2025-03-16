import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// スライドコンポーネントのインポート
import SlideIntro from './slides/SlideIntro';
import SlideAIBasics from './slides/SlideAIBasics';
import SlideAITools from './slides/SlideAITools';
import SlideImageGeneration from './slides/SlideImageGeneration';
import SlideMusicGeneration from './slides/SlideMusicGeneration';
import SlidePythonGeneration from './slides/SlidePythonGeneration';
import SlideReactLearning from './slides/SlideReactLearning';
import SlideSummary from './slides/SlideSummary';

// メインのプレゼンテーションコンポーネント
const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  
  // スライドコンポーネントの配列
  const slideComponents = [
    { title: "SES企業エンジニア向け：生成AI基礎から実務活用", component: <SlideIntro /> },
    { title: "1. AIと生成AIの基礎", component: <SlideAIBasics /> },
    { title: "2. 代表的な生成AIツール", component: <SlideAITools /> },
    { title: "3. 画像生成AIの概要", component: <SlideImageGeneration /> },
    { title: "4. 音楽生成ハンズオン", component: <SlideMusicGeneration /> },
    { title: "5. プログラム生成ハンズオン (Python)", component: <SlidePythonGeneration /> },
    { title: "6. プログラム学習ハンズオン (React)", component: <SlideReactLearning /> },
    { title: "7. まとめと参考リソース", component: <SlideSummary /> }
  ];
  
  // スライドを進める関数
  const nextSlide = () => {
    if (currentSlide < slideComponents.length - 1 && !isAnimating) {
      setDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  // スライドを戻す関数
  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  // キーボードナビゲーションの設定
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating]);

  // スライドのスタイルを動的に設定
  const slideStyle = {
    transform: isAnimating
      ? direction === 'next'
        ? 'translateX(-100px) scale(0.95)'
        : 'translateX(100px) scale(0.95)'
      : 'translateX(0) scale(1)',
    opacity: isAnimating ? 0.5 : 1,
    transition: 'all 0.5s ease'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex flex-col">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col flex-grow">
        {/* ヘッダー */}
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">{slideComponents[currentSlide].title}</h1>
          <div className="text-sm mt-1">株式会社BTM</div>
        </div>
        
        {/* メインコンテンツ - 高さ固定 */}
        <div className="p-6 overflow-y-auto flex-grow" style={{
          ...slideStyle,
          height: "calc(100vh - 200px)" // ヘッダーとフッターの高さを引いた値
        }}>
          {slideComponents[currentSlide].component}
        </div>
        
        {/* ナビゲーションコントロール - 固定位置 */}
        <div className="flex justify-between items-center p-4 border-t mt-auto">
          <button 
            onClick={prevSlide}
            className={`flex items-center px-4 py-2 rounded ${
              currentSlide > 0 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={currentSlide === 0}
          >
            <ArrowLeft className="mr-2" size={16} />
            前へ
          </button>
          
          <div className="text-gray-500">
            {currentSlide + 1} / {slideComponents.length}
          </div>
          
          <button 
            onClick={nextSlide}
            className={`flex items-center px-4 py-2 rounded ${
              currentSlide < slideComponents.length - 1 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={currentSlide === slideComponents.length - 1}
          >
            次へ
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;