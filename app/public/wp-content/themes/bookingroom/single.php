<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen pb-24">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <!-- Hero Section for Single Post -->
        <section class="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
            <div class="absolute inset-0 opacity-40">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover')); ?>
                <?php else : ?>
                    <!-- Default background if no featured image -->
                    <img src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover">
                <?php endif; ?>
            </div>
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <!-- Categories -->
                <div class="mb-6 flex justify-center gap-2 flex-wrap">
                    <?php 
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) {
                        foreach( $categories as $category ) {
                            echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="bg-blue-600/90 backdrop-blur text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full hover:bg-blue-500 transition-colors">' . esc_html( $category->name ) . '</a>';
                        }
                    }
                    ?>
                </div>

                <!-- Title -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"><?php the_title(); ?></h1>
                
                <!-- Meta Info (Author, Date) -->
                <div class="flex items-center justify-center text-slate-300 text-sm gap-6 flex-wrap">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                            <?php echo get_avatar( get_the_author_meta('ID'), 40 ); ?>
                        </div>
                        <span class="font-medium text-white"><?php the_author(); ?></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span><?php echo get_the_date(); ?></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        <span><?php echo get_post_meta(get_the_ID(), 'post_views_count', true) ?: '0'; ?> lượt xem</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <div class="container mx-auto px-4 -mt-16 relative z-20">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 lg:p-16 border border-slate-100">
                    
                    <!-- Content Prose -->
                    <div class="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
                        <?php the_content(); ?>
                    </div>

                    <!-- Tags & Share -->
                    <div class="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2">
                            <?php 
                            $tags = get_the_tags();
                            if ( $tags ) {
                                foreach( $tags as $tag ) {
                                    echo '<a href="' . esc_url( get_tag_link( $tag->term_id ) ) . '" class="bg-slate-100 text-slate-600 text-sm font-medium px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">#' . esc_html( $tag->name ) . '</a>';
                                }
                            }
                            ?>
                        </div>
                    </div>

                    <!-- Post Navigation -->
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <?php 
                        $prev_post = get_previous_post();
                        if ( !empty( $prev_post ) ): 
                        ?>
                            <a href="<?php echo get_permalink( $prev_post->ID ); ?>" class="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                                <div class="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                </div>
                                <div>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Bài trước</span>
                                    <h4 class="font-bold text-slate-800 line-clamp-2"><?php echo esc_html( $prev_post->post_title ); ?></h4>
                                </div>
                            </a>
                        <?php else: ?>
                            <div></div>
                        <?php endif; ?>

                        <?php 
                        $next_post = get_next_post();
                        if ( !empty( $next_post ) ): 
                        ?>
                            <a href="<?php echo get_permalink( $next_post->ID ); ?>" class="flex items-center justify-end text-right gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                                <div>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Bài tiếp theo</span>
                                    <h4 class="font-bold text-slate-800 line-clamp-2"><?php echo esc_html( $next_post->post_title ); ?></h4>
                                </div>
                                <div class="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </a>
                        <?php endif; ?>
                    </div>

                </div>
            </div>

            <!-- Comments Section -->
            <?php if ( comments_open() || get_comments_number() ) : ?>
                <div class="max-w-4xl mx-auto mt-8">
                    <div class="bg-white rounded-[2rem] shadow-xl shadow-slate-200/30 p-8 md:p-12 border border-slate-100">
                        <?php comments_template(); ?>
                    </div>
                </div>
            <?php endif; ?>

        </div>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
