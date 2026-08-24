(() => {
	const copyIconSvg =
		'<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"/></svg>';
	const copiedIconSvg =
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

	const isClipboardApiAvailable = () =>
		typeof navigator !== 'undefined' && Boolean(navigator.clipboard?.writeText);

	const copyTextFallback = async (text) => {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.left = '-9999px';
		textarea.style.top = '0';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
	};

	const normalizeBlock = (text) =>
		text
			.replace(/\r\n/g, '\n')
			.replace(/\u00a0/g, ' ')
			.replace(/[ \t]+\n/g, '\n')
			.replace(/\n{2,}/g, '\n')
			.trim();

	const normalizeFinal = (text) =>
		text
			.replace(/\r\n/g, '\n')
			.replace(/\u00a0/g, ' ')
			.replace(/[ \t]+\n/g, '\n')
			.replace(/\n{3,}/g, '\n\n')
			.trim();

	const collectText = (start, end) => {
		const parts = [];
		let current = start;
		while (current && current !== end) {
			if (current.nodeType === Node.ELEMENT_NODE) {
				const clone = current.cloneNode(true);
				clone.querySelectorAll('a.sl-anchor-link, .sr-only').forEach((el) => el.remove());
				clone.querySelectorAll('br').forEach((br) => br.replaceWith('\n'));
				const text = normalizeBlock(clone.textContent ?? '');
				if (text) parts.push(text);
			}
			current = current.nextSibling;
		}
		return normalizeFinal(parts.join('\n\n'));
	};

	const getSectionText = (headingWrapper, levelSelector) => {
		const container = headingWrapper.closest('.sl-markdown-content');
		if (!container) return '';
		const wrappers = Array.from(container.querySelectorAll(levelSelector));
		const index = wrappers.indexOf(headingWrapper);
		const endNode = index >= 0 ? wrappers[index + 1] : null;
		return collectText(headingWrapper, endNode);
	};

	const getEntireHymnText = (headingWrapper) => {
		return collectText(headingWrapper, null);
	};

	const setCopiedState = (anchor, icon) => {
		anchor.dataset.copied = 'true';
		window.setTimeout(() => {
			if (anchor.dataset.copied === 'true') {
				delete anchor.dataset.copied;
				if (icon) icon.innerHTML = copyIconSvg;
			}
		}, 1200);
		if (icon) icon.innerHTML = copiedIconSvg;
	};

	const wireAnchor = (anchor, icon, heading, textGetter) => {
		if (!anchor || !icon) return;
		const sr = anchor.querySelector('.sr-only');
		if (anchor.dataset.copyEnhanced === 'true') return;
		anchor.dataset.copyEnhanced = 'true';
		anchor.setAttribute('title', 'Copy lyrics');
		anchor.setAttribute('aria-label', 'Copy lyrics');
		icon.innerHTML = copyIconSvg;
		if (sr) sr.textContent = `Copy "${heading?.textContent?.trim() ?? 'lyrics'}"`;

		anchor.addEventListener('click', async (event) => {
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			event.preventDefault();
			let text = '';
			try {
				text = textGetter();
			} catch {
				return;
			}
			if (!text) return;
			try {
				if (isClipboardApiAvailable()) {
					await navigator.clipboard.writeText(text);
				} else {
					await copyTextFallback(text);
				}
				setCopiedState(anchor, icon);
			} catch {}
		});
	};

	const decorate = (headingWrapper, level, mode) => {
		const heading = headingWrapper.querySelector(`h${level}`);
		const anchor = headingWrapper.querySelector('a.sl-anchor-link');
		const icon = anchor?.querySelector('.sl-anchor-icon');
		if (!heading || !anchor || !icon) return;

		let textGetter;
		if (mode === 'single') {
			textGetter = () => getSectionText(headingWrapper, `.sl-heading-wrapper.level-h${level}`);
		} else {
			textGetter = () => getEntireHymnText(headingWrapper);
		}
		wireAnchor(anchor, icon, heading, textGetter);
	};

	const enhanceIndividualHymnPages = () => {
		document
			.querySelectorAll('.sl-markdown-content[data-hymn-lyrics] .sl-heading-wrapper.level-h2')
			.forEach((w) => decorate(w, 2, 'all'));
	};

	const enhanceCategoryIndexPages = () => {
		document
			.querySelectorAll('.sl-markdown-content[data-hymn-lyrics] .sl-heading-wrapper.level-h3')
			.forEach((w) => decorate(w, 3, 'single'));
	};

	const enhance = () => {
		enhanceIndividualHymnPages();
		enhanceCategoryIndexPages();
	};

	const run = () => {
		enhance();
		document.addEventListener('astro:page-load', enhance);
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', run, { once: true });
	} else {
		run();
	}
})();
