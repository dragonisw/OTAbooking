import { __ } from "@wordpress/i18n";

import { Icon, Popover } from "@wordpress/components";
import { desktop, tablet, mobile } from "@wordpress/icons";

import { useState, useEffect } from "@wordpress/element";
import { dispatch, useSelect } from "@wordpress/data";

export const ResponsiveIcons = () => {
	const currentDeviceIcon = (device) => {
		switch (device) {
			case "Desktop":
				return desktop;
			case "Tablet":
				return tablet;
			case "Mobile":
				return mobile;
			default:
				return desktop;
		}
	};

	const [isOpen, setIsOpen] = useState(false);

	// Get current editor preview device
	const editorDeviceType = useSelect((select) =>
		select("core/editor").getDeviceType(),
	);
	let device = editorDeviceType;
	// Sync block attribute when editor preview changes
	useEffect(() => {
		dispatch("core/editor").setDeviceType(device);
	}, [editorDeviceType]);

	const handleDeviceSelect = (device) => {
		dispatch("core/editor").setDeviceType(device);
		setIsOpen(false);
	};

	return (
		<div className="cozy-addons__responsive-attribute-icons">
			<Icon
				icon={currentDeviceIcon(editorDeviceType)}
				onClick={() => setIsOpen(!isOpen)}
				size={24}
				className="cozy-addons__responsive-trigger"
			/>

			{isOpen && (
				<Popover
					className={`cozy-addons__popover ${isOpen ? "is-open" : ""}`}
					onClose={() => setIsOpen(false)}
					focusOnMount
				>
					<div className="cozy-addons__responsive-icons">
						{["Desktop", "Tablet", "Mobile"].map((device) => (
							<Icon
								key={device}
								onClick={() => handleDeviceSelect(device)}
								icon={currentDeviceIcon(device)}
								className={editorDeviceType === device ? "active" : ""}
							/>
						))}
					</div>
				</Popover>
			)}
		</div>
	);
};
