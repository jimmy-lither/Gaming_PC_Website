import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Real hero background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop"
            alt="Gaming PC Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/70 to-brand-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/60 via-transparent to-brand-bg/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full"
          >
            <span className="text-brand-cyan text-sm font-semibold tracking-widest uppercase">⚡ Next-Gen Gaming Rigs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            BUILT FOR THE <span className="text-brand-cyan drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">RELENTLESS</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Zero bottlenecks. Max frames. Every build stress-tested for 72 hours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-brand-cyan text-brand-bg font-display font-bold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] shadow-lg"
            >
              Shop Prebuilts
            </Link>
            <Link
              to="/components"
              className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-display font-bold rounded-lg hover:bg-brand-cyan/10 transition-all hover:scale-105"
            >
              Browse Components
            </Link>
            <Link
              to="/builder"
              className="px-8 py-4 border-2 border-white/30 text-white font-display font-bold rounded-lg hover:border-brand-cyan hover:text-brand-cyan transition-all hover:scale-105"
            >
              Configure Yours
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400"
          >
            {['🔒 Secure Checkout', '🚚 Free Shipping $999+', '⭐ 4.9/5 Rating', '🛡️ 5-Year Warranty'].map((badge, i) => (
              <span key={i} className="flex items-center gap-1">{badge}</span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-cyan/60"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-surface border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: '4K Ready Builds', value: '✓', sub: 'All systems' },
              { label: 'Avg FPS 1080p', value: '240+', sub: 'Guaranteed' },
              { label: 'Warranty Included', value: '5-Yr', sub: 'Full parts' },
              { label: 'Ships In', value: '48h', sub: 'Order by 2PM' },
            ].map((stat, i) => (
              <div key={i} className="py-2">
                <div className="text-brand-cyan font-display font-bold text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-white text-sm font-semibold">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-3">— Top Sellers —</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Featured Systems</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Hand-picked, benchmark-tested rigs. From entry-level esports to 4K content creation monsters.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block px-8 py-4 bg-brand-surface border border-white/20 rounded-lg hover:border-brand-cyan hover:text-brand-cyan transition-all font-semibold">
              View All Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Banner with background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=600&fit=crop"
            alt="Gaming setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-bg/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            From Valorant to <span className="text-brand-cyan">Cyberpunk 2077</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Every rig benchmarked across 12 titles. Thermals locked. Performance guaranteed.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { game: 'Valorant', fps: '400+', res: '1080p' },
              { game: 'Warzone', fps: '180+', res: '1080p' },
              { game: 'Cyberpunk', fps: '95+', res: '1440p' },
            ].map((g, i) => (
              <div key={i} className="bg-brand-surface/60 backdrop-blur border border-white/10 rounded-lg p-4">
                <div className="text-brand-cyan font-display font-bold text-2xl">{g.fps}</div>
                <div className="text-white text-sm font-semibold">{g.game}</div>
                <div className="text-gray-400 text-xs">{g.res} Avg</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NexCore */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-3">— Our Promise —</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Why NexCore</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🎧', title: 'Lifetime Support', desc: '24/7 expert tech assistance, forever.' },
              { icon: '🔥', title: '72h Burn Test', desc: 'Every build runs 72 hrs before shipping.' },
              { icon: '🛡️', title: '5-Year Warranty', desc: 'Full parts & labor coverage included.' },
              { icon: '🚀', title: 'Same-Day Ship', desc: 'Order by 2PM EST, ships today.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-brand-surface rounded-xl border border-white/10 hover:border-brand-cyan/40 transition-all hover:shadow-lg hover:shadow-brand-cyan/5 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-12 tracking-widest uppercase">Trusted Partners &amp; Components</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[
              { name: 'Intel', url: 'https://logo.clearbit.com/intel.com' },
              { name: 'AMD', url: 'https://logo.clearbit.com/amd.com' },
              { name: 'NVIDIA', url: 'https://logo.clearbit.com/nvidia.com' },
              { name: 'Corsair', url: 'https://logo.clearbit.com/corsair.com' },
              { name: 'ASUS ROG', url: 'https://logo.clearbit.com/asus.com' },
              { name: 'Samsung', url: 'https://logo.clearbit.com/samsung.com' },
            ].map(brand => (
              <div
                key={brand.name}
                className="group flex flex-col items-center gap-2 cursor-default"
              >
                <img
                  src={brand.url}
                  alt={brand.name}
                  title={brand.name}
                  className="h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
