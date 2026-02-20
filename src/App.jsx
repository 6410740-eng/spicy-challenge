import { useState } from 'react'
import confetti from 'canvas-confetti'

// --- Mock Data ---
const REGIONS_KR = [
  { id: 'seoul', name: '서울 (Seoul)', score: 6200 },
  { id: 'incheon', name: '인천 (Incheon)', score: 4500 },
  { id: 'gyeonggi', name: '경기 (Gyeonggi)', score: 8100 },
  { id: 'gangwon', name: '강원 (Gangwon)', score: 3200 },
  { id: 'gyeongbuk', name: '경북 (Gyeongbuk)', score: 4100 },
  { id: 'gyeongnam', name: '경남 (Gyeongnam)', score: 4800 },
  { id: 'chungbuk', name: '충북 (Chungbuk)', score: 2900 },
  { id: 'chungnam', name: '충남 (Chungnam)', score: 3400 },
  { id: 'jeonbuk', name: '전북 (Jeonbuk)', score: 2700 },
  { id: 'jeonnam', name: '전남 (Jeonnam)', score: 3100 },
  { id: 'jeju', name: '제주 (Jeju)', score: 2500 }
];

const GLOBAL_COUNTRIES = [
  { id: 'us', name: '미국 (United States)', score: 12400 },
  { id: 'cn', name: '중국 (China)', score: 11200 },
  { id: 'jp', name: '일본 (Japan)', score: 8900 },
  { id: 'sea', name: '동남아 (Southeast Asia)', score: 7200 },
  { id: 'eu', name: '유럽 (Europe)', score: 9500 }
];

const INITAL_DATA = {
  korea: [...REGIONS_KR].sort((a, b) => b.score - a.score),
  global: [...GLOBAL_COUNTRIES].sort((a, b) => b.score - a.score)
}

const POINTS_PER_CHALLENGE = 100;

// --- Translations ---
const t = {
  kr: {
    eventTag: '글로벌 서바이벌 이벤트',
    titleMain: '매운맛',
    titleSub: '챌린지',
    desc: '당신의 한계를 시험하세요. 박스 안의 시크릿 코드를 인증하고, 당신의 지역에 점수를 더해 글로벌 랭킹을 올리세요.',
    verifyTitle: '챌린지 인증하기',
    labelCountry: '국가 카테고리',
    optKorea: '대한민국 (Korea) - 지역 선택',
    optGlobal: '기타 국가 (Global)',
    labelRegion: '지역/국가 선택',
    labelCode: '시크릿 시리얼 코드',
    labelCodeHelp: '(상자 내부 표기)',
    placeholderCode: 'XXXX-XXXX',
    errorInvalid: '유효한 8자리 이상의 코드를 입력해주세요. (예: A8F9-2K3P)',
    errorUsed: '이미 사용된 코드입니다.',
    btnSubmit: '인증 및 100점 획득',
    leaderboardTitle: '실시간 리더보드',
    tabKorea: '대한민국 지역별',
    tabGlobal: '글로벌 국가별',
    modalTitle: '도전 성공!',
    modalDesc1: '매운맛 챌린지 성공을 축하합니다.',
    modalDesc2: '에 100점이 추가되었습니다!',
    modalCodeLabel: '인증된 코드',
    modalBtn: '닫기 및 랭킹 확인',
    footer: '매운맛 챌린지 글로벌. Safe & Secure.'
  },
  en: {
    eventTag: 'GLOBAL SURVIVAL EVENT',
    titleMain: 'SPICY',
    titleSub: 'CHALLENGE',
    desc: 'The ultimate heat test. Verify your success code inside the box to claim points for your region and climb the global ladder.',
    verifyTitle: 'Verify To Rank Up',
    labelCountry: 'Country Category',
    optKorea: 'South Korea (By Region)',
    optGlobal: 'Global (Other Countries)',
    labelRegion: 'Select Region / Country',
    labelCode: 'Secret Serial Code',
    labelCodeHelp: '(inside the box)',
    placeholderCode: 'XXXX-XXXX',
    errorInvalid: 'Please enter a valid 8+ char code (e.g. A8F9-2K3P)',
    errorUsed: 'This code has already been used.',
    btnSubmit: 'SUBMIT & CLAIM 100 PTS',
    leaderboardTitle: 'LIVE LEADERBOARD',
    tabKorea: 'Korea Regional',
    tabGlobal: 'Global Standings',
    modalTitle: 'SURVIVED!',
    modalDesc1: 'You\'ve proven your heat tolerance.',
    modalDesc2: 'received +100 points!',
    modalCodeLabel: 'Verified Code',
    modalBtn: 'CLOSE & VIEW RANKS',
    footer: 'Spicy Challenge Global. Safe & Secure.'
  }
}

function App() {
  const [lang, setLang] = useState('kr') // default Korean
  const [activeTab, setActiveTab] = useState('korea') // 'korea' or 'global'
  const [leaderboard, setLeaderboard] = useState(INITAL_DATA)

  // Form State
  // category: 'korea' | 'global'
  const [formData, setFormData] = useState({ category: 'korea', targetId: 'seoul', serial: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successData, setSuccessData] = useState(null)

  const text = t[lang];
  const maxScore = Math.max(...leaderboard[activeTab].map(item => item.score)) || 100;

  // Sync targetId when category changes
  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setFormData({
      ...formData,
      category: newCat,
      targetId: newCat === 'korea' ? 'seoul' : 'us'
    });
    setErrorMsg('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.serial || formData.serial.length < 8) {
      setErrorMsg(text.errorInvalid)
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')

    setTimeout(() => {
      if (formData.serial.toUpperCase() === 'USED-CODE') {
        setErrorMsg(text.errorUsed)
        setIsSubmitting(false)
        return
      }

      // Find the name of the selected region/country
      const listToSearch = formData.category === 'korea' ? leaderboard.korea : leaderboard.global;
      const targetObj = listToSearch.find(item => item.id === formData.targetId);
      const targetName = targetObj ? targetObj.name : 'Unknown';

      // Update scores
      setLeaderboard(prev => {
        const newBoard = { ...prev };
        const items = [...newBoard[formData.category]];
        const idx = items.findIndex(item => item.id === formData.targetId);
        if (idx !== -1) {
          items[idx].score += POINTS_PER_CHALLENGE;
        }
        items.sort((a, b) => b.score - a.score);
        newBoard[formData.category] = items;
        return newBoard;
      });

      triggerConfetti();
      setIsSubmitting(false);

      setSuccessData({
        points: POINTS_PER_CHALLENGE,
        targetName: targetName,
        serial: formData.serial.toUpperCase()
      });

      setFormData(prev => ({ ...prev, serial: '' }))
    }, 1200)
  }

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#E60000', '#FF3333', '#ffffff', '#000000'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#E60000', '#FF3333', '#ffffff', '#000000'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }

  return (
    <div className={`min-h-screen bg-spicy-black text-white selection:bg-spicy-red selection:text-white flex flex-col items-center overflow-x-hidden pb-20 ${lang === 'kr' ? 'break-keep' : ''}`}>

      {/* Language Toggle Fixed Top Right */}
      <div className="absolute top-6 right-6 z-50 flex bg-black/40 border border-white/10 rounded-full p-1 backdrop-blur-md">
        <button
          onClick={() => setLang('kr')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'kr' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
        >
          KR
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
        >
          EN
        </button>
      </div>

      {/* Header Section */}
      <header className="w-full flex flex-col items-center justify-center pt-24 pb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-spicy-red/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="inline-block px-4 py-1.5 rounded-full border border-spicy-red/30 bg-spicy-red/10 text-spicy-red-light text-xs font-bold tracking-widest mb-6 z-10 backdrop-blur-sm uppercase">
          {text.eventTag}
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-center z-10 font-display">
          {text.titleMain} <span className="text-gradient">{text.titleSub}</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-xl px-4 z-10 font-medium leading-relaxed">
          {text.desc}
        </p>
      </header>

      <main className="w-full max-w-4xl px-4 flex flex-col items-center z-10">

        {/* Authentication Form */}
        <section className="w-full max-w-md bg-spicy-black-light/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl mb-24 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-spicy-red-light/5 via-transparent to-transparent pointer-events-none"></div>

          <h2 className="text-2xl font-bold mb-8 font-display text-center">{text.verifyTitle}</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">

            <div className="flex flex-col gap-4">
              {/* Category Dropdown */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                  {text.labelCountry}
                </label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-spicy-red-light transition-colors cursor-pointer"
                  >
                    <option value="korea">{text.optKorea}</option>
                    <option value="global">{text.optGlobal}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>

              {/* Specific Region Dropdown */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                  {text.labelRegion}
                </label>
                <div className="relative">
                  <select
                    name="targetId"
                    value={formData.targetId}
                    onChange={handleInputChange}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-spicy-red-light transition-colors cursor-pointer"
                  >
                    {formData.category === 'korea'
                      ? REGIONS_KR.map(r => <option key={r.id} value={r.id}>{r.name}</option>)
                      : GLOBAL_COUNTRIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                    }
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-xs uppercase tracking-wider text-spicy-red-light mb-2 font-semibold flex items-center gap-2">
                {text.labelCode} <span className="text-gray-500 font-normal tracking-normal">{text.labelCodeHelp}</span>
              </label>
              <input
                type="text"
                name="serial"
                value={formData.serial}
                onChange={handleInputChange}
                placeholder={text.placeholderCode}
                maxLength={12}
                className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-4 text-white text-lg font-mono tracking-[0.2em] focus:outline-none focus:border-spicy-red transition-all placeholder:text-gray-700 uppercase"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="text-spicy-red-light text-sm font-medium p-3 bg-spicy-red/10 rounded-lg border border-spicy-red/20 text-center animate-pulse">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full bg-gradient-to-r ${isSubmitting ? 'from-gray-700 to-gray-800 delay-0' : 'from-spicy-red to-spicy-red-dark hover:from-spicy-red-light hover:to-spicy-red shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_35px_rgba(230,0,0,0.5)]'} text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] duration-300 flex justify-center items-center`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                text.btnSubmit
              )}
            </button>
          </form>
        </section>

        {/* Leaderboard Section */}
        <section className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black font-display tracking-tight uppercase">{text.leaderboardTitle}</h2>
            <div className="flex bg-black/50 p-1.5 rounded-2xl border border-white/5">
              {[
                { id: 'korea', label: text.tabKorea },
                { id: 'global', label: text.tabGlobal }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-spicy-red shadow-[0_0_15px_rgba(230,0,0,0.4)] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 relative min-h-[400px]">
            {leaderboard[activeTab].map((item, i) => {
              // Calculate width percentage relative to highest score
              const progressPercent = Math.max(8, (item.score / maxScore) * 100);

              return (
                <div
                  key={item.id}
                  className="group relative bg-black/40 border border-white/5 rounded-2xl p-5 flex items-center justify-between overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/10 hover:-translate-y-0.5"
                >
                  {/* Progress Bar Background */}
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-spicy-red/10 to-spicy-red/5 transition-all duration-1000 ease-out group-hover:from-spicy-red/20"
                    style={{ width: `${progressPercent}%` }}
                  ></div>

                  <div className="relative z-10 flex items-center gap-6 w-full max-w-[60%]">
                    <div className="text-2xl font-black font-display w-8 text-right opacity-80">
                      {i === 0 ? <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">1</span> :
                        i === 1 ? <span className="text-[#C0C0C0]">2</span> :
                          i === 2 ? <span className="text-[#CD7F32]">3</span> :
                            <span className="text-gray-600">{i + 1}</span>}
                    </div>
                    <div className="font-bold text-lg md:text-xl truncate text-gray-100 group-hover:text-white transition-colors">
                      {/* Only display the language specific part of the name if possible, else full name */}
                      {lang === 'kr' ? item.name.split(' (')[0] : (item.name.split('(')[1]?.replace(')', '') || item.name.split(' (')[0])}
                    </div>
                  </div>

                  <div className="relative z-10 text-2xl font-black tracking-tight font-display flex items-baseline gap-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 group-hover:from-spicy-red-light group-hover:to-white transition-all duration-300">
                      {item.score.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-gray-500">PTS</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

      </main>

      {/* Success Modal Overlay */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-300">
          <div className="bg-spicy-black border border-spicy-red/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(230,0,0,0.2)] animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-spicy-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔥</span>
            </div>
            <h3 className="text-3xl font-black font-display mb-2 text-gradient">{text.modalTitle}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {text.modalDesc1} <strong className="text-spicy-red-light">{lang === 'kr' ? successData.targetName.split(' (')[0] : (successData.targetName.split('(')[1]?.replace(')', '') || successData.targetName)}</strong>{text.modalDesc2}
            </p>
            <div className="bg-black/50 border border-white/5 rounded-xl p-4 mb-8">
              <span className="text-xs uppercase text-gray-500 font-bold tracking-widest block mb-1">{text.modalCodeLabel}</span>
              <span className="font-mono text-xl tracking-widest text-[#00FF66]">{successData.serial}</span>
            </div>
            <button
              onClick={() => setSuccessData(null)}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
            >
              {text.modalBtn}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center py-8 text-gray-600 border-t border-white/5 mt-auto text-xs font-semibold tracking-widest uppercase">
        &copy; {new Date().getFullYear()} {text.footer}
      </footer>
    </div>
  )
}

export default App
