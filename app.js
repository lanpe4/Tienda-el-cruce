/* ==================== DATOS DE PRODUCTOS ==================== */
const productos = [
    {
        id: 1,
        nombre: "Chaqueta_Urbana_Dark",
        precio: 89.99,
        precioAnterior: 129.99,
        categoria: "hombre",
        badge: "sale",
        icon: "🧥",
        gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
        rating: 4.8,
        reviews: 124,
        descripcion: "Chaqueta de mezclilla con acabado urbano. Perfecta para cualquier clima, con forro térmico y bolsillos funcionales.",
        tallas: ["S", "M", "L", "XL"],
        imagen:"https://cockpitusa.com/cdn/shop/products/Product-1080-Z28B001-2.jpg?v=1704300714&width=4096"
    },
    {
        id: 2,
        nombre: "Vestido Flor de Luna",
        precio: 64.99,
        precioAnterior: null,
        categoria: "mujer",
        badge: "new",
        icon: "👗",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        rating: 4.9,
        reviews: 89,
        descripcion: "Vestido floral con corte A, tela suave al tacto. Ideal para eventos especiales o una salida elegante.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        nombre: "Camiseta Street Vibe",
        precio: 29.99,
        precioAnterior: null,
        categoria: "hombre",
        badge: "new",
        icon: "👕",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        rating: 4.6,
        reviews: 203,
        descripcion: "Camiseta de algodón premium con estampado urbano. Cómoda, transpirable y con un estilo que destaca.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        nombre: "Blazer Elegance Noir",
        precio: 119.99,
        precioAnterior: 159.99,
        categoria: "mujer",
        badge: "sale",
        icon: "🧥",
        gradient: "linear-gradient(135deg, #2d1b69, #6a82fb)",
        rating: 4.7,
        reviews: 67,
        descripcion: "Blazer negro con corte sastre perfecto. Tela de lino importada, ideal para oficina o cena elegante.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        nombre: "Reloj Titanium Cross",
        precio: 149.99,
        precioAnterior: 199.99,
        categoria: "accesorios",
        badge: "sale",
        icon: "⌚",
        gradient: "linear-gradient(135deg, #0c0c0c, #434343)",
        rating: 4.9,
        reviews: 45,
        descripcion: "Reloj de titanio con correa de cuero italiano. Resistente al agua, con mecanismo suizo de precisión.",
        tallas: []
    },
    {
        id: 6,
        nombre: "Pantalón Cargo Explorer",
        precio: 54.99,
        precioAnterior: null,
        categoria: "hombre",
        badge: "new",
        icon: "👖",
        gradient: "linear-gradient(135deg, #2c3e50, #3498db)",
        rating: 4.5,
        reviews: 178,
        descripcion: "Pantalón cargo con 6 bolsillos. Tela ripstop resistente, perfecto para aventura o uso diario.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 7,
        nombre: "Gafas Sunset Vibes",
        precio: 39.99,
        precioAnterior: 59.99,
        categoria: "accesorios",
        badge: "hot",
        icon: "🕶️",
        gradient: "linear-gradient(135deg, #f5af19, #f12711)",
        rating: 4.4,
        reviews: 92,
        descripcion: "Gafas de sol polarizadas con montura de acetato. Protección UV400 y diseño unisex atemporal.",
        tallas: []
    },
    {
        id: 8,
        nombre: "Falda Midi Bohemia",
        precio: 44.99,
        precioAnterior: null,
        categoria: "mujer",
        badge: "new",
        icon: "👗",
        gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        rating: 4.7,
        reviews: 56,
        descripcion: "Falda midi con estampado boho-chic. Tela fluida que se mueve con gracia, ajuste elástico en cintura.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 9,
        nombre: "Bolso Crossbody Lux",
        precio: 79.99,
        precioAnterior: 109.99,
        categoria: "accesorios",
        badge: "sale",
        icon: "👜",
        gradient: "linear-gradient(135deg, #834d9b, #d04ed6)",
        rating: 4.8,
        reviews: 134,
        descripcion: "Bolso crossbody de cuero genuino con acabado mate. Compartimentos internos y correa ajustable.",
        tallas: []
    },
    {
        id: 10,
        nombre: "Sudadera Oversize Cozy",
        precio: 49.99,
        precioAnterior: 69.99,
        categoria: "hombre",
        badge: "sale",
        icon: "🧥",
        gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
        rating: 4.6,
        reviews: 211,
        descripcion: "Sudadera oversize con interior de fleece. Suave, cálida y con el confort que buscas para el día a día.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 11,
        nombre: "Top Crochet Riviera",
        precio: 34.99,
        precioAnterior: null,
        categoria: "mujer",
        badge: "new",
        icon: "👚",
        gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        rating: 4.5,
        reviews: 78,
        descripcion: "Top de crochet tejido a mano. Fresco, veraniego y con un toque artesanal que enamora.",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        nombre: "Cinturón Heritage Brown",
        precio: 34.99,
        precioAnterior: 49.99,
        categoria: "accesorios",
        badge: "sale",
        icon: "🪢",
        gradient: "linear-gradient(135deg, #6b4423, #d4a574)",
        rating: 4.3,
        reviews: 63,
        descripcion: "Cinturón de cuero full-grain con hebilla de acero inoxidable. Un clásico que nunca pasa de moda.",
        tallas: []
    }
];

/* ==================== CARRITO ==================== */
let carrito = [];

/* ==================== RENDERIZAR PRODUCTOS ==================== */
function renderProductos(filtro = 'todos') {
    const grid = document.getElementById('productosGrid');
    const filtrados = filtro === 'todos' 
        ? productos 
        : filtro === 'ofertas' 
            ? productos.filter(p => p.precioAnterior) 
            : productos.filter(p => p.categoria === filtro);
    
    grid.innerHTML = filtrados.map(p => `
        <div class="producto-card fade-in" data-categoria="${p.categoria}" onclick="openModal(${p.id})">
            <div class="producto-img" style="background: ${p.gradient};">
                <span style="font-size:4rem; z-index:2; position:relative;">${p.icon}</span>
                ${p.badge === 'new' ? '<span class="producto-badge badge-new">Nuevo</span>' : ''}
                ${p.badge === 'sale' ? '<span class="producto-badge badge-sale">Oferta</span>' : ''}
                ${p.badge === 'hot' ? '<span class="producto-badge badge-hot">🔥 Hot</span>' : ''}
                <div class="producto-actions">
                    <button class="producto-action-btn" onclick="event.stopPropagation(); toggleFav(${p.id})" title="Favorito">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="producto-action-btn" onclick="event.stopPropagation(); openModal(${p.id})" title="Ver detalle">
                        <i class="far fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="producto-info">
                <p class="producto-categoria">${p.categoria}</p>
                <h3>${p.nombre}</h3>
                <div class="producto-precio">
                    <span class="precio-actual">$${p.precio.toFixed(2)}</span>
                    ${p.precioAnterior ? `<span class="precio-anterior">$${p.precioAnterior.toFixed(2)}</span>` : ''}
                </div>
                <div class="producto-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}
                    ${p.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    <span>(${p.reviews})</span>
                </div>
            </div>
        </div>
    `).join('');

    // Activar animaciones fade-in
    setTimeout(() => {
        document.querySelectorAll('.producto-card.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
        });
    }, 50);
}

/* ==================== FILTRO DE PRODUCTOS ==================== */
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProductos(btn.dataset.filter);
    });
});

// Categorías click
document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', () => {
        const filter = card.dataset.filter;
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === filter);
        });
        renderProductos(filter);
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
});

// Dropdown filter
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.dataset.categoria;
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === cat);
        });
        renderProductos(cat);
    });
});

/* ==================== MODAL PRODUCTO ==================== */
let modalProducto = null;
let modalQty = 1;
let modalSize = 'M';

function openModal(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    modalProducto = producto;
    modalQty = 1;
    modalSize = 'M';

    // Inyectar imagen real del producto
    const modalImage = document.getElementById('modalImage');
    modalImage.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="modal-img-element">
    `;

    // Cargar información del producto
    document.getElementById('modalTitle').textContent = producto.nombre;
    document.getElementById('modalPrice').textContent = `$${producto.precio.toFixed(2)}`;
    
    // Control de precio anterior
    const oldPriceEl = document.getElementById('modalOldPrice');
    if (producto.precioAnterior) {
        oldPriceEl.textContent = `$${producto.precioAnterior.toFixed(2)}`;
        oldPriceEl.style.display = 'inline';
    } else {
        oldPriceEl.style.display = 'none';
    }

    // Control de badge
    const badgeEl = document.getElementById('modalBadge');
    if (producto.badge) {
        badgeEl.textContent = producto.badge;
        badgeEl.style.display = 'inline-block';
    } else {
        badgeEl.style.display = 'none';
    }

    document.getElementById('modalDesc').textContent = producto.descripcion;
    document.getElementById('qtyValue').textContent = '1';

    // Resetear selección de talla a 'M'
    selectSize('M');

    // Mostrar modal y bloquear scroll del fondo
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
});

function selectSize(size) {
    modalSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === size);
    });
}

document.getElementById('qtyMinus').addEventListener('click', () => {
    if (modalQty > 1) { modalQty--; document.getElementById('qtyValue').textContent = modalQty; }
});

document.getElementById('qtyPlus').addEventListener('click', () => {
    if (modalQty < 10) { modalQty++; document.getElementById('qtyValue').textContent = modalQty; }
});

/* ==================== CARRITO FUNCIONES ==================== */
function addToCart() {
    if (!modalProducto) return;
    const existItem = carrito.find(item => item.id === modalProducto.id && item.size === modalSize);
    if (existItem) {
        existItem.qty += modalQty;
    } else {
        carrito.push({
            id: modalProducto.id,
            nombre: modalProducto.nombre,
            precio: modalProducto.precio,
            icon: modalProducto.icon,
            gradient: modalProducto.gradient,
            size: modalSize,
            qty: modalQty
        });
    }
    updateCart();
    closeModal();
    showToast(`${modalProducto.nombre} agregado al carrito`);
}

document.getElementById('modalAddCart').addEventListener('click', addToCart);

function updateCart() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    
    const totalItems = carrito.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = carrito.reduce((sum, item) => sum + (item.precio * item.qty), 0);
    
    countEl.textContent = totalItems;
    
    if (carrito.length === 0) {
        itemsEl.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Tu carrito está vacío</p>
                <a href="#productos" class="btn btn-primary btn-sm">Ir a comprar</a>
            </div>`;
        footerEl.style.display = 'none';
    } else {
        itemsEl.innerHTML = carrito.map((item, i) => `
            <div class="cart-item">
                <div class="cart-item-img" style="background: ${item.gradient};">${item.icon}</div>
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>Talla: ${item.size} · Cantidad: ${item.qty}</p>
                </div>
                <span class="cart-item-precio">$${(item.precio * item.qty).toFixed(2)}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${i})" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
        footerEl.style.display = 'block';
        totalEl.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    updateCart();
}

document.getElementById('clearCartBtn').addEventListener('click', () => {
    carrito = [];
    updateCart();
    showToast('Carrito vaciado');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (carrito.length === 0) return;
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.qty), 0);
    showToast(`¡Compra de $${total.toFixed(2)} procesada! Gracias por tu pedido 🎉`);
    carrito = [];
    updateCart();
    toggleCart();
});

/* ==================== TOAST ==================== */
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i><p>${message}</p>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

/* ==================== TOGGLE CARRITO ==================== */
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
}

document.getElementById('cartToggle').addEventListener('click', toggleCart);
document.getElementById('closeCart').addEventListener('click', toggleCart);
document.getElementById('cartOverlay').addEventListener('click', toggleCart);

/* ==================== FAVORITOS ==================== */
function toggleFav(id) {
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    if (icon.classList.contains('fas')) {
        icon.style.color = 'var(--accent)';
        showToast('Agregado a favoritos ❤️');
    } else {
        icon.style.color = '';
    }
}

/* ==================== BÚSQUEDA ==================== */
document.getElementById('searchToggle').addEventListener('click', () => {
    document.getElementById('searchBar').classList.toggle('active');
    document.getElementById('searchInput').focus();
});

document.getElementById('closeSearch').addEventListener('click', () => {
    document.getElementById('searchBar').classList.remove('active');
    document.getElementById('searchInput').value = '';
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length < 2) { renderProductos('todos'); return; }
    const filtered = productos.filter(p => 
        p.nombre.toLowerCase().includes(term) || 
        p.categoria.toLowerCase().includes(term) ||
        p.descripcion.toLowerCase().includes(term)
    );
    const grid = document.getElementById('productosGrid');
    grid.innerHTML = filtered.map(p => `
        <div class="producto-card" data-categoria="${p.categoria}" onclick="openModal(${p.id})">
            <div class="producto-img" style="background: ${p.gradient};">
                <span style="font-size:4rem; z-index:2; position:relative;">${p.icon}</span>
                ${p.badge === 'new' ? '<span class="producto-badge badge-new">Nuevo</span>' : ''}
                ${p.badge === 'sale' ? '<span class="producto-badge badge-sale">Oferta</span>' : ''}
                ${p.badge === 'hot' ? '<span class="producto-badge badge-hot">🔥 Hot</span>' : ''}
            </div>
            <div class="producto-info">
                <p class="producto-categoria">${p.categoria}</p>
                <h3>${p.nombre}</h3>
                <div class="producto-precio">
                    <span class="precio-actual">$${p.precio.toFixed(2)}</span>
                    ${p.precioAnterior ? `<span class="precio-anterior">$${p.precioAnterior.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
});

/* ==================== MENÚ MÓVIL ==================== */
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

/* ==================== SLIDER HERO ==================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => changeSlide(parseInt(dot.dataset.slide)));
});

setInterval(() => {
    changeSlide((currentSlide + 1) % slides.length);
}, 5000);

/* ==================== COUNTDOWN ==================== */
function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    endDate.setHours(23, 59, 59, 0);
    
    const saved = localStorage.getItem('elcruce_countdown');
    const target = saved ? new Date(saved) : endDate;
    
    if (!saved) localStorage.setItem('elcruce_countdown', endDate.toISOString());
    
    const now = new Date();
    const diff = target - now;
    
    if (diff <= 0) {
        localStorage.removeItem('elcruce_countdown');
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ==================== SCROLL HEADER ==================== */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollBtn = document.getElementById('scrollTop');
    
    header.classList.toggle('scrolled', window.scrollY > 50);
    scrollBtn.classList.toggle('visible', window.scrollY > 500);
});

document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==================== ANIMACIONES SCROLL ==================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ==================== CONTADOR ANIMADO ==================== */
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            let current = 0;
            const increment = target / 80;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target.toLocaleString() + '+';
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current).toLocaleString() + '+';
                }
            }, 20);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

/* ==================== FORMULARIOS ==================== */
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('¡Suscripción exitosa! Revisa tu correo para el 10% de descuento 🎉');
    e.target.reset();
});

document.getElementById('contactoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('¡Mensaje enviado! Te responderemos pronto 📩');
    e.target.reset();
});

/* ==================== NAVEGACIÓN ACTIVA ==================== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

/* ==================== INIT ==================== */
renderProductos();