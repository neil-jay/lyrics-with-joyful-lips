import { getEntry } from 'astro:content';

export async function getHymnRouteInfo(pathname: string, pageTitle: string) {
	const segments = pathname.split('/').filter(Boolean);
	const isHymnLyricsPage = pathname.startsWith('/hymn-lyrics/') && pathname !== '/hymn-lyrics/introduction/';
	const isCategoryIndex = isHymnLyricsPage && segments.length === 2;
	const isHymnDetailPage = isHymnLyricsPage && segments.length >= 3;
	const categoryEntry = isHymnDetailPage ? await getEntry('docs', `hymn-lyrics/${segments[1]}`) : undefined;
	const categoryName = (isCategoryIndex ? pageTitle : categoryEntry?.data.title)?.replace(
		/\s+—\s+Lyrics from With Joyful Lips$/,
		'',
	);
	const categoryPagePath = segments[1] ? `/hymn-lyrics/${segments[1]}/` : undefined;
	const pageKind = isHymnDetailPage ? 'hymn-detail' : isCategoryIndex ? 'category-index' : undefined;

	return {
		segments,
		isHymnLyricsPage,
		isCategoryIndex,
		isHymnDetailPage,
		categoryName,
		categoryPagePath,
		pageKind,
		showBreadcrumb: isCategoryIndex || (isHymnDetailPage && Boolean(categoryName)),
	};
}
