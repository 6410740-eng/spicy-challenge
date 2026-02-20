import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Flame, Star, ShoppingBag, Trophy, Info, Menu, X } from 'lucide-react'

// Page Components
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Guide from './pages/Guide'
import Products from './pages/Products'
import Top10 from './pages/Top10'

// Translations for Layout Elements
const t = {
    kr: {
        navHome: '홈',
        navReviews: '후기 게시판',
        navGuide: '활용방법',
        navProducts: '더레드랩 상품',
        navTop10: '매운맛 Top 10',
        footer: '매운맛 챌린지 글로벌. Safe & Secure.'
    },
    en: {
        navHome: 'Home',
        navReviews: 'Reviews',
        navGuide: 'Guide',
        navProducts: 'Products',
        navTop10: 'Top 10 Spicy',
        footer: 'Spicy Challenge Global. Safe & Secure.'
    }
}

function App() {
    const [lang, setLang] = useState('kr') // default Korean
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    const text = t[lang]

    return (
        <div className={`min-h-screen bg-spicy-black text-white selection:bg-spicy-red selection:text-white flex flex-col items-center overflow-x-hidden ${lang === 'kr' ? 'break-keep' : ''}`}>

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Flame className="w-6 h-6 text-spicy-red-light" />
                            <Link to="/" className="font-display font-black text-xl tracking-tight text-white hover:text-spicy-red-light transition-colors">
                                SPICY CHALLENGE
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
                            <NavLink to="/" icon={<Flame className="w-4 h-4" />} text={text.navHome} />
                            <NavLink to="/reviews" icon={<Star className="w-4 h-4" />} text={text.navReviews} />
                            <NavLink to="/guide" icon={<Info className="w-4 h-4" />} text={text.navGuide} />
                            <NavLink to="/products" icon={<ShoppingBag className="w-4 h-4" />} text={text.navProducts} />
                            <NavLink to="/top10" icon={<Trophy className="w-4 h-4" />} text={text.navTop10} />
                        </div>

                        {/* Language Toggle */}
                        <div className="hidden md:flex bg-black/40 border border-white/10 rounded-full p-1 h-9">
                            <button
                                onClick={() => setLang('kr')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'kr' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                KR
                            </button>
                            <button
                                onClick={() => setLang('en')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            {/* Mobile Language Toggle */}
                            <div className="flex bg-black/40 border border-white/10 rounded-full p-1 h-8 mr-4">
                                <button
                                    onClick={() => setLang('kr')}
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'kr' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    KR
                                </button>
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-spicy-red text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    EN
                                </button>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-white focus:outline-none p-2"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {isMenuOpen && (
                    <div className="md:hidden bg-spicy-black-light border-b border-white/10 px-2 pt-2 pb-4 space-y-1 shadow-2xl absolute w-full left-0 top-16 z-40">
                        <MobileNavLink to="/" text={text.navHome} />
                        <MobileNavLink to="/reviews" text={text.navReviews} />
                        <MobileNavLink to="/guide" text={text.navGuide} />
                        <MobileNavLink to="/products" text={text.navProducts} />
                        <MobileNavLink to="/top10" text={text.navTop10} />
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <div className="w-full flex-1 pt-16 flex flex-col items-center">
                <Routes>
                    {/* We pass the 'lang' state down so pages can translate themselves */}
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/reviews" element={<Reviews lang={lang} />} />
                    <Route path="/guide" element={<Guide lang={lang} />} />
                    <Route path="/products" element={<Products lang={lang} />} />
                    <Route path="/top10" element={<Top10 lang={lang} />} />
                </Routes>
            </div>

            {/* Global Footer */}
            <footer className="w-full text-center py-8 text-gray-600 border-t border-white/5 mt-auto text-xs font-semibold tracking-widest uppercase">
                <div className="flex justify-center gap-4 mb-4">
                    <Link to="/guide" className="hover:text-gray-400 transition-colors">이용약관</Link>
                    <Link to="/guide" className="hover:text-gray-400 transition-colors">개인정보처리방침</Link>
                    <Link to="/guide" className="hover:text-gray-400 transition-colors">회사소개</Link>
                </div>
                &copy; {new Date().getFullYear()} {text.footer}
            </footer>
        </div>
    )
}

function NavLink({ to, text, icon }) {
    const location = useLocation()
    const isActive = location.pathname === to
    return (
        <Link
            to={to}
            className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all flex items-center gap-2
        ${isActive ? 'bg-white/10 text-white shadow-inner' : 'text-gray-400 hover:text-white hover:bg-white/5'}
      `}
        >
            {icon}
            {text}
        </Link>
    )
}

function MobileNavLink({ to, text }) {
    const location = useLocation()
    const isActive = location.pathname === to
    return (
        <Link
            to={to}
            className={`block px-4 py-3 rounded-xl text-base font-bold transition-all
        ${isActive ? 'bg-spicy-red/20 text-spicy-red-light' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
      `}
        >
            {text}
        </Link>
    )
}

export default App
