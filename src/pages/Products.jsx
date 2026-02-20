import { ShoppingBag, ExternalLink } from 'lucide-react'

const t = {
    kr: {
        title: '더레드랩 스토어',
        subtitle: '도전을 위한 무기, 혹은 일상 속의 짜릿함. 더레드랩의 공식 상품을 만나보세요.',
        products: [
            {
                id: 1,
                name: '오리지널 지옥불 핫소스 (150ml)',
                desc: '일반 핫소스의 20배 매운맛. 타바스코 페퍼와 캐롤라이나 리퍼의 치명적인 만남. 피자나 타코에 단 한 방울만 떨어뜨려도 충분합니다.',
                price: '₩12,900',
                tag: 'BEST SELLER',
                image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 2,
                name: '매운맛 서바이벌 챌린지 팩 v1.0',
                desc: '인증 시크릿 코드가 동봉된 공식 챌린지 패키지. 궁극의 매운맛 감자칩 한 조각과 생존 기록용 스티커가 포함되어 있습니다.',
                price: '₩8,500',
                tag: 'CHALLENGE KIT',
                image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 3,
                name: '블랙 마그마 라면 (4개입)',
                desc: '검은색 국물 속에 숨겨진 캡사이신의 향연. 국물까지 다 마시는 순간, 당신은 이미 매운맛 중독자입니다.',
                price: '₩6,800',
                image: 'https://images.unsplash.com/photo-1599487405270-b07cd9e9ceeb?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 4,
                name: '더레드랩 공식 쿨링 밀크 파우더',
                desc: '도전 실패자를 위한 유일한 구원. 우유나 물에 파우더를 타서 마시면 혀와 식도의 열기를 빠르게 식혀줍니다. (바닐라 맛)',
                price: '₩4,500',
                image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400&h=400'
            }
        ],
        btnBuy: '구매하기'
    },
    en: {
        title: 'The Red Lab Store',
        subtitle: 'Weapons for the challenge, or a thrill for your daily life. Discover official merchandise.',
        products: [
            {
                id: 1,
                name: 'Original Hellfire Hot Sauce (150ml)',
                desc: '20x hotter than standard hot sauce. A deadly encounter between Tabasco peppers and Carolina Reaper. One drop is enough.',
                price: '$10.99',
                tag: 'BEST SELLER',
                image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 2,
                name: 'Spicy Survival Challenge Pack v1.0',
                desc: 'The official challenge package containing the secret verification code. Includes the ultimate single spicy chip and survivor stickers.',
                price: '$7.50',
                tag: 'CHALLENGE KIT',
                image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 3,
                name: 'Black Magma Ramen (4 Pack)',
                desc: 'A feast of capsaicin hidden in a dark black broth. The moment you drink the entire bowl, you are addicted.',
                price: '$6.00',
                image: 'https://images.unsplash.com/photo-1599487405270-b07cd9e9ceeb?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
                id: 4,
                name: 'Official Cooling Milk Powder',
                desc: 'The only salvation for those who tap out. Mix with water to quickly cool down your tongue and throat. (Vanilla flavor)',
                price: '$4.00',
                image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400&h=400'
            }
        ],
        btnBuy: 'Buy Now'
    }
}

export default function Products({ lang }) {
    const text = t[lang] || t.kr

    return (
        <div className="w-full max-w-6xl px-4 py-8 md:py-16 animate-in fade-in duration-500 pb-32">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 flex items-center justify-center gap-3">
                    <ShoppingBag className="w-10 h-10 text-spicy-red-light" />
                    {text.title}
                </h1>
                <p className="text-gray-400 text-lg">{text.subtitle}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {text.products.map(product => (
                    <div key={product.id} className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group flex flex-col h-full">
                        <div className="relative aspect-square overflow-hidden bg-gray-900">
                            {product.tag && (
                                <div className="absolute top-3 right-3 bg-spicy-red text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg tracking-widest uppercase">
                                    {product.tag}
                                </div>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold font-display leading-tight mb-2 group-hover:text-spicy-red-light transition-colors">{product.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {product.desc}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                <span className="text-2xl font-black font-display">{product.price}</span>
                                <button className="bg-white/10 hover:bg-spicy-red text-white py-2 px-4 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm">
                                    {text.btnBuy} <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
