(function ($) {
    window["cozyBlockProductCarouselInit"] = (e) => {
        const n = e.replace(/-/gi, "_");
        const blockOptions = window[`cozyProductCarousel_${n}`];
        const productCarouselClass = `#cozyBlock_${n}`;

        const $cozyProductCarousel = $(productCarouselClass);
        const $innerBlocks = $cozyProductCarousel.find(".wp-block-post");

        $innerBlocks.each(function () {
            const $block = $(this);

            if (blockOptions.layout === "carousel") {
                $block.addClass("swiper-slide");
            }

            const $price = $block.find(".wc-block-components-product-price ins .amount bdi");
            const $regularPrice = $block.find(".wc-block-components-product-price del .amount bdi");

            if ($price.length && blockOptions.saleBadge.enabled) {
                let $saleBadge = $block.find(".cozy-sale-badge");

                if (!$saleBadge.length) {
                    $saleBadge = $("<div/>", { class: "cozy-sale-badge" });
                }

                // Handle Label Before
                let $labelBefore = $saleBadge.find(".label-before");
                if (!$labelBefore.length) {
                    $labelBefore = $("<div/>", { class: "label-before" });
                }
                $labelBefore.text(blockOptions.saleBadge.labelBefore);

                // Handle Content
                let $content = $saleBadge.find(".content");
                if (!$content.length) {
                    $content = $("<div/>", { class: "content" });
                }
                $content.text("");

                const priceNumberOnly = parseFloat($price.text().replace(/[^\d.]/g, ""));
                const regularNumberOnly = parseFloat($regularPrice.text().replace(/[^\d.]/g, ""));

                if (blockOptions.saleBadge.contentType === "default") {
                    $content.text("Sale");
                }
                
                if (blockOptions.saleBadge.contentType === "amount") {
                    const diff = regularNumberOnly - priceNumberOnly;
                    switch (blockOptions.currencyPosition) {
                        case "left":
                            $content.text(blockOptions.currencySymbol + diff);
                            break;
                        case "left_space":
                            $content.text(blockOptions.currencySymbol + " " + diff);
                            break;
                        case "right":
                            $content.text(diff + blockOptions.currencySymbol);
                            break;
                        case "right_space":
                            $content.text(diff + " " + blockOptions.currencySymbol);
                            break;
                    }
                }

                if (blockOptions.saleBadge.contentType === "percent") {
                    const percent = ((regularNumberOnly - priceNumberOnly) / regularNumberOnly) * 100;
                    $content.text(Number(percent.toFixed(2)).toString() + "%");
                }

                // Handle Label After
                let $labelAfter = $saleBadge.find(".label-after");
                if (!$labelAfter.length) {
                    $labelAfter = $("<div/>", { class: "label-after" });
                }
                $labelAfter.text(blockOptions.saleBadge.labelAfter);

                // Build and Append Badge
                $saleBadge.append($labelBefore, $content, $labelAfter);

                const $featuredImage = $block.find(".wp-block-post-featured-image");
                if ($featuredImage.length) {
                    $featuredImage.append($saleBadge);
                }
            }
        });

        // Swiper Configuration
        const sliderAttr = {
            init: true,
            loop: blockOptions.sliderOptions.loop,
            speed: blockOptions.sliderOptions.speed,
            centeredSlides: blockOptions.sliderOptions.centeredSlides,
            slidesPerView: blockOptions.sliderOptions.slidesPerView,
            spaceBetween: blockOptions.sliderOptions.spaceBetween,
            navigation: {
                nextEl: `${productCarouselClass} .swiper-button-next.cozy-block-button-next`,
                prevEl: `${productCarouselClass} .swiper-button-prev.cozy-block-button-prev`,
            },
            pagination: {
                clickable: true,
                el: `${productCarouselClass} .swiper-pagination`,
            },
            breakpoints: {
                100: { slidesPerView: 1 },
                767: {
                    slidesPerView: blockOptions.sliderOptions.slidesPerView <= 2 
                        ? blockOptions.sliderOptions.slidesPerView 
                        : 2,
                },
                1024: {
                    slidesPerView: blockOptions.sliderOptions.slidesPerView <= 3 
                        ? blockOptions.sliderOptions.slidesPerView 
                        : 3,
                },
                1180: { slidesPerView: blockOptions.sliderOptions.slidesPerView },
            },
        };

        if (blockOptions.sliderOptions.autoplay.status) {
            sliderAttr.autoplay = { ...blockOptions.sliderOptions.autoplay };
        }

        // Initialize Swiper
        new Swiper(
            productCarouselClass + " .cozy-product-carousel__swiper-container",
            sliderAttr,
        );
    };
})(jQuery);