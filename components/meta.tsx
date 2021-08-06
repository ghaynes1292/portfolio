import Head from 'next/head'
import siteConfig from '../site-config'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter"  rel="stylesheet" />
        </Head>
    )
}

Meta.defaultProps = {
    title: siteConfig.title,
    keywords: siteConfig.keywords,
    description: siteConfig.description,
}

export default Meta
