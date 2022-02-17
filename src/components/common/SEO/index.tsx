import Head from "next/head"

interface SEOProps {
  title: string
  description?: string
  image?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "https://aerolab-fe-challenge.vercel.app/images/metadata-SEO.png?raw=true",
}) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      <meta name="title" content="Aerolab | Frontend challenge"></meta>
      <link rel="icon" href="/favicon.svg" />
      <meta name="keywords" content="aerolab, challenge, kevin" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aerolab-fe-challenge.vercel.app/" />
      <meta property="og:title" content="Aerolab Challenge" />
      <meta property="og:description" content="This FE challenge is amazing!" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aerolab-fe-challenge.vercel.app/" />
      <meta property="twitter:title" content="Aerolab Challenge" />
      <meta
        property="twitter:description"
        content="El mejor juego de Tutti Frutti, ¡STOP! o Basta! llevado a lo digital, para disfrutar con tus amigos y pasar un buen rato."
      />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:src" content={image} />
    </Head>
  )
}
export default SEO
