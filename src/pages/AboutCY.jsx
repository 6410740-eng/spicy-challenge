import { Flame, MapPin, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const t = {
    kr: {
        title: '청양(CY)이란?',
        subtitle: '대한민국 매운맛의 중심, 청양(Cheongyang)을 소개합니다.',
        sections: [
            {
                icon: <MapPin className="w-6 h-6 text-[#00FF66]" />,
                title: '매운맛의 성지, 청양',
                content: '청양(Cheongyang)은 대한민국 충청남도의 지역으로, 한국의 대표적인 매운 고추인 \'청양고추\'의 본고장입니다. 맑은 물과 깨끗한 자연환경에서 자란 청양고추는 깔끔하고 강렬한 매운맛으로 유명합니다.'
            },
            {
                icon: <Target className="w-6 h-6 text-[#00D4FF]" />,
                title: 'CY 단위의 탄생',
                content: '이 사이트에서 사용되는 점수 단위인 \'CY\'는 Cheongyang의 약자입니다. 글로벌 매운맛 챌린지를 통해 한국 청양의 매운맛을 전 세계에 알리고자 이 특별한 단위를 만들게 되었습니다.'
            },
            {
                icon: <Flame className="w-6 h-6 text-spicy-red-light" />,
                title: '여러분의 100CY',
                content: '챌린지에 성공하여 획득하는 100CY는 단순히 점수를 넘어, 매운맛을 이겨낸 여러분의 열정과 한계를 극복한 증표입니다. 글로벌 랭킹에 여러분의 지역을 올리고 청양의 매운맛과 함께 극한의 도전을 이어가세요!'
            }
        ]
    },
    en: {
        title: 'What is CY (Cheongyang)?',
        subtitle: 'Introducing Cheongyang, the heart of Korea\'s spicy flavor.',
        sections: [
            {
                icon: <MapPin className="w-6 h-6 text-[#00FF66]" />,
                title: 'The Holy Land of Spice, Cheongyang',
                content: 'Cheongyang is a region in Chungcheongnam-do, South Korea, famous as the home of \'Cheongyang Chili\', the representative spicy pepper of Korea. Grown in an pristine natural environment, it is renowned for its clean and intense heat.'
            },
            {
                icon: <Target className="w-6 h-6 text-[#00D4FF]" />,
                title: 'The Birth of the CY Unit',
                content: 'The score unit \'CY\' used on this site stands for Cheongyang. We created this special unit to introduce the intense spicy flavor of Cheongyang to the world through our global spice challenge.'
            },
            {
                icon: <Flame className="w-6 h-6 text-spicy-red-light" />,
                title: 'Your 100CY',
                content: 'Earning 100CY is more than just points. It is a testament to your passion and your limits pushed. Climb the global leaderboard and embrace the ultimate challenge with the fire of Cheongyang!'
            }
        ]
    }
}

export default function AboutCY({ lang }) {
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
                <div className="inline-block px-4 py-1.5 rounded-full border border-spicy-red/30 bg-spicy-red/10 text-spicy-red-light text-xs font-bold tracking-widest mb-6 z-10 backdrop-blur-sm uppercase">
                    CHILI PEPPER ORIGIN
                </div>
                <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mb-4 text-gradient">{text.title}</h1>
                <p className="text-gray-400 text-lg md:text-xl">{text.subtitle}</p>
            </motion.header>

            <div className="space-y-6">
                {text.sections.map((sec, i) => (
                    <motion.section key={i} variants={item} className="bg-black/60 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                                {sec.icon}
                            </div>
                            <h2 className="text-2xl font-bold font-display tracking-wide">{sec.title}</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                            {sec.content}
                        </p>
                    </motion.section>
                ))}
            </div>
            
            <motion.div variants={item} className="mt-16 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-spicy-red to-[#FF3333] rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(230,0,0,0.4)] relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <span className="text-white font-black text-3xl font-display">CY</span>
                    <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mt-[-4px]">Cheongyang</span>
                </div>
            </motion.div>
        </motion.div>
    )
}
