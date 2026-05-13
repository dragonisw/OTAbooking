(function ($) {
	window["cozyBlockMegaMenuInit"] = (e) => {
		const n = e.replace(/-/gi, "_");
		const attributes = window[`cozyMegaMenu_${n}`];
		const megaMenuClass = `cozyBlock_${n}`;
		const element = $(`#${megaMenuClass}`);

		const body = $("body");

		const openIcon = element.find(
			".cozy-responsive-icon__wrapper.open-icon-wrapper",
		);
		const overlay = $(
			`.cozy-block-wrapper.${megaMenuClass} .cozy-mega-menu__overlay`,
		);
		const closeIcon = element.find(
			".cozy-responsive-icon__wrapper.close-icon-wrapper",
		);
		const navMenu = element.find(".cozy-block-navigation-menu");
		const $megaMenuNavItems = $(
			".wp-block-navigation-item.cozy-mega-menu__item",
		);

		function renderDropdownIcon(submenu) {
			if (attributes.icon.enabled) {
				const $submenu = submenu;
				const $itemContent = $submenu.find(
					".wp-block-navigation-item__content",
				);

				// Check if icon wrapper already exists
				const $iconWrapperExists = $submenu.find(".cozy-dropdown-icon-wrapper");

				if (!$iconWrapperExists.length) {
					const iconAttrs =
						attributes.icon.layout === "fill"
							? `stroke="none" fill="${attributes.icon.color}"`
							: attributes.icon.layout === "outline"
							? `fill="none" stroke="${attributes.icon.color}"`
							: "";

					const $iconWrapper = $(`
						<div class="cozy-dropdown-icon-wrapper">
							<svg
								class="cozy-dropdown-icon"
								width="${attributes.icon.size}"
								height="${attributes.icon.size}"
								${iconAttrs}
								viewBox="${attributes.icon.viewBox.vx} ${attributes.icon.viewBox.vy} ${attributes.icon.viewBox.vw} ${attributes.icon.viewBox.vh}"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								fill="currentColor"
							>
								<path d="${attributes.icon.path}" />
							</svg>
						</div>
					`);

					$iconWrapper.insertAfter($itemContent);
				}
			}
		}

		// Inject mega menu contents in the body
		let isHoveringItem = false;
		let isHoveringDropdown = false;
		let closeTimer = null;

		const menus = [];
		$megaMenuNavItems.each(function () {
			const $this = $(this);
			const template = attributes.megaMenuTemplates.filter((template) =>
				$this.hasClass("template-id-" + template.ID),
			);

			if (!template.length) return;

			const templateID = template[0].ID;

			renderDropdownIcon($this);

			const $dropdownContent = $("<div>", {
				class: "cozy-block-mega-menu__dropdown template-id-" + templateID,
				html: template[0].render,
			});

			// default
			let maxWidth = "1180";

			// read classes from nav item
			($this.attr("class") || "").split(/\s+/).forEach((cls) => {
				const match = cls.match(/^has-custom-width-(\d+)$/);
				if (match) {
					maxWidth = match[1];
				}
			});

			// apply width rules
			const responsiveMegaMenu = $dropdownContent.clone(true, true);
			responsiveMegaMenu.addClass("responsive-only-mega-menu");

			if (!$this.find(responsiveMegaMenu).length) {
				$this.append(responsiveMegaMenu);
			}

			if (attributes?.responsive?.status === "always") {
				return;
			}

			$dropdownContent.addClass(megaMenuClass);
			if ($this.hasClass("full-width")) {
				$dropdownContent.addClass("full-width");
			} else {
				$dropdownContent.addClass("has-custom-width-" + maxWidth);
			}

			if (!body.find($dropdownContent).length) {
				body.append($dropdownContent);
				menus.push($dropdownContent[0]);
			}

			if (!attributes?.openOnClick) {
				/* ───────── Hover logic ───────── */
				function maybeClose() {
					clearTimeout(closeTimer);

					closeTimer = setTimeout(() => {
						if (!isHoveringItem && !isHoveringDropdown) {
							$dropdownContent.removeClass("is-active");
							$dropdownContent.attr("style", "");
							$this.removeClass("is-active");
						}
					}, 100);
				}

				// Menu item
				$this.on("mouseenter", function () {
					clearTimeout(closeTimer);

					isHoveringItem = true;
					isHoveringDropdown = false;

					menus.forEach((m) => $(m).removeClass("is-active"));
					$megaMenuNavItems.removeClass("is-active");

					const rect = this.getBoundingClientRect();
					const initialTop = rect.bottom + 44;

					$dropdownContent.removeClass("is-active").css({
						top: initialTop + "px",
						transition: "top 0.3s ease",
					});

					$dropdownContent[0].offsetHeight;

					$dropdownContent.addClass("is-active");
					$this.addClass("is-active");
					$dropdownContent.css("top", rect.bottom + "px");
				});

				$this.on("mouseleave", () => {
					isHoveringItem = false;
					maybeClose();
				});

				// Dropdown
				$dropdownContent.on("mouseenter", () => {
					clearTimeout(closeTimer);

					isHoveringDropdown = true;
				});

				$dropdownContent.on("mouseleave", () => {
					isHoveringDropdown = false;
					maybeClose();
				});
			}
		});

		function renderDeviceBasedMenu() {
			const status = attributes?.responsive?.status;
			const breakPoint = attributes?.responsive?.breakPoint || 767;
			const screenWidth = $(window).width();

			// Reset everything first
			openIcon.addClass("display-none");
			closeIcon.addClass("display-none");
			overlay.addClass("display-none");
			body.removeClass("overflow-hidden");
			element.removeClass("is-menu-visible");

			if (status === "always") {
				openIcon.removeClass("display-none");

				element
					.find(".wp-block-navigation-item.has-child")
					.on("click", function (e) {
						e.preventDefault();

						const $this = $(this);

						$this
							.siblings($megaMenuNavItems)
							.find(".cozy-block-mega-menu__dropdown.responsive-only-mega-menu")
							.removeClass("is-active");

						// Only immediate submenu of this item
						const $submenu = $this
							.children(".wp-block-navigation__submenu-container")
							.first();

						// Close other submenus at the same level
						$this
							.siblings(".wp-block-navigation-item.has-child")
							.children(".wp-block-navigation__submenu-container")
							.removeClass("show-submenu");

						// Toggle current submenu
						$submenu.toggleClass("show-submenu");

						e.stopPropagation();
					});

				$megaMenuNavItems.each(function () {
					const $this = $(this);
					const $dropdown = $this.find(
						".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
					);

					$this.click(function (e) {
						const $parentSubmenu = $this.closest(
							".wp-block-navigation__submenu-container",
						);

						// Close other dropdowns
						if ($parentSubmenu.length) {
							// Item is inside a submenu: close only sibling submenus
							$parentSubmenu
								.children(".wp-block-navigation-item.has-child")
								.find(".wp-block-navigation__submenu-container")
								.removeClass("show-submenu");

							// Optionally close sibling submenus one level up if nested
							$parentSubmenu
								.siblings(".wp-block-navigation-item")
								.find(
									".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
								)
								.removeClass("is-active");
						} else {
							element
								.find(".wp-block-navigation__submenu-container")
								.removeClass("show-submenu");

							// Item is a top-level nav item: close all other top-level dropdowns
							$megaMenuNavItems
								.not($this)
								.find(
									".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
								)
								.removeClass("is-active is-focused");
						}

						$megaMenuNavItems
							.find(".cozy-block-mega-menu__dropdown.responsive-only-mega-menu")
							.removeClass("is-active");
						// Toggle the clicked dropdown
						$dropdown.toggleClass("is-active");

						// Scroll to nav item if the dropdown is active
						if (
							$dropdown.hasClass("is-active") &&
							!$dropdown.hasClass("is-focused")
						) {
							const offsetTop = $this.offset().top;
							const scrollTop = $(window).scrollTop();
							const windowHeight = $(window).height();
							const dropdownHeight = $dropdown.outerHeight();

							// Only scroll if dropdown would go out of viewport
							if (offsetTop + dropdownHeight > scrollTop + windowHeight) {
								navMenu.stop().animate({ scrollTop: offsetTop }, 500, "swing"); // adjust duration as needed
							}

							$dropdown.toggleClass("is-focused");
						}

						e.stopPropagation();
					});
				});

				// Close element if clicked outside of it
				navMenu.click(function (e) {
					// Responsive mega menu
					const $activeMegaMenu = navMenu.find(
						".cozy-block-mega-menu__dropdown.responsive-only-mega-menu.is-active",
					);

					const $activeSubmenu = navMenu.find(
						".wp-block-navigation__submenu-container.show-submenu",
					);
					if (
						!$activeMegaMenu.is(e.target) &&
						$activeMegaMenu.has(e.target).length === 0
					) {
						$activeMegaMenu.removeClass("is-active");
					}
					if (
						!$activeSubmenu.is(e.target) &&
						$activeSubmenu.has(e.target).length === 0
					) {
						$activeSubmenu.removeClass("show-submenu");
					}
				});

				return;
			}

			if (status === "off") {
				return;
			}

			// Auto (responsive)
			if (screenWidth <= breakPoint) {
				openIcon.removeClass("display-none");
				$megaMenuNavItems.off("mouseenter mouseleave");

				if (attributes?.openOnClick) {
					$megaMenuNavItems.off("click");
				}

				element
					.find(".wp-block-navigation-item.has-child")
					.on("click", function (e) {
						e.preventDefault();

						const $this = $(this);

						$this
							.siblings($megaMenuNavItems)
							.find(".cozy-block-mega-menu__dropdown.responsive-only-mega-menu")
							.removeClass("is-active");

						// Only immediate submenu of this item
						const $submenu = $this
							.children(".wp-block-navigation__submenu-container")
							.first();

						// Close other submenus at the same level
						$this
							.siblings(".wp-block-navigation-item.has-child")
							.children(".wp-block-navigation__submenu-container")
							.removeClass("show-submenu");

						// Toggle current submenu
						$submenu.toggleClass("show-submenu");

						e.stopPropagation();
					});

				$megaMenuNavItems.each(function () {
					const $this = $(this);
					const $dropdown = $this.find(
						".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
					);

					$this.click(function (e) {
						const $parentSubmenu = $this.closest(
							".wp-block-navigation__submenu-container",
						);

						// Close other dropdowns
						if ($parentSubmenu.length) {
							// Item is inside a submenu: close only sibling submenus
							$parentSubmenu
								.children(".wp-block-navigation-item.has-child")
								.find(".wp-block-navigation__submenu-container")
								.removeClass("show-submenu");

							// Optionally close sibling submenus one level up if nested
							$parentSubmenu
								.siblings(".wp-block-navigation-item")
								.find(
									".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
								)
								.removeClass("is-active");
						} else {
							element
								.find(".wp-block-navigation__submenu-container")
								.removeClass("show-submenu");

							// Item is a top-level nav item: close all other top-level dropdowns
							$megaMenuNavItems
								.not($this)
								.find(
									".cozy-block-mega-menu__dropdown.responsive-only-mega-menu",
								)
								.removeClass("is-active is-focused");
						}

						$megaMenuNavItems
							.find(".cozy-block-mega-menu__dropdown.responsive-only-mega-menu")
							.removeClass("is-active");
						// Toggle the clicked dropdown
						$dropdown.addClass("is-active");

						// Scroll to nav item if the dropdown is active
						if (
							$dropdown.hasClass("is-active") &&
							!$dropdown.hasClass("is-focused")
						) {
							const offsetTop = $this.offset().top;
							const scrollTop = $(window).scrollTop();
							const windowHeight = $(window).height();
							const dropdownHeight = $dropdown.outerHeight();

							// Only scroll if dropdown would go out of viewport
							if (offsetTop + dropdownHeight > scrollTop + windowHeight) {
								navMenu.stop().animate({ scrollTop: offsetTop }, 500, "swing"); // adjust duration as needed
							}

							$dropdown.addClass("is-focused");
						}

						e.stopPropagation();
					});
				});

				// Close element if clicked outside of it
				navMenu.click(function (e) {
					// Responsive mega menu
					const $activeMegaMenu = navMenu.find(
						".cozy-block-mega-menu__dropdown.responsive-only-mega-menu.is-active",
					);

					const $activeSubmenu = navMenu.find(
						".wp-block-navigation__submenu-container.show-submenu",
					);
					if (
						!$activeMegaMenu.is(e.target) &&
						$activeMegaMenu.has(e.target).length === 0
					) {
						$activeMegaMenu.removeClass("is-active");
					}
					if (
						!$activeSubmenu.is(e.target) &&
						$activeSubmenu.has(e.target).length === 0
					) {
						$activeSubmenu.removeClass("show-submenu");
					}
				});
			} else {
				$megaMenuNavItems
					.find(".cozy-block-mega-menu__dropdown")
					.removeClass("is-active");
				$megaMenuNavItems.off("click");

				if (!attributes?.openOnClick) {
					element.find(".wp-block-navigation-item.has-child").off("click");
					navMenu.off("click");

					$megaMenuNavItems.each(function () {
						const $this = $(this);

						$this.off("click");

						const match = this.className.match(/template-id-(\d+)/);
						const templateId = match?.[1];

						if (!templateId) return;

						const $dropdownContent = body.find(
							`.cozy-block-mega-menu__dropdown.template-id-${templateId}:not(.responsive-only-mega-menu)`,
						);

						$this.on("mouseenter", function () {
							clearTimeout(closeTimer);

							isHoveringItem = true;

							menus.forEach((m) => $(m).removeClass("is-active"));
							element
								.find(".wp-block-navigation-item.cozy-mega-menu__item")
								.removeClass("is-active");

							const rect = this.getBoundingClientRect();
							const initialTop = rect.bottom + 44;

							// reset + reflow
							$dropdownContent.removeClass("is-active").css({
								top: initialTop + "px",
								transition: "top 0.3s ease",
							});

							$dropdownContent[0].offsetHeight;

							// activate
							$dropdownContent.addClass("is-active");
							$this.addClass("is-active");
							$dropdownContent.css("top", rect.bottom + "px");
						});

						function maybeClose() {
							// delay avoids edge flicker, not a race fix
							closeTimer = setTimeout(() => {
								if (!isHoveringItem && !isHoveringDropdown) {
									$dropdownContent.removeClass("is-active");
									$dropdownContent.attr("style", "");
									$this.removeClass("is-active");
								}
							}, 100);
						}

						$dropdownContent.on("mouseenter", () => {
							clearTimeout(closeTimer);

							isHoveringDropdown = true;
						});

						$this.on("mouseleave", () => {
							isHoveringItem = false;
							maybeClose();
						});

						$dropdownContent.on("mouseleave", function () {
							isHoveringDropdown = false;
							maybeClose();
						});
					});
				} else {
					$megaMenuNavItems.each(function () {
						const $this = $(this);
						const match = this.className.match(/template-id-(\d+)/);
						const templateId = match?.[1];

						if (!templateId) return;

						const $dropdownContent = body.find(
							`.cozy-block-mega-menu__dropdown.template-id-${templateId}:not(.responsive-only-mega-menu)`,
						);

						$this.click(function (e) {
							menus.forEach((m) => $(m).removeClass("is-active"));
							element
								.find(".wp-block-navigation-item.cozy-mega-menu__item")
								.removeClass("is-active");
							$dropdownContent.attr("style", "");

							const rect = this.getBoundingClientRect();
							const initialTop = rect.bottom + 44;

							// reset + reflow
							$dropdownContent.removeClass("is-active").css({
								top: initialTop + "px",
								transition: "top 0.3s ease",
							});

							$dropdownContent[0].offsetHeight;

							// activate
							$dropdownContent.addClass("is-active");
							$this.addClass("is-active");
							$dropdownContent.css("top", rect.bottom + "px");

							e.stopPropagation();
						});
					});

					// Close element if clicked outside of it
					document.addEventListener("click", function (e) {
						// Responsive mega menu
						const $activeMegaMenu = body
							.find(".cozy-block-mega-menu__dropdown.is-active")
							.not(".responsive-only-mega-menu");

						const $activeSubmenu = navMenu.find(
							".wp-block-navigation__submenu-container.show-submenu",
						);
						if (
							!$activeMegaMenu.is(e.target) &&
							$activeMegaMenu.has(e.target).length === 0
						) {
							$activeMegaMenu.removeClass("is-active");
						}
						if (
							!$activeSubmenu.is(e.target) &&
							$activeSubmenu.has(e.target).length === 0
						) {
							$activeSubmenu.removeClass("show-submenu");
						}
					});
				}
			}
		}

		renderDeviceBasedMenu();
		$(window).on("resize", renderDeviceBasedMenu);

		/* ───────── Open ───────── */

		openIcon.on("click", function () {
			overlay.removeClass("display-none");
			closeIcon.removeClass("display-none");
			body.addClass("overflow-hidden");

			requestAnimationFrame(() => {
				element.addClass("is-menu-visible");
			});
		});

		/* ───────── Close ───────── */

		function closeMobileMenu() {
			if (!element.hasClass("is-menu-visible")) return;

			element.removeClass("is-menu-visible");
			closeIcon.addClass("display-none");
			overlay.addClass("display-none");

			body.removeClass("overflow-hidden");

			// let resize logic decide what stays visible
			renderDeviceBasedMenu();
		}

		closeIcon.add(overlay).on("click", closeMobileMenu);

		/* ───────── ESC key ───────── */

		$(document).on("keydown", function (e) {
			if (
				(e.key === "Escape" || e.keyCode === 27) &&
				element.hasClass("is-menu-visible")
			) {
				closeMobileMenu();
			}
		});
	};
})(jQuery);
