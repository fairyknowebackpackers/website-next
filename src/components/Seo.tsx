import Head from "next/head";

interface SeoProps {
    pageTitle: string;
    pageDescription: string;
}

const SEO = ({ pageTitle, pageDescription }: SeoProps) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
    </Head>
);

export default SEO;