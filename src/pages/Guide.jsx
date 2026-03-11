import { Flame, AlertTriangle, CheckCircle2, Gift, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const t = {
    kr: {
        title: '챌린지키트 활용방법',
        subtitle: '더레드랩 매운맛 챌린지를 200% 즐기는 완벽한 가이드',
        introText: '더 레드랩의 매운맛 챌린지 키트는 대한민국 맵부심의 자존심, \'청양의 고춧가루\'를 베이스로 블렌딩되었습니다. 흔한 인공의 맛이 아닌, 깔끔하게 치고 올라오는 \'진짜 매운맛\'을 당신이 원하는 모든 음식에 커스텀 해보세요.',
        levelsTitle: '[LV 1~5 단계별 설명]',
        levels: [
            { level: 'LV.1', name: '오리지널 청양', subtitle: 'K-스파이시의 자존심', desc: '모든 단계의 뼈대가 되는 청양고추 본연의 깔끔하고 깊은 매운맛' },
            { level: 'LV.2', name: '아시안 파이어', subtitle: '청양에 더해진 베트남의 불꽃', desc: '청양의 깊은 맛 뒤에 베트남 고추 특유의 날카로운 타격감이 치고 빠지는 단계' },
            { level: 'LV.3', name: '태양의 경고', subtitle: '청양과 하바네로의 뜨거운 만남', desc: '멕시코의 태양초 하바네로가 청양 베이스에 녹아들었습니다. 땀샘이 열리기 시작하는 매운맛' },
            { level: 'LV.4', name: '고스트 스나이퍼', subtitle: '청양과 부트졸로키아의 끔찍한 혼종', desc: '입안을 맴도는 청양의 맛을 느끼려는 찰나, 유령(Ghost Pepper)처럼 다가와 미각을 마비시키는 고통과 쾌감' },
            { level: 'LV.5', name: '사신의 카르마', subtitle: '청양과 캐롤라이나 리퍼, 리미트 해제', desc: '기네스북에 등재된 최악의 사신(Reaper)과 청양의 자비 없는 블렌딩' }
        ],
        sections: [
            {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                title: '도전 전 주의사항',
                content: '본 챌린지에 사용되는 제품은 스코빌 지수(SHU)가 매우 높은 고위험성 소스/스낵입니다. 임산부, 노약자, 위장 질환자, 매운맛에 교차 알레르기 반응이 있으신 분은 절대 취식을 금합니다. 도전 전 반드시 우유나 아이스크림 등 유제품을 미리 준비해 두는 것을 강력히 권장합니다.'
            },
            {
                icon: <Target className="w-6 h-6 text-spicy-red-light" />,
                title: '🚨 더 레드랩 미션',
                subtitle: '"세상에 없던 매운맛 꿀조합(또는 괴식)을 찾아 현상금을 획득하라!"',
                content: '고통스럽기만 한 1분 참기 챌린지는 끝났습니다.\n당신의 상상력과 맵부심을 결합해, 아무도 시도하지 않은 **\'미친 매운맛 조합\'**을 찾아내십시오.\n\n당신의 실험이 전 세계의 유행이 됩니다.\n\n[미션 수행 3단계]\n\n🎯 STEP 1. 타겟 포착 (Pick your Target)\n절대 안 어울릴 것 같은 \'신박한 음식\'부터 내가 제일 좋아하는 \'소울 푸드\'까지, 오늘의 실험 대상(음식)을 준비합니다.\n\n🔥 STEP 2. 리미트 해제 (Drop the Spice)\n오리지널 청양(LV.1)부터 사신의 카르마(LV.5) 중 도전할 레벨을 선택! 음식 위에 붉은 가루를 남김없이, 거침없이 투하합니다.\n\n📸 STEP 3. 실험 기록 및 현상금 청구 (Record & Claim)\n가루를 듬뿍 얹은 첫 입을 먹는 순간 터져 나오는 **당신의 날것 그대로의 \'찐 리액션\'**과 "이 조합 추천 vs 절대 비추천" 한 줄 평을 숏폼 영상으로 남겨주세요.\n필수 해시태그와 함께 업로드하면 미션 완료!\n\n필수 해시태그: #더레드랩실험실 #K매운맛헌터 #내돈내산괴식 @the_redlab_official'
            },
            {
                icon: <Gift className="w-6 h-6 text-purple-400" />,
                title: '헌터의 전리품 & 특별 보상',
                content: '🎁 헌터의 전리품 (기념 굿즈)\n동봉된 \'WANTED 프레임\'과 \'브랜드 스티커\'는 더 레드랩의 극한 챌린지에 도전할 자격을 갖춘 헌터들에게만 주어지는 명예로운 굿즈입니다.\n노트북, 폰케이스, 다이어리 등 원하는 곳에 붙여 당신의 맵부심을 쿨하게 과시하십시오.\n\n🏆 이달의 매드 사이언티스트 (Mad Scientist)\n매월 가장 엄청난 조회수를 기록하거나 기발한 꿀조합을 찾아낸 헌터를 선정하여, 공식 계정 명예의 전당 박제 및 막대한 **\'CY(현상금)\'**와 스페셜 리워드를 지급합니다!'
            },
            {
                icon: <CheckCircle2 className="w-6 h-6 text-[#00FF66]" />,
                title: '성공 인증 시크릿 코드',
                content: '동봉된 패키지 안쪽이나 바닥면을 확인하면 스크래치 카드 혹은 봉인된 스티커가 있습니다. 이를 벗겨내면 8~12자리의 [시크릿 시리얼 코드]가 나타납니다. 첫 화면(홈)으로 돌아가 해당 코드를 입력하고 본인의 지역/국가에 100CY를 기여하세요!'
            }
        ],
        tipsTitle: '🔥 생존자들의 비밀 꿀팁',
        tips: [
            '도전 30분 전 겔포스나 우유를 미리 마셔 위벽을 보호하세요.',
            '매운맛이 올라올 때는 침을 삼키지 말고 뱉어내는 것이 통증 완화에 도움이 될 수 있습니다.',
            '도전 실패 시 무리하지 말고 즉시 차가운 우유를 머금고 헹궈내십시오.'
        ]
    },
    en: {
        title: 'How to Use the Challenge Kit',
        subtitle: 'The complete guide to surviving The Red Lab Spicy Challenge',
        introText: 'The Red Lab Spicy Challenge Kit is blended with the pride of Korean spice, "Cheongyang Chili". Customize your favorite foods with the clean, authentic heat, not artificial flavors.',
        levelsTitle: '[LV 1~5 Heat Levels]',
        levels: [
            { level: 'LV.1', name: 'Original Cheongyang', subtitle: 'Pride of K-Spicy', desc: 'The base of all levels. Clean and deep original heat of Cheongyang pepper.' },
            { level: 'LV.2', name: 'Asian Fire', subtitle: 'Vietnam sparks on Cheongyang', desc: 'Sharp hitting heat of Vietnamese pepper striking after the deep Cheongyang flavor.' },
            { level: 'LV.3', name: 'Warning of the Sun', subtitle: 'Hot meeting of Cheongyang & Habanero', desc: 'Mexican Habanero melts into Cheongyang. The heat that opens your pores.' },
            { level: 'LV.4', name: 'Ghost Sniper', subtitle: 'Terrible hybrid of Cheongyang & Ghost Pepper', desc: 'Numbing pain and pleasure striking like a Ghost just as you taste Cheongyang.' },
            { level: 'LV.5', name: 'Karma of the Reaper', subtitle: 'Cheongyang & Carolina Reaper, Limit Released', desc: 'Merciless blend of Guinness record holding Reaper and Cheongyang.' }
        ],
        sections: [
            {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                title: 'Warnings Before the Challenge',
                content: 'The products used in this challenge have extremely high Scoville Heat Units (SHU). Pregnant women, the elderly, individuals with gastrointestinal issues, or those with allergies to spicy ingredients must absolutely NOT consume these products. We strongly advise preparing dairy products like milk or ice cream before starting.'
            },
            {
                icon: <Target className="w-6 h-6 text-spicy-red-light" />,
                title: '🚨 The Red Lab Mission',
                subtitle: '"Find the unprecedented crazy spicy combo and claim the bounty!"',
                content: 'The painful 1-minute endurance is over.\nCombine your imagination and spice pride to find a **\'Crazy Spice Combo\'** no one has tried.\nYour experiment becomes a global trend.\n\n[3 Steps to Complete Mission]\n\n🎯 STEP 1. Pick your Target\nPrepare your target food, from weird combinations to your soul food.\n\n🔥 STEP 2. Drop the Spice\nChoose your level from Original(LV.1) to Karma(LV.5)! Drop the red powder onto your food without hesitation.\n\n📸 STEP 3. Record & Claim\nRecord a short-form video of your **raw reaction taking the first bite**, and leave a one-line review: "Recommend vs Not Recommend".\nUpload with required hashtags to complete!\n\nHashtags: #TheRedLabLab #KSpicyHunter #MyMoneyMyFood @the_redlab_official'
            },
            {
                icon: <Gift className="w-6 h-6 text-purple-400" />,
                title: 'Hunter\'s Loot & Special Rewards',
                content: '🎁 Hunter\'s Loot (Merch)\nThe enclosed \'WANTED Frame\' and \'Brand Sticker\' are honorable goods given only to qualified hunters.\nShow off your spice pride by sticking them on your laptop, phone case, etc.\n\n🏆 Mad Scientist of the Month\nWe select the hunter with the most views or the craziest combo each month to be immortalized in our Hall of Fame and reward them with massive **\'CY (Bounty)\'** and special prizes!'
            },
            {
                icon: <CheckCircle2 className="w-6 h-6 text-[#00FF66]" />,
                title: 'Success Secret Code',
                content: 'Check the inside or bottom of the package for a scratch card or sealed sticker. Peel it off to reveal an 8~12 character [Secret Serial Code]. Return to the Home page, enter this code, and contribute 100CY to your region!'
            }
        ],
        tipsTitle: '🔥 Secrets from Survivors',
        tips: [
            'Drink milk or take a stomach protector 30 minutes before the challenge to coat your stomach lining.',
            'When the heat kicks in, spitting out saliva instead of swallowing can help reduce throat pain.',
            'If you fail, do not force it. Immediately hold cold milk in your mouth and rinse.'
        ]
    }
}

// helper to format bold texts surrounded by **
const renderFormattedText = (text) => {
    return text.split('\n').map((line, i) => {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
            <span key={i}>
                {parts.map((part, j) => (j % 2 === 1 ? <strong key={`strong-${i}-${j}`} className="text-spicy-red-light font-black">{part}</strong> : part))}
                <br />
            </span>
        );
    });
};

export default function Guide({ lang }) {
    const text = t[lang] || t.kr

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    }

    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            variants={container}
            className="w-full max-w-4xl px-4 py-8 md:py-16 pb-32"
        >
            <motion.header variants={item} className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4">{text.title}</h1>
                <p className="text-gray-400 text-lg mb-8">{text.subtitle}</p>
                <div className="max-w-3xl mx-auto bg-spicy-red/5 border border-spicy-red/20 rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(230,0,0,0.1)] relative overflow-hidden group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-spicy-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur"></div>
                    <p className="text-gray-200 leading-relaxed font-medium text-lg relative z-10">
                        {text.introText}
                    </p>
                </div>
            </motion.header>

            <motion.section variants={item} className="mb-14">
                <h2 className="text-2xl font-bold font-display mb-6 text-center text-white flex items-center justify-center gap-2">
                    <Flame className="w-6 h-6 text-spicy-red" />
                    {text.levelsTitle}
                    <Flame className="w-6 h-6 text-spicy-red" />
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {text.levels.map((lvl, index) => (
                        <div key={index} className="bg-black/60 border border-white/5 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-spicy-red/30 transition-all duration-300 flex flex-col md:flex-row gap-5 items-start group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-spicy-red/0 via-transparent to-transparent group-hover:from-spicy-red/10 transition-all duration-500 pointer-events-none"></div>
                            <div className="shrink-0 w-16 h-16 rounded-full bg-spicy-black border border-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:border-spicy-red group-hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] transition-all duration-300 z-10">
                                <span className="font-black font-display text-white">{lvl.level}</span>
                            </div>
                            <div className="z-10 flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-xl font-bold font-display text-white">{lvl.name}</h3>
                                    <span className="text-spicy-red-light text-xs font-bold tracking-wide bg-spicy-red/10 px-2 py-0.5 rounded-md hidden md:inline-block">{lvl.subtitle}</span>
                                </div>
                                <span className="text-spicy-red-light text-xs font-bold tracking-wide bg-spicy-red/10 px-2 py-0.5 rounded-md inline-block md:hidden mb-2">{lvl.subtitle}</span>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{lvl.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <div className="space-y-8">
                {text.sections.map((sec, i) => (
                    <motion.section key={i} variants={item} className="bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-5">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shrink-0 mt-1">
                                {sec.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-display">{sec.title}</h2>
                                {sec.subtitle && <p className="text-spicy-red-light text-sm font-bold mt-1.5">{sec.subtitle}</p>}
                            </div>
                        </div>
                        <div className="text-gray-300 leading-relaxed text-lg">
                            {renderFormattedText(sec.content)}
                        </div>
                    </motion.section>
                ))}
            </div>

            <motion.div variants={item} className="mt-12 bg-spicy-red/10 border border-spicy-red/20 rounded-3xl p-6 md:p-8 group hover:bg-spicy-red/20 transition-colors duration-500">
                <h3 className="text-xl font-bold font-display text-spicy-red-light mb-4 flex items-center gap-2">
                    {text.tipsTitle}
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                    {text.tips.map((tip, i) => (
                        <li key={i} className="leading-relaxed">{tip}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    )
}
