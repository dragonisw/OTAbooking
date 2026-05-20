<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>

    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Smooth scrolling for anchor links */
        html {
            scroll-behavior: smooth;
        }

        /* Sticky/Fixed Header Transition */
        #masthead {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Home Page Fixed Header to Overlay Hero */
        .is-home-style #masthead {
            position: fixed !important;
            width: 100%;
            left: 0;
            right: 0;
            z-index: 50;
        }

        #masthead.is-scrolled {
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
            border-bottom: 1px solid rgba(241, 245, 249, 0.8);
        }

        #masthead.is-scrolled .header-container {
            height: 3.5rem;
            /* h-14 */
        }

        /* WordPress Admin Bar Fix */
        .admin-bar #masthead {
            top: 32px;
        }

        @media screen and (max-width: 782px) {
            .admin-bar #masthead {
                top: 46px;
            }
        }

        /* Home Page Transparent Header */
        .is-home-style #masthead:not(.is-scrolled) {
            background-color: transparent !important;
            box-shadow: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .is-home-style #masthead:not(.is-scrolled) .text-slate-800,
        .is-home-style #masthead:not(.is-scrolled) .text-slate-600,
        .is-home-style #masthead:not(.is-scrolled) #mobile-menu-open {
            color: #ffffff !important;
        }

        /* Premium Nav Link Styles */
        #masthead nav ul li a {
            color: #475569 !important; /* slate-600 */
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            padding: 0.5rem 0;
        }

        #masthead nav ul li a:hover {
            color: #2563eb !important; /* blue-600 */
        }

        #masthead nav ul li.current-menu-item a {
            color: #2563eb !important; /* blue-600 */
        }

        #masthead nav ul li a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #2563eb;
            transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        #masthead nav ul li a:hover::after,
        #masthead nav ul li.current-menu-item a::after {
            width: 100%;
        }

        /* Home Page Transparent Header Link Colors */
        .is-home-style #masthead:not(.is-scrolled) nav ul li a {
            color: rgba(255, 255, 255, 0.85) !important;
        }

        .is-home-style #masthead:not(.is-scrolled) nav ul li a:hover {
            color: #ffffff !important;
        }

        .is-home-style #masthead:not(.is-scrolled) nav ul li.current-menu-item a {
            color: #ffffff !important;
        }

        .is-home-style #masthead:not(.is-scrolled) nav ul li a::after {
            background-color: #ffffff;
        }

        /* Home Page Glassmorphism Button */
        body.home #masthead:not(.is-scrolled) .header-btn {
            background-color: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: none;
            color: #ffffff !important;
        }

        body.home #masthead:not(.is-scrolled) .header-btn:hover {
            background-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
            color: #ffffff !important;
        }

        body.home #masthead:not(.is-scrolled) .logo-icon {
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        <?php
        $raw_logo_height = get_theme_mod('logo_height', 80);
        $logo_height = min(max(absint($raw_logo_height), 30), 120); // Cap between 30px and 120px to prevent layout breaks
        $logo_height_scrolled = max(40, $logo_height - 30);
        ?>
        .custom-logo-container img {
            max-height:
                <?php echo min($logo_height, 70) . 'px'; ?>
            ;
            width: auto;
            display: block;
        }

        @media (min-width: 768px) {
            .custom-logo-container img {
                max-height:
                    <?php echo $logo_height . 'px'; ?>
                ;
            }
        }

        #masthead.is-scrolled .custom-logo-container img {
            max-height:
                <?php echo min($logo_height_scrolled, 50) . 'px'; ?>
            ;
        }

        @media (min-width: 768px) {
            #masthead.is-scrolled .custom-logo-container img {
                max-height:
                    <?php echo $logo_height_scrolled . 'px'; ?>
                ;
            }
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementById('masthead');
            const scrollThreshold = 20;

            function handleScroll() {
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
            }

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check

            // Mobile Menu Toggle
            const menuOpenBtn = document.getElementById('mobile-menu-open');
            const menuCloseBtn = document.getElementById('mobile-menu-close');
            const mobileMenu = document.getElementById('mobile-menu');

            if (menuOpenBtn && menuCloseBtn && mobileMenu) {
                menuOpenBtn.addEventListener('click', () => {
                    mobileMenu.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden';
                });

                menuCloseBtn.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                });

                // Close menu when clicking on a link
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('translate-x-full');
                        document.body.style.overflow = '';
                    });
                });
            }
        });
    </script>
</head>


<body <?php body_class('bg-slate-50 text-slate-900 font-inter' . (is_front_page() || is_home() || is_page_template('page-trang-chu.php') ? ' is-home-style' : '')); ?>>
    <?php wp_body_open(); ?>

    <header id="masthead" class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div
            class="container mx-auto px-4 min-h-[4rem] md:min-h-[5rem] py-2 flex items-center justify-between header-container transition-all duration-300">
            <!-- Logo -->
            <div class="flex-1 flex items-center">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center group">
                    <?php if (has_custom_logo()): ?>
                        <div class="custom-logo-container">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else: ?>
                        <div
                            class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3 group-hover:bg-blue-700 transition-colors logo-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <span
                            class="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex flex-none items-center justify-center">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary-menu',
                    'container' => false,
                    'menu_class' => 'flex space-x-8 text-sm font-semibold text-slate-600 whitespace-nowrap',
                    'fallback_cb' => false,
                    'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                ));
                ?>
            </nav>

            <!-- Action Buttons -->
            <div class="flex-1 flex items-center justify-end space-x-4">
                <div class="hidden md:block">
                    <a href="<?php echo esc_url(home_url('/booking')); ?>"
                        class="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 header-btn">
                        Đặt phòng ngay
                    </a>
                </div>

                <!-- Mobile Menu Toggle -->
                <button class="md:hidden p-2 text-slate-600" id="mobile-menu-open">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Modal -->
    <div id="mobile-menu"
        class="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-300 md:hidden">
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-6 border-b border-slate-100">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                    <?php if (has_custom_logo()): ?>
                        <div class="custom-logo-container" style="max-height: 60px;">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else: ?>
                        <span class="text-xl font-bold text-slate-800"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>
                <button id="mobile-menu-close" class="p-2 text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav class="flex-1 overflow-y-auto py-8 px-6">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary-menu',
                    'container' => false,
                    'menu_class' => 'flex flex-col space-y-6 text-xl font-bold text-slate-800',
                    'fallback_cb' => false,
                ));
                ?>
            </nav>
            <div class="p-6 border-t border-slate-100">
                <a href="<?php echo esc_url(home_url('/booking')); ?>"
                    class="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg">
                    Đặt phòng ngay
                </a>
            </div>
        </div>
    </div>

    <div id="content" class="site-content">