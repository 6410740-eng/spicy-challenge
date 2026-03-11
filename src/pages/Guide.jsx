import { Flame, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const t = {
    kr: {
        title: '챌린지키트 활용방법',
        subtitle: '더레드랩 매운맛 챌린지를 200% 즐기는 완벽한 가이드',
        sections: [
            {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                title: '도전 전 주의사항',
                content: '본 챌린지에 사용되는 제품은 스코빌 지수(SHU)가 매우 높은 고위험성 소스/스낵입니다. 임산부, 노약자, 위장 질환자, 매운맛에 교차 알레르기 반응이 있으신 분은 절대 취식을 금합니다. 도전 전 반드시 우유나 아이스크림 등 유제품을 미리 준비해 두는 것을 강력히 권장합니다.'
            },
            {
                icon: <Flame className="w-6 h-6 text-spicy-red-light" />,
                title: '도전 진행 방식',
                content: '1. 준비된 챌린지 식품을 개봉합니다.\n2. 타이머를 5분으로 설정합니다.\n3. 물이나 유제품의 도움 없이 주어진 식품을 완전히 섭취합니다.\n4. 섭취 후 5분 동안 어떠한 음식물도 섭취하지 않고 견뎌냅니다.'
            },
            {
                icon: <CheckCircle2 className="w-6 h-6 text-[#00FF66]" />,
                title: '성공 인증 시크릿 코드',
                content: '5분의 버티기 시간이 종료되면 도전에 성공하신 겁니다! 동봉된 패키지 안쪽이나 바닥면을 확인하면 스크래치 카드 혹은 봉인된 스티커가 있습니다. 이를 벗겨내면 8~12자리의 [시크릿 시리얼 코드]가 나타납니다. 첫 화면(홈)으로 돌아가 해당 코드를 입력하고 본인의 지역/국가에 100CY를 기여하세요!'
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
        sections: [
            {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                title: 'Warnings Before the Challenge',
                content: 'The products used in this challenge have extremely high Scoville Heat Units (SHU). Pregnant women, the elderly, individuals with gastrointestinal issues, or those with allergies to spicy ingredients must absolutely NOT consume these products. We strongly advise preparing dairy products like milk or ice cream before starting.'
            },
            {
                icon: <Flame className="w-6 h-6 text-spicy-red-light" />,
                title: 'Challenge Rules',
                content: '1. Open the prepared challenge food.\n2. Set a timer for 5 minutes.\n3. Consume the entire product without the help of water or dairy.\n4. Endure extreme heat for 5 full minutes AFTER finishing without consuming any other food or drink.'
            },
            {
                icon: <CheckCircle2 className="w-6 h-6 text-[#00FF66]" />,
                title: 'Success Secret Code',
                content: 'If you endure the 5-minute afterburn, you have succeeded! Check the inside or bottom of the package for a scratch card or sealed sticker. Peel it off to reveal an 8~12 character [Secret Serial Code]. Return to the Home page, enter this code, and contribute 100 points to your region/country!'
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

export default function Guide({ lang }) {
    const text = t[lang] || t.kr

    // Framer Motion Variants
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
                <p className="text-gray-400 text-lg">{text.subtitle}</p>
            </motion.header>

            <div className="space-y-8">
                {text.sections.map((sec, i) => (
                    <motion.section key={i} variants={item} className="bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                                {sec.icon}
                            </div>
                            <h2 className="text-2xl font-bold font-display">{sec.title}</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                            {sec.content}
                        </p>
                    </motion.section>
                ))}
            </div>

            <motion.div variants={item} className="mt-12 bg-spicy-red/10 border border-spicy-red/20 rounded-3xl p-6 md:p-8 group hover:bg-spicy-red/20 transition-colors duration-500">
                <h3 className="text-xl font-bold font-display text-spicy-red-light mb-4">{text.tipsTitle}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {text.tips.map((tip, i) => (
                        <li key={i} className="leading-relaxed">{tip}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    )
}
