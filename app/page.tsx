'use client'

import { useMemo, useState } from 'react'
import {
  BarChart3,
  Bell,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Download,
  ExternalLink,
  Heart,
  LayoutDashboard,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const productImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yaFgKULcquK4JslpP2Wv0iCyrhewu1.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JL0J6jvPmRInxo0GZrL4liPwJs1oM4.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KemwyrAAqWX7OhzuRZ00jzDvEMPiwm.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J2cRJ99n9ZFCFWNhf2sK9uqXXWFLgI.png',
]

const products = [
  { name: 'LONDON HILLS', category: 'T-Shirts', price: 26, compare: 32, image: productImages[0], stock: 18 },
  { name: 'AMERICAN CREW', category: 'Shirts', price: 50, compare: 64, image: productImages[1], stock: 8 },
  { name: 'BULLMER', category: 'Streetwear', price: 40, compare: 52, image: productImages[2], stock: 24 },
  { name: 'JUNEBERRY', category: 'Women', price: 40, compare: 62, image: productImages[3], stock: 5 },
  { name: 'VAN HEUSEN', category: 'Basics', price: 40, compare: 48, image: productImages[0], stock: 31 },
  { name: 'PETER ENGLAND', category: 'Essentials', price: 40, compare: 55, image: productImages[1], stock: 12 },
]

const revenue = [44, 55, 42, 68, 62, 78, 71, 88, 76, 92, 84, 96]

function ProductCard({ product, onAdd }: { product: (typeof products)[number]; onAdd: () => void }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.name} fashion product`} />
        <button className="icon-button product-heart" aria-label={`Save ${product.name}`}><Heart size={16} /></button>
        <span className="sale-pill">SALE</span>
      </div>
      <div className="product-card-info">
        <div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3></div>
        <button className="add-button" onClick={onAdd} aria-label={`Add ${product.name} to cart`}><Plus size={16} /></button>
      </div>
      <div className="price-row"><strong>${product.price}.00</strong><del>${product.compare}.00</del></div>
    </article>
  )
}

function Storefront({ cartCount, onAdd, onAdmin }: { cartCount: number; onAdd: () => void; onAdmin: () => void }) {
  const [search, setSearch] = useState('')
  const filtered = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))
  return (
    <main className="store-shell">
      <header className="store-nav">
        <div className="brand"><span className="brand-mark">N</span><span>NEXORA</span></div>
        <nav className="store-links"><a className="active" href="#shop">Shop</a><a href="#new">New arrivals</a><a href="#collections">Collections</a><a href="#about">About</a></nav>
        <div className="nav-actions">
          <label className="search-box"><Search size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" aria-label="Search products" /></label>
          <button className="nav-icon" aria-label="Account"><Users size={18} /></button>
          <button className="nav-icon cart-icon" onClick={onAdd} aria-label="Shopping cart"><ShoppingCart size={18} /><span>{cartCount}</span></button>
          <button className="admin-switch" onClick={onAdmin}>Admin <ChevronRight size={14} /></button>
        </div>
      </header>
      <section className="hero-block" id="shop">
        <div className="hero-copy"><p className="eyebrow accent"><Sparkles size={14} /> CURATED FOR EVERYDAY</p><h1>Style that moves<br /><em>with you.</em></h1><p className="hero-description">Thoughtful essentials and standout pieces made for your everyday rotation.</p><div className="hero-actions"><Button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>Explore collection <ChevronRight data-icon="inline-end" /></Button><a href="#new">View new arrivals <ArrowUpRight /></a></div></div>
        <div className="hero-art"><div className="hero-orb" /><img src={productImages[2]} alt="Model wearing a relaxed black jacket" /><div className="hero-stat"><strong>2.4k+</strong><span>happy customers</span></div></div>
      </section>
      <section className="category-strip" id="collections"><div><span className="eyebrow">SHOP BY MOOD</span><h2>Find your fit.</h2></div><div className="category-pills"><button className="selected">All pieces <span>24</span></button><button>Everyday <span>12</span></button><button>Statement <span>08</span></button><button>Accessories <span>04</span></button></div></section>
      <section className="products-section" id="products"><div className="section-heading"><div><p className="eyebrow">THE EDIT</p><h2>Made to be worn.</h2></div><button className="filter-button"><SlidersHorizontal size={16} /> Filters <span>3</span></button></div><div className="products-grid">{filtered.map((product) => <ProductCard key={product.name} product={product} onAdd={onAdd} />)}</div></section>
      <section className="newsletter"><div><p className="eyebrow accent">NEXORA NOTES</p><h2>Good things, in your inbox.</h2><p>New drops, thoughtful edits, and 10% off your first order.</p></div><div className="newsletter-form"><input placeholder="Your email address" aria-label="Your email address" type="email" /><Button>Subscribe <ChevronRight data-icon="inline-end" /></Button></div></section>
      <footer><div className="brand"><span className="brand-mark">N</span><span>NEXORA</span></div><p>Commerce. Intelligence. Growth.</p><div className="footer-links"><a href="#privacy">Privacy</a><a href="#terms">Terms</a><button onClick={onAdmin}>Open admin <ExternalLink size={14} /></button></div></footer>
    </main>
  )
}

function AdminDashboard({ onStore }: { onStore: () => void }) {
  const [range, setRange] = useState('Last 30 days')
  const total = useMemo(() => revenue.reduce((sum, value) => sum + value, 0), [])
  return <main className="admin-shell"><aside className="admin-sidebar"><div className="brand"><span className="brand-mark">N</span><span>NEXORA</span></div><div className="workspace"><span className="workspace-avatar">NC</span><span><strong>Nexora Commerce</strong><small>Workspace</small></span><ChevronDown size={15} /></div><nav className="admin-nav"><p className="nav-label">Overview</p><a className="current"><LayoutDashboard size={17} /> Overview</a><a><BarChart3 size={17} /> Analytics</a><a><ShoppingBag size={17} /> Orders <span className="nav-count">12</span></a><p className="nav-label">Manage</p><a><Package size={17} /> Products</a><a><Users size={17} /> Customers</a><a><CreditCard size={17} /> Payments</a><p className="nav-label">Workspace</p><a><Settings size={17} /> Settings</a><a><CircleHelp size={17} /> Help center</a></nav><div className="sidebar-user"><div className="avatar">AS</div><div><strong>Alex Smith</strong><small>Administrator</small></div><ChevronDown size={15} /></div></aside><section className="admin-content"><header className="admin-topbar"><button className="mobile-menu" aria-label="Open menu"><Menu /></button><div><p className="eyebrow">MONDAY, OCTOBER 7, 2024</p><h1>Good morning, Alex.</h1></div><div className="topbar-actions"><button className="icon-button"><Bell size={18} /><span className="notification-dot" /></button><button className="store-view" onClick={onStore}>View storefront <ExternalLink size={15} /></button><div className="avatar">AS</div></div></header><div className="dashboard-toolbar"><div><p className="eyebrow accent">OVERVIEW</p><h2>Here&apos;s your business at a glance.</h2></div><div className="toolbar-actions"><button className="date-select">{range}<ChevronDown size={15} /></button><button className="export-button"><Download size={15} /> Export report</button></div></div><div className="metric-grid"><div className="metric-card highlight"><div className="metric-top"><span>Total revenue</span><TrendingUp size={18} /></div><strong>$48,294.20</strong><p><span className="positive">+18.4%</span> vs. last month</p><div className="mini-sparkline">{revenue.map((value, index) => <i key={index} style={{ height: `${value}%` }} />)}</div></div><div className="metric-card"><div className="metric-top"><span>Orders</span><ShoppingBag size={18} /></div><strong>1,284</strong><p><span className="positive">+12.6%</span> vs. last month</p><div className="metric-foot"><span>Conversion rate</span><b>3.24%</b></div></div><div className="metric-card"><div className="metric-top"><span>Customers</span><Users size={18} /></div><strong>8,549</strong><p><span className="positive">+8.2%</span> vs. last month</p><div className="metric-foot"><span>Returning customers</span><b>42.8%</b></div></div><div className="metric-card"><div className="metric-top"><span>Average order</span><CreditCard size={18} /></div><strong>$86.42</strong><p><span className="positive">+5.1%</span> vs. last month</p><div className="metric-foot"><span>Items per order</span><b>2.8</b></div></div></div><div className="dashboard-grid"><div className="panel revenue-panel"><div className="panel-heading"><div><h3>Revenue overview</h3><p>Track your revenue performance over time.</p></div><button className="date-select" onClick={() => setRange(range === 'Last 30 days' ? 'Last 90 days' : 'Last 30 days')}>{range}<ChevronDown size={14} /></button></div><div className="chart-legend"><span><i className="legend-dot orange" /> Revenue</span><span><i className="legend-dot muted-dot" /> Orders</span><strong>${total}k <small>total</small></strong></div><div className="bar-chart">{revenue.map((value, index) => <div className="bar-column" key={index}><div className="bar orange-bar" style={{ height: `${value}%` }} /><span>{['Sep 1','Sep 4','Sep 7','Sep 10','Sep 13','Sep 16','Sep 19','Sep 22','Sep 25','Sep 28','Oct 1','Oct 4'][index]}</span></div>)}</div></div><div className="panel category-panel"><div className="panel-heading"><div><h3>Sales by category</h3><p>Where your revenue comes from.</p></div><button className="icon-button"><ExternalLink size={15} /></button></div><div className="donut-wrap"><div className="donut"><span>100%<small>sales</small></span></div><ul><li><i className="legend-dot orange" /> Essentials <b>42%</b></li><li><i className="legend-dot purple" /> Streetwear <b>28%</b></li><li><i className="legend-dot green" /> Accessories <b>18%</b></li><li><i className="legend-dot gray" /> Other <b>12%</b></li></ul></div></div></div><div className="panel orders-panel"><div className="panel-heading"><div><h3>Recent orders</h3><p>Your latest transactions and fulfillment status.</p></div><button className="text-button">View all <ChevronRight size={15} /></button></div><div className="orders-table"><div className="table-row table-header"><span>Order</span><span>Customer</span><span>Date</span><span>Amount</span><span>Status</span></div>{[['#NX-2084','Jordan Lee','Oct 07, 2024','$240.00','Paid'],['#NX-2083','Maya Patel','Oct 07, 2024','$86.42','Paid'],['#NX-2082','Avery Morgan','Oct 06, 2024','$164.00','Processing'],['#NX-2081','Sam Wilson','Oct 06, 2024','$52.00','Shipped']].map((order) => <div className="table-row" key={order[0]}><span className="order-id">{order[0]}</span><span>{order[1]}</span><span className="muted-text">{order[2]}</span><span>{order[3]}</span><span><span className={`status ${order[4].toLowerCase()}`}>{order[4]}</span></span></div>)}</div></div></section></main>
}

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M7 17 17 7M7 7h10v10" /></svg> }

export default function Page() {
  const [admin, setAdmin] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  return admin ? <AdminDashboard onStore={() => setAdmin(false)} /> : <Storefront cartCount={cartCount} onAdd={() => setCartCount((count) => count + 1)} onAdmin={() => setAdmin(true)} />
}
