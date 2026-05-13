<?php get_header(); ?>

<main class="bg-white min-h-screen pb-20">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <!-- Hero Section -->
        <section class="relative py-24 bg-slate-900 overflow-hidden">
            <div class="absolute inset-0 opacity-40">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover')); ?>
                <?php else : ?>
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover">
                <?php endif; ?>
            </div>
            <div class="container mx-auto px-4 relative z-10 text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4"><?php the_title(); ?></h1>
                <nav class="flex justify-center items-center text-slate-300 text-sm gap-2">
                    <a href="<?php echo home_url(); ?>" class="hover:text-white transition-colors">Trang chủ</a>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="text-white font-medium"><?php the_title(); ?></span>
                </nav>
            </div>
        </section>

        <!-- Content Section -->
        <div class="container mx-auto px-4 -mt-10 relative z-20">
            <div class="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100">
                <div class="prose prose-slate max-w-none prose-lg prose-blue">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
