import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    private setHtmlProps(): React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLHtmlElement>,
        HTMLHtmlElement
    > {
        return { lang: this.context.defaultLocale };
    }

    private setLinkElements() {
        const { maskIconColor } = this.context.meta;

        return (
            <>
                <link rel="manifest" href="/manifest.json" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link
                    rel="mask-icon"
                    href="/favicons/safari-pinned-tab.svg"
                    color={maskIconColor}
                />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
            </>
        );
    }
    render() {
        return (
            <>
                <Html>
                    <Head>
                        {/* {this.setLinkElements()} */}
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        );
    }
}

export default AppDocument;
