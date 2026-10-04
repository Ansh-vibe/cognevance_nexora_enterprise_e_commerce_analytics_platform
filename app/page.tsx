'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles, X } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
  editorial: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85',
  detail: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=85',
  look: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
  accessory: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
  street: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
}

const products = [
  { name: 'The Soft Structure Coat', type: 'Outerwear / 01', price: '$248', image: images.hero },
  { name: 'Form 02 — Knit Dress', type: 'Dresses / 04', price: '$168', image: images.editorial },
  { name: 'No. 7 Leather Carryall', type: 'Accessories / 02', price: '$214', image: images.accessory },
  { name: 'Wide Leg Trouser', type: 'Trousers / 09', price: '$124', image: images.look },
]

function ProductCard({ product, onAdd }: { product: (typeof products)[number]; onAdd: () => void }) {
  const [saved, setSaved] = useState(false)
  return <article className="editorial-product">
    <div className="product-visual"><img src={product.image} alt={product.name} /><button className="save-button" onClick={() => setSaved(!saved)} aria-label={`Save ${product.name}`}><Heart size={17} fill={saved ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={onAdd}>Add to bag <ArrowRight size={14} /></button></div>
    <div className="product-meta"><div><span>{product.type}</span><h3>{product.name}</h3></div><strong>{product.price}</strong></div>
  </article>
}

export default function Page() {
  const [cart, setCart] = useState(0)
  const [menu, setMenu] = useState(false)
  const [email, setEmail] = useState('')
  const add = () => setCart((count) => count + 1)
  return <main className="nexora-site">
    <div className="announcement">Free express delivery on orders over $150 <ArrowRight size={13} /></div>
    <header className="editorial-nav"><a href="#top" className="wordmark">NEXORA<span>®</span></a><nav><a href="#shop">Shop</a><a href="#story">Journal</a><a href="#world">Our world</a></nav><div className="nav-tools"><button aria-label="Search"><Search size={18} /></button><button className="bag-button" onClick={add} aria-label="Shopping bag"><ShoppingBag size={18} /><b>{cart}</b></button><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Open navigation">{menu ? <X /> : <Menu />}</button></div>{menu && <div className="mobile-menu"><a href="#shop" onClick={() => setMenu(false)}>Shop</a><a href="#story" onClick={() => setMenu(false)}>Journal</a><a href="#world" onClick={() => setMenu(false)}>Our world</a></div>}</header>
    <section className="hero-editorial" id="top"><div className="hero-image"><img src={images.hero} alt="Model in a tailored neutral look" /><div className="hero-caption"><span>Look 01 / AW 26</span><span>Scroll to explore <ArrowDownRight size={14} /></span></div></div><div className="hero-title"><p className="kicker"><Sparkles size={13} /> New perspective</p><h1>Dress<br /><i>outside</i><br />the lines.</h1><a href="#shop" className="circle-link">Explore edit <ArrowDownRight size={17} /></a></div></section>
    <section className="manifesto" id="story"><p className="kicker">NEXORA / MANIFESTO</p><h2>We make clothes for the <em>in-between.</em> The quiet mornings, late trains, and plans that were never planned.</h2><a href="#world" className="text-link">Read our story <ArrowRight size={15} /></a></section>
    <section className="marquee" aria-label="Brand values"><div>CONSIDERED · UNCOMMON · EVERYDAY · CONSIDERED · UNCOMMON · EVERYDAY ·</div></section>
    <section className="chapter-grid"><div className="chapter-image tall"><img src={images.editorial} alt="Editorial fashion portrait" /><span>Chapter 01 — Soft power</span></div><div className="chapter-copy"><p className="kicker">01 / THE NEW UNIFORM</p><h2>Ease is a point of view.</h2><p>Relaxed silhouettes, precise details, and a palette that lets you become the loudest thing in the room.</p><a href="#shop" className="text-link">Shop the chapter <ArrowRight size={15} /></a></div><div className="chapter-image small"><img src={images.detail} alt="Clothing rack in warm light" /><span>Material study / 02</span></div></section>
    <section className="shop-section" id="shop"><div className="section-header"><div><p className="kicker">THE CURRENT EDIT / 04 PIECES</p><h2>Made for the long way round.</h2></div><a href="#shop" className="text-link">View all <ArrowRight size={15} /></a></div><div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product} onAdd={add} />)}</div></section>
    <section className="lookbook"><div className="lookbook-copy"><p className="kicker">NEXORA / LOOKBOOK 26</p><h2>Quietly<br /><i>electric.</i></h2><p>A study in contrast: soft tailoring, honest texture, and a little bit of neon after dark.</p><a href="#shop" className="outline-link">Open lookbook <ArrowRight size={15} /></a></div><img src={images.street} alt="Street style lookbook portrait" /></section>
    <section className="world-section" id="world"><div className="world-image"><img src={images.look} alt="Minimal fashion editorial" /><span>Made somewhere between here and there.</span></div><div className="world-copy"><p className="kicker">OUR WORLD / 03</p><h2>Less noise.<br /><em>More meaning.</em></h2><p>We work with small studios, considered materials, and the belief that the best pieces earn their place in your life.</p><a href="#story" className="text-link">Meet the makers <ArrowRight size={15} /></a></div></section>
    <section className="newsletter"><div><p className="kicker">THE NEXORA LETTER</p><h2>Stay in the know.</h2><p>New chapters, studio notes, and first access — sent sparingly.</p></div><form onSubmit={(event) => event.preventDefault()}><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" type="email" aria-label="Email address" required /><button type="submit"><ArrowRight /></button></form></section>
    <footer><a href="#top" className="wordmark">NEXORA<span>®</span></a><p>Clothes with somewhere to go.</p><div><a href="#shop">Shop</a><a href="#story">Journal</a><a href="#world">Contact</a></div><small>© 2026 Nexora Studio</small></footer>
  </main>
}
