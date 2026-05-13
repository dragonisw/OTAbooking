<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package bookingroom
 */

get_header();
?>

<style>
    /* 404 Page Styles */
    .error-404-page {
        min-height: calc(100vh - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #f8fafc 100%);
        padding: 4rem 1rem;
        position: relative;
        overflow: hidden;
    }

    .error-404-page::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.06) 0%, transparent 60%);
        animation: pulse-bg 6s ease-in-out infinite;
    }

    @keyframes pulse-bg {
        0%, 100% { transform: scale(1); opacity: 1; }
        50%       { transform: scale(1.1); opacity: 0.6; }
    }

    .error-404-container {
        position: relative;
        z-index: 1;
        text-align: center;
        max-width: 700px;
        width: 100%;
    }

    /* Big 404 Number */
    .error-404-number {
        font-size: clamp(7rem, 20vw, 14rem);
        font-weight: 900;
        line-height: 1;
        letter-spacing: -0.05em;
        background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #6366f1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        position: relative;
        display: inline-block;
        filter: drop-shadow(0 4px 24px rgba(37,99,235,0.18));
        animation: float-number 4s ease-in-out infinite;
    }

    @keyframes float-number {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-12px); }
    }

    .error-404-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: clamp(80px, 15vw, 140px);
        height: clamp(80px, 15vw, 140px);
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 32px rgba(37,99,235,0.15), 0 2px 8px rgba(0,0,0,0.06);
        border: 2px solid rgba(255,255,255,0.9);
    }

    .error-404-icon svg {
        width: clamp(40px, 8vw, 70px);
        height: clamp(40px, 8vw, 70px);
        color: #3b82f6;
    }

    .error-404-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        color: #dc2626;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 0.35rem 1rem;
        border-radius: 999px;
        margin-bottom: 1.5rem;
    }

    .error-404-badge::before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ef4444;
        animation: blink 1.4s ease-in-out infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.2; }
    }

    .error-404-title {
        font-size: clamp(1.6rem, 5vw, 2.5rem);
        font-weight: 800;
        color: #0f172a;
        margin: 0.5rem 0 1rem;
        letter-spacing: -0.02em;
        line-height: 1.2;
    }

    .error-404-desc {
        color: #64748b;
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 2.5rem;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Action Buttons */
    .error-404-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .btn-home {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: #fff;
        padding: 0.85rem 2rem;
        border-radius: 999px;
        font-weight: 700;
        font-size: 0.95rem;
        text-decoration: none;
        box-shadow: 0 4px 20px rgba(37,99,235,0.35);
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        border: none;
        cursor: pointer;
    }

    .btn-home:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 28px rgba(37,99,235,0.45);
        color: #fff;
        text-decoration: none;
    }

    .btn-back {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255,255,255,0.9);
        color: #334155;
        padding: 0.85rem 2rem;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        border: 1.5px solid #e2e8f0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
    }

    .btn-back:hover {
        background: #f1f5f9;
        transform: translateY(-2px);
        border-color: #cbd5e1;
        color: #1e293b;
        text-decoration: none;
    }

    /* Search box */
    .error-404-search {
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(16px);
        border: 1.5px solid rgba(226,232,240,0.8);
        border-radius: 1.5rem;
        padding: 2rem;
        box-shadow: 0 8px 32px rgba(0,0,0,0.07);
        max-width: 440px;
        margin: 0 auto 2rem;
    }

    .error-404-search p {
        font-size: 0.85rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.85rem;
    }

    .error-404-search form {
        display: flex;
        gap: 0;
    }

    .error-404-search input[type="search"] {
        flex: 1;
        border: 1.5px solid #e2e8f0;
        border-right: none;
        border-radius: 0.75rem 0 0 0.75rem;
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        color: #1e293b;
        background: #f8fafc;
        outline: none;
        transition: border-color 0.2s;
    }

    .error-404-search input[type="search"]:focus {
        border-color: #3b82f6;
        background: #fff;
    }

    .error-404-search button[type="submit"] {
        background: #2563eb;
        color: #fff;
        border: none;
        padding: 0.75rem 1.1rem;
        border-radius: 0 0.75rem 0.75rem 0;
        cursor: pointer;
        transition: background 0.2s;
        display: flex;
        align-items: center;
    }

    .error-404-search button[type="submit"]:hover {
        background: #1d4ed8;
    }

    /* Suggested links */
    .error-404-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: center;
    }

    .error-404-links a {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        background: rgba(255,255,255,0.8);
        border: 1.5px solid #e2e8f0;
        color: #475569;
        padding: 0.4rem 1rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s;
    }

    .error-404-links a:hover {
        background: #eff6ff;
        border-color: #bfdbfe;
        color: #1d4ed8;
        transform: translateY(-1px);
        text-decoration: none;
    }

    /* Decorative blobs */
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.25;
        pointer-events: none;
    }
    .blob-1 {
        width: 400px; height: 400px;
        background: #3b82f6;
        top: -120px; right: -100px;
        animation: blob-move 8s ease-in-out infinite;
    }
    .blob-2 {
        width: 300px; height: 300px;
        background: #6366f1;
        bottom: -80px; left: -80px;
        animation: blob-move 10s ease-in-out infinite reverse;
    }
    .blob-3 {
        width: 200px; height: 200px;
        background: #0ea5e9;
        top: 40%; right: 5%;
        animation: blob-move 7s ease-in-out infinite 2s;
    }

    @keyframes blob-move {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33%       { transform: translate(20px, -20px) scale(1.05); }
        66%       { transform: translate(-15px, 10px) scale(0.97); }
    }
</style>

<main id="primary" class="site-main">
    <section class="error-404-page error-404 not-found">
        <!-- Decorative blobs -->
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

        <div class="error-404-container">

            <!-- Badge -->
            <div>
                <span class="error-404-badge">Lỗi trang không tìm thấy</span>
            </div>

            <!-- Big number with icon -->
            <div style="position: relative; display: inline-block; margin-bottom: 1.5rem;">
                <span class="error-404-number">404</span>
                <div class="error-404-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <!-- Title & Description -->
            <h1 class="error-404-title">Ối! Trang này không tồn tại</h1>
            <p class="error-404-desc">
                Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.<br>
                Đừng lo lắng — hãy để chúng tôi giúp bạn tìm đường về nhà!
            </p>

            <!-- Action Buttons -->
            <div class="error-404-actions">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-home" id="btn-back-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Về trang chủ
                </a>
                <button class="btn-back" onclick="history.back()" id="btn-go-back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Quay lại
                </button>
            </div>

            <!-- Search Box -->
            <div class="error-404-search">
                <p>Hoặc tìm kiếm nội dung bạn cần</p>
                <?php get_search_form(); ?>
            </div>

            <!-- Quick Links -->
            <div class="error-404-links">
                <a href="<?php echo esc_url(home_url('/')); ?>" id="link-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    Trang chủ
                </a>
                <a href="<?php echo esc_url(home_url('/rooms')); ?>" id="link-rooms">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    Phòng & Giá
                </a>
                <a href="<?php echo esc_url(home_url('/booking')); ?>" id="link-booking">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Đặt phòng
                </a>
                <a href="<?php echo esc_url(home_url('/lien-he')); ?>" id="link-contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Liên hệ
                </a>
                <a href="<?php echo esc_url(home_url('/dich-vu')); ?>" id="link-services">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                    Dịch vụ
                </a>
            </div>

        </div>
    </section>
</main>

<script>
    // Override WordPress default search form style
    document.addEventListener('DOMContentLoaded', function () {
        const searchForm = document.querySelector('.error-404-search form');
        if (searchForm) {
            searchForm.style.display = 'flex';
            searchForm.style.gap = '0';
        }

        const searchInput = document.querySelector('.error-404-search input[type="search"]');
        if (searchInput) {
            searchInput.placeholder = 'Tìm kiếm trang, phòng, dịch vụ...';
        }

        const searchBtn = document.querySelector('.error-404-search button[type="submit"]');
        if (searchBtn) {
            searchBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>';
        }
    });
</script>

<?php get_footer(); ?>
