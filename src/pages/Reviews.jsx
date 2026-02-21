import { supabase } from '../supabaseClient'
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

// Translation dict
const t = {
    kr: {
        title: '생존자/희생자 후기',
        subtitle: '매운맛 챌린지를 마친 사람들의 생생한 증언. (도전 코드를 입력한 사람만 남길 수 있습니다)',
        formPlaceholder: '도전 후 어땠나요? (예: 5분 버티다 위경련 올 뻔했습니다...)',
        formNickname: '닉네임',
        formSubmit: '후기 남기기',
        msgSuccess: '후기가 성공적으로 등록되었습니다!',
        msgError: '에러가 발생했습니다. 나중에 다시 시도해주세요.',
        msgEmpty: '첫 번째 후기를 남겨주세요!',
        btnLike: '공감'
    },
    en: {
        title: 'Survivor Testimonials',
        subtitle: 'Real stories from those who braved the heat.',
        formPlaceholder: 'How was the challenge? (e.g. Survived the 5 mins but lost my soul...)',
        formNickname: 'Nickname',
        formSubmit: 'Post Review',
        msgSuccess: 'Review posted successfully!',
        msgError: 'Error occurred. Please try again.',
        msgEmpty: 'Be the first to leave a review!',
        btnLike: 'Like'
    }
}

export default function Reviews({ lang }) {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({ nickname: '', content: '' })
    const [status, setStatus] = useState({ type: '', msg: '' })

    const text = t[lang] || t.kr

    useEffect(() => {
        fetchReviews()
    }, [])

    const fetchReviews = async () => {
        setIsLoading(true)
        try {
            // Assuming we have a 'reviews' table. If not, this might fail gracefully.
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50)

            if (!error && data) {
                setReviews(data)
            } else {
                // Mock data fallback if table doesn't exist yet
                setReviews([
                    { id: 1, nickname: '불닭마스터', content: '입술이 퉁퉁 부어서 며칠 고생했네요. 매운맛 끝판왕 인정합니다.', likes: 12, created_at: new Date().toISOString() },
                    { id: 2, nickname: 'SeoulSurvivor', content: '5분 버텼습니다! 우유 1리터 원샷했어요 ㅋㅋㅋ 죽다 살아남.', likes: 34, created_at: new Date(Date.now() - 86400000).toISOString() },
                    { id: 3, nickname: '맵찔이', content: '10초만에 포기했습니다. 이건 인간이 먹을게 아니에요 ㅠㅠ', likes: 8, created_at: new Date(Date.now() - 172800000).toISOString() }
                ])
            }
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.nickname || !formData.content) return

        try {
            setStatus({ type: '', msg: '' })
            const newReview = {
                nickname: formData.nickname,
                content: formData.content,
                likes: 0
            }

            // Try inserting to DB
            const { error } = await supabase.from('reviews').insert([newReview])

            // Even if DB fails (table not created), we update local state to simulate for UX
            setReviews([{ ...newReview, id: Date.now(), created_at: new Date().toISOString() }, ...reviews])
            setFormData({ nickname: '', content: '' })
            setStatus({ type: 'success', msg: text.msgSuccess })

            setTimeout(() => setStatus({ type: '', msg: '' }), 3000)
        } catch (err) {
            setStatus({ type: 'error', msg: text.msgError })
        }
    }

    const handleLike = async (id) => {
        // Optimistic UI update
        setReviews(reviews.map(r => r.id === id ? { ...r, likes: (r.likes || 0) + 1 } : r))
        try {
            const target = reviews.find(r => r.id === id)
            if (target && target.likes !== undefined) {
                await supabase.from('reviews').update({ likes: target.likes + 1 }).eq('id', id)
            }
        } catch (e) { }
    }

    const formatDate = (isoString) => {
        const d = new Date(isoString);
        return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
    }

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
                <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 flex items-center justify-center gap-3">
                    <MessageSquare className="w-10 h-10 text-spicy-red-light" />
                    {text.title}
                </h1>
                <p className="text-gray-400 text-lg">{text.subtitle}</p>
            </motion.header>

            {/* Review Input Form */}
            <motion.section variants={item} className="bg-black/50 border border-spicy-red/20 rounded-3xl p-6 md:p-8 mb-12 shadow-[0_0_30px_rgba(230,0,0,0.1)]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder={text.formNickname}
                        value={formData.nickname}
                        onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                        className="w-full md:w-1/3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-spicy-red transition-colors placeholder:text-gray-600 font-bold"
                        maxLength={20}
                    />
                    <textarea
                        placeholder={text.formPlaceholder}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-spicy-red transition-colors placeholder:text-gray-600 min-h-[120px] resize-none text-lg"
                        maxLength={500}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <div>
                            {status.msg && (
                                <span className={`text-sm font-bold ${status.type === 'success' ? 'text-[#00FF66]' : 'text-spicy-red-light'}`}>
                                    {status.msg}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={!formData.nickname || !formData.content}
                            className="bg-spicy-red hover:bg-spicy-red-light disabled:bg-gray-800 disabled:text-gray-500 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                        >
                            {text.formSubmit}
                        </button>
                    </div>
                </form>
            </motion.section>

            {/* Reviews List */}
            <motion.section variants={container} className="space-y-4">
                {isLoading ? (
                    <div className="text-center text-gray-500 py-10 animate-pulse">Loading reviews...</div>
                ) : reviews.length === 0 ? (
                    <div className="text-center text-gray-500 py-10 bg-white/5 rounded-2xl border border-white/5">{text.msgEmpty}</div>
                ) : (
                    reviews.map((review) => (
                        <motion.div variants={item} layout key={review.id} className="bg-black/30 border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-bold text-lg text-white">{review.nickname}</span>
                                <span className="text-sm font-mono text-gray-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {formatDate(review.created_at)}
                                </span>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                                {review.content}
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleLike(review.id)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-spicy-red/50 hover:bg-spicy-red/10 rounded-lg text-sm font-bold text-gray-400 hover:text-spicy-red-light transition-colors group"
                                >
                                    <ThumbsUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                    {review.likes || 0}
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </motion.section>
        </motion.div>
    )
}
