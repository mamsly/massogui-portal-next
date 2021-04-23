import { useMediaQuery } from '@optisantis/hooks';

function useWindowBreakpoints() {
    const [isMobileSmall] = useMediaQuery(`(max-width: 370px)`);
    const [isMobileLarge] = useMediaQuery(
        `(min-width: 370px) and (max-width: 576px)`
    );
    const [isTabletSmall] = useMediaQuery(
        `(min-width: 576px) and (max-width: 768px)`
    );
    const [isTabletLarge] = useMediaQuery(
        `(min-width: 768px) and (max-width: 992px)`
    );
    const [isDesktopSmall] = useMediaQuery(
        `(min-width: 992px) and (max-width: 1200px)`
    );
    const [isDesktopLarge] = useMediaQuery(
        `(min-width: 1200px) and (max-width: 1440px)`
    );
    const breakpoint = () => {
        if (isMobileSmall) return 'mobile.small';
        if (isMobileLarge) return 'mobile.large';
        if (isTabletSmall) return 'tablet.small';
        if (isTabletLarge) return 'tablet.large';
        if (isDesktopSmall) return 'desktop.small';
        if (isDesktopLarge) return 'desktop.large';
        return 'widescreen';
    };

    return {
        isMobile: isMobileSmall || isMobileLarge,
        isTablet: isTabletSmall || isTabletLarge,
        isDesktop:
            isDesktopSmall || isDesktopLarge || breakpoint() === 'widescreen',
        breakpoint: breakpoint(),
    };
}

export default useWindowBreakpoints;
