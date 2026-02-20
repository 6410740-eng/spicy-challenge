import { Trophy } from 'lucide-react'

const t = {
    kr: {
        title: '글로벌 스파이시 Top 10',
        subtitle: '스코빌 기네스북 기준 전 세계에서 가장 고통스러운 매운맛 음식과 고추',
        intro: '인간의 한계를 시험하는 전 세계의 극강의 매운맛. 고추의 매운맛을 측정하는 단위인 스코빌 지수(Scoville Heat Units, SHU)를 기준으로 역사상 가장 치명적이고 고통스러운 매운맛 주인공들을 살펴봅니다.',
        items: [
            {
                rank: 1,
                name: '페퍼 X (Pepper X)',
                shu: '2,693,000 SHU',
                desc: '2023년 기네스북에 새롭게 등재된 세계에서 가장 매운 고추입니다. 캐롤라이나 리퍼를 만든 에드 커리(Ed Currie)가 다시 한번 한계를 뛰어넘어 교배해 낸 악마의 결정체입니다. 청양고추의 약 260배에 달하는 무자비한 고통을 선사합니다.'
            },
            {
                rank: 2,
                name: '캐롤라이나 리퍼 (Carolina Reaper)',
                shu: '1,641,183 SHU',
                desc: '장기간 왕좌를 지켰던 매운 고추의 대명사. 꼬리가 달린 붉은 악마 같은 외형미를 자랑하며, 입에 닿는 순간 혀를 면도칼로 긋는 듯한 통증을 줍니다.'
            },
            {
                rank: 3,
                name: '코모도 드래곤 페퍼 (Komodo Dragon Pepper)',
                shu: '1,400,000 SHU',
                desc: '영국에서 개발된 이 고추는 처음 입에 넣을 땐 사과처럼 달콤한 착각을 주지만, 10초 뒤 뱃속에서부터 화산이 폭발하는 듯한 지연형 통증이 특징입니다.'
            },
            {
                rank: 4,
                name: '나가 바이퍼 (Naga Viper)',
                shu: '1,349,000 SHU',
                desc: '세 가지 강력한 고추(부트 졸로키아, 나가 모리치, 트리니다드 스콜피온)를 이종교배하여 만든 영국의 고추. 짧지만 강력한 임팩트로 기네스북에 잠시 올랐던 전적이 있습니다.'
            },
            {
                rank: 5,
                name: '트리니다드 모루가 스콜피온 (Trinidad Moruga Scorpion)',
                shu: '1,200,000 SHU',
                desc: '단 한 입 베어 무는 순간 눈물과 콧물을 주체할 수 없게 만드는 카리브해의 재앙. 위점막이 타들어가는 듯한 고통이 수 시간 동안 멈추지 않습니다.'
            },
            {
                rank: 6,
                name: '부트 졸로키아 / 유령 고추 (Ghost Pepper)',
                shu: '1,041,427 SHU',
                desc: '인도 북동부 지역에서 자라며 한때 세상을 경악하게 만든 유령 고추. 군대에서 비살상 연막탄이나 야생 코끼리 퇴치용으로 사용되었을 만큼 위력적입니다.'
            },
            {
                rank: 7,
                name: '세븐 팟 더글라 (7 Pot Douglah)',
                shu: '923,889 SHU',
                desc: '일반적인 붉은색 고추들과 달리 짙은 갈색(초콜릿색)을 띠고 있어 방심을 유발하지만, 고추 하나로 육수 7냄비(7 Pot)를 맵게 만들 수 있다는 끔찍한 뜻을 가졌습니다.'
            },
            {
                rank: 8,
                name: '매운맛 챌린지 칩 (One Chip Challenge)',
                shu: '약 1,100,000 SHU',
                desc: '고추의 원물이 아닌 가공식품 분야의 압도적인 1위. 캐롤라이나 리퍼 분말을 잔뜩 묻힌 단 한 조각의 칩을 먹고 버티는 챌린지는 수많은 사람을 응급실로 보냈습니다.'
            },
            {
                rank: 9,
                name: '레드 사비나 하바네로 (Red Savina Habanero)',
                shu: '500,000 SHU',
                desc: '1990년대를 지배했던 전설적인 매운 고추. 요리에 강렬한 과일 향과 함께 눈물이 쏙 빠지는 매운맛을 가미하는 데 최고의 재료로 꼽힙니다.'
            },
            {
                rank: 10,
                name: '마라 카레 / 데스 카레 (Death Curry)',
                shu: '추정 400,000 SHU',
                desc: '인도나 일본 일부 식당에서 서약서를 쓰고 먹어야 하는 극한의 매운 커리 메뉴. 수많은 향신료와 부트 졸로키아 추출물이 배합되어 숟가락을 드는 순간 후회하게 됩니다.'
            }
        ]
    },
    en: {
        title: 'Global Spicy Top 10',
        subtitle: 'The most agonizingly spicy peppers and foods on Earth based on Scoville Heat Units.',
        intro: 'Testing the limits of human endurance. Let’s look at the absolute most lethal and painful heat sources in history, measured by the Scoville Heat Units (SHU).',
        items: [
            {
                rank: 1, name: 'Pepper X', shu: '2,693,000 SHU',
                desc: 'The newest ruler of the Guinness World Records. Created by Ed Currie, the mastermind behind the Carolina Reaper. It delivers a ruthless wall of pain approximately 260 times hotter than a Jalapeño.'
            },
            {
                rank: 2, name: 'Carolina Reaper', shu: '1,641,183 SHU',
                desc: 'The iconic symbol of spicy. Sporting a devilish tail, the moment it touches your tongue, it feels like it is being sliced by razors.'
            },
            {
                rank: 3, name: 'Komodo Dragon Pepper', shu: '1,400,000 SHU',
                desc: 'Bred in the UK, it tricks you with a sweet, fruit-like flavor initially, only to erupt into a delayed volcanic detonation in your stomach 10 seconds later.'
            },
            {
                rank: 4, name: 'Naga Viper', shu: '1,349,000 SHU',
                desc: 'An unholy trilateral crossbreed of the Ghost Pepper, Naga Morich, and Trinidad Scorpion. It held the world record briefly but left a permanent mark on spicy history.'
            },
            {
                rank: 5, name: 'Trinidad Moruga Scorpion', shu: '1,200,000 SHU',
                desc: 'A Caribbean calamity. A single bite triggers unstoppable tears and mucus, paired with a burning sensation in the stomach lining that lasts for hours.'
            },
            {
                rank: 6, name: 'Bhut Jolokia (Ghost Pepper)', shu: '1,041,427 SHU',
                desc: 'The original monster from Northeast India. It was so potent that the Indian military utilized it to create non-lethal smoke grenades and wild elephant repellents.'
            },
            {
                rank: 7, name: '7 Pot Douglah', shu: '923,889 SHU',
                desc: 'Unlike typical red superhots, this one is an unassuming chocolate brown. But beware—its name signifies that a single pepper can spice up 7 entire pots of stew.'
            },
            {
                rank: 8, name: 'One Chip Challenge', shu: '~ 1,100,000 SHU',
                desc: 'The undisputed king of processed spicy foods. Coated entirely in Carolina Reaper dust, surviving just one single tortilla chip has sent many to the ER.'
            },
            {
                rank: 9, name: 'Red Savina Habanero', shu: '500,000 SHU',
                desc: 'The legendary pepper that dominated the 1990s. Renowned for adding an intensely fruity aroma paired with tear-inducing heat to culinary dishes.'
            },
            {
                rank: 10, name: 'Death Curry', shu: 'Est. 400,000 SHU',
                desc: 'An extreme dish served in select restaurants worldwide requiring a liability waiver to order. A regret-inducing blend of intense spices and Ghost Pepper extracts.'
            }
        ]
    }
}

export default function Top10({ lang }) {
    const text = t[lang] || t.kr

    return (
        <div className="w-full max-w-4xl px-4 py-8 md:py-16 animate-in fade-in duration-500 pb-32">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 flex items-center justify-center gap-4">
                    <Trophy className="w-10 h-10 text-[#FFD700]" />
                    {text.title}
                </h1>
                <p className="text-spicy-red-light text-lg font-bold uppercase tracking-widest mb-6">{text.subtitle}</p>
                <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                    {text.intro}
                </p>
            </header>

            <div className="space-y-6">
                {text.items.map((item) => (
                    <article key={item.rank} className="bg-black/30 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-spicy-red-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-lg text-3xl font-black font-display text-white">
                            {item.rank}
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                                <h2 className="text-2xl font-bold font-display text-white group-hover:text-spicy-red-light transition-colors">{item.name}</h2>
                                <span className="inline-block px-3 py-1 bg-spicy-red/10 border border-spicy-red/20 rounded-full text-spicy-red-light text-sm font-mono font-bold tracking-widest uppercase self-start md:self-auto">
                                    {item.shu}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {item.desc}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
