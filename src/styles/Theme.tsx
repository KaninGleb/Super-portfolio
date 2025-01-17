
export const theme = {
    colors: {
        primaryBg: '#282c33',
        secondaryBg: '#2f353b',

        primaryText: '#ffffff',
        primaryLightText: '#abb2bf',
        secondaryText: '#c778dd',

        primaryOutline: '#abb2bf',
        secondaryOutline: '#c778dd',

        primaryHover: 'rgba(199, 120, 221, 0.2)',
        secondaryHover: 'rgba(171, 178, 191, 0.2)',

        primaryAnim: 'rgba(199, 120, 221, 1)',
        primaryLightAnim: 'rgba(199, 120, 221, 0.5)',

        secondaryAnim: 'rgba(171, 178, 191, 1)',
        secondaryLightAnim: 'rgba(171, 178, 191, 0.5)',
    },

    links: {
        primaryLink: { href: "#", children: "Live <~>", color: "#ffffff" },
        secondaryLink: { href: "#", children: "Cached >=", color: "#abb2bf", borderColor: "#abb2bf" },
    },

    media: {
        mediaOff: 'screen and (max-width: 1144px)',
        width1044: 'screen and (max-width: 1044px)',
        tablet: 'screen and (max-width: 768px)',
        mobile: 'screen and (max-width: 576px)',
    },
}